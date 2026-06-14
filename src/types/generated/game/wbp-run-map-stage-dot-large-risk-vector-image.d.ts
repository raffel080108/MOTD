declare interface UWBP_RunMap_StageDotLarge_RiskVectorImage_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_Overlay: UOverlay;
    Icon_Image: UBasic_Image_C;
    HoverButton: UButton;
    HoverAnchor: UMenuAnchor;
    RiskVectorToShow: URiskVector;
    OnGetUserMenuContent(): UUserWidget;
    SetRiskVector(RiskVector: URiskVector): void;
    SetInformation(InType: EVoteOptionActionType, InIcon: UTexture2D): void;
    BndEvt__WBP_RunMap_StageDotLarge_RiskVectorImage_HoverButton_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__WBP_RunMap_StageDotLarge_RiskVectorImage_HoverButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_WBP_RunMap_StageDotLarge_RiskVectorImage(EntryPoint: number): void;
}
declare const UWBP_RunMap_StageDotLarge_RiskVectorImage_C: UWBP_RunMap_StageDotLarge_RiskVectorImage_C;

