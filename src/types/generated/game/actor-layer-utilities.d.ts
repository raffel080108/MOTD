declare interface FActorLayer {
    Name: FName;
}
declare const FActorLayer: FActorLayer;

declare interface ULayersBlueprintLibrary extends UBlueprintFunctionLibrary {
    RemoveActorFromLayer(InActor: AActor, Layer: FActorLayer): void;
    GetActors(WorldContextObject: UObject, ActorLayer: FActorLayer): TArray<AActor>;
    AddActorToLayer(InActor: AActor, Layer: FActorLayer): void;
}
declare const ULayersBlueprintLibrary: ULayersBlueprintLibrary;

