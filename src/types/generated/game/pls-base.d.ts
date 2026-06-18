declare interface APLS_Base_C extends AProceduralSetup {
    readonly __static_APLS_Base_C: {
        SetupRockMaterialImposter(): void;
        ShouldSpawnInGameActors(SpawnInGameActors: boolean): void;
        EnsureSafelandingsite(): void;
        GetProceduralController(): UProceduralController;
        SpawnCriticalItems(pass: ECriticalItemPass): void;
        HasSelectedCharacter(): boolean;
        CallGenerationComplete(pass: number, PLS_Pass: PLS_Passes): void;
        PlayMusicAndAmbient(musicIndex: number): void;
        SaveInitialState(): void;
        CreateCaveGraph(): void;
        GetRandomRoom(Rooms: URoomGenerator[], RemoveRoom: boolean, Room: URoomGenerator): void;
        OnLoaded_11827D59481E498DEC10999DAE2915BF(Loaded: UClass): void;
        OnLoaded_C0B2FCB247E1A2F8766E5E93EBF80DF8(Loaded: UClass): void;
        OnLoaded_98788FFF4D99391693760DBF1DF7594A(Loaded: UClass): void;
        ReceiveBeginPlay(): void;
        BaseLayerCommitDone(): void;
        FinalCommitDone(): void;
        Generate_Graph(): void;
        Generate_CriticalSmallPass(): void;
        Generate_Debris_PreLarge(): void;
        Generate_MainPass(): void;
        Generate_InstantCarvers(): void;
        GenerateLandscape(): void;
        Generate_Resources(): void;
        Generate_Debris_Small(): void;
        BeginLiveGeneration(): void;
        OnPLSDataRecieved(): void;
        AddRoomToInitialState(RoomNode: FRoomNode): void;
        CreateGraphSecondPass(): void;
        Generate_Tunnels(): void;
        StartGenerationOnClient(client: AFSDPlayerController): void;
        GenerateLandscapeFromData(Seed: number, Rooms: FRoomNode[], Obstacles: FPathObstacle[]): void;
        CarveTunnels(): void;
        Generate_PrePlacement(): void;
        Generate_Pass_0_Client(): void;
        OnCarverDataRecieved(pass: EDebrisItemPass): void;
        Generate_Constructions(): void;
        Generate_Missing_Resources(): void;
        Generate_CriticalLargePass(): void;
        Generate_CriticalLargePass_Client(): void;
        StartMusicAndAmbient(Music: number): void;
        Generate_PostDebris(): void;
        Generate_PostDebris_Client(): void;
        Generate_Debris_Large(): void;
        Generate_Dirt(): void;
        CreateSpawnLate(): void;
        OnDirtCarved(InDirtPoints: FVector[]): void;
        Generate_Dirt_Client(): void;
        Generate_DebrisLarge_Client(): void;
        Generate_Decoration(): void;
        Generate_Decoration_Client(): void;
        CreateSpawn(): void;
        ExecuteUbergraph_PLS_Base(EntryPoint: number): void;
        CompletedGenerationPass__DelegateSignature(pass: number, PLS_Pass: PLS_Passes): void;
    };
    readonly __properties_APLS_Base_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DefaultSceneRoot: USceneComponent;
        OutlineMaterial: UMaterial;
        CompletedGenerationPass: FPLS_Base_CCompletedGenerationPass;
        MusicOverride: UMusicLibrary;
        SpawnedStartTransport: ATeamTransport;
    };
    readonly __staticRegistry: 
        APLS_Base_C['__static_APLS_Base_C'] &
        AProceduralSetup['__staticRegistry'];
    readonly __propertyRegistry: 
        APLS_Base_C['__properties_APLS_Base_C'] &
        AProceduralSetup['__propertyRegistry'];
}

