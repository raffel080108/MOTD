declare interface UWBP_RunMap_RunHeader_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_RunMap_MapIcon_Boss: UWBP_RunMap_BossIcon_Frame_C;
    VerticalBox_Background: UVerticalBox;
    RC_LineWithBackgroundHalf: URC_LineWithBackgroundHalf_C;
    Overlay_Depth: UOverlay;
    NameText: UTextBlock;
    Image_Background: UImage;
    HorizontalBox: UHorizontalBox;
    DescriptionText: UTextBlock;
    ShowBackground: boolean;
    ShowTitle: boolean;
    CenterText: boolean;
    MakeDepthStickOut: boolean;
    SetRun(Run: URun): void;
    SetDescription(Description: FText): void;
    SetIcon(Icon: FObjectiveMissionIcon): void;
    SetName(Name: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunHeader(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunHeader_C: UWBP_RunMap_RunHeader_C;

