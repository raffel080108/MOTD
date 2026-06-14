declare interface FAnchors {
    Minimum: FVector2D;
    Maximum: FVector2D;
}
declare const FAnchors: FAnchors;

declare interface FCharRange {
    First: uint16;
    Last: uint16;
}
declare const FCharRange: FCharRange;

declare interface FCharRangeList {
    Ranges: TArray<FCharRange>;
}
declare const FCharRangeList: FCharRangeList;

declare interface FCustomizedToolMenu extends FToolMenuProfile {
    EntryOrder: Record<FName, FCustomizedToolMenuNameArray>;
    SectionOrder: TArray<FName>;
}
declare const FCustomizedToolMenu: FCustomizedToolMenu;

declare interface FCustomizedToolMenuEntry {
    Visibility: ECustomizedToolMenuVisibility;
}
declare const FCustomizedToolMenuEntry: FCustomizedToolMenuEntry;

declare interface FCustomizedToolMenuNameArray {
    Names: TArray<FName>;
}
declare const FCustomizedToolMenuNameArray: FCustomizedToolMenuNameArray;

declare interface FCustomizedToolMenuSection {
    Visibility: ECustomizedToolMenuVisibility;
}
declare const FCustomizedToolMenuSection: FCustomizedToolMenuSection;

declare interface FInputChord {
    Key: FKey;
    bShift: boolean;
    bCtrl: boolean;
    bAlt: boolean;
    bCmd: boolean;
}
declare const FInputChord: FInputChord;

declare interface FInputPreprocessorRegistrationKey {
    Type: EInputPreProcessorType;
    Priority: number;
}
declare const FInputPreprocessorRegistrationKey: FInputPreprocessorRegistrationKey;

declare interface FToolMenuProfile {
    Name: FName;
    Entries: Record<FName, FCustomizedToolMenuEntry>;
    Sections: Record<FName, FCustomizedToolMenuSection>;
    SuppressExtenders: TArray<FName>;
}
declare const FToolMenuProfile: FToolMenuProfile;

declare interface FVirtualKeyboardOptions {
    bEnableAutocorrect: boolean;
}
declare const FVirtualKeyboardOptions: FVirtualKeyboardOptions;

declare interface UButtonWidgetStyle extends USlateWidgetStyleContainerBase {
    ButtonStyle: FButtonStyle;
}
declare const UButtonWidgetStyle: UButtonWidgetStyle;

declare interface UCheckBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    CheckBoxStyle: FCheckBoxStyle;
}
declare const UCheckBoxWidgetStyle: UCheckBoxWidgetStyle;

declare interface UComboBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    ComboBoxStyle: FComboBoxStyle;
}
declare const UComboBoxWidgetStyle: UComboBoxWidgetStyle;

declare interface UComboButtonWidgetStyle extends USlateWidgetStyleContainerBase {
    ComboButtonStyle: FComboButtonStyle;
}
declare const UComboButtonWidgetStyle: UComboButtonWidgetStyle;

declare interface UEditableTextBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    EditableTextBoxStyle: FEditableTextBoxStyle;
}
declare const UEditableTextBoxWidgetStyle: UEditableTextBoxWidgetStyle;

declare interface UEditableTextWidgetStyle extends USlateWidgetStyleContainerBase {
    EditableTextStyle: FEditableTextStyle;
}
declare const UEditableTextWidgetStyle: UEditableTextWidgetStyle;

declare interface UProgressWidgetStyle extends USlateWidgetStyleContainerBase {
    ProgressBarStyle: FProgressBarStyle;
}
declare const UProgressWidgetStyle: UProgressWidgetStyle;

declare interface UScrollBarWidgetStyle extends USlateWidgetStyleContainerBase {
    ScrollBarStyle: FScrollBarStyle;
}
declare const UScrollBarWidgetStyle: UScrollBarWidgetStyle;

declare interface UScrollBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    ScrollBoxStyle: FScrollBoxStyle;
}
declare const UScrollBoxWidgetStyle: UScrollBoxWidgetStyle;

declare interface USlateSettings extends UObject {
    bExplicitCanvasChildZOrder: boolean;
}
declare const USlateSettings: USlateSettings;

declare interface USpinBoxWidgetStyle extends USlateWidgetStyleContainerBase {
    SpinBoxStyle: FSpinBoxStyle;
}
declare const USpinBoxWidgetStyle: USpinBoxWidgetStyle;

declare interface UTextBlockWidgetStyle extends USlateWidgetStyleContainerBase {
    TextBlockStyle: FTextBlockStyle;
}
declare const UTextBlockWidgetStyle: UTextBlockWidgetStyle;

declare interface UToolMenuBase extends UObject {

}
declare const UToolMenuBase: UToolMenuBase;

