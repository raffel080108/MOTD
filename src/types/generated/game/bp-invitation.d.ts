declare interface UBP_Invitation_C extends UWindowWidget {
    readonly __static_UBP_Invitation_C: {
        ReplyInvite(Reply: number): void;
        Initialize(User_Data: FDiscordUserDataSDK, TimeElapsed: number): void;
        OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        OnFail_1E7B4EA94EB1E25E604B80A4114A24A4(Texture: UTexture2DDynamic): void;
        OnSuccess_1E7B4EA94EB1E25E604B80A4114A24A4(Texture: UTexture2DDynamic): void;
        Construct(): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        OnReadyImage(URL: string): void;
        BndEvt__BTN_Yes_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
        BndEvt__BTN_No_K2Node_ComponentBoundEvent_5_OnClicked__DelegateSignature(): void;
        BndEvt__Basic_ButtonScalable2_C_3_K2Node_ComponentBoundEvent_8_OnClicked__DelegateSignature(): void;
        HideUIDelayed(): void;
        ExecuteUbergraph_BP_Invitation(EntryPoint: number): void;
        ImageReady__DelegateSignature(URL: string): void;
    };
    readonly __properties_UBP_Invitation_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DataBox: UHorizontalBox;
        DATA_Header: UTextBlock;
        DATA_Content: UTextBlock;
        buttons2: UHorizontalBox;
        buttons: UHorizontalBox;
        BTN_Yes: UBasic_ButtonScalable2_C;
        BTN_No: UBasic_ButtonScalable2_C;
        BTN_Ignore: UBasic_ButtonScalable2_C;
        BasicWindow_Minimal: UBasic_Menu_MinimalWindow_C;
        Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
        AvatarImage: UImage;
        Show: UWidgetAnimation;
        Hide: UWidgetAnimation;
        UserData_New: FDiscordUserDataSDK;
        Initialized: boolean;
        TimeStarted: FDateTime;
        ImageReady: FBP_Invitation_CImageReady;
        Initializing: boolean;
        InviteTime: number;
    };
    readonly __staticRegistry: 
        UBP_Invitation_C['__static_UBP_Invitation_C'] &
        UWindowWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_Invitation_C['__properties_UBP_Invitation_C'] &
        UWindowWidget['__propertyRegistry'];
}

