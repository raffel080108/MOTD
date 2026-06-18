declare interface UHUD_Chat_C extends UUserWidget {
    readonly __static_UHUD_Chat_C: {
        TryCloseChat(): void;
        StoreChatState(): void;
        RestoreChatState(): void;
        FilterBlockedUserMessage(InMessage: FFSDChatMessage, FilteredMessageType: EChatMessageType, FilteredMessage: string): void;
        FilterMessage(InMessage: FFSDChatMessage, FilteredMessage: FFSDChatMessage): void;
        FilterProfanityMessage(MessageToFilter: string, OutMessage: string): void;
        SetMaxLinesFromFontSize(FontSize: number): void;
        UpdateChatMessages(resetAge: boolean): void;
        IsStringNotEmpty(String: string, IsEmpty: boolean): void;
        GetSenderType(SenderType: EChatSenderType): void;
        OpenChat(): void;
        BeginChat(): void;
        OnOpenChat(): void;
        OnMessageHidden_Event(): void;
        PreConstruct(IsDesignTime: boolean): void;
        CloseChat(): void;
        OnBackgroundFadeFinished(): void;
        BndEvt__OutsiteChatbox_K2Node_ComponentBoundEvent_0_OnEditableTextCommittedEvent__DelegateSignature(Text: string, CommitMethod: ETextCommit): void;
        BndEvt__OutsiteChatbox_K2Node_ComponentBoundEvent_1_OnEditableTextBoxChangedEvent__DelegateSignature(Text: string): void;
        SendChatMessage(InText: string, CommitMethod: ETextCommit): void;
        BndEvt__NewChatEdit_K2Node_ComponentBoundEvent_19_OnEditableTextBoxCommittedEvent__DelegateSignature(Text: string, CommitMethod: ETextCommit): void;
        NewMesssage(Message: FFSDChatMessage): void;
        BndEvt__NewChatEdit_K2Node_ComponentBoundEvent_2_OnEditableTextBoxChangedEvent__DelegateSignature(Text: string): void;
        Construct(): void;
        OnFontSizeChange(NewValue: number): void;
        PlatformDependentClose(): void;
        ChatOpenCooldown(): void;
        ChatClosedCooldown(): void;
        Destruct(): void;
        DelayedOpenChat(): void;
        ExecuteUbergraph_HUD_Chat(EntryPoint: number): void;
        OnChatClosed__DelegateSignature(): void;
    };
    readonly __properties_UHUD_Chat_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        NewChatEdit: UEditableTextBox;
        HUD_ChatLine_2: UHUD_ChatLine_C;
        HUD_ChatLine_1: UHUD_ChatLine_C;
        HUD_ChatLine: UHUD_ChatLine_C;
        ChatMessages: UVerticalBox;
        ChatBar: UImage;
        ChatBackground: UImage;
        Border_0: UBorder;
        BackgroundFade: UWidgetAnimation;
        duration: number;
        FadeTime: number;
        MaxLines: number;
        SenderType: EChatSenderType;
        OutsiteChatbox: UEditableTextBox;
        InputChatBox: UEditableTextBox;
        MinLinesConst: number;
        MaxLinesConst: number;
        IsChatOpen: boolean;
        CanChatBeOpened: boolean;
        ConsoleChatStartDelay: FTimerHandle;
        IsOnHUD: boolean;
        OnChatClosed: FHUD_Chat_COnChatClosed;
    };
    readonly __staticRegistry: 
        UHUD_Chat_C['__static_UHUD_Chat_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Chat_C['__properties_UHUD_Chat_C'] &
        UUserWidget['__propertyRegistry'];
}

