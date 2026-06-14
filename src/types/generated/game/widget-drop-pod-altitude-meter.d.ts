declare interface UWidget_DropPod_AltitudeMeter_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlockDepth: UTextBlock;
    Image_41: UImage;
    HeaderText: UTextBlock;
    Basic_Menu_ColorBar_C_149: UBasic_Menu_ColorBar_C;
    Basic_Menu_ColorBar_C_148: UBasic_Menu_ColorBar_C;
    Basic_Menu_ColorBar_146: UBasic_Menu_ColorBar_C;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    AlertBlink: UWidgetAnimation;
    Depth: number;
    UpdateHeader(InText: FText): void;
    UpdateDepthText(): void;
    SetProgress(Progress: number): void;
    Construct(): void;
    OnActiveStageChanged(Stage: UStage): void;
    ExecuteUbergraph_Widget_DropPod_AltitudeMeter(EntryPoint: number): void;
}
declare const UWidget_DropPod_AltitudeMeter_C: UWidget_DropPod_AltitudeMeter_C;

