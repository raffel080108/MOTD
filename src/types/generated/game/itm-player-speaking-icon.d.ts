declare interface UITM_PlayerSpeakingIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_Outer: USizeBox;
    Image_486: UImage;
    Icon_Microphone: UImage;
    BG_Host: UImage;
    Size: number;
    PlayerState: AFSDPlayerState;
    OnChanged: FITM_PlayerSpeakingIcon_COnChanged;
    CollapseWhenHidden: boolean;
    SetSize(Size: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnTalkingChanged(IsTalking: boolean): void;
    SetPlayerState(NewPlayerState: AFSDPlayerState): void;
    Construct(): void;
    ExecuteUbergraph_ITM_PlayerSpeakingIcon(EntryPoint: number): void;
    OnChanged__DelegateSignature(InTalking: boolean): void;
}
declare const UITM_PlayerSpeakingIcon_C: UITM_PlayerSpeakingIcon_C;

