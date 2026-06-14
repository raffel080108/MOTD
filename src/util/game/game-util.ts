import { UEUtil } from "../ue-util";
import { UObjectContainer } from "../uobject-container";

/**
 * Utility functions specifically related to the game `Deep Rock Galactic: Rogue Core`
 */
export namespace GameUtil {
    const functionLibrary: UObjectContainer<UGameFunctionLibrary> = new UObjectContainer();

    export function getGameFunctionLibrary(): UGameFunctionLibrary {
        const functionLibraryObject = functionLibrary.get();
        if (functionLibraryObject !== undefined) {
            return functionLibraryObject;
        }

        let newFunctionLibrary = FindFirstOf("GameFunctionLibrary") as UGameFunctionLibrary | undefined;
        if (newFunctionLibrary === undefined || !newFunctionLibrary.IsValid()) {
            newFunctionLibrary = StaticConstructObject(StaticFindObject("/Script/RogueCore.GameFunctionLibrary") as UClass, UEUtil.UE_HELPERS.GetWorld()) as UGameFunctionLibrary;
        }

        functionLibrary.set(newFunctionLibrary);

        return newFunctionLibrary;
    }

    export function getFSDGameState(): AFSDGameState {
        return GameUtil.getGameFunctionLibrary().GetFSDGameState(UEUtil.UE_HELPERS.GetPlayerController());
    }

    export function getFSDGameInstane(): UFSDGameInstance {
        return GameUtil.getGameFunctionLibrary().GetFSDGameInstance(UEUtil.UE_HELPERS.GetPlayerController());
    }

    export function getLocalFSDPlayerController(): AFSDPlayerController {
        return GameUtil.getFSDGameInstane().GetLocalFSDPlayerController();
    }

    export function getLocalPlayerId(): number {
        return GameUtil.getLocalFSDPlayerController().GetFSDPlayerState().GetPlayerId();
    }

    export function sendChatMessage(sender: string, text: string, senderType: EChatSenderType): void {
        GameUtil.getLocalFSDPlayerController().Server_NewMessage(sender, text, senderType);
    }

    export function sendGameMessage(message: string): void {
        const messageLines = [];

        for (const [line] of string.gmatch(message, "([^\r\n]+)")) {
            messageLines.push(line);
        }

        const gameState = GameUtil.getFSDGameState();
        for (const message of messageLines) {
            gameState.PostGameMessage(message);
        }
    }
}