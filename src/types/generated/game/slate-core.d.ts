declare interface FAnalogInputEvent extends FKeyEvent {

}
declare const FAnalogInputEvent: FAnalogInputEvent;

declare interface FButtonStyle extends FSlateWidgetStyle {
    Normal: FSlateBrush;
    Hovered: FSlateBrush;
    Pressed: FSlateBrush;
    Disabled: FSlateBrush;
    NormalForeground: FSlateColor;
    HoveredForeground: FSlateColor;
    PressedForeground: FSlateColor;
    DisabledForeground: FSlateColor;
    NormalPadding: FMargin;
    PressedPadding: FMargin;
    PressedSlateSound: FSlateSound;
    ClickedSlateSound: FSlateSound;
    HoveredSlateSound: FSlateSound;
}
declare const FButtonStyle: FButtonStyle;

declare interface FCaptureLostEvent {

}
declare const FCaptureLostEvent: FCaptureLostEvent;

declare interface FCharacterEvent extends FInputEvent {

}
declare const FCharacterEvent: FCharacterEvent;

declare interface FCheckBoxStyle extends FSlateWidgetStyle {
    CheckBoxType: ESlateCheckBoxType;
    UncheckedImage: FSlateBrush;
    UncheckedHoveredImage: FSlateBrush;
    UncheckedPressedImage: FSlateBrush;
    CheckedImage: FSlateBrush;
    CheckedHoveredImage: FSlateBrush;
    CheckedPressedImage: FSlateBrush;
    UndeterminedImage: FSlateBrush;
    UndeterminedHoveredImage: FSlateBrush;
    UndeterminedPressedImage: FSlateBrush;
    Padding: FMargin;
    BackgroundImage: FSlateBrush;
    BackgroundHoveredImage: FSlateBrush;
    BackgroundPressedImage: FSlateBrush;
    ForegroundColor: FSlateColor;
    HoveredForeground: FSlateColor;
    PressedForeground: FSlateColor;
    CheckedForeground: FSlateColor;
    CheckedHoveredForeground: FSlateColor;
    CheckedPressedForeground: FSlateColor;
    UndeterminedForeground: FSlateColor;
    BorderBackgroundColor: FSlateColor;
    CheckedSlateSound: FSlateSound;
    UncheckedSlateSound: FSlateSound;
    HoveredSlateSound: FSlateSound;
}
declare const FCheckBoxStyle: FCheckBoxStyle;

declare interface FComboBoxStyle extends FSlateWidgetStyle {
    ComboButtonStyle: FComboButtonStyle;
    PressedSlateSound: FSlateSound;
    SelectionChangeSlateSound: FSlateSound;
    ContentPadding: FMargin;
    MenuRowPadding: FMargin;
}
declare const FComboBoxStyle: FComboBoxStyle;

declare interface FComboButtonStyle extends FSlateWidgetStyle {
    ButtonStyle: FButtonStyle;
    DownArrowImage: FSlateBrush;
    ShadowOffset: FDeprecateSlateVector2D;
    ShadowColorAndOpacity: FLinearColor;
    MenuBorderBrush: FSlateBrush;
    MenuBorderPadding: FMargin;
    ContentPadding: FMargin;
    DownArrowPadding: FMargin;
    DownArrowAlign: EVerticalAlignment;
}
declare const FComboButtonStyle: FComboButtonStyle;

declare interface FCompositeFallbackFont {
    Typeface: FTypeface;
    ScalingFactor: number;
}
declare const FCompositeFallbackFont: FCompositeFallbackFont;

declare interface FCompositeFont {
    DefaultTypeface: FTypeface;
    FallbackTypeface: FCompositeFallbackFont;
    SubTypefaces: TArray<FCompositeSubFont>;
    bEnableAscentDescentOverride: boolean;
}
declare const FCompositeFont: FCompositeFont;

declare interface FCompositeSubFont extends FCompositeFallbackFont {
    CharacterRanges: TArray<FInt32Range>;
    Cultures: FString;
}
declare const FCompositeSubFont: FCompositeSubFont;

declare interface FDeprecateSlateVector2D extends FVector2f {

}
declare const FDeprecateSlateVector2D: FDeprecateSlateVector2D;

declare interface FDockTabStyle extends FSlateWidgetStyle {
    CloseButtonStyle: FButtonStyle;
    NormalBrush: FSlateBrush;
    ColorOverlayTabBrush: FSlateBrush;
    ColorOverlayIconBrush: FSlateBrush;
    ForegroundBrush: FSlateBrush;
    HoveredBrush: FSlateBrush;
    ContentAreaBrush: FSlateBrush;
    TabWellBrush: FSlateBrush;
    TabTextStyle: FTextBlockStyle;
    TabPadding: FMargin;
    IconSize: FDeprecateSlateVector2D;
    OverlapWidth: number;
    FlashColor: FSlateColor;
    NormalForegroundColor: FSlateColor;
    HoveredForegroundColor: FSlateColor;
    ActiveForegroundColor: FSlateColor;
    ForegroundForegroundColor: FSlateColor;
    IconBorderPadding: number;
}
declare const FDockTabStyle: FDockTabStyle;

declare interface FEditableTextBoxStyle extends FSlateWidgetStyle {
    BackgroundImageNormal: FSlateBrush;
    BackgroundImageHovered: FSlateBrush;
    BackgroundImageFocused: FSlateBrush;
    BackgroundImageReadOnly: FSlateBrush;
    Padding: FMargin;
    TextStyle: FTextBlockStyle;
    ForegroundColor: FSlateColor;
    BackgroundColor: FSlateColor;
    ReadOnlyForegroundColor: FSlateColor;
    FocusedForegroundColor: FSlateColor;
    HScrollBarPadding: FMargin;
    VScrollBarPadding: FMargin;
    ScrollBarStyle: FScrollBarStyle;
}
declare const FEditableTextBoxStyle: FEditableTextBoxStyle;

declare interface FEditableTextStyle extends FSlateWidgetStyle {
    Font: FSlateFontInfo;
    ColorAndOpacity: FSlateColor;
    BackgroundImageSelected: FSlateBrush;
    BackgroundImageComposing: FSlateBrush;
    CaretImage: FSlateBrush;
}
declare const FEditableTextStyle: FEditableTextStyle;

declare interface FExpandableAreaStyle extends FSlateWidgetStyle {
    CollapsedImage: FSlateBrush;
    ExpandedImage: FSlateBrush;
    RolloutAnimationSeconds: number;
}
declare const FExpandableAreaStyle: FExpandableAreaStyle;

declare interface FFocusEvent {

}
declare const FFocusEvent: FFocusEvent;

declare interface FFontData {
    FontFilename: FString;
    Hinting: EFontHinting;
    LoadingPolicy: EFontLoadingPolicy;
    SubFaceIndex: number;
    FontFaceAsset: UObject;
}
declare const FFontData: FFontData;

declare interface FFontOutlineSettings {
    OutlineSize: number;
    bMiteredCorners: boolean;
    bSeparateFillAlpha: boolean;
    bApplyOutlineToDropShadows: boolean;
    OutlineMaterial: UObject;
    OutlineColor: FLinearColor;
}
declare const FFontOutlineSettings: FFontOutlineSettings;

declare interface FFontSdfSettings {
    BasePpem: number;
}
declare const FFontSdfSettings: FFontSdfSettings;

declare interface FGeometry {

}
declare const FGeometry: FGeometry;

declare interface FHeaderRowStyle extends FSlateWidgetStyle {
    ColumnStyle: FTableColumnHeaderStyle;
    LastColumnStyle: FTableColumnHeaderStyle;
    ColumnSplitterStyle: FSplitterStyle;
    SplitterHandleSize: number;
    BackgroundBrush: FSlateBrush;
    ForegroundColor: FSlateColor;
    HorizontalSeparatorBrush: FSlateBrush;
    HorizontalSeparatorThickness: number;
}
declare const FHeaderRowStyle: FHeaderRowStyle;

declare interface FHyperlinkStyle extends FSlateWidgetStyle {
    UnderlineStyle: FButtonStyle;
    TextStyle: FTextBlockStyle;
    Padding: FMargin;
}
declare const FHyperlinkStyle: FHyperlinkStyle;

declare interface FInlineEditableTextBlockStyle extends FSlateWidgetStyle {
    EditableTextBoxStyle: FEditableTextBoxStyle;
    TextStyle: FTextBlockStyle;
}
declare const FInlineEditableTextBlockStyle: FInlineEditableTextBlockStyle;

declare interface FInlineTextImageStyle extends FSlateWidgetStyle {
    Image: FSlateBrush;
    Baseline: int16;
}
declare const FInlineTextImageStyle: FInlineTextImageStyle;

declare interface FInputEvent {

}
declare const FInputEvent: FInputEvent;

declare interface FKeyEvent extends FInputEvent {

}
declare const FKeyEvent: FKeyEvent;

declare interface FMargin {
    Left: number;
    Top: number;
    Right: number;
    Bottom: number;
}
declare const FMargin: FMargin;

declare interface FMotionEvent extends FInputEvent {

}
declare const FMotionEvent: FMotionEvent;

declare interface FNavigationEvent extends FInputEvent {

}
declare const FNavigationEvent: FNavigationEvent;

declare interface FPointerEvent extends FInputEvent {

}
declare const FPointerEvent: FPointerEvent;

declare interface FProgressBarStyle extends FSlateWidgetStyle {
    BackgroundImage: FSlateBrush;
    FillImage: FSlateBrush;
    MarqueeImage: FSlateBrush;
    EnableFillAnimation: boolean;
}
declare const FProgressBarStyle: FProgressBarStyle;

declare interface FScrollBarStyle extends FSlateWidgetStyle {
    HorizontalBackgroundImage: FSlateBrush;
    VerticalBackgroundImage: FSlateBrush;
    VerticalTopSlotImage: FSlateBrush;
    HorizontalTopSlotImage: FSlateBrush;
    VerticalBottomSlotImage: FSlateBrush;
    HorizontalBottomSlotImage: FSlateBrush;
    NormalThumbImage: FSlateBrush;
    HoveredThumbImage: FSlateBrush;
    DraggedThumbImage: FSlateBrush;
    Thickness: number;
}
declare const FScrollBarStyle: FScrollBarStyle;

declare interface FScrollBorderStyle extends FSlateWidgetStyle {
    TopShadowBrush: FSlateBrush;
    BottomShadowBrush: FSlateBrush;
}
declare const FScrollBorderStyle: FScrollBorderStyle;

declare interface FScrollBoxStyle extends FSlateWidgetStyle {
    BarThickness: number;
    TopShadowBrush: FSlateBrush;
    BottomShadowBrush: FSlateBrush;
    LeftShadowBrush: FSlateBrush;
    RightShadowBrush: FSlateBrush;
    HorizontalScrolledContentPadding: FMargin;
    VerticalScrolledContentPadding: FMargin;
}
declare const FScrollBoxStyle: FScrollBoxStyle;

declare interface FSearchBoxStyle extends FSlateWidgetStyle {
    TextBoxStyle: FEditableTextBoxStyle;
    ActiveFontInfo: FSlateFontInfo;
    UpArrowImage: FSlateBrush;
    DownArrowImage: FSlateBrush;
    GlassImage: FSlateBrush;
    ClearImage: FSlateBrush;
    ImagePadding: FMargin;
    ImageSizeOverride: TOptional<FVector2D>;
    bLeftAlignButtons: boolean;
    bLeftAlignSearchResultButtons: boolean;
    bLeftAlignGlassImageAndClearButton: boolean;
}
declare const FSearchBoxStyle: FSearchBoxStyle;

declare interface FSegmentedControlStyle extends FSlateWidgetStyle {
    ControlStyle: FCheckBoxStyle;
    FirstControlStyle: FCheckBoxStyle;
    LastControlStyle: FCheckBoxStyle;
    BackgroundBrush: FSlateBrush;
    UniformPadding: FMargin;
}
declare const FSegmentedControlStyle: FSegmentedControlStyle;

declare interface FSlateBrush {
    TintColor: FSlateColor;
    DrawAs: ESlateBrushDrawType;
    Tiling: ESlateBrushTileType;
    Mirroring: ESlateBrushMirrorType;
    ImageType: ESlateBrushImageType;
    ImageSize: FDeprecateSlateVector2D;
    Margin: FMargin;
    ResourceObject: UObject;
    OutlineSettings: FSlateBrushOutlineSettings;
    UVRegion: FBox2f;
    bIsDynamicallyLoaded: boolean;
    bHasUObject: boolean;
    ResourceName: FName;
}
declare const FSlateBrush: FSlateBrush;

declare interface FSlateBrushOutlineSettings {
    CornerRadii: FVector4;
    Color: FSlateColor;
    Width: number;
    RoundingType: ESlateBrushRoundingType;
    bUseBrushTransparency: boolean;
}
declare const FSlateBrushOutlineSettings: FSlateBrushOutlineSettings;

declare interface FSlateColor {
    SpecifiedColor: FLinearColor;
    ColorUseRule: ESlateColorStylingMode;
}
declare const FSlateColor: FSlateColor;

declare interface FSlateFontInfo {
    FontObject: UObject;
    FontMaterial: UObject;
    OutlineSettings: FFontOutlineSettings;
    TypefaceFontName: FName;
    Size: number;
    LetterSpacing: number;
    SkewAmount: number;
    bForceMonospaced: boolean;
    bMaterialIsStencil: boolean;
    MonospacedWidth: number;
}
declare const FSlateFontInfo: FSlateFontInfo;

declare interface FSlateSound {
    ResourceObject: UObject;
}
declare const FSlateSound: FSlateSound;

declare interface FSlateWidgetStyle {

}
declare const FSlateWidgetStyle: FSlateWidgetStyle;

declare interface FSliderStyle extends FSlateWidgetStyle {
    NormalBarImage: FSlateBrush;
    HoveredBarImage: FSlateBrush;
    DisabledBarImage: FSlateBrush;
    NormalThumbImage: FSlateBrush;
    HoveredThumbImage: FSlateBrush;
    DisabledThumbImage: FSlateBrush;
    BarThickness: number;
}
declare const FSliderStyle: FSliderStyle;

declare interface FSpinBoxStyle extends FSlateWidgetStyle {
    BackgroundBrush: FSlateBrush;
    ActiveBackgroundBrush: FSlateBrush;
    HoveredBackgroundBrush: FSlateBrush;
    ActiveFillBrush: FSlateBrush;
    HoveredFillBrush: FSlateBrush;
    InactiveFillBrush: FSlateBrush;
    ArrowsImage: FSlateBrush;
    ForegroundColor: FSlateColor;
    TextPadding: FMargin;
    InsetPadding: FMargin;
}
declare const FSpinBoxStyle: FSpinBoxStyle;

declare interface FSplitterStyle extends FSlateWidgetStyle {
    HandleNormalBrush: FSlateBrush;
    HandleHighlightBrush: FSlateBrush;
}
declare const FSplitterStyle: FSplitterStyle;

declare interface FStyleColorList {
    StyleColors: FLinearColor;
}
declare const FStyleColorList: FStyleColorList;

declare interface FStyleTheme {

}
declare const FStyleTheme: FStyleTheme;

declare interface FTableColumnHeaderStyle extends FSlateWidgetStyle {
    SortPrimaryAscendingImage: FSlateBrush;
    SortPrimaryDescendingImage: FSlateBrush;
    SortSecondaryAscendingImage: FSlateBrush;
    SortSecondaryDescendingImage: FSlateBrush;
    NormalBrush: FSlateBrush;
    HoveredBrush: FSlateBrush;
    MenuDropdownImage: FSlateBrush;
    MenuDropdownNormalBorderBrush: FSlateBrush;
    MenuDropdownHoveredBorderBrush: FSlateBrush;
}
declare const FTableColumnHeaderStyle: FTableColumnHeaderStyle;

declare interface FTableRowStyle extends FSlateWidgetStyle {
    SelectorFocusedBrush: FSlateBrush;
    ActiveHoveredBrush: FSlateBrush;
    ActiveBrush: FSlateBrush;
    InactiveHoveredBrush: FSlateBrush;
    InactiveBrush: FSlateBrush;
    bUseParentRowBrush: boolean;
    ParentRowBackgroundBrush: FSlateBrush;
    ParentRowBackgroundHoveredBrush: FSlateBrush;
    EvenRowBackgroundHoveredBrush: FSlateBrush;
    EvenRowBackgroundBrush: FSlateBrush;
    OddRowBackgroundHoveredBrush: FSlateBrush;
    OddRowBackgroundBrush: FSlateBrush;
    TextColor: FSlateColor;
    SelectedTextColor: FSlateColor;
    DropIndicator_Above: FSlateBrush;
    DropIndicator_Onto: FSlateBrush;
    DropIndicator_Below: FSlateBrush;
    ActiveHighlightedBrush: FSlateBrush;
    InactiveHighlightedBrush: FSlateBrush;
}
declare const FTableRowStyle: FTableRowStyle;

declare interface FTableViewStyle extends FSlateWidgetStyle {
    BackgroundBrush: FSlateBrush;
}
declare const FTableViewStyle: FTableViewStyle;

declare interface FTextBlockStyle extends FSlateWidgetStyle {
    Font: FSlateFontInfo;
    ColorAndOpacity: FSlateColor;
    ShadowOffset: FDeprecateSlateVector2D;
    ShadowColorAndOpacity: FLinearColor;
    SelectedBackgroundColor: FSlateColor;
    HighlightColor: FSlateColor;
    HighlightShape: FSlateBrush;
    StrikeBrush: FSlateBrush;
    UnderlineBrush: FSlateBrush;
    TransformPolicy: ETextTransformPolicy;
    OverflowPolicy: ETextOverflowPolicy;
}
declare const FTextBlockStyle: FTextBlockStyle;

declare interface FToolBarStyle extends FSlateWidgetStyle {
    BackgroundBrush: FSlateBrush;
    ExpandBrush: FSlateBrush;
    SeparatorBrush: FSlateBrush;
    LabelStyle: FTextBlockStyle;
    EditableTextStyle: FEditableTextBoxStyle;
    ToggleButton: FCheckBoxStyle;
    ComboButtonStyle: FComboButtonStyle;
    SettingsButtonStyle: FButtonStyle;
    SettingsComboButton: FComboButtonStyle;
    SettingsToggleButton: FCheckBoxStyle;
    ButtonStyle: FButtonStyle;
    LabelPadding: FMargin;
    UniformBlockWidth: number;
    UniformBlockHeight: number;
    NumColumns: number;
    IconPadding: FMargin;
    SeparatorPadding: FMargin;
    SeparatorThickness: number;
    ComboButtonPadding: FMargin;
    ButtonPadding: FMargin;
    CheckBoxPadding: FMargin;
    BlockPadding: FMargin;
    IndentedBlockPadding: FMargin;
    BlockHovered: FSlateBrush;
    BackgroundPadding: FMargin;
    WrapButtonStyle: FWrapButtonStyle;
    WrapButtonPadding: FMargin;
    WrapButtonIndex: number;
    bAllowWrapButton: boolean;
    bAllowWrappingDefault: boolean;
    IconSize: FDeprecateSlateVector2D;
    bShowLabels: boolean;
    ButtonContentMaxWidth: number;
    ButtonContentFillWidth: number;
    ComboContentMinWidth: number;
    ComboContentMaxWidth: number;
    ComboContentHorizontalAlignment: EHorizontalAlignment;
    IconPaddingWithVisibleLabel: FMargin;
    IconPaddingWithCollapsedLabel: FMargin;
    VerticalAlignmentOverride: TOptional<EVerticalAlignment>;
    RaisedChildrenRightPadding: number;
}
declare const FToolBarStyle: FToolBarStyle;

declare interface FTypeface {
    Fonts: TArray<FTypefaceEntry>;
}
declare const FTypeface: FTypeface;

declare interface FTypefaceEntry {
    Name: FName;
    Font: FFontData;
}
declare const FTypefaceEntry: FTypefaceEntry;

declare interface FVolumeControlStyle extends FSlateWidgetStyle {
    SliderStyle: FSliderStyle;
    HighVolumeImage: FSlateBrush;
    MidVolumeImage: FSlateBrush;
    LowVolumeImage: FSlateBrush;
    NoVolumeImage: FSlateBrush;
    MutedImage: FSlateBrush;
}
declare const FVolumeControlStyle: FVolumeControlStyle;

declare interface FWindowStyle extends FSlateWidgetStyle {
    MinimizeButtonStyle: FButtonStyle;
    MaximizeButtonStyle: FButtonStyle;
    RestoreButtonStyle: FButtonStyle;
    EnterFullscreenButtonStyle: FButtonStyle;
    ExitFullscreenButtonStyle: FButtonStyle;
    CloseButtonStyle: FButtonStyle;
    TitleTextStyle: FTextBlockStyle;
    ActiveTitleBrush: FSlateBrush;
    InactiveTitleBrush: FSlateBrush;
    FlashTitleBrush: FSlateBrush;
    BackgroundColor: FSlateColor;
    OutlineBrush: FSlateBrush;
    OutlineColor: FSlateColor;
    BorderBrush: FSlateBrush;
    BorderColor: FSlateColor;
    BackgroundBrush: FSlateBrush;
    ChildBackgroundBrush: FSlateBrush;
    WindowCornerRadius: number;
    BorderPadding: FMargin;
}
declare const FWindowStyle: FWindowStyle;

declare interface FWrapButtonStyle {
    Padding: FMargin;
    WrapButtonIndex: number;
    ExpandBrush: FSlateBrush;
    bHasDownArrow: boolean;
    ComboButtonStyle: TOptional<FComboButtonStyle>;
    bIncludeSeparator: boolean;
    SeparatorBrush: TOptional<FSlateBrush>;
    SeparatorThickness: TOptional<number>;
    SeparatorPadding: TOptional<FMargin>;
}
declare const FWrapButtonStyle: FWrapButtonStyle;

declare interface IFontFaceInterface extends IInterface {

}
declare const IFontFaceInterface: IFontFaceInterface;

declare interface IFontProviderInterface extends IInterface {

}
declare const IFontProviderInterface: IFontProviderInterface;

declare interface ISlateWidgetStyleContainerInterface extends IInterface {

}
declare const ISlateWidgetStyleContainerInterface: ISlateWidgetStyleContainerInterface;

declare interface UFontBulkData extends UObject {

}
declare const UFontBulkData: UFontBulkData;

declare interface USlateThemeManager extends UObject {
    CurrentThemeId: FGuid;
    ActiveColors: FStyleColorList;
}
declare const USlateThemeManager: USlateThemeManager;

declare interface USlateTypes extends UObject {

}
declare const USlateTypes: USlateTypes;

declare interface USlateWidgetStyleAsset extends UObject {
    CustomStyle: USlateWidgetStyleContainerBase;
}
declare const USlateWidgetStyleAsset: USlateWidgetStyleAsset;

declare interface USlateWidgetStyleContainerBase extends UObject {

}
declare const USlateWidgetStyleContainerBase: USlateWidgetStyleContainerBase;

