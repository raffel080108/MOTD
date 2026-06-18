declare interface UTutorial_Hint_Ammo_C extends UTutorialHintComponent {
    readonly __static_UTutorial_Hint_Ammo_C: {
        ReceiveOnInitialized(): void;
        OnRegisterRCAmmoTutorial(): void;
        ExecuteUbergraph_Tutorial_Hint_Ammo(EntryPoint: number): void;
    };
    readonly __properties_UTutorial_Hint_Ammo_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UTutorial_Hint_Ammo_C['__static_UTutorial_Hint_Ammo_C'] &
        UTutorialHintComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UTutorial_Hint_Ammo_C['__properties_UTutorial_Hint_Ammo_C'] &
        UTutorialHintComponent['__propertyRegistry'];
}

