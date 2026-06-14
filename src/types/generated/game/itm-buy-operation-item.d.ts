declare interface UITM_BuyOperationItem_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_PlayerRankReq: UTextBlock;
    TextBlock_OperationText: UTextBlock;
    TextBlock_Cost: UTextBlock;
    Overlay_Outer: UOverlay;
    ITM_OperationBase: UITM_OperationBase_C;
    Image_85: UImage;
    I_Background: UImage;
    OnHover: UWidgetAnimation;
    OnSlotBought: FITM_BuyOperationItem_COnSlotBought;
    OperationRequirement: FDeploymentSlotRequirement;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__ITM_BuyOperationItem_ITM_OperationBase_K2Node_ComponentBoundEvent_3_OnClicked__DelegateSignature(): void;
    BndEvt__ITM_BuyOperationItem_ITM_OperationBase_K2Node_ComponentBoundEvent_4_OnHovered__DelegateSignature(): void;
    BndEvt__ITM_BuyOperationItem_ITM_OperationBase_K2Node_ComponentBoundEvent_5_OnUnhovered__DelegateSignature(): void;
    ExecuteUbergraph_ITM_BuyOperationItem(EntryPoint: number): void;
    OnSlotBought__DelegateSignature(SlotWidget: UUserWidget): void;
}
declare const UITM_BuyOperationItem_C: UITM_BuyOperationItem_C;

