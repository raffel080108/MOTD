declare interface UBasic_PasswordField_C extends UUserWidget {
    readonly __static_UBasic_PasswordField_C: {
        GetPassword(Password: string): void;
        GetPasswordHint(): string;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__ServerPassword_K2Node_ComponentBoundEvent_10_OnEditableTextBoxChangedEvent__DelegateSignature(Text: string): void;
        BndEvt__ServerPassword_K2Node_ComponentBoundEvent_11_OnEditableTextBoxCommittedEvent__DelegateSignature(Text: string, CommitMethod: ETextCommit): void;
        ExecuteUbergraph_Basic_PasswordField(EntryPoint: number): void;
        OnTextCommitted__DelegateSignature(Text: string, CommitMethod: number): void;
        OnTextChanged__DelegateSignature(Text: string): void;
    };
    readonly __properties_UBasic_PasswordField_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ServerPasswordBorder: UBorder;
        ServerPassword: UEditableTextBox;
        HintText: string;
        OnTextChanged: FBasic_PasswordField_COnTextChanged;
        OnTextCommitted: FBasic_PasswordField_COnTextCommitted;
    };
    readonly __staticRegistry: 
        UBasic_PasswordField_C['__static_UBasic_PasswordField_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_PasswordField_C['__properties_UBasic_PasswordField_C'] &
        UUserWidget['__propertyRegistry'];
}

