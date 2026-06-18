declare interface UWND_JoiningPassword_C extends UWindowWidget {
    readonly __static_UWND_JoiningPassword_C: {
        FadeIn(): void;
        SetSession(Session: FFSDBlueprintSessionResult): void;
        BndEvt__Button_Close_K2Node_ComponentBoundEvent_62_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__Button_Join_K2Node_ComponentBoundEvent_45_OnButtonClickedEvent__DelegateSignature(): void;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__WND_JoiningPassword_Basic_PasswordField_K2Node_ComponentBoundEvent_0_OnTextCommitted__DelegateSignature(Text: string, CommitMethod: number): void;
        Construct(): void;
        ExecuteUbergraph_WND_JoiningPassword(EntryPoint: number): void;
        OnCancel__DelegateSignature(): void;
        JoinWithPassword__DelegateSignature(Session: FFSDBlueprintSessionResult, Password: string): void;
    };
    readonly __properties_UWND_JoiningPassword_C: {
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
    };
    readonly __staticRegistry: 
        UWND_JoiningPassword_C['__static_UWND_JoiningPassword_C'] &
        UWindowWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWND_JoiningPassword_C['__properties_UWND_JoiningPassword_C'] &
        UWindowWidget['__propertyRegistry'];
}

