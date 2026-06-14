declare interface UUI_BXE_Artifact_Icon_Small_C extends UITM_UnlockBase_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    UnlockButton: UButton;
    Text_StackCount: UTextBlock;
    ImageLockedPadlock: UBasic_Image_C;
    Icon_SizeBox: USizeBox;
    Icon_Selected: UBasic_Image_C;
    Icon_Image: UBasic_Image_C;
    Icon_Gradient_Locked: UBasic_Image_C;
    Icon_Gradient: UBasic_Image_C;
    Icon_Glow: UUI_GlowBackground_C;
    Icon_Frame: UBasic_Image_C;
    Icon_Fill: UBasic_Image_C;
    count: UOverlay;
    AnimGlow: UWidgetAnimation;
    AnimHover: UWidgetAnimation;
    Locked: boolean;
    LoadedIconTexture: UTexture2D;
    SetCount(count: number): void;
    SetLocked(Locked: boolean): void;
    SetBackgroundFill(InTint: ENUM_MenuColors, InColor: FLinearColor): void;
    GetTooltip(): UWidget;
    SetHovered(InHovered: boolean): void;
    SetGlowing(InGlowing: boolean): void;
    SetFrame(InTint: ENUM_MenuColors, InColor: FLinearColor, InVisualSettings: UUnlockVisualSettings): void;
    SetFill(InTint: ENUM_MenuColors, InColor: FLinearColor): void;
    SetTexture(InIconTexture: TSoftObjectPtr<UTexture2D>): void;
    OnLoaded_27FCF3D04A122AD7C98DC1936E0DF984(Loaded: UObject): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__UI_BXE_Artifact_Icon_Small_UnlockButton_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__UI_BXE_Artifact_Icon_Small_UnlockButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    AsyncLoadIconTexture(): void;
    ExecuteUbergraph_UI_BXE_Artifact_Icon_Small(EntryPoint: number): void;
}
declare const UUI_BXE_Artifact_Icon_Small_C: UUI_BXE_Artifact_Icon_Small_C;

