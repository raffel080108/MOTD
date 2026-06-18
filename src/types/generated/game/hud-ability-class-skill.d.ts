declare interface UHUD_Ability_ClassSkill_C extends UPerkCooldownWidget {
    readonly __static_UHUD_Ability_ClassSkill_C: {
        GetForceDisabled(IsForceDisabled: boolean): void;
        PlayAbilityAvailable(InIsAvailable: boolean): void;
        GetAbilityIcon(Icon: UTexture2D): void;
        SetForceDisabled(IsDisabled: boolean): void;
        SetLabelText(NewText: string): void;
        UpdateCooldownProgress(): void;
        UpdatePerkVisibility(): void;
        UpdatePerkUsability(): void;
        InitializePerkUsability(): void;
        CanUsePerk(Character: APlayerCharacter, CanUse: boolean): void;
        OnPerkUsabilityChanged(Perk: UPerkAsset): void;
        InitializePerkComponent(): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        PlayPerkUsedAnimation(): void;
        PlayPerkAvailableAnimation(): void;
        UpdatePerkUsabilityWithDelay(): void;
        OnCooldownProgressChanged(Progress: number): void;
        ExecuteUbergraph_HUD_Ability_ClassSkill(EntryPoint: number): void;
        OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
        OnCoolDownChanged__DelegateSignature(InProgress: number): void;
    };
    readonly __properties_UHUD_Ability_ClassSkill_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Overlay: UOverlay;
        Label: UUI_AdvancedLabel_C;
        CooldownProgressBar: UProgressBar;
        Border: UBorder;
        PerkUsedAnimation: UWidgetAnimation;
        PerkAvailableAnimation: UWidgetAnimation;
        LabelText: string;
        AllowUsedAnimation: boolean;
        AllowAvailableAnimation: boolean;
        ShowCoolDown: boolean;
        Perk: UPerkAsset;
        IsPerkAvailable: boolean;
        IsForceDisabled: boolean;
        OnCoolDownChanged: FHUD_Ability_ClassSkill_COnCoolDownChanged;
        OnCanUseChanged: FHUD_Ability_ClassSkill_COnCanUseChanged;
        ControllerOverrideText: string;
    };
    readonly __staticRegistry: 
        UHUD_Ability_ClassSkill_C['__static_UHUD_Ability_ClassSkill_C'] &
        UPerkCooldownWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Ability_ClassSkill_C['__properties_UHUD_Ability_ClassSkill_C'] &
        UPerkCooldownWidget['__propertyRegistry'];
}

