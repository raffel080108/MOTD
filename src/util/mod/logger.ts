import { ModInfo } from "../../motd/mod-info";

export namespace Logger {
    export function log(message: unknown): void {
        print(`[${ModInfo.MOD_NAME}] ${String(message)}`);
    }
}