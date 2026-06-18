declare interface ABP_Drop_CamShake_C extends AActor {
    readonly __static_ABP_Drop_CamShake_C: {
        SetStandingDown(IsStandingDown: boolean): void;
        TriggerShakeSequence(): void;
        ExecuteUbergraph_BP_Drop_CamShake(EntryPoint: number): void;
    };
    readonly __properties_ABP_Drop_CamShake_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DefaultSceneRoot: USceneComponent;
    };
    readonly __staticRegistry: 
        ABP_Drop_CamShake_C['__static_ABP_Drop_CamShake_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Drop_CamShake_C['__properties_ABP_Drop_CamShake_C'] &
        AActor['__propertyRegistry'];
}

