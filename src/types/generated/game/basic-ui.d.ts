declare interface FBasicBrush {
    bFromAsset: boolean;
    Asset: UBasicBrushAsset;
    Value: FSlateBrushFactory;
}

declare interface FBasicColor {
    bFromAsset: boolean;
    Asset: UBasicColorAsset;
    Value: FLinearColor;
}

declare interface FBasicData {
    Index: number;
    Object: TWeakObjectPtr<UObject>;
    Guid: FGuid;
}

declare interface FBasicMaterialParameters {
    Scalars: TMap<string, number>;
    Vectors: TMap<string, FVector4>;
    Colors: TMap<string, FBasicColor>;
    Textures: TMap<string, UTexture2D>;
}

declare interface FBasicPanelScale {
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    Stretch: EStretch;
    StretchDirection: EStretchDirection;
    UserSpecifiedScale: number;
}

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

declare interface FBasicPanelSize {
    Width: number;
    Height: number;
    MinWidth: number;
    MinHeight: number;
    MaxWidth: number;
    MaxHeight: number;
}

declare interface FBasicRichTextOverrides {
    bOverrideDefaultFontSize: boolean;
    OverrideDefaultFontSize: number;
    bOverrideDefaultFontColor: boolean;
    OverrideDefaultFontColor: FBasicColor;
}

declare interface FBasicRichTextSettings {
    DefaultTextStyle: FBasicTextStyle;
    RichTextStyles: TMap<string, FBasicTextStyle>;
    DecoratorClasses: TSubclassOf<URichTextBlockDecorator>[];
}

declare interface FBasicRichTextStyle {
    bFromAsset: boolean;
    Asset: UBasicRichTextStyleAsset;
    Value: FBasicRichTextSettings;
}

declare interface FBasicSlotSettings {
    Size: FSlateChildSize;
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
}

declare interface FBasicTextBlockStyle {
    Font: FSlateFontInfo;
    ColorAndOpacity: FBasicColor;
    ShadowOffset: FVector2D;
    ShadowColorAndOpacity: FBasicColor;
    TransformPolicy: ETextTransformPolicy;
    OverflowPolicy: ETextOverflowPolicy;
}

declare interface FBasicTextStyle {
    bFromAsset: boolean;
    Asset: UBasicTextStyleAsset;
    Value: FBasicTextBlockStyle;
}

declare interface FScrollBoxSettings {
    Style: FScrollBoxStyle;
    ScrollBarStyle: FScrollBarStyle;
    ContentPadding: FMargin;
}

declare interface FSlateBrushFactory {
    SlateBrush: FSlateBrush;
    BasicTint: FBasicColor;
    MaterialParameters: FBasicMaterialParameters;
}

declare interface IBasicActivatable extends IInterface {
    readonly __static_IBasicActivatable: {
        OnDeactivated(): void;
        OnActivated(): void;
    };
    readonly __staticRegistry: 
        IBasicActivatable['__static_IBasicActivatable'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UBasicBrushAsset extends UDataAsset {
    readonly __properties_UBasicBrushAsset: {
        Brush: FSlateBrushFactory;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicBrushAsset['__properties_UBasicBrushAsset'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UBasicBrushLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBasicBrushLibrary: {
        BasicToSlateBrush(WorldContext: UObject, InBasicBrush: FBasicBrush): FSlateBrush;
    };
    readonly __staticRegistry: 
        UBasicBrushLibrary['__static_UBasicBrushLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBasicButtonWidget extends UBasicUserWidget {
    readonly __static_UBasicButtonWidget: {
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
    };
    readonly __properties_UBasicButtonWidget: {
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
    };
    readonly __staticRegistry: 
        UBasicButtonWidget['__static_UBasicButtonWidget'] &
        UBasicUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicButtonWidget['__properties_UBasicButtonWidget'] &
        UBasicUserWidget['__propertyRegistry'];
}

declare interface UBasicColorAsset extends UDataAsset {
    readonly __properties_UBasicColorAsset: {
        Color: FLinearColor;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicColorAsset['__properties_UBasicColorAsset'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UBasicColorLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBasicColorLibrary: {
        LinearToBasicColor(InColor: FLinearColor): FBasicColor;
        BasicToSlateColor(InBasicColor: FBasicColor): FSlateColor;
        BasicToLinearColor(InBasicColor: FBasicColor): FLinearColor;
        AssetToLinearColor(InReferenceColor: UBasicColorAsset): FLinearColor;
        AssetToBasicColor(InReferenceColor: UBasicColorAsset): FBasicColor;
    };
    readonly __staticRegistry: 
        UBasicColorLibrary['__static_UBasicColorLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBasicImage extends UBasicUserWidget {
    readonly __static_UBasicImage: {
        SetDynamicMaterialVector(InName: string, InVector: FVector4): void;
        SetDynamicMaterialTexture(InName: string, InTexture: UTexture2D): void;
        SetDynamicMaterialScalar(InName: string, InValue: number): void;
        SetDynamicMaterialParameters(InParameters: FBasicMaterialParameters): void;
        SetDynamicMaterialColor(InName: string, InColor: FBasicColor): void;
        SetBrushFromTexture(InTexture: UTexture2D, InMatchSize: boolean): void;
        SetBrushColor(InColor: FBasicColor): void;
        SetBrush(InBrush: FBasicBrush): void;
        ResetDynamicMaterialVector(InName: string): void;
        ResetDynamicMaterialTexture(InName: string): void;
        ResetDynamicMaterialScalar(InName: string): void;
        ResetDynamicMaterialColor(InName: string): void;
        GetSlateBrush(): FSlateBrush;
        GetDynamicMaterial(): UMaterialInstanceDynamic;
        GetDefaultDynamicMaterialParameters(): FBasicMaterialParameters;
    };
    readonly __properties_UBasicImage: {
        Brush: FBasicBrush;
        BrushColor: FBasicColor;
        MaterialParameters: FBasicMaterialParameters;
        bMaterialSetWidgetScale: boolean;
        MaterialWidgetScaleParameter: string;
        InnerImage: UImage;
        PaintData: UBasicImagePaintData;
        SlateBrush: FSlateBrush;
    };
    readonly __staticRegistry: 
        UBasicImage['__static_UBasicImage'] &
        UBasicUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicImage['__properties_UBasicImage'] &
        UBasicUserWidget['__propertyRegistry'];
}

declare interface UBasicImagePaintData extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UBasicPanel extends UPanelWidget {
    readonly __static_UBasicPanel: {
        CreateChildren(InWidgetClass: TSubclassOf<UWidget>, InNumChildren: number, InSlotSettings: FBasicSlotSettings, InClearPanelBefore: boolean): UWidget[];
        CreateChild(InWidgetClass: TSubclassOf<UWidget>, InSlotSettings: FBasicSlotSettings): UWidget;
        AddChildToPanel(InChild: UWidget, InSlotSettings: FBasicSlotSettings): UBasicSlot;
        AddChildren(InChildren: UWidget[], InSlotSettings: FBasicSlotSettings, InClearPanelBefore: boolean): void;
    };
    readonly __properties_UBasicPanel: {
        Type: EBasicPanelType;
        Settings: FBasicPanelSettings;
    };
    readonly __staticRegistry: 
        UBasicPanel['__static_UBasicPanel'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicPanel['__properties_UBasicPanel'] &
        UPanelWidget['__propertyRegistry'];
}

declare interface UBasicPanelFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBasicPanelFunctionLibrary: {
        ApplySizeBoxSettings(InSizeBox: USizeBox, InSizeSettings: FBasicPanelSize): void;
    };
    readonly __staticRegistry: 
        UBasicPanelFunctionLibrary['__static_UBasicPanelFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBasicRichTextBlock extends UBasicTextLayoutBlock {
    readonly __properties_UBasicRichTextBlock: {
        Text: string;
        Style: FBasicRichTextStyle;
        StyleOverride: FBasicRichTextOverrides;
        TransformPolicy: ETextTransformPolicy;
        OverflowPolicy: ETextOverflowPolicy;
        InnerRichText: URichTextBlock;
        InnerStyleSet: UDataTable;
    };
    readonly __staticRegistry: 
        UBasicTextLayoutBlock['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicRichTextBlock['__properties_UBasicRichTextBlock'] &
        UBasicTextLayoutBlock['__propertyRegistry'];
}

declare interface UBasicRichTextStyleAsset extends UDataAsset {
    readonly __properties_UBasicRichTextStyleAsset: {
        Settings: FBasicRichTextSettings;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicRichTextStyleAsset['__properties_UBasicRichTextStyleAsset'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UBasicSlot extends UPanelSlot {
    readonly __properties_UBasicSlot: {
        Size: FSlateChildSize;
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicSlot['__properties_UBasicSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UBasicTextBlock extends UBasicTextLayoutBlock {
    readonly __static_UBasicTextBlock: {
        SetTextStyle(InStyle: FBasicTextStyle): void;
    };
    readonly __properties_UBasicTextBlock: {
        Text: string;
        TextStyle: FBasicTextStyle;
        InnerTextBlock: UTextBlock;
    };
    readonly __staticRegistry: 
        UBasicTextBlock['__static_UBasicTextBlock'] &
        UBasicTextLayoutBlock['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicTextBlock['__properties_UBasicTextBlock'] &
        UBasicTextLayoutBlock['__propertyRegistry'];
}

declare interface UBasicTextLayoutBlock extends UBasicUserWidget {
    readonly __static_UBasicTextLayoutBlock: {
        SetWrapTextAt(InWrapTextAt: number): void;
        SetText(InText: string): void;
        InsertText(InNewText: string, InDelimiter: string): void;
        GetText(): string;
        AppendText(InNewText: string, InDelimiter: string): void;
    };
    readonly __properties_UBasicTextLayoutBlock: {
        Justification: ETextJustify;
        MinDesiredWidth: number;
        bAutoWrapText: boolean;
        WrapTextAt: number;
        WrappingPolicy: ETextWrappingPolicy;
    };
    readonly __staticRegistry: 
        UBasicTextLayoutBlock['__static_UBasicTextLayoutBlock'] &
        UBasicUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicTextLayoutBlock['__properties_UBasicTextLayoutBlock'] &
        UBasicUserWidget['__propertyRegistry'];
}

declare interface UBasicTextStyleAsset extends UDataAsset {
    readonly __properties_UBasicTextStyleAsset: {
        Style: FBasicTextBlockStyle;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicTextStyleAsset['__properties_UBasicTextStyleAsset'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UBasicUserWidget extends UUserWidget {
    readonly __static_UBasicUserWidget: {
        SetBasicDataObject(InObject: UObject): void;
        SetBasicDataIndex(InIndex: number): void;
        SetBasicDataGuid(InGuid: FGuid): void;
        SetBasicData(InBasicData: FBasicData): void;
        BasicDataDelegate__DelegateSignature(InOwner: UBasicUserWidget, InData: FBasicData): void;
    };
    readonly __properties_UBasicUserWidget: {
        OnBasicDataChanged: FBasicUserWidgetOnBasicDataChanged;
        BasicData: FBasicData;
    };
    readonly __staticRegistry: 
        UBasicUserWidget['__static_UBasicUserWidget'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicUserWidget['__properties_UBasicUserWidget'] &
        UUserWidget['__propertyRegistry'];
}

declare interface UBasicWidgetSwitcher extends UWidgetSwitcher {
    readonly __static_UBasicWidgetSwitcher: {
        WidgetRemoved__DelegateSignature(InSwitcher: UBasicWidgetSwitcher, InActiveWidget: UWidget): void;
        WidgetAdded__DelegateSignature(InSwitcher: UBasicWidgetSwitcher, InIndex: number, InActiveWidget: UWidget): void;
        GotoNext(InReverse: boolean, InCircular: boolean): UWidget;
        ActiveWidgetChanged__DelegateSignature(InSwitcher: UBasicWidgetSwitcher, InIndex: number, InActiveWidget: UWidget): void;
    };
    readonly __properties_UBasicWidgetSwitcher: {
        OnActiveWidgetChanged: FBasicWidgetSwitcherOnActiveWidgetChanged;
        OnWidgetAdded: FBasicWidgetSwitcherOnWidgetAdded;
        OnWidgetRemoved: FBasicWidgetSwitcherOnWidgetRemoved;
        PanelSettings: FBasicPanelSettings;
    };
    readonly __staticRegistry: 
        UBasicWidgetSwitcher['__static_UBasicWidgetSwitcher'] &
        UWidgetSwitcher['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicWidgetSwitcher['__properties_UBasicWidgetSwitcher'] &
        UWidgetSwitcher['__propertyRegistry'];
}

declare interface UBasicWidgetSwitcherSlot extends UWidgetSwitcherSlot {
    readonly __static_UBasicWidgetSwitcherSlot: {
        SlotDelegate__DelegateSignature(InSlot: UBasicWidgetSwitcherSlot): void;
        SetTitleAndIcon(InTitle: string, InIcon: UTexture2D): void;
        SetTitle(InTitle: string): void;
        SetIcon(InIcon: UTexture2D): void;
    };
    readonly __properties_UBasicWidgetSwitcherSlot: {
        OnInfoChanged: FBasicWidgetSwitcherSlotOnInfoChanged;
        Title: string;
        Icon: UTexture2D;
    };
    readonly __staticRegistry: 
        UBasicWidgetSwitcherSlot['__static_UBasicWidgetSwitcherSlot'] &
        UWidgetSwitcherSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicWidgetSwitcherSlot['__properties_UBasicWidgetSwitcherSlot'] &
        UWidgetSwitcherSlot['__propertyRegistry'];
}

declare interface UScrollBoxAsset extends UDataAsset {
    readonly __properties_UScrollBoxAsset: {
        Settings: FScrollBoxSettings;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UScrollBoxAsset['__properties_UScrollBoxAsset'] &
        UDataAsset['__propertyRegistry'];
}

