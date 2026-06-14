declare interface UMixFunctions_C extends UBlueprintFunctionLibrary {
    PushMixAtDistanceForDuration(InSoundMixModifier: USoundMix, Target: AActor, MinDistance: number, MaxDistance: number, duration: number, __WorldContext: UObject): void;
    PopMix(InSoundMixModifier: USoundMix, __WorldContext: UObject): void;
    PopMixAtDistance(InSoundMixModifier: USoundMix, Target: AActor, MinDistance: number, MaxDistance: number, __WorldContext: UObject): void;
    PushMixAtDistance(InSoundMixModifier: USoundMix, Target: AActor, MinDistance: number, MaxDistance: number, __WorldContext: UObject): void;
}
declare const UMixFunctions_C: UMixFunctions_C;

