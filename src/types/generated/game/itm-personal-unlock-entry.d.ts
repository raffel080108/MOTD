declare interface UITM_PersonalUnlock_Entry_C extends UITM_UnlockBase_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher: UWidgetSwitcher;
    UnlockButton: UButton;
    Text_StackCount: UTextBlock;
    Icon_Stacked_Frame: UBasic_Image_C;
    Icon_SizeBox: USizeBox;
    Icon_Selected: UBasic_Image_C;
    Icon_Image: UBasic_Image_C;
    Icon_Glow: UUI_GlowBackground_C;
    Icon_Frame: UBasic_Image_C;
    Icon_Fill: UBasic_Image_C;
    Icon_Background_Fill: UBasic_Image_C;
    AnimGlow: UWidgetAnimation;
    AnimHover: UWidgetAnimation;
    GetTooltip(): UWidget;
    SetCount(count: number): void;
    SetHovered(InHovered: boolean): void;
    SetGlowing(InGlowing: boolean): void;
    SetFrame(InTint: ENUM_MenuColors, InColor: FLinearColor, InVisualSettings: UUnlockVisualSettings): void;
    SetFill(InTint: ENUM_MenuColors, InColor: FLinearColor): void;
    SetTexture(InIconTexture: TSoftObjectPtr<UTexture2D>): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__UI_BXE_NegotiatedUnlock_Icon_Small_UnlockButton_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__UI_BXE_NegotiatedUnlock_Icon_Small_UnlockButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_ITM_PersonalUnlock_Entry(EntryPoint: number): void;
}
declare const UITM_PersonalUnlock_Entry_C: UITM_PersonalUnlock_Entry_C;

