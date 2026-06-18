declare interface ABP_Bosco_FoamGlob_C extends APRJ_Foam_C {
    readonly __static_ABP_Bosco_FoamGlob_C: {
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_Bosco_FoamGlob(EntryPoint: number): void;
    };
    readonly __properties_ABP_Bosco_FoamGlob_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        ABP_Bosco_FoamGlob_C['__static_ABP_Bosco_FoamGlob_C'] &
        APRJ_Foam_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Bosco_FoamGlob_C['__properties_ABP_Bosco_FoamGlob_C'] &
        APRJ_Foam_C['__propertyRegistry'];
}

