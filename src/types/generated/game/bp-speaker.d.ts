declare interface ABP_Speaker_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    JukeBox_Random_Cue: UAudioComponent;
    SM_Speaker: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    Scale: FVector;
    ReceiveBeginPlay(): void;
    ScaleSpeaker(Scale: FVector): void;
    LoadAndPlay(Song: USoundBase): void;
    FadeOutMusic(duration: number): void;
    FadeInMuic(duration: number): void;
    ExecuteUbergraph_BP_Speaker(EntryPoint: number): void;
}
declare const ABP_Speaker_C: ABP_Speaker_C;

