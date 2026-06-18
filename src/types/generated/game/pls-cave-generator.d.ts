declare interface APLS_CaveGenerator_C extends APLS_Base_C {
    readonly __static_APLS_CaveGenerator_C: {
        CreateCaveGraph(): void;
        CreateSpawn(): void;
        ExecuteUbergraph_PLS_CaveGenerator(EntryPoint: number): void;
    };
    readonly __properties_APLS_CaveGenerator_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        APLS_CaveGenerator_C['__static_APLS_CaveGenerator_C'] &
        APLS_Base_C['__staticRegistry'];
    readonly __propertyRegistry: 
        APLS_CaveGenerator_C['__properties_APLS_CaveGenerator_C'] &
        APLS_Base_C['__propertyRegistry'];
}

