declare interface UTutorial_Hint_Losing_C extends UTutorialHintComponent {
    readonly __static_UTutorial_Hint_Losing_C: {
        ReceiveOnInitialized(): void;
        TriggerHintLosing(): void;
        ExecuteUbergraph_Tutorial_Hint_Losing(EntryPoint: number): void;
    };
    readonly __properties_UTutorial_Hint_Losing_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        AccumilatedDamage: number;
        TotalDamageBeforeShowingHint: number;
        Drilldozer: AEscortMule;
        DrilldozerHealth: UFriendlyHealthComponent;
    };
    readonly __staticRegistry: 
        UTutorial_Hint_Losing_C['__static_UTutorial_Hint_Losing_C'] &
        UTutorialHintComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UTutorial_Hint_Losing_C['__properties_UTutorial_Hint_Losing_C'] &
        UTutorialHintComponent['__propertyRegistry'];
}

