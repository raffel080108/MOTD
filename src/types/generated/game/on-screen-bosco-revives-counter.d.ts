declare interface UOnScreen_BoscoRevivesCounter_C extends UUserWidget {
    readonly __static_UOnScreen_BoscoRevivesCounter_C: {
        SetViewAmmoCounter(ViewAmmo: boolean): void;
        Construct(): void;
        ExecuteUbergraph_OnScreen_BoscoRevivesCounter(EntryPoint: number): void;
    };
    readonly __properties_UOnScreen_BoscoRevivesCounter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        HUD_BoscoRevivesLable: UHUD_BoscoRevivesLable_C;
        HUD_BoscoAmmoRefillsLable: UHUD_BoscoAmmoRefillsLable_C;
    };
    readonly __staticRegistry: 
        UOnScreen_BoscoRevivesCounter_C['__static_UOnScreen_BoscoRevivesCounter_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnScreen_BoscoRevivesCounter_C['__properties_UOnScreen_BoscoRevivesCounter_C'] &
        UUserWidget['__propertyRegistry'];
}

