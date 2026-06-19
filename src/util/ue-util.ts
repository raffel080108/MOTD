import { Util } from "./util";

export namespace UEUtil {
    export const ASSET_REGISTRY_HELPERS = StaticFindObject("/Script/AssetRegistry.Default__AssetRegistryHelpers") as UAssetRegistryHelpers;
    export const KISMET_SYSTEM_LIBRARY = StaticFindObject("/Script/Engine.Default__KismetSystemLibrary") as UKismetSystemLibrary;
    export const GAMEPLAY_STATICS = StaticFindObject("/Script/Engine.Default__GameplayStatics") as UGameplayStatics;
    export const WIDGET_BLUEPRINT_LIBRARY = StaticFindObject("/Script/UMG.Default__WidgetBlueprintLibrary") as UWidgetBlueprintLibrary;

    export function isServer(worldContextObject: UObject): boolean {
        return CallFunction(UEUtil.KISMET_SYSTEM_LIBRARY, "IsServer", worldContextObject);
    }

    export function getClassName(object: UE4SSLUObject): string {
        return object.GetClass().GetName();
    }

    /**
     * Useful for getting a reference to non-loaded classes
     */
    export function findObjectClassInAssetRegistry(path: string, assetName: string): UClass | undefined {
        const targetClass = CallFunction(UEUtil.ASSET_REGISTRY_HELPERS, "", {
            ["PackageName"]: path + assetName,
            ["AssetName"]: assetName + "_C",
        }) as UClass;

        if (!targetClass.IsValid()) {
            return undefined;
        }

        return targetClass;
    }

    /**
     * @returns `path` `assetName`.`assetName`_C
     */
    export function getFullClassPath(path: string, assetName: string): string {
        return path + assetName + "." + assetName + "_C";
    }

    /**
     * @param outer Defaults to using current UWorld if unset
     * @returns The constructed object or `undefined` if the constructed object is not valid
     */
    export function constructAndValidateObject(objectClass: UClass, outer?: UObject): UE4SSLUObject | undefined {
        if (!objectClass.IsValid()) {
            return undefined;
        }

        const world = UEUtil.getWorld();
        if (world == undefined || !world.IsValid()) {
            throw new Error("Unable to construct UObjects at this time");
        }

        const newObject = NewUObject(objectClass, outer ?? world);
        if (newObject.IsValid()) {
            return newObject;
        } else {
            return undefined;
        }
    }

    /**
     * Trims a full object path to an object name (e.g. `/Game/Path/To/Object/Object.Object_C` -> `Object`)
     */
    export function getObjectNameFromPath(objectPath: string): string {
        const pathParts = objectPath.split("/");
        const fileSegment = pathParts[pathParts.length - 1];

        const dotIndex = fileSegment.indexOf(".");
        const cleanLevelName = dotIndex !== -1 ? fileSegment.substring(0, dotIndex) : fileSegment;

        return cleanLevelName;
    }

    /**
     * Strips class-name/object-type from the start of an object path (e.g. `BlueprintGeneratedClass /Game/Object.Object_C` -> `/Game/Object.Object_C`)
     */
    export function stripClassNameFromObjectPath(objectPath: string): string {
        const firstSlashIndex = objectPath.indexOf("/");
        if (firstSlashIndex === -1) {
            return objectPath; 
        }

        return objectPath.substring(firstSlashIndex);
    }

    export function getWorld(): UWorld | undefined {
        return FindFirstOf("World") as UWorld | undefined;
    }
    
    export function getCurrentLevelName(worldContextObject: UObject): string | undefined {
        const result = CallFunction(UEUtil.GAMEPLAY_STATICS, "GetCurrentLevelName", worldContextObject, true);
        return result;
    }

    export function waitForObject(className: string, callback: (foundObject: UObject) => void): void {
        Util.loop(20, () => {
            const targetObject = FindFirstOf(className);
            if (targetObject == undefined) {
                return false;
            }

            callback(targetObject);

            return true;
        });
    }

    export function waitForLevel(worldContextObject: UObject, levelName: string, callback: () => void): void {
        const handle = setInterval(() => {
            const currentLevelName = UEUtil.getCurrentLevelName(worldContextObject);
            if (currentLevelName == undefined || currentLevelName !== levelName) {
                return;
            }

            clearInterval(handle);
            callback();
        });
    }

    export function getTextInputText(inputWidget: TextInput): string | undefined {
        if (inputWidget.IsValid()) {
            const editableTextWidget = GetProperty(inputWidget, "EditableText");

            if (editableTextWidget != undefined && editableTextWidget.IsValid()) {
                return CallFunction(editableTextWidget, "GetText");
            }
        }
    }
}