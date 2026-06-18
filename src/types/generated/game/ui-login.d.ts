declare interface UUI_Login_C extends UWindowWidget {
    readonly __static_UUI_Login_C: {
        OnSuccess_1486ECA24BF50BB0800906A6D21FCBE0(LoginStatus: EFSDLoginState, LoginResult: string): void;
        OnFail_1486ECA24BF50BB0800906A6D21FCBE0(LoginStatus: EFSDLoginState, LoginResult: string): void;
        OnProgress_1486ECA24BF50BB0800906A6D21FCBE0(LoginStatus: EFSDLoginState, LoginResult: string): void;
        BndEvt__Basic_ButtonScalable2_K2Node_ComponentBoundEvent_6_OnClicked__DelegateSignature(): void;
        Construct(): void;
        AttemptLogin(): void;
        BndEvt__UI_Login_Button_RetryLogin_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
        LoginFailed(FailureReason: string): void;
        LoginSucceeded(): void;
        ShowStatus(): void;
        ExecuteUbergraph_UI_Login(EntryPoint: number): void;
        LoginSuccessful__DelegateSignature(): void;
    };
    readonly __properties_UUI_Login_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TEXT_Header: UTextBlock;
        ProgressBar: UCircularThrobber;
        LoginErrorInfo: UTextBlock;
        FailedAttemptOptions: UHorizontalBox;
        Button_RetryLogin: UBasic_ButtonScalable2_C;
        Button_ExitGame: UBasic_ButtonScalable2_C;
        BlurBackground: UBlurBackground_C;
        Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
        Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
        LoginSuccessful: FUI_Login_CLoginSuccessful;
        AutomaticReattempts: number;
        InProgress: boolean;
        AutomaticRetryActive: boolean;
    };
    readonly __staticRegistry: 
        UUI_Login_C['__static_UUI_Login_C'] &
        UWindowWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Login_C['__properties_UUI_Login_C'] &
        UWindowWidget['__propertyRegistry'];
}

