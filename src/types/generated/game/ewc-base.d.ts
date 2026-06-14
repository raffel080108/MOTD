declare interface UEWC_Base_C extends UEnemyWaveController {
    UberGraphFrame: FPointerToUberGraphFrame;
    MusicHandle: FMusicHandle;
    MusicLibrary: UMusicLibrary;
    PlayWaveMusac(): void;
    PlayEndWaveMusic(): void;
    StopWaveMusac(): void;
    ExecuteUbergraph_EWC_Base(EntryPoint: number): void;
}
declare const UEWC_Base_C: UEWC_Base_C;

