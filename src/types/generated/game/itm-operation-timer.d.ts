declare interface UITM_OperationTimer_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TimeText: UTimeText_C;
    TextBlock_OperationText: UTextBlock;
    Overlay_Outer: UOverlay;
    ITM_OperationBase: UITM_OperationBase_C;
    Image_Timeglass: UImage;
    I_Background: UImage;
    OnHover: UWidgetAnimation;
    RotateHourGlass: UWidgetAnimation;
    ShouldGetNewOperation: FITM_OperationTimer_CShouldGetNewOperation;
    Construct(): void;
    UpdateTime(): void;
    BndEvt__ITM_OperationTimer_ITM_OperationBase_K2Node_ComponentBoundEvent_3_OnHovered__DelegateSignature(): void;
    BndEvt__ITM_OperationTimer_ITM_OperationBase_K2Node_ComponentBoundEvent_4_OnUnhovered__DelegateSignature(): void;
    ExecuteUbergraph_ITM_OperationTimer(EntryPoint: number): void;
    ShouldGetNewOperation__DelegateSignature(SlotWidget: UUserWidget): void;
}
declare const UITM_OperationTimer_C: UITM_OperationTimer_C;

