declare interface UUI_InfoScreen_WebBanner_C extends UUserWidget {
    readonly __static_UUI_InfoScreen_WebBanner_C: {
        OnFail_92C3E0DC4BFBFE9F9283AD80B4C84A48(Texture: UTexture2DDynamic): void;
        OnSuccess_92C3E0DC4BFBFE9F9283AD80B4C84A48(Texture: UTexture2DDynamic): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
        Construct(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        Init(): void;
        ExecuteUbergraph_UI_InfoScreen_WebBanner(EntryPoint: number): void;
    };
    readonly __properties_UUI_InfoScreen_WebBanner_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TitleTextBlock: UTextBlock;
        Image: UImage;
        Glow2: UImage;
        Glow1: UImage;
        Button_0: UButton;
        BlurBackground: UBlurBackground_C;
        Basic_Menu_ColorBar_C_0: UBasic_Menu_ColorBar_C;
        Basic_Menu_ColorBar_C: UBasic_Menu_ColorBar_C;
        Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
        Idle: UWidgetAnimation;
        Hover: UWidgetAnimation;
        Click: UWidgetAnimation;
        ImageURL: string;
        TitleText: string;
        ClickURL: string;
    };
    readonly __staticRegistry: 
        UUI_InfoScreen_WebBanner_C['__static_UUI_InfoScreen_WebBanner_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_InfoScreen_WebBanner_C['__properties_UUI_InfoScreen_WebBanner_C'] &
        UUserWidget['__propertyRegistry'];
}

