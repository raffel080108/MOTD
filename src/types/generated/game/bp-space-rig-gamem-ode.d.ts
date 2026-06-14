declare interface ABP_SpaceRig_Gamemode_C extends AFSDGameModeSpaceRig {
    UberGraphFrame: FPointerToUberGraphFrame;
    DifficultyManager: UDifficultyManager;
    DefaultSceneRoot: USceneComponent;
    GetLevelForStartingStage(): FString;
    ClearControllerCharacter(Controller: AController): void;
    PlayerCanRestart(Player: APlayerController): boolean;
    SelectRandomAvailableClass(Player: AFSDPlayerState): void;
    ChoosePlayerStart(Player: AController): AActor;
    GetGameState(GameState: ABP_GameState_SpaceRig_C): void;
    GetDefaultPawnClassForController(InController: AController): UClass;
    OnFailure_1E75EB674DDE2C1E6C7EC18D18AFDB55(): void;
    OnSuccess_1E75EB674DDE2C1E6C7EC18D18AFDB55(): void;
    OnFailure_509E599D4BB91C15BA2979B190501E9F(): void;
    OnSuccess_509E599D4BB91C15BA2979B190501E9F(): void;
    ReceiveBeginPlay(): void;
    OnCountdownComplete(): void;
    K2_OnLogout(ExitingController: AController): void;
    K2_OnRestartPlayer(NewPlayer: AController): void;
    InstantlyStartMission(): void;
    ExecuteUbergraph_BP_SpaceRig_Gamemode(EntryPoint: number): void;
}
declare const ABP_SpaceRig_Gamemode_C: ABP_SpaceRig_Gamemode_C;

