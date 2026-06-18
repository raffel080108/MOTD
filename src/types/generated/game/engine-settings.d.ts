declare interface FAutoCompleteCommand {
    Command: string;
    Desc: string;
}

declare interface FGameModeName {
    Name: string;
    GameMode: FSoftClassPath;
}

declare interface FTemplateMapInfoOverride {
    Thumbnail: FSoftObjectPath;
    Map: FSoftObjectPath;
    DisplayName: string;
}

declare interface UConsoleSettings extends UObject {
    readonly __properties_UConsoleSettings: {
        MaxScrollbackSize: number;
        ManualAutoCompleteList: FAutoCompleteCommand[];
        AutoCompleteMapPaths: string[];
        BackgroundOpacityPercentage: number;
        bOrderTopToBottom: boolean;
        bDisplayHelpInAutoComplete: boolean;
        InputColor: FColor;
        HistoryColor: FColor;
        AutoCompleteCommandColor: FColor;
        AutoCompleteCVarColor: FColor;
        AutoCompleteFadedColor: FColor;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UConsoleSettings['__properties_UConsoleSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UGameMapsSettings extends UObject {
    readonly __static_UGameMapsSettings: {
        SetSkipAssigningGamepadToPlayer1(bSkipFirstPlayer: boolean): void;
        GetSkipAssigningGamepadToPlayer1(): boolean;
        GetGameMapsSettings(): UGameMapsSettings;
    };
    readonly __properties_UGameMapsSettings: {
        LocalMapOptions: string;
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
        GameModeMapPrefixes: FGameModeName[];
        GameModeClassAliases: FGameModeName[];
    };
    readonly __staticRegistry: 
        UGameMapsSettings['__static_UGameMapsSettings'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameMapsSettings['__properties_UGameMapsSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UGameNetworkManagerSettings extends UObject {
    readonly __properties_UGameNetworkManagerSettings: {
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
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameNetworkManagerSettings['__properties_UGameNetworkManagerSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UGameSessionSettings extends UObject {
    readonly __properties_UGameSessionSettings: {
        MaxSpectators: number;
        MaxPlayers: number;
        bRequiresPushToTalk: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameSessionSettings['__properties_UGameSessionSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UGeneralEngineSettings extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGeneralProjectSettings extends UObject {
    readonly __properties_UGeneralProjectSettings: {
        CompanyName: string;
        CompanyDistinguishedName: string;
        CopyrightNotice: string;
        Description: string;
        Homepage: string;
        LicensingTerms: string;
        PrivacyPolicy: string;
        ProjectID: FGuid;
        ProjectName: string;
        ProjectVersion: string;
        SupportContact: string;
        ProjectDisplayedTitle: string;
        ProjectDebugTitleInfo: string;
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
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeneralProjectSettings['__properties_UGeneralProjectSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UHudSettings extends UObject {
    readonly __properties_UHudSettings: {
        bShowHUD: boolean;
        DebugDisplay: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UHudSettings['__properties_UHudSettings'] &
        UObject['__propertyRegistry'];
}

