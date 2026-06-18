declare interface UBasic_Window_CutCorner_C extends UUserWidget {
    readonly __static_UBasic_Window_CutCorner_C: {
        PreConstruct(IsDesignTime: boolean): void;
        SetBackgroundTint(InColorAndOpacity: FLinearColor): void;
        SetColorbarColor(Colorbar_Tint: ENUM_MenuColors): void;
        ExecuteUbergraph_Basic_Window_CutCorner(EntryPoint: number): void;
    };
    readonly __properties_UBasic_Window_CutCorner_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Content: UNamedSlot;
        Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
        Basic_BG_Window: UBasic_BG_CutCorner_C;
        ContentPadding: FMargin;
        BackgroundOpacity: number;
        ColorbarTint: ENUM_MenuColors;
    };
    readonly __staticRegistry: 
        UBasic_Window_CutCorner_C['__static_UBasic_Window_CutCorner_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_Window_CutCorner_C['__properties_UBasic_Window_CutCorner_C'] &
        UUserWidget['__propertyRegistry'];
}

