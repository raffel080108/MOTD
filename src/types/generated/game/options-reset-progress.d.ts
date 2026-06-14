declare interface UOptions_ResetProgress_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ResetButton: UBasic_ButtonWithControls_C;
    OnFailure_F010C2A34D0AD4EF7EFE56A579B81DF4(): void;
    OnSuccess_F010C2A34D0AD4EF7EFE56A579B81DF4(): void;
    Answer(Yes: boolean): void;
    BndEvt__Options_ResetProgress_ResetButton_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    ExecuteUbergraph_Options_ResetProgress(EntryPoint: number): void;
}
declare const UOptions_ResetProgress_C: UOptions_ResetProgress_C;

