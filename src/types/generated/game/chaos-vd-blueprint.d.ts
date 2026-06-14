declare interface UChaosVDRuntimeBlueprintLibrary extends UBlueprintFunctionLibrary {
    RecordDebugDrawVector(WorldContext: UObject, InStartLocation: FVector, InVector: FVector, Tag: FName, Color: FLinearColor): void;
    RecordDebugDrawSphere(WorldContext: UObject, InCenter: FVector, Radius: number, Tag: FName, Color: FLinearColor): void;
    RecordDebugDrawLine(WorldContext: UObject, InStartLocation: FVector, InEndLocation: FVector, Tag: FName, Color: FLinearColor): void;
    RecordDebugDrawBox(WorldContext: UObject, InBox: FBox, Tag: FName, Color: FLinearColor): void;
}
declare const UChaosVDRuntimeBlueprintLibrary: UChaosVDRuntimeBlueprintLibrary;

