declare interface FAnchorData {
    Offsets: FMargin;
    Anchors: FAnchors;
    Alignment: FVector2D;
}
declare const FAnchorData: FAnchorData;

declare interface FAnimationEventBinding {
    Animation: UWidgetAnimation;
    Delegate: FAnimationEventBindingDelegate;
    AnimationEvent: EWidgetAnimationEvent;
    UserTag: FName;
}
declare const FAnimationEventBinding: FAnimationEventBinding;

declare interface FBlueprintWidgetAnimationDelegateBinding {
    Action: EWidgetAnimationEvent;
    AnimationToBind: FName;
    FunctionNameToBind: FName;
    UserTag: FName;
}
declare const FBlueprintWidgetAnimationDelegateBinding: FBlueprintWidgetAnimationDelegateBinding;

declare interface FDelegateRuntimeBinding {
    ObjectName: FString;
    PropertyName: FName;
    FunctionName: FName;
    SourcePath: FDynamicPropertyPath;
    Kind: EBindingKind;
}
declare const FDelegateRuntimeBinding: FDelegateRuntimeBinding;

declare interface FDynamicPropertyPath extends FCachedPropertyPath {

}
declare const FDynamicPropertyPath: FDynamicPropertyPath;

declare interface FEventReply {

}
declare const FEventReply: FEventReply;

declare interface FGameViewportWidgetSlot {
    Anchors: FAnchors;
    Offsets: FMargin;
    Alignment: FVector2D;
    ZOrder: number;
    bAutoRemoveOnWorldRemoved: boolean;
}
declare const FGameViewportWidgetSlot: FGameViewportWidgetSlot;

declare interface FMovieScene2DTransformMask {
    Mask: uint32;
}
declare const FMovieScene2DTransformMask: FMovieScene2DTransformMask;

declare interface FNamedSlotBinding {
    Name: FName;
    Content: UWidget;
}
declare const FNamedSlotBinding: FNamedSlotBinding;

declare interface FPaintContext {

}
declare const FPaintContext: FPaintContext;

declare interface FQueuedWidgetAnimationTransition {
    WidgetAnimation: UWidgetAnimation;
}
declare const FQueuedWidgetAnimationTransition: FQueuedWidgetAnimationTransition;

declare interface FRadialBoxSettings {
    StartingAngle: number;
    bDistributeItemsEvenly: boolean;
    AngleBetweenItems: number;
    SectorCentralAngle: number;
}
declare const FRadialBoxSettings: FRadialBoxSettings;

declare interface FRichImageRow extends FTableRowBase {
    Brush: FSlateBrush;
}
declare const FRichImageRow: FRichImageRow;

declare interface FRichTextStyleRow extends FTableRowBase {
    TextStyle: FTextBlockStyle;
}
declare const FRichTextStyleRow: FRichTextStyleRow;

declare interface FSequenceTickManagerWidgetData {

}
declare const FSequenceTickManagerWidgetData: FSequenceTickManagerWidgetData;

declare interface FShapedTextOptions {
    bOverride_TextShapingMethod: boolean;
    bOverride_TextFlowDirection: boolean;
    TextShapingMethod: ETextShapingMethod;
    TextFlowDirection: ETextFlowDirection;
}
declare const FShapedTextOptions: FShapedTextOptions;

declare interface FSlateChildSize {
    Value: number;
    SizeRule: ESlateSizeRule;
}
declare const FSlateChildSize: FSlateChildSize;

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
declare const FSlateMeshVertex: FSlateMeshVertex;

declare interface FSlatePostBufferUpdateInfo {
    BufferToUpdate: ESlatePostRT;
    PostParamUpdater: USlatePostBufferProcessorUpdater;
}
declare const FSlatePostBufferUpdateInfo: FSlatePostBufferUpdateInfo;

declare interface FUIComponentTarget {
    TargetName: FName;
    Component: UUIComponent;
}
declare const FUIComponentTarget: FUIComponentTarget;

declare interface FUserWidgetPool {
    ActiveWidgets: TArray<UUserWidget>;
    InactiveWidgets: TArray<UUserWidget>;
}
declare const FUserWidgetPool: FUserWidgetPool;

declare interface FWidgetAnimationBinding {
    WidgetName: FName;
    SlotWidgetName: FName;
    AnimationGuid: FGuid;
    bIsRootWidget: boolean;
    DynamicBinding: FMovieSceneDynamicBinding;
}
declare const FWidgetAnimationBinding: FWidgetAnimationBinding;

declare interface FWidgetAnimationHandle {
    WeakUserWidget: TWeakObjectPtr<UUserWidget>;
    StateIndex: number;
    StateSerial: uint32;
}
declare const FWidgetAnimationHandle: FWidgetAnimationHandle;

declare interface FWidgetChild {
    WidgetName: FName;
    WidgetPtr: TWeakObjectPtr<UWidget>;
}
declare const FWidgetChild: FWidgetChild;

declare interface FWidgetComponentInstanceData extends FSceneComponentInstanceData {

}
declare const FWidgetComponentInstanceData: FWidgetComponentInstanceData;

declare interface FWidgetEventField {

}
declare const FWidgetEventField: FWidgetEventField;

declare interface FWidgetNavigationData {
    Rule: EUINavigationRule;
    WidgetToFocus: FName;
    Widget: TWeakObjectPtr<UWidget>;
    CustomDelegate: FWidgetNavigationDataCustomDelegate;
}
declare const FWidgetNavigationData: FWidgetNavigationData;

declare interface FWidgetStateBitfield {

}
declare const FWidgetStateBitfield: FWidgetStateBitfield;

declare interface FWidgetTransform {
    Translation: FVector2D;
    Scale: FVector2D;
    Shear: FVector2D;
    Angle: number;
}
declare const FWidgetTransform: FWidgetTransform;

declare interface INamedSlotInterface extends IInterface {

}
declare const INamedSlotInterface: INamedSlotInterface;

declare interface IUserListEntry extends IInterface {
    BP_OnItemSelectionChanged(bIsSelected: boolean): void;
    BP_OnItemExpansionChanged(bIsExpanded: boolean): void;
    BP_OnEntryReleased(): void;
}
declare const IUserListEntry: IUserListEntry;

declare interface IUserObjectListEntry extends IUserListEntry {
    OnListItemObjectSet(ListItemObject: UObject): void;
}
declare const IUserObjectListEntry: IUserObjectListEntry;

declare interface UAsyncTaskDownloadImage extends UBlueprintAsyncActionBase {
    OnSuccess: FAsyncTaskDownloadImageOnSuccess;
    OnFail: FAsyncTaskDownloadImageOnFail;
    DownloadImage(URL: string | FString): UAsyncTaskDownloadImage;
}
declare const UAsyncTaskDownloadImage: UAsyncTaskDownloadImage;

declare interface UBackgroundBlur extends UContentWidget {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    bApplyAlphaToBlur: boolean;
    BlurStrength: number;
    bOverrideAutoRadiusCalculation: boolean;
    BlurRadius: number;
    CornerRadius: FVector4;
    LowQualityFallbackBrush: FSlateBrush;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetLowQualityFallbackBrush(InBrush: FSlateBrush): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    SetCornerRadius(InCornerRadius: FVector4): void;
    SetBlurStrength(InStrength: number): void;
    SetBlurRadius(InBlurRadius: number): void;
    SetApplyAlphaToBlur(bInApplyAlphaToBlur: boolean): void;
}
declare const UBackgroundBlur: UBackgroundBlur;

declare interface UBackgroundBlurSlot extends UPanelSlot {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UBackgroundBlurSlot: UBackgroundBlurSlot;

declare interface UBoolBinding extends UPropertyBinding {
    GetValue(): boolean;
}
declare const UBoolBinding: UBoolBinding;

declare interface UBorder extends UContentWidget {
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
}
declare const UBorder: UBorder;

declare interface UBorderSlot extends UPanelSlot {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UBorderSlot: UBorderSlot;

declare interface UBrushBinding extends UPropertyBinding {
    GetValue(): FSlateBrush;
}
declare const UBrushBinding: UBrushBinding;

declare interface UButton extends UContentWidget {
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
    SetTouchMethod(InTouchMethod: EButtonTouchMethod): void;
    SetStyle(InStyle: FButtonStyle): void;
    SetPressMethod(InPressMethod: EButtonPressMethod): void;
    SetColorAndOpacity(InColorAndOpacity: FLinearColor): void;
    SetClickMethod(InClickMethod: EButtonClickMethod): void;
    SetBackgroundColor(InBackgroundColor: FLinearColor): void;
    IsPressed(): boolean;
}
declare const UButton: UButton;

declare interface UButtonSlot extends UPanelSlot {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UButtonSlot: UButtonSlot;

declare interface UCanvasPanel extends UPanelWidget {
    AddChildToCanvas(Content: UWidget): UCanvasPanelSlot;
}
declare const UCanvasPanel: UCanvasPanel;

declare interface UCanvasPanelSlot extends UPanelSlot {
    LayoutData: FAnchorData;
    bAutoSize: boolean;
    ZOrder: number;
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
}
declare const UCanvasPanelSlot: UCanvasPanelSlot;

declare interface UCheckBox extends UContentWidget {
    CheckedState: ECheckBoxState;
    CheckedStateDelegate: FCheckBoxCheckedStateDelegate;
    WidgetStyle: FCheckBoxStyle;
    HorizontalAlignment: EHorizontalAlignment;
    ClickMethod: EButtonClickMethod;
    TouchMethod: EButtonTouchMethod;
    PressMethod: EButtonPressMethod;
    IsFocusable: boolean;
    OnCheckStateChanged: FCheckBoxOnCheckStateChanged;
    SetTouchMethod(InTouchMethod: EButtonTouchMethod): void;
    SetPressMethod(InPressMethod: EButtonPressMethod): void;
    SetIsChecked(InIsChecked: boolean): void;
    SetClickMethod(InClickMethod: EButtonClickMethod): void;
    SetCheckedState(InCheckedState: ECheckBoxState): void;
    IsPressed(): boolean;
    IsChecked(): boolean;
    GetCheckedState(): ECheckBoxState;
}
declare const UCheckBox: UCheckBox;

declare interface UCheckedStateBinding extends UPropertyBinding {
    GetValue(): ECheckBoxState;
}
declare const UCheckedStateBinding: UCheckedStateBinding;

declare interface UCircularThrobber extends UWidget {
    NumberOfPieces: number;
    Period: number;
    Radius: number;
    Image: FSlateBrush;
    bEnableRadius: boolean;
    SetRadius(InRadius: number): void;
    SetPeriod(InPeriod: number): void;
    SetNumberOfPieces(InNumberOfPieces: number): void;
}
declare const UCircularThrobber: UCircularThrobber;

declare interface UColorBinding extends UPropertyBinding {
    GetSlateValue(): FSlateColor;
    GetLinearValue(): FLinearColor;
}
declare const UColorBinding: UColorBinding;

declare interface UComboBox extends UWidget {
    ScrollBarStyle: FScrollBarStyle;
    Items: TArray<UObject>;
    OnGenerateWidgetEvent: FComboBoxOnGenerateWidgetEvent;
    bIsFocusable: boolean;
}
declare const UComboBox: UComboBox;

declare interface UComboBoxKey extends UWidget {
    Options: TArray<FName>;
    SelectedOption: FName;
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
    SetSelectedOption(Option: FName): void;
    RemoveOption(Option: FName): boolean;
    OnSelectionChangedEvent__DelegateSignature(SelectedItem: FName, SelectionType: ESelectInfo): void;
    OnOpeningEvent__DelegateSignature(): void;
    IsOpen(): boolean;
    GetSelectedOption(): FName;
    GenerateWidgetEvent__DelegateSignature(Item: FName): UWidget;
    ClearSelection(): void;
    ClearOptions(): void;
    AddOption(Option: FName): void;
}
declare const UComboBoxKey: UComboBoxKey;

declare interface UComboBoxString extends UWidget {
    DefaultOptions: TArray<FString>;
    SelectedOption: FString;
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
    SetSelectedOption(Option: string | FString): void;
    SetSelectedIndex(Index: number): void;
    RemoveOption(Option: string | FString): boolean;
    RefreshOptions(): void;
    OnSelectionChangedEvent__DelegateSignature(SelectedItem: string | FString, SelectionType: ESelectInfo): void;
    OnOpeningEvent__DelegateSignature(): void;
    IsOpen(): boolean;
    GetSelectedOption(): FString;
    GetSelectedIndex(): number;
    GetOptionCount(): number;
    GetOptionAtIndex(Index: number): FString;
    FindOptionIndex(Option: string | FString): number;
    ClearSelection(): void;
    ClearOptions(): void;
    AddOption(Option: string | FString): void;
}
declare const UComboBoxString: UComboBoxString;

declare interface UContentWidget extends UPanelWidget {
    SetContent(Content: UWidget): UPanelSlot;
    GetContentSlot(): UPanelSlot;
    GetContent(): UWidget;
}
declare const UContentWidget: UContentWidget;

declare interface UDefault__WidgetBlueprintGeneratedClass {

}
declare const UDefault__WidgetBlueprintGeneratedClass: UDefault__WidgetBlueprintGeneratedClass;

declare interface UDragDropOperation extends UObject {
    Tag: FString;
    Payload: UObject;
    DefaultDragVisual: UWidget;
    Pivot: EDragPivot;
    Offset: FVector2D;
    OnDrop: FDragDropOperationOnDrop;
    OnDragCancelled: FDragDropOperationOnDragCancelled;
    OnDragged: FDragDropOperationOnDragged;
    Drop(PointerEvent: FPointerEvent): void;
    Dragged(PointerEvent: FPointerEvent): void;
    DragCancelled(PointerEvent: FPointerEvent): void;
}
declare const UDragDropOperation: UDragDropOperation;

declare interface UDynamicEntryBox extends UDynamicEntryBoxBase {
    EntryWidgetClass: TSubclassOf<UUserWidget>;
    Reset(bDeleteWidgets: boolean): void;
    RemoveEntry(EntryWidget: UUserWidget): void;
    BP_CreateEntryOfClass(EntryClass: TSubclassOf<UUserWidget>): UUserWidget;
    BP_CreateEntry(): UUserWidget;
}
declare const UDynamicEntryBox: UDynamicEntryBox;

declare interface UDynamicEntryBoxBase extends UWidget {
    EntrySpacing: FVector2D;
    SpacingPattern: TArray<FVector2D>;
    EntryBoxType: EDynamicBoxType;
    EntrySizeRule: FSlateChildSize;
    EntryHorizontalAlignment: EHorizontalAlignment;
    EntryVerticalAlignment: EVerticalAlignment;
    MaxElementSize: number;
    RadialBoxSettings: FRadialBoxSettings;
    EntryWidgetPool: FUserWidgetPool;
    SetRadialSettings(InSettings: FRadialBoxSettings): void;
    SetEntrySpacing(InEntrySpacing: FVector2D): void;
    GetNumEntries(): number;
    GetAllEntries(): TArray<UUserWidget>;
}
declare const UDynamicEntryBoxBase: UDynamicEntryBoxBase;

declare interface UEditableText extends UWidget {
    Text: FText;
    TextDelegate: FEditableTextTextDelegate;
    HintText: FText;
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
    SetTextOverflowPolicy(InOverflowPolicy: ETextOverflowPolicy): void;
    SetText(InText: FText): void;
    SetMinimumDesiredWidth(InMinDesiredWidth: number): void;
    SetJustification(InJustification: ETextJustify): void;
    SetIsReadOnly(InbIsReadyOnly: boolean): void;
    SetIsPassword(InbIsPassword: boolean): void;
    SetHintText(InHintText: FText): void;
    SetFontOutlineMaterial(InMaterial: UMaterialInterface): void;
    SetFontMaterial(InMaterial: UMaterialInterface): void;
    SetFont(InFontInfo: FSlateFontInfo): void;
    OnEditableTextCommittedEvent__DelegateSignature(Text: FText, CommitMethod: ETextCommit): void;
    OnEditableTextChangedEvent__DelegateSignature(Text: FText): void;
    GetText(): FText;
    GetJustification(): ETextJustify;
    GetHintText(): FText;
    GetFont(): FSlateFontInfo;
}
declare const UEditableText: UEditableText;

declare interface UEditableTextBox extends UWidget {
    Text: FText;
    TextDelegate: FEditableTextBoxTextDelegate;
    WidgetStyle: FEditableTextBoxStyle;
    HintText: FText;
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
    SetTextOverflowPolicy(InOverflowPolicy: ETextOverflowPolicy): void;
    SetText(InText: FText): void;
    SetJustification(InJustification: ETextJustify): void;
    SetIsReadOnly(bReadOnly: boolean): void;
    SetIsPassword(bIsPassword: boolean): void;
    SetHintText(InText: FText): void;
    SetForegroundColor(Color: FLinearColor): void;
    SetError(InError: FText): void;
    OnEditableTextBoxCommittedEvent__DelegateSignature(Text: FText, CommitMethod: ETextCommit): void;
    OnEditableTextBoxChangedEvent__DelegateSignature(Text: FText): void;
    HasError(): boolean;
    GetText(): FText;
    ClearError(): void;
}
declare const UEditableTextBox: UEditableTextBox;

declare interface UExpandableArea extends UWidget {
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
    SetIsExpanded_Animated(IsExpanded: boolean): void;
    SetIsExpanded(IsExpanded: boolean): void;
    GetIsExpanded(): boolean;
}
declare const UExpandableArea: UExpandableArea;

declare interface UFloatBinding extends UPropertyBinding {
    GetValue(): number;
}
declare const UFloatBinding: UFloatBinding;

declare interface UGameViewportSubsystem extends UEngineSubsystem {
    SetWidgetSlotPosition(Slot: FGameViewportWidgetSlot, Widget: UWidget, position: FVector2D, bRemoveDPIScale: boolean): FGameViewportWidgetSlot;
    SetWidgetSlotDesiredSize(Slot: FGameViewportWidgetSlot, Size: FVector2D): FGameViewportWidgetSlot;
    SetWidgetSlot(Widget: UWidget, Slot: FGameViewportWidgetSlot): void;
    RemoveWidget(Widget: UWidget): void;
    IsWidgetAdded(Widget: UWidget): boolean;
    GetWidgetSlot(Widget: UWidget): FGameViewportWidgetSlot;
    AddWidgetForPlayer(Widget: UWidget, Player: ULocalPlayer, Slot: FGameViewportWidgetSlot): boolean;
    AddWidget(Widget: UWidget, Slot: FGameViewportWidgetSlot): boolean;
}
declare const UGameViewportSubsystem: UGameViewportSubsystem;

declare interface UGridPanel extends UPanelWidget {
    ColumnFill: TArray<number>;
    RowFill: TArray<number>;
    SetRowFill(RowIndex: number, Coefficient: number): void;
    SetColumnFill(ColumnIndex: number, Coefficient: number): void;
    AddChildToGrid(Content: UWidget, InRow: number, InColumn: number): UGridSlot;
}
declare const UGridPanel: UGridPanel;

declare interface UGridSlot extends UPanelSlot {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    Row: number;
    RowSpan: number;
    Column: number;
    ColumnSpan: number;
    Layer: number;
    Nudge: FVector2D;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetRowSpan(InRowSpan: number): void;
    SetRow(InRow: number): void;
    SetPadding(InPadding: FMargin): void;
    SetNudge(InNudge: FVector2D): void;
    SetLayer(InLayer: number): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    SetColumnSpan(InColumnSpan: number): void;
    SetColumn(InColumn: number): void;
}
declare const UGridSlot: UGridSlot;

declare interface UHorizontalBox extends UPanelWidget {
    AddChildToHorizontalBox(Content: UWidget): UHorizontalBoxSlot;
}
declare const UHorizontalBox: UHorizontalBox;

declare interface UHorizontalBoxSlot extends UPanelSlot {
    Size: FSlateChildSize;
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetSize(InSize: FSlateChildSize): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UHorizontalBoxSlot: UHorizontalBoxSlot;

declare interface UImage extends UWidget {
    Brush: FSlateBrush;
    BrushDelegate: FImageBrushDelegate;
    ColorAndOpacity: FLinearColor;
    ColorAndOpacityDelegate: FImageColorAndOpacityDelegate;
    bFlipForRightToLeftFlowDirection: boolean;
    OnMouseButtonDownEvent: FImageOnMouseButtonDownEvent;
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
}
declare const UImage: UImage;

declare interface UInputKeySelector extends UWidget {
    WidgetStyle: FButtonStyle;
    TextStyle: FTextBlockStyle;
    SelectedKey: FInputChord;
    Margin: FMargin;
    KeySelectionText: FText;
    NoKeySpecifiedText: FText;
    bAllowModifierKeys: boolean;
    bAllowGamepadKeys: boolean;
    EscapeKeys: TArray<FKey>;
    OnKeySelected: FInputKeySelectorOnKeySelected;
    OnIsSelectingKeyChanged: FInputKeySelectorOnIsSelectingKeyChanged;
    SetTextBlockVisibility(InVisibility: ESlateVisibility): void;
    SetSelectedKey(InSelectedKey: FInputChord): void;
    SetNoKeySpecifiedText(InNoKeySpecifiedText: FText): void;
    SetKeySelectionText(InKeySelectionText: FText): void;
    SetEscapeKeys(InKeys: TArray<FKey>): void;
    SetAllowModifierKeys(bInAllowModifierKeys: boolean): void;
    SetAllowGamepadKeys(bInAllowGamepadKeys: boolean): void;
    OnKeySelected__DelegateSignature(SelectedKey: FInputChord): void;
    OnIsSelectingKeyChanged__DelegateSignature(): void;
    GetIsSelectingKey(): boolean;
}
declare const UInputKeySelector: UInputKeySelector;

declare interface UInt32Binding extends UPropertyBinding {
    GetValue(): number;
}
declare const UInt32Binding: UInt32Binding;

declare interface UInvalidationBox extends UContentWidget {
    bCanCache: boolean;
    SetCanCache(CanCache: boolean): void;
    InvalidateCache(): void;
    GetCanCache(): boolean;
}
declare const UInvalidationBox: UInvalidationBox;

declare interface UListView extends UListViewBase {
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
    ListItems: TArray<UObject>;
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
    GetListItems(): TArray<UObject>;
    GetItemAt(Index: number): UObject;
    GetIndexForItem(Item: UObject): number;
    GetHorizontalEntrySpacing(): number;
    ClearListItems(): void;
    BP_SetSelectedItem(Item: UObject): void;
    BP_SetListItems(InListItems: TArray<UObject>): void;
    BP_SetItemSelection(Item: UObject, bSelected: boolean): void;
    BP_ScrollItemIntoView(Item: UObject): void;
    BP_NavigateToItem(Item: UObject): void;
    BP_IsItemVisible(Item: UObject): boolean;
    BP_GetSelectedItems(Items: TArray<UObject>): boolean;
    BP_GetSelectedItem(): UObject;
    BP_GetNumItemsSelected(): number;
    BP_ClearSelection(): void;
    BP_CancelScrollIntoView(): void;
    AddItem(Item: UObject): void;
}
declare const UListView: UListView;

declare interface UListViewBase extends UWidget {
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
    GetDisplayedEntryWidgets(): TArray<UUserWidget>;
    EndInertialScrolling(): void;
}
declare const UListViewBase: UListViewBase;

declare interface UListViewDesignerPreviewItem extends UObject {

}
declare const UListViewDesignerPreviewItem: UListViewDesignerPreviewItem;

declare interface UMenuAnchor extends UContentWidget {
    MenuClass: TSubclassOf<UUserWidget>;
    OnGetMenuContentEvent: FMenuAnchorOnGetMenuContentEvent;
    OnGetUserMenuContentEvent: FMenuAnchorOnGetUserMenuContentEvent;
    Placement: EMenuPlacement;
    bFitInWindow: boolean;
    ShouldDeferPaintingAfterWindowContent: boolean;
    UseApplicationMenuStack: boolean;
    ShowMenuBackground: boolean;
    OnMenuOpenChanged: FMenuAnchorOnMenuOpenChanged;
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
}
declare const UMenuAnchor: UMenuAnchor;

declare interface UMouseCursorBinding extends UPropertyBinding {
    GetValue(): EMouseCursor;
}
declare const UMouseCursorBinding: UMouseCursorBinding;

declare interface UMovieScene2DTransformPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieScene2DTransformPropertySystem: UMovieScene2DTransformPropertySystem;

declare interface UMovieScene2DTransformSection extends UMovieSceneSection {
    TransformMask: FMovieScene2DTransformMask;
    Translation: FMovieSceneFloatChannel;
    Rotation: FMovieSceneFloatChannel;
    Scale: FMovieSceneFloatChannel;
    Shear: FMovieSceneFloatChannel;
}
declare const UMovieScene2DTransformSection: UMovieScene2DTransformSection;

declare interface UMovieScene2DTransformTrack extends UMovieScenePropertyTrack {

}
declare const UMovieScene2DTransformTrack: UMovieScene2DTransformTrack;

declare interface UMovieSceneMarginPropertySystem extends UMovieScenePropertySystem {

}
declare const UMovieSceneMarginPropertySystem: UMovieSceneMarginPropertySystem;

declare interface UMovieSceneMarginSection extends UMovieSceneSection {
    TopCurve: FMovieSceneFloatChannel;
    LeftCurve: FMovieSceneFloatChannel;
    RightCurve: FMovieSceneFloatChannel;
    BottomCurve: FMovieSceneFloatChannel;
}
declare const UMovieSceneMarginSection: UMovieSceneMarginSection;

declare interface UMovieSceneMarginTrack extends UMovieScenePropertyTrack {

}
declare const UMovieSceneMarginTrack: UMovieSceneMarginTrack;

declare interface UMovieSceneWidgetMaterialSystem extends UMovieSceneEntitySystem {

}
declare const UMovieSceneWidgetMaterialSystem: UMovieSceneWidgetMaterialSystem;

declare interface UMovieSceneWidgetMaterialTrack extends UMovieSceneMaterialTrack {
    BrushPropertyNamePath: TArray<FName>;
    TrackName: FName;
}
declare const UMovieSceneWidgetMaterialTrack: UMovieSceneWidgetMaterialTrack;

declare interface UMultiLineEditableText extends UTextLayoutWidget {
    Text: FText;
    HintText: FText;
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
    SetWidgetStyle(InWidgetStyle: FTextBlockStyle): void;
    SetText(InText: FText): void;
    SetIsReadOnly(bReadOnly: boolean): void;
    SetHintText(InHintText: FText): void;
    SetFontOutlineMaterial(InMaterial: UMaterialInterface): void;
    SetFontMaterial(InMaterial: UMaterialInterface): void;
    SetFont(InFontInfo: FSlateFontInfo): void;
    OnMultiLineEditableTextCommittedEvent__DelegateSignature(Text: FText, CommitMethod: ETextCommit): void;
    OnMultiLineEditableTextChangedEvent__DelegateSignature(Text: FText): void;
    GetText(): FText;
    GetHintText(): FText;
    GetFont(): FSlateFontInfo;
}
declare const UMultiLineEditableText: UMultiLineEditableText;

declare interface UMultiLineEditableTextBox extends UTextLayoutWidget {
    Text: FText;
    HintText: FText;
    HintTextDelegate: FMultiLineEditableTextBoxHintTextDelegate;
    WidgetStyle: FEditableTextBoxStyle;
    bIsReadOnly: boolean;
    AllowContextMenu: boolean;
    VirtualKeyboardOptions: FVirtualKeyboardOptions;
    VirtualKeyboardDismissAction: EVirtualKeyboardDismissAction;
    OnTextChanged: FMultiLineEditableTextBoxOnTextChanged;
    OnTextCommitted: FMultiLineEditableTextBoxOnTextCommitted;
    SetTextStyle(InTextStyle: FTextBlockStyle): void;
    SetText(InText: FText): void;
    SetIsReadOnly(bReadOnly: boolean): void;
    SetHintText(InHintText: FText): void;
    SetForegroundColor(Color: FLinearColor): void;
    SetError(InError: FText): void;
    OnMultiLineEditableTextBoxCommittedEvent__DelegateSignature(Text: FText, CommitMethod: ETextCommit): void;
    OnMultiLineEditableTextBoxChangedEvent__DelegateSignature(Text: FText): void;
    GetText(): FText;
    GetHintText(): FText;
}
declare const UMultiLineEditableTextBox: UMultiLineEditableTextBox;

declare interface UNamedSlot extends UContentWidget {

}
declare const UNamedSlot: UNamedSlot;

declare interface UNativeWidgetHost extends UWidget {

}
declare const UNativeWidgetHost: UNativeWidgetHost;

declare interface UOverlay extends UPanelWidget {
    ReplaceOverlayChildAt(Index: number, Content: UWidget): boolean;
    AddChildToOverlay(Content: UWidget): UOverlaySlot;
}
declare const UOverlay: UOverlay;

declare interface UOverlaySlot extends UPanelSlot {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UOverlaySlot: UOverlaySlot;

declare interface UPanelSlot extends UVisual {
    Parent: UPanelWidget;
    Content: UWidget;
    GetContent(): UWidget;
}
declare const UPanelSlot: UPanelSlot;

declare interface UPanelWidget extends UWidget {
    Slots: TArray<UPanelSlot>;
    RemoveChildAt(Index: number): boolean;
    RemoveChild(Content: UWidget): boolean;
    HasChild(Content: UWidget): boolean;
    HasAnyChildren(): boolean;
    GetChildrenCount(): number;
    GetChildIndex(Content: UWidget): number;
    GetChildAt(Index: number): UWidget;
    GetAllChildren(): TArray<UWidget>;
    ClearChildren(): void;
    AddChild(Content: UWidget): UPanelSlot;
}
declare const UPanelWidget: UPanelWidget;

declare interface UPostBufferBlurUpdater extends USlatePostBufferProcessorUpdater {
    GaussianBlurStrength: number;
}
declare const UPostBufferBlurUpdater: UPostBufferBlurUpdater;

declare interface UPostBufferUpdate extends UWidget {
    bUpdateOnlyPaintArea: boolean;
    bPerformDefaultPostBufferUpdate: boolean;
    BuffersToUpdate: TArray<ESlatePostRT>;
    UpdateBufferInfos: TArray<FSlatePostBufferUpdateInfo>;
}
declare const UPostBufferUpdate: UPostBufferUpdate;

declare interface UProgressBar extends UWidget {
    WidgetStyle: FProgressBarStyle;
    Percent: number;
    BarFillType: EProgressBarFillType;
    BarFillStyle: EProgressBarFillStyle;
    bIsMarquee: boolean;
    BorderPadding: FVector2D;
    PercentDelegate: FProgressBarPercentDelegate;
    FillColorAndOpacity: FLinearColor;
    FillColorAndOpacityDelegate: FProgressBarFillColorAndOpacityDelegate;
    SetPercent(InPercent: number): void;
    SetIsMarquee(InbIsMarquee: boolean): void;
    SetFillColorAndOpacity(InColor: FLinearColor): void;
}
declare const UProgressBar: UProgressBar;

declare interface UPropertyBinding extends UObject {
    sourceObject: TWeakObjectPtr<UObject>;
    SourcePath: FDynamicPropertyPath;
    DestinationProperty: FName;
}
declare const UPropertyBinding: UPropertyBinding;

declare interface URetainerBox extends UContentWidget {
    bRetainRender: boolean;
    RenderOnInvalidation: boolean;
    RenderOnPhase: boolean;
    Phase: number;
    PhaseCount: number;
    EffectMaterial: UMaterialInterface;
    TextureParameter: FName;
    SetTextureParameter(TextureParameter: FName): void;
    SetRetainRendering(bInRetainRendering: boolean): void;
    SetRenderingPhase(RenderPhase: number, TotalPhases: number): void;
    SetEffectMaterial(EffectMaterial: UMaterialInterface): void;
    RequestRender(): void;
    GetEffectMaterial(): UMaterialInstanceDynamic;
}
declare const URetainerBox: URetainerBox;

declare interface URichTextBlock extends UTextLayoutWidget {
    Text: FText;
    TextStyleSet: UDataTable;
    DecoratorClasses: TArray<TSubclassOf<URichTextBlockDecorator>>;
    DefaultTextStyleOverride: FTextBlockStyle;
    MinDesiredWidth: number;
    bOverrideDefaultStyle: boolean;
    TextTransformPolicy: ETextTransformPolicy;
    TextOverflowPolicy: ETextOverflowPolicy;
    DefaultTextStyle: FTextBlockStyle;
    InstanceDecorators: TArray<URichTextBlockDecorator>;
    SetTextTransformPolicy(InTransformPolicy: ETextTransformPolicy): void;
    SetTextStyleSet(NewTextStyleSet: UDataTable): void;
    SetTextOverflowPolicy(InOverflowPolicy: ETextOverflowPolicy): void;
    SetText(InText: FText): void;
    SetMinDesiredWidth(InMinDesiredWidth: number): void;
    SetDefaultTextStyle(InDefaultTextStyle: FTextBlockStyle): void;
    SetDefaultStrikeBrush(InStrikeBrush: FSlateBrush): void;
    SetDefaultShadowOffset(InShadowOffset: FVector2D): void;
    SetDefaultShadowColorAndOpacity(InShadowColorAndOpacity: FLinearColor): void;
    SetDefaultMaterial(InMaterial: UMaterialInterface): void;
    SetDefaultFont(InFontInfo: FSlateFontInfo): void;
    SetDefaultColorAndOpacity(InColorAndOpacity: FSlateColor): void;
    SetDecorators(InDecoratorClasses: TArray<TSubclassOf<URichTextBlockDecorator>>): void;
    SetAutoWrapText(InAutoTextWrap: boolean): void;
    RefreshTextLayout(): void;
    GetTextStyleSet(): UDataTable;
    GetText(): FText;
    GetDefaultDynamicMaterial(): UMaterialInstanceDynamic;
    GetDecoratorByClass(DecoratorClass: TSubclassOf<URichTextBlockDecorator>): URichTextBlockDecorator;
    ClearAllDefaultStyleOverrides(): void;
}
declare const URichTextBlock: URichTextBlock;

declare interface URichTextBlockDecorator extends UObject {

}
declare const URichTextBlockDecorator: URichTextBlockDecorator;

declare interface URichTextBlockImageDecorator extends URichTextBlockDecorator {
    ImageSet: UDataTable;
}
declare const URichTextBlockImageDecorator: URichTextBlockImageDecorator;

declare interface USafeZone extends UContentWidget {
    PadLeft: boolean;
    PadRight: boolean;
    PadTop: boolean;
    PadBottom: boolean;
    SetSidesToPad(InPadLeft: boolean, InPadRight: boolean, InPadTop: boolean, InPadBottom: boolean): void;
}
declare const USafeZone: USafeZone;

declare interface USafeZoneSlot extends UPanelSlot {
    bIsTitleSafe: boolean;
    SafeAreaScale: FMargin;
    HAlign: EHorizontalAlignment;
    VAlign: EVerticalAlignment;
    Padding: FMargin;
}
declare const USafeZoneSlot: USafeZoneSlot;

declare interface UScaleBox extends UContentWidget {
    Stretch: EStretch;
    StretchDirection: EStretchDirection;
    UserSpecifiedScale: number;
    IgnoreInheritedScale: boolean;
    SetUserSpecifiedScale(InUserSpecifiedScale: number): void;
    SetStretchDirection(InStretchDirection: EStretchDirection): void;
    SetStretch(InStretch: EStretch): void;
    SetIgnoreInheritedScale(bInIgnoreInheritedScale: boolean): void;
}
declare const UScaleBox: UScaleBox;

declare interface UScaleBoxSlot extends UPanelSlot {
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UScaleBoxSlot: UScaleBoxSlot;

declare interface UScrollBar extends UWidget {
    WidgetStyle: FScrollBarStyle;
    bAlwaysShowScrollbar: boolean;
    bAlwaysShowScrollbarTrack: boolean;
    orientation: EOrientation;
    Thickness: FVector2D;
    Padding: FMargin;
    SetState(InOffsetFraction: number, InThumbSizeFraction: number): void;
}
declare const UScrollBar: UScrollBar;

declare interface UScrollBox extends UPanelWidget {
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
}
declare const UScrollBox: UScrollBox;

declare interface UScrollBoxSlot extends UPanelSlot {
    Size: FSlateChildSize;
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UScrollBoxSlot: UScrollBoxSlot;

declare interface USizeBox extends UContentWidget {
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
}
declare const USizeBox: USizeBox;

declare interface USizeBoxSlot extends UPanelSlot {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const USizeBoxSlot: USizeBoxSlot;

declare interface USlateAccessibleWidgetData extends UObject {
    bCanChildrenBeAccessible: boolean;
    AccessibleBehavior: ESlateAccessibleBehavior;
    AccessibleSummaryBehavior: ESlateAccessibleBehavior;
    AccessibleText: FText;
    AccessibleTextDelegate: FSlateAccessibleWidgetDataAccessibleTextDelegate;
    AccessibleSummaryText: FText;
    AccessibleSummaryTextDelegate: FSlateAccessibleWidgetDataAccessibleSummaryTextDelegate;
    GetText__DelegateSignature(): FText;
}
declare const USlateAccessibleWidgetData: USlateAccessibleWidgetData;

declare interface USlateBlueprintLibrary extends UBlueprintFunctionLibrary {
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
}
declare const USlateBlueprintLibrary: USlateBlueprintLibrary;

declare interface USlatePostBufferProcessorUpdater extends UObject {
    bSkipBufferUpdate: boolean;
}
declare const USlatePostBufferProcessorUpdater: USlatePostBufferProcessorUpdater;

declare interface USlateVectorArtData extends UObject {
    VertexData: TArray<FSlateMeshVertex>;
    IndexData: TArray<uint32>;
    Material: UMaterialInterface;
    ExtentMin: FVector2D;
    ExtentMax: FVector2D;
}
declare const USlateVectorArtData: USlateVectorArtData;

declare interface USlider extends UWidget {
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
}
declare const USlider: USlider;

declare interface USpacer extends UWidget {
    Size: FVector2D;
    SetSize(InSize: FVector2D): void;
}
declare const USpacer: USpacer;

declare interface USpinBox extends UWidget {
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
}
declare const USpinBox: USpinBox;

declare interface UStackBox extends UPanelWidget {
    orientation: EOrientation;
    ReplaceStackBoxChildAt(Index: number, Content: UWidget): boolean;
    AddChildToStackBox(Content: UWidget): UStackBoxSlot;
}
declare const UStackBox: UStackBox;

declare interface UStackBoxSlot extends UPanelSlot {
    Padding: FMargin;
    Size: FSlateChildSize;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
}
declare const UStackBoxSlot: UStackBoxSlot;

declare interface UTextBinding extends UPropertyBinding {
    GetTextValue(): FText;
    GetStringValue(): FString;
}
declare const UTextBinding: UTextBinding;

declare interface UTextBlock extends UTextLayoutWidget {
    Text: FText;
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
    SetTextTransformPolicy(InTransformPolicy: ETextTransformPolicy): void;
    SetTextOverflowPolicy(InOverflowPolicy: ETextOverflowPolicy): void;
    SetText(InText: FText): void;
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
    GetText(): FText;
    GetDynamicOutlineMaterial(): UMaterialInstanceDynamic;
    GetDynamicFontMaterial(): UMaterialInstanceDynamic;
}
declare const UTextBlock: UTextBlock;

declare interface UTextLayoutWidget extends UWidget {
    ShapedTextOptions: FShapedTextOptions;
    Justification: ETextJustify;
    WrappingPolicy: ETextWrappingPolicy;
    AutoWrapText: boolean;
    ApplyLineHeightToBottomLine: boolean;
    WrapTextAt: number;
    Margin: FMargin;
    LineHeightPercentage: number;
    SetJustification(InJustification: ETextJustify): void;
}
declare const UTextLayoutWidget: UTextLayoutWidget;

declare interface UThrobber extends UWidget {
    NumberOfPieces: number;
    bAnimateHorizontally: boolean;
    bAnimateVertically: boolean;
    bAnimateOpacity: boolean;
    Image: FSlateBrush;
    SetNumberOfPieces(InNumberOfPieces: number): void;
    SetAnimateVertically(bInAnimateVertically: boolean): void;
    SetAnimateOpacity(bInAnimateOpacity: boolean): void;
    SetAnimateHorizontally(bInAnimateHorizontally: boolean): void;
}
declare const UThrobber: UThrobber;

declare interface UTileView extends UListView {
    EntryHeight: number;
    EntryWidth: number;
    TileAlignment: EListItemAlignment;
    bWrapHorizontalNavigation: boolean;
    ScrollbarDisabledVisibility: ESlateVisibility;
    bEntrySizeIncludesEntrySpacing: boolean;
    SetEntryWidth(NewWidth: number): void;
    SetEntryHeight(NewHeight: number): void;
    IsAligned(): boolean;
    GetEntryWidth(): number;
    GetEntryHeight(): number;
}
declare const UTileView: UTileView;

declare interface UTreeView extends UListView {
    BP_OnGetItemChildren: FTreeViewBP_OnGetItemChildren;
    BP_OnItemExpansionChanged: FTreeViewBP_OnItemExpansionChanged;
    SetItemExpansion(Item: UObject, bExpandItem: boolean): void;
    ExpandAll(): void;
    CollapseAll(): void;
}
declare const UTreeView: UTreeView;

declare interface UUIComponent extends UObject {
    Owner: TWeakObjectPtr<UWidget>;
}
declare const UUIComponent: UUIComponent;

declare interface UUIComponentContainer extends UObject {
    Components: TArray<FUIComponentTarget>;
}
declare const UUIComponentContainer: UUIComponentContainer;

declare interface UUIComponentUserWidgetExtension extends UUserWidgetExtension {
    ComponentContainer: UUIComponentContainer;
}
declare const UUIComponentUserWidgetExtension: UUIComponentUserWidgetExtension;

declare interface UUIComponentWidgetBlueprintGeneratedClassExtension extends UWidgetBlueprintGeneratedClassExtension {
    ComponentContainer: UUIComponentContainer;
}
declare const UUIComponentWidgetBlueprintGeneratedClassExtension: UUIComponentWidgetBlueprintGeneratedClassExtension;

declare interface UUMGSequencePlayer extends UObject {
    SetUserTag(InUserTag: FName): void;
    GetUserTag(): FName;
}
declare const UUMGSequencePlayer: UUMGSequencePlayer;

declare interface UUMGSequenceTickManager extends UObject {
    WeakUserWidgetData: Record<string | number | symbol, FSequenceTickManagerWidgetData>;
    Linker: UMovieSceneEntitySystemLinker;
}
declare const UUMGSequenceTickManager: UUMGSequenceTickManager;

declare interface UUniformGridPanel extends UPanelWidget {
    SlotPadding: FMargin;
    MinDesiredSlotWidth: number;
    MinDesiredSlotHeight: number;
    SetSlotPadding(InSlotPadding: FMargin): void;
    SetMinDesiredSlotWidth(InMinDesiredSlotWidth: number): void;
    SetMinDesiredSlotHeight(InMinDesiredSlotHeight: number): void;
    AddChildToUniformGrid(Content: UWidget, InRow: number, InColumn: number): UUniformGridSlot;
}
declare const UUniformGridPanel: UUniformGridPanel;

declare interface UUniformGridSlot extends UPanelSlot {
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    Row: number;
    Column: number;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetRow(InRow: number): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    SetColumn(InColumn: number): void;
}
declare const UUniformGridSlot: UUniformGridSlot;

declare interface UUserListEntryLibrary extends UBlueprintFunctionLibrary {
    IsListItemSelected(UserListEntry: TScriptInterface<IUserListEntry>): boolean;
    IsListItemExpanded(UserListEntry: TScriptInterface<IUserListEntry>): boolean;
    GetOwningListView(UserListEntry: TScriptInterface<IUserListEntry>): UListViewBase;
}
declare const UUserListEntryLibrary: UUserListEntryLibrary;

declare interface UUserObjectListEntryLibrary extends UBlueprintFunctionLibrary {
    GetListItemObject(UserObjectListEntry: TScriptInterface<IUserObjectListEntry>): UObject;
}
declare const UUserObjectListEntryLibrary: UUserObjectListEntryLibrary;

declare interface UUserWidget extends UWidget {
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
    QueuedWidgetAnimationTransitions: TArray<FQueuedWidgetAnimationTransition>;
    ActiveSequencePlayers: TArray<UUMGSequencePlayer>;
    AnimationTickManager: UUMGSequenceTickManager;
    StoppedSequencePlayers: TArray<UUMGSequencePlayer>;
    NamedSlotBindings: TArray<FNamedSlotBinding>;
    Extensions: TArray<UUserWidgetExtension>;
    WidgetTree: UWidgetTree;
    bHasScriptImplementedTick: boolean;
    bHasScriptImplementedPaint: boolean;
    TickFrequency: EWidgetTickFrequency;
    DesiredFocusWidget: FWidgetChild;
    InputComponent: UInputComponent;
    AnimationCallbacks: TArray<FAnimationEventBinding>;
    UnregisterInputComponent(): void;
    UnbindFromAnimationStarted(Animation: UWidgetAnimation, Delegate: FUnbindFromAnimationStartedDelegate): void;
    UnbindFromAnimationFinished(Animation: UWidgetAnimation, Delegate: FUnbindFromAnimationFinishedDelegate): void;
    UnbindAllFromAnimationStarted(Animation: UWidgetAnimation): void;
    UnbindAllFromAnimationFinished(Animation: UWidgetAnimation): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    StopListeningForInputAction(ActionName: FName, EventType: EInputEvent): void;
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
    ListenForInputAction(ActionName: FName, EventType: EInputEvent, bConsume: boolean, Callback: FListenForInputActionCallback): void;
    IsPlayingAnimation(): boolean;
    IsListeningForInputAction(ActionName: FName): boolean;
    IsInteractable(): boolean;
    IsAnyAnimationPlaying(): boolean;
    IsAnimationPlayingForward(InAnimation: UWidgetAnimation): boolean;
    IsAnimationPlaying(InAnimation: UWidgetAnimation): boolean;
    GetOwningPlayerPawn(): APawn;
    GetOwningPlayerCameraManager(): APlayerCameraManager;
    GetIsVisible(): boolean;
    GetExtensions(ExtensionType: TSubclassOf<UUserWidgetExtension>): TArray<UUserWidgetExtension>;
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
    BindToAnimationEvent(Animation: UWidgetAnimation, Delegate: FBindToAnimationEventDelegate, AnimationEvent: EWidgetAnimationEvent, UserTag: FName): void;
    AddToViewport(ZOrder: number): void;
    AddToPlayerScreen(ZOrder: number): boolean;
    AddExtension(InExtensionType: TSubclassOf<UUserWidgetExtension>): UUserWidgetExtension;
}
declare const UUserWidget: UUserWidget;

declare interface UUserWidgetBlueprint extends UBlueprint {

}
declare const UUserWidgetBlueprint: UUserWidgetBlueprint;

declare interface UUserWidgetExtension extends UObject {

}
declare const UUserWidgetExtension: UUserWidgetExtension;

declare interface UUserWidgetFunctionLibrary extends UBlueprintFunctionLibrary {
    Conv_UMGSequencePlayer(WidgetAnimationHandle: FWidgetAnimationHandle): UUMGSequencePlayer;
}
declare const UUserWidgetFunctionLibrary: UUserWidgetFunctionLibrary;

declare interface UVerticalBox extends UPanelWidget {
    AddChildToVerticalBox(Content: UWidget): UVerticalBoxSlot;
}
declare const UVerticalBox: UVerticalBox;

declare interface UVerticalBoxSlot extends UPanelSlot {
    Size: FSlateChildSize;
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetSize(InSize: FSlateChildSize): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UVerticalBoxSlot: UVerticalBoxSlot;

declare interface UViewport extends UContentWidget {
    BackgroundColor: FLinearColor;
    Spawn(ActorClass: TSubclassOf<AActor>): AActor;
    SetViewRotation(Rotation: FRotator): void;
    SetViewLocation(Location: FVector): void;
    SetSkyIntensity(LightIntensity: number): void;
    SetShowFlag(InShowFlagName: string | FString, InValue: boolean): void;
    SetLightIntensity(LightIntensity: number): void;
    SetEnableAdvancedFeatures(InEnableAdvancedFeatures: boolean): void;
    GetViewRotation(): FRotator;
    GetViewProjectionMatrix(): FMatrix;
    GetViewportWorld(): UWorld;
    GetViewLocation(): FVector;
}
declare const UViewport: UViewport;

declare interface UVisibilityBinding extends UPropertyBinding {
    GetValue(): ESlateVisibility;
}
declare const UVisibilityBinding: UVisibilityBinding;

declare interface UVisual extends UObject {

}
declare const UVisual: UVisual;

declare interface UWidget extends UVisual {
    Slot: UPanelSlot;
    bIsEnabledDelegate: FWidgetBIsEnabledDelegate;
    ToolTipTextDelegate: FWidgetToolTipTextDelegate;
    ToolTipText: FText;
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
    NativeBindings: TArray<UPropertyBinding>;
    SetVisibility(InVisibility: ESlateVisibility): void;
    SetUserFocus(PlayerController: APlayerController): void;
    SetToolTipText(InToolTipText: FText): void;
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
    SetNavigationRule(Direction: EUINavigation, Rule: EUINavigationRule, WidgetToFocus: FName): void;
    SetKeyboardFocus(): void;
    SetIsEnabled(bInIsEnabled: boolean): void;
    SetFocus(): void;
    SetCursor(InCursor: EMouseCursor): void;
    SetClipping(InClipping: EWidgetClipping): void;
    SetAllNavigationRules(Rule: EUINavigationRule, WidgetToFocus: FName): void;
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
    GetText__DelegateSignature(): FText;
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
    GetAccessibleText(): FText;
    GetAccessibleSummaryText(): FText;
    GenerateWidgetForString__DelegateSignature(Item: string | FString): UWidget;
    GenerateWidgetForObject__DelegateSignature(Item: UObject): UWidget;
    ForceVolatile(bForce: boolean): void;
    ForceLayoutPrepass(): void;
}
declare const UWidget: UWidget;

declare interface UWidgetAnimation extends UMovieSceneSequence {
    MovieScene: UMovieScene;
    AnimationBindings: TArray<FWidgetAnimationBinding>;
    bLegacyFinishOnStop: boolean;
    DisplayLabel: FString;
    UnbindFromAnimationStarted(Widget: UUserWidget, Delegate: FUnbindFromAnimationStartedDelegate): void;
    UnbindFromAnimationFinished(Widget: UUserWidget, Delegate: FUnbindFromAnimationFinishedDelegate): void;
    UnbindAllFromAnimationStarted(Widget: UUserWidget): void;
    UnbindAllFromAnimationFinished(Widget: UUserWidget): void;
    GetStartTime(): number;
    GetEndTime(): number;
    BindToAnimationStarted(Widget: UUserWidget, Delegate: FBindToAnimationStartedDelegate): void;
    BindToAnimationFinished(Widget: UUserWidget, Delegate: FBindToAnimationFinishedDelegate): void;
}
declare const UWidgetAnimation: UWidgetAnimation;

declare interface UWidgetAnimationDelegateBinding extends UDynamicBlueprintBinding {
    WidgetAnimationDelegateBindings: TArray<FBlueprintWidgetAnimationDelegateBinding>;
}
declare const UWidgetAnimationDelegateBinding: UWidgetAnimationDelegateBinding;

declare interface UWidgetAnimationHandleFunctionLibrary extends UBlueprintFunctionLibrary {
    SetUserTag(Target: FWidgetAnimationHandle, InUserTag: FName): void;
    GetUserTag(Target: FWidgetAnimationHandle): FName;
}
declare const UWidgetAnimationHandleFunctionLibrary: UWidgetAnimationHandleFunctionLibrary;

declare interface UWidgetAnimationPlayCallbackProxy extends UObject {
    Finished: FWidgetAnimationPlayCallbackProxyFinished;
    NewPlayAnimationTimeRangeProxyObject(Result: FWidgetAnimationHandle, Widget: UUserWidget, InAnimation: UWidgetAnimation, StartAtTime: number, EndAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number): UWidgetAnimationPlayCallbackProxy;
    NewPlayAnimationProxyObject(Result: FWidgetAnimationHandle, Widget: UUserWidget, InAnimation: UWidgetAnimation, StartAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number): UWidgetAnimationPlayCallbackProxy;
    CreatePlayAnimationTimeRangeProxyObject(Result: UUMGSequencePlayer, Widget: UUserWidget, InAnimation: UWidgetAnimation, StartAtTime: number, EndAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number): UWidgetAnimationPlayCallbackProxy;
    CreatePlayAnimationProxyObject(Result: UUMGSequencePlayer, Widget: UUserWidget, InAnimation: UWidgetAnimation, StartAtTime: number, NumLoopsToPlay: number, PlayMode: EUMGSequencePlayMode, PlaybackSpeed: number): UWidgetAnimationPlayCallbackProxy;
}
declare const UWidgetAnimationPlayCallbackProxy: UWidgetAnimationPlayCallbackProxy;

declare interface UWidgetBinaryStateRegistration extends UObject {

}
declare const UWidgetBinaryStateRegistration: UWidgetBinaryStateRegistration;

declare interface UWidgetBinding extends UPropertyBinding {
    GetValue(): UWidget;
}
declare const UWidgetBinding: UWidgetBinding;

declare interface UWidgetBlueprintGeneratedClass extends UBlueprintGeneratedClass {
    WidgetTree: UWidgetTree;
    Extensions: TArray<UWidgetBlueprintGeneratedClassExtension>;
    bClassRequiresNativeTick: boolean;
    bCanCallInitializedWithoutPlayerContext: boolean;
    Bindings: TArray<FDelegateRuntimeBinding>;
    Animations: TArray<UWidgetAnimation>;
    NamedSlots: TArray<FName>;
    AvailableNamedSlots: TArray<FName>;
    InstanceNamedSlots: TArray<FName>;
}
declare const UWidgetBlueprintGeneratedClass: UWidgetBlueprintGeneratedClass;

declare interface UWidgetBlueprintGeneratedClassExtension extends UObject {

}
declare const UWidgetBlueprintGeneratedClassExtension: UWidgetBlueprintGeneratedClassExtension;

declare interface UWidgetBlueprintLibrary extends UBlueprintFunctionLibrary {
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
    SetHardwareCursor(WorldContextObject: UObject, CursorShape: EMouseCursor, CursorName: FName, HotSpot: FVector2D): boolean;
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
    GetAllWidgetsWithInterface(WorldContextObject: UObject, FoundWidgets: TArray<UUserWidget>, Interface: TSubclassOf<UInterface>, TopLevelOnly: boolean): void;
    GetAllWidgetsOfClass(WorldContextObject: UObject, FoundWidgets: TArray<UUserWidget>, WidgetClass: TSubclassOf<UUserWidget>, TopLevelOnly: boolean): void;
    EndDragDrop(Reply: FEventReply): FEventReply;
    DrawTextFormatted(Context: FPaintContext, Text: FText, position: FVector2D, Font: UFont, FontSize: number, FontTypeFace: FName, Tint: FLinearColor): void;
    DrawText(Context: FPaintContext, InString: string | FString, position: FVector2D, Tint: FLinearColor): void;
    DrawSpline(Context: FPaintContext, Start: FVector2D, StartDir: FVector2D, End: FVector2D, EndDir: FVector2D, Tint: FLinearColor, Thickness: number): void;
    DrawLines(Context: FPaintContext, Points: TArray<FVector2D>, Tint: FLinearColor, bAntiAlias: boolean, Thickness: number): void;
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
}
declare const UWidgetBlueprintLibrary: UWidgetBlueprintLibrary;

declare interface UWidgetCheckedStateRegistration extends UWidgetEnumStateRegistration {

}
declare const UWidgetCheckedStateRegistration: UWidgetCheckedStateRegistration;

declare interface UWidgetComponent extends UMeshComponent {
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
    SharedLayerName: FName;
    LayerZOrder: number;
    GeometryMode: EWidgetGeometryMode;
    CylinderArcAngle: number;
    TickMode: ETickMode;
    Widget: UUserWidget;
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
}
declare const UWidgetComponent: UWidgetComponent;

declare interface UWidgetDisabledStateRegistration extends UWidgetBinaryStateRegistration {

}
declare const UWidgetDisabledStateRegistration: UWidgetDisabledStateRegistration;

declare interface UWidgetEnumStateRegistration extends UObject {

}
declare const UWidgetEnumStateRegistration: UWidgetEnumStateRegistration;

declare interface UWidgetFieldNotificationExtension extends UUserWidgetExtension {

}
declare const UWidgetFieldNotificationExtension: UWidgetFieldNotificationExtension;

declare interface UWidgetHoveredStateRegistration extends UWidgetBinaryStateRegistration {

}
declare const UWidgetHoveredStateRegistration: UWidgetHoveredStateRegistration;

declare interface UWidgetInteractionComponent extends USceneComponent {
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
    SetFocus(FocusWidget: UWidget): void;
    SetCustomHitResult(HitResult: FHitResult): void;
    SendKeyChar(Characters: string | FString, bRepeat: boolean): boolean;
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
}
declare const UWidgetInteractionComponent: UWidgetInteractionComponent;

declare interface UWidgetLayoutLibrary extends UBlueprintFunctionLibrary {
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
}
declare const UWidgetLayoutLibrary: UWidgetLayoutLibrary;

declare interface UWidgetNavigation extends UObject {
    Up: FWidgetNavigationData;
    Down: FWidgetNavigationData;
    Left: FWidgetNavigationData;
    Right: FWidgetNavigationData;
    Next: FWidgetNavigationData;
    Previous: FWidgetNavigationData;
}
declare const UWidgetNavigation: UWidgetNavigation;

declare interface UWidgetPressedStateRegistration extends UWidgetBinaryStateRegistration {

}
declare const UWidgetPressedStateRegistration: UWidgetPressedStateRegistration;

declare interface UWidgetSelectedStateRegistration extends UWidgetBinaryStateRegistration {

}
declare const UWidgetSelectedStateRegistration: UWidgetSelectedStateRegistration;

declare interface UWidgetStateSettings extends UDeveloperSettings {

}
declare const UWidgetStateSettings: UWidgetStateSettings;

declare interface UWidgetSwitcher extends UPanelWidget {
    ActiveWidgetIndex: number;
    SetActiveWidgetIndex(Index: number): void;
    SetActiveWidget(Widget: UWidget): void;
    GetWidgetAtIndex(Index: number): UWidget;
    GetNumWidgets(): number;
    GetActiveWidgetIndex(): number;
    GetActiveWidget(): UWidget;
}
declare const UWidgetSwitcher: UWidgetSwitcher;

declare interface UWidgetSwitcherSlot extends UPanelSlot {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UWidgetSwitcherSlot: UWidgetSwitcherSlot;

declare interface UWidgetTree extends UObject {
    RootWidget: UWidget;
    NamedSlotBindings: Record<FName, UWidget>;
}
declare const UWidgetTree: UWidgetTree;

declare interface UWindowTitleBarArea extends UContentWidget {
    bWindowButtonsEnabled: boolean;
    bDoubleClickTogglesFullscreen: boolean;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UWindowTitleBarArea: UWindowTitleBarArea;

declare interface UWindowTitleBarAreaSlot extends UPanelSlot {
    Padding: FMargin;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
}
declare const UWindowTitleBarAreaSlot: UWindowTitleBarAreaSlot;

declare interface UWrapBox extends UPanelWidget {
    InnerSlotPadding: FVector2D;
    WrapSize: number;
    bExplicitWrapSize: boolean;
    HorizontalAlignment: EHorizontalAlignment;
    orientation: EOrientation;
    SetInnerSlotPadding(InPadding: FVector2D): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    AddChildToWrapBox(Content: UWidget): UWrapBoxSlot;
}
declare const UWrapBox: UWrapBox;

declare interface UWrapBoxSlot extends UPanelSlot {
    Padding: FMargin;
    FillSpanWhenLessThan: number;
    HorizontalAlignment: EHorizontalAlignment;
    VerticalAlignment: EVerticalAlignment;
    bFillEmptySpace: boolean;
    bForceNewLine: boolean;
    SetVerticalAlignment(InVerticalAlignment: EVerticalAlignment): void;
    SetPadding(InPadding: FMargin): void;
    SetNewLine(InForceNewLine: boolean): void;
    SetHorizontalAlignment(InHorizontalAlignment: EHorizontalAlignment): void;
    SetFillSpanWhenLessThan(InFillSpanWhenLessThan: number): void;
    SetFillEmptySpace(InbFillEmptySpace: boolean): void;
}
declare const UWrapBoxSlot: UWrapBoxSlot;

