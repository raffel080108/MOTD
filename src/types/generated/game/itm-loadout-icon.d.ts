declare interface UITM_LoadoutIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SelectionBorder: UBorder;
    LoadoutButton: UButton;
    Image_Icon: UImage;
    Background: UBorder;
    OnClicked: FITM_LoadoutIcon_COnClicked;
    Index: number;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    SetData(Texture: UTexture2D, Index: number): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_ITM_LoadoutIcon(EntryPoint: number): void;
    OnClicked__DelegateSignature(Texture: UTexture2D, Index: number): void;
}
declare const UITM_LoadoutIcon_C: UITM_LoadoutIcon_C;

