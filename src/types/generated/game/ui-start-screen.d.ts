declare interface UUI_StartScreen_C extends UUserWidget {
    readonly __static_UUI_StartScreen_C: {
        UpdateShaderCompilationText(): void;
        OnMouseButtonUp(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        FadeIt(FadeIn: boolean, duration: number): void;
        Construct(): void;
        ShowLoginSpinner(): void;
        ShowShaderPrecompilation(): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        ExecuteUbergraph_UI_StartScreen(EntryPoint: number): void;
        OnClicked__DelegateSignature(): void;
    };
    readonly __properties_UUI_StartScreen_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        VersionInfo: UTextBlock;
        ShaderCompilationText: UTextBlock;
        PressStartLabel: UUI_AdvancedLabel_C;
        LogginInThrobber: UCircularThrobber;
        Image_Background: UImage;
        Image_274: UImage;
        Image_219: UImage;
        Image_63: UImage;
        Image_7: UImage;
        GhostShipLogo: UImage;
        FadeOverlay: UImage;
        AnimatedStaticOverlay: UAnimatedStaticOverlay_C;
        BlinkText: UWidgetAnimation;
        FadeOut: UWidgetAnimation;
        FadeIn: UWidgetAnimation;
        FadeInShaderCompilation: UWidgetAnimation;
        OnClicked: FUI_StartScreen_COnClicked;
        ShowShaderCompilation: boolean;
        TotalShaders: number;
    };
    readonly __staticRegistry: 
        UUI_StartScreen_C['__static_UUI_StartScreen_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_StartScreen_C['__properties_UUI_StartScreen_C'] &
        UUserWidget['__propertyRegistry'];
}

