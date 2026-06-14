declare interface UUI_FPS_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_FPS: UTextBlock;
    SmoothedDeltaT: number;
    Justification: ETextJustify;
    Font: FSlateFontInfo;
    OnShowFPSChanged(NewValue: boolean): void;
    OnInitialized(): void;
    ExecuteUbergraph_UI_FPS(EntryPoint: number): void;
}
declare const UUI_FPS_C: UUI_FPS_C;

