declare interface FCompactEventDesc {
    PayloadStruct: UScriptStruct;
    Tag: FGameplayTag;
}

declare interface FCompactStateTransition {
    RequiredEvent: FCompactEventDesc;
    RequiredDelegateDispatcher: FStateTreeDelegateDispatcher;
    ConditionsBegin: number;
    State: FStateTreeStateHandle;
    Delay: FStateTreeRandomTimeDuration;
    Trigger: EStateTreeTransitionTrigger;
    Priority: EStateTreeTransitionPriority;
    Fallback: EStateTreeSelectionFallback;
    ConditionsNum: number;
    bTransitionEnabled: boolean;
    bConsumeEventOnSelect: boolean;
}

declare interface FCompactStateTreeFrame {
    RootState: FStateTreeStateHandle;
    NumberOfTasksStatusMasks: number;
}

declare interface FCompactStateTreeParameters {
    Parameters: FInstancedPropertyBag;
}

declare interface FCompactStateTreeState {
    RequiredEventToEnter: FCompactEventDesc;
    Name: string;
    Tag: FGameplayTag;
    LinkedAsset: UStateTree;
    LinkedState: FStateTreeStateHandle;
    Parent: FStateTreeStateHandle;
    ChildrenBegin: number;
    ChildrenEnd: number;
    EnterConditionsBegin: number;
    UtilityConsiderationsBegin: number;
    TransitionsBegin: number;
    TasksBegin: number;
    ParameterTemplateIndex: FStateTreeIndex16;
    ParameterDataHandle: FStateTreeDataHandle;
    ParameterBindingsBatch: FStateTreeIndex16;
    EventDataIndex: FStateTreeIndex16;
    Weight: number;
    CustomTickRate: number;
    CompletionTasksMask: number;
    CompletionTasksMaskBufferIndex: number;
    CompletionTasksMaskBitsOffset: number;
    CompletionTasksControl: EStateTreeTaskCompletionType;
    EnterConditionsNum: number;
    UtilityConsiderationsNum: number;
    TransitionsNum: number;
    TasksNum: number;
    EnabledTasksNum: number;
    InstanceDataNum: number;
    Depth: number;
    Type: EStateTreeStateType;
    SelectionBehavior: EStateTreeStateSelectionBehavior;
    bHasTransitionTasks: boolean;
    bHasStateChangeConditions: boolean;
    bHasTickTriggerTransitions: boolean;
    bHasEventTriggerTransitions: boolean;
    bHasDelegateTriggerTransitions: boolean;
    bHasCompletedTriggerTransitions: boolean;
    bHasSucceededTriggerTransitions: boolean;
    bHasFailedTriggerTransitions: boolean;
    bCheckPrerequisitesWhenActivatingChildDirectly: boolean;
    bEnabled: boolean;
    bConsumeEventOnSelect: boolean;
    bHasCustomTickRate: boolean;
}

declare interface FGameplayTagContainerMatchCondition extends FStateTreeConditionCommonBase {
    MatchType: EGameplayContainerMatchType;
    bExactMatch: boolean;
    bInvert: boolean;
}

declare interface FGameplayTagContainerMatchConditionInstanceData {
    TagContainer: FGameplayTagContainer;
    OtherContainer: FGameplayTagContainer;
}

declare interface FGameplayTagMatchCondition extends FStateTreeConditionCommonBase {
    bExactMatch: boolean;
    bInvert: boolean;
}

declare interface FGameplayTagMatchConditionInstanceData {
    TagContainer: FGameplayTagContainer;
    Tag: FGameplayTag;
}

declare interface FGameplayTagQueryCondition extends FStateTreeConditionCommonBase {
    TagQuery: FGameplayTagQuery;
    bInvert: boolean;
}

declare interface FGameplayTagQueryConditionInstanceData {
    TagContainer: FGameplayTagContainer;
}

declare interface FRecordedStateTreeExecutionFrame {
    StateTree: UStateTree;
    RootState: FStateTreeStateHandle;
    ActiveStates: FStateTreeActiveStates;
    bIsGlobalFrame: boolean;
}

declare interface FRecordedStateTreeTransitionResult {
    NextActiveFrames: FRecordedStateTreeExecutionFrame[];
    NextActiveFrameEvents: FStateTreeEvent[];
    SourceState: FStateTreeStateHandle;
    TargetState: FStateTreeStateHandle;
    Priority: EStateTreeTransitionPriority;
    SourceStateTree: UStateTree;
    SourceRootState: FStateTreeStateHandle;
}

declare interface FStateTreeAbsoluteFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeAbsoluteIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeActiveStates {
    States: FStateTreeStateHandle;
    NumStates: number;
}

declare interface FStateTreeAddFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeAddIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeAnyEnum {
    Value: number;
    Enum: UEnum;
}

declare interface FStateTreeBindableStructDesc extends FPropertyBindingBindableStructDescriptor {
    DataHandle: FStateTreeDataHandle;
    DataSource: EStateTreeBindableStructSource;
}

declare interface FStateTreeBlueprintConditionWrapper extends FStateTreeConditionBase {
    ConditionClass: TSubclassOf<UStateTreeConditionBlueprintBase>;
}

declare interface FStateTreeBlueprintConsiderationWrapper extends FStateTreeConsiderationBase {
    ConsiderationClass: TSubclassOf<UStateTreeConsiderationBlueprintBase>;
}

declare interface FStateTreeBlueprintEvaluatorWrapper extends FStateTreeEvaluatorBase {
    EvaluatorClass: TSubclassOf<UStateTreeEvaluatorBlueprintBase>;
}

declare interface FStateTreeBlueprintPropertyRef extends FStateTreePropertyRef {
    RefType: EStateTreePropertyRefType;
    bIsRefToArray: boolean;
    bIsOptional: boolean;
    TypeObject: UObject;
}

declare interface FStateTreeBlueprintTaskWrapper extends FStateTreeTaskBase {
    TaskClass: TSubclassOf<UStateTreeTaskBlueprintBase>;
    TaskFlags: number;
}

declare interface FStateTreeBooleanAndPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeBooleanNotOperationPropertyFunctionInstanceData {
    bInput: boolean;
    bResult: boolean;
}

declare interface FStateTreeBooleanNotPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeBooleanOperationPropertyFunctionInstanceData {
    bLeft: boolean;
    bRight: boolean;
    bResult: boolean;
}

declare interface FStateTreeBooleanOrPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeBooleanXOrPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeCompareBoolCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}

declare interface FStateTreeCompareBoolConditionInstanceData {
    bLeft: boolean;
    bRight: boolean;
}

declare interface FStateTreeCompareDistanceCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
    Operator: EGenericAICheck;
}

declare interface FStateTreeCompareDistanceConditionInstanceData {
    Source: FVector;
    Target: FVector;
    Distance: number;
}

declare interface FStateTreeCompareEnumCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}

declare interface FStateTreeCompareEnumConditionInstanceData {
    Left: FStateTreeAnyEnum;
    Right: FStateTreeAnyEnum;
}

declare interface FStateTreeCompareFloatCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
    Operator: EGenericAICheck;
}

declare interface FStateTreeCompareFloatConditionInstanceData {
    Left: number;
    Right: number;
}

declare interface FStateTreeCompareIntCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
    Operator: EGenericAICheck;
}

declare interface FStateTreeCompareIntConditionInstanceData {
    Left: number;
    Right: number;
}

declare interface FStateTreeConditionBase extends FStateTreeNodeBase {
    Operand: EStateTreeExpressionOperand;
    DeltaIndent: number;
    EvaluationMode: EStateTreeConditionEvaluationMode;
}

declare interface FStateTreeConditionCommonBase extends FStateTreeConditionBase {

}

declare interface FStateTreeConsiderationBase extends FStateTreeNodeBase {
    Operand: EStateTreeExpressionOperand;
    DeltaIndent: number;
}

declare interface FStateTreeConsiderationCommonBase extends FStateTreeConsiderationBase {

}

declare interface FStateTreeConsiderationResponseCurve {
    CurveInfo: FRuntimeFloatCurve;
}

declare interface FStateTreeConstantConsideration extends FStateTreeConsiderationCommonBase {

}

declare interface FStateTreeConstantConsiderationInstanceData {
    Constant: number;
}

declare interface FStateTreeDataHandle {
    Source: EStateTreeDataSourceType;
    Index: number;
    StateHandle: FStateTreeStateHandle;
}

declare interface FStateTreeDebugTextTask extends FStateTreeTaskCommonBase {
    Text: string;
    TextColor: FColor;
    FontScale: number;
    Offset: FVector;
    bEnabled: boolean;
}

declare interface FStateTreeDebugTextTaskInstanceData {
    ReferenceActor: AActor;
    BindableText: string;
}

declare interface FStateTreeDelayTask extends FStateTreeTaskCommonBase {

}

declare interface FStateTreeDelayTaskInstanceData {
    duration: number;
    RandomDeviation: number;
    bRunForever: boolean;
}

declare interface FStateTreeDelegateDispatcher {
    ID: FGuid;
}

declare interface FStateTreeDelegateListener {
    Dispatcher: FStateTreeDelegateDispatcher;
    ID: number;
}

declare interface FStateTreeDivideFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeDivideIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare type FStateTreeEditorPropertyPath = object;

declare interface FStateTreeEnumInputConsideration extends FStateTreeConsiderationCommonBase {
    EnumValueScorePairs: FStateTreeEnumValueScorePairs;
}

declare interface FStateTreeEnumInputConsiderationInstanceData {
    Input: FStateTreeAnyEnum;
}

declare interface FStateTreeEnumValueScorePair {
    EnumValue: number;
    Score: number;
}

declare interface FStateTreeEnumValueScorePairs {
    Data: FStateTreeEnumValueScorePair[];
}

declare interface FStateTreeEvaluatorBase extends FStateTreeNodeBase {

}

declare interface FStateTreeEvaluatorCommonBase extends FStateTreeEvaluatorBase {

}

declare interface FStateTreeEvent {
    Tag: FGameplayTag;
    Payload: FInstancedStruct;
    Origin: string;
}

declare interface FStateTreeEventQueue {
    SharedEvents: FStateTreeSharedEvent[];
}

declare type FStateTreeExecutionExtension = object;

declare interface FStateTreeExecutionFrame {
    StateTree: UStateTree;
    RootState: FStateTreeStateHandle;
    ActiveStates: FStateTreeActiveStates;
    ActiveTasksStatus: FStateTreeTasksCompletionStatus;
    ExternalDataBaseIndex: FStateTreeIndex16;
    GlobalInstanceIndexBase: FStateTreeIndex16;
    ActiveInstanceIndexBase: FStateTreeIndex16;
    StateParameterDataHandle: FStateTreeDataHandle;
    GlobalParameterDataHandle: FStateTreeDataHandle;
    bIsGlobalFrame: boolean;
}

declare interface FStateTreeExecutionState {
    ActiveFrames: FStateTreeExecutionFrame[];
    DelayedTransitions: FStateTreeTransitionDelayedState[];
    RandomStream: FRandomStream;
    ExecutionExtension: FInstancedStruct;
    EnterStateFailedFrameIndex: FStateTreeIndex16;
    EnterStateFailedTaskIndex: FStateTreeIndex16;
    LastExitedNodeIndex: FStateTreeIndex16;
    LastTickStatus: EStateTreeRunStatus;
    TreeRunStatus: EStateTreeRunStatus;
    RequestedStop: EStateTreeRunStatus;
    CurrentPhase: EStateTreeUpdatePhase;
    StateChangeCount: number;
    bHasPendingCompletedState: boolean;
}

declare interface FStateTreeExternalDataDesc {
    Struct: UStruct;
    Name: string;
    Handle: FStateTreeExternalDataHandle;
    Requirement: EStateTreeExternalDataRequirement;
}

declare interface FStateTreeExternalDataHandle {
    DataHandle: FStateTreeDataHandle;
}

declare interface FStateTreeFloatCombinaisonPropertyFunctionInstanceData {
    Left: number;
    Right: number;
    Result: number;
}

declare interface FStateTreeFloatInputConsideration extends FStateTreeConsiderationCommonBase {
    ResponseCurve: FStateTreeConsiderationResponseCurve;
}

declare interface FStateTreeFloatInputConsiderationInstanceData {
    Input: number;
    Interval: FFloatInterval;
}

declare interface FStateTreeIndex16 {
    Value: number;
}

declare interface FStateTreeIndex8 {
    Value: number;
}

declare type FStateTreeInstanceData = object;

declare interface FStateTreeInstanceObjectWrapper {
    InstanceObject: UObject;
}

declare interface FStateTreeInstanceStorage {
    InstanceStructs: FInstancedStructContainer;
    ExecutionState: FStateTreeExecutionState;
    TemporaryInstances: FStateTreeTemporaryInstanceData[];
    TransitionRequests: FStateTreeTransitionRequest[];
    GlobalParameters: FInstancedPropertyBag;
    UniqueIdGenerator: number;
}

declare interface FStateTreeIntCombinaisonPropertyFunctionInstanceData {
    Left: number;
    Right: number;
    Result: number;
}

declare interface FStateTreeInvertFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeInvertIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeMakeIntervalPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeMakeIntervalPropertyFunctionInstanceData {
    min: number;
    max: number;
    Result: FFloatInterval;
}

declare interface FStateTreeMultiplyFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeMultiplyIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeNodeBase {
    Name: string;
    BindingsBatch: FStateTreeIndex16;
    InstanceTemplateIndex: FStateTreeIndex16;
    InstanceDataHandle: FStateTreeDataHandle;
}

declare interface FStateTreeNodeIdToIndex {
    ID: FGuid;
    Index: FStateTreeIndex16;
}

declare interface FStateTreeObjectEqualsCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}

declare interface FStateTreeObjectEqualsConditionInstanceData {
    Left: UObject;
    Right: UObject;
}

declare interface FStateTreeObjectIsChildOfClassCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}

declare interface FStateTreeObjectIsChildOfClassConditionInstanceData {
    Object: UObject;
    Class: UClass;
}

declare interface FStateTreeObjectIsValidCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}

declare interface FStateTreeObjectIsValidConditionInstanceData {
    Object: UObject;
}

declare interface FStateTreePropertyAccess {
    SourceIndirection: FPropertyBindingPropertyIndirection;
    SourceStructType: UStruct;
    SourceDataHandle: FStateTreeDataHandle;
}

declare interface FStateTreePropertyBindings extends FPropertyBindingBindingCollection {
    SourceStructs: FStateTreeBindableStructDesc[];
    PropertyPathBindings: FStateTreePropertyPathBinding[];
    PropertyReferencePaths: FStateTreePropertyRefPath[];
    PropertyAccesses: FStateTreePropertyAccess[];
}

declare interface FStateTreePropertyFunctionBase extends FStateTreeNodeBase {

}

declare interface FStateTreePropertyFunctionCommonBase extends FStateTreePropertyFunctionBase {

}

declare interface FStateTreePropertyPathBinding extends FPropertyBindingBinding {
    SourceDataHandle: FStateTreeDataHandle;
}

declare interface FStateTreePropertyRef {
    RefAccessIndex: FStateTreeIndex16;
}

declare interface FStateTreePropertyRefPath {
    SourcePropertyPath: FPropertyBindingPath;
    SourceDataHandle: FStateTreeDataHandle;
}

declare interface FStateTreeRandomCondition extends FStateTreeConditionCommonBase {

}

declare interface FStateTreeRandomConditionInstanceData {
    Threshold: number;
}

declare interface FStateTreeRandomTimeDuration {
    duration: number;
    RandomVariance: number;
}

declare interface FStateTreeReference {
    StateTree: UStateTree;
    Parameters: FInstancedPropertyBag;
    PropertyOverrides: FGuid[];
}

declare interface FStateTreeReferenceOverrideItem {
    StateTag: FGameplayTag;
    StateTreeReference: FStateTreeReference;
}

declare interface FStateTreeReferenceOverrides {
    OverrideItems: FStateTreeReferenceOverrideItem[];
}

declare interface FStateTreeRunParallelStateTreeExecutionExtension extends FStateTreeExecutionExtension {

}

declare interface FStateTreeRunParallelStateTreeTask extends FStateTreeTaskCommonBase {
    StateTreeOverrideTag: FGameplayTag;
}

declare interface FStateTreeRunParallelStateTreeTaskInstanceData {
    StateTree: FStateTreeReference;
    TreeInstanceData: FStateTreeInstanceData;
    RunningStateTree: UStateTree;
}

declare interface FStateTreeScheduledTick {
    NextDeltaTime: number;
}

declare type FStateTreeSharedEvent = object;

declare interface FStateTreeSingleFloatPropertyFunctionInstanceData {
    Input: number;
    Result: number;
}

declare interface FStateTreeSingleIntPropertyFunctionInstanceData {
    Input: number;
    Result: number;
}

declare interface FStateTreeStateHandle {
    Index: number;
}

declare interface FStateTreeStateIdToHandle {
    ID: FGuid;
    Handle: FStateTreeStateHandle;
}

declare interface FStateTreeStateLink {
    StateHandle: FStateTreeStateHandle;
    Fallback: EStateTreeSelectionFallback;
}

declare type FStateTreeStructRef = object;

declare interface FStateTreeSubtractFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeSubtractIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}

declare interface FStateTreeTaskBase extends FStateTreeNodeBase {
    bTaskEnabled: boolean;
    TransitionHandlingPriority: EStateTreeTransitionPriority;
}

declare interface FStateTreeTaskCommonBase extends FStateTreeTaskBase {

}

declare type FStateTreeTasksCompletionStatus = object;

declare interface FStateTreeTemporaryInstanceData {
    DataHandle: FStateTreeDataHandle;
    OwnerNodeIndex: FStateTreeIndex16;
    instance: FInstancedStruct;
}

declare interface FStateTreeTransitionDelayedState {
    StateTree: UStateTree;
    CapturedEvent: FStateTreeSharedEvent;
    TimeLeft: number;
    CapturedEventHash: number;
    StateHandle: FStateTreeStateHandle;
    TransitionIndex: FStateTreeIndex16;
}

declare interface FStateTreeTransitionIdToIndex {
    ID: FGuid;
    Index: FStateTreeIndex16;
}

declare interface FStateTreeTransitionRequest {
    TargetState: FStateTreeStateHandle;
    Priority: EStateTreeTransitionPriority;
    Fallback: EStateTreeSelectionFallback;
}

declare interface FStateTreeTransitionResult {
    NextActiveFrames: FStateTreeExecutionFrame[];
    SourceState: FStateTreeStateHandle;
    TargetState: FStateTreeStateHandle;
    CurrentState: FStateTreeStateHandle;
    CurrentRunStatus: EStateTreeRunStatus;
    ChangeType: EStateTreeStateChangeType;
    Priority: EStateTreeTransitionPriority;
    SourceStateTree: UStateTree;
    SourceRootState: FStateTreeStateHandle;
}

declare type FStateTreeTransitionSource = object;

declare interface IStateTreeSchemaProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UStateTree extends UDataAsset {
    readonly __properties_UStateTree: {
        LastCompiledEditorDataHash: number;
        Schema: UStateTreeSchema;
        Frames: FCompactStateTreeFrame[];
        States: FCompactStateTreeState[];
        Transitions: FCompactStateTransition[];
        Nodes: FInstancedStructContainer;
        DefaultInstanceData: FStateTreeInstanceData;
        SharedInstanceData: FStateTreeInstanceData;
        ContextDataDescs: FStateTreeExternalDataDesc[];
        PropertyBindings: FStateTreePropertyBindings;
        IDToStateMappings: FStateTreeStateIdToHandle[];
        IDToNodeMappings: FStateTreeNodeIdToIndex[];
        IDToTransitionMappings: FStateTreeTransitionIdToIndex[];
        Parameters: FInstancedPropertyBag;
        ExternalDataDescs: FStateTreeExternalDataDesc[];
        CompletionGlobalTasksMask: number;
        NumContextData: number;
        NumGlobalInstanceData: number;
        EvaluatorsBegin: number;
        EvaluatorsNum: number;
        GlobalTasksBegin: number;
        GlobalTasksNum: number;
        CompletionGlobalTasksControl: EStateTreeTaskCompletionType;
        ParameterDataType: EStateTreeParameterDataType;
        bHasGlobalTransitionTasks: boolean;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UStateTree['__properties_UStateTree'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UStateTreeConditionBlueprintBase extends UStateTreeNodeBlueprintBase {
    readonly __static_UStateTreeConditionBlueprintBase: {
        ReceiveTestCondition(): boolean;
    };
    readonly __staticRegistry: 
        UStateTreeConditionBlueprintBase['__static_UStateTreeConditionBlueprintBase'] &
        UStateTreeNodeBlueprintBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UStateTreeNodeBlueprintBase['__propertyRegistry'];
}

declare interface UStateTreeConsiderationBlueprintBase extends UStateTreeNodeBlueprintBase {
    readonly __static_UStateTreeConsiderationBlueprintBase: {
        ReceiveGetScore(): number;
    };
    readonly __staticRegistry: 
        UStateTreeConsiderationBlueprintBase['__static_UStateTreeConsiderationBlueprintBase'] &
        UStateTreeNodeBlueprintBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UStateTreeNodeBlueprintBase['__propertyRegistry'];
}

declare interface UStateTreeEvaluatorBlueprintBase extends UStateTreeNodeBlueprintBase {
    readonly __static_UStateTreeEvaluatorBlueprintBase: {
        ReceiveTreeStop(): void;
        ReceiveTreeStart(): void;
        ReceiveTick(DeltaTime: number): void;
    };
    readonly __staticRegistry: 
        UStateTreeEvaluatorBlueprintBase['__static_UStateTreeEvaluatorBlueprintBase'] &
        UStateTreeNodeBlueprintBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UStateTreeNodeBlueprintBase['__propertyRegistry'];
}

declare interface UStateTreeFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UStateTreeFunctionLibrary: {
        SetStateTree(Reference: FStateTreeReference, StateTree: UStateTree): void;
        MakeStateTreeReference(StateTree: UStateTree): FStateTreeReference;
        K2_SetParametersProperty(Reference: FStateTreeReference, PropertyID: FGuid, NewValue: number): void;
        K2_GetParametersProperty(Reference: FStateTreeReference, PropertyID: FGuid, ReturnValue: number): void;
    };
    readonly __staticRegistry: 
        UStateTreeFunctionLibrary['__static_UStateTreeFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UStateTreeNodeBlueprintBase extends UObject {
    readonly __static_UStateTreeNodeBlueprintBase: {
        SendEvent(Event: FStateTreeEvent): void;
        RequestTransition(TargetState: FStateTreeStateLink, Priority: EStateTreeTransitionPriority): void;
        ReceiveGetDescription(Formatting: EStateTreeNodeFormatting): string;
        IsPropertyRefValid(PropertyRef: FStateTreeBlueprintPropertyRef): boolean;
        GetPropertyReference(PropertyRef: FStateTreeBlueprintPropertyRef): void;
        GetPropertyDescriptionByPropertyName(PropertyName: string): string;
    };
    readonly __staticRegistry: 
        UStateTreeNodeBlueprintBase['__static_UStateTreeNodeBlueprintBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UStateTreeSchema extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UStateTreeSettings extends UDeveloperSettings {
    readonly __properties_UStateTreeSettings: {
        bAutoStartDebuggerTracesOnNonEditorTargets: boolean;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UStateTreeSettings['__properties_UStateTreeSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UStateTreeTaskBlueprintBase extends UStateTreeNodeBlueprintBase {
    readonly __static_UStateTreeTaskBlueprintBase: {
        UnbindDelegate(Listener: FStateTreeDelegateListener): void;
        ReceiveTick(DeltaTime: number): EStateTreeRunStatus;
        ReceiveStateCompleted(CompletionStatus: EStateTreeRunStatus, CompletedActiveStates: FStateTreeActiveStates): void;
        ReceiveLatentTick(DeltaTime: number): void;
        ReceiveLatentEnterState(Transition: FStateTreeTransitionResult): void;
        ReceiveExitState(Transition: FStateTreeTransitionResult): void;
        ReceiveEnterState(Transition: FStateTreeTransitionResult): EStateTreeRunStatus;
        FinishTask(bSucceeded: boolean): void;
        BroadcastDelegate(Dispatcher: FStateTreeDelegateDispatcher): void;
        BindDelegate(Listener: FStateTreeDelegateListener, Delegate: FBindDelegateDelegate): void;
    };
    readonly __properties_UStateTreeTaskBlueprintBase: {
        bShouldStateChangeOnReselect: boolean;
        bShouldCallTickOnlyOnEvents: boolean;
        bShouldCopyBoundPropertiesOnTick: boolean;
        bShouldCopyBoundPropertiesOnExitState: boolean;
    };
    readonly __staticRegistry: 
        UStateTreeTaskBlueprintBase['__static_UStateTreeTaskBlueprintBase'] &
        UStateTreeNodeBlueprintBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UStateTreeTaskBlueprintBase['__properties_UStateTreeTaskBlueprintBase'] &
        UStateTreeNodeBlueprintBase['__propertyRegistry'];
}

