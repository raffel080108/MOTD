declare interface UWND_JoiningPassword_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_2: UTextBlock;
    FadeOverlay: UImage;
    BTN_Join: UBasic_ButtonScalable2_C;
    BTN_Cancel: UBasic_ButtonScalable2_C;
    BlurBackground: UBlurBackground_C;
    BasicWindow_Minimal: UBasic_Menu_MinimalWindow_C;
    Basic_PasswordField: UBasic_PasswordField_C;
    FadeInAnimation: UWidgetAnimation;
    Session: FFSDBlueprintSessionResult;
    JoinWithPassword: FWND_JoiningPassword_CJoinWithPassword;
    OnCancel: FWND_JoiningPassword_COnCancel;
    FadeIn(): void;
    SetSession(Session: FFSDBlueprintSessionResult): void;
    BndEvt__Button_Close_K2Node_ComponentBoundEvent_62_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_Join_K2Node_ComponentBoundEvent_45_OnButtonClickedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__WND_JoiningPassword_Basic_PasswordField_K2Node_ComponentBoundEvent_0_OnTextCommitted__DelegateSignature(Text: FText, CommitMethod: uint8): void;
    Construct(): void;
    ExecuteUbergraph_WND_JoiningPassword(EntryPoint: number): void;
    OnCancel__DelegateSignature(): void;
    JoinWithPassword__DelegateSignature(Session: FFSDBlueprintSessionResult, Password: string | FString): void;
}
declare const UWND_JoiningPassword_C: UWND_JoiningPassword_C;

