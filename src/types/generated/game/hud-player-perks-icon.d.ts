declare interface UHUD_PlayerPerks_Icon_C extends UPerkHUDIconWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_RoundedCanvas: UUI_RoundedCanvas_C;
    Ring_3: UImage;
    Ring_2: UImage;
    Ring_1: UImage;
    ProgressBarCoolDown: UProgressBar;
    PerkShadow: UImage;
    PerkIcon: UImage;
    OverlayWidget: UOverlay;
    OverlayTexture: UOverlay;
    FlashOverlay: UImage;
    CounterLabel: UBasic_Label_C;
    CounterBorder: UBorder;
    BackgroundImage: UImage;
    AnimCoolDownFinished: UWidgetAnimation;
    AnimCoolingDown: UWidgetAnimation;
    RefreshHandle: FTimerHandle;
    GetCooldownDuration(): number;
    GetCoolDownProgress(): number;
    GetMaxUseCharges(): number;
    GetRemainingUseCharges(): number;
    RefreshCounterAndProgress(CoolDownActive: boolean): void;
    SetCounter(InCount: number): void;
    SetProgress(InProgress: number, OutProgress: number): void;
    OnTick_64B6D09E4CB7705CDF68E9949787003B(DeltaTime: number, NormalizedTime: number): void;
    Completed_64B6D09E4CB7705CDF68E9949787003B(DeltaTime: number, NormalizedTime: number): void;
    ReceivePerkAssetChanged(): void;
    Construct(): void;
    OnAnimCoolDownFinished(): void;
    PreConstruct(IsDesignTime: boolean): void;
    RefreshUseCharges(Perk: UPerkAsset, Value: number): void;
    CoolDownTick(): void;
    ExecuteUbergraph_HUD_PlayerPerks_Icon(EntryPoint: number): void;
}
declare const UHUD_PlayerPerks_Icon_C: UHUD_PlayerPerks_Icon_C;

