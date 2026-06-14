declare interface UUI_PlayerSpeaking_WithName_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SpeakingIcon: UBasic_Image_C;
    NameLabel: UBasic_Label_C;
    LineBox: UHorizontalBox;
    PlayerState: AFSDPlayerState;
    IsTalking: boolean;
    SetLineVisible(inVisible: boolean): void;
    SetPlayerState(InPlayerState: AFSDPlayerState): void;
    SetIsTalking(IsTalking: boolean, OutTalking: boolean): void;
    SetPlayerName(NewName: string | FString): void;
    Construct(): void;
    OnTalkingChanged(IsTalking: boolean): void;
    ExecuteUbergraph_UI_PlayerSpeaking_WithName(EntryPoint: number): void;
}
declare const UUI_PlayerSpeaking_WithName_C: UUI_PlayerSpeaking_WithName_C;

