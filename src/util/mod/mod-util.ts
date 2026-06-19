import { ModInfo } from "../../motd/mod-info";
import { Logger } from "./logger";

/**
 * Utility calls that are dependant on {@link ModInfo}
 */
export namespace ModUtil {
    export function hookModActorFunction(functionName: string, precallback: UE4SSLHookCallback, postCallback?: UE4SSLHookCallback): void {
        RegisterHook(ModInfo.MOD_ACTOR_PATH + ":" + functionName, precallback, postCallback);
    }
    
    export function getConfigFilePath(configName: string): string {
        return getGameDirectory() + `/Saved/Mods/MOTD/${configName}.json`;
    }

    export function saveConfig(configName: string, data: unknown): void {
        writeFile(ModUtil.getConfigFilePath(configName), JSON.stringify(data, undefined, 2));
    }

    export function loadConfig(configName: string): unknown {
        const fileContents = readFile(ModUtil.getConfigFilePath(configName)) ?? undefined;
        if (fileContents == undefined || fileContents === "") {
            return {};
        }

        let success: boolean;
        let result: unknown;

        try {
            result = JSON.parse(fileContents);
            success = true;
        } catch {
            success = false;
        }

        if (success) {
            return result;
        } else {
            Logger.log(`Invalid json data for file ${configName}.json:\n${result}`);
            return {};
        }
    }
}