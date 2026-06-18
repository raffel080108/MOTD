declare interface UHUD_Cursor_Swipe_C extends UUserWidget {
    readonly __static_UHUD_Cursor_Swipe_C: {
        Construct(): void;
        PreConstruct(IsDesignTime: boolean): void;
        OnDamagedEnemy_Event(): void;
        ExecuteUbergraph_HUD_Cursor_Swipe(EntryPoint: number): void;
    };
    readonly __properties_UHUD_Cursor_Swipe_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_351: UTextBlock;
        Lineright2: UImage;
        LineRight: UImage;
        LineLeft_1: UImage;
        Dot: UImage;
    };
    readonly __staticRegistry: 
        UHUD_Cursor_Swipe_C['__static_UHUD_Cursor_Swipe_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Cursor_Swipe_C['__properties_UHUD_Cursor_Swipe_C'] &
        UUserWidget['__propertyRegistry'];
}

