declare const enum ECustomizedToolMenuVisibility {
    None = 0,
    Visible = 1,
    Hidden = 2
}

declare const enum EDescendantScrollDestination {
    IntoView = 0,
    TopOrLeft = 1,
    Center = 2,
    BottomOrRight = 3
}

declare const enum EInputPreProcessorType {
    Overlay = 0,
    PreEngine = 1,
    Engine = 2,
    PreEditor = 3,
    Editor = 4,
    PreGame = 5,
    Game = 6,
    Count = 7
}

declare const enum EListItemAlignment {
    EvenlyDistributed = 0,
    EvenlySize = 1,
    EvenlyWide = 2,
    LeftAligned = 3,
    RightAligned = 4,
    CenterAligned = 5,
    Fill = 6
}

declare const enum EMultiBlockType {
    None = 0,
    ButtonRow = 1,
    EditableText = 2,
    Heading = 3,
    MenuEntry = 4,
    Separator = 5,
    ToolBarButton = 6,
    ToolBarComboButton = 7,
    Widget = 8
}

declare const enum EMultiBoxType {
    MenuBar = 0,
    ToolBar = 1,
    VerticalToolBar = 2,
    SlimHorizontalToolBar = 3,
    UniformToolBar = 4,
    Menu = 5,
    ButtonRow = 6,
    SlimHorizontalUniformToolBar = 7,
    SlimWrappingToolBar = 8
}

declare const enum EMultipleKeyBindingIndex {
    Primary = 0,
    Secondary = 1,
    NumChords = 2
}

declare const enum EPopupLayoutMode {
    Menu = 0,
    ToolTip = 1
}

declare const enum EProgressBarFillStyle {
    Mask = 0,
    Scale = 1
}

declare const enum EProgressBarFillType {
    LeftToRight = 0,
    RightToLeft = 1,
    FillFromCenter = 2,
    FillFromCenterHorizontal = 3,
    FillFromCenterVertical = 4,
    TopToBottom = 5,
    BottomToTop = 6
}

declare const enum EScrollIntoViewAlignment {
    IntoView = 0,
    TopOrLeft = 1,
    CenterAligned = 2,
    BottomOrRight = 3
}

declare const enum EScrollWhenFocusChanges {
    NoScroll = 0,
    InstantScroll = 1,
    AnimatedScroll = 2
}

declare const enum ESelectionMode {
    None = 0,
    Single = 1,
    SingleToggle = 2,
    Multi = 3
}

declare const enum EStretch {
    None = 0,
    Fill = 1,
    ScaleToFit = 2,
    ScaleToFitX = 3,
    ScaleToFitY = 4,
    ScaleToFill = 5,
    ScaleBySafeZone = 6,
    UserSpecified = 7,
    UserSpecifiedWithClipping = 8
}

declare const enum EStretchDirection {
    Both = 0,
    DownOnly = 1,
    UpOnly = 2
}

declare const enum ETableViewMode {
    List = 0,
    Tile = 1,
    Tree = 2
}

declare const enum ETextFlowDirection {
    Auto = 0,
    LeftToRight = 1,
    RightToLeft = 2,
    Culture = 3
}

declare const enum ETextJustify {
    Left = 0,
    Center = 1,
    Right = 2,
    InvariantLeft = 3,
    InvariantRight = 4
}

declare const enum ETextWrappingPolicy {
    DefaultWrapping = 0,
    AllowPerCharacterWrapping = 1
}

declare const enum EUserInterfaceActionType {
    None = 0,
    Button = 1,
    ToggleButton = 2,
    RadioButton = 3,
    Check = 4,
    CollapsedButton = 5
}

declare const enum EVirtualKeyboardDismissAction {
    TextChangeOnDismiss = 0,
    TextCommitOnAccept = 1,
    TextCommitOnDismiss = 2
}

declare const enum EVirtualKeyboardTrigger {
    OnFocusByPointer = 0,
    OnAllFocusEvents = 1
}

