declare interface UWBP_RunMap_RunDepth_C extends UUserWidget {
    readonly __static_UWBP_RunMap_RunDepth_C: {
        SetRun(InRun: URun): void;
        SetDepth(Depth: ERunDepth): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WBP_RunMap_RunDepth(EntryPoint: number): void;
    };
    readonly __properties_UWBP_RunMap_RunDepth_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DepthText: UTextBlock;
        DotImages: UImage[];
    };
    readonly __staticRegistry: 
        UWBP_RunMap_RunDepth_C['__static_UWBP_RunMap_RunDepth_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_RunMap_RunDepth_C['__properties_UWBP_RunMap_RunDepth_C'] &
        UUserWidget['__propertyRegistry'];
}

