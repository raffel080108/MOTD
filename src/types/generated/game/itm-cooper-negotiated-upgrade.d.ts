declare interface UITM_CooperNegotiatedUpgrade_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Unlock_Icon: UImage;
    Unlock_Header: UBasic_Label_C;
    Unlock_Description: URichTextBlock;
    UI_Gradient_Background: UUI_Gradient_Background_C;
    SelectedBy_SizeBox: USizeBox;
    SelectedBy_Label: UBasic_Label_C;
    Root_Overlay: UOverlay;
    Icon_Glow: UUI_GlowBackground_C;
    Icon_Button: UButton;
    Corner_RT: UBasic_Image_C;
    Corner_RB: UBasic_Image_C;
    Corner_LT: UBasic_Image_C;
    Corner_LB: UBasic_Image_C;
    Background_Outline: UBasic_Image_C;
    Background_Frame: UBasic_Image_C;
    Background: UBasic_Image_C;
    AnimHovered: UWidgetAnimation;
    Unlock: FBXEUnlockInstance;
    OnClicked: FITM_CooperNegotiatedUpgrade_COnClicked;
    Index: number;
    SelectionActive: boolean;
    SetLinkedHovered(InLinkedHovered: boolean): void;
    SetSelected(inIsSelected: boolean): void;
    SetSelectionActive(InIsActive: boolean): void;
    SetOutline(InColor: FLinearColor): void;
    FromUnlock(InUnlock: FBXEUnlockInstance, InIndex: number): void;
    Construct(): void;
    BndEvt__ITM_CooperNegotiatedUpgrade_Icon_Button_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__ITM_CooperNegotiatedUpgrade_Icon_Button_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__ITM_CooperNegotiatedUpgrade_Icon_Button_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_ITM_CooperNegotiatedUpgrade(EntryPoint: number): void;
    OnClicked__DelegateSignature(InIndex: number): void;
}
declare const UITM_CooperNegotiatedUpgrade_C: UITM_CooperNegotiatedUpgrade_C;

