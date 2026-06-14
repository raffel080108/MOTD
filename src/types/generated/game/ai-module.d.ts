declare interface AAIController extends AController {
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
}
declare const AAIController: AAIController;

declare interface ADetourCrowdAIController extends AAIController {

}
declare const ADetourCrowdAIController: ADetourCrowdAIController;

declare interface AEQSTestingPawn extends ACharacter {
    QueryTemplate: UEnvQuery;
    QueryParams: TArray<FEnvNamedValue>;
    QueryConfig: TArray<FAIDynamicParam>;
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
}
declare const AEQSTestingPawn: AEQSTestingPawn;

declare interface AGridPathAIController extends AAIController {

}
declare const AGridPathAIController: AGridPathAIController;

declare interface ANavLinkProxy extends AActor {
    PointLinks: TArray<FNavigationLink>;
    SegmentLinks: TArray<FNavigationSegmentLink>;
    SmartLinkComp: UNavLinkCustomComponent;
    bSmartLinkIsRelevant: boolean;
    OnSmartLinkReached: FNavLinkProxyOnSmartLinkReached;
    SetSmartLinkEnabled(bEnabled: boolean): void;
    ResumePathFollowing(Agent: AActor): void;
    ReceiveSmartLinkReached(Agent: AActor, Destination: FVector): void;
    IsSmartLinkEnabled(): boolean;
    HasMovingAgents(): boolean;
}
declare const ANavLinkProxy: ANavLinkProxy;

declare interface FAIDamageEvent {
    Amount: number;
    Location: FVector;
    HitLocation: FVector;
    DamagedActor: AActor;
    Instigator: AActor;
    Tag: FName;
}
declare const FAIDamageEvent: FAIDamageEvent;

declare interface FAIDataProviderBoolValue extends FAIDataProviderTypedValue {
    DefaultValue: boolean;
}
declare const FAIDataProviderBoolValue: FAIDataProviderBoolValue;

declare interface FAIDataProviderFloatValue extends FAIDataProviderTypedValue {
    DefaultValue: number;
}
declare const FAIDataProviderFloatValue: FAIDataProviderFloatValue;

declare interface FAIDataProviderIntValue extends FAIDataProviderTypedValue {
    DefaultValue: number;
}
declare const FAIDataProviderIntValue: FAIDataProviderIntValue;

declare interface FAIDataProviderStructValue extends FAIDataProviderValue {

}
declare const FAIDataProviderStructValue: FAIDataProviderStructValue;

declare interface FAIDataProviderTypedValue extends FAIDataProviderValue {
    PropertyType: UClass;
}
declare const FAIDataProviderTypedValue: FAIDataProviderTypedValue;

declare interface FAIDataProviderValue {
    DataBinding: UAIDataProvider;
    DataField: FName;
}
declare const FAIDataProviderValue: FAIDataProviderValue;

declare interface FAIDynamicParam {
    ParamName: FName;
    ParamType: EAIParamType;
    bAllowBBKey: boolean;
    Value: number;
    BBKey: FBlackboardKeySelector;
}
declare const FAIDynamicParam: FAIDynamicParam;

declare interface FAIMoveRequest {
    GoalActor: TWeakObjectPtr<AActor>;
}
declare const FAIMoveRequest: FAIMoveRequest;

declare interface FAINoiseEvent {
    NoiseLocation: FVector;
    Loudness: number;
    MaxRange: number;
    Instigator: AActor;
    Tag: FName;
}
declare const FAINoiseEvent: FAINoiseEvent;

declare interface FAIPredictionEvent {
    Requestor: AActor;
    PredictedActor: AActor;
}
declare const FAIPredictionEvent: FAIPredictionEvent;

declare interface FAIRequestID {
    RequestID: uint32;
}
declare const FAIRequestID: FAIRequestID;

declare interface FAISenseAffiliationFilter {
    bDetectEnemies: boolean;
    bDetectNeutrals: boolean;
    bDetectFriendlies: boolean;
}
declare const FAISenseAffiliationFilter: FAISenseAffiliationFilter;

declare interface FAISightEvent {
    SeenActor: AActor;
    Observer: AActor;
}
declare const FAISightEvent: FAISightEvent;

declare interface FAIStimulus {
    Age: number;
    ExpirationAge: number;
    Strength: number;
    StimulusLocation: FVector;
    ReceiverLocation: FVector;
    Tag: FName;
    bSuccessfullySensed: boolean;
}
declare const FAIStimulus: FAIStimulus;

declare interface FAITeamStimulusEvent {
    Broadcaster: AActor;
    Enemy: AActor;
}
declare const FAITeamStimulusEvent: FAITeamStimulusEvent;

declare interface FAITouchEvent {
    TouchReceiver: AActor;
    OtherActor: AActor;
}
declare const FAITouchEvent: FAITouchEvent;

declare interface FActorPerceptionBlueprintInfo {
    Target: AActor;
    LastSensedStimuli: TArray<FAIStimulus>;
    bIsHostile: boolean;
    bIsFriendly: boolean;
}
declare const FActorPerceptionBlueprintInfo: FActorPerceptionBlueprintInfo;

declare interface FActorPerceptionUpdateInfo {
    TargetId: number;
    Target: TWeakObjectPtr<AActor>;
    Stimulus: FAIStimulus;
}
declare const FActorPerceptionUpdateInfo: FActorPerceptionUpdateInfo;

declare interface FBTCompositeChild {
    ChildComposite: UBTCompositeNode;
    ChildTask: UBTTaskNode;
    Decorators: TArray<UBTDecorator>;
    DecoratorOps: TArray<FBTDecoratorLogic>;
}
declare const FBTCompositeChild: FBTCompositeChild;

declare interface FBTDecoratorLogic {
    Operation: EBTDecoratorLogic;
    Number: uint16;
}
declare const FBTDecoratorLogic: FBTDecoratorLogic;

declare interface FBehaviorTreeTemplateInfo {
    Asset: UBehaviorTree;
    Template: UBTCompositeNode;
}
declare const FBehaviorTreeTemplateInfo: FBehaviorTreeTemplateInfo;

declare interface FBlackboardEntry {
    EntryName: FName;
    KeyType: UBlackboardKeyType;
    bInstanceSynced: boolean;
}
declare const FBlackboardEntry: FBlackboardEntry;

declare interface FBlackboardKeySelector {
    AllowedTypes: TArray<UBlackboardKeyType>;
    SelectedKeyName: FName;
    SelectedKeyType: TSubclassOf<UBlackboardKeyType>;
    SelectedKeyID: number;
    bNoneIsAllowedValue: boolean;
}
declare const FBlackboardKeySelector: FBlackboardKeySelector;

declare interface FCompactIndexedHandleBase {

}
declare const FCompactIndexedHandleBase: FCompactIndexedHandleBase;

declare interface FCrowdAvoidanceConfig {
    VelocityBias: number;
    DesiredVelocityWeight: number;
    CurrentVelocityWeight: number;
    SideBiasWeight: number;
    ImpactTimeWeight: number;
    ImpactTimeRange: number;
    CustomPatternIdx: uint8;
    AdaptiveDivisions: uint8;
    AdaptiveRings: uint8;
    AdaptiveDepth: uint8;
}
declare const FCrowdAvoidanceConfig: FCrowdAvoidanceConfig;

declare interface FCrowdAvoidanceSamplingPattern {
    Angles: TArray<number>;
    Radii: TArray<number>;
}
declare const FCrowdAvoidanceSamplingPattern: FCrowdAvoidanceSamplingPattern;

declare interface FDefault__AISenseBlueprintListener {

}
declare const FDefault__AISenseBlueprintListener: FDefault__AISenseBlueprintListener;

declare interface FEQSParametrizedQueryExecutionRequest {
    QueryTemplate: UEnvQuery;
    QueryConfig: TArray<FAIDynamicParam>;
    EQSQueryBlackboardKey: FBlackboardKeySelector;
    RunMode: EEnvQueryRunMode;
    bUseBBKeyForQueryTemplate: boolean;
}
declare const FEQSParametrizedQueryExecutionRequest: FEQSParametrizedQueryExecutionRequest;

declare interface FEnvDirection {
    LineFrom: TSubclassOf<UEnvQueryContext>;
    LineTo: TSubclassOf<UEnvQueryContext>;
    Rotation: TSubclassOf<UEnvQueryContext>;
    DirMode: EEnvDirection;
}
declare const FEnvDirection: FEnvDirection;

declare interface FEnvNamedValue {
    ParamName: FName;
    ParamType: EAIParamType;
    Value: number;
}
declare const FEnvNamedValue: FEnvNamedValue;

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
declare const FEnvOverlapData: FEnvOverlapData;

declare interface FEnvQueryInstanceCache {
    Template: UEnvQuery;
}
declare const FEnvQueryInstanceCache: FEnvQueryInstanceCache;

declare interface FEnvQueryManagerConfig {
    MaxAllowedTestingTime: number;
    bTestQueriesUsingBreadth: boolean;
    QueryCountWarningThreshold: number;
    QueryCountWarningInterval: number;
    ExecutionTimeWarningSeconds: number;
    HandlingResultTimeWarningSeconds: number;
    GenerationTimeWarningSeconds: number;
}
declare const FEnvQueryManagerConfig: FEnvQueryManagerConfig;

declare interface FEnvQueryRequest {
    QueryTemplate: UEnvQuery;
    Owner: UObject;
    World: UWorld;
}
declare const FEnvQueryRequest: FEnvQueryRequest;

declare interface FEnvQueryResult {
    ItemType: TSubclassOf<UEnvQueryItemType>;
    OptionIndex: number;
    QueryID: number;
}
declare const FEnvQueryResult: FEnvQueryResult;

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
    TraceProfileName: FName;
    TraceShape: EEnvTraceShape;
    TraceMode: EEnvQueryTrace;
    bTraceComplex: boolean;
    bOnlyBlockingHits: boolean;
    bCanTraceOnNavMesh: boolean;
    bCanTraceOnGeometry: boolean;
    bCanDisableTrace: boolean;
    bCanProjectDown: boolean;
}
declare const FEnvTraceData: FEnvTraceData;

declare interface FGenericTeamId {
    TeamID: uint8;
}
declare const FGenericTeamId: FGenericTeamId;

declare interface FIndexedHandleBase extends FSimpleIndexedHandleBase {

}
declare const FIndexedHandleBase: FIndexedHandleBase;

declare interface FIntervalCountdown {
    Interval: number;
}
declare const FIntervalCountdown: FIntervalCountdown;

declare interface FRecastGraphWrapper {
    RecastNavMeshActor: ARecastNavMesh;
}
declare const FRecastGraphWrapper: FRecastGraphWrapper;

declare interface FSequentialIDBase {
    Value: uint32;
}
declare const FSequentialIDBase: FSequentialIDBase;

declare interface FSimpleIndexedHandleBase {

}
declare const FSimpleIndexedHandleBase: FSimpleIndexedHandleBase;

declare interface FValueOrBBKey_Bool extends FValueOrBlackboardKeyBase {
    DefaultValue: boolean;
}
declare const FValueOrBBKey_Bool: FValueOrBBKey_Bool;

declare interface FValueOrBBKey_Class extends FValueOrBlackboardKeyBase {
    DefaultValue: UClass;
    BaseClass: UClass;
}
declare const FValueOrBBKey_Class: FValueOrBBKey_Class;

declare interface FValueOrBBKey_Enum extends FValueOrBlackboardKeyBase {
    DefaultValue: uint8;
    EnumType: UEnum;
    NativeEnumTypeName: FString;
}
declare const FValueOrBBKey_Enum: FValueOrBBKey_Enum;

declare interface FValueOrBBKey_Float extends FValueOrBlackboardKeyBase {
    DefaultValue: number;
}
declare const FValueOrBBKey_Float: FValueOrBBKey_Float;

declare interface FValueOrBBKey_Int32 extends FValueOrBlackboardKeyBase {
    DefaultValue: number;
}
declare const FValueOrBBKey_Int32: FValueOrBBKey_Int32;

declare interface FValueOrBBKey_Name extends FValueOrBlackboardKeyBase {
    DefaultValue: FName;
}
declare const FValueOrBBKey_Name: FValueOrBBKey_Name;

declare interface FValueOrBBKey_Object extends FValueOrBlackboardKeyBase {
    DefaultValue: UObject;
    BaseClass: UClass;
}
declare const FValueOrBBKey_Object: FValueOrBBKey_Object;

declare interface FValueOrBBKey_Rotator extends FValueOrBlackboardKeyBase {
    DefaultValue: FRotator;
}
declare const FValueOrBBKey_Rotator: FValueOrBBKey_Rotator;

declare interface FValueOrBBKey_String extends FValueOrBlackboardKeyBase {
    DefaultValue: FString;
}
declare const FValueOrBBKey_String: FValueOrBBKey_String;

declare interface FValueOrBBKey_Struct extends FValueOrBlackboardKeyBase {
    DefaultValue: FInstancedStruct;
}
declare const FValueOrBBKey_Struct: FValueOrBBKey_Struct;

declare interface FValueOrBBKey_Vector extends FValueOrBlackboardKeyBase {
    DefaultValue: FVector;
}
declare const FValueOrBBKey_Vector: FValueOrBBKey_Vector;

declare interface FValueOrBlackboardKeyBase {
    Key: FName;
}
declare const FValueOrBlackboardKeyBase: FValueOrBlackboardKeyBase;

declare interface IAIPerceptionListenerInterface extends IInterface {

}
declare const IAIPerceptionListenerInterface: IAIPerceptionListenerInterface;

declare interface IAIResourceInterface extends IInterface {

}
declare const IAIResourceInterface: IAIResourceInterface;

declare interface IAISightTargetInterface extends IInterface {

}
declare const IAISightTargetInterface: IAISightTargetInterface;

declare interface IBlackboardAssetProvider extends IInterface {
    GetBlackboardAsset(): UBlackboardData;
}
declare const IBlackboardAssetProvider: IBlackboardAssetProvider;

declare interface ICrowdAgentInterface extends IInterface {

}
declare const ICrowdAgentInterface: ICrowdAgentInterface;

declare interface IEQSQueryResultSourceInterface extends IInterface {

}
declare const IEQSQueryResultSourceInterface: IEQSQueryResultSourceInterface;

declare interface IGenericTeamAgentInterface extends IInterface {

}
declare const IGenericTeamAgentInterface: IGenericTeamAgentInterface;

declare interface UAIAsyncTaskBlueprintProxy extends UObject {
    OnSuccess: FAIAsyncTaskBlueprintProxyOnSuccess;
    OnFail: FAIAsyncTaskBlueprintProxyOnFail;
    OnMoveCompleted(RequestID: FAIRequestID, MovementResult: EPathFollowingResult): void;
}
declare const UAIAsyncTaskBlueprintProxy: UAIAsyncTaskBlueprintProxy;

declare interface UAIBlueprintHelperLibrary extends UBlueprintFunctionLibrary {
    UnlockAIResourcesWithAnimation(AnimInstance: UAnimInstance, bUnlockMovement: boolean, UnlockAILogic: boolean): void;
    SpawnAIFromClass(WorldContextObject: UObject, PawnClass: TSubclassOf<APawn>, BehaviorTree: UBehaviorTree, Location: FVector, Rotation: FRotator, bNoCollisionFail: boolean, Owner: AActor): APawn;
    SimpleMoveToLocation(Controller: AController, Goal: FVector): void;
    SimpleMoveToActor(Controller: AController, Goal: AActor): void;
    SendAIMessage(Target: APawn, Message: FName, MessageSource: UObject, bSuccess: boolean): void;
    LockAIResourcesWithAnimation(AnimInstance: UAnimInstance, bLockMovement: boolean, LockAILogic: boolean): void;
    IsValidAIRotation(Rotation: FRotator): boolean;
    IsValidAILocation(Location: FVector): boolean;
    IsValidAIDirection(DirectionVector: FVector): boolean;
    GetNextNavLinkIndex(Controller: AController): number;
    GetCurrentPathPoints(Controller: AController): TArray<FVector>;
    GetCurrentPathIndex(Controller: AController): number;
    GetCurrentPath(Controller: AController): UNavigationPath;
    GetBlackboard(Target: AActor): UBlackboardComponent;
    GetAIController(ControlledActor: AActor): AAIController;
    CreateMoveToProxyObject(WorldContextObject: UObject, Pawn: APawn, Destination: FVector, targetActor: AActor, AcceptanceRadius: number, bStopOnOverlap: boolean): UAIAsyncTaskBlueprintProxy;
}
declare const UAIBlueprintHelperLibrary: UAIBlueprintHelperLibrary;

declare interface UAIDataProvider extends UObject {

}
declare const UAIDataProvider: UAIDataProvider;

declare interface UAIDataProvider_QueryParams extends UAIDataProvider {
    ParamName: FName;
    FloatValue: number;
    IntValue: number;
    boolValue: boolean;
}
declare const UAIDataProvider_QueryParams: UAIDataProvider_QueryParams;

declare interface UAIDataProvider_Random extends UAIDataProvider_QueryParams {
    min: number;
    max: number;
    bInteger: boolean;
}
declare const UAIDataProvider_Random: UAIDataProvider_Random;

declare interface UAIHotSpotManager extends UObject {

}
declare const UAIHotSpotManager: UAIHotSpotManager;

declare interface UAIPerceptionComponent extends UActorComponent {
    SensesConfig: TArray<UAISenseConfig>;
    DominantSense: TSubclassOf<UAISense>;
    AIOwner: AAIController;
    OnPerceptionUpdated: FAIPerceptionComponentOnPerceptionUpdated;
    OnTargetPerceptionForgotten: FAIPerceptionComponentOnTargetPerceptionForgotten;
    OnTargetPerceptionUpdated: FAIPerceptionComponentOnTargetPerceptionUpdated;
    OnTargetPerceptionInfoUpdated: FAIPerceptionComponentOnTargetPerceptionInfoUpdated;
    SetSenseEnabled(SenseClass: TSubclassOf<UAISense>, bEnable: boolean): void;
    RequestStimuliListenerUpdate(): void;
    OnOwnerEndPlay(Actor: AActor, EndPlayReason: EEndPlayReason): void;
    IsSenseEnabled(SenseClass: TSubclassOf<UAISense>): boolean;
    GetPerceivedHostileActorsBySense(SenseToUse: TSubclassOf<UAISense>, OutActors: TArray<AActor>): void;
    GetPerceivedHostileActors(OutActors: TArray<AActor>): void;
    GetKnownPerceivedActors(SenseToUse: TSubclassOf<UAISense>, OutActors: TArray<AActor>): void;
    GetCurrentlyPerceivedActors(SenseToUse: TSubclassOf<UAISense>, OutActors: TArray<AActor>): void;
    GetActorsPerception(Actor: AActor, Info: FActorPerceptionBlueprintInfo): boolean;
    ForgetAll(): void;
}
declare const UAIPerceptionComponent: UAIPerceptionComponent;

declare interface UAIPerceptionStimuliSourceComponent extends UActorComponent {
    bAutoRegisterAsSource: boolean;
    RegisterAsSourceForSenses: TArray<TSubclassOf<UAISense>>;
    UnregisterFromSense(SenseClass: TSubclassOf<UAISense>): void;
    UnregisterFromPerceptionSystem(): void;
    RegisterWithPerceptionSystem(): void;
    RegisterForSense(SenseClass: TSubclassOf<UAISense>): void;
}
declare const UAIPerceptionStimuliSourceComponent: UAIPerceptionStimuliSourceComponent;

declare interface UAIPerceptionSystem extends UAISubsystem {
    Senses: TArray<UAISense>;
    PerceptionAgingRate: number;
    ReportPerceptionEvent(WorldContextObject: UObject, PerceptionEvent: UAISenseEvent): void;
    ReportEvent(PerceptionEvent: UAISenseEvent): void;
    RegisterPerceptionStimuliSource(WorldContextObject: UObject, Sense: TSubclassOf<UAISense>, Target: AActor): boolean;
    OnPerceptionStimuliSourceEndPlay(Actor: AActor, EndPlayReason: EEndPlayReason): void;
    GetSenseClassForStimulus(WorldContextObject: UObject, Stimulus: FAIStimulus): TSubclassOf<UAISense>;
}
declare const UAIPerceptionSystem: UAIPerceptionSystem;

declare interface UAIResource_Logic extends UGameplayTaskResource {

}
declare const UAIResource_Logic: UAIResource_Logic;

declare interface UAIResource_Movement extends UGameplayTaskResource {

}
declare const UAIResource_Movement: UAIResource_Movement;

declare interface UAISense extends UObject {
    NotifyType: EAISenseNotifyType;
    bWantsNewPawnNotification: boolean;
    bAutoRegisterAllPawnsAsSources: boolean;
    PerceptionSystemInstance: UAIPerceptionSystem;
}
declare const UAISense: UAISense;

declare interface UAISenseBlueprintListener extends UUserDefinedStruct {

}
declare const UAISenseBlueprintListener: UAISenseBlueprintListener;

declare interface UAISenseConfig extends UObject {
    DebugColor: FColor;
    MaxAge: number;
    bStartsEnabled: boolean;
}
declare const UAISenseConfig: UAISenseConfig;

declare interface UAISenseConfig_Blueprint extends UAISenseConfig {
    Implementation: TSubclassOf<UAISense_Blueprint>;
}
declare const UAISenseConfig_Blueprint: UAISenseConfig_Blueprint;

declare interface UAISenseConfig_Damage extends UAISenseConfig {
    Implementation: TSubclassOf<UAISense_Damage>;
}
declare const UAISenseConfig_Damage: UAISenseConfig_Damage;

declare interface UAISenseConfig_Hearing extends UAISenseConfig {
    Implementation: TSubclassOf<UAISense_Hearing>;
    HearingRange: number;
    LoSHearingRange: number;
    bUseLoSHearing: boolean;
    DetectionByAffiliation: FAISenseAffiliationFilter;
}
declare const UAISenseConfig_Hearing: UAISenseConfig_Hearing;

declare interface UAISenseConfig_Prediction extends UAISenseConfig {

}
declare const UAISenseConfig_Prediction: UAISenseConfig_Prediction;

declare interface UAISenseConfig_Sight extends UAISenseConfig {
    Implementation: TSubclassOf<UAISense_Sight>;
    SightRadius: number;
    LoseSightRadius: number;
    PeripheralVisionAngleDegrees: number;
    DetectionByAffiliation: FAISenseAffiliationFilter;
    AutoSuccessRangeFromLastSeenLocation: number;
    PointOfViewBackwardOffset: number;
    NearClippingRadius: number;
}
declare const UAISenseConfig_Sight: UAISenseConfig_Sight;

declare interface UAISenseConfig_Team extends UAISenseConfig {

}
declare const UAISenseConfig_Team: UAISenseConfig_Team;

declare interface UAISenseConfig_Touch extends UAISenseConfig {
    DetectionByAffiliation: FAISenseAffiliationFilter;
}
declare const UAISenseConfig_Touch: UAISenseConfig_Touch;

declare interface UAISenseEvent extends UObject {

}
declare const UAISenseEvent: UAISenseEvent;

declare interface UAISenseEvent_Damage extends UAISenseEvent {
    Event: FAIDamageEvent;
}
declare const UAISenseEvent_Damage: UAISenseEvent_Damage;

declare interface UAISenseEvent_Hearing extends UAISenseEvent {
    Event: FAINoiseEvent;
}
declare const UAISenseEvent_Hearing: UAISenseEvent_Hearing;

declare interface UAISense_Blueprint extends UAISense {
    ListenerDataType: TSubclassOf<UUserDefinedStruct>;
    ListenerContainer: TArray<UAIPerceptionComponent>;
    UnprocessedEvents: TArray<UAISenseEvent>;
    OnUpdate(EventsToProcess: TArray<UAISenseEvent>): number;
    OnListenerUpdated(ActorListener: AActor, PerceptionComponent: UAIPerceptionComponent): void;
    OnListenerUnregistered(ActorListener: AActor, PerceptionComponent: UAIPerceptionComponent): void;
    OnListenerRegistered(ActorListener: AActor, PerceptionComponent: UAIPerceptionComponent): void;
    K2_OnNewPawn(NewPawn: APawn): void;
    GetAllListenerComponents(ListenerComponents: TArray<UAIPerceptionComponent>): void;
    GetAllListenerActors(ListenerActors: TArray<AActor>): void;
}
declare const UAISense_Blueprint: UAISense_Blueprint;

declare interface UAISense_Damage extends UAISense {
    RegisteredEvents: TArray<FAIDamageEvent>;
    ReportDamageEvent(WorldContextObject: UObject, DamagedActor: AActor, Instigator: AActor, damageAmount: number, EventLocation: FVector, HitLocation: FVector, Tag: FName): void;
}
declare const UAISense_Damage: UAISense_Damage;

declare interface UAISense_Hearing extends UAISense {
    NoiseEvents: TArray<FAINoiseEvent>;
    SpeedOfSoundSq: number;
    ReportNoiseEvent(WorldContextObject: UObject, NoiseLocation: FVector, Loudness: number, Instigator: AActor, MaxRange: number, Tag: FName): void;
}
declare const UAISense_Hearing: UAISense_Hearing;

declare interface UAISense_Prediction extends UAISense {
    RegisteredEvents: TArray<FAIPredictionEvent>;
    RequestPawnPredictionEvent(Requestor: APawn, PredictedActor: AActor, PredictionTime: number): void;
    RequestControllerPredictionEvent(Requestor: AAIController, PredictedActor: AActor, PredictionTime: number): void;
}
declare const UAISense_Prediction: UAISense_Prediction;

declare interface UAISense_Sight extends UAISense {
    MaxTracesPerTick: number;
    MaxAsyncTracesPerTick: number;
    MinQueriesPerTimeSliceCheck: number;
    MaxTimeSlicePerTick: number;
    HighImportanceQueryDistanceThreshold: number;
    MaxQueryImportance: number;
    SightLimitQueryImportance: number;
    PendingQueriesBudgetReductionRatio: number;
    bUseAsynchronousTraceForDefaultSightQueries: boolean;
}
declare const UAISense_Sight: UAISense_Sight;

declare interface UAISense_Team extends UAISense {
    RegisteredEvents: TArray<FAITeamStimulusEvent>;
}
declare const UAISense_Team: UAISense_Team;

declare interface UAISense_Touch extends UAISense {
    RegisteredEvents: TArray<FAITouchEvent>;
    ReportTouchEvent(WorldContextObject: UObject, TouchReceiver: AActor, OtherActor: AActor, Location: FVector): void;
}
declare const UAISense_Touch: UAISense_Touch;

declare interface UAISubsystem extends UObject {
    AISystem: UAISystem;
}
declare const UAISubsystem: UAISubsystem;

declare interface UAISystem extends UAISystemBase {
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
    AllProxyObjects: TArray<UAIAsyncTaskBlueprintProxy>;
    HotSpotManager: UAIHotSpotManager;
    NavLocalGrids: UNavLocalGridManager;
    AILoggingVerbose(): void;
    AIIgnorePlayers(): void;
}
declare const UAISystem: UAISystem;

declare interface UAITask extends UGameplayTask {
    OwnerController: AAIController;
}
declare const UAITask: UAITask;

declare interface UAITask_LockLogic extends UAITask {

}
declare const UAITask_LockLogic: UAITask_LockLogic;

declare interface UAITask_MoveTo extends UAITask {
    OnRequestFailed: FAITask_MoveToOnRequestFailed;
    OnMoveFinished: FAITask_MoveToOnMoveFinished;
    MoveRequest: FAIMoveRequest;
    AIMoveTo(Controller: AAIController, GoalLocation: FVector, GoalActor: AActor, AcceptanceRadius: number, StopOnOverlap: EAIOptionFlag, AcceptPartialPath: EAIOptionFlag, bUsePathfinding: boolean, bLockAILogic: boolean, bUseContinuousGoalTracking: boolean, ProjectGoalOnNavigation: EAIOptionFlag, RequireNavigableEndLocation: EAIOptionFlag): UAITask_MoveTo;
}
declare const UAITask_MoveTo: UAITask_MoveTo;

declare interface UAITask_RunEQS extends UAITask {
    RunEQS(Controller: AAIController, QueryTemplate: UEnvQuery): UAITask_RunEQS;
}
declare const UAITask_RunEQS: UAITask_RunEQS;

declare interface UBTAuxiliaryNode extends UBTNode {

}
declare const UBTAuxiliaryNode: UBTAuxiliaryNode;

declare interface UBTCompositeNode extends UBTNode {
    Children: TArray<FBTCompositeChild>;
    Services: TArray<UBTService>;
    bApplyDecoratorScope: boolean;
}
declare const UBTCompositeNode: UBTCompositeNode;

declare interface UBTComposite_Selector extends UBTCompositeNode {

}
declare const UBTComposite_Selector: UBTComposite_Selector;

declare interface UBTComposite_Sequence extends UBTCompositeNode {

}
declare const UBTComposite_Sequence: UBTComposite_Sequence;

declare interface UBTComposite_SimpleParallel extends UBTCompositeNode {
    FinishMode: EBTParallelMode;
}
declare const UBTComposite_SimpleParallel: UBTComposite_SimpleParallel;

declare interface UBTDecorator extends UBTAuxiliaryNode {
    bInverseCondition: boolean;
    FlowAbortMode: EBTFlowAbortMode;
}
declare const UBTDecorator: UBTDecorator;

declare interface UBTDecorator_Blackboard extends UBTDecorator_BlackboardBase {
    IntValue: number;
    FloatValue: number;
    StringValue: FString;
    CachedDescription: FString;
    OperationType: uint8;
    NotifyObserver: EBTBlackboardRestart;
}
declare const UBTDecorator_Blackboard: UBTDecorator_Blackboard;

declare interface UBTDecorator_BlackboardBase extends UBTDecorator {
    BlackboardKey: FBlackboardKeySelector;
}
declare const UBTDecorator_BlackboardBase: UBTDecorator_BlackboardBase;

declare interface UBTDecorator_BlueprintBase extends UBTDecorator {
    AIOwner: AAIController;
    ActorOwner: AActor;
    ObservedKeyNames: TArray<FName>;
    bShowPropertyDetails: boolean;
    bCheckConditionOnlyBlackBoardChanges: boolean;
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
}
declare const UBTDecorator_BlueprintBase: UBTDecorator_BlueprintBase;

declare interface UBTDecorator_CheckGameplayTagsOnActor extends UBTDecorator {
    ActorToCheck: FBlackboardKeySelector;
    TagsToMatch: EGameplayContainerMatchType;
    GameplayTags: FGameplayTagContainer;
    CachedDescription: FString;
}
declare const UBTDecorator_CheckGameplayTagsOnActor: UBTDecorator_CheckGameplayTagsOnActor;

declare interface UBTDecorator_CompareBBEntries extends UBTDecorator {
    Operator: EBlackBoardEntryComparison;
    BlackboardKeyA: FBlackboardKeySelector;
    BlackboardKeyB: FBlackboardKeySelector;
}
declare const UBTDecorator_CompareBBEntries: UBTDecorator_CompareBBEntries;

declare interface UBTDecorator_ConditionalLoop extends UBTDecorator_Blackboard {

}
declare const UBTDecorator_ConditionalLoop: UBTDecorator_ConditionalLoop;

declare interface UBTDecorator_ConeCheck extends UBTDecorator {
    ConeHalfAngle: FValueOrBBKey_Float;
    ConeOrigin: FBlackboardKeySelector;
    ConeDirection: FBlackboardKeySelector;
    Observed: FBlackboardKeySelector;
}
declare const UBTDecorator_ConeCheck: UBTDecorator_ConeCheck;

declare interface UBTDecorator_Cooldown extends UBTDecorator {
    CoolDownTime: FValueOrBBKey_Float;
}
declare const UBTDecorator_Cooldown: UBTDecorator_Cooldown;

declare interface UBTDecorator_DoesPathExist extends UBTDecorator {
    BlackboardKeyA: FBlackboardKeySelector;
    BlackboardKeyB: FBlackboardKeySelector;
    bUseSelf: boolean;
    PathQueryType: FValueOrBBKey_Enum;
    FilterClass: FValueOrBBKey_Class;
}
declare const UBTDecorator_DoesPathExist: UBTDecorator_DoesPathExist;

declare interface UBTDecorator_ForceSuccess extends UBTDecorator {

}
declare const UBTDecorator_ForceSuccess: UBTDecorator_ForceSuccess;

declare interface UBTDecorator_IsAtLocation extends UBTDecorator_BlackboardBase {
    AcceptableRadius: number;
    ParametrizedAcceptableRadius: FAIDataProviderFloatValue;
    GeometricDistanceType: FAIDistanceType;
    bUseParametrizedRadius: boolean;
    bUseNavAgentGoalLocation: FValueOrBBKey_Bool;
    bPathFindingBasedTest: FValueOrBBKey_Bool;
}
declare const UBTDecorator_IsAtLocation: UBTDecorator_IsAtLocation;

declare interface UBTDecorator_IsBBEntryOfClass extends UBTDecorator_BlackboardBase {
    TestClass: FValueOrBBKey_Class;
}
declare const UBTDecorator_IsBBEntryOfClass: UBTDecorator_IsBBEntryOfClass;

declare interface UBTDecorator_KeepInCone extends UBTDecorator {
    ConeHalfAngle: FValueOrBBKey_Float;
    ConeOrigin: FBlackboardKeySelector;
    Observed: FBlackboardKeySelector;
    bUseSelfAsOrigin: boolean;
    bUseSelfAsObserved: boolean;
}
declare const UBTDecorator_KeepInCone: UBTDecorator_KeepInCone;

declare interface UBTDecorator_Loop extends UBTDecorator {
    NumLoops: FValueOrBBKey_Int32;
    bInfiniteLoop: boolean;
    InfiniteLoopTimeoutTime: FValueOrBBKey_Float;
}
declare const UBTDecorator_Loop: UBTDecorator_Loop;

declare interface UBTDecorator_LoopUntil extends UBTDecorator {
    RequiredResult: FValueOrBBKey_Enum;
}
declare const UBTDecorator_LoopUntil: UBTDecorator_LoopUntil;

declare interface UBTDecorator_ReachedMoveGoal extends UBTDecorator {

}
declare const UBTDecorator_ReachedMoveGoal: UBTDecorator_ReachedMoveGoal;

declare interface UBTDecorator_SetTagCooldown extends UBTDecorator {
    CooldownTag: FGameplayTag;
    CooldownDuration: FValueOrBBKey_Float;
    bAddToExistingDuration: FValueOrBBKey_Bool;
}
declare const UBTDecorator_SetTagCooldown: UBTDecorator_SetTagCooldown;

declare interface UBTDecorator_TagCooldown extends UBTDecorator {
    CooldownTag: FGameplayTag;
    CooldownDuration: FValueOrBBKey_Float;
    bAddToExistingDuration: FValueOrBBKey_Bool;
    bActivatesCooldown: FValueOrBBKey_Bool;
}
declare const UBTDecorator_TagCooldown: UBTDecorator_TagCooldown;

declare interface UBTDecorator_TimeLimit extends UBTDecorator {
    TimeLimit: FValueOrBBKey_Float;
}
declare const UBTDecorator_TimeLimit: UBTDecorator_TimeLimit;

declare interface UBTFunctionLibrary extends UBlueprintFunctionLibrary {
    StopUsingExternalEvent(NodeOwner: UBTNode): void;
    StartUsingExternalEvent(NodeOwner: UBTNode, owningActor: AActor): void;
    SetBlackboardValueAsVector(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: FVector): void;
    SetBlackboardValueAsString(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: string | FString): void;
    SetBlackboardValueAsRotator(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: FRotator): void;
    SetBlackboardValueAsObject(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: UObject): void;
    SetBlackboardValueAsName(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: FName): void;
    SetBlackboardValueAsInt(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: number): void;
    SetBlackboardValueAsFloat(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: number): void;
    SetBlackboardValueAsEnum(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: uint8): void;
    SetBlackboardValueAsClass(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: UClass): void;
    SetBlackboardValueAsBool(NodeOwner: UBTNode, Key: FBlackboardKeySelector, Value: boolean): void;
    GetOwnersBlackboard(NodeOwner: UBTNode): UBlackboardComponent;
    GetOwnerComponent(NodeOwner: UBTNode): UBehaviorTreeComponent;
    GetBlackboardValueAsVector(NodeOwner: UBTNode, Key: FBlackboardKeySelector): FVector;
    GetBlackboardValueAsString(NodeOwner: UBTNode, Key: FBlackboardKeySelector): FString;
    GetBlackboardValueAsRotator(NodeOwner: UBTNode, Key: FBlackboardKeySelector): FRotator;
    GetBlackboardValueAsObject(NodeOwner: UBTNode, Key: FBlackboardKeySelector): UObject;
    GetBlackboardValueAsName(NodeOwner: UBTNode, Key: FBlackboardKeySelector): FName;
    GetBlackboardValueAsInt(NodeOwner: UBTNode, Key: FBlackboardKeySelector): number;
    GetBlackboardValueAsFloat(NodeOwner: UBTNode, Key: FBlackboardKeySelector): number;
    GetBlackboardValueAsEnum(NodeOwner: UBTNode, Key: FBlackboardKeySelector): uint8;
    GetBlackboardValueAsClass(NodeOwner: UBTNode, Key: FBlackboardKeySelector): UClass;
    GetBlackboardValueAsBool(NodeOwner: UBTNode, Key: FBlackboardKeySelector): boolean;
    GetBlackboardValueAsActor(NodeOwner: UBTNode, Key: FBlackboardKeySelector): AActor;
    ClearBlackboardValueAsVector(NodeOwner: UBTNode, Key: FBlackboardKeySelector): void;
    ClearBlackboardValue(NodeOwner: UBTNode, Key: FBlackboardKeySelector): void;
}
declare const UBTFunctionLibrary: UBTFunctionLibrary;

declare interface UBTNode extends UObject {
    NodeName: FString;
    TreeAsset: UBehaviorTree;
    ParentNode: UBTCompositeNode;
}
declare const UBTNode: UBTNode;

declare interface UBTService extends UBTAuxiliaryNode {
    Interval: number;
    RandomDeviation: number;
    bCallTickOnSearchStart: boolean;
    bRestartTimerOnEachActivation: boolean;
}
declare const UBTService: UBTService;

declare interface UBTService_BlackboardBase extends UBTService {
    BlackboardKey: FBlackboardKeySelector;
}
declare const UBTService_BlackboardBase: UBTService_BlackboardBase;

declare interface UBTService_BlueprintBase extends UBTService {
    AIOwner: AAIController;
    ActorOwner: AActor;
    bShowPropertyDetails: boolean;
    bShowEventDetails: boolean;
    ReceiveTickAI(OwnerController: AAIController, ControlledPawn: APawn, DeltaSeconds: number): void;
    ReceiveTick(OwnerActor: AActor, DeltaSeconds: number): void;
    ReceiveSearchStartAI(OwnerController: AAIController, ControlledPawn: APawn): void;
    ReceiveSearchStart(OwnerActor: AActor): void;
    ReceiveDeactivationAI(OwnerController: AAIController, ControlledPawn: APawn): void;
    ReceiveDeactivation(OwnerActor: AActor): void;
    ReceiveActivationAI(OwnerController: AAIController, ControlledPawn: APawn): void;
    ReceiveActivation(OwnerActor: AActor): void;
    IsServiceActive(): boolean;
}
declare const UBTService_BlueprintBase: UBTService_BlueprintBase;

declare interface UBTService_DefaultFocus extends UBTService_BlackboardBase {
    FocusPriority: uint8;
}
declare const UBTService_DefaultFocus: UBTService_DefaultFocus;

declare interface UBTService_RunEQS extends UBTService_BlackboardBase {
    EQSRequest: FEQSParametrizedQueryExecutionRequest;
    bUpdateBBOnFail: boolean;
}
declare const UBTService_RunEQS: UBTService_RunEQS;

declare interface UBTTaskNode extends UBTNode {
    Services: TArray<UBTService>;
    bIgnoreRestartSelf: boolean;
}
declare const UBTTaskNode: UBTTaskNode;

declare interface UBTTask_BlackboardBase extends UBTTaskNode {
    BlackboardKey: FBlackboardKeySelector;
}
declare const UBTTask_BlackboardBase: UBTTask_BlackboardBase;

declare interface UBTTask_BlueprintBase extends UBTTaskNode {
    AIOwner: AAIController;
    ActorOwner: AActor;
    TickInterval: FIntervalCountdown;
    bShowPropertyDetails: boolean;
    SetFinishOnMessageWithId(MessageName: FName, RequestID: number): void;
    SetFinishOnMessage(MessageName: FName): void;
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
}
declare const UBTTask_BlueprintBase: UBTTask_BlueprintBase;

declare interface UBTTask_FinishWithResult extends UBTTaskNode {
    Result: FValueOrBBKey_Enum;
}
declare const UBTTask_FinishWithResult: UBTTask_FinishWithResult;

declare interface UBTTask_GameplayTaskBase extends UBTTaskNode {
    bWaitForGameplayTask: FValueOrBBKey_Bool;
}
declare const UBTTask_GameplayTaskBase: UBTTask_GameplayTaskBase;

declare interface UBTTask_MakeNoise extends UBTTaskNode {
    Loudnes: FValueOrBBKey_Float;
}
declare const UBTTask_MakeNoise: UBTTask_MakeNoise;

declare interface UBTTask_MoveDirectlyToward extends UBTTask_MoveTo {

}
declare const UBTTask_MoveDirectlyToward: UBTTask_MoveDirectlyToward;

declare interface UBTTask_MoveTo extends UBTTask_BlackboardBase {
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
}
declare const UBTTask_MoveTo: UBTTask_MoveTo;

declare interface UBTTask_PlayAnimation extends UBTTaskNode {
    AnimationToPlay: FValueOrBBKey_Object;
    bLooping: FValueOrBBKey_Bool;
    bNonBlocking: FValueOrBBKey_Bool;
    MyOwnerComp: UBehaviorTreeComponent;
    CachedSkelMesh: USkeletalMeshComponent;
}
declare const UBTTask_PlayAnimation: UBTTask_PlayAnimation;

declare interface UBTTask_PlaySound extends UBTTaskNode {
    SoundToPlay: FValueOrBBKey_Object;
}
declare const UBTTask_PlaySound: UBTTask_PlaySound;

declare interface UBTTask_RotateToFaceBBEntry extends UBTTask_BlackboardBase {
    Precision: FValueOrBBKey_Float;
}
declare const UBTTask_RotateToFaceBBEntry: UBTTask_RotateToFaceBBEntry;

declare interface UBTTask_RunBehavior extends UBTTaskNode {
    BehaviorAsset: UBehaviorTree;
}
declare const UBTTask_RunBehavior: UBTTask_RunBehavior;

declare interface UBTTask_RunBehaviorDynamic extends UBTTaskNode {
    InjectionTag: FGameplayTag;
    DefaultBehaviorAsset: UBehaviorTree;
    BehaviorAsset: UBehaviorTree;
}
declare const UBTTask_RunBehaviorDynamic: UBTTask_RunBehaviorDynamic;

declare interface UBTTask_RunEQSQuery extends UBTTask_BlackboardBase {
    bUseBBKey: boolean;
    EQSRequest: FEQSParametrizedQueryExecutionRequest;
    bUpdateBBOnFail: boolean;
}
declare const UBTTask_RunEQSQuery: UBTTask_RunEQSQuery;

declare interface UBTTask_SetKeyValueBool extends UBTTask_BlackboardBase {
    Value: FValueOrBBKey_Bool;
}
declare const UBTTask_SetKeyValueBool: UBTTask_SetKeyValueBool;

declare interface UBTTask_SetKeyValueClass extends UBTTask_BlackboardBase {
    BaseClass: UClass;
    Value: FValueOrBBKey_Class;
}
declare const UBTTask_SetKeyValueClass: UBTTask_SetKeyValueClass;

declare interface UBTTask_SetKeyValueEnum extends UBTTask_BlackboardBase {
    EnumType: UEnum;
    Value: FValueOrBBKey_Enum;
}
declare const UBTTask_SetKeyValueEnum: UBTTask_SetKeyValueEnum;

declare interface UBTTask_SetKeyValueFloat extends UBTTask_BlackboardBase {
    Value: FValueOrBBKey_Float;
}
declare const UBTTask_SetKeyValueFloat: UBTTask_SetKeyValueFloat;

declare interface UBTTask_SetKeyValueInt32 extends UBTTask_BlackboardBase {
    Value: FValueOrBBKey_Int32;
}
declare const UBTTask_SetKeyValueInt32: UBTTask_SetKeyValueInt32;

declare interface UBTTask_SetKeyValueName extends UBTTask_BlackboardBase {
    Value: FValueOrBBKey_Name;
}
declare const UBTTask_SetKeyValueName: UBTTask_SetKeyValueName;

declare interface UBTTask_SetKeyValueObject extends UBTTask_BlackboardBase {
    BaseClass: UClass;
    Value: FValueOrBBKey_Object;
}
declare const UBTTask_SetKeyValueObject: UBTTask_SetKeyValueObject;

declare interface UBTTask_SetKeyValueRotator extends UBTTask_BlackboardBase {
    Value: FValueOrBBKey_Rotator;
}
declare const UBTTask_SetKeyValueRotator: UBTTask_SetKeyValueRotator;

declare interface UBTTask_SetKeyValueString extends UBTTask_BlackboardBase {
    Value: FValueOrBBKey_String;
}
declare const UBTTask_SetKeyValueString: UBTTask_SetKeyValueString;

declare interface UBTTask_SetKeyValueStruct extends UBTTask_BlackboardBase {
    StructType: UScriptStruct;
    Value: FValueOrBBKey_Struct;
}
declare const UBTTask_SetKeyValueStruct: UBTTask_SetKeyValueStruct;

declare interface UBTTask_SetKeyValueVector extends UBTTask_BlackboardBase {
    Value: FValueOrBBKey_Vector;
}
declare const UBTTask_SetKeyValueVector: UBTTask_SetKeyValueVector;

declare interface UBTTask_SetTagCooldown extends UBTTaskNode {
    CooldownTag: FGameplayTag;
    bAddToExistingDuration: FValueOrBBKey_Bool;
    CooldownDuration: FValueOrBBKey_Float;
}
declare const UBTTask_SetTagCooldown: UBTTask_SetTagCooldown;

declare interface UBTTask_Wait extends UBTTaskNode {
    WaitTime: FValueOrBBKey_Float;
    RandomDeviation: FValueOrBBKey_Float;
}
declare const UBTTask_Wait: UBTTask_Wait;

declare interface UBTTask_WaitBlackboardTime extends UBTTask_Wait {
    BlackboardKey: FBlackboardKeySelector;
}
declare const UBTTask_WaitBlackboardTime: UBTTask_WaitBlackboardTime;

declare interface UBehaviorTree extends UObject {
    RootNode: UBTCompositeNode;
    BlackboardAsset: UBlackboardData;
    RootDecorators: TArray<UBTDecorator>;
    RootDecoratorOps: TArray<FBTDecoratorLogic>;
}
declare const UBehaviorTree: UBehaviorTree;

declare interface UBehaviorTreeComponent extends UBrainComponent {
    NodeInstances: TArray<UBTNode>;
    DefaultBehaviorTreeAsset: UBehaviorTree;
    SetDynamicSubtree(InjectTag: FGameplayTag, BehaviorAsset: UBehaviorTree): void;
    GetTagCooldownEndTime(CooldownTag: FGameplayTag): number;
    AddCooldownTagDuration(CooldownTag: FGameplayTag, CooldownDuration: number, bAddToExistingDuration: boolean): void;
}
declare const UBehaviorTreeComponent: UBehaviorTreeComponent;

declare interface UBehaviorTreeManager extends UObject {
    MaxDebuggerSteps: number;
    LoadedTemplates: TArray<FBehaviorTreeTemplateInfo>;
    ActiveComponents: TArray<UBehaviorTreeComponent>;
}
declare const UBehaviorTreeManager: UBehaviorTreeManager;

declare interface UBehaviorTreeTypes extends UObject {

}
declare const UBehaviorTreeTypes: UBehaviorTreeTypes;

declare interface UBlackboardComponent extends UActorComponent {
    BrainComp: UBrainComponent;
    DefaultBlackboardAsset: UBlackboardData;
    BlackboardAsset: UBlackboardData;
    KeyInstances: TArray<UBlackboardKeyType>;
    SetValueAsVector(KeyName: FName, VectorValue: FVector): void;
    SetValueAsString(KeyName: FName, StringValue: string | FString): void;
    SetValueAsRotator(KeyName: FName, VectorValue: FRotator): void;
    SetValueAsObject(KeyName: FName, ObjectValue: UObject): void;
    SetValueAsName(KeyName: FName, nameValue: FName): void;
    SetValueAsInt(KeyName: FName, IntValue: number): void;
    SetValueAsFloat(KeyName: FName, FloatValue: number): void;
    SetValueAsEnum(KeyName: FName, EnumValue: uint8): void;
    SetValueAsClass(KeyName: FName, ClassValue: UClass): void;
    SetValueAsBool(KeyName: FName, boolValue: boolean): void;
    IsVectorValueSet(KeyName: FName): boolean;
    GetValueAsVector(KeyName: FName): FVector;
    GetValueAsString(KeyName: FName): FString;
    GetValueAsRotator(KeyName: FName): FRotator;
    GetValueAsObject(KeyName: FName): UObject;
    GetValueAsName(KeyName: FName): FName;
    GetValueAsInt(KeyName: FName): number;
    GetValueAsFloat(KeyName: FName): number;
    GetValueAsEnum(KeyName: FName): uint8;
    GetValueAsClass(KeyName: FName): UClass;
    GetValueAsBool(KeyName: FName): boolean;
    GetRotationFromEntry(KeyName: FName, ResultRotation: FRotator): boolean;
    GetLocationFromEntry(KeyName: FName, ResultLocation: FVector): boolean;
    ClearValue(KeyName: FName): void;
}
declare const UBlackboardComponent: UBlackboardComponent;

declare interface UBlackboardData extends UDataAsset {
    Parent: UBlackboardData;
    Keys: TArray<FBlackboardEntry>;
    bHasSynchronizedKeys: boolean;
}
declare const UBlackboardData: UBlackboardData;

declare interface UBlackboardKeyType extends UObject {

}
declare const UBlackboardKeyType: UBlackboardKeyType;

declare interface UBlackboardKeyType_Bool extends UBlackboardKeyType {
    bDefaultValue: boolean;
}
declare const UBlackboardKeyType_Bool: UBlackboardKeyType_Bool;

declare interface UBlackboardKeyType_Class extends UBlackboardKeyType {
    BaseClass: UClass;
    DefaultValue: UClass;
}
declare const UBlackboardKeyType_Class: UBlackboardKeyType_Class;

declare interface UBlackboardKeyType_Enum extends UBlackboardKeyType {
    EnumType: UEnum;
    EnumName: FString;
    DefaultValue: uint8;
    bIsEnumNameValid: boolean;
}
declare const UBlackboardKeyType_Enum: UBlackboardKeyType_Enum;

declare interface UBlackboardKeyType_Float extends UBlackboardKeyType {
    DefaultValue: number;
}
declare const UBlackboardKeyType_Float: UBlackboardKeyType_Float;

declare interface UBlackboardKeyType_Int extends UBlackboardKeyType {
    DefaultValue: number;
}
declare const UBlackboardKeyType_Int: UBlackboardKeyType_Int;

declare interface UBlackboardKeyType_Name extends UBlackboardKeyType {
    DefaultValue: FName;
}
declare const UBlackboardKeyType_Name: UBlackboardKeyType_Name;

declare interface UBlackboardKeyType_NativeEnum extends UBlackboardKeyType {
    EnumName: FString;
    EnumType: UEnum;
}
declare const UBlackboardKeyType_NativeEnum: UBlackboardKeyType_NativeEnum;

declare interface UBlackboardKeyType_Object extends UBlackboardKeyType {
    BaseClass: UClass;
    DefaultValue: UObject;
}
declare const UBlackboardKeyType_Object: UBlackboardKeyType_Object;

declare interface UBlackboardKeyType_Rotator extends UBlackboardKeyType {
    DefaultValue: FRotator;
    bUseDefaultValue: boolean;
}
declare const UBlackboardKeyType_Rotator: UBlackboardKeyType_Rotator;

declare interface UBlackboardKeyType_String extends UBlackboardKeyType {
    StringValue: FString;
    DefaultValue: FString;
}
declare const UBlackboardKeyType_String: UBlackboardKeyType_String;

declare interface UBlackboardKeyType_Struct extends UBlackboardKeyType {
    DefaultValue: FInstancedStruct;
    Value: FInstancedStruct;
}
declare const UBlackboardKeyType_Struct: UBlackboardKeyType_Struct;

declare interface UBlackboardKeyType_Vector extends UBlackboardKeyType {
    DefaultValue: FVector;
    bUseDefaultValue: boolean;
}
declare const UBlackboardKeyType_Vector: UBlackboardKeyType_Vector;

declare interface UBrainComponent extends UActorComponent {
    BlackboardComp: UBlackboardComponent;
    AIOwner: AAIController;
    StopLogic(Reason: string | FString): void;
    StartLogic(): void;
    RestartLogic(): void;
    IsRunning(): boolean;
    IsPaused(): boolean;
}
declare const UBrainComponent: UBrainComponent;

declare interface UCrowdFollowingComponent extends UPathFollowingComponent {
    CrowdAgentMoveDirection: FVector;
    SuspendCrowdSteering(bSuspend: boolean): void;
}
declare const UCrowdFollowingComponent: UCrowdFollowingComponent;

declare interface UCrowdManager extends UCrowdManagerBase {
    MyNavData: ANavigationData;
    AvoidanceConfig: TArray<FCrowdAvoidanceConfig>;
    SamplingPatterns: TArray<FCrowdAvoidanceSamplingPattern>;
    MaxAgents: number;
    MaxAgentRadius: number;
    MaxAvoidedAgents: number;
    MaxAvoidedWalls: number;
    NavmeshCheckInterval: number;
    PathOptimizationInterval: number;
    SeparationDirClamp: number;
    PathOffsetRadiusMultiplier: number;
    bResolveCollisions: boolean;
}
declare const UCrowdManager: UCrowdManager;

declare interface UEQSRenderingComponent extends UDebugDrawComponent {

}
declare const UEQSRenderingComponent: UEQSRenderingComponent;

declare interface UEnvQuery extends UDataAsset {
    QueryName: FName;
    Options: TArray<UEnvQueryOption>;
}
declare const UEnvQuery: UEnvQuery;

declare interface UEnvQueryContext extends UObject {

}
declare const UEnvQueryContext: UEnvQueryContext;

declare interface UEnvQueryContext_BlueprintBase extends UEnvQueryContext {
    ProvideSingleLocation(QuerierObject: UObject, QuerierActor: AActor, ResultingLocation: FVector): void;
    ProvideSingleActor(QuerierObject: UObject, QuerierActor: AActor, ResultingActor: AActor): void;
    ProvideLocationsSet(QuerierObject: UObject, QuerierActor: AActor, ResultingLocationSet: TArray<FVector>): void;
    ProvideActorsSet(QuerierObject: UObject, QuerierActor: AActor, ResultingActorsSet: TArray<AActor>): void;
}
declare const UEnvQueryContext_BlueprintBase: UEnvQueryContext_BlueprintBase;

declare interface UEnvQueryContext_Item extends UEnvQueryContext {

}
declare const UEnvQueryContext_Item: UEnvQueryContext_Item;

declare interface UEnvQueryContext_NavigationData extends UEnvQueryContext {
    NavAgentProperties: FNavAgentProperties;
}
declare const UEnvQueryContext_NavigationData: UEnvQueryContext_NavigationData;

declare interface UEnvQueryContext_Querier extends UEnvQueryContext {

}
declare const UEnvQueryContext_Querier: UEnvQueryContext_Querier;

declare interface UEnvQueryDebugHelpers extends UObject {

}
declare const UEnvQueryDebugHelpers: UEnvQueryDebugHelpers;

declare interface UEnvQueryGenerator extends UEnvQueryNode {
    OptionName: FString;
    ItemType: TSubclassOf<UEnvQueryItemType>;
    bAutoSortTests: boolean;
    bCanRunAsync: boolean;
}
declare const UEnvQueryGenerator: UEnvQueryGenerator;

declare interface UEnvQueryGenerator_ActorsOfClass extends UEnvQueryGenerator {
    SearchedActorClass: TSubclassOf<AActor>;
    GenerateOnlyActorsInRadius: FAIDataProviderBoolValue;
    SearchRadius: FAIDataProviderFloatValue;
    SearchCenter: TSubclassOf<UEnvQueryContext>;
}
declare const UEnvQueryGenerator_ActorsOfClass: UEnvQueryGenerator_ActorsOfClass;

declare interface UEnvQueryGenerator_BlueprintBase extends UEnvQueryGenerator {
    GeneratorsActionDescription: FText;
    Context: TSubclassOf<UEnvQueryContext>;
    GeneratedItemType: TSubclassOf<UEnvQueryItemType>;
    GetQuerier(): UObject;
    DoItemGenerationFromActors(ContextActors: TArray<AActor>): void;
    DoItemGeneration(ContextLocations: TArray<FVector>): void;
    AddGeneratedVector(GeneratedVector: FVector): void;
    AddGeneratedActor(GeneratedActor: AActor): void;
}
declare const UEnvQueryGenerator_BlueprintBase: UEnvQueryGenerator_BlueprintBase;

declare interface UEnvQueryGenerator_Composite extends UEnvQueryGenerator {
    Generators: TArray<UEnvQueryGenerator>;
    bAllowDifferentItemTypes: boolean;
    bHasMatchingItemType: boolean;
    ForcedItemType: TSubclassOf<UEnvQueryItemType>;
}
declare const UEnvQueryGenerator_Composite: UEnvQueryGenerator_Composite;

declare interface UEnvQueryGenerator_Cone extends UEnvQueryGenerator_ProjectedPoints {
    AlignedPointsDistance: FAIDataProviderFloatValue;
    ConeDegrees: FAIDataProviderFloatValue;
    AngleStep: FAIDataProviderFloatValue;
    Range: FAIDataProviderFloatValue;
    CenterActor: TSubclassOf<UEnvQueryContext>;
    bIncludeContextLocation: boolean;
}
declare const UEnvQueryGenerator_Cone: UEnvQueryGenerator_Cone;

declare interface UEnvQueryGenerator_CurrentLocation extends UEnvQueryGenerator_ProjectedPoints {
    QueryContext: TSubclassOf<UEnvQueryContext>;
}
declare const UEnvQueryGenerator_CurrentLocation: UEnvQueryGenerator_CurrentLocation;

declare interface UEnvQueryGenerator_Donut extends UEnvQueryGenerator_ProjectedPoints {
    InnerRadius: FAIDataProviderFloatValue;
    OuterRadius: FAIDataProviderFloatValue;
    NumberOfRings: FAIDataProviderIntValue;
    PointsPerRing: FAIDataProviderIntValue;
    ArcDirection: FEnvDirection;
    ArcAngle: FAIDataProviderFloatValue;
    bUseSpiralPattern: boolean;
    Center: TSubclassOf<UEnvQueryContext>;
    bDefineArc: boolean;
}
declare const UEnvQueryGenerator_Donut: UEnvQueryGenerator_Donut;

declare interface UEnvQueryGenerator_OnCircle extends UEnvQueryGenerator_ProjectedPoints {
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
}
declare const UEnvQueryGenerator_OnCircle: UEnvQueryGenerator_OnCircle;

declare interface UEnvQueryGenerator_PathingGrid extends UEnvQueryGenerator_SimpleGrid {
    PathToItem: FAIDataProviderBoolValue;
    NavigationFilter: TSubclassOf<UNavigationQueryFilter>;
    ScanRangeMultiplier: FAIDataProviderFloatValue;
}
declare const UEnvQueryGenerator_PathingGrid: UEnvQueryGenerator_PathingGrid;

declare interface UEnvQueryGenerator_PerceivedActors extends UEnvQueryGenerator {
    AllowedActorClass: TSubclassOf<AActor>;
    SearchRadius: FAIDataProviderFloatValue;
    ListenerContext: TSubclassOf<UEnvQueryContext>;
    SenseToUse: TSubclassOf<UAISense>;
    bIncludeKnownActors: boolean;
}
declare const UEnvQueryGenerator_PerceivedActors: UEnvQueryGenerator_PerceivedActors;

declare interface UEnvQueryGenerator_ProjectedPoints extends UEnvQueryGenerator {
    ProjectionData: FEnvTraceData;
    NavDataOverrideContext: TSubclassOf<UEnvQueryContext>;
}
declare const UEnvQueryGenerator_ProjectedPoints: UEnvQueryGenerator_ProjectedPoints;

declare interface UEnvQueryGenerator_SimpleGrid extends UEnvQueryGenerator_ProjectedPoints {
    GridSize: FAIDataProviderFloatValue;
    SpaceBetween: FAIDataProviderFloatValue;
    GenerateAround: TSubclassOf<UEnvQueryContext>;
}
declare const UEnvQueryGenerator_SimpleGrid: UEnvQueryGenerator_SimpleGrid;

declare interface UEnvQueryInstanceBlueprintWrapper extends UObject {
    QueryID: number;
    ItemType: TSubclassOf<UEnvQueryItemType>;
    OptionIndex: number;
    OnQueryFinishedEvent: FEnvQueryInstanceBlueprintWrapperOnQueryFinishedEvent;
    SetNamedParam(ParamName: FName, Value: number): void;
    GetResultsAsLocations(): TArray<FVector>;
    GetResultsAsActors(): TArray<AActor>;
    GetQueryResultsAsLocations(ResultLocations: TArray<FVector>): boolean;
    GetQueryResultsAsActors(ResultActors: TArray<AActor>): boolean;
    GetItemScore(ItemIndex: number): number;
    EQSQueryDoneSignature__DelegateSignature(QueryInstance: UEnvQueryInstanceBlueprintWrapper, QueryStatus: EEnvQueryStatus): void;
}
declare const UEnvQueryInstanceBlueprintWrapper: UEnvQueryInstanceBlueprintWrapper;

declare interface UEnvQueryItemType extends UObject {

}
declare const UEnvQueryItemType: UEnvQueryItemType;

declare interface UEnvQueryItemType_Actor extends UEnvQueryItemType_ActorBase {

}
declare const UEnvQueryItemType_Actor: UEnvQueryItemType_Actor;

declare interface UEnvQueryItemType_ActorBase extends UEnvQueryItemType_VectorBase {

}
declare const UEnvQueryItemType_ActorBase: UEnvQueryItemType_ActorBase;

declare interface UEnvQueryItemType_Direction extends UEnvQueryItemType_VectorBase {

}
declare const UEnvQueryItemType_Direction: UEnvQueryItemType_Direction;

declare interface UEnvQueryItemType_Point extends UEnvQueryItemType_VectorBase {

}
declare const UEnvQueryItemType_Point: UEnvQueryItemType_Point;

declare interface UEnvQueryItemType_VectorBase extends UEnvQueryItemType {

}
declare const UEnvQueryItemType_VectorBase: UEnvQueryItemType_VectorBase;

declare interface UEnvQueryManager extends UAISubsystem {
    InstanceCache: TArray<FEnvQueryInstanceCache>;
    LocalContexts: TArray<UEnvQueryContext>;
    GCShieldedWrappers: TArray<UEnvQueryInstanceBlueprintWrapper>;
    MaxAllowedTestingTime: number;
    bTestQueriesUsingBreadth: boolean;
    QueryCountWarningThreshold: number;
    QueryCountWarningInterval: number;
    ExecutionTimeWarningSeconds: number;
    HandlingResultTimeWarningSeconds: number;
    GenerationTimeWarningSeconds: number;
    RunEQSQuery(WorldContextObject: UObject, QueryTemplate: UEnvQuery, Querier: UObject, RunMode: EEnvQueryRunMode, WrapperClass: TSubclassOf<UEnvQueryInstanceBlueprintWrapper>): UEnvQueryInstanceBlueprintWrapper;
}
declare const UEnvQueryManager: UEnvQueryManager;

declare interface UEnvQueryNode extends UObject {
    VerNum: number;
}
declare const UEnvQueryNode: UEnvQueryNode;

declare interface UEnvQueryOption extends UObject {
    Generator: UEnvQueryGenerator;
    Tests: TArray<UEnvQueryTest>;
}
declare const UEnvQueryOption: UEnvQueryOption;

declare interface UEnvQueryTest extends UEnvQueryNode {
    TestOrder: number;
    TestPurpose: EEnvTestPurpose;
    TestComment: FString;
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
}
declare const UEnvQueryTest: UEnvQueryTest;

declare interface UEnvQueryTest_Distance extends UEnvQueryTest {
    TestMode: EEnvTestDistance;
    DistanceTo: TSubclassOf<UEnvQueryContext>;
}
declare const UEnvQueryTest_Distance: UEnvQueryTest_Distance;

declare interface UEnvQueryTest_Dot extends UEnvQueryTest {
    LineA: FEnvDirection;
    LineB: FEnvDirection;
    TestMode: EEnvTestDot;
    bAbsoluteValue: boolean;
}
declare const UEnvQueryTest_Dot: UEnvQueryTest_Dot;

declare interface UEnvQueryTest_GameplayTags extends UEnvQueryTest {
    TagQueryToMatch: FGameplayTagQuery;
    bRejectIncompatibleItems: boolean;
    bUpdatedToUseQuery: boolean;
    TagsToMatch: EGameplayContainerMatchType;
    GameplayTags: FGameplayTagContainer;
}
declare const UEnvQueryTest_GameplayTags: UEnvQueryTest_GameplayTags;

declare interface UEnvQueryTest_Overlap extends UEnvQueryTest {
    OverlapData: FEnvOverlapData;
}
declare const UEnvQueryTest_Overlap: UEnvQueryTest_Overlap;

declare interface UEnvQueryTest_Pathfinding extends UEnvQueryTest {
    TestMode: EEnvTestPathfinding;
    Context: TSubclassOf<UEnvQueryContext>;
    PathFromContext: FAIDataProviderBoolValue;
    SkipUnreachable: FAIDataProviderBoolValue;
    FilterClass: TSubclassOf<UNavigationQueryFilter>;
}
declare const UEnvQueryTest_Pathfinding: UEnvQueryTest_Pathfinding;

declare interface UEnvQueryTest_PathfindingBatch extends UEnvQueryTest_Pathfinding {
    ScanRangeMultiplier: FAIDataProviderFloatValue;
}
declare const UEnvQueryTest_PathfindingBatch: UEnvQueryTest_PathfindingBatch;

declare interface UEnvQueryTest_Project extends UEnvQueryTest {
    ProjectionData: FEnvTraceData;
}
declare const UEnvQueryTest_Project: UEnvQueryTest_Project;

declare interface UEnvQueryTest_Random extends UEnvQueryTest {

}
declare const UEnvQueryTest_Random: UEnvQueryTest_Random;

declare interface UEnvQueryTest_Trace extends UEnvQueryTest {
    TraceData: FEnvTraceData;
    TraceFromContext: FAIDataProviderBoolValue;
    ItemHeightOffset: FAIDataProviderFloatValue;
    ContextHeightOffset: FAIDataProviderFloatValue;
    Context: TSubclassOf<UEnvQueryContext>;
}
declare const UEnvQueryTest_Trace: UEnvQueryTest_Trace;

declare interface UEnvQueryTest_Volume extends UEnvQueryTest {
    VolumeContext: TSubclassOf<UEnvQueryContext>;
    VolumeClass: TSubclassOf<AVolume>;
    bDoComplexVolumeTest: boolean;
    bSkipTestIfNoVolumes: boolean;
}
declare const UEnvQueryTest_Volume: UEnvQueryTest_Volume;

declare interface UEnvQueryTypes extends UObject {

}
declare const UEnvQueryTypes: UEnvQueryTypes;

declare interface UGeneratedNavLinksProxy extends UBaseGeneratedNavLinksProxy {
    OnSmartLinkReached: FGeneratedNavLinksProxyOnSmartLinkReached;
    ReceiveSmartLinkReached(Agent: AActor, Destination: FVector): void;
}
declare const UGeneratedNavLinksProxy: UGeneratedNavLinksProxy;

declare interface UGridPathFollowingComponent extends UPathFollowingComponent {
    GridManager: UNavLocalGridManager;
}
declare const UGridPathFollowingComponent: UGridPathFollowingComponent;

declare interface UNavFilter_AIControllerDefault extends UNavigationQueryFilter {

}
declare const UNavFilter_AIControllerDefault: UNavFilter_AIControllerDefault;

declare interface UNavLocalGridManager extends UObject {
    SetLocalNavigationGridDensity(WorldContextObject: UObject, CellSize: number): boolean;
    RemoveLocalNavigationGrid(WorldContextObject: UObject, GridId: number, bRebuildGrids: boolean): void;
    FindLocalNavigationGridPath(WorldContextObject: UObject, Start: FVector, End: FVector, PathPoints: TArray<FVector>): boolean;
    AddLocalNavigationGridForPoints(WorldContextObject: UObject, Locations: TArray<FVector>, Radius2D: number, Height: number, bRebuildGrids: boolean): number;
    AddLocalNavigationGridForPoint(WorldContextObject: UObject, Location: FVector, Radius2D: number, Height: number, bRebuildGrids: boolean): number;
    AddLocalNavigationGridForCapsule(WorldContextObject: UObject, Location: FVector, CapsuleRadius: number, CapsuleHalfHeight: number, Radius2D: number, Height: number, bRebuildGrids: boolean): number;
    AddLocalNavigationGridForBox(WorldContextObject: UObject, Location: FVector, Extent: FVector, Rotation: FRotator, Radius2D: number, Height: number, bRebuildGrids: boolean): number;
}
declare const UNavLocalGridManager: UNavLocalGridManager;

declare interface UPathFollowingComponent extends UActorComponent {
    MovementComp: UNavMovementComponent;
    MyNavData: ANavigationData;
    OnNavDataRegistered(NavData: ANavigationData): void;
    OnActorBump(SelfActor: AActor, OtherActor: AActor, NormalImpulse: FVector, Hit: FHitResult): void;
    GetPathDestination(): FVector;
    GetPathActionType(): EPathFollowingAction;
}
declare const UPathFollowingComponent: UPathFollowingComponent;

declare interface UPathFollowingManager extends UObject {

}
declare const UPathFollowingManager: UPathFollowingManager;

declare interface UPawnSensingComponent extends UActorComponent {
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
    SetSensingUpdatesEnabled(bEnabled: boolean): void;
    SetSensingInterval(NewSensingInterval: number): void;
    SetPeripheralVisionAngle(NewPeripheralVisionAngle: number): void;
    SeePawnDelegate__DelegateSignature(Pawn: APawn): void;
    HearNoiseDelegate__DelegateSignature(Instigator: APawn, Location: FVector, Volume: number): void;
    GetPeripheralVisionCosine(): number;
    GetPeripheralVisionAngle(): number;
}
declare const UPawnSensingComponent: UPawnSensingComponent;

declare interface UValueOrBBKeyBlueprintUtility extends UBlueprintFunctionLibrary {
    GetVector(Value: FValueOrBBKey_Vector, BehaviorTreeComp: UBehaviorTreeComponent): FVector;
    GetStruct(Value: FValueOrBBKey_Struct, BehaviorTreeComp: UBehaviorTreeComponent): FInstancedStruct;
    GetString(Value: FValueOrBBKey_String, BehaviorTreeComp: UBehaviorTreeComponent): FString;
    GetRotator(Value: FValueOrBBKey_Rotator, BehaviorTreeComp: UBehaviorTreeComponent): FRotator;
    GetObject(Value: FValueOrBBKey_Object, BehaviorTreeComp: UBehaviorTreeComponent): UObject;
    GetName(Value: FValueOrBBKey_Name, BehaviorTreeComp: UBehaviorTreeComponent): FName;
    GetInt32(Value: FValueOrBBKey_Int32, BehaviorTreeComp: UBehaviorTreeComponent): number;
    GetFloat(Value: FValueOrBBKey_Float, BehaviorTreeComp: UBehaviorTreeComponent): number;
    GetEnum(Value: FValueOrBBKey_Enum, BehaviorTreeComp: UBehaviorTreeComponent): uint8;
    GetClass(Value: FValueOrBBKey_Class, BehaviorTreeComp: UBehaviorTreeComponent): UClass;
    GetBool(Value: FValueOrBBKey_Bool, BehaviorTreeComp: UBehaviorTreeComponent): boolean;
    GetClass(): UClass;
}
declare const UValueOrBBKeyBlueprintUtility: UValueOrBBKeyBlueprintUtility;

declare interface UVisualLoggerExtension extends UObject {

}
declare const UVisualLoggerExtension: UVisualLoggerExtension;

