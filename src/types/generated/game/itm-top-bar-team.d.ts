declare interface UITM_TopBar_Team_C extends UUserWidget {
    readonly __static_UITM_TopBar_Team_C: {
        Update(): void;
        Construct(): void;
        OnPlayerJoined_Event(PlayerState: AFSDPlayerState): void;
        OnPlayerLeave_Event(PlayerState: AFSDPlayerState): void;
        ExecuteUbergraph_ITM_TopBar_Team(EntryPoint: number): void;
    };
    readonly __properties_UITM_TopBar_Team_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Members_Box: UStackBox;
        MemberWidgets: UITM_TopBar_Team_Member_C[];
    };
    readonly __staticRegistry: 
        UITM_TopBar_Team_C['__static_UITM_TopBar_Team_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_TopBar_Team_C['__properties_UITM_TopBar_Team_C'] &
        UUserWidget['__propertyRegistry'];
}

