declare interface UHUD_BoscoRevivesLable_C extends UUserWidget {
    readonly __static_UHUD_BoscoRevivesLable_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnReviveCountChangedEvent(ReviveCount: number): void;
        ExecuteUbergraph_HUD_BoscoRevivesLable(EntryPoint: number): void;
    };
    readonly __properties_UHUD_BoscoRevivesLable_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ReviveCountText: UTextBlock;
        Font: FSlateFontInfo;
        Color: FSlateColor;
    };
    readonly __staticRegistry: 
        UHUD_BoscoRevivesLable_C['__static_UHUD_BoscoRevivesLable_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_BoscoRevivesLable_C['__properties_UHUD_BoscoRevivesLable_C'] &
        UUserWidget['__propertyRegistry'];
}

