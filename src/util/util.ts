export namespace Util {
    export function arrayToReadableString(array: unknown[]): string {
        let outStr = "[";

        for (const entry of array) {
            outStr += tostring(entry);

            if (array.indexOf(entry) < array.length - 1) {
                outStr += ", ";
            }
        }

        outStr += "]";

        return outStr;
    }

    export function isValidNumber(input: string, allowDecimals: boolean = true): boolean {
        const inputNumber = tonumber(input);
        if (inputNumber === undefined) {
            return false;
        } else if (!allowDecimals && math.tointeger(inputNumber) !== inputNumber) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Converts a json string to json pretty-printed string
     */
    export function makeJsonPretty(jsonStr: string, indentSpaces: number = 2): string {
        let result = "";
        let indentLevel = 0;
        let inString = false;
        const indentStr = " ".repeat(indentSpaces);

        for (let i = 0; i < jsonStr.length; i++) {
            const char = jsonStr[i];

            if (char === '"' && jsonStr[i - 1] !== '\\') {
                inString = !inString;
                result += char;
                continue;
            }

            if (inString) {
                result += char;
                continue;
            }

            switch (char) {
                case '{':
                case '[':
                    indentLevel++;
                    result += char + "\n" + indentStr.repeat(indentLevel);
                    break;
                case '}':
                case ']':
                    indentLevel--;
                    result += "\n" + indentStr.repeat(indentLevel) + char;
                    break;
                case ',':
                    result += char + "\n" + indentStr.repeat(indentLevel);
                    break;
                case ':':
                    result += ": ";
                    break;
                case ' ':
                case '\n':
                case '\r':
                case '\t':
                    break;
                default:
                    result += char;
                    break;
            }
        }

        return result;
    }

    /**
     * Placeholders are case-sensitive. Placeholders must be wrapped with % in the target string to be replaced
     * 
     * @param placeholders A map of placeholder strings (without %) mapped to the replacement for that placeholder 
     */
    export function substitutePlaceholders(target: string, placeholders: Map<string, string>): string {
        let newString = target;
        for (const [placeholder, replacement] of placeholders.entries()) {
            [newString] = string.gsub(newString, `%%${placeholder}%%`, replacement);
        }

        return newString;
    }

    export function round(number: number, decimals: number = 0): number {
        const decimalFactor = 10 ** decimals;
        return math.floor(number * decimalFactor + 0.5) / decimalFactor;
    }

    export function arrayRemove<T>(array: T[], element: T): void {
        const index = array.indexOf(element);
        if (index === -1) {
            return;
        }
        
        array.splice(index, 1);
    }

    export function mapEntriesAsArray<K, V>(map: Map<K, V>): [K, V][] {
        const entries: [K, V][] = [];

        for (const entry of map.entries()) {
            entries.push(entry);
        }

        return entries;
    }

    /**
     * Will set `key` to 1 if it doesn't exist in the map yet
     */
    export function mapIncrementValue<K>(map: Map<K, number>, key: K): void {
        map.set(key, (map.get(key) ?? 0) + 1);
    }
    
        /**
     * Uses {@link LoopInGameThreadWithDelay}
     * 
     * @param callback Return `true` to cancel the loop
     */
    export function loop(delayMillis: number, callback: () => boolean): void {
        const handle = LoopInGameThreadWithDelay(0, () => {
            const cancel = callback();

            if (cancel) {
                CancelDelayedAction(handle);
            } else {
                SetDelayedActionTimer(handle, delayMillis);
            }
        });
    }

    /**
     * Uses {@link LoopInGameThreadAfterFrames}. Uses {@link LoopInGameThreadWithDelay} to ensure {@link EngineTickAvailable} is `true` before registering loop
     * 
     * @param callback Return `true` to cancel the loop
     */
    export function loopFrames(delayFrames: number, callback: () => boolean, hookRetryDelayMillis: number = 100): void {
        Util.loop(hookRetryDelayMillis, () => {
            if (!EngineTickAvailable) {
                return false;
            }
            
            const handle = LoopInGameThreadAfterFrames(0, () => {
                const cancel = callback();

                if (cancel) {
                    CancelDelayedAction(handle);
                } else {
                    SetDelayedActionTimer(handle, delayFrames);
                }
            });
            
            return true;
        });
    }

    export function loopAsync(delayMillis: number, callback: () => boolean): void {
        ExecuteAsync(() => {
            const cancel = callback();

            if (!cancel) {
                LoopAsync(delayMillis, () => {
                    return callback();
                });
            }
        });
    }

    export function asyncExecuteWithRetries<TResult>(work: () => [success: boolean, result: TResult | undefined], completedCallback: (success: boolean, result: TResult | undefined) => void, retries: number = 5, retryDelayMillis: number = 2000): void {        
        let currentTries = 0;
        Util.loopAsync(retryDelayMillis, () => {
            const [success, result] = work();
            let cancel = true;

            if (!success) {
                cancel = currentTries >= retries;
            }

            if (cancel) {
                completedCallback(success, result);

                return true;
            } else {
                currentTries++;

                return false;
            }
        });
    }
}