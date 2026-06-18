declare interface UUI_PlayerSpeaking_WithName_C extends UUserWidget {
    readonly __static_UUI_PlayerSpeaking_WithName_C: {
        SetLineVisible(inVisible: boolean): void;
        SetPlayerState(InPlayerState: AFSDPlayerState): void;
        SetIsTalking(IsTalking: boolean, OutTalking: boolean): void;
        SetPlayerName(NewName: string): void;
        Construct(): void;
        OnTalkingChanged(IsTalking: boolean): void;
        ExecuteUbergraph_UI_PlayerSpeaking_WithName(EntryPoint: number): void;
    };
    readonly __properties_UUI_PlayerSpeaking_WithName_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SpeakingIcon: UBasic_Image_C;
        NameLabel: UBasic_Label_C;
        LineBox: UHorizontalBox;
        PlayerState: AFSDPlayerState;
        IsTalking: boolean;
    };
    readonly __staticRegistry: 
        UUI_PlayerSpeaking_WithName_C['__static_UUI_PlayerSpeaking_WithName_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_PlayerSpeaking_WithName_C['__properties_UUI_PlayerSpeaking_WithName_C'] &
        UUserWidget['__propertyRegistry'];
}

