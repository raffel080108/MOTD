declare interface FAutoCompleteCommand {
    Command: FString;
    Desc: FString;
}
declare const FAutoCompleteCommand: FAutoCompleteCommand;

declare interface FGameModeName {
    Name: FString;
    GameMode: FSoftClassPath;
}
declare const FGameModeName: FGameModeName;

declare interface FTemplateMapInfoOverride {
    Thumbnail: FSoftObjectPath;
    Map: FSoftObjectPath;
    DisplayName: FText;
}
declare const FTemplateMapInfoOverride: FTemplateMapInfoOverride;

declare interface UConsoleSettings extends UObject {
    MaxScrollbackSize: number;
    ManualAutoCompleteList: TArray<FAutoCompleteCommand>;
    AutoCompleteMapPaths: TArray<FString>;
    BackgroundOpacityPercentage: number;
    bOrderTopToBottom: boolean;
    bDisplayHelpInAutoComplete: boolean;
    InputColor: FColor;
    HistoryColor: FColor;
    AutoCompleteCommandColor: FColor;
    AutoCompleteCVarColor: FColor;
    AutoCompleteFadedColor: FColor;
}
declare const UConsoleSettings: UConsoleSettings;

declare interface UGameMapsSettings extends UObject {
    LocalMapOptions: FString;
    TransitionMap: FSoftObjectPath;
    bUseSplitscreen: boolean;
    TwoPlayerSplitscreenLayout: ETwoPlayerSplitScreenType;
    ThreePlayerSplitscreenLayout: EThreePlayerSplitScreenType;
    FourPlayerSplitscreenLayout: EFourPlayerSplitScreenType;
    bOffsetPlayerGamepadIds: boolean;
    GameInstanceClass: FSoftClassPath;
    GameDefaultMap: FSoftObjectPath;
    ServerDefaultMap: FSoftObjectPath;
    GlobalDefaultGameMode: FSoftClassPath;
    GlobalDefaultServerGameMode: FSoftClassPath;
    GameModeMapPrefixes: TArray<FGameModeName>;
    GameModeClassAliases: TArray<FGameModeName>;
    SetSkipAssigningGamepadToPlayer1(bSkipFirstPlayer: boolean): void;
    GetSkipAssigningGamepadToPlayer1(): boolean;
    GetGameMapsSettings(): UGameMapsSettings;
}
declare const UGameMapsSettings: UGameMapsSettings;

declare interface UGameNetworkManagerSettings extends UObject {
    MinDynamicBandwidth: number;
    MaxDynamicBandwidth: number;
    TotalNetBandwidth: number;
    BadPingThreshold: number;
    bIsStandbyCheckingEnabled: boolean;
    StandbyRxCheatTime: number;
    StandbyTxCheatTime: number;
    PercentMissingForRxStandby: number;
    PercentMissingForTxStandby: number;
    PercentForBadPing: number;
    JoinInProgressStandbyWaitTime: number;
}
declare const UGameNetworkManagerSettings: UGameNetworkManagerSettings;

declare interface UGameSessionSettings extends UObject {
    MaxSpectators: number;
    MaxPlayers: number;
    bRequiresPushToTalk: boolean;
}
declare const UGameSessionSettings: UGameSessionSettings;

declare interface UGeneralEngineSettings extends UObject {

}
declare const UGeneralEngineSettings: UGeneralEngineSettings;

declare interface UGeneralProjectSettings extends UObject {
    CompanyName: FString;
    CompanyDistinguishedName: FString;
    CopyrightNotice: FString;
    Description: FString;
    Homepage: FString;
    LicensingTerms: FString;
    PrivacyPolicy: FString;
    ProjectID: FGuid;
    ProjectName: FString;
    ProjectVersion: FString;
    SupportContact: FString;
    ProjectDisplayedTitle: FText;
    ProjectDebugTitleInfo: FText;
    bShouldWindowPreserveAspectRatio: boolean;
    bUseBorderlessWindow: boolean;
    bStartInVR: boolean;
    bAllowWindowResize: boolean;
    bAllowClose: boolean;
    bAllowMaximize: boolean;
    bAllowMinimize: boolean;
    EyeOffsetForFakeStereoRenderingDevice: number;
    FOVForFakeStereoRenderingDevice: number;
    TopFOVRatioForFakeStereoRenderingDevice: number;
    DifferenceBetweenEyesForFakeStereoRenderingDevice: number;
}
declare const UGeneralProjectSettings: UGeneralProjectSettings;

declare interface UHudSettings extends UObject {
    bShowHUD: boolean;
    DebugDisplay: TArray<FName>;
}
declare const UHudSettings: UHudSettings;

