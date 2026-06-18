declare interface UChaosVDRuntimeBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UChaosVDRuntimeBlueprintLibrary: {
        RecordDebugDrawVector(WorldContext: UObject, InStartLocation: FVector, InVector: FVector, Tag: string, Color: FLinearColor): void;
        RecordDebugDrawSphere(WorldContext: UObject, InCenter: FVector, Radius: number, Tag: string, Color: FLinearColor): void;
        RecordDebugDrawLine(WorldContext: UObject, InStartLocation: FVector, InEndLocation: FVector, Tag: string, Color: FLinearColor): void;
        RecordDebugDrawBox(WorldContext: UObject, InBox: FBox, Tag: string, Color: FLinearColor): void;
    };
    readonly __staticRegistry: 
        UChaosVDRuntimeBlueprintLibrary['__static_UChaosVDRuntimeBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

