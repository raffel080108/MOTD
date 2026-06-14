declare interface UUI_NetInfo_C extends UUserWidget {
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
    GetPlayerName(PlayerController: AFSDPlayerController, Name: string | FString): void;
    GetPktLossString(Names: FText, PktLossIn: FText, PktLossOut: FText, Ping: FText, Jitter: FText, IsValid: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    SlowTick(): void;
    OnNetInfoLevelChanged(NewValue: number): void;
    OnInitialized(): void;
    ExecuteUbergraph_UI_NetInfo(EntryPoint: number): void;
}
declare const UUI_NetInfo_C: UUI_NetInfo_C;

