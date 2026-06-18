import { Logger } from "../mod/logger";
import { UEUtil } from "../ue-util";
import { UObjectContainer } from "../uobject-container";

/**
 * Utility functions specifically related to the game `Deep Rock Galactic: Rogue Core`
 */
export namespace GameUtil {
    const functionLibrary: UObjectContainer<UGameFunctionLibrary> = new UObjectContainer();

    export function getGameFunctionLibrary(): UGameFunctionLibrary {
        const functionLibraryObject = functionLibrary.get();
        if (functionLibraryObject != undefined) {
            return functionLibraryObject;
        }

        let newFunctionLibrary = FindFirstOf("GameFunctionLibrary") as UGameFunctionLibrary | undefined;

        if (newFunctionLibrary == undefined || !newFunctionLibrary.IsValid()) {
            newFunctionLibrary = UEUtil.constructAndValidateObject(StaticFindObject("/Script/RogueCore.GameFunctionLibrary") as UClass) as UGameFunctionLibrary;
        }

        if (newFunctionLibrary == undefined) {
            throw new Error("Unable to construct function library at this time");
        }

        functionLibrary.set(newFunctionLibrary);

        return newFunctionLibrary;
    }

    export function getFSDGameState(worldContextObject: UObject): AFSDGameState | undefined {        
        return CallFunction(GameUtil.getGameFunctionLibrary(), "GetFSDGameState", worldContextObject);
    }

    export function getFSDGameInstane(worldContextObject: UObject): UFSDGameInstance | undefined {
        return CallFunction(GameUtil.getGameFunctionLibrary(), "GetFSDGameInstance", worldContextObject);
    }

    export function getLocalFSDPlayerController(worldContextObject: UObject): AFSDPlayerController | undefined {
        const gameInstance = GameUtil.getFSDGameInstane(worldContextObject);
        if (gameInstance == undefined) {
            return undefined;
        }

        return CallFunction(gameInstance, "GetLocalFSDPlayerController");
    }

    export function getLocalPlayerId(worldContextObject: UObject): number | undefined {
        const fsdPlayerController = GameUtil.getLocalFSDPlayerController(worldContextObject);
        if (fsdPlayerController == undefined) {
            Logger.log("WARN: Failed to get local FSDPlayerController");
            return undefined;
        }

        const playerState = CallFunction(fsdPlayerController, "GetFSDPlayerState");
        
        return CallFunction(playerState, "GetPlayerId");
    }

    export function sendChatMessage(worldContextObject: UObject, sender: string, text: string, senderType: EChatSenderType): void {
        const fsdPlayerController = GameUtil.getLocalFSDPlayerController(worldContextObject);
        if (fsdPlayerController == undefined) {
            return;
        }
        
        CallFunction(fsdPlayerController, "Server_NewMessage", sender, text, senderType);
    }

    export function sendGameMessage(worldContextObject: UObject, message: string): void {
        const fsdGameState = GameUtil.getFSDGameState(worldContextObject);
        if (fsdGameState == undefined) {
            return;
        }
        
        const messageLines = [];

        for (const [line] of message.matchAll(/([^\r\n]+)/g)) {
            messageLines.push(line);
        }

        for (const message of messageLines) {
            CallFunction(fsdGameState, "PostGameMessage", message);
        }
    }
}