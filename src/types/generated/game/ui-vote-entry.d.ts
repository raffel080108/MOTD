declare interface UUI_Vote_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Voting_Names: UUI_Voting_Pips_C;
    UI_Vote_Icon: UUI_Vote_Icon_C;
    Names_Canvas: UCanvasPanel;
    Icon_Button: UButton;
    Highlight_Img: UBasic_Image_C;
    AnimSelected: UWidgetAnimation;
    AnimNotSelected: UWidgetAnimation;
    VoteOptionInstance: FVoteOptionInstance;
    Index: number;
    OnVoteOptionSelected: FUI_Vote_Entry_COnVoteOptionSelected;
    CenteringProgress: number;
    StartPos: FVector2D;
    SetVotedBy(InNames: string | FString[], InMaxNames: number): void;
    SetCenteringProgress(CenteringProgress: number): void;
    VotingCompleted(InSelected: boolean): void;
    HandleButtonClicked(): void;
    SetData(Window: UWND_Vote_C, Index: number, VoteOptionInstance: FVoteOptionInstance): void;
    BndEvt__UI_Vote_Entry_Icon_Button_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__UI_Vote_Entry_Icon_Button_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__UI_Vote_Entry_Icon_Button_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_UI_Vote_Entry(EntryPoint: number): void;
    OnVoteOptionSelected__DelegateSignature(InVoteOption: FVoteOptionInstance, InIndex: number): void;
}
declare const UUI_Vote_Entry_C: UUI_Vote_Entry_C;

