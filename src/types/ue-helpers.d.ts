export namespace UEHelpersNamespace {
    export function GetUEHelpersVersion(): UObject;
    export function GetEngine(): UEngine;
    export function GetGameInstance(): UGameInstance;
    export function GetGameViewportClient(): UGameViewportClient;
    export function GetPlayerController(): APlayerController;
    export function GetPlayer(): APawn;
    export function GetWorld(): UWorld;
    export function GetPersistentLevel(): ULevel;
    export function GetGameModeBase(): AGameModeBase;
    export function GetGameStateBase(): AGameStateBase;
    export function GetWorldSettings(): AWorldSettings;
    export function GetWorldContextObject(): UObject;
    export function GetAllPlayerStates(): TArray<APlayerState>;
    export function GetAllPlayers(): TArray<APawn>;
    export function GetActorFromHitResult(HitResult: FHitResult): AActor | UObject;
    export function GetGameplayStatics(ForceInvalidateCache: boolean): UGameplayStatics;
    export function GetKismetSystemLibrary(ForceInvalidateCache: boolean): UKismetSystemLibrary;
    export function GetKismetMathLibrary(ForceInvalidateCache: boolean): UKismetMathLibrary;
    export function GetKismetStringLibrary(ForceInvalidateCache: boolean): UKismetStringLibrary;
    export function GetKismetTextLibrary(ForceInvalidateCache: boolean): UKismetTextLibrary;
    export function GetGameMapsSettings(ForceInvalidateCache: boolean): UGameMapsSettings;
    export function FindFName(Name: string): FName;
    export function AddFName(Name: string): FName;
    export function FindOrAddFName(Name: string): FName;
}
export type UEHelpers = typeof UEHelpersNamespace;