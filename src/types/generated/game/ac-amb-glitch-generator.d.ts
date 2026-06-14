declare interface AAC_AMB_GlitchGenerator_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    AMB_GlitchGenerator_MS: UAudioComponent;
    DefaultSceneRoot: USceneComponent;
    StringQueue: FString;
    CurrentIndex: number;
    MultiplierValue: number;
    ReceiveBeginPlay(): void;
    BeginPlayback(): void;
    PlayNextCharacter(): void;
    ExecuteUbergraph_AC_AMB_GlitchGenerator(EntryPoint: number): void;
}
declare const AAC_AMB_GlitchGenerator_C: AAC_AMB_GlitchGenerator_C;

