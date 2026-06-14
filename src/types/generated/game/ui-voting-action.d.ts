declare interface UUI_Voting_Action_C extends UUserWidget {
    Root_Overlay: UOverlay;
    Icon_Image: UBasic_Image_C;
    Header_Label: UBasic_Label_C;
    Description_RT: URichTextBlock;
    FromVector(RiskVector: URiskVector): void;
    FromAction(InAction: UVoteOptionAction): void;
    SetData(InType: EVoteOptionActionType, InHeader: FText, InDescription: FText, InIcon: UTexture2D, InPersistent: boolean): void;
}
declare const UUI_Voting_Action_C: UUI_Voting_Action_C;

