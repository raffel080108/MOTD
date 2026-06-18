declare interface UITM_PlayerSpeakingIcon_C extends UUserWidget {
    readonly __static_UITM_PlayerSpeakingIcon_C: {
        SetSize(Size: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        OnTalkingChanged(IsTalking: boolean): void;
        SetPlayerState(NewPlayerState: AFSDPlayerState): void;
        Construct(): void;
        ExecuteUbergraph_ITM_PlayerSpeakingIcon(EntryPoint: number): void;
        OnChanged__DelegateSignature(InTalking: boolean): void;
    };
    readonly __properties_UITM_PlayerSpeakingIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SizeBox_Outer: USizeBox;
        Image_486: UImage;
        Icon_Microphone: UImage;
        BG_Host: UImage;
        Size: number;
        PlayerState: AFSDPlayerState;
        OnChanged: FITM_PlayerSpeakingIcon_COnChanged;
        CollapseWhenHidden: boolean;
    };
    readonly __staticRegistry: 
        UITM_PlayerSpeakingIcon_C['__static_UITM_PlayerSpeakingIcon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_PlayerSpeakingIcon_C['__properties_UITM_PlayerSpeakingIcon_C'] &
        UUserWidget['__propertyRegistry'];
}

