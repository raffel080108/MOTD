declare interface UUI_ListBtn_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    NameTextBlock: UTextBlock;
    IndicatorImage: UImage;
    FavButton: UButton;
    IsMouseHovering: boolean;
    IsButtonSelected: boolean;
    OnButtonPressed: FUI_ListBtn_COnButtonPressed;
    UserMod: TScriptInterface<IIUserMod_C>;
    HoverColor: FLinearColor;
    SelectColor: FLinearColor;
    InitColor: FLinearColor;
    SortName: FString;
    IsFav: boolean;
    UnFavStyle: FButtonStyle;
    OnFavoritedChanged: FUI_ListBtn_COnFavoritedChanged;
    FavStyle: FButtonStyle;
    OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    SetNameColor(Color: FLinearColor): void;
    SetNameText(InText: FText): void;
    SetIndicatorColor(Color: FLinearColor): void;
    OnMouseEnter(MyGeometry: FGeometry, MouseEvent: FPointerEvent): void;
    OnMouseLeave(MouseEvent: FPointerEvent): void;
    UpdateButtonVisual(): void;
    SelectButton(): void;
    UnselectButton(): void;
    setup(RogueMod: TScriptInterface<IIUserMod_C>, IsFav: boolean): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    PressButton(): void;
    BndEvt__W_RogueHub_ListBtn_FavButton_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature(): void;
    ExecuteUbergraph_UI_ListBtn(EntryPoint: number): void;
    OnFavoritedChanged__DelegateSignature(Btn: UUI_ListBtn_C, NewFavorited: boolean): void;
    OnButtonPressed__DelegateSignature(Btn: UUI_ListBtn_C, Mod: TScriptInterface<IIUserMod_C>): void;
}
declare const UUI_ListBtn_C: UUI_ListBtn_C;

