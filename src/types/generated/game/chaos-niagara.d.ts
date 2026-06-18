declare interface FChaosDestructionEvent {
    position: FVector;
    Normal: FVector;
    Velocity: FVector;
    AngularVelocity: FVector;
    ExtentMin: number;
    ExtentMax: number;
    ParticleID: number;
    Time: number;
    Type: number;
}

declare interface UNiagaraDataInterfaceChaosDestruction extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceChaosDestruction: {
        ChaosSolverActorSet: AChaosSolverActor[];
        DataSourceType: EDataSourceTypeEnum;
        DataProcessFrequency: number;
        MaxNumberOfDataEntriesToSpawn: number;
        DoSpawn: boolean;
        SpawnMultiplierMinMax: FVector2D;
        SpawnChance: number;
        ImpulseToSpawnMinMax: FVector2D;
        SpeedToSpawnMinMax: FVector2D;
        MassToSpawnMinMax: FVector2D;
        ExtentMinToSpawnMinMax: FVector2D;
        ExtentMaxToSpawnMinMax: FVector2D;
        VolumeToSpawnMinMax: FVector2D;
        SolverTimeToSpawnMinMax: FVector2D;
        SurfaceTypeToSpawn: number;
        LocationFilteringMode: ELocationFilteringModeEnum;
        LocationXToSpawn: ELocationXToSpawnEnum;
        LocationXToSpawnMinMax: FVector2D;
        LocationYToSpawn: ELocationYToSpawnEnum;
        LocationYToSpawnMinMax: FVector2D;
        LocationZToSpawn: ELocationZToSpawnEnum;
        LocationZToSpawnMinMax: FVector2D;
        TrailMinSpeedToSpawn: number;
        DataSortingType: EDataSortTypeEnum;
        bGetExternalCollisionData: boolean;
        DoSpatialHash: boolean;
        SpatialHashVolumeMin: FVector;
        SpatialHashVolumeMax: FVector;
        SpatialHashVolumeCellSize: FVector;
        MaxDataPerCell: number;
        bApplyMaterialsFilter: boolean;
        ChaosBreakingMaterialSet: UPhysicalMaterial[];
        bGetExternalBreakingData: boolean;
        bGetExternalTrailingData: boolean;
        RandomPositionMagnitudeMinMax: FVector2D;
        InheritedVelocityMultiplier: number;
        RandomVelocityGenerationType: ERandomVelocityGenerationTypeEnum;
        RandomVelocityMagnitudeMinMax: FVector2D;
        SpreadAngleMax: number;
        VelocityOffsetMin: FVector;
        VelocityOffsetMax: FVector;
        FinalVelocityMagnitudeMinMax: FVector2D;
        MaxLatency: number;
        DebugType: EDebugTypeEnum;
        LastSpawnedPointID: number;
        LastSpawnTime: number;
        SolverTime: number;
        TimeStampOfLastProcessedData: number;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceChaosDestruction['__properties_UNiagaraDataInterfaceChaosDestruction'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceGeometryCollection extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceGeometryCollection: {
        SourceMode: ENDIGeometryCollection_SourceMode;
        DefaultGeometryCollection: UGeometryCollection;
        GeometryCollectionActor: TSoftObjectPtr<AGeometryCollectionActor>;
        SourceComponent: UGeometryCollectionComponent;
        GeometryCollectionUserParameter: FNiagaraUserParameterBinding;
        bIncludeIntermediateBones: boolean;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceGeometryCollection['__properties_UNiagaraDataInterfaceGeometryCollection'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfacePhysicsField extends UNiagaraDataInterface {
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterface['__propertyRegistry'];
}

