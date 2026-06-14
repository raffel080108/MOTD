declare interface UITM_Character_AscensionNotification_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_Overlay: UOverlay;
    Icon_SizeBox: USizeBox;
    Icon_Image: UBasicImage;
    AnimReady: UWidgetAnimation;
    IconSize: number;
    SetIconSize(InIconSize: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnVisibilityChanged_Event(InVisibility: ESlateVisibility): void;
    ExecuteUbergraph_ITM_Character_AscensionNotification(EntryPoint: number): void;
}
declare const UITM_Character_AscensionNotification_C: UITM_Character_AscensionNotification_C;

