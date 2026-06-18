declare interface FAnalogInputEvent extends FKeyEvent {

}

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

declare type FCaptureLostEvent = object;

declare interface FCharacterEvent extends FInputEvent {

}

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

declare interface FComboBoxStyle extends FSlateWidgetStyle {
    ComboButtonStyle: FComboButtonStyle;
    PressedSlateSound: FSlateSound;
    SelectionChangeSlateSound: FSlateSound;
    ContentPadding: FMargin;
    MenuRowPadding: FMargin;
}

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

declare interface FCompositeFallbackFont {
    Typeface: FTypeface;
    ScalingFactor: number;
}

declare interface FCompositeFont {
    DefaultTypeface: FTypeface;
    FallbackTypeface: FCompositeFallbackFont;
    SubTypefaces: FCompositeSubFont[];
    bEnableAscentDescentOverride: boolean;
}

declare interface FCompositeSubFont extends FCompositeFallbackFont {
    CharacterRanges: FInt32Range[];
    Cultures: string;
}

declare interface FDeprecateSlateVector2D extends FVector2f {

}

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

declare interface FEditableTextStyle extends FSlateWidgetStyle {
    Font: FSlateFontInfo;
    ColorAndOpacity: FSlateColor;
    BackgroundImageSelected: FSlateBrush;
    BackgroundImageComposing: FSlateBrush;
    CaretImage: FSlateBrush;
}

declare interface FExpandableAreaStyle extends FSlateWidgetStyle {
    CollapsedImage: FSlateBrush;
    ExpandedImage: FSlateBrush;
    RolloutAnimationSeconds: number;
}

declare type FFocusEvent = object;

declare interface FFontData {
    FontFilename: string;
    Hinting: EFontHinting;
    LoadingPolicy: EFontLoadingPolicy;
    SubFaceIndex: number;
    FontFaceAsset: UObject;
}

declare interface FFontOutlineSettings {
    OutlineSize: number;
    bMiteredCorners: boolean;
    bSeparateFillAlpha: boolean;
    bApplyOutlineToDropShadows: boolean;
    OutlineMaterial: UObject;
    OutlineColor: FLinearColor;
}

declare interface FFontSdfSettings {
    BasePpem: number;
}

declare type FGeometry = object;

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

declare interface FHyperlinkStyle extends FSlateWidgetStyle {
    UnderlineStyle: FButtonStyle;
    TextStyle: FTextBlockStyle;
    Padding: FMargin;
}

declare interface FInlineEditableTextBlockStyle extends FSlateWidgetStyle {
    EditableTextBoxStyle: FEditableTextBoxStyle;
    TextStyle: FTextBlockStyle;
}

declare interface FInlineTextImageStyle extends FSlateWidgetStyle {
    Image: FSlateBrush;
    Baseline: number;
}

declare type FInputEvent = object;

declare interface FKeyEvent extends FInputEvent {

}

declare interface FMargin {
    Left: number;
    Top: number;
    Right: number;
    Bottom: number;
}

declare interface FMotionEvent extends FInputEvent {

}

declare interface FNavigationEvent extends FInputEvent {

}

declare interface FPointerEvent extends FInputEvent {

}

declare interface FProgressBarStyle extends FSlateWidgetStyle {
    BackgroundImage: FSlateBrush;
    FillImage: FSlateBrush;
    MarqueeImage: FSlateBrush;
    EnableFillAnimation: boolean;
}

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

declare interface FScrollBorderStyle extends FSlateWidgetStyle {
    TopShadowBrush: FSlateBrush;
    BottomShadowBrush: FSlateBrush;
}

declare interface FScrollBoxStyle extends FSlateWidgetStyle {
    BarThickness: number;
    TopShadowBrush: FSlateBrush;
    BottomShadowBrush: FSlateBrush;
    LeftShadowBrush: FSlateBrush;
    RightShadowBrush: FSlateBrush;
    HorizontalScrolledContentPadding: FMargin;
    VerticalScrolledContentPadding: FMargin;
}

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

declare interface FSegmentedControlStyle extends FSlateWidgetStyle {
    ControlStyle: FCheckBoxStyle;
    FirstControlStyle: FCheckBoxStyle;
    LastControlStyle: FCheckBoxStyle;
    BackgroundBrush: FSlateBrush;
    UniformPadding: FMargin;
}

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
    ResourceName: string;
}

declare interface FSlateBrushOutlineSettings {
    CornerRadii: FVector4;
    Color: FSlateColor;
    Width: number;
    RoundingType: ESlateBrushRoundingType;
    bUseBrushTransparency: boolean;
}

declare interface FSlateColor {
    SpecifiedColor: FLinearColor;
    ColorUseRule: ESlateColorStylingMode;
}

declare interface FSlateFontInfo {
    FontObject: UObject;
    FontMaterial: UObject;
    OutlineSettings: FFontOutlineSettings;
    TypefaceFontName: string;
    Size: number;
    LetterSpacing: number;
    SkewAmount: number;
    bForceMonospaced: boolean;
    bMaterialIsStencil: boolean;
    MonospacedWidth: number;
}

declare interface FSlateSound {
    ResourceObject: UObject;
}

declare type FSlateWidgetStyle = object;

declare interface FSliderStyle extends FSlateWidgetStyle {
    NormalBarImage: FSlateBrush;
    HoveredBarImage: FSlateBrush;
    DisabledBarImage: FSlateBrush;
    NormalThumbImage: FSlateBrush;
    HoveredThumbImage: FSlateBrush;
    DisabledThumbImage: FSlateBrush;
    BarThickness: number;
}

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

declare interface FSplitterStyle extends FSlateWidgetStyle {
    HandleNormalBrush: FSlateBrush;
    HandleHighlightBrush: FSlateBrush;
}

declare interface FStyleColorList {
    StyleColors: FLinearColor;
}

declare type FStyleTheme = object;

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

declare interface FTableViewStyle extends FSlateWidgetStyle {
    BackgroundBrush: FSlateBrush;
}

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

declare interface FTypeface {
    Fonts: FTypefaceEntry[];
}

declare interface FTypefaceEntry {
    Name: string;
    Font: FFontData;
}

declare interface FVolumeControlStyle extends FSlateWidgetStyle {
    SliderStyle: FSliderStyle;
    HighVolumeImage: FSlateBrush;
    MidVolumeImage: FSlateBrush;
    LowVolumeImage: FSlateBrush;
    NoVolumeImage: FSlateBrush;
    MutedImage: FSlateBrush;
}

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

declare interface IFontFaceInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IFontProviderInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ISlateWidgetStyleContainerInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UFontBulkData extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USlateThemeManager extends UObject {
    readonly __properties_USlateThemeManager: {
        CurrentThemeId: FGuid;
        ActiveColors: FStyleColorList;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USlateThemeManager['__properties_USlateThemeManager'] &
        UObject['__propertyRegistry'];
}

declare interface USlateTypes extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USlateWidgetStyleAsset extends UObject {
    readonly __properties_USlateWidgetStyleAsset: {
        CustomStyle: USlateWidgetStyleContainerBase;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USlateWidgetStyleAsset['__properties_USlateWidgetStyleAsset'] &
        UObject['__propertyRegistry'];
}

declare interface USlateWidgetStyleContainerBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

