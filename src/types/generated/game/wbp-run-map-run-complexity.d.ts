declare interface UWBP_RunMap_RunComplexity_C extends UUserWidget {
    readonly __static_UWBP_RunMap_RunComplexity_C: {
        UpdateFromRun(InRun: URun): void;
        SetNumberOfDots(Amount: number): void;
        ShowLocked(IsLocked: boolean): void;
        SetComplexity(Complexity: UStageComplexity): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WBP_RunMap_RunComplexity(EntryPoint: number): void;
    };
    readonly __properties_UWBP_RunMap_RunComplexity_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Text: UTextBlock;
        LockedOverlay: UOverlay;
        DotMarker: UITM_MisSel_DotMarker_CaveDifficulty_C;
        DividerImage: UImage;
        ShowText: boolean;
        HideDots: boolean;
    };
    readonly __staticRegistry: 
        UWBP_RunMap_RunComplexity_C['__static_UWBP_RunMap_RunComplexity_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_RunMap_RunComplexity_C['__properties_UWBP_RunMap_RunComplexity_C'] &
        UUserWidget['__propertyRegistry'];
}

