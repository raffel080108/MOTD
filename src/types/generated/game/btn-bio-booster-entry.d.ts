declare interface UBTN_BioBooster_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Icon_Image: UBasic_Image_C;
    Button_SizeBox: USizeBox;
    Button_Outer: UButton;
    Title: FText;
    Description: FText;
    Icon: TSoftObjectPtr<UTexture2D>;
    OnHovered: FBTN_BioBooster_Entry_COnHovered;
    OnUnhovered: FBTN_BioBooster_Entry_COnUnhovered;
    GetIconTexture(AsTexture_2D: UTexture2D): void;
    GetTooltip(): UWidget;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__BTN_BioBoosterUpgrade_Button_Outer_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__BTN_BioBoosterUpgrade_Button_Outer_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_BTN_BioBooster_Entry(EntryPoint: number): void;
    OnUnhovered__DelegateSignature(upgrade: UBTN_BioBooster_Entry_C): void;
    OnHovered__DelegateSignature(upgrade: UBTN_BioBooster_Entry_C): void;
}
declare const UBTN_BioBooster_Entry_C: UBTN_BioBooster_Entry_C;

