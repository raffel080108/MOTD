declare interface UUI_InfoScreen_C extends UUserWidget {
    readonly __static_UUI_InfoScreen_C: {
        ClearRewardChecks(): void;
        SetupDiscordUIBasedOnApp(): void;
        ConstructJoinDiscordServerButtons(): void;
        SetJoinDiscordVisibility(): void;
        ConstructPlatformJoinButtons(): void;
        SetFollowOnPlatformVisibility(): void;
        UpdateSkipTutorial(): void;
        OnKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        UpdatePlaytestDiscordVisibility(): void;
        FadeIt(FadeIn: boolean, duration: number): void;
        Failed_397B9DCA438F82682F7F7CB5A8AB2D6A(WebBanners: FWebBanner[]): void;
        Success_397B9DCA438F82682F7F7CB5A8AB2D6A(WebBanners: FWebBanner[]): void;
        Failed_27F831F24BA55ECAC83A1CBF8D89131A(WebBanners: FMessageFeed[]): void;
        Success_27F831F24BA55ECAC83A1CBF8D89131A(WebBanners: FMessageFeed[]): void;
        Failed_DD675F284E3233D959F989B0D400781C(): void;
        Success_DD675F284E3233D959F989B0D400781C(): void;
        Failed_4210D64149792E7EF845389E81BF6606(DiscordUser: string): void;
        Delay_4210D64149792E7EF845389E81BF6606(DiscordUser: string): void;
        Success_4210D64149792E7EF845389E81BF6606(DiscordUser: string): void;
        Construct(): void;
        BndEvt__Button_210_K2Node_ComponentBoundEvent_10_OnButtonClickedEvent__DelegateSignature(): void;
        SetupAnimHandlers(): void;
        OnFadeInStarted(): void;
        OnFadeInFinished(): void;
        FadeOutStarted(): void;
        SetupWelcomeMessage(): void;
        OnEndReached_Event(InPlayerWidget: UMediaPlayerWidget): void;
        PlayWelcomeMessage(): void;
        BndEvt__UI_InfoScreen_BTN_PlayClosedAlpha_Video_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
        BndEvt__UI_InfoScreen_BTN_ClosedAlpha_Continue_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
        StopClosedAlphaVideo(): void;
        BndEvt__UI_InfoScreen_BTN_SkipTutorial_K2Node_ComponentBoundEvent_4_OnClicked__DelegateSignature(): void;
        ExecuteUbergraph_UI_InfoScreen(EntryPoint: number): void;
        OnClose__DelegateSignature(Screen: UUI_InfoScreen_C): void;
    };
    readonly __properties_UUI_InfoScreen_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Welcome_Overlay: UOverlay;
        Welcome_MediaPlayerWidget: UMediaPlayerWidget;
        WebBannerBox: UScrollBox;
        UI_InfoScreen_Overlay_FocusedDLC: UUI_InfoScreen_Overlay_FocusedDLC_C;
        txt_linked_user: URichTextSizable;
        Steam_Border: UBorder;
        RewardText_PlatformJoin: UTextBlock;
        RewardText_DiscordJoin: UTextBlock;
        RewardImage_PlatformJoin: UImage;
        RewardImage_DiscordJoin: UImage;
        RewardBox_PlatformJoin: UHorizontalBox;
        RewardBox_DiscordJoin: UHorizontalBox;
        PlatformJoinSwitcher: UWidgetSwitcher;
        Options_Language: UOptions_Language_C;
        MessageFeedBox: UScrollBox;
        JoinPlaytestChannelContent: UHorizontalBox;
        JoinDiscordServerContent: UHorizontalBox;
        ITM_SocialMediaButtons: UITM_SocialMediaButtons_C;
        DiscordServerJoin: UWidgetSwitcher;
        DiscordJoiningSwitcher: UWidgetSwitcher;
        Discord_Border: UBorder;
        Content_Switcher: UWidgetSwitcher;
        BTN_Welcome_Continue: UBasic_ButtonScalable2_C;
        BTN_Unlink_Playtest_Discord: UBasic_ButtonMultiline_C;
        BTN_SkipTutorial: UBasic_ButtonScalable2_C;
        BTN_PlayClosedAlpha_Video: UBasic_ButtonScalable2_C;
        BTN_Join_Playtest_Discord: UBasic_ButtonMultiline_C;
        BTN_Join_PlatformGroup: UBasic_ButtonMultiline_C;
        BTN_Join_Discord_Server: UBasic_ButtonMultiline_C;
        BTN_Continue: UBasic_ButtonScalable2_C;
        BTN_Claim_PlatformReward: UBasic_ButtonMultiline_C;
        BTN_Claim_DiscordReward: UBasic_ButtonMultiline_C;
        BlinkText: UWidgetAnimation;
        FadeOut: UWidgetAnimation;
        FadeIn: UWidgetAnimation;
        AnimFadeInSwitcher: UWidgetAnimation;
        OnClose: FUI_InfoScreen_COnClose;
        LastKeyControl: boolean;
        SkipVideoCheck: FKeyStrokeMatcher;
        PlatformStoreMemberEntitlement: UPlatformFollowEntitlement;
        DiscordJoinEntitlement: UInDiscordServerEntitlement;
    };
    readonly __staticRegistry: 
        UUI_InfoScreen_C['__static_UUI_InfoScreen_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_InfoScreen_C['__properties_UUI_InfoScreen_C'] &
        UUserWidget['__propertyRegistry'];
}

