declare interface UITM_Character_AscensionNotification_C extends UUserWidget {
    readonly __static_UITM_Character_AscensionNotification_C: {
        SetIconSize(InIconSize: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnVisibilityChanged_Event(InVisibility: ESlateVisibility): void;
        ExecuteUbergraph_ITM_Character_AscensionNotification(EntryPoint: number): void;
    };
    readonly __properties_UITM_Character_AscensionNotification_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_Overlay: UOverlay;
        Icon_SizeBox: USizeBox;
        Icon_Image: UBasicImage;
        AnimReady: UWidgetAnimation;
        IconSize: number;
    };
    readonly __staticRegistry: 
        UITM_Character_AscensionNotification_C['__static_UITM_Character_AscensionNotification_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_Character_AscensionNotification_C['__properties_UITM_Character_AscensionNotification_C'] &
        UUserWidget['__propertyRegistry'];
}

