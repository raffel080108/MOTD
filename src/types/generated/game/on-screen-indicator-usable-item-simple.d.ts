declare interface UOnScreenIndicator_UsableItem_Simple_C extends UUserWidget {
    readonly __static_UOnScreenIndicator_UsableItem_Simple_C: {
        Construct(): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        OnItemEquipped(Item: AItem): void;
        PreConstruct(IsDesignTime: boolean): void;
        VisChanged(IsVisible: boolean): void;
        ExecuteUbergraph_OnScreenIndicator_UsableItem_Simple(EntryPoint: number): void;
    };
    readonly __properties_UOnScreenIndicator_UsableItem_Simple_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ProgressBar_1: UProgressBar;
        KeyLabel: UUI_AdvancedLabel_C;
        BasicWindow_BracketSmall: UBasic_HUD_BracketWindowSmall_C;
        Character: APlayerCharacter;
        Item: AItem;
        Aggregator: UUsableAggregator;
    };
    readonly __staticRegistry: 
        UOnScreenIndicator_UsableItem_Simple_C['__static_UOnScreenIndicator_UsableItem_Simple_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnScreenIndicator_UsableItem_Simple_C['__properties_UOnScreenIndicator_UsableItem_Simple_C'] &
        UUserWidget['__propertyRegistry'];
}

