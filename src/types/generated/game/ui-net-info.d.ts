declare interface UUI_NetInfo_C extends UUserWidget {
    readonly __static_UUI_NetInfo_C: {
        GetPlayerName(PlayerController: AFSDPlayerController, Name: string): void;
        GetPktLossString(Names: string, PktLossIn: string, PktLossOut: string, Ping: string, Jitter: string, IsValid: boolean): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        SlowTick(): void;
        OnNetInfoLevelChanged(NewValue: number): void;
        OnInitialized(): void;
        ExecuteUbergraph_UI_NetInfo(EntryPoint: number): void;
    };
    readonly __properties_UUI_NetInfo_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_PktLossOut: UTextBlock;
        TextBlock_PktLossIn: UTextBlock;
        TextBlock_PktLoss_PlayerName: UTextBlock;
        TextBlock_Ping: UTextBlock;
        TextBlock_Jitter: UTextBlock;
        TextBlock_FPS: UTextBlock;
        PktLossBox: UHorizontalBox;
        Font: FSlateFontInfo;
        Justification: ETextJustify;
        NetInfoLevel: number;
    };
    readonly __staticRegistry: 
        UUI_NetInfo_C['__static_UUI_NetInfo_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_NetInfo_C['__properties_UUI_NetInfo_C'] &
        UUserWidget['__propertyRegistry'];
}

