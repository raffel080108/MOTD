declare interface UUI_FPS_C extends UUserWidget {
    readonly __static_UUI_FPS_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        Construct(): void;
        OnShowFPSChanged(NewValue: boolean): void;
        ExecuteUbergraph_UI_FPS(EntryPoint: number): void;
    };
    readonly __properties_UUI_FPS_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_FPS: UTextBlock;
        Font: FSlateFontInfo;
        Justification: ETextJustify;
        SmoothedDeltaT: number;
    };
    readonly __staticRegistry: 
        UUI_FPS_C['__static_UUI_FPS_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_FPS_C['__properties_UUI_FPS_C'] &
        UUserWidget['__propertyRegistry'];
}

