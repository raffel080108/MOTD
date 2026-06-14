import { UEHelpers } from "ue-helpers";
import { Logger } from "./mod/logger";

export namespace UEUtil {
    export const UE_HELPERS: UEHelpers = _G.require("UEHelpers");
    export const ASSET_REGISTRY_HELPERS = StaticFindObject("/Script/AssetRegistry.Default__AssetRegistryHelpers") as UAssetRegistryHelpers;

    /**
     * Uses local player controller as `worldContextObject`
     */
    export function isServer(): boolean {
        return UEUtil.UE_HELPERS.GetKismetSystemLibrary(false).IsServer(UEUtil.UE_HELPERS.GetPlayerController());
    }

    export function getClassName(object: UObject): string {
        return object.GetClass().GetFName().ToString();
    }

    /**
     * Useful for getting a reference to non-loaded classes
     */
    export function findObjectClassInAssetRegistry(path: string, assetName: string): UClass | undefined {
        if (!UEUtil.ASSET_REGISTRY_HELPERS.IsValid()) {
            Logger.log("Error: AssetRegistryHelpers is not valid");
            return;
        }
                
        const targetClass = UEUtil.ASSET_REGISTRY_HELPERS.GetAsset({
            ["PackageName"]: UEUtil.UE_HELPERS.FindOrAddFName(path + assetName),
            ["AssetName"]: UEUtil.UE_HELPERS.FindOrAddFName(assetName + "_C"),
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
     * @param outer Defaults to using the local player controller if unset
     * @returns The constructed object or `undefined` if the constructed object is not valid
     */
    export function constructAndValidateObject(objectClass: UClass, outer?: UObject, name?: string): UObject | undefined {
        if (!objectClass.IsValid()) {
            return undefined;
        }

        const newObject = StaticConstructObject(objectClass, outer ?? UEUtil.UE_HELPERS.GetPlayerController(), name !== undefined ? FName(name) : undefined);
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
    
    export function getCurrentLevelName(): string | undefined {
        const level = UEUtil.UE_HELPERS.GetPersistentLevel();
        if (!level.IsValid()) {
            return undefined;
        }

        const levelName = level.GetFullName();
        if (levelName === undefined) {
            return undefined;
        }
        
        return UEUtil.getObjectNameFromPath(levelName);
    }
}