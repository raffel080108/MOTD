declare interface UHUD_BoscoAmmoRefillsLable_C extends UUserWidget {
    readonly __static_UHUD_BoscoAmmoRefillsLable_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_HUD_BoscoAmmoRefillsLable(EntryPoint: number): void;
    };
    readonly __properties_UHUD_BoscoAmmoRefillsLable_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        AmmorRefillCounterText: UTextBlock;
        Font: FSlateFontInfo;
        Color: FSlateColor;
    };
    readonly __staticRegistry: 
        UHUD_BoscoAmmoRefillsLable_C['__static_UHUD_BoscoAmmoRefillsLable_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_BoscoAmmoRefillsLable_C['__properties_UHUD_BoscoAmmoRefillsLable_C'] &
        UUserWidget['__propertyRegistry'];
}

