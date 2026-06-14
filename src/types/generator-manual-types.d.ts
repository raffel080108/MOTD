// Manual Type Overrides 
// Type definitions placed in this file will be skipped when generating file outputs or stubs


// UE4SS 
// https://docs.ue4ss.com/dev/lua-api.html

/**
 * Boolean indicating if the ProcessEvent hook is available.
 * 
 * https://docs.ue4ss.com/dev/lua-api/global-functions/delayedactions.html#processeventavailable
 */
declare var ProcessEventAvailable: boolean;

/**
 * Boolean indicating if the EngineTick hook is available.
 * 
 * https://docs.ue4ss.com/dev/lua-api/global-functions/delayedactions.html#enginetickavailable
 */
declare var EngineTickAvailable: boolean;

/**
 * The `PropertyTypes` table contains type information for Unreal Engine properties.
 * This is primarily used with the {@link RegisterCustomProperty} function.
 */
declare interface PropertyTypes {
    ObjectProperty: CustomPropertyInfo;
    Int8Property: CustomPropertyInfo;
    Int16Property: CustomPropertyInfo;
    IntProperty: CustomPropertyInfo;
    Int64Property: CustomPropertyInfo;
    NameProperty: CustomPropertyInfo;
    FloatProperty: CustomPropertyInfo;
    StrProperty: CustomPropertyInfo;
    ByteProperty: CustomPropertyInfo;
    BoolProperty: CustomPropertyInfo;
    ArrayProperty: CustomPropertyInfo;
    MapProperty: CustomPropertyInfo;
    StructProperty: CustomPropertyInfo;
    ClassProperty: CustomPropertyInfo;
    WeakObjectProperty: CustomPropertyInfo;
    EnumProperty: CustomPropertyInfo;
    TextProperty: CustomPropertyInfo;
    DelegateProperty: CustomPropertyInfo;
    MulticastDelegateProperty: CustomPropertyInfo;
    MulticastInlineDelegateProperty: CustomPropertyInfo;
    MulticastSparseDelegateProperty: CustomPropertyInfo;
}
declare var PropertyTypes: PropertyTypes;

declare interface RemoteUnrealParam<T = any> {
    get(): T;
    set(NewValue: T): void;
    type(): 'RemoteUnrealParam';
}
declare const RemoteUnrealParam: RemoteUnrealParam<any>;

/**
 * Registers a callback that will get called before UEngine::LoadMap is called.
 * 
 * https://docs.ue4ss.com/dev/lua-api.html?highlight=registerloadmapprehook#global-functions
 */
declare interface RegisterLoadMapPreHook {
    (Callback: (Engine: RemoteUnrealParam<UEngine>, WorldConext: RemoteUnrealParam<FWorldContext>, URL: RemoteUnrealParam<FURL>, PendingGame: RemoteUnrealParam<UPendingNetGame>, Error: RemoteUnrealParam<FString>) => void): void;
}
declare let RegisterLoadMapPreHook: RegisterLoadMapPreHook;

/**
 * Registers a callback that will get called after UEngine::LoadMap is called.
 * 
 * https://docs.ue4ss.com/dev/lua-api.html?highlight=registerloadmapposthook#global-functions
 */
declare interface RegisterLoadMapPostHook {
    (Callback: (Engine: RemoteUnrealParam<UEngine>, WorldConext: RemoteUnrealParam<FWorldContext>, URL: RemoteUnrealParam<FURL>, PendingGame: RemoteUnrealParam<UPendingNetGame>, Error: RemoteUnrealParam<FString>) => void): void;
}
declare let RegisterLoadMapPostHook: RegisterLoadMapPostHook;

/**
 * https://docs.ue4ss.com/dev/lua-api/global-functions/registerhook.html#registerhook
 */
declare interface RegisterHook {
    (UFunctionName: string, Callback: (self: RemoteUnrealParam<UObject>, ...args: RemoteUnrealParam<any>[]) => any): number; // Fixed callback parameters
}
declare let RegisterHook: RegisterHook;

/**
 * https://docs.ue4ss.com/dev/lua-api/global-functions/staticfindobject.html#staticfindobject
 */
declare interface StaticFindObject {
    (ObjectName: string): UObject | UClass | AActor;
    (Class: UClass | undefined, InOuter: UObject | undefined, ObjectName: string, ExactClass: boolean | undefined): UObject | UClass | AActor; // Fixed return types
}
declare let StaticFindObject: StaticFindObject;

/**
 * https://docs.ue4ss.com/dev/lua-api/global-functions/findfirstof.html#findfirstof
 */
declare interface FindFirstOf {
    (ShortClassName: string): UObject | AActor | undefined; // Fixed return types
}
declare let FindFirstOf: FindFirstOf;

/**
 * https://docs.ue4ss.com/dev/lua-api/global-functions/findallof.html#findallof
 */
declare interface FindAllOf {
    (ShortClassName: string): ((UObject | AActor)[] | undefined); // Fixed return types
}
declare let FindAllOf: FindAllOf;

/**
 * https://docs.ue4ss.com/dev/lua-api/global-functions/notifyonnewobject.html#notifyonnewobject
 */
declare interface NotifyOnNewObject {
    (UClassName: string, Callback: (constructedObject: UObject) => void): void; // Fixed callback parameters
}
declare let NotifyOnNewObject: NotifyOnNewObject;

declare interface UObject extends RemoteObject {
    __index(MemberVariableName: string): any;
    __newindex(MemberVariableName: string, NewValue: any): void;
    GetFullName(): string;
    GetFName(): FName;
    GetAddress(): number;
    GetClass(): UClass;
    GetOuter(): UObject;
    IsAnyClass(): boolean;
    Reflection(): UObjectReflection;
    GetPropertyValue(MemberVariableName: string): any;
    SetPropertyValue(MemberVariableName: string, NewValue: any): void;
    IsClass(): boolean;
    GetWorld(): UWorld;
    CallFunction(func: UFunction, ...args: any[]): void;
    IsA(Class: UClass): boolean;
    IsA(FullClassName: string): boolean; // Added function reference
    HasAllFlags(FlagsToCheck: EObjectFlags): boolean;
    HasAnyFlags(FlagsToCheck: EObjectFlags): boolean;
    HasAnyInternalFlags(InternalFlagsToCheck: EInternalObjectFlags): boolean;
    ProcessConsoleExec(Cmd: string, Reserved: void, Executor: UObject): void;
    type(): string;
}
declare const UObject: UObject;

/**
 * Represents a single-cast delegate property in Unreal Engine
 */
declare interface DelegateProperty {
    Object: UObject;
    FunctionName: FName;
}

/**
 * Represents a multicast inline delegate property in Unreal Engine
 * 
 * **Notes**
 * - Accessing `Object.PropertyName` for a delegate property returns a property wrapper object, not the delegate values
 * - The container object is implicitly stored in the wrapper, so you don’t need to pass it to methods
 */
declare interface MulticastDelegateProperty extends UObject {
    Add(targetObject: UObject, functionName: FName | string): void;
    Remove(targetObject: UObject, functionName: FName | string): void;
    Clear(): void;
    GetBindings(): DelegateProperty[] | undefined;
    Broadcast(...args: any): void;
}

/**
 * Represents a multicast sparse delegate property in Unreal Engine
 * 
 * Despite the different storage mechanism, the API is identical to {@link MulticastDelegateProperty}.
 * 
 * **Notes**
 * - Accessing `Object.PropertyName` for a sparse delegate property returns a property wrapper object, not the delegate values
 * - The container object is implicitly stored in the wrapper, so you don’t need to pass it to methods
 * - Storage mechanism is transparent to Lua - the API is identical to inline multicast delegates
 * - Common example: `Actor.OnEndPlay` is a `MulticastSparseDelegateProperty`
 */
declare interface MulticastSparseDelegateProperty extends MulticastDelegateProperty {

}

interface FileSystemObjectMetaData {
    __name: string;
    __absolute_path: string;
    __files: Record<number, FileSystemObject>;
}

interface FileSystemObjectSubDirectories {
    [directoryName: string]: FileSystemObject;
}

declare type FileSystemObject = FileSystemObjectMetaData & FileSystemObjectSubDirectories;

/**
 * https://docs.ue4ss.com/dev/lua-api/global-functions/iterategamedirectories.html#iterategamedirectories
 */
declare interface IterateGameDirectories {
    (): FileSystemObject;
}
declare const IterateGameDirectories: IterateGameDirectories;

// Unreal Engine 5.6
// https://dev.epicgames.com/documentation/unreal-engine/API/Runtime?application_version=5.6

/**
 * https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Core/TArray?application_version=5.6
 */
declare interface TArray<T = any> {
    GetArrayAddress(): number;
    GetArrayNum(): number;
    GetArrayMax(): number;
    GetArrayDataAddress(): number;
    Empty(): void;
    ForEach(Callback?: (index: number, element: RemoteUnrealParam<T>) => void | true): void; // Adjusted
}
declare let TArray: TArray<any>;

/**
 * https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/UWorld?application_version=5.6
 */
declare interface UWorld extends UObject {
    PersistentLevel: ULevel;
    NetDriver: UNetDriver;
    LineBatcher: ULineBatchComponent;
    PersistentLineBatcher: ULineBatchComponent;
    ForegroundLineBatcher: ULineBatchComponent;
    NetworkManager: AGameNetworkManager;
    PhysicsCollisionHandler: UPhysicsCollisionHandler;
    PhysicsQueryHandler: UPhysicsQueryHandler;
    ExtraReferencedObjects: TArray<UObject>;
    PerModuleDataObjects: TArray<UObject>;
    StreamingLevels: TArray<ULevelStreaming>;
    StreamingLevelsToConsider: FStreamingLevelsToConsider;
    ServerStreamingLevelsVisibility: AServerStreamingLevelsVisibility;
    StreamingLevelsPrefix: FString;
    LineBatchers: ULineBatchComponent;
    MakingVisibleLevels: TArray<ULevel>;
    MakingInvisibleLevels: TArray<ULevel>;
    DemoNetDriver: UDemoNetDriver;
    MyParticleEventManager: AParticleEventManager;
    DefaultPhysicsVolume: APhysicsVolume;
    bAreConstraintsDirty: boolean;
    NavigationSystem: UNavigationSystemBase;
    AuthorityGameMode: AGameModeBase;
    GameState: AGameStateBase;
    AISystem: UAISystemBase;
    AvoidanceManager: UAvoidanceManager;
    Levels: TArray<ULevel>;
    LevelCollections: TArray<FLevelCollection>;
    OwningGameInstance: UGameInstance;
    ParameterCollectionInstances: TArray<UMaterialParameterCollectionInstance>;
    CanvasForRenderingToTarget: UCanvas;
    CanvasForDrawMaterialToRenderTarget: UCanvas;
    PhysicsField: UPhysicsFieldComponent;
    ComponentsThatNeedPreEndOfFrameSync: TSet<UActorComponent>;
    ComponentsThatNeedPreEndOfFrameSync_AsyncTick: TSet<UActorComponent>;
    ComponentsThatNeedEndOfFrameUpdate: TArray<UActorComponent>;
    ComponentsThatNeedEndOfFrameUpdate_AsyncTick: TArray<UActorComponent>;
    ComponentsThatNeedEndOfFrameUpdate_OnGameThread: TArray<UActorComponent>;
    ComponentsThatNeedEndOfFrameMarkRenderStateDirty: TArray<UActorComponent>;
    WorldComposition: UWorldComposition;
    ContentBundleManager: UContentBundleManager;
    PSCPool: FWorldPSCPool;
    K2_GetWorldSettings(): AWorldSettings;
    HandleTimelineScrubbed(): void;
    GetDataLayerManager(): UDataLayerManager;
    SpawnActor(actorClass: UClass, location: Partial<FVector>, rotation: Partial<FRotator>): AActor; // Added function reference
}
declare let UWorld: UWorld;

/**
 * https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/AssetRegistry/UAssetRegistryHelpers?application_version=5.6
 */
declare interface UAssetRegistryHelpers extends UObject {
    ToSoftObjectPath(InAssetData: FAssetData): FSoftObjectPath;
    SortingPredicate__DelegateSignature(Left: FAssetData, Right: FAssetData): boolean;
    SortByPredicate(Assets: TArray<FAssetData>, SortingPredicate: FSortByPredicateSortingPredicate, SortOrder: EAssetRegistrySortOrder): void;
    SortByAssetName(Assets: TArray<FAssetData>, SortOrder: EAssetRegistrySortOrder): void;
    SetFilterTagsAndValues(InFilter: FARFilter, InTagsAndValues: TArray<FTagAndValue>): FARFilter;
    IsValid(InAssetData: FAssetData): boolean;
    IsUAsset(InAssetData: FAssetData): boolean;
    IsRedirector(InAssetData: FAssetData): boolean;
    IsAssetLoaded(InAssetData: FAssetData): boolean;
    GetTagValue(InAssetData: FAssetData, InTagName: FName, OutTagValue: FString): boolean;
    GetFullName(InAssetData: FAssetData): FString;
    GetExportTextName(InAssetData: FAssetData): FString;
    GetDerivedClassAssetData(InBaseClasses: TArray<FTopLevelAssetPath>, OutDerivedClassAssetData: TArray<FAssetData>): void;
    GetClass(InAssetData: FAssetData): UClass;
    GetBlueprintAssets(InFilter: FARFilter, OutAssetData: TArray<FAssetData>): void;
    GetAssetRegistry(): TScriptInterface<IAssetRegistry>;
    GetAsset(InAssetData: Partial<FAssetData>): UObject; // Fixed Parameters
    FindAssetNativeClass(AssetData: FAssetData): UClass;
    CreateAssetData(InAsset: UObject, bAllowBlueprintClass: boolean): FAssetData;
    GetFullName(): string;
    GetClass(): UClass;
    IsValid(): boolean;
    GetFullName(): string;
    GetClass(): UClass;
    IsValid(): boolean;
}
declare const UAssetRegistryHelpers: UAssetRegistryHelpers;

declare type int16 = number;
declare type int64 = number;
declare type int8 = number;
declare type uint16 = number;
declare type uint32 = number;
declare type uint64 = number;
declare type uint8 = number;

/** 
 * Not a complete list of functions
 * 
 * https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Core/TWeakObjectPtr?application_version=5.6
 **/
declare type TWeakObjectPtr<T = any> = {
    Get(): T;
};

/** 
 * Not a complete list of functions
 * 
 * https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/CoreUObject/TScriptInterface?application_version=5.6
 **/
declare interface TScriptInterface<T = any> extends FScriptInterface {
    GetInterface(): T;
    GetObject(): UObject;
}
declare const TScriptInterface: TScriptInterface<any>;