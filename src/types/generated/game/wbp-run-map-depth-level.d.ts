declare interface UWBP_RunMap_DepthLevel_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TooltipAnchor: UMenuAnchor;
    PressButton: UButton;
    PadlockImage: UImage;
    Gradient_2: UImage;
    Gradient_1: UImage;
    DepthText: UTextBlock;
    ContentBox: UOverlay;
    ButtonBox: UOverlay;
    Background_Outline: UImage;
    Background: UImage;
    PlayUnlockAnimation: UWidgetAnimation;
    OnClicked: FWBP_RunMap_DepthLevel_COnClicked;
    DepthLevel: ERunDepth;
    bIsSelected: boolean;
    bIsUnlocked: boolean;
    GetTooltip(): UUserWidget;
    PlayHoverSound(): void;
    PlayClickSound(): void;
    UpdateState(): void;
    SetSelected(NewSelected: boolean): void;
    SetUnlocked(NewUnlocked: boolean): void;
    IsSelected(bIsSelected: boolean): void;
    GetDepthLevel(DepthLevel: ERunDepth): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__ITEM_RunSelection_DepthLevel_PressButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__ITEM_RunSelection_DepthLevel_PressButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__ITEM_RunSelection_DepthLevel_PressButton_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    Construct(): void;
    ExecuteUbergraph_WBP_RunMap_DepthLevel(EntryPoint: number): void;
    OnClicked__DelegateSignature(DepthLevel: UWBP_RunMap_DepthLevel_C): void;
}
declare const UWBP_RunMap_DepthLevel_C: UWBP_RunMap_DepthLevel_C;

