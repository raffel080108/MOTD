declare interface UHUD_ChatLine_C extends UUserWidget {
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
    PreviewSender: FString;
    PreviewSenderType: EChatSenderType;
    PreviewMsg: FString;
    PreviewSize: number;
    ChangeFontSize(InSize: number): void;
    RemoveTags(Source: string | FString, Result: string | FString): void;
    EncloseText(Pre: string | FString, Text: FText, Post: string | FString, Result: FText): void;
    StyledText(style_Name: FText, Text: FText, Result: FText): void;
    UpdateUserIcon(MessageType: EChatMessageType, SenderType: EChatSenderType): void;
    UpdateOpacity(): void;
    SetMessage(MsgType: EChatMessageType, SenderStr: string | FString, SenderType: EChatSenderType, MsgStr: string | FString): void;
    Construct(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ShowChatText(): void;
    ExecuteUbergraph_HUD_ChatLine(EntryPoint: number): void;
    OnMessageHidden__DelegateSignature(): void;
}
declare const UHUD_ChatLine_C: UHUD_ChatLine_C;

