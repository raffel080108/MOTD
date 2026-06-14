declare interface UBasic_PasswordField_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ServerPasswordBorder: UBorder;
    ServerPassword: UEditableTextBox;
    HintText: FText;
    OnTextChanged: FBasic_PasswordField_COnTextChanged;
    OnTextCommitted: FBasic_PasswordField_COnTextCommitted;
    GetPassword(Password: FText): void;
    GetPasswordHint(): FText;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__ServerPassword_K2Node_ComponentBoundEvent_10_OnEditableTextBoxChangedEvent__DelegateSignature(Text: FText): void;
    BndEvt__ServerPassword_K2Node_ComponentBoundEvent_11_OnEditableTextBoxCommittedEvent__DelegateSignature(Text: FText, CommitMethod: ETextCommit): void;
    ExecuteUbergraph_Basic_PasswordField(EntryPoint: number): void;
    OnTextCommitted__DelegateSignature(Text: FText, CommitMethod: uint8): void;
    OnTextChanged__DelegateSignature(Text: FText): void;
}
declare const UBasic_PasswordField_C: UBasic_PasswordField_C;

