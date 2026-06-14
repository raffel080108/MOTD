declare interface FBasicBrush {
    bFromAsset: boolean;
    Asset: UBasicBrushAsset;
    Value: FSlateBrushFactory;
}
declare const FBasicBrush: FBasicBrush;

declare interface FBasicColor {
    bFromAsset: boolean;
    Asset: UBasicColorAsset;
    Value: FLinearColor;
}
declare const FBasicColor: FBasicColor;

declare interface FBasicData {
    Index: number;
    Object: TWeakObjectPtr<UObject>;
    Guid: FGuid;
}
declare const FBasicData: FBasicData;

declare interface FBasicMaterialParameters {
    Scalars: Record<FName, number>;
    Vectors: Record<FName, FVector4>;
    Colors: Record<FName, FBasicColor>;
    Textures: Record<FName, UTexture2D>;
}
declare const FBasicMaterialParameters: FBasicMaterialParameters;

declare interface FBasicPanelScale {
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    Stretch: EStretch;
    StretchDirection: EStretchDirection;
    UserSpecifiedScale: number;
}
declare const FBasicPanelScale: FBasicPanelScale;

declare interface FBasicPanelSettings {
    Padding: FMargin;
    bUseSize: boolean;
    Size: FBasicPanelSize;
    bUseBorder: boolean;
    Border: FBasicBrush;
    BorderBrush: FSlateBrush;
    bUseScrollBox: boolean;
    ScrollBox: UScrollBoxAsset;
    bUseScale: boolean;
    Scale: FBasicPanelScale;
}
declare const FBasicPanelSettings: FBasicPanelSettings;

declare interface FBasicPanelSize {
    Width: number;
    Height: number;
    MinWidth: number;
    MinHeight: number;
    MaxWidth: number;
    MaxHeight: number;
}
declare const FBasicPanelSize: FBasicPanelSize;

declare interface FBasicRichTextOverrides {
    bOverrideDefaultFontSize: boolean;
    OverrideDefaultFontSize: number;
    bOverrideDefaultFontColor: boolean;
    OverrideDefaultFontColor: FBasicColor;
}
declare const FBasicRichTextOverrides: FBasicRichTextOverrides;

declare interface FBasicRichTextSettings {
    DefaultTextStyle: FBasicTextStyle;
    RichTextStyles: Record<FName, FBasicTextStyle>;
    DecoratorClasses: TArray<TSubclassOf<URichTextBlockDecorator>>;
}
declare const FBasicRichTextSettings: FBasicRichTextSettings;

declare interface FBasicRichTextStyle {
    bFromAsset: boolean;
    Asset: UBasicRichTextStyleAsset;
    Value: FBasicRichTextSettings;
}
declare const FBasicRichTextStyle: FBasicRichTextStyle;

declare interface FBasicSlotSettings {
    Size: FSlateChildSize;
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
}
declare const FBasicSlotSettings: FBasicSlotSettings;

declare interface FBasicTextBlockStyle {
    Font: FSlateFontInfo;
    ColorAndOpacity: FBasicColor;
    ShadowOffset: FVector2D;
    ShadowColorAndOpacity: FBasicColor;
    TransformPolicy: ETextTransformPolicy;
    OverflowPolicy: ETextOverflowPolicy;
}
declare const FBasicTextBlockStyle: FBasicTextBlockStyle;

declare interface FBasicTextStyle {
    bFromAsset: boolean;
    Asset: UBasicTextStyleAsset;
    Value: FBasicTextBlockStyle;
}
declare const FBasicTextStyle: FBasicTextStyle;

declare interface FScrollBoxSettings {
    Style: FScrollBoxStyle;
    ScrollBarStyle: FScrollBarStyle;
    ContentPadding: FMargin;
}
declare const FScrollBoxSettings: FScrollBoxSettings;

declare interface FSlateBrushFactory {
    SlateBrush: FSlateBrush;
    BasicTint: FBasicColor;
    MaterialParameters: FBasicMaterialParameters;
}
declare const FSlateBrushFactory: FSlateBrushFactory;

declare interface IBasicActivatable extends IInterface {
    OnDeactivated(): void;
    OnActivated(): void;
}
declare const IBasicActivatable: IBasicActivatable;

declare interface UBasicBrushAsset extends UDataAsset {
    Brush: FSlateBrushFactory;
}
declare const UBasicBrushAsset: UBasicBrushAsset;

declare interface UBasicBrushLibrary extends UBlueprintFunctionLibrary {
    BasicToSlateBrush(WorldContext: UObject, InBasicBrush: FBasicBrush): FSlateBrush;
}
declare const UBasicBrushLibrary: UBasicBrushLibrary;

declare interface UBasicButtonWidget extends UBasicUserWidget {
    OnButtonClicked: FBasicButtonWidgetOnButtonClicked;
    OnButtonHovered: FBasicButtonWidgetOnButtonHovered;
    OnButtonUnhovered: FBasicButtonWidgetOnButtonUnhovered;
    OnButtonHoveredChanged: FBasicButtonWidgetOnButtonHoveredChanged;
    InnerButton: UButton;
    AnimButtonClicked: UWidgetAnimation;
    AnimButtonHovered: UWidgetAnimation;
    AnimButtonUnhovered: UWidgetAnimation;
    NativeButton: UButton;
    bButtonHovered: boolean;
    ReceiveButtonUnhovered(): void;
    ReceiveButtonHovered(): void;
    ReceiveButtonHoverChanged(InHovered: boolean): void;
    ReceiveButtonClicked(): void;
    NativeGetButtonToolTip(): UWidget;
    NativeButtonUnhovered(): void;
    NativeButtonHovered(): void;
    NativeButtonClicked(): void;
    BasicButtonHoveredDelegate__DelegateSignature(InButton: UBasicButtonWidget, InHovered: boolean): void;
    BasicButtonDelegate__DelegateSignature(InButton: UBasicButtonWidget): void;
}
declare const UBasicButtonWidget: UBasicButtonWidget;

declare interface UBasicColorAsset extends UDataAsset {
    Color: FLinearColor;
}
declare const UBasicColorAsset: UBasicColorAsset;

declare interface UBasicColorLibrary extends UBlueprintFunctionLibrary {
    LinearToBasicColor(InColor: FLinearColor): FBasicColor;
    BasicToSlateColor(InBasicColor: FBasicColor): FSlateColor;
    BasicToLinearColor(InBasicColor: FBasicColor): FLinearColor;
    AssetToLinearColor(InReferenceColor: UBasicColorAsset): FLinearColor;
    AssetToBasicColor(InReferenceColor: UBasicColorAsset): FBasicColor;
}
declare const UBasicColorLibrary: UBasicColorLibrary;

declare interface UBasicImage extends UBasicUserWidget {
    Brush: FBasicBrush;
    BrushColor: FBasicColor;
    MaterialParameters: FBasicMaterialParameters;
    bMaterialSetWidgetScale: boolean;
    MaterialWidgetScaleParameter: FName;
    InnerImage: UImage;
    PaintData: UBasicImagePaintData;
    SlateBrush: FSlateBrush;
    SetDynamicMaterialVector(InName: FName, InVector: FVector4): void;
    SetDynamicMaterialTexture(InName: FName, InTexture: UTexture2D): void;
    SetDynamicMaterialScalar(InName: FName, InValue: number): void;
    SetDynamicMaterialParameters(InParameters: FBasicMaterialParameters): void;
    SetDynamicMaterialColor(InName: FName, InColor: FBasicColor): void;
    SetBrushFromTexture(InTexture: UTexture2D, InMatchSize: boolean): void;
    SetBrushColor(InColor: FBasicColor): void;
    SetBrush(InBrush: FBasicBrush): void;
    ResetDynamicMaterialVector(InName: FName): void;
    ResetDynamicMaterialTexture(InName: FName): void;
    ResetDynamicMaterialScalar(InName: FName): void;
    ResetDynamicMaterialColor(InName: FName): void;
    GetSlateBrush(): FSlateBrush;
    GetDynamicMaterial(): UMaterialInstanceDynamic;
    GetDefaultDynamicMaterialParameters(): FBasicMaterialParameters;
}
declare const UBasicImage: UBasicImage;

declare interface UBasicImagePaintData extends UObject {

}
declare const UBasicImagePaintData: UBasicImagePaintData;

declare interface UBasicPanel extends UPanelWidget {
    Type: EBasicPanelType;
    Settings: FBasicPanelSettings;
    CreateChildren(InWidgetClass: TSubclassOf<UWidget>, InNumChildren: number, InSlotSettings: FBasicSlotSettings, InClearPanelBefore: boolean): TArray<UWidget>;
    CreateChild(InWidgetClass: TSubclassOf<UWidget>, InSlotSettings: FBasicSlotSettings): UWidget;
    AddChildToPanel(InChild: UWidget, InSlotSettings: FBasicSlotSettings): UBasicSlot;
    AddChildren(InChildren: TArray<UWidget>, InSlotSettings: FBasicSlotSettings, InClearPanelBefore: boolean): void;
}
declare const UBasicPanel: UBasicPanel;

declare interface UBasicPanelFunctionLibrary extends UBlueprintFunctionLibrary {
    ApplySizeBoxSettings(InSizeBox: USizeBox, InSizeSettings: FBasicPanelSize): void;
}
declare const UBasicPanelFunctionLibrary: UBasicPanelFunctionLibrary;

declare interface UBasicRichTextBlock extends UBasicTextLayoutBlock {
    Text: FText;
    Style: FBasicRichTextStyle;
    StyleOverride: FBasicRichTextOverrides;
    TransformPolicy: ETextTransformPolicy;
    OverflowPolicy: ETextOverflowPolicy;
    InnerRichText: URichTextBlock;
    InnerStyleSet: UDataTable;
}
declare const UBasicRichTextBlock: UBasicRichTextBlock;

declare interface UBasicRichTextStyleAsset extends UDataAsset {
    Settings: FBasicRichTextSettings;
}
declare const UBasicRichTextStyleAsset: UBasicRichTextStyleAsset;

declare interface UBasicSlot extends UPanelSlot {
    Size: FSlateChildSize;
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
}
declare const UBasicSlot: UBasicSlot;

declare interface UBasicTextBlock extends UBasicTextLayoutBlock {
    Text: FText;
    TextStyle: FBasicTextStyle;
    InnerTextBlock: UTextBlock;
    SetTextStyle(InStyle: FBasicTextStyle): void;
}
declare const UBasicTextBlock: UBasicTextBlock;

declare interface UBasicTextLayoutBlock extends UBasicUserWidget {
    Justification: ETextJustify;
    MinDesiredWidth: number;
    bAutoWrapText: boolean;
    WrapTextAt: number;
    WrappingPolicy: ETextWrappingPolicy;
    SetWrapTextAt(InWrapTextAt: number): void;
    SetText(InText: FText): void;
    InsertText(InNewText: FText, InDelimiter: FText): void;
    GetText(): FText;
    AppendText(InNewText: FText, InDelimiter: FText): void;
}
declare const UBasicTextLayoutBlock: UBasicTextLayoutBlock;

declare interface UBasicTextStyleAsset extends UDataAsset {
    Style: FBasicTextBlockStyle;
}
declare const UBasicTextStyleAsset: UBasicTextStyleAsset;

declare interface UBasicUserWidget extends UUserWidget {
    OnBasicDataChanged: FBasicUserWidgetOnBasicDataChanged;
    BasicData: FBasicData;
    SetBasicDataObject(InObject: UObject): void;
    SetBasicDataIndex(InIndex: number): void;
    SetBasicDataGuid(InGuid: FGuid): void;
    SetBasicData(InBasicData: FBasicData): void;
    BasicDataDelegate__DelegateSignature(InOwner: UBasicUserWidget, InData: FBasicData): void;
}
declare const UBasicUserWidget: UBasicUserWidget;

declare interface UBasicWidgetSwitcher extends UWidgetSwitcher {
    OnActiveWidgetChanged: FBasicWidgetSwitcherOnActiveWidgetChanged;
    OnWidgetAdded: FBasicWidgetSwitcherOnWidgetAdded;
    OnWidgetRemoved: FBasicWidgetSwitcherOnWidgetRemoved;
    PanelSettings: FBasicPanelSettings;
    WidgetRemoved__DelegateSignature(InSwitcher: UBasicWidgetSwitcher, InActiveWidget: UWidget): void;
    WidgetAdded__DelegateSignature(InSwitcher: UBasicWidgetSwitcher, InIndex: number, InActiveWidget: UWidget): void;
    GotoNext(InReverse: boolean, InCircular: boolean): UWidget;
    ActiveWidgetChanged__DelegateSignature(InSwitcher: UBasicWidgetSwitcher, InIndex: number, InActiveWidget: UWidget): void;
}
declare const UBasicWidgetSwitcher: UBasicWidgetSwitcher;

declare interface UBasicWidgetSwitcherSlot extends UWidgetSwitcherSlot {
    OnInfoChanged: FBasicWidgetSwitcherSlotOnInfoChanged;
    Title: FText;
    Icon: UTexture2D;
    SlotDelegate__DelegateSignature(InSlot: UBasicWidgetSwitcherSlot): void;
    SetTitleAndIcon(InTitle: FText, InIcon: UTexture2D): void;
    SetTitle(InTitle: FText): void;
    SetIcon(InIcon: UTexture2D): void;
}
declare const UBasicWidgetSwitcherSlot: UBasicWidgetSwitcherSlot;

declare interface UScrollBoxAsset extends UDataAsset {
    Settings: FScrollBoxSettings;
}
declare const UScrollBoxAsset: UScrollBoxAsset;

