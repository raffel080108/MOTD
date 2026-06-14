declare interface UOptions_HUD_Element_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DotsBox: UHorizontalBox;
    Basic_OptionSwitcher: UBasic_OptionSwitcher_C;
    Basic_Option: UBasic_Option_C;
    AvailableModes: TArray<EHUDVisibilityMode>;
    VisibilityGroup: UHUDVisibilityGroup;
    UpdateDots(): void;
    SetupOptions(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Basic_OptionSwitcher_K2Node_ComponentBoundEvent_0_OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
    BndEvt__Basic_Option_K2Node_ComponentBoundEvent_1_OnHoveringBegin__DelegateSignature(): void;
    BndEvt__Basic_Option_K2Node_ComponentBoundEvent_2_OnHoveringEnd__DelegateSignature(): void;
    Construct(): void;
    OnModeChanged_Event(Group: UHUDVisibilityGroup, Mode: EHUDVisibilityMode): void;
    ExecuteUbergraph_Options_HUD_Element(EntryPoint: number): void;
}
declare const UOptions_HUD_Element_C: UOptions_HUD_Element_C;

