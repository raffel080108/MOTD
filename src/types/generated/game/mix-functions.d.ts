declare interface UMixFunctions_C extends UBlueprintFunctionLibrary {
    readonly __static_UMixFunctions_C: {
        PushMixAtDistanceForDuration(InSoundMixModifier: USoundMix, Target: AActor, MinDistance: number, MaxDistance: number, duration: number, __WorldContext: UObject): void;
        PopMix(InSoundMixModifier: USoundMix, __WorldContext: UObject): void;
        PopMixAtDistance(InSoundMixModifier: USoundMix, Target: AActor, MinDistance: number, MaxDistance: number, __WorldContext: UObject): void;
        PushMixAtDistance(InSoundMixModifier: USoundMix, Target: AActor, MinDistance: number, MaxDistance: number, __WorldContext: UObject): void;
    };
    readonly __staticRegistry: 
        UMixFunctions_C['__static_UMixFunctions_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

