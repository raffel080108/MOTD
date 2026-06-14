declare interface ABP_DLC_Audio_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    MediaSound: UMediaSoundComponent;
    DefaultSceneRoot: USceneComponent;
    FadeIn_AudioScale_D73C76464EAD5A69C208C4917A2DBA68: number;
    FadeIn__Direction_D73C76464EAD5A69C208C4917A2DBA68: ETimelineDirection;
    FadeIn: UTimelineComponent;
    Playing: boolean;
    FadeIn__FinishedFunc(): void;
    FadeIn__UpdateFunc(): void;
    BeginAudio(InMediaPlayer: UMediaPlayer): void;
    EndAudio(): void;
    ExecuteUbergraph_BP_DLC_Audio(EntryPoint: number): void;
}
declare const ABP_DLC_Audio_C: ABP_DLC_Audio_C;

