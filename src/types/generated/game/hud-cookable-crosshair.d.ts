declare interface UHUD_Cookable_Crosshair_C extends UUserWidget {
    readonly __static_UHUD_Cookable_Crosshair_C: {
        UpdateCookTime(Progress: number): void;
        ExecuteUbergraph_HUD_Cookable_Crosshair(EntryPoint: number): void;
    };
    readonly __properties_UHUD_Cookable_Crosshair_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UHUD_Cookable_Crosshair_C['__static_UHUD_Cookable_Crosshair_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Cookable_Crosshair_C['__properties_UHUD_Cookable_Crosshair_C'] &
        UUserWidget['__propertyRegistry'];
}

