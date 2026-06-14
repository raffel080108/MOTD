declare interface UOnScreenIndicator_UsableItem_Simple_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ProgressBar_1: UProgressBar;
    KeyLabel: UUI_AdvancedLabel_C;
    BasicWindow_BracketSmall: UBasic_HUD_BracketWindowSmall_C;
    Character: APlayerCharacter;
    Item: AItem;
    Aggregator: UUsableAggregator;
    Construct(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    OnItemEquipped(Item: AItem): void;
    PreConstruct(IsDesignTime: boolean): void;
    VisChanged(IsVisible: boolean): void;
    ExecuteUbergraph_OnScreenIndicator_UsableItem_Simple(EntryPoint: number): void;
}
declare const UOnScreenIndicator_UsableItem_Simple_C: UOnScreenIndicator_UsableItem_Simple_C;

