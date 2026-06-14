declare interface UUI_YourTurn_Banner_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    YourTurn_SizeBox: USizeBox;
    YourTurn_Label_1: UBasic_Label_C;
    YourTurn_Gradient: UUI_GradientMasked_Image_C;
    YourTurn_Background: UUI_ImageTinted_C;
    Timer_SizeBox: USizeBox;
    TimeOut_Label: UBasic_Label_C;
    MultiSelect_Image_Top: UUI_GradientMasked_Image_C;
    MultiSelect_Image_Bottom: UUI_GradientMasked_Image_C;
    CanvasPanel_0: UCanvasPanel;
    YourTurnAnim: UWidgetAnimation;
    SinglePlayerFadeIn: UWidgetAnimation;
    success: boolean;
    OnIntroFinished: FUI_YourTurn_Banner_COnIntroFinished;
    IsYourTurn: boolean;
    HasOpenedPage: boolean;
    HasSlammed: boolean;
    SequenceEvent__ENTRYPOINTUI_YourTurn_Banner_0(): void;
    SequenceEvent__ENTRYPOINTUI_YourTurn_Banner(): void;
    SetTurn(YourTurn: boolean): void;
    UpdateTimeout(Timeout: number, IsNegotiationFinishing: boolean): void;
    SlamSound(): void;
    OnTimerSlam(): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetOpened(): void;
    ExecuteUbergraph_UI_YourTurn_Banner(EntryPoint: number): void;
    OnIntroFinished__DelegateSignature(): void;
}
declare const UUI_YourTurn_Banner_C: UUI_YourTurn_Banner_C;

