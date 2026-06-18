declare interface UUI_BlackOverlay_C extends UFSDLevelLoadingPersistentWidget {
    readonly __static_UUI_BlackOverlay_C: {
        SetProgress(InFade: number, NewFadingImage: UTexture): void;
        PreConstruct(IsDesignTime: boolean): void;
        SetFadeProgress(Fade: number, LoadingImage: UTexture): void;
        ExecuteUbergraph_UI_BlackOverlay(EntryPoint: number): void;
    };
    readonly __properties_UUI_BlackOverlay_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextOverlay: UOverlay;
        Shadow: UImage;
        ScaledImage: UImage;
        PlayersSpeaking: UUI_PlayerSpeaking_List_C;
        LoaderText: UUI_AdvancedLabel_C;
        FullscreenImage: UImage;
        Fade: number;
        FadingImage: UTexture;
    };
    readonly __staticRegistry: 
        UUI_BlackOverlay_C['__static_UUI_BlackOverlay_C'] &
        UFSDLevelLoadingPersistentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_BlackOverlay_C['__properties_UUI_BlackOverlay_C'] &
        UFSDLevelLoadingPersistentWidget['__propertyRegistry'];
}

