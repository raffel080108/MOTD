declare interface ABP_FoamRocket_C extends ABP_BoscoAbillityProjectile_C {
    readonly __static_ABP_FoamRocket_C: {
        OnImpacted(PredictedImpact: boolean, HitResult: FHitResult): void;
        ExecuteUbergraph_BP_FoamRocket(EntryPoint: number): void;
    };
    readonly __properties_ABP_FoamRocket_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        GlobCount: number;
        spawned: number;
    };
    readonly __staticRegistry: 
        ABP_FoamRocket_C['__static_ABP_FoamRocket_C'] &
        ABP_BoscoAbillityProjectile_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_FoamRocket_C['__properties_ABP_FoamRocket_C'] &
        ABP_BoscoAbillityProjectile_C['__propertyRegistry'];
}

