declare interface UITM_MisSel_Timer_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Counter: UTextBlock;
    BlurBackground: UBlurBackground_C;
    Basic_Menu_ColorBar_C_0: UBasic_Menu_ColorBar_C;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    Construct(): void;
    UpdateTime(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_MisSel_Timer(EntryPoint: number): void;
}
declare const UITM_MisSel_Timer_C: UITM_MisSel_Timer_C;

