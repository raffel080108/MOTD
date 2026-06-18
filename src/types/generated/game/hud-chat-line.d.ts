declare interface UHUD_ChatLine_C extends UUserWidget {
    readonly __static_UHUD_ChatLine_C: {
        ChangeFontSize(InSize: number): void;
        RemoveTags(Source: string, Result: string): void;
        EncloseText(Pre: string, Text: string, Post: string, Result: string): void;
        StyledText(style_Name: string, Text: string, Result: string): void;
        UpdateUserIcon(MessageType: EChatMessageType, SenderType: EChatSenderType): void;
        UpdateOpacity(): void;
        SetMessage(MsgType: EChatMessageType, SenderStr: string, SenderType: EChatSenderType, MsgStr: string): void;
        Construct(): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        ShowChatText(): void;
        ExecuteUbergraph_HUD_ChatLine(EntryPoint: number): void;
        OnMessageHidden__DelegateSignature(): void;
    };
    readonly __properties_UHUD_ChatLine_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SenderIcon: UImage;
        LineScaleBox: UScaleBox;
        ChatRichText: URichTextSizable;
        duration: number;
        FadeOut: number;
        Msg: FFSDChatMessage;
        PrevSize: FVector2D;
        OnMessageHidden: FHUD_ChatLine_COnMessageHidden;
        PreviewMsgType: EChatMessageType;
        PreviewSender: string;
        PreviewSenderType: EChatSenderType;
        PreviewMsg: string;
        PreviewSize: number;
    };
    readonly __staticRegistry: 
        UHUD_ChatLine_C['__static_UHUD_ChatLine_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_ChatLine_C['__properties_UHUD_ChatLine_C'] &
        UUserWidget['__propertyRegistry'];
}

