declare interface ABP_ReturnMarker_C extends ATimerRewinderGhost {
    readonly __static_ABP_ReturnMarker_C: {
        ReceiveBeginPlay(): void;
        ReceiveTick(DeltaSeconds: number): void;
        ExecuteUbergraph_BP_ReturnMarker(EntryPoint: number): void;
    };
    readonly __properties_ABP_ReturnMarker_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        PointLight: UPointLightComponent;
        SK_BACKTRACKER_BACKPACK: USkeletalMeshComponent;
        NS_ReturnMarker_Active: UNiagaraComponent;
        BackpackStartZ_Location: number;
    };
    readonly __staticRegistry: 
        ABP_ReturnMarker_C['__static_ABP_ReturnMarker_C'] &
        ATimerRewinderGhost['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_ReturnMarker_C['__properties_ABP_ReturnMarker_C'] &
        ATimerRewinderGhost['__propertyRegistry'];
}

