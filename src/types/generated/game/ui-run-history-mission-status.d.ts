declare interface UUI_RunHistory_MissionStatus_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    MissionStatusGradient: UImage;
    MissionStatusBorder: UBorder;
    MissionStatus_Text: UTextBlock;
    Image_77: UImage;
    Image_1: UImage;
    Image: UImage;
    MissionStatusPreview: boolean;
    SetMissionStatus(success: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_RunHistory_MissionStatus(EntryPoint: number): void;
}
declare const UUI_RunHistory_MissionStatus_C: UUI_RunHistory_MissionStatus_C;

