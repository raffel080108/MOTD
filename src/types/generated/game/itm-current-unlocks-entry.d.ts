declare interface UITM_CurrentUnlocks_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UnlockButton: UButton;
    Unlock_Icon: UUI_BXE_Unlock_Icon_C;
    Unlock_Header: UBasic_Label_C;
    Unlock_Counter: UBasic_Label_C;
    SizeBox_1: USizeBox;
    IconHeaderBox: UHorizontalBox;
    Gradient_Bar: UUI_GradientMasked_Image_C;
    ContentPanel: UOverlay;
    WeaponTags: TArray<UWeaponTagBase>;
    Unlock: FBXEUnlockInstance;
    OnEntryHovered: FITM_CurrentUnlocks_Entry_COnEntryHovered;
    OnEntryUnhovered: FITM_CurrentUnlocks_Entry_COnEntryUnhovered;
    LeftAligned: boolean;
    FrameColor: FLinearColor;
    ClearHighlighting(): void;
    HighlightWeaponTags(InWeaponTags: TArray<UWeaponTagBase>): void;
    SetLeftAligned(InLeftAlign: boolean): void;
    GetWeaponTags(WeaponTags: TArray<UWeaponTagBase>): void;
    GetTooltip(): UWidget;
    SetUnlock(InUnlock: FBXEUnlockInstance, Amount: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__UI_BXE_CurrentUnlocks_Entry_UnlockButton_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__UI_BXE_CurrentUnlocks_Entry_UnlockButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_ITM_CurrentUnlocks_Entry(EntryPoint: number): void;
    OnEntryUnhovered__DelegateSignature(InEntry: UITM_CurrentUnlocks_Entry_C): void;
    OnEntryHovered__DelegateSignature(InEntry: UITM_CurrentUnlocks_Entry_C): void;
}
declare const UITM_CurrentUnlocks_Entry_C: UITM_CurrentUnlocks_Entry_C;

