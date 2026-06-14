declare interface UBasic_Option_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_Content: USizeBox;
    SizeBox: USizeBox;
    PutStuffHere: UNamedSlot;
    Outline: UImage;
    MainBorder: UBorder;
    BackgroundOverlay: UOverlay;
    backgroundNoOutline: UImage;
    ArrowBox_Text: UTextBlock;
    LeftPadding: number;
    Slider: number;
    Switcher: number;
    WasHovering: boolean;
    OnHoveringBegin: FBasic_Option_COnHoveringBegin;
    OnHoveringEnd: FBasic_Option_COnHoveringEnd;
    Indent: number;
    ContentHAlignment: EHorizontalAlignment;
    SetContentLayout(InLeftPadding: number, InHorizontalAlignment: EHorizontalAlignment): void;
    SetIndent(InIndent: number): void;
    SetOptionText(InText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    ExecuteUbergraph_Basic_Option(EntryPoint: number): void;
    OnHoveringEnd__DelegateSignature(): void;
    OnHoveringBegin__DelegateSignature(): void;
}
declare const UBasic_Option_C: UBasic_Option_C;

