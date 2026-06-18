declare interface USCREEN_CharacterSelection_Base_C extends UWindowWidget {
    readonly __static_USCREEN_CharacterSelection_Base_C: {
        Show(): void;
        ExecuteUbergraph_SCREEN_CharacterSelection_Base(EntryPoint: number): void;
        Back__DelegateSignature(): void;
    };
    readonly __properties_USCREEN_CharacterSelection_Base_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Back: FSCREEN_CharacterSelection_Base_CBack;
    };
    readonly __staticRegistry: 
        USCREEN_CharacterSelection_Base_C['__static_USCREEN_CharacterSelection_Base_C'] &
        UWindowWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USCREEN_CharacterSelection_Base_C['__properties_USCREEN_CharacterSelection_Base_C'] &
        UWindowWidget['__propertyRegistry'];
}

