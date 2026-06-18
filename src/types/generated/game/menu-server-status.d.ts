declare interface UMenu_ServerStatus_C extends UUserWidget {
    readonly __static_UMenu_ServerStatus_C: {
        Construct(): void;
        ChangeVisibilityOnMission(entered: boolean): void;
        ExecuteUbergraph_Menu_ServerStatus(EntryPoint: number): void;
    };
    readonly __properties_UMenu_ServerStatus_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        WND_MissionBar_BXE: UWND_MissionBar_BXE_C;
        CharSelect_Countdown: ULobby_BarTop_Countdown_C;
    };
    readonly __staticRegistry: 
        UMenu_ServerStatus_C['__static_UMenu_ServerStatus_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UMenu_ServerStatus_C['__properties_UMenu_ServerStatus_C'] &
        UUserWidget['__propertyRegistry'];
}

