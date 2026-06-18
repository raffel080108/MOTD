declare interface FActorLayer {
    Name: string;
}

declare interface ULayersBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_ULayersBlueprintLibrary: {
        RemoveActorFromLayer(InActor: AActor, Layer: FActorLayer): void;
        GetActors(WorldContextObject: UObject, ActorLayer: FActorLayer): AActor[];
        AddActorToLayer(InActor: AActor, Layer: FActorLayer): void;
    };
    readonly __staticRegistry: 
        ULayersBlueprintLibrary['__static_ULayersBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

