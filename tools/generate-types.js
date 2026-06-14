const fs = require('fs');
const path = require('path');

process.chdir(path.join(__dirname, '..'));

const originalWriteFile = fs.writeFileSync;
fs.writeFileSync = function(filePath, content, options) {
    if (typeof content === 'string' && content.includes('[]')) {
        content = content.replace(/(?<!\.\.\.[\w_]*):\s*([\w_<>|]+)\[\]/g, ': TArray<$1>');
    }
    return originalWriteFile.call(fs, filePath, content, options);
};

const SOURCE_ROOT = "D:\\SteamLibrary\\steamapps\\common\\Deep Rock Galactic RogueCore\\RogueCore\\Binaries\\Win64\\ue4ss\\Mods\\shared";
const TARGET_ROOT = path.join(process.cwd(), 'src', 'types', 'generated');

const MANUAL_TYPE_OVERRIDES = path.join(process.cwd(), 'src', 'types', 'generator-manual-types.d.ts');

const FOLDER_MAPPINGS = [
	{ src: 'types', dest: 'game' },
	{ src: '', dest: 'root_files', isRootFileMode: true },
];

const FILE_BLACKLIST = new Set([
    'UEHelpers.lua',
]);

const RENAME_TARGETS = {
	'Types.d.ts': 'ue4ss.d.ts'
}

const FORCED_NAMESPACES = new Set([
    'FAnimBlueprintGeneratedConstantData',
    'FAnimBlueprintGeneratedMutableData'
]);

const FORCED_PROPERTY_MAPPING = {
    'FAnimBlueprintGeneratedConstantData': 'AnimBlueprintClassConstantData',
    'FAnimBlueprintGeneratedMutableData': '__AnimBlueprintMutables'
};

const STUB_BLACKLIST = new Set([
    'Array', 'Error', 'Exclude', 'Function', 'InstanceType', 
    'Int32Array', 'Int8Array', 'Object', 'Parameters', 'Partial', 
    'Required', 'ReturnType', 'Symbol', 'Omit', 'Pick', 'Record',
    'Map', 'Set', 'enum', 'extends', 'function', 'null', 
    'throw', 'undefined', 'ArrayIterator', 'Generator', 'table'
]);

const TYPE_MAP = {
    'boolean': 'boolean', 'double': 'number', 'float': 'number',
    'int32': 'number', 'integer': 'number', 'string': 'string',
    'void': 'void', 'nil': 'void', 'any': 'any', 'number': 'number', 'unknown': 'unknown',
    'fname': 'FName', 'fstring': 'FString', 'ftext': 'FText', 'record': 'Record',
    'table': 'Record<string | number, any>', 'function': '(() => void)'
};

const INDEXABLE_KEY_CLASSES = new Set([
    'FString',
    'FName',
    'FText'
]);

const DEFINED_TYPES = new Set();
const USED_TYPES = new Set();
const GENERIC_USAGE_MAP = {};
const GLOBAL_CLASSES_REGISTRY = {}; 
const DUPLICATED_CLASSES = new Set();
const MANUAL_GLOBALS_CACHE = {}; 
const MANUAL_OVERRIDDEN_TYPES = new Set();

function toKebabCase(filename) {
    // Isolate the base name from the extension (.d.ts)
    const extIndex = filename.indexOf('.d.ts');
    if (extIndex === -1) return filename.toLowerCase();

    const baseName = filename.substring(0, extIndex);
    const extension = filename.substring(extIndex);

    const kebabBase = baseName
        // Insert a hyphen before any uppercase letter followed by lowercase ones
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Insert a hyphen between acronyms and adjacent words
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        // Convert any existing underscores into hyphens
        .replace(/_/g, '-')
        // Clean up any double hyphens, spaces, or trailing/leading dash artifacts
        .replace(/[\s\-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase();

    return `${kebabBase}${extension}`;
}

function cleanType(luaType, skipTracking = false) {
    if (!luaType) return 'any';
    
    let clean = luaType.split('#')[0].trim();

    if (!clean.toLowerCase().startsWith('fun(')) {
        let spaceIndex = -1, bracketDepth = 0;
        for (let i = 0; i < clean.length; i++) {
            if (clean[i] === '<') bracketDepth++;
            if (clean[i] === '>') bracketDepth--;
            if ((clean[i] === ' ' || clean[i] === '\t' || clean[i] === '-') && bracketDepth === 0) {
                spaceIndex = i;
                break;
            }
        }
        if (spaceIndex !== -1) {
            clean = clean.substring(0, spaceIndex).trim();
        }
    }

    if (clean.toLowerCase().startsWith('table<')) {
        clean = 'TMap' + clean.substring(5);
    }
	
	let isOptional = clean.endsWith('?');
    if (isOptional) clean = clean.slice(0, -1).trim();
    if (clean.startsWith('(') && clean.endsWith(')')) clean = clean.slice(1, -1).trim();

    if (clean.toLowerCase().startsWith('fun(')) {
        const inlineFuncMatch = clean.match(/^fun\s*\(([^)]*)\)(?:\s*:\s*([\w_<>|?]+))?/i);
        if (inlineFuncMatch) {
            const rawParams = inlineFuncMatch[1] ? inlineFuncMatch[1].trim() : '';
            const rawReturn = inlineFuncMatch[2] ? inlineFuncMatch[2].trim() : 'void';

            if (!rawParams) {
                let resolvedReturn = 'void';
                if (rawReturn && rawReturn !== 'void') {
                    resolvedReturn = cleanType(rawReturn, skipTracking);
                    if (resolvedReturn.includes(',')) resolvedReturn = `[${resolvedReturn}]`;
                }
                return `() => ${resolvedReturn}`;
            }

            let resolvedReturn = 'void';
            if (rawReturn && rawReturn !== 'void') {
                resolvedReturn = cleanType(rawReturn, skipTracking);
                if (resolvedReturn.includes(',')) resolvedReturn = `[${resolvedReturn}]`;
            }

            let formattedParams = '';
            if (rawParams) {
                let paramParts = [];
                let currentParam = '';
                let pDepth = 0, bDepth = 0;

                for (let i = 0; i < rawParams.length; i++) {
                    const char = rawParams[i];
                    if (char === '(') pDepth++;
                    if (char === ')') pDepth--;
                    if (char === '<') bDepth++;
                    if (char === '>') bDepth--;

                    if (char === ',' && pDepth === 0 && bDepth === 0) {
                        paramParts.push(currentParam.trim());
                        currentParam = '';
                    } else {
                        currentParam += char;
                    }
                }
                if (currentParam.trim()) paramParts.push(currentParam.trim());

                formattedParams = paramParts.map(param => {
                    if (param === '...') return '...args: any[]';
                    
                    const colonIndex = param.indexOf(':');
                    if (colonIndex !== -1) {
                        const name = param.substring(0, colonIndex).trim();
                        let type = param.substring(colonIndex + 1).trim();
                        if (name === '...') return '...args: any[]';
                        if (!type || type.match(/^[\s\t\-#]*$/)) type = 'any';
                        return `${name}: ${cleanType(type, skipTracking)}`;
                    }
                    return `${param}: any`;
                }).join(', ');
            }

            return `(${formattedParams}) => ${resolvedReturn}`;
        }
    }
    
    let topLevelCommaIndex = -1, bracketDepth = 0, parenDepth = 0;
    for (let i = 0; i < clean.length; i++) {
        if (clean[i] === '<') bracketDepth++;
        if (clean[i] === '>') bracketDepth--;
        if (clean[i] === '(') parenDepth++;
        if (clean[i] === ')') parenDepth--;
        if (clean[i] === ',' && bracketDepth === 0 && parenDepth === 0) {
            topLevelCommaIndex = i;
            break;
        }
    }
    if (topLevelCommaIndex !== -1) {
        const tupleTypes = clean.split(',').map(t => cleanType(t.trim(), skipTracking)).filter(Boolean);
        return tupleTypes.join(', ');
    }
    
    const genericMatch = clean.match(/^([\w_]+)<(.*)>$/);
    if (genericMatch) {
        const containerName = genericMatch[1];
        const innerContent = genericMatch[2];

        if (!GENERIC_USAGE_MAP[containerName]) {
            GENERIC_USAGE_MAP[containerName] = new Set();
        }
		
		if (!skipTracking && !TYPE_MAP[containerName.toLowerCase()]) {
            USED_TYPES.add(containerName);
        }

        let paramParts = [];
        let currentParam = '';
        let bDepth = 0, pDepth = 0;

        for (let i = 0; i < innerContent.length; i++) {
            const char = innerContent[i];
            if (char === '<') bDepth++; if (char === '>') bDepth--;
            if (char === '(') pDepth++; if (char === ')') pDepth--;

            if (char === ',' && bDepth === 0 && pDepth === 0) {
                paramParts.push(currentParam.trim());
                currentParam = '';
            } else {
                currentParam += char;
            }
        }
        if (currentParam.trim()) paramParts.push(currentParam.trim());

        paramParts.forEach(p => {
            let baseWordMatch = p.match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
            let baseWord = baseWordMatch ? baseWordMatch[0] : null;
            if (baseWord && !TYPE_MAP[baseWord.toLowerCase()]) {
                GENERIC_USAGE_MAP[containerName].add(baseWord);
            }
        });

        const resolvedInners = paramParts.map(p => cleanType(p, skipTracking));

        if (containerName === 'TArray') {
            let inner = resolvedInners[0];
            if (inner.includes('|')) inner = `(${inner})`;
            return isOptional ? `${inner}[] | undefined` : `${inner}[]`;
        }
        if (containerName === 'TMap') {
            let rK = resolvedInners[0];
            let rV = resolvedInners[1] || 'any';
            if (rK === 'any' || (!['string', 'number', 'symbol', 'FName', 'FString'].includes(rK) && !rK.startsWith('string'))) {
                rK = 'string | number | symbol';
            }
            return `Record<${rK}, ${rV}>`;
        }

        const finalGenericSignature = `${containerName}<${resolvedInners.join(', ')}>`;
        return isOptional ? `${finalGenericSignature} | undefined` : finalGenericSignature;
    }

    if (clean.includes('::')) {
        clean = clean.split('::')[0].trim();
    }

    if (clean.includes('|')) {
        const structuralUnions = clean.split('|').map(t => cleanType(t, skipTracking)).filter(Boolean);
        return structuralUnions.join(' | ');
    }

    let isPrimitive = TYPE_MAP[clean.toLowerCase()];
    let baseWordMatch = clean.match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
    let extractedWord = baseWordMatch ? baseWordMatch[0] : null;

    if (extractedWord && !skipTracking && !TYPE_MAP[extractedWord.toLowerCase()]) {
        USED_TYPES.add(extractedWord);
    }

    if (isPrimitive) {
        return isPrimitive;
    }

    if (clean.endsWith('[]')) {
        const inner = clean.slice(0, -2);
        let resolvedInner = cleanType(inner, skipTracking);
        
        return `TArray<${resolvedInner}>`;
    }

    return clean;
}

function isSubclassOf(targetClass, baseCandidate) {
    if (!targetClass || !baseCandidate) return false;
    let current = targetClass;
    const visited = new Set();
    
    while (current) {
        if (current === baseCandidate) return true;
        if (visited.has(current)) break;
        visited.add(current);
        
        const registryData = GLOBAL_CLASSES_REGISTRY[current];
        current = registryData ? registryData.parent : null;
    }
    return false;
}

function preParseInlineBlocks(lines) {
    const blocks = {};
    let trackingClass = '';
    let items = [];

    lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('---@class')) {
            const match = trimmed.match(/---@class\s+([\w_]+)/);
            if (FORCED_NAMESPACES.has(trackingClass)) blocks[trackingClass] = [...items];
            trackingClass = match ? match[1] : '';
            items = [];
        } else if (trimmed.startsWith('---@field') && FORCED_NAMESPACES.has(trackingClass)) {
            const match = trimmed.match(/---@field\s+([\w_]+)\s+([^\r\n]+)/);
            if (match) {
                const fullTypeString = match[2];
                if (fullTypeString) {
                    const cleanTypeString = fullTypeString.split('--')[0].trim();
                    items.push(`        ${match[1]}: ${cleanType(cleanTypeString, true)};`);
                }
            }
        }
    });
    if (FORCED_NAMESPACES.has(trackingClass)) blocks[trackingClass] = [...items];
    return blocks;
}

function parseEmmyLuaFile(lines, filename) {
    const preCapturedBlocks = preParseInlineBlocks(lines);

    let output = `// Auto-Generated Unified Type Header (${filename})\n\n`;
    let activeBlock = null, blockName = '', blockParent = '', blockItems = [];
    let pendingParams = [], pendingReturn = 'void', globalFunctions = [];
    
    const localClasses = {};
    const localEnums = [];
    const localNamespaceFunctions = [];

    const seenBoundMethods = new Set();

    function flushActiveBlock() {
        if (!activeBlock || !blockName) return;
        if (activeBlock === 'enum') {
            localEnums.push(`declare const enum ${blockName} {\n${blockItems.join(',\n')}\n}\n\n`);
        } else if (activeBlock === 'class') {
            localClasses[blockName] = { parent: blockParent, items: [...blockItems] };
        }
        activeBlock = null; blockName = ''; blockParent = ''; blockItems = [];
    }

    lines.forEach(line => {
        const trimmed = line.trim();

        if (trimmed.startsWith('---@')) {
            if (trimmed.startsWith('---@class')) {
                flushActiveBlock();
                const match = trimmed.match(/---@class\s+([\w_]+)(?:\s*:\s*([\w_]+))?/);
                if (match) { 
                    activeBlock = 'class'; 
                    blockName = match[1]; 
                    blockParent = match[2] ? match[2].trim() : ''; 
                    DEFINED_TYPES.add(blockName);
                    if (blockParent) {
                        let parentBaseWord = blockParent.match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
                        if (parentBaseWord) USED_TYPES.add(parentBaseWord[0]);
                    }
                }
            } else if (trimmed.startsWith('---@enum')) {
                flushActiveBlock();
                const match = trimmed.match(/---@enum\s+([\w_]+)/);
                if (match) { 
                    activeBlock = 'enum'; 
                    blockName = match[1]; 
                    DEFINED_TYPES.add(blockName);
                }
            } else if (trimmed.startsWith('---@field') && activeBlock === 'class') {
                const match = trimmed.match(/---@field\s+([\w_]+)\s+([^\r\n]+)/);
                if (match) {
                    const fieldName = match[1];
                    const fullTypeString = match[2];
                    if (fullTypeString) {
                        const cleanTypeString = fullTypeString.split('--')[0].trim();
                        blockItems.push(`    ${fieldName}: ${cleanType(cleanTypeString)};`);
                    }
                }
            } else if (trimmed.startsWith('---@param')) {
                const match = trimmed.match(/---@param\s+([\w_...]+)\s+([^\r\n]+)/);
                if (match) {
                    let paramName = match[1].trim();
                    let rawTypeStr = match[2].split('--')[0].trim();
                    
                    let isParamOptional = rawTypeStr.endsWith('?');
                    if (isParamOptional) {
                        rawTypeStr = rawTypeStr.slice(0, -1).trim();
                    }

                    pendingParams.push({ 
                        name: paramName, 
                        type: cleanType(rawTypeStr),
                        isOptional: isParamOptional
                    });
                }
            } else if (trimmed.startsWith('---@return')) {
                const match = trimmed.match(/---@return\s+([^\r\n#\-]+)/);
                if (match && match[1]) {
                    let resolvedRet = cleanType(match[1]);
                    pendingReturn = resolvedRet.includes(',') ? `[${resolvedRet}]` : resolvedRet;
                }
            } else if (!trimmed.startsWith('---@meta') && !trimmed.startsWith('---@alias')) {
                flushActiveBlock();
            }
        } 
        else if (activeBlock === 'enum' && trimmed.includes('=') && !trimmed.startsWith('function') && !trimmed.startsWith('local')) {
            const match = trimmed.match(/([\w_]+)\s*=\s*(0x[0-9a-fA-F]+|\d+)/);
            if (match) {
                const keyName = match[1];
                const numericValue = match[2];

                if (keyName === blockName) return;

                if (keyName.endsWith('_MAX') || keyName === `${blockName}_MAX`) {
                    return;
                }

                blockItems.push(`    ${keyName} = ${numericValue}`);
            } else {
                const fallbackMatch = trimmed.match(/([\w_]+)\s*=/);
                if (fallbackMatch) {
                    const keyName = fallbackMatch[1];

                    if (keyName === blockName) return;

                    if (keyName.endsWith('_MAX') || keyName === `${blockName}_MAX`) {
                        return;
                    }

                    blockItems.push(`    ${keyName} = "${keyName}"`);
                }
            }
        }
		else if (trimmed.startsWith('function')) {
            const isBoundFunc = trimmed.match(/function\s+([\w_]+)[:.](\w+)\((.*)\)/);
            const isGlobalFunc = trimmed.match(/function\s+(\w+)\((.*)\)/);

            if (isBoundFunc) {
                const boundObj = isBoundFunc[1];
                const funcName = isBoundFunc[2];
                const rawArgs = isBoundFunc[3].split(',').map(a => a.trim()).filter(Boolean);
                
                const uniqueKey = `${boundObj}.${funcName}`;
                if (!seenBoundMethods.has(uniqueKey)) {
                    seenBoundMethods.add(uniqueKey);

                    const argsArray = [];
                    rawArgs.forEach(arg => {
                        if (arg === '...') { argsArray.push('...args: any[]'); return; }
                        
                        const p = pendingParams.find(param => param.name === arg) || 
                                  pendingParams.find(param => param.name.toLowerCase() === arg.toLowerCase());
                        
                        if (p) {
                            const nameWithSuffix = p.isOptional ? `${arg}?` : arg;
                            argsArray.push(`${nameWithSuffix}: ${p.type}`);
                        } else {
                            argsArray.push(`${arg}: any`);
                        }
                    });

                    if (activeBlock === 'class' && blockName === '') {
                        localNamespaceFunctions.push("    export function " + funcName + "(" + argsArray.join(', ') + "): " + pendingReturn + ";");
                    } else {
                        let signature = funcName === "__call" ? `    (${argsArray.join(', ')}): ${pendingReturn};` : `    ${funcName}(${argsArray.join(', ')}): ${pendingReturn};`;

                        if (activeBlock === 'class' && blockName === boundObj) {
                            blockItems.push(signature);
                        } else if (localClasses[boundObj]) {
                            localClasses[boundObj].items.push(signature);
                        } else {
                            if (!GLOBAL_CLASSES_REGISTRY[boundObj]) {
                                GLOBAL_CLASSES_REGISTRY[boundObj] = { parent: '', items: [], files: new Set() };
                            }
                            GLOBAL_CLASSES_REGISTRY[boundObj].items.push(signature);
                            GLOBAL_CLASSES_REGISTRY[boundObj].files.add(filename);
                        }
                    }
                }
            } else if (isGlobalFunc) {
                const funcName = isGlobalFunc[1];
                const rawArgs = isGlobalFunc[2].split(',').map(a => a.trim()).filter(Boolean);
                
                    const argsData = [];
                    rawArgs.forEach(arg => {
                        if (arg === '...') { 
                            argsData.push({ name: arg, type: 'any[]', isRest: true, isOptional: false }); 
                            return; 
                        }
                        const p = pendingParams.find(param => param.name === arg) || 
                        pendingParams.find(param => param.name.toLowerCase() === arg.toLowerCase());
                            
                        let finalParamType = p ? p.type : 'any';
                        
                        if (finalParamType === 'FString') {
                            finalParamType = 'string | FString';
                        } else if (finalParamType === 'FString | undefined') {
                            finalParamType = 'string | FString | undefined';
                        }

                        argsData.push({
                            name: arg,
                            type: finalParamType,
                            isRest: false,
                            isOptional: p ? p.isOptional : false
                        });
                    });

                    // SYSTEMIC POSITION CONFLICT CHECK: Detect if a required argument follows an optional one
                    let hasOptionalSeen = false;
                    let hasInvalidLayoutOrder = false;

                    for (const argObj of argsData) {
                        if (argObj.isOptional) {
                            hasOptionalSeen = true;
                        } else if (hasOptionalSeen && !argObj.isRest) {
                            // A required argument or field sits AFTER an optional parameter!
                            hasInvalidLayoutOrder = true;
                            break;
                        }
                    }

                    // Map down the final strings using the appropriate syntax rule fallback
                    const argsArray = argsData.map(argObj => {
                        if (argObj.isRest) return `...args: any[]`;
                        
                        if (argObj.isOptional) {
                            if (hasInvalidLayoutOrder) {
                                // FALLBACK: Use a union statement instead of a question mark to maintain strict compliance
                                return `${argObj.name}: ${argObj.type} | undefined`;
                            } else {
                                // STANDARD: Suffix with a clean question mark
                                return `${argObj.name}?: ${argObj.type}`;
                            }
                        }
                        return `${argObj.name}: ${argObj.type}`;
                    });

                if (localClasses[funcName]) {
                    localClasses[funcName].items.push(`    (${argsArray.join(', ')}): ${pendingReturn};`);
                } else {
                    if (!GLOBAL_CLASSES_REGISTRY[funcName]) {
                        GLOBAL_CLASSES_REGISTRY[funcName] = { parent: '', items: [], files: new Set() };
                    }
                    GLOBAL_CLASSES_REGISTRY[funcName].items.push(`    (${argsArray.join(', ')}): ${pendingReturn};`);
                    GLOBAL_CLASSES_REGISTRY[funcName].files.add(filename);
                }
            }
            pendingParams = []; pendingReturn = 'void';
        }
    });

    flushActiveBlock();

    if (localNamespaceFunctions.length > 0) {
        const namespaceName = path.basename(filename, '.lua');
        let nsContent = `declare namespace ${namespaceName} {\n${localNamespaceFunctions.join('\n')}\n}\n\n`;
        localEnums.push(nsContent);
        DEFINED_TYPES.add(namespaceName);
    }

    Object.keys(localClasses).forEach(className => {
        if (FORCED_NAMESPACES.has(className)) return;

        const classData = localClasses[className];
        
        if (classData && classData.items) {
            classData.items = classData.items.map(item => {
                if (item.includes('(') && item.includes(')')) {
                    const parts = item.split(')');
                    let signatureParams = parts[0];
                    const signatureReturn = parts.slice(1).join(')');

                    if (signatureParams.includes(': FString')) {
                        signatureParams = signatureParams.replace(/:\s*FString\b/g, ': string | FString');
                    }

                    return signatureParams + ')' + signatureReturn;
                }
                return item;
            });
        }
        
        if (className.endsWith('_C')) {
            FORCED_NAMESPACES.forEach(forcedName => {
                if (localClasses[forcedName]) {
                    const targetPropName = FORCED_PROPERTY_MAPPING[forcedName];
                    const rawFields = localClasses[forcedName].items;
                    const indentFields = rawFields.map(f => `        ${f.trim()}`).join('\n');
                    const inlineBlockString = `{\n${indentFields}\n    }`;

                    const existingIndex = classData.items.findIndex(item => item.trim().startsWith(`${targetPropName}:`));
                    if (existingIndex !== -1) {
                        classData.items[existingIndex] = `    ${targetPropName}: ${inlineBlockString};`;
                    } else {
                        classData.items.unshift(`    ${targetPropName}: ${inlineBlockString};`);
                    }
                }
            });
        }

        if (!GLOBAL_CLASSES_REGISTRY[className]) {
            GLOBAL_CLASSES_REGISTRY[className] = {
                parent: classData.parent,
                items: classData.items,
                files: new Set([filename])
            };
        } else {
            DUPLICATED_CLASSES.add(className);
            GLOBAL_CLASSES_REGISTRY[className].files.add(filename);

            if (GLOBAL_CLASSES_REGISTRY[className].parent !== classData.parent && classData.parent) {
                if (!GLOBAL_CLASSES_REGISTRY[className].parent) {
                    GLOBAL_CLASSES_REGISTRY[className].parent = classData.parent;
                } else {
                    const stemsFromA = isSubclassOf(classData.parent, GLOBAL_CLASSES_REGISTRY[className].parent);
                    const stemsFromB = isSubclassOf(GLOBAL_CLASSES_REGISTRY[className].parent, classData.parent);
                    if (!stemsFromA && !stemsFromB) {
                        GLOBAL_CLASSES_REGISTRY[className].hasConflict = true;
                        GLOBAL_CLASSES_REGISTRY[className].conflictDetails = `Inheritance break: '${GLOBAL_CLASSES_REGISTRY[className].parent}' vs '${classData.parent}'`;
                    }
                }
            }

            classData.items.forEach(newItem => {
                const newItemName = newItem.split(':')[0].trim().replace(/\(\)$/, '');
                
                const existingIndex = GLOBAL_CLASSES_REGISTRY[className].items.findIndex(i => {
                    return i.split(':')[0].trim().replace(/\(\)$/, '') === newItemName;
                });

                if (existingIndex !== -1) {
                    const existingItem = GLOBAL_CLASSES_REGISTRY[className].items[existingIndex];
                    if (existingItem.trim() !== newItem.trim()) {
                        
                        if (newItem.trim().includes('(') && existingItem.trim().includes('(')) {
                            GLOBAL_CLASSES_REGISTRY[className].items.push(newItem);
                            return;
                        }

                        if (newItem.trim().includes('(') !== existingItem.trim().includes('(')) {
                            const isNewItemFunc = newItem.trim().includes('(');
                            const funcLine = isNewItemFunc ? newItem : existingItem;
                            const fieldLine = isNewItemFunc ? existingItem : newItem;
                            
                            const fieldPropParts = fieldLine.split(':');
                            const fieldPropName = fieldPropParts[0].trim();
                            const fieldPropType = fieldPropParts.slice(1).join(':').trim().slice(0, -1);
                            
                            GLOBAL_CLASSES_REGISTRY[className].items[existingIndex] = `    ${fieldPropName}: ${fieldPropType} & (() => any); /* Systemic collision handling intersect */`;
                            return;
                        }

                        const stemsFromA = isSubclassOf(className, GLOBAL_CLASSES_REGISTRY[className].parent);
                        if (!stemsFromA) {
                            GLOBAL_CLASSES_REGISTRY[className].hasConflict = true;
                            GLOBAL_CLASSES_REGISTRY[className].items.push(newItem);
                        }
                    }
                } else {
                    GLOBAL_CLASSES_REGISTRY[className].items.push(newItem);
                }
            });
        }
    });

    let standaloneOutput = localEnums.join('');
    return standaloneOutput;
}

function runPipeline() {
    console.log("Starting universal type translation framework...\n");
	
	if (!fs.existsSync(MANUAL_TYPE_OVERRIDES)) {
        const initialBoilerplate = `// Manual Type Overrides \n// Type definitions placed in this file will be skipped when generating file outputs or stubs\n\n`;
        fs.writeFileSync(MANUAL_TYPE_OVERRIDES, initialBoilerplate, 'utf8');
        console.log(`[Setup] Created blank manual type overrides template at: ${MANUAL_TYPE_OVERRIDES}`);
    }
	
    if (fs.existsSync(MANUAL_TYPE_OVERRIDES)) {
        console.log("[Setup] Parsing manual overrides...");
        const manualContent = fs.readFileSync(MANUAL_TYPE_OVERRIDES, 'utf8');
        
        const manualDeclarations = manualContent.match(/declare\s+(?:const\s+)?(interface|type|enum|class|function|let|var|const)\s+([\w_]+)/g);
        if (manualDeclarations) {
            manualDeclarations.forEach(decl => {
                const tokens = decl.split(/\s+/);
                const token = tokens[tokens.length - 1].replace(/[:()]/g, '').trim();
                if (token) {
                    DEFINED_TYPES.add(token);
                    MANUAL_OVERRIDDEN_TYPES.add(token);
                }
            });
        }
    }

	
    const fileWriteCaches = {};

    FOLDER_MAPPINGS.forEach(map => {
        const sourceDir = path.join(SOURCE_ROOT, map.src);
        if (!fs.existsSync(sourceDir)) return;

        let files = [];
        if (map.isRootFileMode) {
            files = fs.readdirSync(sourceDir).filter(f => fs.statSync(path.join(sourceDir, f)).isFile() && f.endsWith('.lua'));
        } else {
            files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.lua'));
        }

        files.forEach(file => {
			if (FILE_BLACKLIST.has(file)) {
                console.log(`[Setup] Skipping blacklisted source file: ${file}`);
                return;
            }
			
            const lines = fs.readFileSync(path.join(sourceDir, file), 'utf8').split(/\r?\n/);
            const tsResult = parseEmmyLuaFile(lines, file);
            
            const targetDest = map.dest;
            if (!fileWriteCaches[targetDest]) fileWriteCaches[targetDest] = [];
            
            fileWriteCaches[targetDest].push({
                name: `${path.basename(file, '.lua')}.d.ts`,
                rawContent: tsResult,
                sourceClasses: Object.keys(GLOBAL_CLASSES_REGISTRY).filter(k => GLOBAL_CLASSES_REGISTRY[k].files.has(file))
            });
        });
    });

    if (!fs.existsSync(TARGET_ROOT)) {
        fs.mkdirSync(TARGET_ROOT, { recursive: true });
    }
	
    Object.keys(GLOBAL_CLASSES_REGISTRY).forEach(cName => {
        let current = GLOBAL_CLASSES_REGISTRY[cName];
        if (!current || !current.parent) return;

        let ancestorName = current.parent;
        let checkedAncestors = new Set();

        while (ancestorName) {
            if (checkedAncestors.has(ancestorName)) break;
            checkedAncestors.add(ancestorName);

            let ancestorData = GLOBAL_CLASSES_REGISTRY[ancestorName];
            if (ancestorData && ancestorData.items) {
                ancestorData.items.forEach(ancestorItem => {
                    let trimAnc = ancestorItem.trim();
                    // Match bound method definitions like "GetFullName(" or "IsValid("
                    let ancMethodMatch = trimAnc.match(/^([\w_]+)\s*\(/);
                    
                    if (ancMethodMatch) {
                        let methodName = ancMethodMatch[1];
                        
                        // Check if the child class defines a method with the exact same name
                        let childHasMethod = current.items.some(i => i.trim().startsWith(methodName + '('));
                        
                        if (childHasMethod) {
                            // Find out if the child already features this precise signature signature layout
                            // We split on the opening parenthesis to match the unique parameter boundary
                            let exactSigPrefix = trimAnc.split(')')[0] + ')';
                            let childHasExactSig = current.items.some(i => i.trim().startsWith(exactSigPrefix));

                            if (!childHasExactSig) {
                                // Dynamic Injection: Inject the parent's broader/fewer-arg method signature as a valid overload
                                current.items.push(`    ${trimAnc}`);
                            }
                        }
                    }
                });
            }
            ancestorName = ancestorData ? ancestorData.parent : null;
        }
    });

Object.keys(GLOBAL_CLASSES_REGISTRY).forEach(className => {
        const cData = GLOBAL_CLASSES_REGISTRY[className];
        if (!cData || !cData.parent) return;

        let currentParent = cData.parent;
        const visitedParents = new Set();
        const parentMethodsToOverload = [];

        while (currentParent) {
            if (visitedParents.has(currentParent)) break;
            visitedParents.add(currentParent);

            const parentRegistry = GLOBAL_CLASSES_REGISTRY[currentParent];
            if (parentRegistry && parentRegistry.items) {
                parentRegistry.items.forEach(pItem => {
                    const pTrimmed = pItem.trim();
                    if (pTrimmed.includes('(')) {
                        const funcPrefix = pTrimmed.split('(')[0].trim();
                        
                        // Check if our current child class is overriding this method prefix
                        const childOverridesIt = cData.items.some(cItem => cItem.trim().startsWith(`${funcPrefix}(`));
                        if (childOverridesIt) {
                            parentMethodsToOverload.push(`    ${pTrimmed}`);
                        }
                    }
                });
            }
            currentParent = (parentRegistry && parentRegistry.parent) ? parentRegistry.parent : null;
        }

        parentMethodsToOverload.forEach(overloadRow => {
            const alreadyAdded = cData.items.some(item => item.trim() === overloadRow.trim());
            if (!alreadyAdded) {
                cData.items.push(overloadRow);
            }
        });
    });

    Object.keys(GLOBAL_CLASSES_REGISTRY).forEach(className => {
        const cData = GLOBAL_CLASSES_REGISTRY[className];
        if (!cData || !cData.parent) return;

        let currentParent = cData.parent;
        const visitedParents = new Set();
        const parentMethodsToOverload = [];
        
        const fieldsToIntersect = new Set();

        while (currentParent) {
            if (visitedParents.has(currentParent)) break;
            visitedParents.add(currentParent);

            const parentRegistry = GLOBAL_CLASSES_REGISTRY[currentParent];
            if (parentRegistry && parentRegistry.items) {
                parentRegistry.items.forEach(pItem => {
                    const pTrimmed = pItem.trim();
                    
                    if (pTrimmed.includes('(')) {
                        const funcPrefix = pTrimmed.split('(')[0].trim();
                        
                        const childOverridesAsMethod = cData.items.some(cItem => cItem.trim().startsWith(`${funcPrefix}(`));
                        if (childOverridesAsMethod) {
                            parentMethodsToOverload.push(`    ${pTrimmed}`);
                        }

                        const childFieldConflictIndex = cData.items.findIndex(cItem => {
                            const cTrimmed = cItem.trim();
                            return !cTrimmed.includes('(') && cTrimmed.startsWith(`${funcPrefix}:`);
                        });
                        if (childFieldConflictIndex !== -1) {
                            fieldsToIntersect.add(funcPrefix);
                        }
                    }
                });
            }
            currentParent = (parentRegistry && parentRegistry.parent) ? parentRegistry.parent : null;
        }

        parentMethodsToOverload.forEach(overloadRow => {
            const alreadyAdded = cData.items.some(item => item.trim() === overloadRow.trim());
            if (!alreadyAdded) {
                cData.items.push(overloadRow);
            }
        });

        if (fieldsToIntersect.size > 0) {
            cData.items = cData.items.map(item => {
                const trimmed = item.trim();
                if (!trimmed.includes('(') && trimmed.includes(':')) {
                    const propName = trimmed.split(':')[0].trim();
                    if (fieldsToIntersect.has(propName)) {
                        const propTypeParts = item.split(':');
                        const propTypeClean = propTypeParts.slice(1).join(':').trim().slice(0, -1);
                        return `    ${propName}: ${propTypeClean} & (() => any); /* Systemic inheritance field-vs-method collision intersection override */`;
                    }
                }
                return item;
            });
        }
    });

    Object.keys(fileWriteCaches).forEach(subfolder => {
        const fileList = fileWriteCaches[subfolder];
        const targetSubdir = path.join(TARGET_ROOT, subfolder);
        let writtenCount = 0;

        if (fs.existsSync(targetSubdir)) {
            fs.rmSync(targetSubdir, { recursive: true, force: true });
        }

        const PATH_OCCURRENCE_TRACKER = {};

        fileList.forEach(fileData => {
            let finalFileContent = fileData.rawContent;

            fileData.sourceClasses.forEach(cName => {
                if (DUPLICATED_CLASSES.has(cName) || MANUAL_OVERRIDDEN_TYPES.has(cName) || MANUAL_OVERRIDDEN_TYPES.has(cName.toLowerCase())) return;

                const cData = GLOBAL_CLASSES_REGISTRY[cName];
                if (!cData) return;
                
                const parentStr = cData.parent ? ` extends ${cData.parent}` : '';
                
                let interfaceParams = '';
                let globalParams = '';
                let itemStringText = cData.items.join(' ');

                const hasStandaloneK = /:\s*K\b|\bkey:\s*K\b|<K\s*,/.test(itemStringText);
                const hasStandaloneT = /:\s*T\b|\bElement:\s*T\b|<T>/.test(itemStringText);

                if (hasStandaloneK) {
                    interfaceParams = '<K = any, V = any>';
                    globalParams = '<any, any>';
                } else if (GENERIC_USAGE_MAP[cName] || hasStandaloneT) {
                    interfaceParams = '<T = any>';
                    globalParams = '<any>';
                }

                if (INDEXABLE_KEY_CLASSES.has(cName)) {
                    finalFileContent += `declare interface _Internal_${cName}${interfaceParams}${parentStr} {\n${cData.items.join('\n')}\n}\n`;
                    finalFileContent += `declare type ${cName} = string & _Internal_${cName};\n`;
                    finalFileContent += `declare const ${cName}: _Internal_${cName};\n\n`;
                } else {
                    finalFileContent += `declare interface ${cName}${interfaceParams}${parentStr} {\n${cData.items.join('\n')}\n}\n`;
                    finalFileContent += `declare const ${cName}: ${cName}${globalParams};\n\n`;
                }
            });
            
            if (RENAME_TARGETS[fileData.name]) {
                const customRenameName = RENAME_TARGETS[fileData.name];
                fs.writeFileSync(path.join(TARGET_ROOT, customRenameName), finalFileContent, 'utf8');
                console.log(`[Success] Target Map Override Rename: root_files/${fileData.name} ➔ src/types/${customRenameName}`);
            } 
            else {
                let targetFileName = toKebabCase(fileData.name);
                let absoluteTestPath = fileList.length === 1 
                    ? path.join(TARGET_ROOT, targetFileName) 
                    : path.join(targetSubdir, targetFileName);

                let lowercasePathKey = absoluteTestPath.toLowerCase();

                if (PATH_OCCURRENCE_TRACKER[lowercasePathKey]) {
                    PATH_OCCURRENCE_TRACKER[lowercasePathKey]++;
                    const count = PATH_OCCURRENCE_TRACKER[lowercasePathKey];
                    targetFileName = `${targetFileName.slice(0, -5)}-${count}.d.ts`;
                    
                    absoluteTestPath = fileList.length === 1 
                        ? path.join(TARGET_ROOT, targetFileName) 
                        : path.join(targetSubdir, targetFileName);
                        
                    console.log(`[Collision Warning] Case mismatch handled: renaming duplicate file to ${targetFileName}`);
                } else {
                    PATH_OCCURRENCE_TRACKER[lowercasePathKey] = 1;
                }

                if (fileList.length === 1) {
                    fs.writeFileSync(absoluteTestPath, finalFileContent, 'utf8');
                    console.log(`[Success] Flattened single subfolder file to root: src/types/${targetFileName}`);
                } else {
                    if (!fs.existsSync(targetSubdir)) fs.mkdirSync(targetSubdir, { recursive: true });
                    fs.writeFileSync(absoluteTestPath, finalFileContent, 'utf8');
                    writtenCount++;
                }
            }
        });
		
        if (writtenCount > 0) console.log(`[Success] Processed ${writtenCount} files inside: src/types/${subfolder}/`);
    });

    console.log("\nAuditing environment type maps for unresolved dependencies...");
    let stubCount = 0;
    let mergeCount = 0;
    
    let stubOutput = `// Auto-Generated Unresolved Primitives Fallback Stubs\n// Do NOT place custom type definitions in this file, as it is overriden every time the script runs\n\n`;
    let mergedOutput = `// Auto-Generated Merged Multi-Declared Context Structures\n\n`;

    if (DUPLICATED_CLASSES.size > 0) {
        DUPLICATED_CLASSES.forEach(cName => {
            const cData = GLOBAL_CLASSES_REGISTRY[cName];
            const originFiles = Array.from(cData.files).join(', ');
            
            if (cData.hasConflict) {
                console.log(`\x1b[33m[WARNING]\x1b[0m Class '${cName}' contains layout type mismatches across [${originFiles}]. Appending both signatures.`);
                mergedOutput += `// [CONFLICT WARNING] Shared references broken across files: [${originFiles}]\n`;
                if (cData.conflictDetails) mergedOutput += `// Details: ${cData.conflictDetails}\n`;
            }

            const parentStr = cData.parent ? ` extends ${cData.parent}` : '';
            let interfaceParams = '';
            let globalParams = '';
            
            if (GENERIC_USAGE_MAP[cName] && GENERIC_USAGE_MAP[cName].size > 0) {
                const usages = Array.from(GENERIC_USAGE_MAP[cName]);
                let fallbackBound = 'any';
                if (cName === 'TSubclassOf' || usages.includes('UClass') || usages.some(u => u.startsWith('U') || u.startsWith('A'))) {
                    fallbackBound = 'UClass';
                }

                let itemStringText = cData.items.join(' ');
                if (itemStringText.includes(': K') || itemStringText.includes('key: K') || itemStringText.includes('<K,')) {
                    interfaceParams = '<K = any, V = any>'; globalParams = '<any, any>';
                } else {
                    interfaceParams = `<T extends ${fallbackBound} = ${fallbackBound}>`; globalParams = `<${fallbackBound}>`;
                }
            } else {
                let itemStringText = cData.items.join(' ');
                if (itemStringText.includes(': K') || itemStringText.includes('key: K')) {
                    interfaceParams = '<K = any, V = any>'; globalParams = '<any, any>';
                } else if (itemStringText.includes(': T') || itemStringText.includes('Element: T') || itemStringText.includes('<T>')) {
                    interfaceParams = '<T = any>'; globalParams = '<any>';
                }
            }

            mergedOutput += `/** Merged declaration from sources: [${originFiles}] */\n`;
            if (INDEXABLE_KEY_CLASSES.has(cName)) {
                mergedOutput += `declare interface _Internal_${cName}${interfaceParams}${parentStr} {\n${cData.items.join('\n')}\n}\n`;
                mergedOutput += `declare type ${cName} = string & _Internal_${cName};\n`;
                mergedOutput += `declare const ${cName}: _Internal_${cName};\n\n`;
            } else {
                mergedOutput += `declare interface ${cName}${interfaceParams}${parentStr} {\n${cData.items.join('\n')}\n}\n`;
                mergedOutput += `declare const ${cName}: ${cName}${globalParams};\n\n`;
            }
			
            mergeCount++;
            
            DEFINED_TYPES.add(cName);
            DEFINED_TYPES.add(cName.toLowerCase());
        });
    }

    fs.writeFileSync(path.join(TARGET_ROOT, 'merged.d.ts'), mergedOutput, 'utf8');

    const sortedUsedTypes = Array.from(USED_TYPES).sort();
    sortedUsedTypes.forEach(rawUsedType => {
        let usedType = rawUsedType.endsWith('[]') ? rawUsedType.slice(0, -2).trim() : rawUsedType;

        if (!DEFINED_TYPES.has(usedType) && !STUB_BLACKLIST.has(usedType) && !usedType.match(/^\d+$/) && usedType.length > 0) {
            if (MANUAL_GLOBALS_CACHE[usedType]) {
                stubOutput += `${MANUAL_GLOBALS_CACHE[usedType]}\n\n`;
            } else {
                let genericParamSignature = '';
                if (GENERIC_USAGE_MAP[usedType]) {
                    genericParamSignature = '<T = any>';
                }
                stubOutput += `declare type ${usedType}${genericParamSignature} = any;\n`;
                stubCount++;
            }
            DEFINED_TYPES.add(usedType);
        }
    });

    fs.writeFileSync(path.join(TARGET_ROOT, 'unresolved-stubs.d.ts'), stubOutput, 'utf8');
    
    console.log(`[Success] Merged ${mergeCount} split interface modules natively.`);
    console.log(`[Success] Gathered ${stubCount} unresolved types into fallback stubs.`);
    console.log("\nAll type environments synchronized successfully!");
}

runPipeline();
