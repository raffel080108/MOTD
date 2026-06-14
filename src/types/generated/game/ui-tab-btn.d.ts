declare interface UUI_TabBtn_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    NameTextBlock: UTextBlock;
    IndicatorImage: UImage;
    ModPage: TScriptInterface<IIModPage_C>;
    IsMouseHovering: boolean;
    IsTabSelected: boolean;
    HoverColor: FLinearColor;
    SelectColor: FLinearColor;
    InitColor: FLinearColor;
    OnTabPressed: FUI_TabBtn_COnTabPressed;
    OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    SetNameColor(Color: FLinearColor): void;
    SetNameText(InText: FText): void;
    SetIndicatorColor(Color: FLinearColor): void;
    UpdateButtonVisual(): void;
    OnMouseEnter(MyGeometry: FGeometry, MouseEvent: FPointerEvent): void;
    OnMouseLeave(MouseEvent: FPointerEvent): void;
    SelectTabButton(): void;
    UnselectTabButton(): void;
    setup(RoguePage: TScriptInterface<IIModPage_C>): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    PressTab(): void;
    ExecuteUbergraph_UI_TabBtn(EntryPoint: number): void;
    OnTabPressed__DelegateSignature(Tab: UUI_TabBtn_C, page: TScriptInterface<IIModPage_C>): void;
}
declare const UUI_TabBtn_C: UUI_TabBtn_C;

