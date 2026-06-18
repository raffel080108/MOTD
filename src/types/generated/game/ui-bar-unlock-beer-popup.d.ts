declare interface UUI_Bar_UnlockBeerPopup_C extends UWindowWidget {
    readonly __static_UUI_Bar_UnlockBeerPopup_C: {
        SequenceEvent__ENTRYPOINTUI_Bar_UnlockBeerPopup(): void;
        SetDrink(InDrinkableData: UDrinkableDataAsset): void;
        OnTurnOffTextRunner(): void;
        OnShown(): void;
        OnClosed(): void;
        ExecuteUbergraph_UI_Bar_UnlockBeerPopup(EntryPoint: number): void;
        OnUnlockAnimFinished__DelegateSignature(): void;
    };
    readonly __properties_UUI_Bar_UnlockBeerPopup_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UI_RunningMultiText: UUI_RunningMultiText_C;
        ProgressBar_BeerFG: UProgressBar;
        ProgressBar_BeerBG: UProgressBar;
        Image_104: UImage;
        Image_0: UImage;
        ICON_label: UImage;
        Glow: UImage;
        BlurBackground: UBlurBackground_C;
        Fill: UWidgetAnimation;
        DrinkableData: UDrinkableDataAsset;
        OnUnlockAnimFinished: FUI_Bar_UnlockBeerPopup_COnUnlockAnimFinished;
    };
    readonly __staticRegistry: 
        UUI_Bar_UnlockBeerPopup_C['__static_UUI_Bar_UnlockBeerPopup_C'] &
        UWindowWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_UnlockBeerPopup_C['__properties_UUI_Bar_UnlockBeerPopup_C'] &
        UWindowWidget['__propertyRegistry'];
}

