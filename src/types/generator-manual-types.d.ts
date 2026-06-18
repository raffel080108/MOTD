// Manual Type Overrides 
// Type definitions placed in this file will be skipped when generating file outputs or stubs

// Unreal Engine 5.6
// https://dev.epicgames.com/documentation/unreal-engine/API/Runtime?application_version=5.6

declare interface UObject extends UE4SSLUObject {
    readonly __staticRegistry: object;
    readonly __propertyRegistry: object;
}

/**
 * https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/UWorld?application_version=5.6
 */
declare interface UWorld extends UObject {
    readonly __properties_UWorld: {
        PersistentLevel: ULevel;
        NetDriver: UNetDriver;
        LineBatcher: ULineBatchComponent;
        PersistentLineBatcher: ULineBatchComponent;
        ForegroundLineBatcher: ULineBatchComponent;
        NetworkManager: AGameNetworkManager;
        PhysicsCollisionHandler: UPhysicsCollisionHandler;
        PhysicsQueryHandler: UPhysicsQueryHandler;
        ExtraReferencedObjects: UObject[];
        PerModuleDataObjects: UObject[];
        StreamingLevels: ULevelStreaming[];
        StreamingLevelsToConsider: FStreamingLevelsToConsider;
        ServerStreamingLevelsVisibility: AServerStreamingLevelsVisibility;
        StreamingLevelsPrefix: string;
        LineBatchers: ULineBatchComponent;
        MakingVisibleLevels: ULevel[];
        MakingInvisibleLevels: ULevel[];
        DemoNetDriver: UDemoNetDriver;
        MyParticleEventManager: AParticleEventManager;
        DefaultPhysicsVolume: APhysicsVolume;
        bAreConstraintsDirty: boolean;
        NavigationSystem: UNavigationSystemBase;
        AuthorityGameMode: AGameModeBase;
        GameState: AGameStateBase;
        AISystem: UAISystemBase;
        AvoidanceManager: UAvoidanceManager;
        Levels: ULevel[];
        LevelCollections: FLevelCollection[];
        OwningGameInstance: UGameInstance;
        ParameterCollectionInstances: UMaterialParameterCollectionInstance[];
        CanvasForRenderingToTarget: UCanvas;
        CanvasForDrawMaterialToRenderTarget: UCanvas;
        PhysicsField: UPhysicsFieldComponent;
        ComponentsThatNeedPreEndOfFrameSync: TSet<UActorComponent>;
        ComponentsThatNeedEndOfFrameUpdate: UActorComponent[];
        ComponentsThatNeedEndOfFrameUpdate_OnGameThread: UActorComponent[];
        WorldComposition: UWorldComposition;
        ContentBundleManager: UContentBundleManager;
        PSCPool: FWorldPSCPool;
    }
    readonly __static_UWorld: {
        K2_GetWorldSettings(): AWorldSettings;
        HandleTimelineScrubbed(): void;
        GetDataLayerManager(): UDataLayerManager;
        SpawnActor(actorClass: UClass, location: Partial<FVector>, rotation: Partial<FRotator>): AActor;
    };
    readonly __staticRegistry: 
        UWorld['__static_UWorld'] & 
        UObject['__staticRegistry'];
    readonly __propertyRegistry:
        UWorld['__properties_UWorld'] &
        UObject['__propertyRegistry']
}

/**
 * https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/AssetRegistry/UAssetRegistryHelpers?application_version=5.6
 */
declare interface UAssetRegistryHelpers extends UObject {
    readonly __static_UAssetRegistryHelpers: {
        ToSoftObjectPath(InAssetData: FAssetData): FSoftObjectPath;
        SortingPredicate__DelegateSignature(Left: FAssetData, Right: FAssetData): boolean;
        SortByPredicate(Assets: FAssetData[], SortingPredicate: FSortByPredicateSortingPredicate, SortOrder: EAssetRegistrySortOrder): void;
        SortByAssetName(Assets: FAssetData[], SortOrder: EAssetRegistrySortOrder): void;
        SetFilterTagsAndValues(InFilter: FARFilter, InTagsAndValues: FTagAndValue[]): FARFilter;
        IsValid(InAssetData: FAssetData): boolean
        IsUAsset(InAssetData: FAssetData): boolean;
        IsRedirector(InAssetData: FAssetData): boolean;
        IsAssetLoaded(InAssetData: FAssetData): boolean;
        GetTagValue(InAssetData: FAssetData, InTagName: string, OutTagValue: string): boolean;
        GetFullName(InAssetData: FAssetData): string;
        GetExportTextName(InAssetData: FAssetData): string;
        GetClass(InAssetData: FAssetData): UClass;
        GetBlueprintAssets(InFilter: FARFilter, OutAssetData: FAssetData[]): void;
        GetAssetRegistry(): TScriptInterface<IAssetRegistry>;
        GetAsset(InAssetData: Partial<FAssetData>): UObject; // Fixed Parameters
        FindAssetNativeClass(AssetData: FAssetData): UClass;
        CreateAssetData(InAsset: UObject, bAllowBlueprintClass: boolean): FAssetData;
    };

    readonly __staticRegistry: 
        this['__static_UAssetRegistryHelpers'] & 
        UObject["__staticRegistry"];
        
    readonly __propertyRegistry: UObject["__propertyRegistry"]
}

/** 
 * Not a complete list of functions
 * 
 * https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/CoreUObject/TScriptInterface?application_version=5.6
 **/
declare interface TScriptInterface<T = unknown> {
    readonly __static_TScriptInterface: {
        GetInterface(): T;
        GetObject(): UObject;
    };
}
declare interface TScriptInterface<T = unknown> {
    readonly __staticRegistry: TScriptInterface['__static_TScriptInterface'];
    readonly __propertyRegistry: object;
}
declare const TScriptInterface: TScriptInterface<unknown>;

declare type TMap<K = unknown, V = unknown> = unknown;