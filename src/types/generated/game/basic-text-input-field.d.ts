declare interface UBasic_TextInputField_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    InputFieldBorder: UBorder;
    InputField: UEditableTextBox;
    HintText: FText;
    OnTextChanged: FBasic_TextInputField_COnTextChanged;
    OnTextCommitted: FBasic_TextInputField_COnTextCommitted;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    SetText(InText: FText): void;
    GetHint(HintText: FText): void;
    GetText(): FText;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__InputField_K2Node_ComponentBoundEvent_0_OnEditableTextBoxChangedEvent__DelegateSignature(Text: FText): void;
    BndEvt__InputField_K2Node_ComponentBoundEvent_1_OnEditableTextBoxCommittedEvent__DelegateSignature(Text: FText, CommitMethod: ETextCommit): void;
    ExecuteUbergraph_Basic_TextInputField(EntryPoint: number): void;
    OnTextCommitted__DelegateSignature(Text: FText, CommitMethod: uint8): void;
    OnTextChanged__DelegateSignature(Text: FText): void;
}
declare const UBasic_TextInputField_C: UBasic_TextInputField_C;

