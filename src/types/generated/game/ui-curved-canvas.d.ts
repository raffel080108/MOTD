declare interface UUI_CurvedCanvas_C extends UUserWidget {
    readonly __static_UUI_CurvedCanvas_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_CurvedCanvas(EntryPoint: number): void;
    };
    readonly __properties_UUI_CurvedCanvas_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Content: UNamedSlot;
    };
    readonly __staticRegistry: 
        UUI_CurvedCanvas_C['__static_UUI_CurvedCanvas_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_CurvedCanvas_C['__properties_UUI_CurvedCanvas_C'] &
        UUserWidget['__propertyRegistry'];
}

