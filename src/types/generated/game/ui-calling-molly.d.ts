declare interface UUI_CallingMolly_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    MollySize: USizeBox;
    Molly_Image: UBasic_Image_C;
    AnimShow: UWidgetAnimation;
    AnimPing: UWidgetAnimation;
    Size: number;
    Donkey: AMolly;
    PlayerState: AFSDPlayerState;
    IsIconVisible: boolean;
    TimeoutHandle: FTimerHandle;
    GetIsPlayerCalling(OutIsCalling: boolean): void;
    SetDonkey(InDonkey: AMolly): void;
    SetPlayerState(InPlayerState: APlayerState): void;
    OnDonkeyChanged(InDonkey: AMolly): void;
    SetIconVisible(inVisible: boolean): void;
    OnAnimStarted(): void;
    OnAnimFinished(): void;
    OnCalledByChanged(PlayerCharacter: APlayerCharacter): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnTimeOut(): void;
    PingIcon(): void;
    OnPingFinished(): void;
    ExecuteUbergraph_UI_CallingMolly(EntryPoint: number): void;
}
declare const UUI_CallingMolly_C: UUI_CallingMolly_C;

