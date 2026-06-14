declare interface UWND_JoinFailed_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_128: UTextBlock;
    ErrorCode: UTextBlock;
    DisconnectReasonText: UTextBlock;
    BTN_Cancel: UBasic_ButtonScalable2_C;
    BlurBackground: UBlurBackground_C;
    BasicWindow_Minimal: UBasic_Menu_MinimalWindow_C;
    OnFailure_CC3F9C614B032F5557D6D2ABEC5D6431(): void;
    OnSuccess_CC3F9C614B032F5557D6D2ABEC5D6431(): void;
    BndEvt__Button_Close_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Cancel(): void;
    OnShown(): void;
    ExecuteUbergraph_WND_JoinFailed(EntryPoint: number): void;
}
declare const UWND_JoinFailed_C: UWND_JoinFailed_C;

