declare interface UBasic_Popup_YesNoPrompt_C extends UYesNoPromptWidget {
    readonly __static_UBasic_Popup_YesNoPrompt_C: {
        SetAllowUseOfCloseKey(AllowUse: boolean): void;
        OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        OnShow(Title: string, Message: string): void;
        BndEvt__BTN_Yes_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
        BndEvt__BTN_No_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
        PreConstruct(IsDesignTime: boolean): void;
        Yes(): void;
        No(): void;
        OnClicked(Yes: boolean): void;
        ExecuteUbergraph_Basic_Popup_YesNoPrompt(EntryPoint: number): void;
        OnClickedYesNo__DelegateSignature(InYes: boolean): void;
    };
    readonly __properties_UBasic_Popup_YesNoPrompt_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ITM_MenuBackground: UITM_MenuBackground_C;
        DATA_Header: UTextBlock;
        DATA_Content: UTextBlock;
        BTN_Yes: UBasic_ButtonScalable2_C;
        BTN_No: UBasic_ButtonScalable2_C;
        BasicWindow_Minimal: UBasic_Menu_MinimalWindow_C;
        Basic_ScrollBarBox: UBasic_ScrollBarBox_C;
        OnClickedYesNo: FBasic_Popup_YesNoPrompt_COnClickedYesNo;
        AllowUseOfCloseKey: boolean;
        TimeWhenShown: number;
    };
    readonly __staticRegistry: 
        UBasic_Popup_YesNoPrompt_C['__static_UBasic_Popup_YesNoPrompt_C'] &
        UYesNoPromptWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_Popup_YesNoPrompt_C['__properties_UBasic_Popup_YesNoPrompt_C'] &
        UYesNoPromptWidget['__propertyRegistry'];
}

