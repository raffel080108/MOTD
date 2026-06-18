declare interface UWND_SpaceRig_Chat_C extends UUserWidget {
    readonly __static_UWND_SpaceRig_Chat_C: {
        Construct(): void;
        RestoreChat(): void;
        ExecuteUbergraph_WND_SpaceRig_Chat(EntryPoint: number): void;
    };
    readonly __properties_UWND_SpaceRig_Chat_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        HUD_Chat: UHUD_Chat_C;
    };
    readonly __staticRegistry: 
        UWND_SpaceRig_Chat_C['__static_UWND_SpaceRig_Chat_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWND_SpaceRig_Chat_C['__properties_UWND_SpaceRig_Chat_C'] &
        UUserWidget['__propertyRegistry'];
}

