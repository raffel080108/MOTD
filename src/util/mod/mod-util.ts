import { ModInfo } from "../../motd/mod-info";
import { FileSystemUtil } from "../file-system-util";
import * as json from "../../modules/json-lua/json-lua";
import { Util } from "../util";
import { Logger } from "./logger";
import { HookCallback } from "../../motd/mod-types";

/**
 * Utility calls that are dependant on {@link ModInfo}
 */
export namespace ModUtil {
    /**
     * Displays a message prompt using ModHub
     */
    export function displayMessage(modHub: ABP_ModHub_C | undefined, message: string, displayTime: number = 3): void {
        ExecuteInGameThread(() => {
            if (modHub === undefined) {
                Logger.log("Error: ModHub is null");
                return;
            }

            modHub.ShowNotification(FText(ModInfo.MOD_NAME), FText(message), displayTime);
        });
    }

    export function hookModActorFunction(functionName: string, callback: HookCallback): void {
        RegisterHook(ModInfo.MOD_ACTOR_PATH + ":" + functionName, callback);
    }
    
    export function getConfigFilePath(configName: string): string {
        return `./ue4ss/Mods/${ModInfo.MOD_NAME}/Config/${configName}.json`;
    }

    export function writeConfigFile(configName: string, data: unknown): boolean {
        return FileSystemUtil.writeToFile(ModUtil.getConfigFilePath(configName), Util.makeJsonPretty(json.encode(data)));
    }

    export function readConfigFileData(configName: string): unknown {
        const fileContents = FileSystemUtil.readFromFile(ModUtil.getConfigFilePath(configName));
        if (fileContents === undefined || fileContents === "") {
            return {};
        }

        const [success, result] = pcall(() => {
            return json.decode(fileContents);
        });

        if (success) {
            return result;
        } else {
            Logger.log(`Invalid json data for file ${configName}.json:\n${result}`);
            return {};
        }
    }

    export function saveConfig(configName: string, data: unknown, callback: (success: boolean) => void, retries?: number, retryDelayMillis?: number): void {
        Util.asyncExecuteWithRetries(() => {
            return [ModUtil.writeConfigFile(configName, data), undefined];
        }, callback, retries, retryDelayMillis);
    }

    export function loadConfig(configName: string, callback: (success: boolean, data: unknown) => void, retries?: number, retryDelayMillis?: number): void {
        Util.asyncExecuteWithRetries(() => {
            const data = ModUtil.readConfigFileData(configName);

            return [data !== undefined, data];
        }, callback, retries, retryDelayMillis);
    }
}