declare interface UMENU_Credits_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    LogoBig: UImage;
    ITM_MenuBackground: UITM_MenuBackground_C;
    ITM_Credits_List: UITM_Credits_List_C;
    Basic_Menu_LargeWindowWithHeader: UBasic_Menu_LargeWindowWithHeader_C;
    Basic_ButtonScalable2: UBasic_ButtonScalable2_C;
    CreditsPage: number;
    texts: TArray<FText>;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    BndEvt__Basic_ButtonScalable2_K2Node_ComponentBoundEvent_47_OnClicked__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ReceiveCloseCommand(): void;
    ExecuteUbergraph_MENU_Credits(EntryPoint: number): void;
}
declare const UMENU_Credits_C: UMENU_Credits_C;

