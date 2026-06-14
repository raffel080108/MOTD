declare interface UHUD_Resource_Bar_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RegenBar: UProgressBar;
    ProgressBar_End: UBorder;
    Primarybar: UProgressBar;
    Label: UBasic_Label_C;
    BeginRegen: UWidgetAnimation;
    PingPong: UWidgetAnimation;
    HealthComponent: UPlayerHealthComponent;
    RegenTint: FSlateColor;
    isRegenerating: boolean;
    AlphaProgressbar: number;
    IconSize: FVector2D;
    BarBehaviour: EPlayerBarBehaviourType;
    OnHealthUpdated: FHUD_Resource_Bar_COnHealthUpdated;
    DisplayText: boolean;
    TextBehaviour: EPlayerBarBehaviourType;
    ProgressPct: number;
    SetBarPct(HealthPct: number): void;
    UnbindHealthComponent(): void;
    BindHealthComponent(InHealthComponent: UPlayerHealthComponent): void;
    BindToPlayer(InPlayer: APlayerCharacter): void;
    SetTextDisplay(In_Display_Text: boolean): void;
    GetValues(InDisplayType: EPlayerBarBehaviourType, InBaseMax: number, InMax: number, InCurrent: number, Current: number, max: number, pct: number): void;
    UpdateText(InCurrentHealth: number, InMaxHealth: number): void;
    SetAlphaHealthbar(alpha: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_HUD_Resource_Bar(EntryPoint: number): void;
    OnHealthUpdated__DelegateSignature(PctValue: number): void;
}
declare const UHUD_Resource_Bar_C: UHUD_Resource_Bar_C;

