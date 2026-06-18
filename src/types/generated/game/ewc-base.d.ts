declare interface UEWC_Base_C extends UEnemyWaveController {
    readonly __static_UEWC_Base_C: {
        PlayWaveMusac(): void;
        PlayEndWaveMusic(): void;
        StopWaveMusac(): void;
        ExecuteUbergraph_EWC_Base(EntryPoint: number): void;
    };
    readonly __properties_UEWC_Base_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        MusicHandle: FMusicHandle;
        MusicLibrary: UMusicLibrary;
    };
    readonly __staticRegistry: 
        UEWC_Base_C['__static_UEWC_Base_C'] &
        UEnemyWaveController['__staticRegistry'];
    readonly __propertyRegistry: 
        UEWC_Base_C['__properties_UEWC_Base_C'] &
        UEnemyWaveController['__propertyRegistry'];
}

