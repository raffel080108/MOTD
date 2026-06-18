declare interface FAnchorData {
    Offsets: FMargin;
    Anchors: FAnchors;
    Alignment: FVector2D;
}

declare interface FAnimationEventBinding {
    Animation: UWidgetAnimation;
    Delegate: FAnimationEventBindingDelegate;
    AnimationEvent: EWidgetAnimationEvent;
    UserTag: string;
}

declare interface FBlueprintWidgetAnimationDelegateBinding {
    Action: EWidgetAnimationEvent;
    AnimationToBind: string;
    FunctionNameToBind: string;
    UserTag: string;
}

declare interface FDelegateRuntimeBinding {
    ObjectName: string;
    PropertyName: string;
    FunctionName: string;
    SourcePath: FDynamicPropertyPath;
    Kind: EBindingKind;
}

declare interface FDynamicPropertyPath extends FCachedPropertyPath {

}

declare type FEventReply = object;

declare interface FGameViewportWidgetSlot {
    Anchors: FAnchors;
    Offsets: FMargin;
    Alignment: FVector2D;
    ZOrder: number;
    bAutoRemoveOnWorldRemoved: boolean;
}

declare interface FMovieScene2DTransformMask {
    Mask: number;
}

declare interface FNamedSlotBinding {
    Name: string;
    Content: UWidget;
}

declare type FPaintContext = object;

declare interface FQueuedWidgetAnimationTransition {
    WidgetAnimation: UWidgetAnimation;
}

declare interface FRadialBoxSettings {
    StartingAngle: number;
    bDistributeItemsEvenly: boolean;
    AngleBetweenItems: number;
    SectorCentralAngle: number;
}

declare interface FRichImageRow extends FTableRowBase {
    Brush: FSlateBrush;
}

declare interface FRichTextStyleRow extends FTableRowBase {
    TextStyle: FTextBlockStyle;
}

declare type FSequenceTickManagerWidgetData = object;

declare interface FShapedTextOptions {
    bOverride_TextShapingMethod: boolean;
    bOverride_TextFlowDirection: boolean;
    TextShapingMethod: ETextShapingMethod;
    TextFlowDirection: ETextFlowDirection;
}

declare interface FSlateChildSize {
    Value: number;
    SizeRule: ESlateSizeRule;
}

declare interface FSlateMeshVertex {
    position: FVector2f;
    Color: FColor;
    UV0: FVector2f;
    UV1: FVector2f;
    UV2: FVector2f;
    UV3: FVector2f;
    UV4: FVector2f;
    UV5: FVector2f;
}

declare interface FSlatePostBufferUpdateInfo {
    BufferToUpdate: ESlatePostRT;
    PostParamUpdater: USlatePostBufferProcessorUpdater;
}

declare interface FUIComponentTarget {
    TargetName: string;
    Component: UUIComponent;
}

declare interface FUserWidgetPool {
    ActiveWidgets: UUserWidget[];
    InactiveWidgets: UUserWidget[];
}

declare interface FWidgetAnimationBinding {
    WidgetName: string;
    SlotWidgetName: string;
    AnimationGuid: FGuid;
    bIsRootWidget: boolean;
    DynamicBinding: FMovieSceneDynamicBinding;
}

declare interface FWidgetAnimationHandle {
    WeakUserWidget: TWeakObjectPtr<UUserWidget>;
    StateIndex: number;
    StateSerial: number;
}

declare interface FWidgetChild {
    WidgetName: string;
    WidgetPtr: TWeakObjectPtr<UWidget>;
}

declare interface FWidgetComponentInstanceData extends FSceneComponentInstanceData {

}

declare type FWidgetEventField = object;

declare interface FWidgetNavigationData {
    Rule: EUINavigationRule;
    WidgetToFocus: string;
    Widget: TWeakObjectPtr<UWidget>;
    CustomDelegate: FWidgetNavigationDataCustomDelegate;
}

declare type FWidgetStateBitfield = object;

declare interface FWidgetTransform {
    Translation: FVector2D;
    Scale: FVector2D;
    Shear: FVector2D;
    Angle: number;
}

declare interface INamedSlotInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IUserListEntry extends IInterface {
    readonly __static_IUserListEntry: {
        BP_OnItemSelectionChanged(bIsSelected: boolean): void;
        BP_OnItemExpansionChanged(bIsExpanded: boolean): void;
        BP_OnEntryReleased(): void;
    };
    readonly __staticRegistry: 
        IUserListEntry['__static_IUserListEntry'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IUserObjectListEntry extends IUserListEntry {
    readonly __static_IUserObjectListEntry: {
        OnListItemObjectSet(ListItemObject: UObject): void;
    };
    readonly __staticRegistry: 
        IUserObjectListEntry['__static_IUserObjectListEntry'] &
        IUserListEntry['__staticRegistry'];
    readonly __propertyRegistry: 
        IUserListEntry['__propertyRegistry'];
}

declare interface UAsyncTaskDownloadImage extends UBlueprintAsyncActionBase {
    readonly __static_UAsyncTaskDownloadImage: {
        DownloadImage(URL: string): UAsyncTaskDownloadImage;
    };
    readonly __properties_UAsyncTaskDownloadImage: {
        OnSuccess: FAsyncTaskDownloadImageOnSuccess;
        OnFail: FAsyncTaskDownloadImageOnFail;
    };
    readonly __staticRegistry: 
        UAsyncTaskDownloadImage['__static_UAsyncTaskDownloadImage'] &
        UBlueprintAsyncActionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAsyncTaskDownloadImage['__properties_UAsyncTaskDownloadImage'] &
        UBlueprintAsyncActionBase['__propertyRegistry'];
}

declare interface UBackgroundBlur extends UContentWidget {
    readonly __static_UBackgroundBlur: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetLowQualityFallbackBrush(InBrush: FSlateBrush): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
        SetCornerRadius(InCornerRadius: FVector4): void;
        SetBlurStrength(InStrength: number): void;
        SetBlurRadius(InBlurRadius: number): void;
        SetApplyAlphaToBlur(bInApplyAlphaToBlur: boolean): void;
    };
    readonly __properties_UBackgroundBlur: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
        bApplyAlphaToBlur: boolean;
        BlurStrength: number;
        bOverrideAutoRadiusCalculation: boolean;
        BlurRadius: number;
        CornerRadius: FVector4;
        LowQualityFallbackBrush: FSlateBrush;
    };
    readonly __staticRegistry: 
        UBackgroundBlur['__static_UBackgroundBlur'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBackgroundBlur['__properties_UBackgroundBlur'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UBackgroundBlurSlot extends UPanelSlot {
    readonly __static_UBackgroundBlurSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UBackgroundBlurSlot: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UBackgroundBlurSlot['__static_UBackgroundBlurSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UBackgroundBlurSlot['__properties_UBackgroundBlurSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UBoolBinding extends UPropertyBinding {
    readonly __static_UBoolBinding: {
        GetValue(): boolean;
    };
    readonly __staticRegistry: 
        UBoolBinding['__static_UBoolBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UBorder extends UContentWidget {
    readonly __static_UBorder: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetShowEffectWhenDisabled(bInShowEffectWhenDisabled: boolean): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
        SetDesiredSizeScale(InScale: FVector2D): void;
        SetContentColorAndOpacity(InContentColorAndOpacity: FLinearColor): void;
        SetBrushFromTexture(Texture: UTexture2D): void;
        SetBrushFromMaterial(Material: UMaterialInterface): void;
        SetBrushFromAsset(Asset: USlateBrushAsset): void;
        SetBrushColor(InBrushColor: FLinearColor): void;
        SetBrush(InBrush: FSlateBrush): void;
        GetDynamicMaterial(): UMaterialInstanceDynamic;
    };
    readonly __properties_UBorder: {
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
        bShowEffectWhenDisabled: boolean;
        ContentColorAndOpacity: FLinearColor;
        ContentColorAndOpacityDelegate: FBorderContentColorAndOpacityDelegate;
        Padding: FMargin;
        Background: FSlateBrush;
        BackgroundDelegate: FBorderBackgroundDelegate;
        BrushColor: FLinearColor;
        BrushColorDelegate: FBorderBrushColorDelegate;
        DesiredSizeScale: FVector2D;
        bFlipForRightToLeftFlowDirection: boolean;
        OnMouseButtonDownEvent: FBorderOnMouseButtonDownEvent;
        OnMouseButtonUpEvent: FBorderOnMouseButtonUpEvent;
        OnMouseMoveEvent: FBorderOnMouseMoveEvent;
        OnMouseDoubleClickEvent: FBorderOnMouseDoubleClickEvent;
    };
    readonly __staticRegistry: 
        UBorder['__static_UBorder'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBorder['__properties_UBorder'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UBorderSlot extends UPanelSlot {
    readonly __static_UBorderSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UBorderSlot: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UBorderSlot['__static_UBorderSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UBorderSlot['__properties_UBorderSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UBrushBinding extends UPropertyBinding {
    readonly __static_UBrushBinding: {
        GetValue(): FSlateBrush;
    };
    readonly __staticRegistry: 
        UBrushBinding['__static_UBrushBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UButton extends UContentWidget {
    readonly __static_UButton: {
        SetTouchMethod(InTouchMethod: EButtonTouchMethod): void;
        SetStyle(InStyle: FButtonStyle): void;
        SetPressMethod(InPressMethod: EButtonPressMethod): void;
        SetColorAndOpacity(InColorAndOpacity: FLinearColor): void;
        SetClickMethod(InClickMethod: EButtonClickMethod): void;
        SetBackgroundColor(InBackgroundColor: FLinearColor): void;
        IsPressed(): boolean;
    };
    readonly __properties_UButton: {
        WidgetStyle: FButtonStyle;
        ColorAndOpacity: FLinearColor;
        BackgroundColor: FLinearColor;
        ClickMethod: EButtonClickMethod;
        TouchMethod: EButtonTouchMethod;
        PressMethod: EButtonPressMethod;
        IsFocusable: boolean;
        OnClicked: FButtonOnClicked;
        OnPressed: FButtonOnPressed;
        OnReleased: FButtonOnReleased;
        OnHovered: FButtonOnHovered;
        OnUnhovered: FButtonOnUnhovered;
    };
    readonly __staticRegistry: 
        UButton['__static_UButton'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UButton['__properties_UButton'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UButtonSlot extends UPanelSlot {
    readonly __static_UButtonSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UButtonSlot: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UButtonSlot['__static_UButtonSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UButtonSlot['__properties_UButtonSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UCanvasPanel extends UPanelWidget {
    readonly __static_UCanvasPanel: {
        AddChildToCanvas(Content: UWidget): UCanvasPanelSlot;
    };
    readonly __staticRegistry: 
        UCanvasPanel['__static_UCanvasPanel'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UPanelWidget['__propertyRegistry'];
}

declare interface UCanvasPanelSlot extends UPanelSlot {
    readonly __static_UCanvasPanelSlot: {
        SetZOrder(InZOrder: number): void;
        SetSize(InSize: FVector2D): void;
        SetPosition(InPosition: FVector2D): void;
        SetOffsets(InOffset: FMargin): void;
        SetMinimum(InMinimumAnchors: FVector2D): void;
        SetMaximum(InMaximumAnchors: FVector2D): void;
        SetLayout(InLayoutData: FAnchorData): void;
        SetAutoSize(InbAutoSize: boolean): void;
        SetAnchors(InAnchors: FAnchors): void;
        SetAlignment(InAlignment: FVector2D): void;
        GetZOrder(): number;
        GetSize(): FVector2D;
        GetPosition(): FVector2D;
        GetOffsets(): FMargin;
        GetLayout(): FAnchorData;
        GetAutoSize(): boolean;
        GetAnchors(): FAnchors;
        GetAlignment(): FVector2D;
    };
    readonly __properties_UCanvasPanelSlot: {
        LayoutData: FAnchorData;
        bAutoSize: boolean;
        ZOrder: number;
    };
    readonly __staticRegistry: 
        UCanvasPanelSlot['__static_UCanvasPanelSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UCanvasPanelSlot['__properties_UCanvasPanelSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UCheckBox extends UContentWidget {
    readonly __static_UCheckBox: {
        SetTouchMethod(InTouchMethod: EButtonTouchMethod): void;
        SetPressMethod(InPressMethod: EButtonPressMethod): void;
        SetIsChecked(InIsChecked: boolean): void;
        SetClickMethod(InClickMethod: EButtonClickMethod): void;
        SetCheckedState(InCheckedState: ECheckBoxState): void;
        IsPressed(): boolean;
        IsChecked(): boolean;
        GetCheckedState(): ECheckBoxState;
    };
    readonly __properties_UCheckBox: {
        CheckedState: ECheckBoxState;
        CheckedStateDelegate: FCheckBoxCheckedStateDelegate;
        WidgetStyle: FCheckBoxStyle;
        HorizontalAlignment: EHorizontalAlignment;
        ClickMethod: EButtonClickMethod;
        TouchMethod: EButtonTouchMethod;
        PressMethod: EButtonPressMethod;
        IsFocusable: boolean;
        OnCheckStateChanged: FCheckBoxOnCheckStateChanged;
    };
    readonly __staticRegistry: 
        UCheckBox['__static_UCheckBox'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UCheckBox['__properties_UCheckBox'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UCheckedStateBinding extends UPropertyBinding {
    readonly __static_UCheckedStateBinding: {
        GetValue(): ECheckBoxState;
    };
    readonly __staticRegistry: 
        UCheckedStateBinding['__static_UCheckedStateBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UCircularThrobber extends UWidget {
    readonly __static_UCircularThrobber: {
        SetRadius(InRadius: number): void;
        SetPeriod(InPeriod: number): void;
        SetNumberOfPieces(InNumberOfPieces: number): void;
    };
    readonly __properties_UCircularThrobber: {
        NumberOfPieces: number;
        Period: number;
        Radius: number;
        Image: FSlateBrush;
        bEnableRadius: boolean;
    };
    readonly __staticRegistry: 
        UCircularThrobber['__static_UCircularThrobber'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UCircularThrobber['__properties_UCircularThrobber'] &
        UWidget['__propertyRegistry'];
}

declare interface UColorBinding extends UPropertyBinding {
    readonly __static_UColorBinding: {
        GetSlateValue(): FSlateColor;
        GetLinearValue(): FLinearColor;
    };
    readonly __staticRegistry: 
        UColorBinding['__static_UColorBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UComboBox extends UWidget {
    readonly __properties_UComboBox: {
        ScrollBarStyle: FScrollBarStyle;
        Items: UObject[];
        OnGenerateWidgetEvent: FComboBoxOnGenerateWidgetEvent;
        bIsFocusable: boolean;
    };
    readonly __staticRegistry: 
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UComboBox['__properties_UComboBox'] &
        UWidget['__propertyRegistry'];
}

declare interface UComboBoxKey extends UWidget {
    readonly __static_UComboBoxKey: {
        SetSelectedOption(Option: string): void;
        RemoveOption(Option: string): boolean;
        OnSelectionChangedEvent__DelegateSignature(SelectedItem: string, SelectionType: ESelectInfo): void;
        OnOpeningEvent__DelegateSignature(): void;
        IsOpen(): boolean;
        GetSelectedOption(): string;
        GenerateWidgetEvent__DelegateSignature(Item: string): UWidget;
        ClearSelection(): void;
        ClearOptions(): void;
        AddOption(Option: string): void;
    };
    readonly __properties_UComboBoxKey: {
        Options: string[];
        SelectedOption: string;
        WidgetStyle: FComboBoxStyle;
        ItemStyle: FTableRowStyle;
        ScrollBarStyle: FScrollBarStyle;
        ForegroundColor: FSlateColor;
        ContentPadding: FMargin;
        MaxListHeight: number;
        bHasDownArrow: boolean;
        bEnableGamepadNavigationMode: boolean;
        bIsFocusable: boolean;
        OnGenerateContentWidget: FComboBoxKeyOnGenerateContentWidget;
        OnGenerateItemWidget: FComboBoxKeyOnGenerateItemWidget;
        OnSelectionChanged: FComboBoxKeyOnSelectionChanged;
        OnOpening: FComboBoxKeyOnOpening;
    };
    readonly __staticRegistry: 
        UComboBoxKey['__static_UComboBoxKey'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UComboBoxKey['__properties_UComboBoxKey'] &
        UWidget['__propertyRegistry'];
}

declare interface UComboBoxString extends UWidget {
    readonly __static_UComboBoxString: {
        SetSelectedOption(Option: string): void;
        SetSelectedIndex(Index: number): void;
        RemoveOption(Option: string): boolean;
        RefreshOptions(): void;
        OnSelectionChangedEvent__DelegateSignature(SelectedItem: string, SelectionType: ESelectInfo): void;
        OnOpeningEvent__DelegateSignature(): void;
        IsOpen(): boolean;
        GetSelectedOption(): string;
        GetSelectedIndex(): number;
        GetOptionCount(): number;
        GetOptionAtIndex(Index: number): string;
        FindOptionIndex(Option: string): number;
        ClearSelection(): void;
        ClearOptions(): void;
        AddOption(Option: string): void;
    };
    readonly __properties_UComboBoxString: {
        DefaultOptions: string[];
        SelectedOption: string;
        WidgetStyle: FComboBoxStyle;
        ItemStyle: FTableRowStyle;
        ScrollBarStyle: FScrollBarStyle;
        ContentPadding: FMargin;
        MaxListHeight: number;
        HasDownArrow: boolean;
        EnableGamepadNavigationMode: boolean;
        Font: FSlateFontInfo;
        ForegroundColor: FSlateColor;
        bIsFocusable: boolean;
        OnGenerateWidgetEvent: FComboBoxStringOnGenerateWidgetEvent;
        OnSelectionChanged: FComboBoxStringOnSelectionChanged;
        OnOpening: FComboBoxStringOnOpening;
    };
    readonly __staticRegistry: 
        UComboBoxString['__static_UComboBoxString'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UComboBoxString['__properties_UComboBoxString'] &
        UWidget['__propertyRegistry'];
}

declare interface UContentWidget extends UPanelWidget {
    readonly __static_UContentWidget: {
        SetContent(Content: UWidget): UPanelSlot;
        GetContentSlot(): UPanelSlot;
        GetContent(): UWidget;
    };
    readonly __staticRegistry: 
        UContentWidget['__static_UContentWidget'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UPanelWidget['__propertyRegistry'];
}

declare type UDefault__WidgetBlueprintGeneratedClass = object;

declare interface UDragDropOperation extends UObject {
    readonly __static_UDragDropOperation: {
        Drop(PointerEvent: FPointerEvent): void;
        Dragged(PointerEvent: FPointerEvent): void;
        DragCancelled(PointerEvent: FPointerEvent): void;
    };
    readonly __properties_UDragDropOperation: {
        Tag: string;
        Payload: UObject;
        DefaultDragVisual: UWidget;
        Pivot: EDragPivot;
        Offset: FVector2D;
        OnDrop: FDragDropOperationOnDrop;
        OnDragCancelled: FDragDropOperationOnDragCancelled;
        OnDragged: FDragDropOperationOnDragged;
    };
    readonly __staticRegistry: 
        UDragDropOperation['__static_UDragDropOperation'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDragDropOperation['__properties_UDragDropOperation'] &
        UObject['__propertyRegistry'];
}

declare interface UDynamicEntryBox extends UDynamicEntryBoxBase {
    readonly __static_UDynamicEntryBox: {
        Reset(bDeleteWidgets: boolean): void;
        RemoveEntry(EntryWidget: UUserWidget): void;
        BP_CreateEntryOfClass(EntryClass: TSubclassOf<UUserWidget>): UUserWidget;
        BP_CreateEntry(): UUserWidget;
    };
    readonly __properties_UDynamicEntryBox: {
        EntryWidgetClass: TSubclassOf<UUserWidget>;
    };
    readonly __staticRegistry: 
        UDynamicEntryBox['__static_UDynamicEntryBox'] &
        UDynamicEntryBoxBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UDynamicEntryBox['__properties_UDynamicEntryBox'] &
        UDynamicEntryBoxBase['__propertyRegistry'];
}

declare interface UDynamicEntryBoxBase extends UWidget {
    readonly __static_UDynamicEntryBoxBase: {
        SetRadialSettings(InSettings: FRadialBoxSettings): void;
        SetEntrySpacing(InEntrySpacing: FVector2D): void;
        GetNumEntries(): number;
        GetAllEntries(): UUserWidget[];
    };
    readonly __properties_UDynamicEntryBoxBase: {
        EntrySpacing: FVector2D;
        SpacingPattern: FVector2D[];
        EntryBoxType: EDynamicBoxType;
        EntrySizeRule: FSlateChildSize;
        EntryHorizontalAlignment: EHorizontalAlignment;
        EntryVerticalAlignment: EVerticalAlignment;
        MaxElementSize: number;
        RadialBoxSettings: FRadialBoxSettings;
        EntryWidgetPool: FUserWidgetPool;
    };
    readonly __staticRegistry: 
        UDynamicEntryBoxBase['__static_UDynamicEntryBoxBase'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UDynamicEntryBoxBase['__properties_UDynamicEntryBoxBase'] &
        UWidget['__propertyRegistry'];
}

declare interface UEditableText extends UWidget {
    readonly __static_UEditableText: {
        SetTextOverflowPolicy(InOverflowPolicy: ETextOverflowPolicy): void;
        SetText(InText: string): void;
        SetMinimumDesiredWidth(InMinDesiredWidth: number): void;
        SetJustification(InJustification: ETextJustify): void;
        SetIsReadOnly(InbIsReadyOnly: boolean): void;
        SetIsPassword(InbIsPassword: boolean): void;
        SetHintText(InHintText: string): void;
        SetFontOutlineMaterial(InMaterial: UMaterialInterface): void;
        SetFontMaterial(InMaterial: UMaterialInterface): void;
        SetFont(InFontInfo: FSlateFontInfo): void;
        OnEditableTextCommittedEvent__DelegateSignature(Text: string, CommitMethod: ETextCommit): void;
        OnEditableTextChangedEvent__DelegateSignature(Text: string): void;
        GetText(): string;
        GetJustification(): ETextJustify;
        GetHintText(): string;
        GetFont(): FSlateFontInfo;
    };
    readonly __properties_UEditableText: {
        Text: string;
        TextDelegate: FEditableTextTextDelegate;
        HintText: string;
        HintTextDelegate: FEditableTextHintTextDelegate;
        WidgetStyle: FEditableTextStyle;
        IsReadOnly: boolean;
        IsPassword: boolean;
        MinimumDesiredWidth: number;
        IsCaretMovedWhenGainFocus: boolean;
        SelectAllTextWhenFocused: boolean;
        RevertTextOnEscape: boolean;
        ClearKeyboardFocusOnCommit: boolean;
        SelectAllTextOnCommit: boolean;
        AllowContextMenu: boolean;
        KeyboardType: EVirtualKeyboardType;
        VirtualKeyboardOptions: FVirtualKeyboardOptions;
        VirtualKeyboardTrigger: EVirtualKeyboardTrigger;
        VirtualKeyboardDismissAction: EVirtualKeyboardDismissAction;
        Justification: ETextJustify;
        OverflowPolicy: ETextOverflowPolicy;
        ShapedTextOptions: FShapedTextOptions;
        OnTextChanged: FEditableTextOnTextChanged;
        OnTextCommitted: FEditableTextOnTextCommitted;
        EnableIntegratedKeyboard: boolean;
    };
    readonly __staticRegistry: 
        UEditableText['__static_UEditableText'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableText['__properties_UEditableText'] &
        UWidget['__propertyRegistry'];
}

declare interface UEditableTextBox extends UWidget {
    readonly __static_UEditableTextBox: {
        SetTextOverflowPolicy(InOverflowPolicy: ETextOverflowPolicy): void;
        SetText(InText: string): void;
        SetJustification(InJustification: ETextJustify): void;
        SetIsReadOnly(bReadOnly: boolean): void;
        SetIsPassword(bIsPassword: boolean): void;
        SetHintText(InText: string): void;
        SetForegroundColor(Color: FLinearColor): void;
        SetError(InError: string): void;
        OnEditableTextBoxCommittedEvent__DelegateSignature(Text: string, CommitMethod: ETextCommit): void;
        OnEditableTextBoxChangedEvent__DelegateSignature(Text: string): void;
        HasError(): boolean;
        GetText(): string;
        ClearError(): void;
    };
    readonly __properties_UEditableTextBox: {
        Text: string;
        TextDelegate: FEditableTextBoxTextDelegate;
        WidgetStyle: FEditableTextBoxStyle;
        HintText: string;
        HintTextDelegate: FEditableTextBoxHintTextDelegate;
        IsReadOnly: boolean;
        IsPassword: boolean;
        MinimumDesiredWidth: number;
        IsCaretMovedWhenGainFocus: boolean;
        SelectAllTextWhenFocused: boolean;
        RevertTextOnEscape: boolean;
        ClearKeyboardFocusOnCommit: boolean;
        SelectAllTextOnCommit: boolean;
        AllowContextMenu: boolean;
        KeyboardType: EVirtualKeyboardType;
        VirtualKeyboardOptions: FVirtualKeyboardOptions;
        VirtualKeyboardTrigger: EVirtualKeyboardTrigger;
        VirtualKeyboardDismissAction: EVirtualKeyboardDismissAction;
        Justification: ETextJustify;
        OverflowPolicy: ETextOverflowPolicy;
        ShapedTextOptions: FShapedTextOptions;
        OnTextChanged: FEditableTextBoxOnTextChanged;
        OnTextCommitted: FEditableTextBoxOnTextCommitted;
    };
    readonly __staticRegistry: 
        UEditableTextBox['__static_UEditableTextBox'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableTextBox['__properties_UEditableTextBox'] &
        UWidget['__propertyRegistry'];
}

declare interface UExpandableArea extends UWidget {
    readonly __static_UExpandableArea: {
        SetIsExpanded_Animated(IsExpanded: boolean): void;
        SetIsExpanded(IsExpanded: boolean): void;
        GetIsExpanded(): boolean;
    };
    readonly __properties_UExpandableArea: {
        Style: FExpandableAreaStyle;
        BorderBrush: FSlateBrush;
        BorderColor: FSlateColor;
        bIsExpanded: boolean;
        MaxHeight: number;
        HeaderPadding: FMargin;
        AreaPadding: FMargin;
        OnExpansionChanged: FExpandableAreaOnExpansionChanged;
        HeaderContent: UWidget;
        BodyContent: UWidget;
    };
    readonly __staticRegistry: 
        UExpandableArea['__static_UExpandableArea'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UExpandableArea['__properties_UExpandableArea'] &
        UWidget['__propertyRegistry'];
}

declare interface UFloatBinding extends UPropertyBinding {
    readonly __static_UFloatBinding: {
        GetValue(): number;
    };
    readonly __staticRegistry: 
        UFloatBinding['__static_UFloatBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UGameViewportSubsystem extends UEngineSubsystem {
    readonly __static_UGameViewportSubsystem: {
        SetWidgetSlotPosition(Slot: FGameViewportWidgetSlot, Widget: UWidget, position: FVector2D, bRemoveDPIScale: boolean): FGameViewportWidgetSlot;
        SetWidgetSlotDesiredSize(Slot: FGameViewportWidgetSlot, Size: FVector2D): FGameViewportWidgetSlot;
        SetWidgetSlot(Widget: UWidget, Slot: FGameViewportWidgetSlot): void;
        RemoveWidget(Widget: UWidget): void;
        IsWidgetAdded(Widget: UWidget): boolean;
        GetWidgetSlot(Widget: UWidget): FGameViewportWidgetSlot;
        AddWidgetForPlayer(Widget: UWidget, Player: ULocalPlayer, Slot: FGameViewportWidgetSlot): boolean;
        AddWidget(Widget: UWidget, Slot: FGameViewportWidgetSlot): boolean;
    };
    readonly __staticRegistry: 
        UGameViewportSubsystem['__static_UGameViewportSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UEngineSubsystem['__propertyRegistry'];
}

declare interface UGridPanel extends UPanelWidget {
    readonly __static_UGridPanel: {
        SetRowFill(RowIndex: number, Coefficient: number): void;
        SetColumnFill(ColumnIndex: number, Coefficient: number): void;
        AddChildToGrid(Content: UWidget, InRow: number, InColumn: number): UGridSlot;
    };
    readonly __properties_UGridPanel: {
        ColumnFill: number[];
        RowFill: number[];
    };
    readonly __staticRegistry: 
        UGridPanel['__static_UGridPanel'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UGridPanel['__properties_UGridPanel'] &
        UPanelWidget['__propertyRegistry'];
}

declare interface UGridSlot extends UPanelSlot {
    readonly __static_UGridSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetRowSpan(InRowSpan: number): void;
        SetRow(InRow: number): void;
        SetPadding(InPadding: FMargin): void;
        SetNudge(InNudge: FVector2D): void;
        SetLayer(InLayer: number): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
        SetColumnSpan(InColumnSpan: number): void;
        SetColumn(InColumn: number): void;
    };
    readonly __properties_UGridSlot: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
        Row: number;
        RowSpan: number;
        Column: number;
        ColumnSpan: number;
        Layer: number;
        Nudge: FVector2D;
    };
    readonly __staticRegistry: 
        UGridSlot['__static_UGridSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UGridSlot['__properties_UGridSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UHorizontalBox extends UPanelWidget {
    readonly __static_UHorizontalBox: {
        AddChildToHorizontalBox(Content: UWidget): UHorizontalBoxSlot;
    };
    readonly __staticRegistry: 
        UHorizontalBox['__static_UHorizontalBox'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UPanelWidget['__propertyRegistry'];
}

declare interface UHorizontalBoxSlot extends UPanelSlot {
    readonly __static_UHorizontalBoxSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetSize(InSize: FSlateChildSize): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UHorizontalBoxSlot: {
        Size: FSlateChildSize;
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UHorizontalBoxSlot['__static_UHorizontalBoxSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UHorizontalBoxSlot['__properties_UHorizontalBoxSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UImage extends UWidget {
    readonly __static_UImage: {
        SetOpacity(InOpacity: number): void;
        SetDesiredSizeOverride(DesiredSize: FVector2D): void;
        SetColorAndOpacity(InColorAndOpacity: FLinearColor): void;
        SetBrushTintColor(TintColor: FSlateColor): void;
        SetBrushResourceObject(ResourceObject: UObject): void;
        SetBrushFromTextureDynamic(Texture: UTexture2DDynamic, bMatchSize: boolean): void;
        SetBrushFromTexture(Texture: UTexture2D, bMatchSize: boolean): void;
        SetBrushFromSoftTexture(SoftTexture: TSoftObjectPtr<UTexture2D>, bMatchSize: boolean): void;
        SetBrushFromSoftMaterial(SoftMaterial: TSoftObjectPtr<UMaterialInterface>): void;
        SetBrushFromMaterial(Material: UMaterialInterface): void;
        SetBrushFromAtlasInterface(AtlasRegion: TScriptInterface<ISlateTextureAtlasInterface>, bMatchSize: boolean): void;
        SetBrushFromAsset(Asset: USlateBrushAsset): void;
        SetBrush(InBrush: FSlateBrush): void;
        GetDynamicMaterial(): UMaterialInstanceDynamic;
    };
    readonly __properties_UImage: {
        Brush: FSlateBrush;
        BrushDelegate: FImageBrushDelegate;
        ColorAndOpacity: FLinearColor;
        ColorAndOpacityDelegate: FImageColorAndOpacityDelegate;
        bFlipForRightToLeftFlowDirection: boolean;
        OnMouseButtonDownEvent: FImageOnMouseButtonDownEvent;
    };
    readonly __staticRegistry: 
        UImage['__static_UImage'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UImage['__properties_UImage'] &
        UWidget['__propertyRegistry'];
}

declare interface UInputKeySelector extends UWidget {
    readonly __static_UInputKeySelector: {
        SetTextBlockVisibility(InVisibility: ESlateVisibility): void;
        SetSelectedKey(InSelectedKey: FInputChord): void;
        SetNoKeySpecifiedText(InNoKeySpecifiedText: string): void;
        SetKeySelectionText(InKeySelectionText: string): void;
        SetEscapeKeys(InKeys: FKey[]): void;
        SetAllowModifierKeys(bInAllowModifierKeys: boolean): void;
        SetAllowGamepadKeys(bInAllowGamepadKeys: boolean): void;
        OnKeySelected__DelegateSignature(SelectedKey: FInputChord): void;
        OnIsSelectingKeyChanged__DelegateSignature(): void;
        GetIsSelectingKey(): boolean;
    };
    readonly __properties_UInputKeySelector: {
        WidgetStyle: FButtonStyle;
        TextStyle: FTextBlockStyle;
        SelectedKey: FInputChord;
        Margin: FMargin;
        KeySelectionText: string;
        NoKeySpecifiedText: string;
        bAllowModifierKeys: boolean;
        bAllowGamepadKeys: boolean;
        EscapeKeys: FKey[];
        OnKeySelected: FInputKeySelectorOnKeySelected;
        OnIsSelectingKeyChanged: FInputKeySelectorOnIsSelectingKeyChanged;
    };
    readonly __staticRegistry: 
        UInputKeySelector['__static_UInputKeySelector'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputKeySelector['__properties_UInputKeySelector'] &
        UWidget['__propertyRegistry'];
}

declare interface UInt32Binding extends UPropertyBinding {
    readonly __static_UInt32Binding: {
        GetValue(): number;
    };
    readonly __staticRegistry: 
        UInt32Binding['__static_UInt32Binding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UInvalidationBox extends UContentWidget {
    readonly __static_UInvalidationBox: {
        SetCanCache(CanCache: boolean): void;
        InvalidateCache(): void;
        GetCanCache(): boolean;
    };
    readonly __properties_UInvalidationBox: {
        bCanCache: boolean;
    };
    readonly __staticRegistry: 
        UInvalidationBox['__static_UInvalidationBox'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UInvalidationBox['__properties_UInvalidationBox'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UListView extends UListViewBase {
    readonly __static_UListView: {
        SetSelectionMode(SelectionMode: ESelectionMode): void;
        SetSelectedIndex(Index: number): void;
        SetScrollIntoViewAlignment(NewScrollIntoViewAlignment: EScrollIntoViewAlignment): void;
        SetScrollBarPadding(InScrollBarPadding: FMargin): void;
        ScrollIndexIntoView(Index: number): void;
        RemoveItem(Item: UObject): void;
        OnListItemOuterEndPlayed(ItemOuter: AActor, EndPlayReason: EEndPlayReason): void;
        OnListItemEndPlayed(Item: AActor, EndPlayReason: EEndPlayReason): void;
        NavigateToIndex(Index: number): void;
        IsRefreshPending(): boolean;
        GetVerticalEntrySpacing(): number;
        GetScrollBarPadding(): FMargin;
        GetNumItems(): number;
        GetListItems(): UObject[];
        GetItemAt(Index: number): UObject;
        GetIndexForItem(Item: UObject): number;
        GetHorizontalEntrySpacing(): number;
        ClearListItems(): void;
        BP_SetSelectedItem(Item: UObject): void;
        BP_SetListItems(InListItems: UObject[]): void;
        BP_SetItemSelection(Item: UObject, bSelected: boolean): void;
        BP_ScrollItemIntoView(Item: UObject): void;
        BP_NavigateToItem(Item: UObject): void;
        BP_IsItemVisible(Item: UObject): boolean;
        BP_GetSelectedItems(Items: UObject[]): boolean;
        BP_GetSelectedItem(): UObject;
        BP_GetNumItemsSelected(): number;
        BP_ClearSelection(): void;
        BP_CancelScrollIntoView(): void;
        AddItem(Item: UObject): void;
    };
    readonly __properties_UListView: {
        WidgetStyle: FTableViewStyle;
        ScrollBarStyle: FScrollBarStyle;
        orientation: EOrientation;
        SelectionMode: ESelectionMode;
        ConsumeMouseWheel: EConsumeMouseWheel;
        bClearSelectionOnClick: boolean;
        bIsFocusable: boolean;
        bClearScrollVelocityOnSelection: boolean;
        bReturnFocusToSelection: boolean;
        ScrollIntoViewAlignment: EScrollIntoViewAlignment;
        ListItems: UObject[];
        HorizontalEntrySpacing: number;
        VerticalEntrySpacing: number;
        ScrollBarPadding: FMargin;
        BP_OnEntryInitialized: FListViewBP_OnEntryInitialized;
        BP_OnItemClicked: FListViewBP_OnItemClicked;
        BP_OnItemDoubleClicked: FListViewBP_OnItemDoubleClicked;
        BP_OnItemIsHoveredChanged: FListViewBP_OnItemIsHoveredChanged;
        BP_OnItemSelectionChanged: FListViewBP_OnItemSelectionChanged;
        BP_OnItemScrolledIntoView: FListViewBP_OnItemScrolledIntoView;
        BP_OnListViewScrolled: FListViewBP_OnListViewScrolled;
        BP_OnListViewFinishedScrolling: FListViewBP_OnListViewFinishedScrolling;
        BP_OnIsItemSelectableOrNavigable: FListViewBP_OnIsItemSelectableOrNavigable;
    };
    readonly __staticRegistry: 
        UListView['__static_UListView'] &
        UListViewBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UListView['__properties_UListView'] &
        UListViewBase['__propertyRegistry'];
}

declare interface UListViewBase extends UWidget {
    readonly __static_UListViewBase: {
        SetWheelScrollMultiplier(NewWheelScrollMultiplier: number): void;
        SetScrollOffset(InScrollOffset: number): void;
        SetScrollbarVisibility(InVisibility: ESlateVisibility): void;
        SetIsPointerScrollingEnabled(bInIsPointerScrollingEnabled: boolean): void;
        SetIsGamepadScrollingEnabled(bInIsGamepadScrollingEnabled: boolean): void;
        ScrollToTop(): void;
        ScrollToBottom(): void;
        RequestRefresh(): void;
        RegenerateAllEntries(): void;
        GetScrollOffset(): number;
        GetDisplayedEntryWidgets(): UUserWidget[];
        EndInertialScrolling(): void;
    };
    readonly __properties_UListViewBase: {
        BP_OnEntryGenerated: FListViewBaseBP_OnEntryGenerated;
        BP_OnEntriesGenerated: FListViewBaseBP_OnEntriesGenerated;
        EntryWidgetClass: TSubclassOf<UUserWidget>;
        WheelScrollMultiplier: number;
        bEnableScrollAnimation: boolean;
        ScrollingAnimationInterpolationSpeed: number;
        bInEnableTouchAnimatedScrolling: boolean;
        AllowOverscroll: boolean;
        bEnableRightClickScrolling: boolean;
        bEnableTouchScrolling: boolean;
        bIsPointerScrollingEnabled: boolean;
        bIsGamepadScrollingEnabled: boolean;
        bEnableFixedLineOffset: boolean;
        FixedLineScrollOffset: number;
        bAllowDragging: boolean;
        bSelectItemOnNavigation: boolean;
        BP_OnEntryReleased: FListViewBaseBP_OnEntryReleased;
        EntryWidgetPool: FUserWidgetPool;
    };
    readonly __staticRegistry: 
        UListViewBase['__static_UListViewBase'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UListViewBase['__properties_UListViewBase'] &
        UWidget['__propertyRegistry'];
}

declare interface UListViewDesignerPreviewItem extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMenuAnchor extends UContentWidget {
    readonly __static_UMenuAnchor: {
        ToggleOpen(bFocusOnOpen: boolean): void;
        ShouldOpenDueToClick(): boolean;
        SetPlacement(InPlacement: EMenuPlacement): void;
        Open(bFocusMenu: boolean): void;
        IsOpen(): boolean;
        HasOpenSubMenus(): boolean;
        GetUserWidget__DelegateSignature(): UUserWidget;
        GetMenuPosition(): FVector2D;
        FitInWindow(bFit: boolean): void;
        Close(): void;
    };
    readonly __properties_UMenuAnchor: {
        MenuClass: TSubclassOf<UUserWidget>;
        OnGetMenuContentEvent: FMenuAnchorOnGetMenuContentEvent;
        OnGetUserMenuContentEvent: FMenuAnchorOnGetUserMenuContentEvent;
        Placement: EMenuPlacement;
        bFitInWindow: boolean;
        ShouldDeferPaintingAfterWindowContent: boolean;
        UseApplicationMenuStack: boolean;
        ShowMenuBackground: boolean;
        OnMenuOpenChanged: FMenuAnchorOnMenuOpenChanged;
    };
    readonly __staticRegistry: 
        UMenuAnchor['__static_UMenuAnchor'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UMenuAnchor['__properties_UMenuAnchor'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UMouseCursorBinding extends UPropertyBinding {
    readonly __static_UMouseCursorBinding: {
        GetValue(): EMouseCursor;
    };
    readonly __staticRegistry: 
        UMouseCursorBinding['__static_UMouseCursorBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UMovieScene2DTransformPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieScene2DTransformSection extends UMovieSceneSection {
    readonly __properties_UMovieScene2DTransformSection: {
        TransformMask: FMovieScene2DTransformMask;
        Translation: FMovieSceneFloatChannel;
        Rotation: FMovieSceneFloatChannel;
        Scale: FMovieSceneFloatChannel;
        Shear: FMovieSceneFloatChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScene2DTransformSection['__properties_UMovieScene2DTransformSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieScene2DTransformTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneMarginPropertySystem extends UMovieScenePropertySystem {
    readonly __staticRegistry: 
        UMovieScenePropertySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertySystem['__propertyRegistry'];
}

declare interface UMovieSceneMarginSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneMarginSection: {
        TopCurve: FMovieSceneFloatChannel;
        LeftCurve: FMovieSceneFloatChannel;
        RightCurve: FMovieSceneFloatChannel;
        BottomCurve: FMovieSceneFloatChannel;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneMarginSection['__properties_UMovieSceneMarginSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneMarginTrack extends UMovieScenePropertyTrack {
    readonly __staticRegistry: 
        UMovieScenePropertyTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieScenePropertyTrack['__propertyRegistry'];
}

declare interface UMovieSceneWidgetMaterialSystem extends UMovieSceneEntitySystem {
    readonly __staticRegistry: 
        UMovieSceneEntitySystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneEntitySystem['__propertyRegistry'];
}

declare interface UMovieSceneWidgetMaterialTrack extends UMovieSceneMaterialTrack {
    readonly __properties_UMovieSceneWidgetMaterialTrack: {
        BrushPropertyNamePath: string[];
        TrackName: string;
    };
    readonly __staticRegistry: 
        UMovieSceneMaterialTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneWidgetMaterialTrack['__properties_UMovieSceneWidgetMaterialTrack'] &
        UMovieSceneMaterialTrack['__propertyRegistry'];
}

declare interface UMultiLineEditableText extends UTextLayoutWidget {
    readonly __static_UMultiLineEditableText: {
        SetWidgetStyle(InWidgetStyle: FTextBlockStyle): void;
        SetText(InText: string): void;
        SetIsReadOnly(bReadOnly: boolean): void;
        SetHintText(InHintText: string): void;
        SetFontOutlineMaterial(InMaterial: UMaterialInterface): void;
        SetFontMaterial(InMaterial: UMaterialInterface): void;
        SetFont(InFontInfo: FSlateFontInfo): void;
        OnMultiLineEditableTextCommittedEvent__DelegateSignature(Text: string, CommitMethod: ETextCommit): void;
        OnMultiLineEditableTextChangedEvent__DelegateSignature(Text: string): void;
        GetText(): string;
        GetHintText(): string;
        GetFont(): FSlateFontInfo;
    };
    readonly __properties_UMultiLineEditableText: {
        Text: string;
        HintText: string;
        HintTextDelegate: FMultiLineEditableTextHintTextDelegate;
        WidgetStyle: FTextBlockStyle;
        bIsReadOnly: boolean;
        SelectAllTextWhenFocused: boolean;
        ClearTextSelectionOnFocusLoss: boolean;
        RevertTextOnEscape: boolean;
        ClearKeyboardFocusOnCommit: boolean;
        AllowContextMenu: boolean;
        VirtualKeyboardOptions: FVirtualKeyboardOptions;
        VirtualKeyboardDismissAction: EVirtualKeyboardDismissAction;
        OnTextChanged: FMultiLineEditableTextOnTextChanged;
        OnTextCommitted: FMultiLineEditableTextOnTextCommitted;
    };
    readonly __staticRegistry: 
        UMultiLineEditableText['__static_UMultiLineEditableText'] &
        UTextLayoutWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UMultiLineEditableText['__properties_UMultiLineEditableText'] &
        UTextLayoutWidget['__propertyRegistry'];
}

declare interface UMultiLineEditableTextBox extends UTextLayoutWidget {
    readonly __static_UMultiLineEditableTextBox: {
        SetTextStyle(InTextStyle: FTextBlockStyle): void;
        SetText(InText: string): void;
        SetIsReadOnly(bReadOnly: boolean): void;
        SetHintText(InHintText: string): void;
        SetForegroundColor(Color: FLinearColor): void;
        SetError(InError: string): void;
        OnMultiLineEditableTextBoxCommittedEvent__DelegateSignature(Text: string, CommitMethod: ETextCommit): void;
        OnMultiLineEditableTextBoxChangedEvent__DelegateSignature(Text: string): void;
        GetText(): string;
        GetHintText(): string;
    };
    readonly __properties_UMultiLineEditableTextBox: {
        Text: string;
        HintText: string;
        HintTextDelegate: FMultiLineEditableTextBoxHintTextDelegate;
        WidgetStyle: FEditableTextBoxStyle;
        bIsReadOnly: boolean;
        AllowContextMenu: boolean;
        VirtualKeyboardOptions: FVirtualKeyboardOptions;
        VirtualKeyboardDismissAction: EVirtualKeyboardDismissAction;
        OnTextChanged: FMultiLineEditableTextBoxOnTextChanged;
        OnTextCommitted: FMultiLineEditableTextBoxOnTextCommitted;
    };
    readonly __staticRegistry: 
        UMultiLineEditableTextBox['__static_UMultiLineEditableTextBox'] &
        UTextLayoutWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UMultiLineEditableTextBox['__properties_UMultiLineEditableTextBox'] &
        UTextLayoutWidget['__propertyRegistry'];
}

declare interface UNamedSlot extends UContentWidget {
    readonly __staticRegistry: 
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UContentWidget['__propertyRegistry'];
}

declare interface UNativeWidgetHost extends UWidget {
    readonly __staticRegistry: 
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidget['__propertyRegistry'];
}

declare interface UOverlay extends UPanelWidget {
    readonly __static_UOverlay: {
        ReplaceOverlayChildAt(Index: number, Content: UWidget): boolean;
        AddChildToOverlay(Content: UWidget): UOverlaySlot;
    };
    readonly __staticRegistry: 
        UOverlay['__static_UOverlay'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UPanelWidget['__propertyRegistry'];
}

declare interface UOverlaySlot extends UPanelSlot {
    readonly __static_UOverlaySlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UOverlaySlot: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UOverlaySlot['__static_UOverlaySlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UOverlaySlot['__properties_UOverlaySlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UPanelSlot extends UVisual {
    readonly __static_UPanelSlot: {
        GetContent(): UWidget;
    };
    readonly __properties_UPanelSlot: {
        Parent: UPanelWidget;
        Content: UWidget;
    };
    readonly __staticRegistry: 
        UPanelSlot['__static_UPanelSlot'] &
        UVisual['__staticRegistry'];
    readonly __propertyRegistry: 
        UPanelSlot['__properties_UPanelSlot'] &
        UVisual['__propertyRegistry'];
}

declare interface UPanelWidget extends UWidget {
    readonly __static_UPanelWidget: {
        RemoveChildAt(Index: number): boolean;
        RemoveChild(Content: UWidget): boolean;
        HasChild(Content: UWidget): boolean;
        HasAnyChildren(): boolean;
        GetChildrenCount(): number;
        GetChildIndex(Content: UWidget): number;
        GetChildAt(Index: number): UWidget;
        GetAllChildren(): UWidget[];
        ClearChildren(): void;
        AddChild(Content: UWidget): UPanelSlot;
    };
    readonly __properties_UPanelWidget: {
        Slots: UPanelSlot[];
    };
    readonly __staticRegistry: 
        UPanelWidget['__static_UPanelWidget'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UPanelWidget['__properties_UPanelWidget'] &
        UWidget['__propertyRegistry'];
}

declare interface UPostBufferBlurUpdater extends USlatePostBufferProcessorUpdater {
    readonly __properties_UPostBufferBlurUpdater: {
        GaussianBlurStrength: number;
    };
    readonly __staticRegistry: 
        USlatePostBufferProcessorUpdater['__staticRegistry'];
    readonly __propertyRegistry: 
        UPostBufferBlurUpdater['__properties_UPostBufferBlurUpdater'] &
        USlatePostBufferProcessorUpdater['__propertyRegistry'];
}

declare interface UPostBufferUpdate extends UWidget {
    readonly __properties_UPostBufferUpdate: {
        bUpdateOnlyPaintArea: boolean;
        bPerformDefaultPostBufferUpdate: boolean;
        BuffersToUpdate: ESlatePostRT[];
        UpdateBufferInfos: FSlatePostBufferUpdateInfo[];
    };
    readonly __staticRegistry: 
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UPostBufferUpdate['__properties_UPostBufferUpdate'] &
        UWidget['__propertyRegistry'];
}

declare interface UProgressBar extends UWidget {
    readonly __static_UProgressBar: {
        SetPercent(InPercent: number): void;
        SetIsMarquee(InbIsMarquee: boolean): void;
        SetFillColorAndOpacity(InColor: FLinearColor): void;
    };
    readonly __properties_UProgressBar: {
        WidgetStyle: FProgressBarStyle;
        Percent: number;
        BarFillType: EProgressBarFillType;
        BarFillStyle: EProgressBarFillStyle;
        bIsMarquee: boolean;
        BorderPadding: FVector2D;
        PercentDelegate: FProgressBarPercentDelegate;
        FillColorAndOpacity: FLinearColor;
        FillColorAndOpacityDelegate: FProgressBarFillColorAndOpacityDelegate;
    };
    readonly __staticRegistry: 
        UProgressBar['__static_UProgressBar'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UProgressBar['__properties_UProgressBar'] &
        UWidget['__propertyRegistry'];
}

declare interface UPropertyBinding extends UObject {
    readonly __properties_UPropertyBinding: {
        sourceObject: TWeakObjectPtr<UObject>;
        SourcePath: FDynamicPropertyPath;
        DestinationProperty: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__properties_UPropertyBinding'] &
        UObject['__propertyRegistry'];
}

declare interface URetainerBox extends UContentWidget {
    readonly __static_URetainerBox: {
        SetTextureParameter(TextureParameter: string): void;
        SetRetainRendering(bInRetainRendering: boolean): void;
        SetRenderingPhase(RenderPhase: number, TotalPhases: number): void;
        SetEffectMaterial(EffectMaterial: UMaterialInterface): void;
        RequestRender(): void;
        GetEffectMaterial(): UMaterialInstanceDynamic;
    };
    readonly __properties_URetainerBox: {
        bRetainRender: boolean;
        RenderOnInvalidation: boolean;
        RenderOnPhase: boolean;
        Phase: number;
        PhaseCount: number;
        EffectMaterial: UMaterialInterface;
        TextureParameter: string;
    };
    readonly __staticRegistry: 
        URetainerBox['__static_URetainerBox'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        URetainerBox['__properties_URetainerBox'] &
        UContentWidget['__propertyRegistry'];
}

declare interface URichTextBlock extends UTextLayoutWidget {
    readonly __static_URichTextBlock: {
        SetTextTransformPolicy(InTransformPolicy: ETextTransformPolicy): void;
        SetTextStyleSet(NewTextStyleSet: UDataTable): void;
        SetTextOverflowPolicy(InOverflowPolicy: ETextOverflowPolicy): void;
        SetText(InText: string): void;
        SetMinDesiredWidth(InMinDesiredWidth: number): void;
        SetDefaultTextStyle(InDefaultTextStyle: FTextBlockStyle): void;
        SetDefaultStrikeBrush(InStrikeBrush: FSlateBrush): void;
        SetDefaultShadowOffset(InShadowOffset: FVector2D): void;
        SetDefaultShadowColorAndOpacity(InShadowColorAndOpacity: FLinearColor): void;
        SetDefaultMaterial(InMaterial: UMaterialInterface): void;
        SetDefaultFont(InFontInfo: FSlateFontInfo): void;
        SetDefaultColorAndOpacity(InColorAndOpacity: FSlateColor): void;
        SetDecorators(InDecoratorClasses: TSubclassOf<URichTextBlockDecorator>[]): void;
        SetAutoWrapText(InAutoTextWrap: boolean): void;
        RefreshTextLayout(): void;
        GetTextStyleSet(): UDataTable;
        GetText(): string;
        GetDefaultDynamicMaterial(): UMaterialInstanceDynamic;
        GetDecoratorByClass(DecoratorClass: TSubclassOf<URichTextBlockDecorator>): URichTextBlockDecorator;
        ClearAllDefaultStyleOverrides(): void;
    };
    readonly __properties_URichTextBlock: {
        Text: string;
        TextStyleSet: UDataTable;
        DecoratorClasses: TSubclassOf<URichTextBlockDecorator>[];
        DefaultTextStyleOverride: FTextBlockStyle;
        MinDesiredWidth: number;
        bOverrideDefaultStyle: boolean;
        TextTransformPolicy: ETextTransformPolicy;
        TextOverflowPolicy: ETextOverflowPolicy;
        DefaultTextStyle: FTextBlockStyle;
        InstanceDecorators: URichTextBlockDecorator[];
    };
    readonly __staticRegistry: 
        URichTextBlock['__static_URichTextBlock'] &
        UTextLayoutWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        URichTextBlock['__properties_URichTextBlock'] &
        UTextLayoutWidget['__propertyRegistry'];
}

declare interface URichTextBlockDecorator extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface URichTextBlockImageDecorator extends URichTextBlockDecorator {
    readonly __properties_URichTextBlockImageDecorator: {
        ImageSet: UDataTable;
    };
    readonly __staticRegistry: 
        URichTextBlockDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        URichTextBlockImageDecorator['__properties_URichTextBlockImageDecorator'] &
        URichTextBlockDecorator['__propertyRegistry'];
}

declare interface USafeZone extends UContentWidget {
    readonly __static_USafeZone: {
        SetSidesToPad(InPadLeft: boolean, InPadRight: boolean, InPadTop: boolean, InPadBottom: boolean): void;
    };
    readonly __properties_USafeZone: {
        PadLeft: boolean;
        PadRight: boolean;
        PadTop: boolean;
        PadBottom: boolean;
    };
    readonly __staticRegistry: 
        USafeZone['__static_USafeZone'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USafeZone['__properties_USafeZone'] &
        UContentWidget['__propertyRegistry'];
}

declare interface USafeZoneSlot extends UPanelSlot {
    readonly __properties_USafeZoneSlot: {
        bIsTitleSafe: boolean;
        SafeAreaScale: FMargin;
        HAlign: EHorizontalAlignment;
        VAlign: EVerticalAlignment;
        Padding: FMargin;
    };
    readonly __staticRegistry: 
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        USafeZoneSlot['__properties_USafeZoneSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UScaleBox extends UContentWidget {
    readonly __static_UScaleBox: {
        SetUserSpecifiedScale(InUserSpecifiedScale: number): void;
        SetStretchDirection(InStretchDirection: EStretchDirection): void;
        SetStretch(InStretch: EStretch): void;
        SetIgnoreInheritedScale(bInIgnoreInheritedScale: boolean): void;
    };
    readonly __properties_UScaleBox: {
        Stretch: EStretch;
        StretchDirection: EStretchDirection;
        UserSpecifiedScale: number;
        IgnoreInheritedScale: boolean;
    };
    readonly __staticRegistry: 
        UScaleBox['__static_UScaleBox'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UScaleBox['__properties_UScaleBox'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UScaleBoxSlot extends UPanelSlot {
    readonly __static_UScaleBoxSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UScaleBoxSlot: {
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UScaleBoxSlot['__static_UScaleBoxSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UScaleBoxSlot['__properties_UScaleBoxSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UScrollBar extends UWidget {
    readonly __static_UScrollBar: {
        SetState(InOffsetFraction: number, InThumbSizeFraction: number): void;
    };
    readonly __properties_UScrollBar: {
        WidgetStyle: FScrollBarStyle;
        bAlwaysShowScrollbar: boolean;
        bAlwaysShowScrollbarTrack: boolean;
        orientation: EOrientation;
        Thickness: FVector2D;
        Padding: FMargin;
    };
    readonly __staticRegistry: 
        UScrollBar['__static_UScrollBar'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UScrollBar['__properties_UScrollBar'] &
        UWidget['__propertyRegistry'];
}

declare interface UScrollBox extends UPanelWidget {
    readonly __static_UScrollBox: {
        SetWheelScrollMultiplier(NewWheelScrollMultiplier: number): void;
        SetScrollWhenFocusChanges(NewScrollWhenFocusChanges: EScrollWhenFocusChanges): void;
        SetScrollOffset(NewScrollOffset: number): void;
        SetScrollbarVisibility(NewScrollBarVisibility: ESlateVisibility): void;
        SetScrollbarThickness(NewScrollbarThickness: FVector2D): void;
        SetScrollBarPadding(NewScrollbarPadding: FMargin): void;
        SetScrollAnimationInterpolationSpeed(NewScrollAnimationInterpolationSpeed: number): void;
        SetOrientation(NewOrientation: EOrientation): void;
        SetNavigationDestination(NewNavigationDestination: EDescendantScrollDestination): void;
        SetIsTouchScrollingEnabled(bInEnableTouchScrolling: boolean): void;
        SetIsFocusable(bInIsFocusable: boolean): void;
        SetConsumePointerInput(bInConsumePointerInput: boolean): void;
        SetConsumeMouseWheel(NewConsumeMouseWheel: EConsumeMouseWheel): void;
        SetAnimateWheelScrolling(bShouldAnimateWheelScrolling: boolean): void;
        SetAnalogMouseWheelKey(InMouseWheelKey: FKey): void;
        SetAlwaysShowScrollbar(NewAlwaysShowScrollbar: boolean): void;
        SetAllowOverscroll(NewAllowOverscroll: boolean): void;
        ScrollWidgetIntoView(WidgetToFind: UWidget, AnimateScroll: boolean, ScrollDestination: EDescendantScrollDestination, Padding: number): void;
        ScrollToStart(): void;
        ScrollToEnd(): void;
        GetViewOffsetFraction(): number;
        GetViewFraction(): number;
        GetScrollOffsetOfEnd(): number;
        GetScrollOffset(): number;
        GetOverscrollPercentage(): number;
        GetOverscrollOffset(): number;
        GetIsScrolling(): boolean;
        GetIsFocusable(): boolean;
        GetConsumePointerInput(): boolean;
        GetAnalogMouseWheelKey(): FKey;
        EndInertialScrolling(): void;
    };
    readonly __properties_UScrollBox: {
        ScrollAnimationInterpolationSpeed: number;
        bEnableTouchScrolling: boolean;
        bConsumePointerInput: boolean;
        AnalogMouseWheelKey: FKey;
        bIsFocusable: boolean;
        WidgetStyle: FScrollBoxStyle;
        WidgetBarStyle: FScrollBarStyle;
        orientation: EOrientation;
        ScrollBarVisibility: ESlateVisibility;
        ConsumeMouseWheel: EConsumeMouseWheel;
        ScrollbarThickness: FVector2D;
        ScrollBarPadding: FMargin;
        AlwaysShowScrollbar: boolean;
        AlwaysShowScrollbarTrack: boolean;
        AllowOverscroll: boolean;
        BackPadScrolling: boolean;
        FrontPadScrolling: boolean;
        bAnimateWheelScrolling: boolean;
        NavigationDestination: EDescendantScrollDestination;
        NavigationScrollPadding: number;
        ScrollWhenFocusChanges: EScrollWhenFocusChanges;
        bAllowRightClickDragScrolling: boolean;
        WheelScrollMultiplier: number;
        OnUserScrolled: FScrollBoxOnUserScrolled;
        OnScrollBarVisibilityChanged: FScrollBoxOnScrollBarVisibilityChanged;
        OnFocusReceived: FScrollBoxOnFocusReceived;
        OnFocusLost: FScrollBoxOnFocusLost;
    };
    readonly __staticRegistry: 
        UScrollBox['__static_UScrollBox'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UScrollBox['__properties_UScrollBox'] &
        UPanelWidget['__propertyRegistry'];
}

declare interface UScrollBoxSlot extends UPanelSlot {
    readonly __static_UScrollBoxSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UScrollBoxSlot: {
        Size: FSlateChildSize;
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UScrollBoxSlot['__static_UScrollBoxSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UScrollBoxSlot['__properties_UScrollBoxSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface USizeBox extends UContentWidget {
    readonly __static_USizeBox: {
        SetWidthOverride(InWidthOverride: number): void;
        SetMinDesiredWidth(InMinDesiredWidth: number): void;
        SetMinDesiredHeight(InMinDesiredHeight: number): void;
        SetMinAspectRatio(InMinAspectRatio: number): void;
        SetMaxDesiredWidth(InMaxDesiredWidth: number): void;
        SetMaxDesiredHeight(InMaxDesiredHeight: number): void;
        SetMaxAspectRatio(InMaxAspectRatio: number): void;
        SetHeightOverride(InHeightOverride: number): void;
        ClearWidthOverride(): void;
        ClearMinDesiredWidth(): void;
        ClearMinDesiredHeight(): void;
        ClearMinAspectRatio(): void;
        ClearMaxDesiredWidth(): void;
        ClearMaxDesiredHeight(): void;
        ClearMaxAspectRatio(): void;
        ClearHeightOverride(): void;
    };
    readonly __properties_USizeBox: {
        WidthOverride: number;
        HeightOverride: number;
        MinDesiredWidth: number;
        MinDesiredHeight: number;
        MaxDesiredWidth: number;
        MaxDesiredHeight: number;
        MinAspectRatio: number;
        MaxAspectRatio: number;
        bOverride_WidthOverride: boolean;
        bOverride_HeightOverride: boolean;
        bOverride_MinDesiredWidth: boolean;
        bOverride_MinDesiredHeight: boolean;
        bOverride_MaxDesiredWidth: boolean;
        bOverride_MaxDesiredHeight: boolean;
        bOverride_MinAspectRatio: boolean;
        bOverride_MaxAspectRatio: boolean;
    };
    readonly __staticRegistry: 
        USizeBox['__static_USizeBox'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USizeBox['__properties_USizeBox'] &
        UContentWidget['__propertyRegistry'];
}

declare interface USizeBoxSlot extends UPanelSlot {
    readonly __static_USizeBoxSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_USizeBoxSlot: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        USizeBoxSlot['__static_USizeBoxSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        USizeBoxSlot['__properties_USizeBoxSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface USlateAccessibleWidgetData extends UObject {
    readonly __static_USlateAccessibleWidgetData: {
        GetText__DelegateSignature(): string;
    };
    readonly __properties_USlateAccessibleWidgetData: {
        bCanChildrenBeAccessible: boolean;
        AccessibleBehavior: ESlateAccessibleBehavior;
        AccessibleSummaryBehavior: ESlateAccessibleBehavior;
        AccessibleText: string;
        AccessibleTextDelegate: FSlateAccessibleWidgetDataAccessibleTextDelegate;
        AccessibleSummaryText: string;
        AccessibleSummaryTextDelegate: FSlateAccessibleWidgetDataAccessibleSummaryTextDelegate;
    };
    readonly __staticRegistry: 
        USlateAccessibleWidgetData['__static_USlateAccessibleWidgetData'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USlateAccessibleWidgetData['__properties_USlateAccessibleWidgetData'] &
        UObject['__propertyRegistry'];
}

declare interface USlateBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_USlateBlueprintLibrary: {
        Vector_LocalToAbsolute(Geometry: FGeometry, LocalVector: FVector2D): FVector2D;
        Vector_AbsoluteToLocal(Geometry: FGeometry, AbsoluteVector: FVector2D): FVector2D;
        TransformVectorLocalToAbsolute(Geometry: FGeometry, LocalVector: FVector2D): FVector2D;
        TransformVectorAbsoluteToLocal(Geometry: FGeometry, AbsoluteVector: FVector2D): FVector2D;
        TransformScalarLocalToAbsolute(Geometry: FGeometry, LocalScalar: number): number;
        TransformScalarAbsoluteToLocal(Geometry: FGeometry, AbsoluteScalar: number): number;
        ScreenToWidgetLocal(WorldContextObject: UObject, Geometry: FGeometry, ScreenPosition: FVector2D, LocalCoordinate: FVector2D, bIncludeWindowPosition: boolean): void;
        ScreenToWidgetAbsolute(WorldContextObject: UObject, ScreenPosition: FVector2D, AbsoluteCoordinate: FVector2D, bIncludeWindowPosition: boolean): void;
        ScreenToViewport(WorldContextObject: UObject, ScreenPosition: FVector2D, ViewportPosition: FVector2D): void;
        Scalar_LocalToAbsolute(Geometry: FGeometry, LocalScalar: number): number;
        Scalar_AbsoluteToLocal(Geometry: FGeometry, AbsoluteScalar: number): number;
        LocalToViewport(WorldContextObject: UObject, Geometry: FGeometry, LocalCoordinate: FVector2D, PixelPosition: FVector2D, ViewportPosition: FVector2D): void;
        LocalToAbsolute(Geometry: FGeometry, LocalCoordinate: FVector2D): FVector2D;
        IsUnderLocation(Geometry: FGeometry, AbsoluteCoordinate: FVector2D): boolean;
        GetLocalTopLeft(Geometry: FGeometry): FVector2D;
        GetLocalSize(Geometry: FGeometry): FVector2D;
        GetAbsoluteSize(Geometry: FGeometry): FVector2D;
        EqualEqual_SlateBrush(A: FSlateBrush, B: FSlateBrush): boolean;
        AbsoluteToViewport(WorldContextObject: UObject, AbsoluteDesktopCoordinate: FVector2D, PixelPosition: FVector2D, ViewportPosition: FVector2D): void;
        AbsoluteToLocal(Geometry: FGeometry, AbsoluteCoordinate: FVector2D): FVector2D;
    };
    readonly __staticRegistry: 
        USlateBlueprintLibrary['__static_USlateBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface USlatePostBufferProcessorUpdater extends UObject {
    readonly __properties_USlatePostBufferProcessorUpdater: {
        bSkipBufferUpdate: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USlatePostBufferProcessorUpdater['__properties_USlatePostBufferProcessorUpdater'] &
        UObject['__propertyRegistry'];
}

declare interface USlateVectorArtData extends UObject {
    readonly __properties_USlateVectorArtData: {
        VertexData: FSlateMeshVertex[];
        IndexData: number[];
        Material: UMaterialInterface;
        ExtentMin: FVector2D;
        ExtentMax: FVector2D;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USlateVectorArtData['__properties_USlateVectorArtData'] &
        UObject['__propertyRegistry'];
}

declare interface USlider extends UWidget {
    readonly __static_USlider: {
        SetValue(InValue: number): void;
        SetStepSize(InValue: number): void;
        SetSliderHandleColor(InValue: FLinearColor): void;
        SetSliderBarColor(InValue: FLinearColor): void;
        SetMinValue(InValue: number): void;
        SetMaxValue(InValue: number): void;
        SetLocked(InValue: boolean): void;
        SetIndentHandle(InValue: boolean): void;
        GetValue(): number;
        GetNormalizedValue(): number;
    };
    readonly __properties_USlider: {
        Value: number;
        ValueDelegate: FSliderValueDelegate;
        MinValue: number;
        MaxValue: number;
        WidgetStyle: FSliderStyle;
        orientation: EOrientation;
        SliderBarColor: FLinearColor;
        SliderHandleColor: FLinearColor;
        IndentHandle: boolean;
        Locked: boolean;
        MouseUsesStep: boolean;
        RequiresControllerLock: boolean;
        StepSize: number;
        IsFocusable: boolean;
        bPreventThrottling: boolean;
        OnMouseCaptureBegin: FSliderOnMouseCaptureBegin;
        OnMouseCaptureEnd: FSliderOnMouseCaptureEnd;
        OnControllerCaptureBegin: FSliderOnControllerCaptureBegin;
        OnControllerCaptureEnd: FSliderOnControllerCaptureEnd;
        OnValueChanged: FSliderOnValueChanged;
    };
    readonly __staticRegistry: 
        USlider['__static_USlider'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USlider['__properties_USlider'] &
        UWidget['__propertyRegistry'];
}

declare interface USpacer extends UWidget {
    readonly __static_USpacer: {
        SetSize(InSize: FVector2D): void;
    };
    readonly __properties_USpacer: {
        Size: FVector2D;
    };
    readonly __staticRegistry: 
        USpacer['__static_USpacer'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USpacer['__properties_USpacer'] &
        UWidget['__propertyRegistry'];
}

declare interface USpinBox extends UWidget {
    readonly __static_USpinBox: {
        SetValue(NewValue: number): void;
        SetMinValue(NewValue: number): void;
        SetMinSliderValue(NewValue: number): void;
        SetMinFractionalDigits(NewValue: number): void;
        SetMaxValue(NewValue: number): void;
        SetMaxSliderValue(NewValue: number): void;
        SetMaxFractionalDigits(NewValue: number): void;
        SetForegroundColor(InForegroundColor: FSlateColor): void;
        SetDelta(NewValue: number): void;
        SetAlwaysUsesDeltaSnap(bNewValue: boolean): void;
        OnSpinBoxValueCommittedEvent__DelegateSignature(InValue: number, CommitMethod: ETextCommit): void;
        OnSpinBoxValueChangedEvent__DelegateSignature(InValue: number): void;
        OnSpinBoxBeginSliderMovement__DelegateSignature(): void;
        GetValue(): number;
        GetMinValue(): number;
        GetMinSliderValue(): number;
        GetMinFractionalDigits(): number;
        GetMaxValue(): number;
        GetMaxSliderValue(): number;
        GetMaxFractionalDigits(): number;
        GetDelta(): number;
        GetAlwaysUsesDeltaSnap(): boolean;
        ClearMinValue(): void;
        ClearMinSliderValue(): void;
        ClearMaxValue(): void;
        ClearMaxSliderValue(): void;
    };
    readonly __properties_USpinBox: {
        Value: number;
        ValueDelegate: FSpinBoxValueDelegate;
        WidgetStyle: FSpinBoxStyle;
        MinFractionalDigits: number;
        MaxFractionalDigits: number;
        bAlwaysUsesDeltaSnap: boolean;
        bEnableSlider: boolean;
        Delta: number;
        SliderExponent: number;
        Font: FSlateFontInfo;
        Justification: ETextJustify;
        MinDesiredWidth: number;
        KeyboardType: EVirtualKeyboardType;
        ClearKeyboardFocusOnCommit: boolean;
        SelectAllTextOnCommit: boolean;
        ForegroundColor: FSlateColor;
        OnValueChanged: FSpinBoxOnValueChanged;
        OnValueCommitted: FSpinBoxOnValueCommitted;
        OnBeginSliderMovement: FSpinBoxOnBeginSliderMovement;
        OnEndSliderMovement: FSpinBoxOnEndSliderMovement;
        bOverride_MinValue: boolean;
        bOverride_MaxValue: boolean;
        bOverride_MinSliderValue: boolean;
        bOverride_MaxSliderValue: boolean;
        MinValue: number;
        MaxValue: number;
        MinSliderValue: number;
        MaxSliderValue: number;
    };
    readonly __staticRegistry: 
        USpinBox['__static_USpinBox'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USpinBox['__properties_USpinBox'] &
        UWidget['__propertyRegistry'];
}

declare interface UStackBox extends UPanelWidget {
    readonly __static_UStackBox: {
        ReplaceStackBoxChildAt(Index: number, Content: UWidget): boolean;
        AddChildToStackBox(Content: UWidget): UStackBoxSlot;
    };
    readonly __properties_UStackBox: {
        orientation: EOrientation;
    };
    readonly __staticRegistry: 
        UStackBox['__static_UStackBox'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UStackBox['__properties_UStackBox'] &
        UPanelWidget['__propertyRegistry'];
}

declare interface UStackBoxSlot extends UPanelSlot {
    readonly __properties_UStackBoxSlot: {
        Padding: FMargin;
        Size: FSlateChildSize;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UStackBoxSlot['__properties_UStackBoxSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UTextBinding extends UPropertyBinding {
    readonly __static_UTextBinding: {
        GetTextValue(): string;
        GetStringValue(): string;
    };
    readonly __staticRegistry: 
        UTextBinding['__static_UTextBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UTextBlock extends UTextLayoutWidget {
    readonly __static_UTextBlock: {
        SetTextTransformPolicy(InTransformPolicy: ETextTransformPolicy): void;
        SetTextOverflowPolicy(InOverflowPolicy: ETextOverflowPolicy): void;
        SetText(InText: string): void;
        SetStrikeBrush(InStrikeBrush: FSlateBrush): void;
        SetShadowOffset(InShadowOffset: FVector2D): void;
        SetShadowColorAndOpacity(InShadowColorAndOpacity: FLinearColor): void;
        SetOpacity(InOpacity: number): void;
        SetMinDesiredWidth(InMinDesiredWidth: number): void;
        SetFontOutlineMaterial(InMaterial: UMaterialInterface): void;
        SetFontMaterial(InMaterial: UMaterialInterface): void;
        SetFont(InFontInfo: FSlateFontInfo): void;
        SetColorAndOpacity(InColorAndOpacity: FSlateColor): void;
        SetAutoWrapText(InAutoTextWrap: boolean): void;
        GetText(): string;
        GetDynamicOutlineMaterial(): UMaterialInstanceDynamic;
        GetDynamicFontMaterial(): UMaterialInstanceDynamic;
    };
    readonly __properties_UTextBlock: {
        Text: string;
        TextDelegate: FTextBlockTextDelegate;
        ColorAndOpacity: FSlateColor;
        ColorAndOpacityDelegate: FTextBlockColorAndOpacityDelegate;
        MinDesiredWidth: number;
        Font: FSlateFontInfo;
        StrikeBrush: FSlateBrush;
        ShadowOffset: FVector2D;
        ShadowColorAndOpacity: FLinearColor;
        ShadowColorAndOpacityDelegate: FTextBlockShadowColorAndOpacityDelegate;
        bWrapWithInvalidationPanel: boolean;
        TextTransformPolicy: ETextTransformPolicy;
        TextOverflowPolicy: ETextOverflowPolicy;
        bSimpleTextMode: boolean;
    };
    readonly __staticRegistry: 
        UTextBlock['__static_UTextBlock'] &
        UTextLayoutWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UTextBlock['__properties_UTextBlock'] &
        UTextLayoutWidget['__propertyRegistry'];
}

declare interface UTextLayoutWidget extends UWidget {
    readonly __static_UTextLayoutWidget: {
        SetJustification(InJustification: ETextJustify): void;
    };
    readonly __properties_UTextLayoutWidget: {
        ShapedTextOptions: FShapedTextOptions;
        Justification: ETextJustify;
        WrappingPolicy: ETextWrappingPolicy;
        AutoWrapText: boolean;
        ApplyLineHeightToBottomLine: boolean;
        WrapTextAt: number;
        Margin: FMargin;
        LineHeightPercentage: number;
    };
    readonly __staticRegistry: 
        UTextLayoutWidget['__static_UTextLayoutWidget'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UTextLayoutWidget['__properties_UTextLayoutWidget'] &
        UWidget['__propertyRegistry'];
}

declare interface UThrobber extends UWidget {
    readonly __static_UThrobber: {
        SetNumberOfPieces(InNumberOfPieces: number): void;
        SetAnimateVertically(bInAnimateVertically: boolean): void;
        SetAnimateOpacity(bInAnimateOpacity: boolean): void;
        SetAnimateHorizontally(bInAnimateHorizontally: boolean): void;
    };
    readonly __properties_UThrobber: {
        NumberOfPieces: number;
        bAnimateHorizontally: boolean;
        bAnimateVertically: boolean;
        bAnimateOpacity: boolean;
        Image: FSlateBrush;
    };
    readonly __staticRegistry: 
        UThrobber['__static_UThrobber'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UThrobber['__properties_UThrobber'] &
        UWidget['__propertyRegistry'];
}

declare interface UTileView extends UListView {
    readonly __static_UTileView: {
        SetEntryWidth(NewWidth: number): void;
        SetEntryHeight(NewHeight: number): void;
        IsAligned(): boolean;
        GetEntryWidth(): number;
        GetEntryHeight(): number;
    };
    readonly __properties_UTileView: {
        EntryHeight: number;
        EntryWidth: number;
        TileAlignment: EListItemAlignment;
        bWrapHorizontalNavigation: boolean;
        ScrollbarDisabledVisibility: ESlateVisibility;
        bEntrySizeIncludesEntrySpacing: boolean;
    };
    readonly __staticRegistry: 
        UTileView['__static_UTileView'] &
        UListView['__staticRegistry'];
    readonly __propertyRegistry: 
        UTileView['__properties_UTileView'] &
        UListView['__propertyRegistry'];
}

declare interface UTreeView extends UListView {
    readonly __static_UTreeView: {
        SetItemExpansion(Item: UObject, bExpandItem: boolean): void;
        ExpandAll(): void;
        CollapseAll(): void;
    };
    readonly __properties_UTreeView: {
        BP_OnGetItemChildren: FTreeViewBP_OnGetItemChildren;
        BP_OnItemExpansionChanged: FTreeViewBP_OnItemExpansionChanged;
    };
    readonly __staticRegistry: 
        UTreeView['__static_UTreeView'] &
        UListView['__staticRegistry'];
    readonly __propertyRegistry: 
        UTreeView['__properties_UTreeView'] &
        UListView['__propertyRegistry'];
}

declare interface UUIComponent extends UObject {
    readonly __properties_UUIComponent: {
        Owner: TWeakObjectPtr<UWidget>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UUIComponent['__properties_UUIComponent'] &
        UObject['__propertyRegistry'];
}

declare interface UUIComponentContainer extends UObject {
    readonly __properties_UUIComponentContainer: {
        Components: FUIComponentTarget[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UUIComponentContainer['__properties_UUIComponentContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UUIComponentUserWidgetExtension extends UUserWidgetExtension {
    readonly __properties_UUIComponentUserWidgetExtension: {
        ComponentContainer: UUIComponentContainer;
    };
    readonly __staticRegistry: 
        UUserWidgetExtension['__staticRegistry'];
    readonly __propertyRegistry: 
        UUIComponentUserWidgetExtension['__properties_UUIComponentUserWidgetExtension'] &
        UUserWidgetExtension['__propertyRegistry'];
}

declare interface UUIComponentWidgetBlueprintGeneratedClassExtension extends UWidgetBlueprintGeneratedClassExtension {
    readonly __properties_UUIComponentWidgetBlueprintGeneratedClassExtension: {
        ComponentContainer: UUIComponentContainer;
    };
    readonly __staticRegistry: 
        UWidgetBlueprintGeneratedClassExtension['__staticRegistry'];
    readonly __propertyRegistry: 
        UUIComponentWidgetBlueprintGeneratedClassExtension['__properties_UUIComponentWidgetBlueprintGeneratedClassExtension'] &
        UWidgetBlueprintGeneratedClassExtension['__propertyRegistry'];
}

declare interface UUMGSequencePlayer extends UObject {
    readonly __static_UUMGSequencePlayer: {
        SetUserTag(InUserTag: string): void;
        GetUserTag(): string;
    };
    readonly __staticRegistry: 
        UUMGSequencePlayer['__static_UUMGSequencePlayer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UUMGSequenceTickManager extends UObject {
    readonly __properties_UUMGSequenceTickManager: {
        WeakUserWidgetData: TMap<TWeakObjectPtr<UUserWidget>, FSequenceTickManagerWidgetData>;
        Linker: UMovieSceneEntitySystemLinker;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UUMGSequenceTickManager['__properties_UUMGSequenceTickManager'] &
        UObject['__propertyRegistry'];
}

declare interface UUniformGridPanel extends UPanelWidget {
    readonly __static_UUniformGridPanel: {
        SetSlotPadding(InSlotPadding: FMargin): void;
        SetMinDesiredSlotWidth(InMinDesiredSlotWidth: number): void;
        SetMinDesiredSlotHeight(InMinDesiredSlotHeight: number): void;
        AddChildToUniformGrid(Content: UWidget, InRow: number, InColumn: number): UUniformGridSlot;
    };
    readonly __properties_UUniformGridPanel: {
        SlotPadding: FMargin;
        MinDesiredSlotWidth: number;
        MinDesiredSlotHeight: number;
    };
    readonly __staticRegistry: 
        UUniformGridPanel['__static_UUniformGridPanel'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUniformGridPanel['__properties_UUniformGridPanel'] &
        UPanelWidget['__propertyRegistry'];
}

declare interface UUniformGridSlot extends UPanelSlot {
    readonly __static_UUniformGridSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetRow(InRow: number): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
        SetColumn(InColumn: number): void;
    };
    readonly __properties_UUniformGridSlot: {
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
        Row: number;
        Column: number;
    };
    readonly __staticRegistry: 
        UUniformGridSlot['__static_UUniformGridSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UUniformGridSlot['__properties_UUniformGridSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UUserListEntryLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UUserListEntryLibrary: {
        IsListItemSelected(UserListEntry: TScriptInterface<IUserListEntry>): boolean;
        IsListItemExpanded(UserListEntry: TScriptInterface<IUserListEntry>): boolean;
        GetOwningListView(UserListEntry: TScriptInterface<IUserListEntry>): UListViewBase;
    };
    readonly __staticRegistry: 
        UUserListEntryLibrary['__static_UUserListEntryLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UUserObjectListEntryLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UUserObjectListEntryLibrary: {
        GetListItemObject(UserObjectListEntry: TScriptInterface<IUserObjectListEntry>): UObject;
    };
    readonly __staticRegistry: 
        UUserObjectListEntryLibrary['__static_UUserObjectListEntryLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UUserWidget extends UWidget {
    readonly __static_UUserWidget: {
        UnregisterInputComponent(): void;
        UnbindFromAnimationStarted(Animation: UWidgetAnimation, Delegate: FUnbindFromAnimationStartedDelegate): void;
        UnbindFromAnimationFinished(Animation: UWidgetAnimation, Delegate: FUnbindFromAnimationFinishedDelegate): void;
        UnbindAllFromAnimationStarted(Animation: UWidgetAnimation): void;
        UnbindAllFromAnimationFinished(Animation: UWidgetAnimation): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        StopListeningForInputAction(ActionName: string, EventType: EInputEvent): void;
        StopListeningForAllInputActions(): void;
        StopAnimationsAndLatentActions(): void;
        StopAnimation(InAnimation: UWidgetAnimation): void;
        StopAllAnimations(): void;
        SetPositionInViewport(position: FVector2D, bRemoveDPIScale: boolean): void;
        SetPlaybackSpeed(InAnimation: UWidgetAnimation, PlaybackSpeed: number): void;
        SetPadding(InPadding: FMargin): void;
        SetOwningPlayer(LocalPlayerController: APlayerController): void;
        SetNumLoopsToPlay(InAnimation: UWidgetAnimation, NumLoopsToPlay: number): void;
        SetInputActionPriority(NewPriority: number): void;
        SetInputActionBlocking(bShouldBlock: boolean): void;
        SetForegroundColor(InForegroundColor: FSlateColor): void;
        SetDesiredSizeInViewport(Size: FVector2D): void;
        SetDesiredFocusWidget(Widget: UWidget): boolean;
        SetColorAndOpacity(InColorAndOpacity: FLinearColor): void;
        SetAnimationCurrentTime(InAnimation: UWidgetAnimation, InTime: number): void;
        SetAnchorsInViewport(Anchors: FAnchors): void;
        SetAlignmentInViewport(Alignment: FVector2D): void;
        ReverseAnimation(InAnimation: UWidgetAnimation): void;
        RemoveFromViewport(): void;
        RemoveExtensions(InExtensionType: TSubclassOf<UUserWidgetExtension>): void;
        RemoveExtension(InExtension: UUserWidgetExtension): void;
        RegisterInputComponent(): void;
        QueueStopAnimation(InAnimation: UWidgetAnimation): void;
        QueueStopAllAnimations(): void;
        QueuePlayAnimationTimeRange(InAnimation: UWidgetAnimation, StartAtTime: number, EndAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number, bRestoreState: boolean): void;
        QueuePlayAnimationReverse(InAnimation: UWidgetAnimation, PlaybackSpeed: number, bRestoreState: boolean): void;
        QueuePlayAnimationForward(InAnimation: UWidgetAnimation, PlaybackSpeed: number, bRestoreState: boolean): void;
        QueuePlayAnimation(InAnimation: UWidgetAnimation, StartAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number, bRestoreState: boolean): void;
        QueuePauseAnimation(InAnimation: UWidgetAnimation): number;
        PreConstruct(IsDesignTime: boolean): void;
        PlaySound(SoundToPlay: USoundBase): void;
        PlayAnimationTimeRange(InAnimation: UWidgetAnimation, StartAtTime: number, EndAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number, bRestoreState: boolean): FWidgetAnimationHandle;
        PlayAnimationReverse(InAnimation: UWidgetAnimation, PlaybackSpeed: number, bRestoreState: boolean): FWidgetAnimationHandle;
        PlayAnimationForward(InAnimation: UWidgetAnimation, PlaybackSpeed: number, bRestoreState: boolean): FWidgetAnimationHandle;
        PlayAnimation(InAnimation: UWidgetAnimation, StartAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number, bRestoreState: boolean): FWidgetAnimationHandle;
        PauseAnimation(InAnimation: UWidgetAnimation): number;
        OnTouchStarted(MyGeometry: FGeometry, InTouchEvent: FPointerEvent): FEventReply;
        OnTouchMoved(MyGeometry: FGeometry, InTouchEvent: FPointerEvent): FEventReply;
        OnTouchGesture(MyGeometry: FGeometry, GestureEvent: FPointerEvent): FEventReply;
        OnTouchForceChanged(MyGeometry: FGeometry, InTouchEvent: FPointerEvent): FEventReply;
        OnTouchFirstMove(MyGeometry: FGeometry, InTouchEvent: FPointerEvent): FEventReply;
        OnTouchEnded(MyGeometry: FGeometry, InTouchEvent: FPointerEvent): FEventReply;
        OnRemovedFromFocusPath(InFocusEvent: FFocusEvent): void;
        OnPreviewMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnPreviewKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        OnPaint(Context: FPaintContext): void;
        OnMouseWheel(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnMouseMove(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnMouseLeave(MouseEvent: FPointerEvent): void;
        OnMouseEnter(MyGeometry: FGeometry, MouseEvent: FPointerEvent): void;
        OnMouseCaptureLost(): void;
        OnMouseButtonUp(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnMouseButtonDoubleClick(InMyGeometry: FGeometry, InMouseEvent: FPointerEvent): FEventReply;
        OnMotionDetected(MyGeometry: FGeometry, InMotionEvent: FMotionEvent): FEventReply;
        OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        OnKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        OnKeyChar(MyGeometry: FGeometry, InCharacterEvent: FCharacterEvent): FEventReply;
        OnInitialized(): void;
        OnFocusReceived(MyGeometry: FGeometry, InFocusEvent: FFocusEvent): FEventReply;
        OnFocusLost(InFocusEvent: FFocusEvent): void;
        OnDrop(MyGeometry: FGeometry, PointerEvent: FPointerEvent, Operation: UDragDropOperation): boolean;
        OnDragOver(MyGeometry: FGeometry, PointerEvent: FPointerEvent, Operation: UDragDropOperation): boolean;
        OnDragLeave(PointerEvent: FPointerEvent, Operation: UDragDropOperation): void;
        OnDragEnter(MyGeometry: FGeometry, PointerEvent: FPointerEvent, Operation: UDragDropOperation): void;
        OnDragDetected(MyGeometry: FGeometry, PointerEvent: FPointerEvent, Operation: UDragDropOperation): void;
        OnDragCancelled(PointerEvent: FPointerEvent, Operation: UDragDropOperation): void;
        OnAnimationStarted(Animation: UWidgetAnimation): void;
        OnAnimationFinished(Animation: UWidgetAnimation): void;
        OnAnalogValueChanged(MyGeometry: FGeometry, InAnalogInputEvent: FAnalogInputEvent): FEventReply;
        OnAddedToFocusPath(InFocusEvent: FFocusEvent): void;
        ListenForInputAction(ActionName: string, EventType: EInputEvent, bConsume: boolean, Callback: FListenForInputActionCallback): void;
        IsPlayingAnimation(): boolean;
        IsListeningForInputAction(ActionName: string): boolean;
        IsInteractable(): boolean;
        IsAnyAnimationPlaying(): boolean;
        IsAnimationPlayingForward(InAnimation: UWidgetAnimation): boolean;
        IsAnimationPlaying(InAnimation: UWidgetAnimation): boolean;
        GetOwningPlayerPawn(): APawn;
        GetOwningPlayerCameraManager(): APlayerCameraManager;
        GetIsVisible(): boolean;
        GetExtensions(ExtensionType: TSubclassOf<UUserWidgetExtension>): UUserWidgetExtension[];
        GetExtension(ExtensionType: TSubclassOf<UUserWidgetExtension>): UUserWidgetExtension;
        GetAnimationCurrentTime(InAnimation: UWidgetAnimation): number;
        GetAnchorsInViewport(): FAnchors;
        GetAlignmentInViewport(): FVector2D;
        FlushAnimations(): void;
        Destruct(): void;
        Construct(): void;
        CancelLatentActions(): void;
        BindToAnimationStarted(Animation: UWidgetAnimation, Delegate: FBindToAnimationStartedDelegate): void;
        BindToAnimationFinished(Animation: UWidgetAnimation, Delegate: FBindToAnimationFinishedDelegate): void;
        BindToAnimationEvent(Animation: UWidgetAnimation, Delegate: FBindToAnimationEventDelegate, AnimationEvent: EWidgetAnimationEvent, UserTag: string): void;
        AddToViewport(ZOrder: number): void;
        AddToPlayerScreen(ZOrder: number): boolean;
        AddExtension(InExtensionType: TSubclassOf<UUserWidgetExtension>): UUserWidgetExtension;
    };
    readonly __properties_UUserWidget: {
        ColorAndOpacity: FLinearColor;
        ColorAndOpacityDelegate: FUserWidgetColorAndOpacityDelegate;
        ForegroundColor: FSlateColor;
        ForegroundColorDelegate: FUserWidgetForegroundColorDelegate;
        OnVisibilityChanged: FUserWidgetOnVisibilityChanged;
        Padding: FMargin;
        Priority: number;
        bIsFocusable: boolean;
        bStopAction: boolean;
        bAutomaticallyRegisterInputOnConstruction: boolean;
        QueuedWidgetAnimationTransitions: FQueuedWidgetAnimationTransition[];
        ActiveSequencePlayers: UUMGSequencePlayer[];
        AnimationTickManager: UUMGSequenceTickManager;
        StoppedSequencePlayers: UUMGSequencePlayer[];
        NamedSlotBindings: FNamedSlotBinding[];
        Extensions: UUserWidgetExtension[];
        WidgetTree: UWidgetTree;
        bHasScriptImplementedTick: boolean;
        bHasScriptImplementedPaint: boolean;
        TickFrequency: EWidgetTickFrequency;
        DesiredFocusWidget: FWidgetChild;
        InputComponent: UInputComponent;
        AnimationCallbacks: FAnimationEventBinding[];
    };
    readonly __staticRegistry: 
        UUserWidget['__static_UUserWidget'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserWidget['__properties_UUserWidget'] &
        UWidget['__propertyRegistry'];
}

declare interface UUserWidgetBlueprint extends UBlueprint {
    readonly __staticRegistry: 
        UBlueprint['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprint['__propertyRegistry'];
}

declare interface UUserWidgetExtension extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UUserWidgetFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UUserWidgetFunctionLibrary: {
        Conv_UMGSequencePlayer(WidgetAnimationHandle: FWidgetAnimationHandle): UUMGSequencePlayer;
    };
    readonly __staticRegistry: 
        UUserWidgetFunctionLibrary['__static_UUserWidgetFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UVerticalBox extends UPanelWidget {
    readonly __static_UVerticalBox: {
        AddChildToVerticalBox(Content: UWidget): UVerticalBoxSlot;
    };
    readonly __staticRegistry: 
        UVerticalBox['__static_UVerticalBox'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UPanelWidget['__propertyRegistry'];
}

declare interface UVerticalBoxSlot extends UPanelSlot {
    readonly __static_UVerticalBoxSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetSize(InSize: FSlateChildSize): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UVerticalBoxSlot: {
        Size: FSlateChildSize;
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UVerticalBoxSlot['__static_UVerticalBoxSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UVerticalBoxSlot['__properties_UVerticalBoxSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UViewport extends UContentWidget {
    readonly __static_UViewport: {
        Spawn(ActorClass: TSubclassOf<AActor>): AActor;
        SetViewRotation(Rotation: FRotator): void;
        SetViewLocation(Location: FVector): void;
        SetSkyIntensity(LightIntensity: number): void;
        SetShowFlag(InShowFlagName: string, InValue: boolean): void;
        SetLightIntensity(LightIntensity: number): void;
        SetEnableAdvancedFeatures(InEnableAdvancedFeatures: boolean): void;
        GetViewRotation(): FRotator;
        GetViewProjectionMatrix(): FMatrix;
        GetViewportWorld(): UWorld;
        GetViewLocation(): FVector;
    };
    readonly __properties_UViewport: {
        BackgroundColor: FLinearColor;
    };
    readonly __staticRegistry: 
        UViewport['__static_UViewport'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UViewport['__properties_UViewport'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UVisibilityBinding extends UPropertyBinding {
    readonly __static_UVisibilityBinding: {
        GetValue(): ESlateVisibility;
    };
    readonly __staticRegistry: 
        UVisibilityBinding['__static_UVisibilityBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UVisual extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UWidget extends UVisual {
    readonly __static_UWidget: {
        SetVisibility(InVisibility: ESlateVisibility): void;
        SetUserFocus(PlayerController: APlayerController): void;
        SetToolTipText(InToolTipText: string): void;
        SetToolTip(Widget: UWidget): void;
        SetRenderTranslation(Translation: FVector2D): void;
        SetRenderTransformPivot(Pivot: FVector2D): void;
        SetRenderTransformAngle(Angle: number): void;
        SetRenderTransform(InTransform: FWidgetTransform): void;
        SetRenderShear(Shear: FVector2D): void;
        SetRenderScale(Scale: FVector2D): void;
        SetRenderOpacity(InOpacity: number): void;
        SetNavigationRuleExplicit(Direction: EUINavigation, InWidget: UWidget): void;
        SetNavigationRuleCustomBoundary(Direction: EUINavigation, InCustomDelegate: FSetNavigationRuleCustomBoundaryInCustomDelegate): void;
        SetNavigationRuleCustom(Direction: EUINavigation, InCustomDelegate: FSetNavigationRuleCustomInCustomDelegate): void;
        SetNavigationRuleBase(Direction: EUINavigation, Rule: EUINavigationRule): void;
        SetNavigationRule(Direction: EUINavigation, Rule: EUINavigationRule, WidgetToFocus: string): void;
        SetKeyboardFocus(): void;
        SetIsEnabled(bInIsEnabled: boolean): void;
        SetFocus(): void;
        SetCursor(InCursor: EMouseCursor): void;
        SetClipping(InClipping: EWidgetClipping): void;
        SetAllNavigationRules(Rule: EUINavigationRule, WidgetToFocus: string): void;
        ResetCursor(): void;
        RemoveFromParent(): void;
        OnReply__DelegateSignature(): FEventReply;
        OnPointerEvent__DelegateSignature(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        K2_RemoveFieldValueChangedDelegate(FieldId: FFieldNotificationId, Delegate: FK2_RemoveFieldValueChangedDelegateDelegate): void;
        K2_BroadcastFieldValueChanged(FieldId: FFieldNotificationId): void;
        K2_AddFieldValueChangedDelegate(FieldId: FFieldNotificationId, Delegate: FK2_AddFieldValueChangedDelegateDelegate): void;
        IsVisible(): boolean;
        IsRendered(): boolean;
        IsInViewport(): boolean;
        IsHovered(): boolean;
        InvalidateLayoutAndVolatility(): void;
        HasUserFocusedDescendants(PlayerController: APlayerController): boolean;
        HasUserFocus(PlayerController: APlayerController): boolean;
        HasMouseCaptureByUser(UserIndex: number, PointerIndex: number): boolean;
        HasMouseCapture(): boolean;
        HasKeyboardFocus(): boolean;
        HasFocusedDescendants(): boolean;
        HasAnyUserFocus(): boolean;
        GetWidget__DelegateSignature(): UWidget;
        GetVisibility(): ESlateVisibility;
        GetTickSpaceGeometry(): FGeometry;
        GetText__DelegateSignature(): string;
        GetSlateVisibility__DelegateSignature(): ESlateVisibility;
        GetSlateColor__DelegateSignature(): FSlateColor;
        GetSlateBrush__DelegateSignature(): FSlateBrush;
        GetRenderTransformAngle(): number;
        GetRenderOpacity(): number;
        GetParent(): UPanelWidget;
        GetPaintSpaceGeometry(): FGeometry;
        GetOwningPlayer(): APlayerController;
        GetOwningLocalPlayer(): ULocalPlayer;
        GetMouseCursor__DelegateSignature(): EMouseCursor;
        GetLinearColor__DelegateSignature(): FLinearColor;
        GetIsEnabled(): boolean;
        GetInt32__DelegateSignature(): number;
        GetGameInstance(): UGameInstance;
        GetFloat__DelegateSignature(): number;
        GetDesiredSize(): FVector2D;
        GetClipping(): EWidgetClipping;
        GetCheckBoxState__DelegateSignature(): ECheckBoxState;
        GetCachedGeometry(): FGeometry;
        GetBool__DelegateSignature(): boolean;
        GetAccessibleText(): string;
        GetAccessibleSummaryText(): string;
        GenerateWidgetForString__DelegateSignature(Item: string): UWidget;
        GenerateWidgetForObject__DelegateSignature(Item: UObject): UWidget;
        ForceVolatile(bForce: boolean): void;
        ForceLayoutPrepass(): void;
    };
    readonly __properties_UWidget: {
        Slot: UPanelSlot;
        bIsEnabledDelegate: FWidgetBIsEnabledDelegate;
        ToolTipTextDelegate: FWidgetToolTipTextDelegate;
        ToolTipText: string;
        ToolTipWidget: UWidget;
        ToolTipWidgetDelegate: FWidgetToolTipWidgetDelegate;
        VisibilityDelegate: FWidgetVisibilityDelegate;
        RenderTransform: FWidgetTransform;
        RenderTransformPivot: FVector2D;
        FlowDirectionPreference: EFlowDirectionPreference;
        bIsVariable: boolean;
        bCreatedByConstructionScript: boolean;
        bIsEnabled: boolean;
        bOverride_Cursor: boolean;
        bIsVolatile: boolean;
        Cursor: EMouseCursor;
        Clipping: EWidgetClipping;
        Visibility: ESlateVisibility;
        PixelSnapping: EWidgetPixelSnapping;
        RenderOpacity: number;
        AccessibleWidgetData: USlateAccessibleWidgetData;
        Navigation: UWidgetNavigation;
        NativeBindings: UPropertyBinding[];
    };
    readonly __staticRegistry: 
        UWidget['__static_UWidget'] &
        UVisual['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidget['__properties_UWidget'] &
        UVisual['__propertyRegistry'];
}

declare interface UWidgetAnimation extends UMovieSceneSequence {
    readonly __static_UWidgetAnimation: {
        UnbindFromAnimationStarted(Widget: UUserWidget, Delegate: FUnbindFromAnimationStartedDelegate): void;
        UnbindFromAnimationFinished(Widget: UUserWidget, Delegate: FUnbindFromAnimationFinishedDelegate): void;
        UnbindAllFromAnimationStarted(Widget: UUserWidget): void;
        UnbindAllFromAnimationFinished(Widget: UUserWidget): void;
        GetStartTime(): number;
        GetEndTime(): number;
        BindToAnimationStarted(Widget: UUserWidget, Delegate: FBindToAnimationStartedDelegate): void;
        BindToAnimationFinished(Widget: UUserWidget, Delegate: FBindToAnimationFinishedDelegate): void;
    };
    readonly __properties_UWidgetAnimation: {
        MovieScene: UMovieScene;
        AnimationBindings: FWidgetAnimationBinding[];
        bLegacyFinishOnStop: boolean;
        DisplayLabel: string;
    };
    readonly __staticRegistry: 
        UWidgetAnimation['__static_UWidgetAnimation'] &
        UMovieSceneSequence['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetAnimation['__properties_UWidgetAnimation'] &
        UMovieSceneSequence['__propertyRegistry'];
}

declare interface UWidgetAnimationDelegateBinding extends UDynamicBlueprintBinding {
    readonly __properties_UWidgetAnimationDelegateBinding: {
        WidgetAnimationDelegateBindings: FBlueprintWidgetAnimationDelegateBinding[];
    };
    readonly __staticRegistry: 
        UDynamicBlueprintBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetAnimationDelegateBinding['__properties_UWidgetAnimationDelegateBinding'] &
        UDynamicBlueprintBinding['__propertyRegistry'];
}

declare interface UWidgetAnimationHandleFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UWidgetAnimationHandleFunctionLibrary: {
        SetUserTag(Target: FWidgetAnimationHandle, InUserTag: string): void;
        GetUserTag(Target: FWidgetAnimationHandle): string;
    };
    readonly __staticRegistry: 
        UWidgetAnimationHandleFunctionLibrary['__static_UWidgetAnimationHandleFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UWidgetAnimationPlayCallbackProxy extends UObject {
    readonly __static_UWidgetAnimationPlayCallbackProxy: {
        NewPlayAnimationTimeRangeProxyObject(Result: FWidgetAnimationHandle, Widget: UUserWidget, InAnimation: UWidgetAnimation, StartAtTime: number, EndAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number): UWidgetAnimationPlayCallbackProxy;
        NewPlayAnimationProxyObject(Result: FWidgetAnimationHandle, Widget: UUserWidget, InAnimation: UWidgetAnimation, StartAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number): UWidgetAnimationPlayCallbackProxy;
        CreatePlayAnimationTimeRangeProxyObject(Result: UUMGSequencePlayer, Widget: UUserWidget, InAnimation: UWidgetAnimation, StartAtTime: number, EndAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number): UWidgetAnimationPlayCallbackProxy;
        CreatePlayAnimationProxyObject(Result: UUMGSequencePlayer, Widget: UUserWidget, InAnimation: UWidgetAnimation, StartAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number): UWidgetAnimationPlayCallbackProxy;
    };
    readonly __properties_UWidgetAnimationPlayCallbackProxy: {
        Finished: FWidgetAnimationPlayCallbackProxyFinished;
    };
    readonly __staticRegistry: 
        UWidgetAnimationPlayCallbackProxy['__static_UWidgetAnimationPlayCallbackProxy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetAnimationPlayCallbackProxy['__properties_UWidgetAnimationPlayCallbackProxy'] &
        UObject['__propertyRegistry'];
}

declare interface UWidgetBinaryStateRegistration extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UWidgetBinding extends UPropertyBinding {
    readonly __static_UWidgetBinding: {
        GetValue(): UWidget;
    };
    readonly __staticRegistry: 
        UWidgetBinding['__static_UWidgetBinding'] &
        UPropertyBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBinding['__propertyRegistry'];
}

declare interface UWidgetBlueprintGeneratedClass extends UBlueprintGeneratedClass {
    readonly __properties_UWidgetBlueprintGeneratedClass: {
        WidgetTree: UWidgetTree;
        Extensions: UWidgetBlueprintGeneratedClassExtension[];
        bClassRequiresNativeTick: boolean;
        bCanCallInitializedWithoutPlayerContext: boolean;
        Bindings: FDelegateRuntimeBinding[];
        Animations: UWidgetAnimation[];
        NamedSlots: string[];
        AvailableNamedSlots: string[];
        InstanceNamedSlots: string[];
    };
    readonly __staticRegistry: 
        UBlueprintGeneratedClass['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetBlueprintGeneratedClass['__properties_UWidgetBlueprintGeneratedClass'] &
        UBlueprintGeneratedClass['__propertyRegistry'];
}

declare interface UWidgetBlueprintGeneratedClassExtension extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UWidgetBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UWidgetBlueprintLibrary: {
        UnlockMouse(Reply: FEventReply): FEventReply;
        Unhandled(): FEventReply;
        SetWindowTitleBarState(TitleBarContent: UWidget, Mode: EWindowTitleBarMode, bTitleBarDragEnabled: boolean, bWindowButtonsVisible: boolean, bTitleBarVisible: boolean): void;
        SetWindowTitleBarOnCloseClickedDelegate(Delegate: FSetWindowTitleBarOnCloseClickedDelegateDelegate): void;
        SetWindowTitleBarCloseButtonActive(bActive: boolean): void;
        SetUserFocus(Reply: FEventReply, FocusWidget: UWidget, bInAllUsers: boolean): FEventReply;
        SetMousePosition(Reply: FEventReply, NewMousePosition: FVector2D): FEventReply;
        SetInputMode_UIOnlyEx(PlayerController: APlayerController, InWidgetToFocus: UWidget, InMouseLockMode: EMouseLockMode, bFlushInput: boolean): void;
        SetInputMode_GameOnly(PlayerController: APlayerController, bFlushInput: boolean): void;
        SetInputMode_GameAndUIEx(PlayerController: APlayerController, InWidgetToFocus: UWidget, InMouseLockMode: EMouseLockMode, bHideCursorDuringCapture: boolean, bFlushInput: boolean): void;
        SetHardwareCursor(WorldContextObject: UObject, CursorShape: EMouseCursor, CursorName: string, HotSpot: FVector2D): boolean;
        SetFocusToGameViewport(): void;
        SetColorVisionDeficiencyType(Type: EColorVisionDeficiency, Severity: number, CorrectDeficiency: boolean, ShowCorrectionWithDeficiency: boolean): void;
        SetBrushResourceToTexture(Brush: FSlateBrush, Texture: UTexture2D): void;
        SetBrushResourceToMaterial(Brush: FSlateBrush, Material: UMaterialInterface): void;
        RestorePreviousWindowTitleBarState(): void;
        ReleaseMouseCapture(Reply: FEventReply): FEventReply;
        ReleaseJoystickCapture(Reply: FEventReply, bInAllJoysticks: boolean): FEventReply;
        OnGameWindowCloseButtonClickedDelegate__DelegateSignature(): void;
        NoResourceBrush(): FSlateBrush;
        MakeBrushFromTexture(Texture: UTexture2D, Width: number, Height: number): FSlateBrush;
        MakeBrushFromMaterial(Material: UMaterialInterface, Width: number, Height: number): FSlateBrush;
        MakeBrushFromAsset(BrushAsset: USlateBrushAsset): FSlateBrush;
        LockMouse(Reply: FEventReply, CapturingWidget: UWidget): FEventReply;
        IsDragDropping(): boolean;
        Handled(): FEventReply;
        GetSafeZonePadding(WorldContextObject: UObject, SafePadding: FVector4, SafePaddingScale: FVector2D, SpillOverPadding: FVector4): void;
        GetKeyEventFromAnalogInputEvent(Event: FAnalogInputEvent): FKeyEvent;
        GetInputEventFromPointerEvent(Event: FPointerEvent): FInputEvent;
        GetInputEventFromNavigationEvent(Event: FNavigationEvent): FInputEvent;
        GetInputEventFromKeyEvent(Event: FKeyEvent): FInputEvent;
        GetInputEventFromCharacterEvent(Event: FCharacterEvent): FInputEvent;
        GetDynamicMaterial(Brush: FSlateBrush): UMaterialInstanceDynamic;
        GetDragDroppingContent(): UDragDropOperation;
        GetBrushResourceAsTexture2D(Brush: FSlateBrush): UTexture2D;
        GetBrushResourceAsMaterial(Brush: FSlateBrush): UMaterialInterface;
        GetBrushResource(Brush: FSlateBrush): UObject;
        GetAllWidgetsWithInterface(WorldContextObject: UObject, FoundWidgets: UUserWidget[], Interface: TSubclassOf<UInterface>, TopLevelOnly: boolean): void;
        GetAllWidgetsOfClass(WorldContextObject: UObject, FoundWidgets: UUserWidget[], WidgetClass: TSubclassOf<UUserWidget>, TopLevelOnly: boolean): void;
        EndDragDrop(Reply: FEventReply): FEventReply;
        DrawTextFormatted(Context: FPaintContext, Text: string, position: FVector2D, Font: UFont, FontSize: number, FontTypeFace: string, Tint: FLinearColor): void;
        DrawText(Context: FPaintContext, InString: string, position: FVector2D, Tint: FLinearColor): void;
        DrawSpline(Context: FPaintContext, Start: FVector2D, StartDir: FVector2D, End: FVector2D, EndDir: FVector2D, Tint: FLinearColor, Thickness: number): void;
        DrawLines(Context: FPaintContext, Points: FVector2D[], Tint: FLinearColor, bAntiAlias: boolean, Thickness: number): void;
        DrawLine(Context: FPaintContext, PositionA: FVector2D, PositionB: FVector2D, Tint: FLinearColor, bAntiAlias: boolean, Thickness: number): void;
        DrawBox(Context: FPaintContext, position: FVector2D, Size: FVector2D, Brush: USlateBrushAsset, Tint: FLinearColor): void;
        DismissAllMenus(): void;
        DetectDragIfPressed(PointerEvent: FPointerEvent, WidgetDetectingDrag: UWidget, DragKey: FKey): FEventReply;
        DetectDrag(Reply: FEventReply, WidgetDetectingDrag: UWidget, DragKey: FKey): FEventReply;
        CreateDragDropOperation(OperationClass: TSubclassOf<UDragDropOperation>): UDragDropOperation;
        Create(WorldContextObject: UObject, WidgetType: TSubclassOf<UUserWidget>, OwningPlayer: APlayerController): UUserWidget;
        ClearUserFocus(Reply: FEventReply, bInAllUsers: boolean): FEventReply;
        CaptureMouse(Reply: FEventReply, CapturingWidget: UWidget): FEventReply;
        CaptureJoystick(Reply: FEventReply, CapturingWidget: UWidget, bInAllJoysticks: boolean): FEventReply;
        CancelDragDrop(): void;
    };
    readonly __staticRegistry: 
        UWidgetBlueprintLibrary['__static_UWidgetBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UWidgetCheckedStateRegistration extends UWidgetEnumStateRegistration {
    readonly __staticRegistry: 
        UWidgetEnumStateRegistration['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetEnumStateRegistration['__propertyRegistry'];
}

declare interface UWidgetComponent extends UMeshComponent {
    readonly __static_UWidgetComponent: {
        SetWindowVisibility(InVisibility: EWindowVisibility): void;
        SetWindowFocusable(bInWindowFocusable: boolean): void;
        SetWidgetSpace(NewSpace: EWidgetSpace): void;
        SetWidget(Widget: UUserWidget): void;
        SetTwoSided(bWantTwoSided: boolean): void;
        SetTintColorAndOpacity(NewTintColorAndOpacity: FLinearColor): void;
        SetTickWhenOffscreen(bWantTickWhenOffscreen: boolean): void;
        SetTickMode(InTickMode: ETickMode): void;
        SetRedrawTime(InRedrawTime: number): void;
        SetPivot(InPivot: FVector2D): void;
        SetOwnerPlayer(LocalPlayer: ULocalPlayer): void;
        SetManuallyRedraw(bUseManualRedraw: boolean): void;
        SetGeometryMode(InGeometryMode: EWidgetGeometryMode): void;
        SetDrawSize(Size: FVector2D): void;
        SetDrawAtDesiredSize(bInDrawAtDesiredSize: boolean): void;
        SetCylinderArcAngle(InCylinderArcAngle: number): void;
        SetBackgroundColor(NewBackgroundColor: FLinearColor): void;
        RequestRenderUpdate(): void;
        RequestRedraw(): void;
        IsWidgetVisible(): boolean;
        GetWindowVisiblility(): EWindowVisibility;
        GetWindowFocusable(): boolean;
        GetWidgetSpace(): EWidgetSpace;
        GetWidget(): UUserWidget;
        GetUserWidgetObject(): UUserWidget;
        GetTwoSided(): boolean;
        GetTickWhenOffscreen(): boolean;
        GetRenderTarget(): UTextureRenderTarget2D;
        GetRedrawTime(): number;
        GetPivot(): FVector2D;
        GetOwnerPlayer(): ULocalPlayer;
        GetMaterialInstance(): UMaterialInstanceDynamic;
        GetManuallyRedraw(): boolean;
        GetGeometryMode(): EWidgetGeometryMode;
        GetDrawSize(): FVector2D;
        GetDrawAtDesiredSize(): boolean;
        GetCylinderArcAngle(): number;
        GetCurrentDrawSize(): FVector2D;
    };
    readonly __properties_UWidgetComponent: {
        Space: EWidgetSpace;
        TimingPolicy: EWidgetTimingPolicy;
        WidgetClass: TSubclassOf<UUserWidget>;
        DrawSize: FIntPoint;
        bManuallyRedraw: boolean;
        bRedrawRequested: boolean;
        RedrawTime: number;
        CurrentDrawSize: FIntPoint;
        bUseInvalidationInWorldSpace: boolean;
        bDrawAtDesiredSize: boolean;
        Pivot: FVector2D;
        bReceiveHardwareInput: boolean;
        bWindowFocusable: boolean;
        WindowVisibility: EWindowVisibility;
        bApplyGammaCorrection: boolean;
        OwnerPlayer: ULocalPlayer;
        BackgroundColor: FLinearColor;
        TintColorAndOpacity: FLinearColor;
        OpacityFromTexture: number;
        BlendMode: EWidgetBlendMode;
        bIsTwoSided: boolean;
        TickWhenOffscreen: boolean;
        BodySetup: UBodySetup;
        TranslucentMaterial: UMaterialInterface;
        TranslucentMaterial_OneSided: UMaterialInterface;
        OpaqueMaterial: UMaterialInterface;
        OpaqueMaterial_OneSided: UMaterialInterface;
        MaskedMaterial: UMaterialInterface;
        MaskedMaterial_OneSided: UMaterialInterface;
        RenderTarget: UTextureRenderTarget2D;
        MaterialInstance: UMaterialInstanceDynamic;
        bAddedToScreen: boolean;
        bEditTimeUsable: boolean;
        SharedLayerName: string;
        LayerZOrder: number;
        GeometryMode: EWidgetGeometryMode;
        CylinderArcAngle: number;
        TickMode: ETickMode;
        Widget: UUserWidget;
    };
    readonly __staticRegistry: 
        UWidgetComponent['__static_UWidgetComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetComponent['__properties_UWidgetComponent'] &
        UMeshComponent['__propertyRegistry'];
}

declare interface UWidgetDisabledStateRegistration extends UWidgetBinaryStateRegistration {
    readonly __staticRegistry: 
        UWidgetBinaryStateRegistration['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetBinaryStateRegistration['__propertyRegistry'];
}

declare interface UWidgetEnumStateRegistration extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UWidgetFieldNotificationExtension extends UUserWidgetExtension {
    readonly __staticRegistry: 
        UUserWidgetExtension['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserWidgetExtension['__propertyRegistry'];
}

declare interface UWidgetHoveredStateRegistration extends UWidgetBinaryStateRegistration {
    readonly __staticRegistry: 
        UWidgetBinaryStateRegistration['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetBinaryStateRegistration['__propertyRegistry'];
}

declare interface UWidgetInteractionComponent extends USceneComponent {
    readonly __static_UWidgetInteractionComponent: {
        SetFocus(FocusWidget: UWidget): void;
        SetCustomHitResult(HitResult: FHitResult): void;
        SendKeyChar(Characters: string, bRepeat: boolean): boolean;
        ScrollWheel(ScrollDelta: number): void;
        ReleasePointerKey(Key: FKey): void;
        ReleaseKey(Key: FKey): boolean;
        PressPointerKey(Key: FKey): void;
        PressKey(Key: FKey, bRepeat: boolean): boolean;
        PressAndReleaseKey(Key: FKey): boolean;
        IsOverInteractableWidget(): boolean;
        IsOverHitTestVisibleWidget(): boolean;
        IsOverFocusableWidget(): boolean;
        GetLastHitResult(): FHitResult;
        GetHoveredWidgetComponent(): UWidgetComponent;
        Get2DHitLocation(): FVector2D;
    };
    readonly __properties_UWidgetInteractionComponent: {
        OnHoveredWidgetChanged: FWidgetInteractionComponentOnHoveredWidgetChanged;
        VirtualUserIndex: number;
        PointerIndex: number;
        TraceChannel: ECollisionChannel;
        InteractionDistance: number;
        InteractionSource: EWidgetInteractionSource;
        bEnableHitTesting: boolean;
        bShowDebug: boolean;
        DebugSphereLineThickness: number;
        DebugLineThickness: number;
        DebugColor: FLinearColor;
        CustomHitResult: FHitResult;
        LocalHitLocation: FVector2D;
        LastLocalHitLocation: FVector2D;
        HoveredWidgetComponent: UWidgetComponent;
        WeakHoveredWidgetComponent: TWeakObjectPtr<UWidgetComponent>;
        LastHitResult: FHitResult;
        bIsHoveredWidgetInteractable: boolean;
        bIsHoveredWidgetFocusable: boolean;
        bIsHoveredWidgetHitTestVisible: boolean;
    };
    readonly __staticRegistry: 
        UWidgetInteractionComponent['__static_UWidgetInteractionComponent'] &
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetInteractionComponent['__properties_UWidgetInteractionComponent'] &
        USceneComponent['__propertyRegistry'];
}

declare interface UWidgetLayoutLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UWidgetLayoutLibrary: {
        SlotAsWrapBoxSlot(Widget: UWidget): UWrapBoxSlot;
        SlotAsWidgetSwitcherSlot(Widget: UWidget): UWidgetSwitcherSlot;
        SlotAsVerticalBoxSlot(Widget: UWidget): UVerticalBoxSlot;
        SlotAsUniformGridSlot(Widget: UWidget): UUniformGridSlot;
        SlotAsStackBoxSlot(Widget: UWidget): UStackBoxSlot;
        SlotAsSizeBoxSlot(Widget: UWidget): USizeBoxSlot;
        SlotAsScrollBoxSlot(Widget: UWidget): UScrollBoxSlot;
        SlotAsScaleBoxSlot(Widget: UWidget): UScaleBoxSlot;
        SlotAsSafeBoxSlot(Widget: UWidget): USafeZoneSlot;
        SlotAsOverlaySlot(Widget: UWidget): UOverlaySlot;
        SlotAsHorizontalBoxSlot(Widget: UWidget): UHorizontalBoxSlot;
        SlotAsGridSlot(Widget: UWidget): UGridSlot;
        SlotAsCanvasSlot(Widget: UWidget): UCanvasPanelSlot;
        SlotAsBorderSlot(Widget: UWidget): UBorderSlot;
        RemoveAllWidgets(WorldContextObject: UObject): void;
        ProjectWorldLocationToWidgetPosition(PlayerController: APlayerController, WorldLocation: FVector, ScreenPosition: FVector2D, bPlayerViewportRelative: boolean): boolean;
        GetViewportWidgetGeometry(WorldContextObject: UObject): FGeometry;
        GetViewportSize(WorldContextObject: UObject): FVector2D;
        GetViewportScale(WorldContextObject: UObject): number;
        GetPlayerScreenWidgetGeometry(PlayerController: APlayerController): FGeometry;
        GetMousePositionScaledByDPI(Player: APlayerController, LocationX: number, LocationY: number): boolean;
        GetMousePositionOnViewport(WorldContextObject: UObject): FVector2D;
        GetMousePositionOnPlatform(): FVector2D;
    };
    readonly __staticRegistry: 
        UWidgetLayoutLibrary['__static_UWidgetLayoutLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UWidgetNavigation extends UObject {
    readonly __properties_UWidgetNavigation: {
        Up: FWidgetNavigationData;
        Down: FWidgetNavigationData;
        Left: FWidgetNavigationData;
        Right: FWidgetNavigationData;
        Next: FWidgetNavigationData;
        Previous: FWidgetNavigationData;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetNavigation['__properties_UWidgetNavigation'] &
        UObject['__propertyRegistry'];
}

declare interface UWidgetPressedStateRegistration extends UWidgetBinaryStateRegistration {
    readonly __staticRegistry: 
        UWidgetBinaryStateRegistration['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetBinaryStateRegistration['__propertyRegistry'];
}

declare interface UWidgetSelectedStateRegistration extends UWidgetBinaryStateRegistration {
    readonly __staticRegistry: 
        UWidgetBinaryStateRegistration['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetBinaryStateRegistration['__propertyRegistry'];
}

declare interface UWidgetStateSettings extends UDeveloperSettings {
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UWidgetSwitcher extends UPanelWidget {
    readonly __static_UWidgetSwitcher: {
        SetActiveWidgetIndex(Index: number): void;
        SetActiveWidget(Widget: UWidget): void;
        GetWidgetAtIndex(Index: number): UWidget;
        GetNumWidgets(): number;
        GetActiveWidgetIndex(): number;
        GetActiveWidget(): UWidget;
    };
    readonly __properties_UWidgetSwitcher: {
        ActiveWidgetIndex: number;
    };
    readonly __staticRegistry: 
        UWidgetSwitcher['__static_UWidgetSwitcher'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetSwitcher['__properties_UWidgetSwitcher'] &
        UPanelWidget['__propertyRegistry'];
}

declare interface UWidgetSwitcherSlot extends UPanelSlot {
    readonly __static_UWidgetSwitcherSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UWidgetSwitcherSlot: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UWidgetSwitcherSlot['__static_UWidgetSwitcherSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetSwitcherSlot['__properties_UWidgetSwitcherSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UWidgetTree extends UObject {
    readonly __properties_UWidgetTree: {
        RootWidget: UWidget;
        NamedSlotBindings: TMap<string, UWidget>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidgetTree['__properties_UWidgetTree'] &
        UObject['__propertyRegistry'];
}

declare interface UWindowTitleBarArea extends UContentWidget {
    readonly __static_UWindowTitleBarArea: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UWindowTitleBarArea: {
        bWindowButtonsEnabled: boolean;
        bDoubleClickTogglesFullscreen: boolean;
    };
    readonly __staticRegistry: 
        UWindowTitleBarArea['__static_UWindowTitleBarArea'] &
        UContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWindowTitleBarArea['__properties_UWindowTitleBarArea'] &
        UContentWidget['__propertyRegistry'];
}

declare interface UWindowTitleBarAreaSlot extends UPanelSlot {
    readonly __static_UWindowTitleBarAreaSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    };
    readonly __properties_UWindowTitleBarAreaSlot: {
        Padding: FMargin;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
    };
    readonly __staticRegistry: 
        UWindowTitleBarAreaSlot['__static_UWindowTitleBarAreaSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UWindowTitleBarAreaSlot['__properties_UWindowTitleBarAreaSlot'] &
        UPanelSlot['__propertyRegistry'];
}

declare interface UWrapBox extends UPanelWidget {
    readonly __static_UWrapBox: {
        SetInnerSlotPadding(InPadding: FVector2D): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
        AddChildToWrapBox(Content: UWidget): UWrapBoxSlot;
    };
    readonly __properties_UWrapBox: {
        InnerSlotPadding: FVector2D;
        WrapSize: number;
        bExplicitWrapSize: boolean;
        HorizontalAlignment: EHorizontalAlignment;
        orientation: EOrientation;
    };
    readonly __staticRegistry: 
        UWrapBox['__static_UWrapBox'] &
        UPanelWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWrapBox['__properties_UWrapBox'] &
        UPanelWidget['__propertyRegistry'];
}

declare interface UWrapBoxSlot extends UPanelSlot {
    readonly __static_UWrapBoxSlot: {
        SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
        SetPadding(InPadding: FMargin): void;
        SetNewLine(InForceNewLine: boolean): void;
        SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
        SetFillSpanWhenLessThan(InFillSpanWhenLessThan: number): void;
        SetFillEmptySpace(InbFillEmptySpace: boolean): void;
    };
    readonly __properties_UWrapBoxSlot: {
        Padding: FMargin;
        FillSpanWhenLessThan: number;
        HorizontalAlignment: EHorizontalAlignment;
        VerticalAlignment: EVerticalAlignment;
        bFillEmptySpace: boolean;
        bForceNewLine: boolean;
    };
    readonly __staticRegistry: 
        UWrapBoxSlot['__static_UWrapBoxSlot'] &
        UPanelSlot['__staticRegistry'];
    readonly __propertyRegistry: 
        UWrapBoxSlot['__properties_UWrapBoxSlot'] &
        UPanelSlot['__propertyRegistry'];
}

