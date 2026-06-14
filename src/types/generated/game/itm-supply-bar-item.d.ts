declare interface UITM_SupplyBarItem_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    IMG_Inner: UImage;
    IMG_Border: UImage;
    AnimBlink: UWidgetAnimation;
    IsActivated: boolean;
    BorderColor: ENUM_MenuColors;
    InnerColor: ENUM_MenuColors;
    IsBlinking: boolean;
    BlinkUnder: number;
    LowColorColor: ENUM_MenuColors;
    SetProgress(InProgress: number): void;
    SetColors(InBorderColor: ENUM_MenuColors, InInnerColor: ENUM_MenuColors, InLowColorColor: ENUM_MenuColors): void;
    SetOn(IsOn: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnBlinkingFinished(): void;
    ExecuteUbergraph_ITM_SupplyBarItem(EntryPoint: number): void;
}
declare const UITM_SupplyBarItem_C: UITM_SupplyBarItem_C;

