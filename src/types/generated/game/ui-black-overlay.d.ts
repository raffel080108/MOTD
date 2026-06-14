declare interface UUI_BlackOverlay_C extends UFSDLevelLoadingPersistentWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextOverlay: UOverlay;
    Shadow: UImage;
    ScaledImage: UImage;
    PlayersSpeaking: UUI_PlayerSpeaking_List_C;
    LoaderText: UUI_AdvancedLabel_C;
    FullscreenImage: UImage;
    Fade: number;
    FadingImage: UTexture;
    SetProgress(InFade: number, NewFadingImage: UTexture): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetFadeProgress(Fade: number, LoadingImage: UTexture): void;
    ExecuteUbergraph_UI_BlackOverlay(EntryPoint: number): void;
}
declare const UUI_BlackOverlay_C: UUI_BlackOverlay_C;

