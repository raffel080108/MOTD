declare const enum EBindingKind {
    Function = 0,
    Property = 1
}

declare const enum EDragPivot {
    MouseDown = 0,
    TopLeft = 1,
    TopCenter = 2,
    TopRight = 3,
    CenterLeft = 4,
    CenterCenter = 5,
    CenterRight = 6,
    BottomLeft = 7,
    BottomCenter = 8,
    BottomRight = 9
}

declare const enum EDynamicBoxType {
    Horizontal = 0,
    Vertical = 1,
    Wrap = 2,
    VerticalWrap = 3,
    Radial = 4,
    Overlay = 5
}

declare const enum ESlateAccessibleBehavior {
    NotAccessible = 0,
    Auto = 1,
    Summary = 2,
    Custom = 3,
    ToolTip = 4
}

declare const enum ESlateSizeRule {
    Automatic = 0,
    Fill = 1
}

declare const enum ESlateVisibility {
    Visible = 0,
    Collapsed = 1,
    Hidden = 2,
    HitTestInvisible = 3,
    SelfHitTestInvisible = 4
}

declare const enum ETickMode {
    Disabled = 0,
    Enabled = 1,
    Automatic = 2
}

declare const enum EUMGSequencePlayMode {
    Forward = 0,
    Reverse = 1,
    PingPong = 2
}

declare const enum EVirtualKeyboardType {
    Default = 0,
    Number = 1,
    Web = 2,
    Email = 3,
    Password = 4,
    AlphaNumeric = 5
}

declare const enum EWidgetAnimationEvent {
    Started = 0,
    Finished = 1
}

declare const enum EWidgetBlendMode {
    Opaque = 0,
    Masked = 1,
    Transparent = 2
}

declare const enum EWidgetDesignFlags {
    None = 0,
    Designing = 1,
    ShowOutline = 2,
    ExecutePreConstruct = 4,
    Previewing = 8
}

declare const enum EWidgetGeometryMode {
    Plane = 0,
    Cylinder = 1
}

declare const enum EWidgetInteractionSource {
    World = 0,
    Mouse = 1,
    CenterScreen = 2,
    Custom = 3
}

declare const enum EWidgetSpace {
    World = 0,
    Screen = 1
}

declare const enum EWidgetTickFrequency {
    Never = 0,
    Auto = 1
}

declare const enum EWidgetTimingPolicy {
    RealTime = 0,
    GameTime = 1
}

declare const enum EWindowVisibility {
    Visible = 0,
    SelfHitTestInvisible = 1
}

