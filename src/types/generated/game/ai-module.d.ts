declare interface AAIController extends AController {
    readonly __static_AAIController: {
        UseBlackboard(BlackboardAsset: UBlackboardData, BlackboardComponent: UBlackboardComponent): boolean;
        UnclaimTaskResource(ResourceClass: TSubclassOf<UGameplayTaskResource>): void;
        SetPathFollowingComponent(NewPFComponent: UPathFollowingComponent): void;
        SetMoveBlockDetection(bEnable: boolean): void;
        RunBehaviorTree(BTAsset: UBehaviorTree): boolean;
        OnUsingBlackBoard(BlackboardComp: UBlackboardComponent, BlackboardAsset: UBlackboardData): void;
        OnGameplayTaskResourcesClaimed(NewlyClaimed: FGameplayResourceSet, FreshlyReleased: FGameplayResourceSet): void;
        MoveToLocation(Dest: FVector, AcceptanceRadius: number, bStopOnOverlap: boolean, bUsePathfinding: boolean, bProjectDestinationToNavigation: boolean, bCanStrafe: boolean, FilterClass: TSubclassOf<UNavigationQueryFilter>, bAllowPartialPath: boolean): EPathFollowingRequestResult;
        MoveToActor(Goal: AActor, AcceptanceRadius: number, bStopOnOverlap: boolean, bUsePathfinding: boolean, bCanStrafe: boolean, FilterClass: TSubclassOf<UNavigationQueryFilter>, bAllowPartialPath: boolean): EPathFollowingRequestResult;
        K2_SetFocus(NewFocus: AActor): void;
        K2_SetFocalPoint(FP: FVector): void;
        K2_ClearFocus(): void;
        HasPartialPath(): boolean;
        GetPathFollowingComponent(): UPathFollowingComponent;
        GetMoveStatus(): EPathFollowingStatus;
        GetImmediateMoveDestination(): FVector;
        GetFocusActor(): AActor;
        GetFocalPointOnActor(Actor: AActor): FVector;
        GetFocalPoint(): FVector;
        GetAIPerceptionComponent(): UAIPerceptionComponent;
        ClaimTaskResource(ResourceClass: TSubclassOf<UGameplayTaskResource>): void;
    };
    readonly __properties_AAIController: {
        bStartAILogicOnPossess: boolean;
        bStopAILogicOnUnposses: boolean;
        bLOSflag: boolean;
        bSkipExtraLOSChecks: boolean;
        bAllowStrafe: boolean;
        bWantsPlayerState: boolean;
        bSetControlRotationFromPawnOrientation: boolean;
        PathFollowingComponent: UPathFollowingComponent;
        BrainComponent: UBrainComponent;
        PerceptionComponent: UAIPerceptionComponent;
        Blackboard: UBlackboardComponent;
        CachedGameplayTasksComponent: UGameplayTasksComponent;
        DefaultNavigationFilterClass: TSubclassOf<UNavigationQueryFilter>;
        ReceiveMoveCompleted: FAIControllerReceiveMoveCompleted;
    };
    readonly __staticRegistry: 
        AAIController['__static_AAIController'] &
        AController['__staticRegistry'];
    readonly __propertyRegistry: 
        AAIController['__properties_AAIController'] &
        AController['__propertyRegistry'];
}

declare interface ADetourCrowdAIController extends AAIController {
    readonly __staticRegistry: 
        AAIController['__staticRegistry'];
    readonly __propertyRegistry: 
        AAIController['__propertyRegistry'];
}

declare interface AEQSTestingPawn extends ACharacter {
    readonly __properties_AEQSTestingPawn: {
        QueryTemplate: UEnvQuery;
        QueryParams: FEnvNamedValue[];
        QueryConfig: FAIDynamicParam[];
        TimeLimitPerStep: number;
        StepToDebugDraw: number;
        HighlightMode: EEnvQueryHightlightMode;
        bDrawLabels: boolean;
        bDrawFailedItems: boolean;
        bReRunQueryOnlyOnFinishedMove: boolean;
        bShouldBeVisibleInGame: boolean;
        bTickDuringGame: boolean;
        bRunQueryOnSelectionChanged: boolean;
        QueryingMode: EEnvQueryRunMode;
        NavAgentProperties: FNavAgentProperties;
    };
    readonly __staticRegistry: 
        ACharacter['__staticRegistry'];
    readonly __propertyRegistry: 
        AEQSTestingPawn['__properties_AEQSTestingPawn'] &
        ACharacter['__propertyRegistry'];
}

declare interface AGridPathAIController extends AAIController {
    readonly __staticRegistry: 
        AAIController['__staticRegistry'];
    readonly __propertyRegistry: 
        AAIController['__propertyRegistry'];
}

declare interface ANavLinkProxy extends AActor {
    readonly __static_ANavLinkProxy: {
        SetSmartLinkEnabled(bEnabled: boolean): void;
        ResumePathFollowing(Agent: AActor): void;
        ReceiveSmartLinkReached(Agent: AActor, Destination: FVector): void;
        IsSmartLinkEnabled(): boolean;
        HasMovingAgents(): boolean;
    };
    readonly __properties_ANavLinkProxy: {
        PointLinks: FNavigationLink[];
        SegmentLinks: FNavigationSegmentLink[];
        SmartLinkComp: UNavLinkCustomComponent;
        bSmartLinkIsRelevant: boolean;
        OnSmartLinkReached: FNavLinkProxyOnSmartLinkReached;
    };
    readonly __staticRegistry: 
        ANavLinkProxy['__static_ANavLinkProxy'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ANavLinkProxy['__properties_ANavLinkProxy'] &
        AActor['__propertyRegistry'];
}

declare interface FAIDamageEvent {
    Amount: number;
    Location: FVector;
    HitLocation: FVector;
    DamagedActor: AActor;
    Instigator: AActor;
    Tag: string;
}

declare interface FAIDataProviderBoolValue extends FAIDataProviderTypedValue {
    DefaultValue: boolean;
}

declare interface FAIDataProviderFloatValue extends FAIDataProviderTypedValue {
    DefaultValue: number;
}

declare interface FAIDataProviderIntValue extends FAIDataProviderTypedValue {
    DefaultValue: number;
}

declare interface FAIDataProviderStructValue extends FAIDataProviderValue {

}

declare interface FAIDataProviderTypedValue extends FAIDataProviderValue {
    PropertyType: UClass;
}

declare interface FAIDataProviderValue {
    DataBinding: UAIDataProvider;
    DataField: string;
}

declare interface FAIDynamicParam {
    ParamName: string;
    ParamType: EAIParamType;
    bAllowBBKey: boolean;
    Value: number;
    BBKey: FBlackboardKeySelector;
}

declare interface FAIMoveRequest {
    GoalActor: TWeakObjectPtr<AActor>;
}

declare interface FAINoiseEvent {
    NoiseLocation: FVector;
    Loudness: number;
    MaxRange: number;
    Instigator: AActor;
    Tag: string;
}

declare interface FAIPredictionEvent {
    Requestor: AActor;
    PredictedActor: AActor;
}

declare interface FAIRequestID {
    RequestID: number;
}

declare interface FAISenseAffiliationFilter {
    bDetectEnemies: boolean;
    bDetectNeutrals: boolean;
    bDetectFriendlies: boolean;
}

declare interface FAISightEvent {
    SeenActor: AActor;
    Observer: AActor;
}

declare interface FAIStimulus {
    Age: number;
    ExpirationAge: number;
    Strength: number;
    StimulusLocation: FVector;
    ReceiverLocation: FVector;
    Tag: string;
    bSuccessfullySensed: boolean;
}

declare interface FAITeamStimulusEvent {
    Broadcaster: AActor;
    Enemy: AActor;
}

declare interface FAITouchEvent {
    TouchReceiver: AActor;
    OtherActor: AActor;
}

declare interface FActorPerceptionBlueprintInfo {
    Target: AActor;
    LastSensedStimuli: FAIStimulus[];
    bIsHostile: boolean;
    bIsFriendly: boolean;
}

declare interface FActorPerceptionUpdateInfo {
    TargetId: number;
    Target: TWeakObjectPtr<AActor>;
    Stimulus: FAIStimulus;
}

declare interface FBTCompositeChild {
    ChildComposite: UBTCompositeNode;
    ChildTask: UBTTaskNode;
    Decorators: UBTDecorator[];
    DecoratorOps: FBTDecoratorLogic[];
}

declare interface FBTDecoratorLogic {
    Operation: EBTDecoratorLogic;
    Number: number;
}

declare interface FBehaviorTreeTemplateInfo {
    Asset: UBehaviorTree;
    Template: UBTCompositeNode;
}

declare interface FBlackboardEntry {
    EntryName: string;
    KeyType: UBlackboardKeyType;
    bInstanceSynced: boolean;
}

declare interface FBlackboardKeySelector {
    AllowedTypes: UBlackboardKeyType[];
    SelectedKeyName: string;
    SelectedKeyType: TSubclassOf<UBlackboardKeyType>;
    SelectedKeyID: number;
    bNoneIsAllowedValue: boolean;
}

declare type FCompactIndexedHandleBase = object;

declare interface FCrowdAvoidanceConfig {
    VelocityBias: number;
    DesiredVelocityWeight: number;
    CurrentVelocityWeight: number;
    SideBiasWeight: number;
    ImpactTimeWeight: number;
    ImpactTimeRange: number;
    CustomPatternIdx: number;
    AdaptiveDivisions: number;
    AdaptiveRings: number;
    AdaptiveDepth: number;
}

declare interface FCrowdAvoidanceSamplingPattern {
    Angles: number[];
    Radii: number[];
}

declare type FDefault__AISenseBlueprintListener = object;

declare interface FEQSParametrizedQueryExecutionRequest {
    QueryTemplate: UEnvQuery;
    QueryConfig: FAIDynamicParam[];
    EQSQueryBlackboardKey: FBlackboardKeySelector;
    RunMode: EEnvQueryRunMode;
    bUseBBKeyForQueryTemplate: boolean;
}

declare interface FEnvDirection {
    LineFrom: TSubclassOf<UEnvQueryContext>;
    LineTo: TSubclassOf<UEnvQueryContext>;
    Rotation: TSubclassOf<UEnvQueryContext>;
    DirMode: EEnvDirection;
}

declare interface FEnvNamedValue {
    ParamName: string;
    ParamType: EAIParamType;
    Value: number;
}

declare interface FEnvOverlapData {
    ExtentX: number;
    ExtentY: number;
    ExtentZ: number;
    ShapeOffset: FVector;
    OverlapChannel: ECollisionChannel;
    OverlapShape: EEnvOverlapShape;
    bOnlyBlockingHits: boolean;
    bOverlapComplex: boolean;
    bSkipOverlapQuerier: boolean;
}

declare interface FEnvQueryInstanceCache {
    Template: UEnvQuery;
}

declare interface FEnvQueryManagerConfig {
    MaxAllowedTestingTime: number;
    bTestQueriesUsingBreadth: boolean;
    QueryCountWarningThreshold: number;
    QueryCountWarningInterval: number;
    ExecutionTimeWarningSeconds: number;
    HandlingResultTimeWarningSeconds: number;
    GenerationTimeWarningSeconds: number;
}

declare interface FEnvQueryRequest {
    QueryTemplate: UEnvQuery;
    Owner: UObject;
    World: UWorld;
}

declare interface FEnvQueryResult {
    ItemType: TSubclassOf<UEnvQueryItemType>;
    OptionIndex: number;
    QueryID: number;
}

declare interface FEnvTraceData {
    VersionNum: number;
    NavigationFilter: TSubclassOf<UNavigationQueryFilter>;
    ProjectDown: number;
    ProjectUp: number;
    ExtentX: number;
    ExtentY: number;
    ExtentZ: number;
    PostProjectionVerticalOffset: number;
    TraceChannel: ETraceTypeQuery;
    SerializedChannel: ECollisionChannel;
    TraceProfileName: string;
    TraceShape: EEnvTraceShape;
    TraceMode: EEnvQueryTrace;
    bTraceComplex: boolean;
    bOnlyBlockingHits: boolean;
    bCanTraceOnNavMesh: boolean;
    bCanTraceOnGeometry: boolean;
    bCanDisableTrace: boolean;
    bCanProjectDown: boolean;
}

declare interface FGenericTeamId {
    TeamID: number;
}

declare interface FIndexedHandleBase extends FSimpleIndexedHandleBase {

}

declare interface FIntervalCountdown {
    Interval: number;
}

declare interface FRecastGraphWrapper {
    RecastNavMeshActor: ARecastNavMesh;
}

declare interface FSequentialIDBase {
    Value: number;
}

declare type FSimpleIndexedHandleBase = object;

declare interface FValueOrBBKey_Bool extends FValueOrBlackboardKeyBase {
    DefaultValue: boolean;
}

declare interface FValueOrBBKey_Class extends FValueOrBlackboardKeyBase {
    DefaultValue: UClass;
    BaseClass: UClass;
}

declare interface FValueOrBBKey_Enum extends FValueOrBlackboardKeyBase {
    DefaultValue: number;
    EnumType: UEnum;
    NativeEnumTypeName: string;
}

declare interface FValueOrBBKey_Float extends FValueOrBlackboardKeyBase {
    DefaultValue: number;
}

declare interface FValueOrBBKey_Int32 extends FValueOrBlackboardKeyBase {
    DefaultValue: number;
}

declare interface FValueOrBBKey_Name extends FValueOrBlackboardKeyBase {
    DefaultValue: string;
}

declare interface FValueOrBBKey_Object extends FValueOrBlackboardKeyBase {
    DefaultValue: UObject;
    BaseClass: UClass;
}

declare interface FValueOrBBKey_Rotator extends FValueOrBlackboardKeyBase {
    DefaultValue: FRotator;
}

declare interface FValueOrBBKey_String extends FValueOrBlackboardKeyBase {
    DefaultValue: string;
}

declare interface FValueOrBBKey_Struct extends FValueOrBlackboardKeyBase {
    DefaultValue: FInstancedStruct;
}

declare interface FValueOrBBKey_Vector extends FValueOrBlackboardKeyBase {
    DefaultValue: FVector;
}

declare interface FValueOrBlackboardKeyBase {
    Key: string;
}

declare interface IAIPerceptionListenerInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IAIResourceInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IAISightTargetInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IBlackboardAssetProvider extends IInterface {
    readonly __static_IBlackboardAssetProvider: {
        GetBlackboardAsset(): UBlackboardData;
    };
    readonly __staticRegistry: 
        IBlackboardAssetProvider['__static_IBlackboardAssetProvider'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ICrowdAgentInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IEQSQueryResultSourceInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGenericTeamAgentInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAIAsyncTaskBlueprintProxy extends UObject {
    readonly __static_UAIAsyncTaskBlueprintProxy: {
        OnMoveCompleted(RequestID: FAIRequestID, MovementResult: EPathFollowingResult): void;
    };
    readonly __properties_UAIAsyncTaskBlueprintProxy: {
        OnSuccess: FAIAsyncTaskBlueprintProxyOnSuccess;
        OnFail: FAIAsyncTaskBlueprintProxyOnFail;
    };
    readonly __staticRegistry: 
        UAIAsyncTaskBlueprintProxy['__static_UAIAsyncTaskBlueprintProxy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAIAsyncTaskBlueprintProxy['__properties_UAIAsyncTaskBlueprintProxy'] &
        UObject['__propertyRegistry'];
}

declare interface UAIBlueprintHelperLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAIBlueprintHelperLibrary: {
        UnlockAIResourcesWithAnimation(AnimInstance: UAnimInstance, bUnlockMovement: boolean, UnlockAILogic: boolean): void;
        SpawnAIFromClass(WorldContextObject: UObject, PawnClass: TSubclassOf<APawn>, BehaviorTree: UBehaviorTree, Location: FVector, Rotation: FRotator, bNoCollisionFail: boolean, Owner: AActor): APawn;
        SimpleMoveToLocation(Controller: AController, Goal: FVector): void;
        SimpleMoveToActor(Controller: AController, Goal: AActor): void;
        SendAIMessage(Target: APawn, Message: string, MessageSource: UObject, bSuccess: boolean): void;
        LockAIResourcesWithAnimation(AnimInstance: UAnimInstance, bLockMovement: boolean, LockAILogic: boolean): void;
        IsValidAIRotation(Rotation: FRotator): boolean;
        IsValidAILocation(Location: FVector): boolean;
        IsValidAIDirection(DirectionVector: FVector): boolean;
        GetNextNavLinkIndex(Controller: AController): number;
        GetCurrentPathPoints(Controller: AController): FVector[];
        GetCurrentPathIndex(Controller: AController): number;
        GetCurrentPath(Controller: AController): UNavigationPath;
        GetBlackboard(Target: AActor): UBlackboardComponent;
        GetAIController(ControlledActor: AActor): AAIController;
        CreateMoveToProxyObject(WorldContextObject: UObject, Pawn: APawn, Destination: FVector, targetActor: AActor, AcceptanceRadius: number, bStopOnOverlap: boolean): UAIAsyncTaskBlueprintProxy;
    };
    readonly __staticRegistry: 
        UAIBlueprintHelperLibrary['__static_UAIBlueprintHelperLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UAIDataProvider extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UAIDataProvider_QueryParams extends UAIDataProvider {
    readonly __properties_UAIDataProvider_QueryParams: {
        ParamName: string;
        FloatValue: number;
        IntValue: number;
        boolValue: boolean;
    };
    readonly __staticRegistry: 
        UAIDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UAIDataProvider_QueryParams['__properties_UAIDataProvider_QueryParams'] &
        UAIDataProvider['__propertyRegistry'];
}

declare interface UAIDataProvider_Random extends UAIDataProvider_QueryParams {
    readonly __properties_UAIDataProvider_Random: {
        min: number;
        max: number;
        bInteger: boolean;
    };
    readonly __staticRegistry: 
        UAIDataProvider_QueryParams['__staticRegistry'];
    readonly __propertyRegistry: 
        UAIDataProvider_Random['__properties_UAIDataProvider_Random'] &
        UAIDataProvider_QueryParams['__propertyRegistry'];
}

declare interface UAIHotSpotManager extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UAIPerceptionComponent extends UActorComponent {
    readonly __static_UAIPerceptionComponent: {
        SetSenseEnabled(SenseClass: TSubclassOf<UAISense>, bEnable: boolean): void;
        RequestStimuliListenerUpdate(): void;
        OnOwnerEndPlay(Actor: AActor, EndPlayReason: EEndPlayReason): void;
        IsSenseEnabled(SenseClass: TSubclassOf<UAISense>): boolean;
        GetPerceivedHostileActorsBySense(SenseToUse: TSubclassOf<UAISense>, OutActors: AActor[]): void;
        GetPerceivedHostileActors(OutActors: AActor[]): void;
        GetKnownPerceivedActors(SenseToUse: TSubclassOf<UAISense>, OutActors: AActor[]): void;
        GetCurrentlyPerceivedActors(SenseToUse: TSubclassOf<UAISense>, OutActors: AActor[]): void;
        GetActorsPerception(Actor: AActor, Info: FActorPerceptionBlueprintInfo): boolean;
        ForgetAll(): void;
    };
    readonly __properties_UAIPerceptionComponent: {
        SensesConfig: UAISenseConfig[];
        DominantSense: TSubclassOf<UAISense>;
        AIOwner: AAIController;
        OnPerceptionUpdated: FAIPerceptionComponentOnPerceptionUpdated;
        OnTargetPerceptionForgotten: FAIPerceptionComponentOnTargetPerceptionForgotten;
        OnTargetPerceptionUpdated: FAIPerceptionComponentOnTargetPerceptionUpdated;
        OnTargetPerceptionInfoUpdated: FAIPerceptionComponentOnTargetPerceptionInfoUpdated;
    };
    readonly __staticRegistry: 
        UAIPerceptionComponent['__static_UAIPerceptionComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UAIPerceptionComponent['__properties_UAIPerceptionComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UAIPerceptionStimuliSourceComponent extends UActorComponent {
    readonly __static_UAIPerceptionStimuliSourceComponent: {
        UnregisterFromSense(SenseClass: TSubclassOf<UAISense>): void;
        UnregisterFromPerceptionSystem(): void;
        RegisterWithPerceptionSystem(): void;
        RegisterForSense(SenseClass: TSubclassOf<UAISense>): void;
    };
    readonly __properties_UAIPerceptionStimuliSourceComponent: {
        bAutoRegisterAsSource: boolean;
        RegisterAsSourceForSenses: TSubclassOf<UAISense>[];
    };
    readonly __staticRegistry: 
        UAIPerceptionStimuliSourceComponent['__static_UAIPerceptionStimuliSourceComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UAIPerceptionStimuliSourceComponent['__properties_UAIPerceptionStimuliSourceComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UAIPerceptionSystem extends UAISubsystem {
    readonly __static_UAIPerceptionSystem: {
        ReportPerceptionEvent(WorldContextObject: UObject, PerceptionEvent: UAISenseEvent): void;
        ReportEvent(PerceptionEvent: UAISenseEvent): void;
        RegisterPerceptionStimuliSource(WorldContextObject: UObject, Sense: TSubclassOf<UAISense>, Target: AActor): boolean;
        OnPerceptionStimuliSourceEndPlay(Actor: AActor, EndPlayReason: EEndPlayReason): void;
        GetSenseClassForStimulus(WorldContextObject: UObject, Stimulus: FAIStimulus): TSubclassOf<UAISense>;
    };
    readonly __properties_UAIPerceptionSystem: {
        Senses: UAISense[];
        PerceptionAgingRate: number;
    };
    readonly __staticRegistry: 
        UAIPerceptionSystem['__static_UAIPerceptionSystem'] &
        UAISubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UAIPerceptionSystem['__properties_UAIPerceptionSystem'] &
        UAISubsystem['__propertyRegistry'];
}

declare interface UAIResource_Logic extends UGameplayTaskResource {
    readonly __staticRegistry: 
        UGameplayTaskResource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTaskResource['__propertyRegistry'];
}

declare interface UAIResource_Movement extends UGameplayTaskResource {
    readonly __staticRegistry: 
        UGameplayTaskResource['__staticRegistry'];
    readonly __propertyRegistry: 
        UGameplayTaskResource['__propertyRegistry'];
}

declare interface UAISense extends UObject {
    readonly __properties_UAISense: {
        NotifyType: EAISenseNotifyType;
        bWantsNewPawnNotification: boolean;
        bAutoRegisterAllPawnsAsSources: boolean;
        PerceptionSystemInstance: UAIPerceptionSystem;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISense['__properties_UAISense'] &
        UObject['__propertyRegistry'];
}

declare interface UAISenseBlueprintListener extends UUserDefinedStruct {
    readonly __staticRegistry: 
        UUserDefinedStruct['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserDefinedStruct['__propertyRegistry'];
}

declare interface UAISenseConfig extends UObject {
    readonly __properties_UAISenseConfig: {
        DebugColor: FColor;
        MaxAge: number;
        bStartsEnabled: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseConfig['__properties_UAISenseConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UAISenseConfig_Blueprint extends UAISenseConfig {
    readonly __properties_UAISenseConfig_Blueprint: {
        Implementation: TSubclassOf<UAISense_Blueprint>;
    };
    readonly __staticRegistry: 
        UAISenseConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseConfig_Blueprint['__properties_UAISenseConfig_Blueprint'] &
        UAISenseConfig['__propertyRegistry'];
}

declare interface UAISenseConfig_Damage extends UAISenseConfig {
    readonly __properties_UAISenseConfig_Damage: {
        Implementation: TSubclassOf<UAISense_Damage>;
    };
    readonly __staticRegistry: 
        UAISenseConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseConfig_Damage['__properties_UAISenseConfig_Damage'] &
        UAISenseConfig['__propertyRegistry'];
}

declare interface UAISenseConfig_Hearing extends UAISenseConfig {
    readonly __properties_UAISenseConfig_Hearing: {
        Implementation: TSubclassOf<UAISense_Hearing>;
        HearingRange: number;
        LoSHearingRange: number;
        bUseLoSHearing: boolean;
        DetectionByAffiliation: FAISenseAffiliationFilter;
    };
    readonly __staticRegistry: 
        UAISenseConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseConfig_Hearing['__properties_UAISenseConfig_Hearing'] &
        UAISenseConfig['__propertyRegistry'];
}

declare interface UAISenseConfig_Prediction extends UAISenseConfig {
    readonly __staticRegistry: 
        UAISenseConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseConfig['__propertyRegistry'];
}

declare interface UAISenseConfig_Sight extends UAISenseConfig {
    readonly __properties_UAISenseConfig_Sight: {
        Implementation: TSubclassOf<UAISense_Sight>;
        SightRadius: number;
        LoseSightRadius: number;
        PeripheralVisionAngleDegrees: number;
        DetectionByAffiliation: FAISenseAffiliationFilter;
        AutoSuccessRangeFromLastSeenLocation: number;
        PointOfViewBackwardOffset: number;
        NearClippingRadius: number;
    };
    readonly __staticRegistry: 
        UAISenseConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseConfig_Sight['__properties_UAISenseConfig_Sight'] &
        UAISenseConfig['__propertyRegistry'];
}

declare interface UAISenseConfig_Team extends UAISenseConfig {
    readonly __staticRegistry: 
        UAISenseConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseConfig['__propertyRegistry'];
}

declare interface UAISenseConfig_Touch extends UAISenseConfig {
    readonly __properties_UAISenseConfig_Touch: {
        DetectionByAffiliation: FAISenseAffiliationFilter;
    };
    readonly __staticRegistry: 
        UAISenseConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseConfig_Touch['__properties_UAISenseConfig_Touch'] &
        UAISenseConfig['__propertyRegistry'];
}

declare interface UAISenseEvent extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UAISenseEvent_Damage extends UAISenseEvent {
    readonly __properties_UAISenseEvent_Damage: {
        Event: FAIDamageEvent;
    };
    readonly __staticRegistry: 
        UAISenseEvent['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseEvent_Damage['__properties_UAISenseEvent_Damage'] &
        UAISenseEvent['__propertyRegistry'];
}

declare interface UAISenseEvent_Hearing extends UAISenseEvent {
    readonly __properties_UAISenseEvent_Hearing: {
        Event: FAINoiseEvent;
    };
    readonly __staticRegistry: 
        UAISenseEvent['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISenseEvent_Hearing['__properties_UAISenseEvent_Hearing'] &
        UAISenseEvent['__propertyRegistry'];
}

declare interface UAISense_Blueprint extends UAISense {
    readonly __static_UAISense_Blueprint: {
        OnUpdate(EventsToProcess: UAISenseEvent[]): number;
        OnListenerUpdated(ActorListener: AActor, PerceptionComponent: UAIPerceptionComponent): void;
        OnListenerUnregistered(ActorListener: AActor, PerceptionComponent: UAIPerceptionComponent): void;
        OnListenerRegistered(ActorListener: AActor, PerceptionComponent: UAIPerceptionComponent): void;
        K2_OnNewPawn(NewPawn: APawn): void;
        GetAllListenerComponents(ListenerComponents: UAIPerceptionComponent[]): void;
        GetAllListenerActors(ListenerActors: AActor[]): void;
    };
    readonly __properties_UAISense_Blueprint: {
        ListenerDataType: TSubclassOf<UUserDefinedStruct>;
        ListenerContainer: UAIPerceptionComponent[];
        UnprocessedEvents: UAISenseEvent[];
    };
    readonly __staticRegistry: 
        UAISense_Blueprint['__static_UAISense_Blueprint'] &
        UAISense['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISense_Blueprint['__properties_UAISense_Blueprint'] &
        UAISense['__propertyRegistry'];
}

declare interface UAISense_Damage extends UAISense {
    readonly __static_UAISense_Damage: {
        ReportDamageEvent(WorldContextObject: UObject, DamagedActor: AActor, Instigator: AActor, damageAmount: number, EventLocation: FVector, HitLocation: FVector, Tag: string): void;
    };
    readonly __properties_UAISense_Damage: {
        RegisteredEvents: FAIDamageEvent[];
    };
    readonly __staticRegistry: 
        UAISense_Damage['__static_UAISense_Damage'] &
        UAISense['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISense_Damage['__properties_UAISense_Damage'] &
        UAISense['__propertyRegistry'];
}

declare interface UAISense_Hearing extends UAISense {
    readonly __static_UAISense_Hearing: {
        ReportNoiseEvent(WorldContextObject: UObject, NoiseLocation: FVector, Loudness: number, Instigator: AActor, MaxRange: number, Tag: string): void;
    };
    readonly __properties_UAISense_Hearing: {
        NoiseEvents: FAINoiseEvent[];
        SpeedOfSoundSq: number;
    };
    readonly __staticRegistry: 
        UAISense_Hearing['__static_UAISense_Hearing'] &
        UAISense['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISense_Hearing['__properties_UAISense_Hearing'] &
        UAISense['__propertyRegistry'];
}

declare interface UAISense_Prediction extends UAISense {
    readonly __static_UAISense_Prediction: {
        RequestPawnPredictionEvent(Requestor: APawn, PredictedActor: AActor, PredictionTime: number): void;
        RequestControllerPredictionEvent(Requestor: AAIController, PredictedActor: AActor, PredictionTime: number): void;
    };
    readonly __properties_UAISense_Prediction: {
        RegisteredEvents: FAIPredictionEvent[];
    };
    readonly __staticRegistry: 
        UAISense_Prediction['__static_UAISense_Prediction'] &
        UAISense['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISense_Prediction['__properties_UAISense_Prediction'] &
        UAISense['__propertyRegistry'];
}

declare interface UAISense_Sight extends UAISense {
    readonly __properties_UAISense_Sight: {
        MaxTracesPerTick: number;
        MaxAsyncTracesPerTick: number;
        MinQueriesPerTimeSliceCheck: number;
        MaxTimeSlicePerTick: number;
        HighImportanceQueryDistanceThreshold: number;
        MaxQueryImportance: number;
        SightLimitQueryImportance: number;
        PendingQueriesBudgetReductionRatio: number;
        bUseAsynchronousTraceForDefaultSightQueries: boolean;
    };
    readonly __staticRegistry: 
        UAISense['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISense_Sight['__properties_UAISense_Sight'] &
        UAISense['__propertyRegistry'];
}

declare interface UAISense_Team extends UAISense {
    readonly __properties_UAISense_Team: {
        RegisteredEvents: FAITeamStimulusEvent[];
    };
    readonly __staticRegistry: 
        UAISense['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISense_Team['__properties_UAISense_Team'] &
        UAISense['__propertyRegistry'];
}

declare interface UAISense_Touch extends UAISense {
    readonly __static_UAISense_Touch: {
        ReportTouchEvent(WorldContextObject: UObject, TouchReceiver: AActor, OtherActor: AActor, Location: FVector): void;
    };
    readonly __properties_UAISense_Touch: {
        RegisteredEvents: FAITouchEvent[];
    };
    readonly __staticRegistry: 
        UAISense_Touch['__static_UAISense_Touch'] &
        UAISense['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISense_Touch['__properties_UAISense_Touch'] &
        UAISense['__propertyRegistry'];
}

declare interface UAISubsystem extends UObject {
    readonly __properties_UAISubsystem: {
        AISystem: UAISystem;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISubsystem['__properties_UAISubsystem'] &
        UObject['__propertyRegistry'];
}

declare interface UAISystem extends UAISystemBase {
    readonly __static_UAISystem: {
        AILoggingVerbose(): void;
        AIIgnorePlayers(): void;
    };
    readonly __properties_UAISystem: {
        PerceptionSystemClassName: FSoftClassPath;
        HotSpotManagerClassName: FSoftClassPath;
        EnvQueryManagerClassName: FSoftClassPath;
        AcceptanceRadius: number;
        PathfollowingRegularPathPointAcceptanceRadius: number;
        PathfollowingNavLinkAcceptanceRadius: number;
        bFinishMoveOnGoalOverlap: boolean;
        bAcceptPartialPaths: boolean;
        bAllowStrafing: boolean;
        bAllowControllersAsEQSQuerier: boolean;
        bEnableDebuggerPlugin: boolean;
        bForgetStaleActors: boolean;
        bAddBlackboardSelfKey: boolean;
        bClearBBEntryOnBTEQSFail: boolean;
        bBlackboardKeyDecoratorAllowsNoneAsValue: boolean;
        DefaultBlackboard: TSoftObjectPtr<UBlackboardData>;
        DefaultSightCollisionChannel: ECollisionChannel;
        BehaviorTreeManager: UBehaviorTreeManager;
        EnvironmentQueryManager: UEnvQueryManager;
        PerceptionSystem: UAIPerceptionSystem;
        AllProxyObjects: UAIAsyncTaskBlueprintProxy[];
        HotSpotManager: UAIHotSpotManager;
        NavLocalGrids: UNavLocalGridManager;
    };
    readonly __staticRegistry: 
        UAISystem['__static_UAISystem'] &
        UAISystemBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAISystem['__properties_UAISystem'] &
        UAISystemBase['__propertyRegistry'];
}

declare interface UAITask extends UGameplayTask {
    readonly __properties_UAITask: {
        OwnerController: AAIController;
    };
    readonly __staticRegistry: 
        UGameplayTask['__staticRegistry'];
    readonly __propertyRegistry: 
        UAITask['__properties_UAITask'] &
        UGameplayTask['__propertyRegistry'];
}

declare interface UAITask_LockLogic extends UAITask {
    readonly __staticRegistry: 
        UAITask['__staticRegistry'];
    readonly __propertyRegistry: 
        UAITask['__propertyRegistry'];
}

declare interface UAITask_MoveTo extends UAITask {
    readonly __static_UAITask_MoveTo: {
        AIMoveTo(Controller: AAIController, GoalLocation: FVector, GoalActor: AActor, AcceptanceRadius: number, StopOnOverlap: EAIOptionFlag, AcceptPartialPath: EAIOptionFlag, bUsePathfinding: boolean, bLockAILogic: boolean, bUseContinuousGoalTracking: boolean, ProjectGoalOnNavigation: EAIOptionFlag, RequireNavigableEndLocation: EAIOptionFlag): UAITask_MoveTo;
    };
    readonly __properties_UAITask_MoveTo: {
        OnRequestFailed: FAITask_MoveToOnRequestFailed;
        OnMoveFinished: FAITask_MoveToOnMoveFinished;
        MoveRequest: FAIMoveRequest;
    };
    readonly __staticRegistry: 
        UAITask_MoveTo['__static_UAITask_MoveTo'] &
        UAITask['__staticRegistry'];
    readonly __propertyRegistry: 
        UAITask_MoveTo['__properties_UAITask_MoveTo'] &
        UAITask['__propertyRegistry'];
}

declare interface UAITask_RunEQS extends UAITask {
    readonly __static_UAITask_RunEQS: {
        RunEQS(Controller: AAIController, QueryTemplate: UEnvQuery): UAITask_RunEQS;
    };
    readonly __staticRegistry: 
        UAITask_RunEQS['__static_UAITask_RunEQS'] &
        UAITask['__staticRegistry'];
    readonly __propertyRegistry: 
        UAITask['__propertyRegistry'];
}

declare interface UBTAuxiliaryNode extends UBTNode {
    readonly __staticRegistry: 
        UBTNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTNode['__propertyRegistry'];
}

declare interface UBTCompositeNode extends UBTNode {
    readonly __properties_UBTCompositeNode: {
        Children: FBTCompositeChild[];
        Services: UBTService[];
        bApplyDecoratorScope: boolean;
    };
    readonly __staticRegistry: 
        UBTNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTCompositeNode['__properties_UBTCompositeNode'] &
        UBTNode['__propertyRegistry'];
}

declare interface UBTComposite_Selector extends UBTCompositeNode {
    readonly __staticRegistry: 
        UBTCompositeNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTCompositeNode['__propertyRegistry'];
}

declare interface UBTComposite_Sequence extends UBTCompositeNode {
    readonly __staticRegistry: 
        UBTCompositeNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTCompositeNode['__propertyRegistry'];
}

declare interface UBTComposite_SimpleParallel extends UBTCompositeNode {
    readonly __properties_UBTComposite_SimpleParallel: {
        FinishMode: EBTParallelMode;
    };
    readonly __staticRegistry: 
        UBTCompositeNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTComposite_SimpleParallel['__properties_UBTComposite_SimpleParallel'] &
        UBTCompositeNode['__propertyRegistry'];
}

declare interface UBTDecorator extends UBTAuxiliaryNode {
    readonly __properties_UBTDecorator: {
        bInverseCondition: boolean;
        FlowAbortMode: EBTFlowAbortMode;
    };
    readonly __staticRegistry: 
        UBTAuxiliaryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator['__properties_UBTDecorator'] &
        UBTAuxiliaryNode['__propertyRegistry'];
}

declare interface UBTDecorator_Blackboard extends UBTDecorator_BlackboardBase {
    readonly __properties_UBTDecorator_Blackboard: {
        IntValue: number;
        FloatValue: number;
        StringValue: string;
        CachedDescription: string;
        OperationType: number;
        NotifyObserver: EBTBlackboardRestart;
    };
    readonly __staticRegistry: 
        UBTDecorator_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_Blackboard['__properties_UBTDecorator_Blackboard'] &
        UBTDecorator_BlackboardBase['__propertyRegistry'];
}

declare interface UBTDecorator_BlackboardBase extends UBTDecorator {
    readonly __properties_UBTDecorator_BlackboardBase: {
        BlackboardKey: FBlackboardKeySelector;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_BlackboardBase['__properties_UBTDecorator_BlackboardBase'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_BlueprintBase extends UBTDecorator {
    readonly __static_UBTDecorator_BlueprintBase: {
        ReceiveTickAI(OwnerController: AAIController, ControlledPawn: APawn, DeltaSeconds: number): void;
        ReceiveTick(OwnerActor: AActor, DeltaSeconds: number): void;
        ReceiveObserverDeactivatedAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ReceiveObserverDeactivated(OwnerActor: AActor): void;
        ReceiveObserverActivatedAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ReceiveObserverActivated(OwnerActor: AActor): void;
        ReceiveExecutionStartAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ReceiveExecutionStart(OwnerActor: AActor): void;
        ReceiveExecutionFinishAI(OwnerController: AAIController, ControlledPawn: APawn, NodeResult: EBTNodeResult): void;
        ReceiveExecutionFinish(OwnerActor: AActor, NodeResult: EBTNodeResult): void;
        PerformConditionCheckAI(OwnerController: AAIController, ControlledPawn: APawn): boolean;
        PerformConditionCheck(OwnerActor: AActor): boolean;
        IsDecoratorObserverActive(): boolean;
        IsDecoratorExecutionActive(): boolean;
    };
    readonly __properties_UBTDecorator_BlueprintBase: {
        AIOwner: AAIController;
        ActorOwner: AActor;
        ObservedKeyNames: string[];
        bShowPropertyDetails: boolean;
        bCheckConditionOnlyBlackBoardChanges: boolean;
    };
    readonly __staticRegistry: 
        UBTDecorator_BlueprintBase['__static_UBTDecorator_BlueprintBase'] &
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_BlueprintBase['__properties_UBTDecorator_BlueprintBase'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_CheckGameplayTagsOnActor extends UBTDecorator {
    readonly __properties_UBTDecorator_CheckGameplayTagsOnActor: {
        ActorToCheck: FBlackboardKeySelector;
        TagsToMatch: EGameplayContainerMatchType;
        GameplayTags: FGameplayTagContainer;
        CachedDescription: string;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_CheckGameplayTagsOnActor['__properties_UBTDecorator_CheckGameplayTagsOnActor'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_CompareBBEntries extends UBTDecorator {
    readonly __properties_UBTDecorator_CompareBBEntries: {
        Operator: EBlackBoardEntryComparison;
        BlackboardKeyA: FBlackboardKeySelector;
        BlackboardKeyB: FBlackboardKeySelector;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_CompareBBEntries['__properties_UBTDecorator_CompareBBEntries'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_ConditionalLoop extends UBTDecorator_Blackboard {
    readonly __staticRegistry: 
        UBTDecorator_Blackboard['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_Blackboard['__propertyRegistry'];
}

declare interface UBTDecorator_ConeCheck extends UBTDecorator {
    readonly __properties_UBTDecorator_ConeCheck: {
        ConeHalfAngle: FValueOrBBKey_Float;
        ConeOrigin: FBlackboardKeySelector;
        ConeDirection: FBlackboardKeySelector;
        Observed: FBlackboardKeySelector;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_ConeCheck['__properties_UBTDecorator_ConeCheck'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_Cooldown extends UBTDecorator {
    readonly __properties_UBTDecorator_Cooldown: {
        CoolDownTime: FValueOrBBKey_Float;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_Cooldown['__properties_UBTDecorator_Cooldown'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_DoesPathExist extends UBTDecorator {
    readonly __properties_UBTDecorator_DoesPathExist: {
        BlackboardKeyA: FBlackboardKeySelector;
        BlackboardKeyB: FBlackboardKeySelector;
        bUseSelf: boolean;
        PathQueryType: FValueOrBBKey_Enum;
        FilterClass: FValueOrBBKey_Class;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_DoesPathExist['__properties_UBTDecorator_DoesPathExist'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_ForceSuccess extends UBTDecorator {
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_IsAtLocation extends UBTDecorator_BlackboardBase {
    readonly __properties_UBTDecorator_IsAtLocation: {
        AcceptableRadius: number;
        ParametrizedAcceptableRadius: FAIDataProviderFloatValue;
        GeometricDistanceType: FAIDistanceType;
        bUseParametrizedRadius: boolean;
        bUseNavAgentGoalLocation: FValueOrBBKey_Bool;
        bPathFindingBasedTest: FValueOrBBKey_Bool;
    };
    readonly __staticRegistry: 
        UBTDecorator_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_IsAtLocation['__properties_UBTDecorator_IsAtLocation'] &
        UBTDecorator_BlackboardBase['__propertyRegistry'];
}

declare interface UBTDecorator_IsBBEntryOfClass extends UBTDecorator_BlackboardBase {
    readonly __properties_UBTDecorator_IsBBEntryOfClass: {
        TestClass: FValueOrBBKey_Class;
    };
    readonly __staticRegistry: 
        UBTDecorator_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_IsBBEntryOfClass['__properties_UBTDecorator_IsBBEntryOfClass'] &
        UBTDecorator_BlackboardBase['__propertyRegistry'];
}

declare interface UBTDecorator_KeepInCone extends UBTDecorator {
    readonly __properties_UBTDecorator_KeepInCone: {
        ConeHalfAngle: FValueOrBBKey_Float;
        ConeOrigin: FBlackboardKeySelector;
        Observed: FBlackboardKeySelector;
        bUseSelfAsOrigin: boolean;
        bUseSelfAsObserved: boolean;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_KeepInCone['__properties_UBTDecorator_KeepInCone'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_Loop extends UBTDecorator {
    readonly __properties_UBTDecorator_Loop: {
        NumLoops: FValueOrBBKey_Int32;
        bInfiniteLoop: boolean;
        InfiniteLoopTimeoutTime: FValueOrBBKey_Float;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_Loop['__properties_UBTDecorator_Loop'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_LoopUntil extends UBTDecorator {
    readonly __properties_UBTDecorator_LoopUntil: {
        RequiredResult: FValueOrBBKey_Enum;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_LoopUntil['__properties_UBTDecorator_LoopUntil'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_ReachedMoveGoal extends UBTDecorator {
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_SetTagCooldown extends UBTDecorator {
    readonly __properties_UBTDecorator_SetTagCooldown: {
        CooldownTag: FGameplayTag;
        CooldownDuration: FValueOrBBKey_Float;
        bAddToExistingDuration: FValueOrBBKey_Bool;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_SetTagCooldown['__properties_UBTDecorator_SetTagCooldown'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_TagCooldown extends UBTDecorator {
    readonly __properties_UBTDecorator_TagCooldown: {
        CooldownTag: FGameplayTag;
        CooldownDuration: FValueOrBBKey_Float;
        bAddToExistingDuration: FValueOrBBKey_Bool;
        bActivatesCooldown: FValueOrBBKey_Bool;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_TagCooldown['__properties_UBTDecorator_TagCooldown'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTDecorator_TimeLimit extends UBTDecorator {
    readonly __properties_UBTDecorator_TimeLimit: {
        TimeLimit: FValueOrBBKey_Float;
    };
    readonly __staticRegistry: 
        UBTDecorator['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTDecorator_TimeLimit['__properties_UBTDecorator_TimeLimit'] &
        UBTDecorator['__propertyRegistry'];
}

declare interface UBTFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBTFunctionLibrary: {
        StopUsingExternalEvent(NodeOwner: UBTNode): void;
        StartUsingExternalEvent(NodeOwner: UBTNode, owningActor: AActor): void;
        SetBlackboardValueAsVector(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: FVector): void;
        SetBlackboardValueAsString(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: string): void;
        SetBlackboardValueAsRotator(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: FRotator): void;
        SetBlackboardValueAsObject(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: UObject): void;
        SetBlackboardValueAsName(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: string): void;
        SetBlackboardValueAsInt(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: number): void;
        SetBlackboardValueAsFloat(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: number): void;
        SetBlackboardValueAsEnum(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: number): void;
        SetBlackboardValueAsClass(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: UClass): void;
        SetBlackboardValueAsBool(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: boolean): void;
        GetOwnersBlackboard(NodeOwner: UBTNode): UBlackboardComponent;
        GetOwnerComponent(NodeOwner: UBTNode): UBehaviorTreeComponent;
        GetBlackboardValueAsVector(NodeOwner: UBTNode, Key: FBlackboardKeySelector): FVector;
        GetBlackboardValueAsString(NodeOwner: UBTNode, Key: FBlackboardKeySelector): string;
        GetBlackboardValueAsRotator(NodeOwner: UBTNode, Key: FBlackboardKeySelector): FRotator;
        GetBlackboardValueAsObject(NodeOwner: UBTNode, Key: FBlackboardKeySelector): UObject;
        GetBlackboardValueAsName(NodeOwner: UBTNode, Key: FBlackboardKeySelector): string;
        GetBlackboardValueAsInt(NodeOwner: UBTNode, Key: FBlackboardKeySelector): number;
        GetBlackboardValueAsFloat(NodeOwner: UBTNode, Key: FBlackboardKeySelector): number;
        GetBlackboardValueAsEnum(NodeOwner: UBTNode, Key: FBlackboardKeySelector): number;
        GetBlackboardValueAsClass(NodeOwner: UBTNode, Key: FBlackboardKeySelector): UClass;
        GetBlackboardValueAsBool(NodeOwner: UBTNode, Key: FBlackboardKeySelector): boolean;
        GetBlackboardValueAsActor(NodeOwner: UBTNode, Key: FBlackboardKeySelector): AActor;
        ClearBlackboardValueAsVector(NodeOwner: UBTNode, Key: FBlackboardKeySelector): void;
        ClearBlackboardValue(NodeOwner: UBTNode, Key: FBlackboardKeySelector): void;
    };
    readonly __staticRegistry: 
        UBTFunctionLibrary['__static_UBTFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBTNode extends UObject {
    readonly __properties_UBTNode: {
        NodeName: string;
        TreeAsset: UBehaviorTree;
        ParentNode: UBTCompositeNode;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTNode['__properties_UBTNode'] &
        UObject['__propertyRegistry'];
}

declare interface UBTService extends UBTAuxiliaryNode {
    readonly __properties_UBTService: {
        Interval: number;
        RandomDeviation: number;
        bCallTickOnSearchStart: boolean;
        bRestartTimerOnEachActivation: boolean;
    };
    readonly __staticRegistry: 
        UBTAuxiliaryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTService['__properties_UBTService'] &
        UBTAuxiliaryNode['__propertyRegistry'];
}

declare interface UBTService_BlackboardBase extends UBTService {
    readonly __properties_UBTService_BlackboardBase: {
        BlackboardKey: FBlackboardKeySelector;
    };
    readonly __staticRegistry: 
        UBTService['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTService_BlackboardBase['__properties_UBTService_BlackboardBase'] &
        UBTService['__propertyRegistry'];
}

declare interface UBTService_BlueprintBase extends UBTService {
    readonly __static_UBTService_BlueprintBase: {
        ReceiveTickAI(OwnerController: AAIController, ControlledPawn: APawn, DeltaSeconds: number): void;
        ReceiveTick(OwnerActor: AActor, DeltaSeconds: number): void;
        ReceiveSearchStartAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ReceiveSearchStart(OwnerActor: AActor): void;
        ReceiveDeactivationAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ReceiveDeactivation(OwnerActor: AActor): void;
        ReceiveActivationAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ReceiveActivation(OwnerActor: AActor): void;
        IsServiceActive(): boolean;
    };
    readonly __properties_UBTService_BlueprintBase: {
        AIOwner: AAIController;
        ActorOwner: AActor;
        bShowPropertyDetails: boolean;
        bShowEventDetails: boolean;
    };
    readonly __staticRegistry: 
        UBTService_BlueprintBase['__static_UBTService_BlueprintBase'] &
        UBTService['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTService_BlueprintBase['__properties_UBTService_BlueprintBase'] &
        UBTService['__propertyRegistry'];
}

declare interface UBTService_DefaultFocus extends UBTService_BlackboardBase {
    readonly __properties_UBTService_DefaultFocus: {
        FocusPriority: number;
    };
    readonly __staticRegistry: 
        UBTService_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTService_DefaultFocus['__properties_UBTService_DefaultFocus'] &
        UBTService_BlackboardBase['__propertyRegistry'];
}

declare interface UBTService_RunEQS extends UBTService_BlackboardBase {
    readonly __properties_UBTService_RunEQS: {
        EQSRequest: FEQSParametrizedQueryExecutionRequest;
        bUpdateBBOnFail: boolean;
    };
    readonly __staticRegistry: 
        UBTService_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTService_RunEQS['__properties_UBTService_RunEQS'] &
        UBTService_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTaskNode extends UBTNode {
    readonly __properties_UBTTaskNode: {
        Services: UBTService[];
        bIgnoreRestartSelf: boolean;
    };
    readonly __staticRegistry: 
        UBTNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTaskNode['__properties_UBTTaskNode'] &
        UBTNode['__propertyRegistry'];
}

declare interface UBTTask_BlackboardBase extends UBTTaskNode {
    readonly __properties_UBTTask_BlackboardBase: {
        BlackboardKey: FBlackboardKeySelector;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_BlackboardBase['__properties_UBTTask_BlackboardBase'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_BlueprintBase extends UBTTaskNode {
    readonly __static_UBTTask_BlueprintBase: {
        SetFinishOnMessageWithId(MessageName: string, RequestID: number): void;
        SetFinishOnMessage(MessageName: string): void;
        ReceiveTickAI(OwnerController: AAIController, ControlledPawn: APawn, DeltaSeconds: number): void;
        ReceiveTick(OwnerActor: AActor, DeltaSeconds: number): void;
        ReceiveExecuteAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ReceiveExecute(OwnerActor: AActor): void;
        ReceiveAbortAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ReceiveAbort(OwnerActor: AActor): void;
        IsTaskExecuting(): boolean;
        IsTaskAborting(): boolean;
        FinishExecute(bSuccess: boolean): void;
        FinishAbort(): void;
    };
    readonly __properties_UBTTask_BlueprintBase: {
        AIOwner: AAIController;
        ActorOwner: AActor;
        TickInterval: FIntervalCountdown;
        bShowPropertyDetails: boolean;
    };
    readonly __staticRegistry: 
        UBTTask_BlueprintBase['__static_UBTTask_BlueprintBase'] &
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_BlueprintBase['__properties_UBTTask_BlueprintBase'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_FinishWithResult extends UBTTaskNode {
    readonly __properties_UBTTask_FinishWithResult: {
        Result: FValueOrBBKey_Enum;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_FinishWithResult['__properties_UBTTask_FinishWithResult'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_GameplayTaskBase extends UBTTaskNode {
    readonly __properties_UBTTask_GameplayTaskBase: {
        bWaitForGameplayTask: FValueOrBBKey_Bool;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_GameplayTaskBase['__properties_UBTTask_GameplayTaskBase'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_MakeNoise extends UBTTaskNode {
    readonly __properties_UBTTask_MakeNoise: {
        Loudnes: FValueOrBBKey_Float;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_MakeNoise['__properties_UBTTask_MakeNoise'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_MoveDirectlyToward extends UBTTask_MoveTo {
    readonly __staticRegistry: 
        UBTTask_MoveTo['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_MoveTo['__propertyRegistry'];
}

declare interface UBTTask_MoveTo extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_MoveTo: {
        AcceptableRadius: FValueOrBBKey_Float;
        FilterClass: FValueOrBBKey_Class;
        ObservedBlackboardValueTolerance: FValueOrBBKey_Float;
        bAllowStrafe: FValueOrBBKey_Bool;
        bAllowPartialPath: FValueOrBBKey_Bool;
        bTrackMovingGoal: FValueOrBBKey_Bool;
        bRequireNavigableEndLocation: FValueOrBBKey_Bool;
        bProjectGoalLocation: FValueOrBBKey_Bool;
        bReachTestIncludesAgentRadius: FValueOrBBKey_Bool;
        bReachTestIncludesGoalRadius: FValueOrBBKey_Bool;
        bStartFromPreviousPath: FValueOrBBKey_Bool;
        bObserveBlackboardValue: boolean;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_MoveTo['__properties_UBTTask_MoveTo'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_PlayAnimation extends UBTTaskNode {
    readonly __properties_UBTTask_PlayAnimation: {
        AnimationToPlay: FValueOrBBKey_Object;
        bLooping: FValueOrBBKey_Bool;
        bNonBlocking: FValueOrBBKey_Bool;
        MyOwnerComp: UBehaviorTreeComponent;
        CachedSkelMesh: USkeletalMeshComponent;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_PlayAnimation['__properties_UBTTask_PlayAnimation'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_PlaySound extends UBTTaskNode {
    readonly __properties_UBTTask_PlaySound: {
        SoundToPlay: FValueOrBBKey_Object;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_PlaySound['__properties_UBTTask_PlaySound'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_RotateToFaceBBEntry extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_RotateToFaceBBEntry: {
        Precision: FValueOrBBKey_Float;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_RotateToFaceBBEntry['__properties_UBTTask_RotateToFaceBBEntry'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_RunBehavior extends UBTTaskNode {
    readonly __properties_UBTTask_RunBehavior: {
        BehaviorAsset: UBehaviorTree;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_RunBehavior['__properties_UBTTask_RunBehavior'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_RunBehaviorDynamic extends UBTTaskNode {
    readonly __properties_UBTTask_RunBehaviorDynamic: {
        InjectionTag: FGameplayTag;
        DefaultBehaviorAsset: UBehaviorTree;
        BehaviorAsset: UBehaviorTree;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_RunBehaviorDynamic['__properties_UBTTask_RunBehaviorDynamic'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_RunEQSQuery extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_RunEQSQuery: {
        bUseBBKey: boolean;
        EQSRequest: FEQSParametrizedQueryExecutionRequest;
        bUpdateBBOnFail: boolean;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_RunEQSQuery['__properties_UBTTask_RunEQSQuery'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueBool extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueBool: {
        Value: FValueOrBBKey_Bool;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueBool['__properties_UBTTask_SetKeyValueBool'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueClass extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueClass: {
        BaseClass: UClass;
        Value: FValueOrBBKey_Class;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueClass['__properties_UBTTask_SetKeyValueClass'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueEnum extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueEnum: {
        EnumType: UEnum;
        Value: FValueOrBBKey_Enum;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueEnum['__properties_UBTTask_SetKeyValueEnum'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueFloat extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueFloat: {
        Value: FValueOrBBKey_Float;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueFloat['__properties_UBTTask_SetKeyValueFloat'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueInt32 extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueInt32: {
        Value: FValueOrBBKey_Int32;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueInt32['__properties_UBTTask_SetKeyValueInt32'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueName extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueName: {
        Value: FValueOrBBKey_Name;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueName['__properties_UBTTask_SetKeyValueName'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueObject extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueObject: {
        BaseClass: UClass;
        Value: FValueOrBBKey_Object;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueObject['__properties_UBTTask_SetKeyValueObject'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueRotator extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueRotator: {
        Value: FValueOrBBKey_Rotator;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueRotator['__properties_UBTTask_SetKeyValueRotator'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueString extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueString: {
        Value: FValueOrBBKey_String;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueString['__properties_UBTTask_SetKeyValueString'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueStruct extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueStruct: {
        StructType: UScriptStruct;
        Value: FValueOrBBKey_Struct;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueStruct['__properties_UBTTask_SetKeyValueStruct'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetKeyValueVector extends UBTTask_BlackboardBase {
    readonly __properties_UBTTask_SetKeyValueVector: {
        Value: FValueOrBBKey_Vector;
    };
    readonly __staticRegistry: 
        UBTTask_BlackboardBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetKeyValueVector['__properties_UBTTask_SetKeyValueVector'] &
        UBTTask_BlackboardBase['__propertyRegistry'];
}

declare interface UBTTask_SetTagCooldown extends UBTTaskNode {
    readonly __properties_UBTTask_SetTagCooldown: {
        CooldownTag: FGameplayTag;
        bAddToExistingDuration: FValueOrBBKey_Bool;
        CooldownDuration: FValueOrBBKey_Float;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_SetTagCooldown['__properties_UBTTask_SetTagCooldown'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_Wait extends UBTTaskNode {
    readonly __properties_UBTTask_Wait: {
        WaitTime: FValueOrBBKey_Float;
        RandomDeviation: FValueOrBBKey_Float;
    };
    readonly __staticRegistry: 
        UBTTaskNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_Wait['__properties_UBTTask_Wait'] &
        UBTTaskNode['__propertyRegistry'];
}

declare interface UBTTask_WaitBlackboardTime extends UBTTask_Wait {
    readonly __properties_UBTTask_WaitBlackboardTime: {
        BlackboardKey: FBlackboardKeySelector;
    };
    readonly __staticRegistry: 
        UBTTask_Wait['__staticRegistry'];
    readonly __propertyRegistry: 
        UBTTask_WaitBlackboardTime['__properties_UBTTask_WaitBlackboardTime'] &
        UBTTask_Wait['__propertyRegistry'];
}

declare interface UBehaviorTree extends UObject {
    readonly __properties_UBehaviorTree: {
        RootNode: UBTCompositeNode;
        BlackboardAsset: UBlackboardData;
        RootDecorators: UBTDecorator[];
        RootDecoratorOps: FBTDecoratorLogic[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBehaviorTree['__properties_UBehaviorTree'] &
        UObject['__propertyRegistry'];
}

declare interface UBehaviorTreeComponent extends UBrainComponent {
    readonly __static_UBehaviorTreeComponent: {
        SetDynamicSubtree(InjectTag: FGameplayTag, BehaviorAsset: UBehaviorTree): void;
        GetTagCooldownEndTime(CooldownTag: FGameplayTag): number;
        AddCooldownTagDuration(CooldownTag: FGameplayTag, CooldownDuration: number, bAddToExistingDuration: boolean): void;
    };
    readonly __properties_UBehaviorTreeComponent: {
        NodeInstances: UBTNode[];
        DefaultBehaviorTreeAsset: UBehaviorTree;
    };
    readonly __staticRegistry: 
        UBehaviorTreeComponent['__static_UBehaviorTreeComponent'] &
        UBrainComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBehaviorTreeComponent['__properties_UBehaviorTreeComponent'] &
        UBrainComponent['__propertyRegistry'];
}

declare interface UBehaviorTreeManager extends UObject {
    readonly __properties_UBehaviorTreeManager: {
        MaxDebuggerSteps: number;
        LoadedTemplates: FBehaviorTreeTemplateInfo[];
        ActiveComponents: UBehaviorTreeComponent[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBehaviorTreeManager['__properties_UBehaviorTreeManager'] &
        UObject['__propertyRegistry'];
}

declare interface UBehaviorTreeTypes extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UBlackboardComponent extends UActorComponent {
    readonly __static_UBlackboardComponent: {
        SetValueAsVector(KeyName: string, VectorValue: FVector): void;
        SetValueAsString(KeyName: string, StringValue: string): void;
        SetValueAsRotator(KeyName: string, VectorValue: FRotator): void;
        SetValueAsObject(KeyName: string, ObjectValue: UObject): void;
        SetValueAsName(KeyName: string, nameValue: string): void;
        SetValueAsInt(KeyName: string, IntValue: number): void;
        SetValueAsFloat(KeyName: string, FloatValue: number): void;
        SetValueAsEnum(KeyName: string, EnumValue: number): void;
        SetValueAsClass(KeyName: string, ClassValue: UClass): void;
        SetValueAsBool(KeyName: string, boolValue: boolean): void;
        IsVectorValueSet(KeyName: string): boolean;
        GetValueAsVector(KeyName: string): FVector;
        GetValueAsString(KeyName: string): string;
        GetValueAsRotator(KeyName: string): FRotator;
        GetValueAsObject(KeyName: string): UObject;
        GetValueAsName(KeyName: string): string;
        GetValueAsInt(KeyName: string): number;
        GetValueAsFloat(KeyName: string): number;
        GetValueAsEnum(KeyName: string): number;
        GetValueAsClass(KeyName: string): UClass;
        GetValueAsBool(KeyName: string): boolean;
        GetRotationFromEntry(KeyName: string, ResultRotation: FRotator): boolean;
        GetLocationFromEntry(KeyName: string, ResultLocation: FVector): boolean;
        ClearValue(KeyName: string): void;
    };
    readonly __properties_UBlackboardComponent: {
        BrainComp: UBrainComponent;
        DefaultBlackboardAsset: UBlackboardData;
        BlackboardAsset: UBlackboardData;
        KeyInstances: UBlackboardKeyType[];
    };
    readonly __staticRegistry: 
        UBlackboardComponent['__static_UBlackboardComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardComponent['__properties_UBlackboardComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UBlackboardData extends UDataAsset {
    readonly __properties_UBlackboardData: {
        Parent: UBlackboardData;
        Keys: FBlackboardEntry[];
        bHasSynchronizedKeys: boolean;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardData['__properties_UBlackboardData'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UBlackboardKeyType extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Bool extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Bool: {
        bDefaultValue: boolean;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Bool['__properties_UBlackboardKeyType_Bool'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Class extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Class: {
        BaseClass: UClass;
        DefaultValue: UClass;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Class['__properties_UBlackboardKeyType_Class'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Enum extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Enum: {
        EnumType: UEnum;
        EnumName: string;
        DefaultValue: number;
        bIsEnumNameValid: boolean;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Enum['__properties_UBlackboardKeyType_Enum'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Float extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Float: {
        DefaultValue: number;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Float['__properties_UBlackboardKeyType_Float'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Int extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Int: {
        DefaultValue: number;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Int['__properties_UBlackboardKeyType_Int'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Name extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Name: {
        DefaultValue: string;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Name['__properties_UBlackboardKeyType_Name'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_NativeEnum extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_NativeEnum: {
        EnumName: string;
        EnumType: UEnum;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_NativeEnum['__properties_UBlackboardKeyType_NativeEnum'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Object extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Object: {
        BaseClass: UClass;
        DefaultValue: UObject;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Object['__properties_UBlackboardKeyType_Object'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Rotator extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Rotator: {
        DefaultValue: FRotator;
        bUseDefaultValue: boolean;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Rotator['__properties_UBlackboardKeyType_Rotator'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_String extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_String: {
        StringValue: string;
        DefaultValue: string;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_String['__properties_UBlackboardKeyType_String'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Struct extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Struct: {
        DefaultValue: FInstancedStruct;
        Value: FInstancedStruct;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Struct['__properties_UBlackboardKeyType_Struct'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBlackboardKeyType_Vector extends UBlackboardKeyType {
    readonly __properties_UBlackboardKeyType_Vector: {
        DefaultValue: FVector;
        bUseDefaultValue: boolean;
    };
    readonly __staticRegistry: 
        UBlackboardKeyType['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlackboardKeyType_Vector['__properties_UBlackboardKeyType_Vector'] &
        UBlackboardKeyType['__propertyRegistry'];
}

declare interface UBrainComponent extends UActorComponent {
    readonly __static_UBrainComponent: {
        StopLogic(Reason: string): void;
        StartLogic(): void;
        RestartLogic(): void;
        IsRunning(): boolean;
        IsPaused(): boolean;
    };
    readonly __properties_UBrainComponent: {
        BlackboardComp: UBlackboardComponent;
        AIOwner: AAIController;
    };
    readonly __staticRegistry: 
        UBrainComponent['__static_UBrainComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBrainComponent['__properties_UBrainComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UCrowdFollowingComponent extends UPathFollowingComponent {
    readonly __static_UCrowdFollowingComponent: {
        SuspendCrowdSteering(bSuspend: boolean): void;
    };
    readonly __properties_UCrowdFollowingComponent: {
        CrowdAgentMoveDirection: FVector;
    };
    readonly __staticRegistry: 
        UCrowdFollowingComponent['__static_UCrowdFollowingComponent'] &
        UPathFollowingComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCrowdFollowingComponent['__properties_UCrowdFollowingComponent'] &
        UPathFollowingComponent['__propertyRegistry'];
}

declare interface UCrowdManager extends UCrowdManagerBase {
    readonly __properties_UCrowdManager: {
        MyNavData: ANavigationData;
        AvoidanceConfig: FCrowdAvoidanceConfig[];
        SamplingPatterns: FCrowdAvoidanceSamplingPattern[];
        MaxAgents: number;
        MaxAgentRadius: number;
        MaxAvoidedAgents: number;
        MaxAvoidedWalls: number;
        NavmeshCheckInterval: number;
        PathOptimizationInterval: number;
        SeparationDirClamp: number;
        PathOffsetRadiusMultiplier: number;
        bResolveCollisions: boolean;
    };
    readonly __staticRegistry: 
        UCrowdManagerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCrowdManager['__properties_UCrowdManager'] &
        UCrowdManagerBase['__propertyRegistry'];
}

declare interface UEQSRenderingComponent extends UDebugDrawComponent {
    readonly __staticRegistry: 
        UDebugDrawComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDebugDrawComponent['__propertyRegistry'];
}

declare interface UEnvQuery extends UDataAsset {
    readonly __properties_UEnvQuery: {
        QueryName: string;
        Options: UEnvQueryOption[];
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQuery['__properties_UEnvQuery'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UEnvQueryContext extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UEnvQueryContext_BlueprintBase extends UEnvQueryContext {
    readonly __static_UEnvQueryContext_BlueprintBase: {
        ProvideSingleLocation(QuerierObject: UObject, QuerierActor: AActor, ResultingLocation: FVector): void;
        ProvideSingleActor(QuerierObject: UObject, QuerierActor: AActor, ResultingActor: AActor): void;
        ProvideLocationsSet(QuerierObject: UObject, QuerierActor: AActor, ResultingLocationSet: FVector[]): void;
        ProvideActorsSet(QuerierObject: UObject, QuerierActor: AActor, ResultingActorsSet: AActor[]): void;
    };
    readonly __staticRegistry: 
        UEnvQueryContext_BlueprintBase['__static_UEnvQueryContext_BlueprintBase'] &
        UEnvQueryContext['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryContext['__propertyRegistry'];
}

declare interface UEnvQueryContext_Item extends UEnvQueryContext {
    readonly __staticRegistry: 
        UEnvQueryContext['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryContext['__propertyRegistry'];
}

declare interface UEnvQueryContext_NavigationData extends UEnvQueryContext {
    readonly __properties_UEnvQueryContext_NavigationData: {
        NavAgentProperties: FNavAgentProperties;
    };
    readonly __staticRegistry: 
        UEnvQueryContext['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryContext_NavigationData['__properties_UEnvQueryContext_NavigationData'] &
        UEnvQueryContext['__propertyRegistry'];
}

declare interface UEnvQueryContext_Querier extends UEnvQueryContext {
    readonly __staticRegistry: 
        UEnvQueryContext['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryContext['__propertyRegistry'];
}

declare interface UEnvQueryDebugHelpers extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UEnvQueryGenerator extends UEnvQueryNode {
    readonly __properties_UEnvQueryGenerator: {
        OptionName: string;
        ItemType: TSubclassOf<UEnvQueryItemType>;
        bAutoSortTests: boolean;
        bCanRunAsync: boolean;
    };
    readonly __staticRegistry: 
        UEnvQueryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator['__properties_UEnvQueryGenerator'] &
        UEnvQueryNode['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_ActorsOfClass extends UEnvQueryGenerator {
    readonly __properties_UEnvQueryGenerator_ActorsOfClass: {
        SearchedActorClass: TSubclassOf<AActor>;
        GenerateOnlyActorsInRadius: FAIDataProviderBoolValue;
        SearchRadius: FAIDataProviderFloatValue;
        SearchCenter: TSubclassOf<UEnvQueryContext>;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_ActorsOfClass['__properties_UEnvQueryGenerator_ActorsOfClass'] &
        UEnvQueryGenerator['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_BlueprintBase extends UEnvQueryGenerator {
    readonly __static_UEnvQueryGenerator_BlueprintBase: {
        GetQuerier(): UObject;
        DoItemGenerationFromActors(ContextActors: AActor[]): void;
        DoItemGeneration(ContextLocations: FVector[]): void;
        AddGeneratedVector(GeneratedVector: FVector): void;
        AddGeneratedActor(GeneratedActor: AActor): void;
    };
    readonly __properties_UEnvQueryGenerator_BlueprintBase: {
        GeneratorsActionDescription: string;
        Context: TSubclassOf<UEnvQueryContext>;
        GeneratedItemType: TSubclassOf<UEnvQueryItemType>;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator_BlueprintBase['__static_UEnvQueryGenerator_BlueprintBase'] &
        UEnvQueryGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_BlueprintBase['__properties_UEnvQueryGenerator_BlueprintBase'] &
        UEnvQueryGenerator['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_Composite extends UEnvQueryGenerator {
    readonly __properties_UEnvQueryGenerator_Composite: {
        Generators: UEnvQueryGenerator[];
        bAllowDifferentItemTypes: boolean;
        bHasMatchingItemType: boolean;
        ForcedItemType: TSubclassOf<UEnvQueryItemType>;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_Composite['__properties_UEnvQueryGenerator_Composite'] &
        UEnvQueryGenerator['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_Cone extends UEnvQueryGenerator_ProjectedPoints {
    readonly __properties_UEnvQueryGenerator_Cone: {
        AlignedPointsDistance: FAIDataProviderFloatValue;
        ConeDegrees: FAIDataProviderFloatValue;
        AngleStep: FAIDataProviderFloatValue;
        Range: FAIDataProviderFloatValue;
        CenterActor: TSubclassOf<UEnvQueryContext>;
        bIncludeContextLocation: boolean;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator_ProjectedPoints['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_Cone['__properties_UEnvQueryGenerator_Cone'] &
        UEnvQueryGenerator_ProjectedPoints['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_CurrentLocation extends UEnvQueryGenerator_ProjectedPoints {
    readonly __properties_UEnvQueryGenerator_CurrentLocation: {
        QueryContext: TSubclassOf<UEnvQueryContext>;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator_ProjectedPoints['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_CurrentLocation['__properties_UEnvQueryGenerator_CurrentLocation'] &
        UEnvQueryGenerator_ProjectedPoints['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_Donut extends UEnvQueryGenerator_ProjectedPoints {
    readonly __properties_UEnvQueryGenerator_Donut: {
        InnerRadius: FAIDataProviderFloatValue;
        OuterRadius: FAIDataProviderFloatValue;
        NumberOfRings: FAIDataProviderIntValue;
        PointsPerRing: FAIDataProviderIntValue;
        ArcDirection: FEnvDirection;
        ArcAngle: FAIDataProviderFloatValue;
        bUseSpiralPattern: boolean;
        Center: TSubclassOf<UEnvQueryContext>;
        bDefineArc: boolean;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator_ProjectedPoints['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_Donut['__properties_UEnvQueryGenerator_Donut'] &
        UEnvQueryGenerator_ProjectedPoints['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_OnCircle extends UEnvQueryGenerator_ProjectedPoints {
    readonly __properties_UEnvQueryGenerator_OnCircle: {
        CircleRadius: FAIDataProviderFloatValue;
        PointOnCircleSpacingMethod: EPointOnCircleSpacingMethod;
        SpaceBetween: FAIDataProviderFloatValue;
        NumberOfPoints: FAIDataProviderIntValue;
        ArcDirection: FEnvDirection;
        ArcDirectionOffsetDegrees: FAIDataProviderFloatValue;
        ArcAngle: FAIDataProviderFloatValue;
        CircleCenter: TSubclassOf<UEnvQueryContext>;
        bIgnoreAnyContextActorsWhenGeneratingCircle: boolean;
        CircleCenterZOffset: FAIDataProviderFloatValue;
        TraceData: FEnvTraceData;
        bDefineArc: boolean;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator_ProjectedPoints['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_OnCircle['__properties_UEnvQueryGenerator_OnCircle'] &
        UEnvQueryGenerator_ProjectedPoints['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_PathingGrid extends UEnvQueryGenerator_SimpleGrid {
    readonly __properties_UEnvQueryGenerator_PathingGrid: {
        PathToItem: FAIDataProviderBoolValue;
        NavigationFilter: TSubclassOf<UNavigationQueryFilter>;
        ScanRangeMultiplier: FAIDataProviderFloatValue;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator_SimpleGrid['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_PathingGrid['__properties_UEnvQueryGenerator_PathingGrid'] &
        UEnvQueryGenerator_SimpleGrid['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_PerceivedActors extends UEnvQueryGenerator {
    readonly __properties_UEnvQueryGenerator_PerceivedActors: {
        AllowedActorClass: TSubclassOf<AActor>;
        SearchRadius: FAIDataProviderFloatValue;
        ListenerContext: TSubclassOf<UEnvQueryContext>;
        SenseToUse: TSubclassOf<UAISense>;
        bIncludeKnownActors: boolean;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_PerceivedActors['__properties_UEnvQueryGenerator_PerceivedActors'] &
        UEnvQueryGenerator['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_ProjectedPoints extends UEnvQueryGenerator {
    readonly __properties_UEnvQueryGenerator_ProjectedPoints: {
        ProjectionData: FEnvTraceData;
        NavDataOverrideContext: TSubclassOf<UEnvQueryContext>;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_ProjectedPoints['__properties_UEnvQueryGenerator_ProjectedPoints'] &
        UEnvQueryGenerator['__propertyRegistry'];
}

declare interface UEnvQueryGenerator_SimpleGrid extends UEnvQueryGenerator_ProjectedPoints {
    readonly __properties_UEnvQueryGenerator_SimpleGrid: {
        GridSize: FAIDataProviderFloatValue;
        SpaceBetween: FAIDataProviderFloatValue;
        GenerateAround: TSubclassOf<UEnvQueryContext>;
    };
    readonly __staticRegistry: 
        UEnvQueryGenerator_ProjectedPoints['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryGenerator_SimpleGrid['__properties_UEnvQueryGenerator_SimpleGrid'] &
        UEnvQueryGenerator_ProjectedPoints['__propertyRegistry'];
}

declare interface UEnvQueryInstanceBlueprintWrapper extends UObject {
    readonly __static_UEnvQueryInstanceBlueprintWrapper: {
        SetNamedParam(ParamName: string, Value: number): void;
        GetResultsAsLocations(): FVector[];
        GetResultsAsActors(): AActor[];
        GetQueryResultsAsLocations(ResultLocations: FVector[]): boolean;
        GetQueryResultsAsActors(ResultActors: AActor[]): boolean;
        GetItemScore(ItemIndex: number): number;
        EQSQueryDoneSignature__DelegateSignature(QueryInstance: UEnvQueryInstanceBlueprintWrapper, QueryStatus: EEnvQueryStatus): void;
    };
    readonly __properties_UEnvQueryInstanceBlueprintWrapper: {
        QueryID: number;
        ItemType: TSubclassOf<UEnvQueryItemType>;
        OptionIndex: number;
        OnQueryFinishedEvent: FEnvQueryInstanceBlueprintWrapperOnQueryFinishedEvent;
    };
    readonly __staticRegistry: 
        UEnvQueryInstanceBlueprintWrapper['__static_UEnvQueryInstanceBlueprintWrapper'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryInstanceBlueprintWrapper['__properties_UEnvQueryInstanceBlueprintWrapper'] &
        UObject['__propertyRegistry'];
}

declare interface UEnvQueryItemType extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UEnvQueryItemType_Actor extends UEnvQueryItemType_ActorBase {
    readonly __staticRegistry: 
        UEnvQueryItemType_ActorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryItemType_ActorBase['__propertyRegistry'];
}

declare interface UEnvQueryItemType_ActorBase extends UEnvQueryItemType_VectorBase {
    readonly __staticRegistry: 
        UEnvQueryItemType_VectorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryItemType_VectorBase['__propertyRegistry'];
}

declare interface UEnvQueryItemType_Direction extends UEnvQueryItemType_VectorBase {
    readonly __staticRegistry: 
        UEnvQueryItemType_VectorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryItemType_VectorBase['__propertyRegistry'];
}

declare interface UEnvQueryItemType_Point extends UEnvQueryItemType_VectorBase {
    readonly __staticRegistry: 
        UEnvQueryItemType_VectorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryItemType_VectorBase['__propertyRegistry'];
}

declare interface UEnvQueryItemType_VectorBase extends UEnvQueryItemType {
    readonly __staticRegistry: 
        UEnvQueryItemType['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryItemType['__propertyRegistry'];
}

declare interface UEnvQueryManager extends UAISubsystem {
    readonly __static_UEnvQueryManager: {
        RunEQSQuery(WorldContextObject: UObject, QueryTemplate: UEnvQuery, Querier: UObject, RunMode: EEnvQueryRunMode, WrapperClass: TSubclassOf<UEnvQueryInstanceBlueprintWrapper>): UEnvQueryInstanceBlueprintWrapper;
    };
    readonly __properties_UEnvQueryManager: {
        InstanceCache: FEnvQueryInstanceCache[];
        LocalContexts: UEnvQueryContext[];
        GCShieldedWrappers: UEnvQueryInstanceBlueprintWrapper[];
        MaxAllowedTestingTime: number;
        bTestQueriesUsingBreadth: boolean;
        QueryCountWarningThreshold: number;
        QueryCountWarningInterval: number;
        ExecutionTimeWarningSeconds: number;
        HandlingResultTimeWarningSeconds: number;
        GenerationTimeWarningSeconds: number;
    };
    readonly __staticRegistry: 
        UEnvQueryManager['__static_UEnvQueryManager'] &
        UAISubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryManager['__properties_UEnvQueryManager'] &
        UAISubsystem['__propertyRegistry'];
}

declare interface UEnvQueryNode extends UObject {
    readonly __properties_UEnvQueryNode: {
        VerNum: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryNode['__properties_UEnvQueryNode'] &
        UObject['__propertyRegistry'];
}

declare interface UEnvQueryOption extends UObject {
    readonly __properties_UEnvQueryOption: {
        Generator: UEnvQueryGenerator;
        Tests: UEnvQueryTest[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryOption['__properties_UEnvQueryOption'] &
        UObject['__propertyRegistry'];
}

declare interface UEnvQueryTest extends UEnvQueryNode {
    readonly __properties_UEnvQueryTest: {
        TestOrder: number;
        TestPurpose: EEnvTestPurpose;
        TestComment: string;
        MultipleContextFilterOp: EEnvTestFilterOperator;
        MultipleContextScoreOp: EEnvTestScoreOperator;
        FilterType: EEnvTestFilterType;
        boolValue: FAIDataProviderBoolValue;
        FloatValueMin: FAIDataProviderFloatValue;
        FloatValueMax: FAIDataProviderFloatValue;
        ScoringEquation: EEnvTestScoreEquation;
        ClampMinType: EEnvQueryTestClamping;
        ClampMaxType: EEnvQueryTestClamping;
        NormalizationType: EEQSNormalizationType;
        ScoreClampMin: FAIDataProviderFloatValue;
        ScoreClampMax: FAIDataProviderFloatValue;
        ScoringFactor: FAIDataProviderFloatValue;
        ReferenceValue: FAIDataProviderFloatValue;
        bDefineReferenceValue: boolean;
        bWorkOnFloatValues: boolean;
    };
    readonly __staticRegistry: 
        UEnvQueryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest['__properties_UEnvQueryTest'] &
        UEnvQueryNode['__propertyRegistry'];
}

declare interface UEnvQueryTest_Distance extends UEnvQueryTest {
    readonly __properties_UEnvQueryTest_Distance: {
        TestMode: EEnvTestDistance;
        DistanceTo: TSubclassOf<UEnvQueryContext>;
    };
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_Distance['__properties_UEnvQueryTest_Distance'] &
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTest_Dot extends UEnvQueryTest {
    readonly __properties_UEnvQueryTest_Dot: {
        LineA: FEnvDirection;
        LineB: FEnvDirection;
        TestMode: EEnvTestDot;
        bAbsoluteValue: boolean;
    };
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_Dot['__properties_UEnvQueryTest_Dot'] &
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTest_GameplayTags extends UEnvQueryTest {
    readonly __properties_UEnvQueryTest_GameplayTags: {
        TagQueryToMatch: FGameplayTagQuery;
        bRejectIncompatibleItems: boolean;
        bUpdatedToUseQuery: boolean;
        TagsToMatch: EGameplayContainerMatchType;
        GameplayTags: FGameplayTagContainer;
    };
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_GameplayTags['__properties_UEnvQueryTest_GameplayTags'] &
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTest_Overlap extends UEnvQueryTest {
    readonly __properties_UEnvQueryTest_Overlap: {
        OverlapData: FEnvOverlapData;
    };
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_Overlap['__properties_UEnvQueryTest_Overlap'] &
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTest_Pathfinding extends UEnvQueryTest {
    readonly __properties_UEnvQueryTest_Pathfinding: {
        TestMode: EEnvTestPathfinding;
        Context: TSubclassOf<UEnvQueryContext>;
        PathFromContext: FAIDataProviderBoolValue;
        SkipUnreachable: FAIDataProviderBoolValue;
        FilterClass: TSubclassOf<UNavigationQueryFilter>;
    };
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_Pathfinding['__properties_UEnvQueryTest_Pathfinding'] &
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTest_PathfindingBatch extends UEnvQueryTest_Pathfinding {
    readonly __properties_UEnvQueryTest_PathfindingBatch: {
        ScanRangeMultiplier: FAIDataProviderFloatValue;
    };
    readonly __staticRegistry: 
        UEnvQueryTest_Pathfinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_PathfindingBatch['__properties_UEnvQueryTest_PathfindingBatch'] &
        UEnvQueryTest_Pathfinding['__propertyRegistry'];
}

declare interface UEnvQueryTest_Project extends UEnvQueryTest {
    readonly __properties_UEnvQueryTest_Project: {
        ProjectionData: FEnvTraceData;
    };
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_Project['__properties_UEnvQueryTest_Project'] &
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTest_Random extends UEnvQueryTest {
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTest_Trace extends UEnvQueryTest {
    readonly __properties_UEnvQueryTest_Trace: {
        TraceData: FEnvTraceData;
        TraceFromContext: FAIDataProviderBoolValue;
        ItemHeightOffset: FAIDataProviderFloatValue;
        ContextHeightOffset: FAIDataProviderFloatValue;
        Context: TSubclassOf<UEnvQueryContext>;
    };
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_Trace['__properties_UEnvQueryTest_Trace'] &
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTest_Volume extends UEnvQueryTest {
    readonly __properties_UEnvQueryTest_Volume: {
        VolumeContext: TSubclassOf<UEnvQueryContext>;
        VolumeClass: TSubclassOf<AVolume>;
        bDoComplexVolumeTest: boolean;
        bSkipTestIfNoVolumes: boolean;
    };
    readonly __staticRegistry: 
        UEnvQueryTest['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvQueryTest_Volume['__properties_UEnvQueryTest_Volume'] &
        UEnvQueryTest['__propertyRegistry'];
}

declare interface UEnvQueryTypes extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UGeneratedNavLinksProxy extends UBaseGeneratedNavLinksProxy {
    readonly __static_UGeneratedNavLinksProxy: {
        ReceiveSmartLinkReached(Agent: AActor, Destination: FVector): void;
    };
    readonly __properties_UGeneratedNavLinksProxy: {
        OnSmartLinkReached: FGeneratedNavLinksProxyOnSmartLinkReached;
    };
    readonly __staticRegistry: 
        UGeneratedNavLinksProxy['__static_UGeneratedNavLinksProxy'] &
        UBaseGeneratedNavLinksProxy['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeneratedNavLinksProxy['__properties_UGeneratedNavLinksProxy'] &
        UBaseGeneratedNavLinksProxy['__propertyRegistry'];
}

declare interface UGridPathFollowingComponent extends UPathFollowingComponent {
    readonly __properties_UGridPathFollowingComponent: {
        GridManager: UNavLocalGridManager;
    };
    readonly __staticRegistry: 
        UPathFollowingComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGridPathFollowingComponent['__properties_UGridPathFollowingComponent'] &
        UPathFollowingComponent['__propertyRegistry'];
}

declare interface UNavFilter_AIControllerDefault extends UNavigationQueryFilter {
    readonly __staticRegistry: 
        UNavigationQueryFilter['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationQueryFilter['__propertyRegistry'];
}

declare interface UNavLocalGridManager extends UObject {
    readonly __static_UNavLocalGridManager: {
        SetLocalNavigationGridDensity(WorldContextObject: UObject, CellSize: number): boolean;
        RemoveLocalNavigationGrid(WorldContextObject: UObject, GridId: number, bRebuildGrids: boolean): void;
        FindLocalNavigationGridPath(WorldContextObject: UObject, Start: FVector, End: FVector, PathPoints: FVector[]): boolean;
        AddLocalNavigationGridForPoints(WorldContextObject: UObject, Locations: FVector[], Radius2D: number, Height: number, bRebuildGrids: boolean): number;
        AddLocalNavigationGridForPoint(WorldContextObject: UObject, Location: FVector, Radius2D: number, Height: number, bRebuildGrids: boolean): number;
        AddLocalNavigationGridForCapsule(WorldContextObject: UObject, Location: FVector, CapsuleRadius: number, CapsuleHalfHeight: number, Radius2D: number, Height: number, bRebuildGrids: boolean): number;
        AddLocalNavigationGridForBox(WorldContextObject: UObject, Location: FVector, Extent: FVector, Rotation: FRotator, Radius2D: number, Height: number, bRebuildGrids: boolean): number;
    };
    readonly __staticRegistry: 
        UNavLocalGridManager['__static_UNavLocalGridManager'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPathFollowingComponent extends UActorComponent {
    readonly __static_UPathFollowingComponent: {
        OnNavDataRegistered(NavData: ANavigationData): void;
        OnActorBump(SelfActor: AActor, OtherActor: AActor, NormalImpulse: FVector, Hit: FHitResult): void;
        GetPathDestination(): FVector;
        GetPathActionType(): EPathFollowingAction;
    };
    readonly __properties_UPathFollowingComponent: {
        MovementComp: UNavMovementComponent;
        MyNavData: ANavigationData;
    };
    readonly __staticRegistry: 
        UPathFollowingComponent['__static_UPathFollowingComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UPathFollowingComponent['__properties_UPathFollowingComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UPathFollowingManager extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPawnSensingComponent extends UActorComponent {
    readonly __static_UPawnSensingComponent: {
        SetSensingUpdatesEnabled(bEnabled: boolean): void;
        SetSensingInterval(NewSensingInterval: number): void;
        SetPeripheralVisionAngle(NewPeripheralVisionAngle: number): void;
        SeePawnDelegate__DelegateSignature(Pawn: APawn): void;
        HearNoiseDelegate__DelegateSignature(Instigator: APawn, Location: FVector, Volume: number): void;
        GetPeripheralVisionCosine(): number;
        GetPeripheralVisionAngle(): number;
    };
    readonly __properties_UPawnSensingComponent: {
        HearingThreshold: number;
        LOSHearingThreshold: number;
        SightRadius: number;
        SensingInterval: number;
        HearingMaxSoundAge: number;
        bEnableSensingUpdates: boolean;
        bOnlySensePlayers: boolean;
        bSeePawns: boolean;
        bHearNoises: boolean;
        OnSeePawn: FPawnSensingComponentOnSeePawn;
        OnHearNoise: FPawnSensingComponentOnHearNoise;
        PeripheralVisionAngle: number;
        PeripheralVisionCosine: number;
    };
    readonly __staticRegistry: 
        UPawnSensingComponent['__static_UPawnSensingComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UPawnSensingComponent['__properties_UPawnSensingComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UValueOrBBKeyBlueprintUtility extends UBlueprintFunctionLibrary {
    readonly __static_UValueOrBBKeyBlueprintUtility: {
        GetVector(Value: FValueOrBBKey_Vector, BehaviorTreeComp: UBehaviorTreeComponent): FVector;
        GetStruct(Value: FValueOrBBKey_Struct, BehaviorTreeComp: UBehaviorTreeComponent): FInstancedStruct;
        GetString(Value: FValueOrBBKey_String, BehaviorTreeComp: UBehaviorTreeComponent): string;
        GetRotator(Value: FValueOrBBKey_Rotator, BehaviorTreeComp: UBehaviorTreeComponent): FRotator;
        GetObject(Value: FValueOrBBKey_Object, BehaviorTreeComp: UBehaviorTreeComponent): UObject;
        GetName(Value: FValueOrBBKey_Name, BehaviorTreeComp: UBehaviorTreeComponent): string;
        GetInt32(Value: FValueOrBBKey_Int32, BehaviorTreeComp: UBehaviorTreeComponent): number;
        GetFloat(Value: FValueOrBBKey_Float, BehaviorTreeComp: UBehaviorTreeComponent): number;
        GetEnum(Value: FValueOrBBKey_Enum, BehaviorTreeComp: UBehaviorTreeComponent): number;
        GetClass(Value: FValueOrBBKey_Class, BehaviorTreeComp: UBehaviorTreeComponent): UClass;
        GetBool(Value: FValueOrBBKey_Bool, BehaviorTreeComp: UBehaviorTreeComponent): boolean;
    };
    readonly __staticRegistry: 
        UValueOrBBKeyBlueprintUtility['__static_UValueOrBBKeyBlueprintUtility'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UVisualLoggerExtension extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

