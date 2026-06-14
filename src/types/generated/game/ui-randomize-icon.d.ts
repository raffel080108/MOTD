declare interface UUI_RandomizeIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Sizer: USizeBox;
    ShuffleOverlay: UOverlay;
    SelectionBorder: UBorder;
    FrameBorder: UBorder;
    Background: UBorder;
    AnimActivate: UWidgetAnimation;
    AnimHover: UWidgetAnimation;
    Dimension: number;
    PreConstruct(IsDesignTime: boolean): void;
    PlayActivateAnimation(): void;
    SetHovered(IsHovered: boolean): void;
    ExecuteUbergraph_UI_RandomizeIcon(EntryPoint: number): void;
}
declare const UUI_RandomizeIcon_C: UUI_RandomizeIcon_C;

