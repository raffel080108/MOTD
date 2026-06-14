declare interface UOptions_GameServerName_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_TextInputField: UBasic_TextInputField_C;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    Construct(): void;
    BndEvt__Basic_TextInputField_K2Node_ComponentBoundEvent_0_OnTextCommitted__DelegateSignature(Text: FText, CommitMethod: uint8): void;
    UpdateName(NewValue: string | FString): void;
    ExecuteUbergraph_Options_GameServerName(EntryPoint: number): void;
}
declare const UOptions_GameServerName_C: UOptions_GameServerName_C;

