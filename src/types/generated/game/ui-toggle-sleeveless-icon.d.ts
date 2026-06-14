declare interface UUI_ToggleSleevelessIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WithSleeveIcon: UUI_ImageTinted_C;
    WithoutSleeveIcon_1: UUI_ImageTinted_C;
    Sizer: USizeBox;
    ShuffleOverlay: UOverlay;
    SelectionBorder: UBorder;
    NoVariantAvailable: UUI_ImageTinted_C;
    FrameBorder: UBorder;
    Background: UBorder;
    AnimActivate: UWidgetAnimation;
    AnimHover: UWidgetAnimation;
    AnimNotAvailable: UWidgetAnimation;
    Dimension: number;
    IsSleevesDesired: boolean;
    IsSleevelessAvailable: boolean;
    PreConstruct(IsDesignTime: boolean): void;
    PlayActivateAnimation(): void;
    SetHovered(IsHovered: boolean): void;
    OnSleevelessDesireChanged(DesireSleeveless: boolean): void;
    OnSleevelessAvailabilityChanged(IsAvailable: boolean): void;
    ExecuteUbergraph_UI_ToggleSleevelessIcon(EntryPoint: number): void;
}
declare const UUI_ToggleSleevelessIcon_C: UUI_ToggleSleevelessIcon_C;

