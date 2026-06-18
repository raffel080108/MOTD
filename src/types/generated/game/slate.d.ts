declare interface FAnchors {
    Minimum: FVector2D;
    Maximum: FVector2D;
}

declare interface FCharRange {
    First: number;
    Last: number;
}

declare interface FCharRangeList {
    Ranges: FCharRange[];
}

declare interface FCustomizedToolMenu extends FToolMenuProfile {
    EntryOrder: TMap<string, FCustomizedToolMenuNameArray>;
    SectionOrder: string[];
}

declare interface FCustomizedToolMenuEntry {
    Visibility: ECustomizedToolMenuVisibility;
}

declare interface FCustomizedToolMenuNameArray {
    Names: string[];
}

declare interface FCustomizedToolMenuSection {
    Visibility: ECustomizedToolMenuVisibility;
}

declare interface FInputChord {
    Key: FKey;
    bShift: boolean;
    bCtrl: boolean;
    bAlt: boolean;
    bCmd: boolean;
}

declare interface FInputPreprocessorRegistrationKey {
    Type: EInputPreProcessorType;
    Priority: number;
}

declare interface FToolMenuProfile {
    Name: string;
    Entries: TMap<string, FCustomizedToolMenuEntry>;
    Sections: TMap<string, FCustomizedToolMenuSection>;
    SuppressExtenders: string[];
}

declare interface FVirtualKeyboardOptions {
    bEnableAutocorrect: boolean;
}

declare interface UButtonWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UButtonWidgetStyle: {
        ButtonStyle: FButtonStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UButtonWidgetStyle['__properties_UButtonWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UCheckBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UCheckBoxWidgetStyle: {
        CheckBoxStyle: FCheckBoxStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCheckBoxWidgetStyle['__properties_UCheckBoxWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UComboBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UComboBoxWidgetStyle: {
        ComboBoxStyle: FComboBoxStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UComboBoxWidgetStyle['__properties_UComboBoxWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UComboButtonWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UComboButtonWidgetStyle: {
        ComboButtonStyle: FComboButtonStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UComboButtonWidgetStyle['__properties_UComboButtonWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UEditableTextBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UEditableTextBoxWidgetStyle: {
        EditableTextBoxStyle: FEditableTextBoxStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableTextBoxWidgetStyle['__properties_UEditableTextBoxWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UEditableTextWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UEditableTextWidgetStyle: {
        EditableTextStyle: FEditableTextStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditableTextWidgetStyle['__properties_UEditableTextWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UProgressWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UProgressWidgetStyle: {
        ProgressBarStyle: FProgressBarStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UProgressWidgetStyle['__properties_UProgressWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UScrollBarWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UScrollBarWidgetStyle: {
        ScrollBarStyle: FScrollBarStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UScrollBarWidgetStyle['__properties_UScrollBarWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UScrollBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UScrollBoxWidgetStyle: {
        ScrollBoxStyle: FScrollBoxStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UScrollBoxWidgetStyle['__properties_UScrollBoxWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface USlateSettings extends UObject {
    readonly __properties_USlateSettings: {
        bExplicitCanvasChildZOrder: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USlateSettings['__properties_USlateSettings'] &
        UObject['__propertyRegistry'];
}

declare interface USpinBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_USpinBoxWidgetStyle: {
        SpinBoxStyle: FSpinBoxStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USpinBoxWidgetStyle['__properties_USpinBoxWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UTextBlockWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UTextBlockWidgetStyle: {
        TextBlockStyle: FTextBlockStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UTextBlockWidgetStyle['__properties_UTextBlockWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UToolMenuBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

