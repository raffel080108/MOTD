declare interface FCompactEventDesc {
    PayloadStruct: UScriptStruct;
    Tag: FGameplayTag;
}
declare const FCompactEventDesc: FCompactEventDesc;

declare interface FCompactStateTransition {
    RequiredEvent: FCompactEventDesc;
    RequiredDelegateDispatcher: FStateTreeDelegateDispatcher;
    ConditionsBegin: uint16;
    State: FStateTreeStateHandle;
    Delay: FStateTreeRandomTimeDuration;
    Trigger: EStateTreeTransitionTrigger;
    Priority: EStateTreeTransitionPriority;
    Fallback: EStateTreeSelectionFallback;
    ConditionsNum: uint8;
    bTransitionEnabled: boolean;
    bConsumeEventOnSelect: boolean;
}
declare const FCompactStateTransition: FCompactStateTransition;

declare interface FCompactStateTreeFrame {
    RootState: FStateTreeStateHandle;
    NumberOfTasksStatusMasks: uint8;
}
declare const FCompactStateTreeFrame: FCompactStateTreeFrame;

declare interface FCompactStateTreeParameters {
    Parameters: FInstancedPropertyBag;
}
declare const FCompactStateTreeParameters: FCompactStateTreeParameters;

declare interface FCompactStateTreeState {
    RequiredEventToEnter: FCompactEventDesc;
    Name: FName;
    Tag: FGameplayTag;
    LinkedAsset: UStateTree;
    LinkedState: FStateTreeStateHandle;
    Parent: FStateTreeStateHandle;
    ChildrenBegin: uint16;
    ChildrenEnd: uint16;
    EnterConditionsBegin: uint16;
    UtilityConsiderationsBegin: uint16;
    TransitionsBegin: uint16;
    TasksBegin: uint16;
    ParameterTemplateIndex: FStateTreeIndex16;
    ParameterDataHandle: FStateTreeDataHandle;
    ParameterBindingsBatch: FStateTreeIndex16;
    EventDataIndex: FStateTreeIndex16;
    Weight: number;
    CustomTickRate: number;
    CompletionTasksMask: uint32;
    CompletionTasksMaskBufferIndex: uint8;
    CompletionTasksMaskBitsOffset: uint8;
    CompletionTasksControl: EStateTreeTaskCompletionType;
    EnterConditionsNum: uint8;
    UtilityConsiderationsNum: uint8;
    TransitionsNum: uint8;
    TasksNum: uint8;
    EnabledTasksNum: uint8;
    InstanceDataNum: uint8;
    Depth: uint8;
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
declare const FCompactStateTreeState: FCompactStateTreeState;

declare interface FGameplayTagContainerMatchCondition extends FStateTreeConditionCommonBase {
    MatchType: EGameplayContainerMatchType;
    bExactMatch: boolean;
    bInvert: boolean;
}
declare const FGameplayTagContainerMatchCondition: FGameplayTagContainerMatchCondition;

declare interface FGameplayTagContainerMatchConditionInstanceData {
    TagContainer: FGameplayTagContainer;
    OtherContainer: FGameplayTagContainer;
}
declare const FGameplayTagContainerMatchConditionInstanceData: FGameplayTagContainerMatchConditionInstanceData;

declare interface FGameplayTagMatchCondition extends FStateTreeConditionCommonBase {
    bExactMatch: boolean;
    bInvert: boolean;
}
declare const FGameplayTagMatchCondition: FGameplayTagMatchCondition;

declare interface FGameplayTagMatchConditionInstanceData {
    TagContainer: FGameplayTagContainer;
    Tag: FGameplayTag;
}
declare const FGameplayTagMatchConditionInstanceData: FGameplayTagMatchConditionInstanceData;

declare interface FGameplayTagQueryCondition extends FStateTreeConditionCommonBase {
    TagQuery: FGameplayTagQuery;
    bInvert: boolean;
}
declare const FGameplayTagQueryCondition: FGameplayTagQueryCondition;

declare interface FGameplayTagQueryConditionInstanceData {
    TagContainer: FGameplayTagContainer;
}
declare const FGameplayTagQueryConditionInstanceData: FGameplayTagQueryConditionInstanceData;

declare interface FRecordedStateTreeExecutionFrame {
    StateTree: UStateTree;
    RootState: FStateTreeStateHandle;
    ActiveStates: FStateTreeActiveStates;
    bIsGlobalFrame: boolean;
}
declare const FRecordedStateTreeExecutionFrame: FRecordedStateTreeExecutionFrame;

declare interface FRecordedStateTreeTransitionResult {
    NextActiveFrames: TArray<FRecordedStateTreeExecutionFrame>;
    NextActiveFrameEvents: TArray<FStateTreeEvent>;
    SourceState: FStateTreeStateHandle;
    TargetState: FStateTreeStateHandle;
    Priority: EStateTreeTransitionPriority;
    SourceStateTree: UStateTree;
    SourceRootState: FStateTreeStateHandle;
}
declare const FRecordedStateTreeTransitionResult: FRecordedStateTreeTransitionResult;

declare interface FStateTreeAbsoluteFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeAbsoluteFloatPropertyFunction: FStateTreeAbsoluteFloatPropertyFunction;

declare interface FStateTreeAbsoluteIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeAbsoluteIntPropertyFunction: FStateTreeAbsoluteIntPropertyFunction;

declare interface FStateTreeActiveStates {
    States: FStateTreeStateHandle;
    NumStates: uint8;
}
declare const FStateTreeActiveStates: FStateTreeActiveStates;

declare interface FStateTreeAddFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeAddFloatPropertyFunction: FStateTreeAddFloatPropertyFunction;

declare interface FStateTreeAddIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeAddIntPropertyFunction: FStateTreeAddIntPropertyFunction;

declare interface FStateTreeAnyEnum {
    Value: uint32;
    Enum: UEnum;
}
declare const FStateTreeAnyEnum: FStateTreeAnyEnum;

declare interface FStateTreeBindableStructDesc extends FPropertyBindingBindableStructDescriptor {
    DataHandle: FStateTreeDataHandle;
    DataSource: EStateTreeBindableStructSource;
}
declare const FStateTreeBindableStructDesc: FStateTreeBindableStructDesc;

declare interface FStateTreeBlueprintConditionWrapper extends FStateTreeConditionBase {
    ConditionClass: TSubclassOf<UStateTreeConditionBlueprintBase>;
}
declare const FStateTreeBlueprintConditionWrapper: FStateTreeBlueprintConditionWrapper;

declare interface FStateTreeBlueprintConsiderationWrapper extends FStateTreeConsiderationBase {
    ConsiderationClass: TSubclassOf<UStateTreeConsiderationBlueprintBase>;
}
declare const FStateTreeBlueprintConsiderationWrapper: FStateTreeBlueprintConsiderationWrapper;

declare interface FStateTreeBlueprintEvaluatorWrapper extends FStateTreeEvaluatorBase {
    EvaluatorClass: TSubclassOf<UStateTreeEvaluatorBlueprintBase>;
}
declare const FStateTreeBlueprintEvaluatorWrapper: FStateTreeBlueprintEvaluatorWrapper;

declare interface FStateTreeBlueprintPropertyRef extends FStateTreePropertyRef {
    RefType: EStateTreePropertyRefType;
    bIsRefToArray: boolean;
    bIsOptional: boolean;
    TypeObject: UObject;
}
declare const FStateTreeBlueprintPropertyRef: FStateTreeBlueprintPropertyRef;

declare interface FStateTreeBlueprintTaskWrapper extends FStateTreeTaskBase {
    TaskClass: TSubclassOf<UStateTreeTaskBlueprintBase>;
    TaskFlags: uint8;
}
declare const FStateTreeBlueprintTaskWrapper: FStateTreeBlueprintTaskWrapper;

declare interface FStateTreeBooleanAndPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeBooleanAndPropertyFunction: FStateTreeBooleanAndPropertyFunction;

declare interface FStateTreeBooleanNotOperationPropertyFunctionInstanceData {
    bInput: boolean;
    bResult: boolean;
}
declare const FStateTreeBooleanNotOperationPropertyFunctionInstanceData: FStateTreeBooleanNotOperationPropertyFunctionInstanceData;

declare interface FStateTreeBooleanNotPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeBooleanNotPropertyFunction: FStateTreeBooleanNotPropertyFunction;

declare interface FStateTreeBooleanOperationPropertyFunctionInstanceData {
    bLeft: boolean;
    bRight: boolean;
    bResult: boolean;
}
declare const FStateTreeBooleanOperationPropertyFunctionInstanceData: FStateTreeBooleanOperationPropertyFunctionInstanceData;

declare interface FStateTreeBooleanOrPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeBooleanOrPropertyFunction: FStateTreeBooleanOrPropertyFunction;

declare interface FStateTreeBooleanXOrPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeBooleanXOrPropertyFunction: FStateTreeBooleanXOrPropertyFunction;

declare interface FStateTreeCompareBoolCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}
declare const FStateTreeCompareBoolCondition: FStateTreeCompareBoolCondition;

declare interface FStateTreeCompareBoolConditionInstanceData {
    bLeft: boolean;
    bRight: boolean;
}
declare const FStateTreeCompareBoolConditionInstanceData: FStateTreeCompareBoolConditionInstanceData;

declare interface FStateTreeCompareDistanceCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
    Operator: EGenericAICheck;
}
declare const FStateTreeCompareDistanceCondition: FStateTreeCompareDistanceCondition;

declare interface FStateTreeCompareDistanceConditionInstanceData {
    Source: FVector;
    Target: FVector;
    Distance: number;
}
declare const FStateTreeCompareDistanceConditionInstanceData: FStateTreeCompareDistanceConditionInstanceData;

declare interface FStateTreeCompareEnumCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}
declare const FStateTreeCompareEnumCondition: FStateTreeCompareEnumCondition;

declare interface FStateTreeCompareEnumConditionInstanceData {
    Left: FStateTreeAnyEnum;
    Right: FStateTreeAnyEnum;
}
declare const FStateTreeCompareEnumConditionInstanceData: FStateTreeCompareEnumConditionInstanceData;

declare interface FStateTreeCompareFloatCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
    Operator: EGenericAICheck;
}
declare const FStateTreeCompareFloatCondition: FStateTreeCompareFloatCondition;

declare interface FStateTreeCompareFloatConditionInstanceData {
    Left: number;
    Right: number;
}
declare const FStateTreeCompareFloatConditionInstanceData: FStateTreeCompareFloatConditionInstanceData;

declare interface FStateTreeCompareIntCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
    Operator: EGenericAICheck;
}
declare const FStateTreeCompareIntCondition: FStateTreeCompareIntCondition;

declare interface FStateTreeCompareIntConditionInstanceData {
    Left: number;
    Right: number;
}
declare const FStateTreeCompareIntConditionInstanceData: FStateTreeCompareIntConditionInstanceData;

declare interface FStateTreeConditionBase extends FStateTreeNodeBase {
    Operand: EStateTreeExpressionOperand;
    DeltaIndent: int8;
    EvaluationMode: EStateTreeConditionEvaluationMode;
}
declare const FStateTreeConditionBase: FStateTreeConditionBase;

declare interface FStateTreeConditionCommonBase extends FStateTreeConditionBase {

}
declare const FStateTreeConditionCommonBase: FStateTreeConditionCommonBase;

declare interface FStateTreeConsiderationBase extends FStateTreeNodeBase {
    Operand: EStateTreeExpressionOperand;
    DeltaIndent: int8;
}
declare const FStateTreeConsiderationBase: FStateTreeConsiderationBase;

declare interface FStateTreeConsiderationCommonBase extends FStateTreeConsiderationBase {

}
declare const FStateTreeConsiderationCommonBase: FStateTreeConsiderationCommonBase;

declare interface FStateTreeConsiderationResponseCurve {
    CurveInfo: FRuntimeFloatCurve;
}
declare const FStateTreeConsiderationResponseCurve: FStateTreeConsiderationResponseCurve;

declare interface FStateTreeConstantConsideration extends FStateTreeConsiderationCommonBase {

}
declare const FStateTreeConstantConsideration: FStateTreeConstantConsideration;

declare interface FStateTreeConstantConsiderationInstanceData {
    Constant: number;
}
declare const FStateTreeConstantConsiderationInstanceData: FStateTreeConstantConsiderationInstanceData;

declare interface FStateTreeDataHandle {
    Source: EStateTreeDataSourceType;
    Index: uint16;
    StateHandle: FStateTreeStateHandle;
}
declare const FStateTreeDataHandle: FStateTreeDataHandle;

declare interface FStateTreeDebugTextTask extends FStateTreeTaskCommonBase {
    Text: FString;
    TextColor: FColor;
    FontScale: number;
    Offset: FVector;
    bEnabled: boolean;
}
declare const FStateTreeDebugTextTask: FStateTreeDebugTextTask;

declare interface FStateTreeDebugTextTaskInstanceData {
    ReferenceActor: AActor;
    BindableText: FString;
}
declare const FStateTreeDebugTextTaskInstanceData: FStateTreeDebugTextTaskInstanceData;

declare interface FStateTreeDelayTask extends FStateTreeTaskCommonBase {

}
declare const FStateTreeDelayTask: FStateTreeDelayTask;

declare interface FStateTreeDelayTaskInstanceData {
    duration: number;
    RandomDeviation: number;
    bRunForever: boolean;
}
declare const FStateTreeDelayTaskInstanceData: FStateTreeDelayTaskInstanceData;

declare interface FStateTreeDelegateDispatcher {
    ID: FGuid;
}
declare const FStateTreeDelegateDispatcher: FStateTreeDelegateDispatcher;

declare interface FStateTreeDelegateListener {
    Dispatcher: FStateTreeDelegateDispatcher;
    ID: number;
}
declare const FStateTreeDelegateListener: FStateTreeDelegateListener;

declare interface FStateTreeDivideFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeDivideFloatPropertyFunction: FStateTreeDivideFloatPropertyFunction;

declare interface FStateTreeDivideIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeDivideIntPropertyFunction: FStateTreeDivideIntPropertyFunction;

declare interface FStateTreeEditorPropertyPath {

}
declare const FStateTreeEditorPropertyPath: FStateTreeEditorPropertyPath;

declare interface FStateTreeEnumInputConsideration extends FStateTreeConsiderationCommonBase {
    EnumValueScorePairs: FStateTreeEnumValueScorePairs;
}
declare const FStateTreeEnumInputConsideration: FStateTreeEnumInputConsideration;

declare interface FStateTreeEnumInputConsiderationInstanceData {
    Input: FStateTreeAnyEnum;
}
declare const FStateTreeEnumInputConsiderationInstanceData: FStateTreeEnumInputConsiderationInstanceData;

declare interface FStateTreeEnumValueScorePair {
    EnumValue: int64;
    Score: number;
}
declare const FStateTreeEnumValueScorePair: FStateTreeEnumValueScorePair;

declare interface FStateTreeEnumValueScorePairs {
    Data: TArray<FStateTreeEnumValueScorePair>;
}
declare const FStateTreeEnumValueScorePairs: FStateTreeEnumValueScorePairs;

declare interface FStateTreeEvaluatorBase extends FStateTreeNodeBase {

}
declare const FStateTreeEvaluatorBase: FStateTreeEvaluatorBase;

declare interface FStateTreeEvaluatorCommonBase extends FStateTreeEvaluatorBase {

}
declare const FStateTreeEvaluatorCommonBase: FStateTreeEvaluatorCommonBase;

declare interface FStateTreeEvent {
    Tag: FGameplayTag;
    Payload: FInstancedStruct;
    Origin: FName;
}
declare const FStateTreeEvent: FStateTreeEvent;

declare interface FStateTreeEventQueue {
    SharedEvents: TArray<FStateTreeSharedEvent>;
}
declare const FStateTreeEventQueue: FStateTreeEventQueue;

declare interface FStateTreeExecutionExtension {

}
declare const FStateTreeExecutionExtension: FStateTreeExecutionExtension;

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
declare const FStateTreeExecutionFrame: FStateTreeExecutionFrame;

declare interface FStateTreeExecutionState {
    ActiveFrames: TArray<FStateTreeExecutionFrame>;
    DelayedTransitions: TArray<FStateTreeTransitionDelayedState>;
    RandomStream: FRandomStream;
    ExecutionExtension: FInstancedStruct;
    EnterStateFailedFrameIndex: FStateTreeIndex16;
    EnterStateFailedTaskIndex: FStateTreeIndex16;
    LastExitedNodeIndex: FStateTreeIndex16;
    LastTickStatus: EStateTreeRunStatus;
    TreeRunStatus: EStateTreeRunStatus;
    RequestedStop: EStateTreeRunStatus;
    CurrentPhase: EStateTreeUpdatePhase;
    StateChangeCount: uint16;
    bHasPendingCompletedState: boolean;
}
declare const FStateTreeExecutionState: FStateTreeExecutionState;

declare interface FStateTreeExternalDataDesc {
    Struct: UStruct;
    Name: FName;
    Handle: FStateTreeExternalDataHandle;
    Requirement: EStateTreeExternalDataRequirement;
}
declare const FStateTreeExternalDataDesc: FStateTreeExternalDataDesc;

declare interface FStateTreeExternalDataHandle {
    DataHandle: FStateTreeDataHandle;
}
declare const FStateTreeExternalDataHandle: FStateTreeExternalDataHandle;

declare interface FStateTreeFloatCombinaisonPropertyFunctionInstanceData {
    Left: number;
    Right: number;
    Result: number;
}
declare const FStateTreeFloatCombinaisonPropertyFunctionInstanceData: FStateTreeFloatCombinaisonPropertyFunctionInstanceData;

declare interface FStateTreeFloatInputConsideration extends FStateTreeConsiderationCommonBase {
    ResponseCurve: FStateTreeConsiderationResponseCurve;
}
declare const FStateTreeFloatInputConsideration: FStateTreeFloatInputConsideration;

declare interface FStateTreeFloatInputConsiderationInstanceData {
    Input: number;
    Interval: FFloatInterval;
}
declare const FStateTreeFloatInputConsiderationInstanceData: FStateTreeFloatInputConsiderationInstanceData;

declare interface FStateTreeIndex16 {
    Value: uint16;
}
declare const FStateTreeIndex16: FStateTreeIndex16;

declare interface FStateTreeIndex8 {
    Value: uint8;
}
declare const FStateTreeIndex8: FStateTreeIndex8;

declare interface FStateTreeInstanceData {

}
declare const FStateTreeInstanceData: FStateTreeInstanceData;

declare interface FStateTreeInstanceObjectWrapper {
    InstanceObject: UObject;
}
declare const FStateTreeInstanceObjectWrapper: FStateTreeInstanceObjectWrapper;

declare interface FStateTreeInstanceStorage {
    InstanceStructs: FInstancedStructContainer;
    ExecutionState: FStateTreeExecutionState;
    TemporaryInstances: TArray<FStateTreeTemporaryInstanceData>;
    TransitionRequests: TArray<FStateTreeTransitionRequest>;
    GlobalParameters: FInstancedPropertyBag;
    UniqueIdGenerator: uint32;
}
declare const FStateTreeInstanceStorage: FStateTreeInstanceStorage;

declare interface FStateTreeIntCombinaisonPropertyFunctionInstanceData {
    Left: number;
    Right: number;
    Result: number;
}
declare const FStateTreeIntCombinaisonPropertyFunctionInstanceData: FStateTreeIntCombinaisonPropertyFunctionInstanceData;

declare interface FStateTreeInvertFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeInvertFloatPropertyFunction: FStateTreeInvertFloatPropertyFunction;

declare interface FStateTreeInvertIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeInvertIntPropertyFunction: FStateTreeInvertIntPropertyFunction;

declare interface FStateTreeMakeIntervalPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeMakeIntervalPropertyFunction: FStateTreeMakeIntervalPropertyFunction;

declare interface FStateTreeMakeIntervalPropertyFunctionInstanceData {
    min: number;
    max: number;
    Result: FFloatInterval;
}
declare const FStateTreeMakeIntervalPropertyFunctionInstanceData: FStateTreeMakeIntervalPropertyFunctionInstanceData;

declare interface FStateTreeMultiplyFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeMultiplyFloatPropertyFunction: FStateTreeMultiplyFloatPropertyFunction;

declare interface FStateTreeMultiplyIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeMultiplyIntPropertyFunction: FStateTreeMultiplyIntPropertyFunction;

declare interface FStateTreeNodeBase {
    Name: FName;
    BindingsBatch: FStateTreeIndex16;
    InstanceTemplateIndex: FStateTreeIndex16;
    InstanceDataHandle: FStateTreeDataHandle;
}
declare const FStateTreeNodeBase: FStateTreeNodeBase;

declare interface FStateTreeNodeIdToIndex {
    ID: FGuid;
    Index: FStateTreeIndex16;
}
declare const FStateTreeNodeIdToIndex: FStateTreeNodeIdToIndex;

declare interface FStateTreeObjectEqualsCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}
declare const FStateTreeObjectEqualsCondition: FStateTreeObjectEqualsCondition;

declare interface FStateTreeObjectEqualsConditionInstanceData {
    Left: UObject;
    Right: UObject;
}
declare const FStateTreeObjectEqualsConditionInstanceData: FStateTreeObjectEqualsConditionInstanceData;

declare interface FStateTreeObjectIsChildOfClassCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}
declare const FStateTreeObjectIsChildOfClassCondition: FStateTreeObjectIsChildOfClassCondition;

declare interface FStateTreeObjectIsChildOfClassConditionInstanceData {
    Object: UObject;
    Class: UClass;
}
declare const FStateTreeObjectIsChildOfClassConditionInstanceData: FStateTreeObjectIsChildOfClassConditionInstanceData;

declare interface FStateTreeObjectIsValidCondition extends FStateTreeConditionCommonBase {
    bInvert: boolean;
}
declare const FStateTreeObjectIsValidCondition: FStateTreeObjectIsValidCondition;

declare interface FStateTreeObjectIsValidConditionInstanceData {
    Object: UObject;
}
declare const FStateTreeObjectIsValidConditionInstanceData: FStateTreeObjectIsValidConditionInstanceData;

declare interface FStateTreePropertyAccess {
    SourceIndirection: FPropertyBindingPropertyIndirection;
    SourceStructType: UStruct;
    SourceDataHandle: FStateTreeDataHandle;
}
declare const FStateTreePropertyAccess: FStateTreePropertyAccess;

declare interface FStateTreePropertyBindings extends FPropertyBindingBindingCollection {
    SourceStructs: TArray<FStateTreeBindableStructDesc>;
    PropertyPathBindings: TArray<FStateTreePropertyPathBinding>;
    PropertyReferencePaths: TArray<FStateTreePropertyRefPath>;
    PropertyAccesses: TArray<FStateTreePropertyAccess>;
}
declare const FStateTreePropertyBindings: FStateTreePropertyBindings;

declare interface FStateTreePropertyFunctionBase extends FStateTreeNodeBase {

}
declare const FStateTreePropertyFunctionBase: FStateTreePropertyFunctionBase;

declare interface FStateTreePropertyFunctionCommonBase extends FStateTreePropertyFunctionBase {

}
declare const FStateTreePropertyFunctionCommonBase: FStateTreePropertyFunctionCommonBase;

declare interface FStateTreePropertyPathBinding extends FPropertyBindingBinding {
    SourceDataHandle: FStateTreeDataHandle;
}
declare const FStateTreePropertyPathBinding: FStateTreePropertyPathBinding;

declare interface FStateTreePropertyRef {
    RefAccessIndex: FStateTreeIndex16;
}
declare const FStateTreePropertyRef: FStateTreePropertyRef;

declare interface FStateTreePropertyRefPath {
    SourcePropertyPath: FPropertyBindingPath;
    SourceDataHandle: FStateTreeDataHandle;
}
declare const FStateTreePropertyRefPath: FStateTreePropertyRefPath;

declare interface FStateTreeRandomCondition extends FStateTreeConditionCommonBase {

}
declare const FStateTreeRandomCondition: FStateTreeRandomCondition;

declare interface FStateTreeRandomConditionInstanceData {
    Threshold: number;
}
declare const FStateTreeRandomConditionInstanceData: FStateTreeRandomConditionInstanceData;

declare interface FStateTreeRandomTimeDuration {
    duration: uint16;
    RandomVariance: uint16;
}
declare const FStateTreeRandomTimeDuration: FStateTreeRandomTimeDuration;

declare interface FStateTreeReference {
    StateTree: UStateTree;
    Parameters: FInstancedPropertyBag;
    PropertyOverrides: TArray<FGuid>;
}
declare const FStateTreeReference: FStateTreeReference;

declare interface FStateTreeReferenceOverrideItem {
    StateTag: FGameplayTag;
    StateTreeReference: FStateTreeReference;
}
declare const FStateTreeReferenceOverrideItem: FStateTreeReferenceOverrideItem;

declare interface FStateTreeReferenceOverrides {
    OverrideItems: TArray<FStateTreeReferenceOverrideItem>;
}
declare const FStateTreeReferenceOverrides: FStateTreeReferenceOverrides;

declare interface FStateTreeRunParallelStateTreeExecutionExtension extends FStateTreeExecutionExtension {

}
declare const FStateTreeRunParallelStateTreeExecutionExtension: FStateTreeRunParallelStateTreeExecutionExtension;

declare interface FStateTreeRunParallelStateTreeTask extends FStateTreeTaskCommonBase {
    StateTreeOverrideTag: FGameplayTag;
}
declare const FStateTreeRunParallelStateTreeTask: FStateTreeRunParallelStateTreeTask;

declare interface FStateTreeRunParallelStateTreeTaskInstanceData {
    StateTree: FStateTreeReference;
    TreeInstanceData: FStateTreeInstanceData;
    RunningStateTree: UStateTree;
}
declare const FStateTreeRunParallelStateTreeTaskInstanceData: FStateTreeRunParallelStateTreeTaskInstanceData;

declare interface FStateTreeScheduledTick {
    NextDeltaTime: number;
}
declare const FStateTreeScheduledTick: FStateTreeScheduledTick;

declare interface FStateTreeSharedEvent {

}
declare const FStateTreeSharedEvent: FStateTreeSharedEvent;

declare interface FStateTreeSingleFloatPropertyFunctionInstanceData {
    Input: number;
    Result: number;
}
declare const FStateTreeSingleFloatPropertyFunctionInstanceData: FStateTreeSingleFloatPropertyFunctionInstanceData;

declare interface FStateTreeSingleIntPropertyFunctionInstanceData {
    Input: number;
    Result: number;
}
declare const FStateTreeSingleIntPropertyFunctionInstanceData: FStateTreeSingleIntPropertyFunctionInstanceData;

declare interface FStateTreeStateHandle {
    Index: uint16;
}
declare const FStateTreeStateHandle: FStateTreeStateHandle;

declare interface FStateTreeStateIdToHandle {
    ID: FGuid;
    Handle: FStateTreeStateHandle;
}
declare const FStateTreeStateIdToHandle: FStateTreeStateIdToHandle;

declare interface FStateTreeStateLink {
    StateHandle: FStateTreeStateHandle;
    Fallback: EStateTreeSelectionFallback;
}
declare const FStateTreeStateLink: FStateTreeStateLink;

declare interface FStateTreeStructRef {

}
declare const FStateTreeStructRef: FStateTreeStructRef;

declare interface FStateTreeSubtractFloatPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeSubtractFloatPropertyFunction: FStateTreeSubtractFloatPropertyFunction;

declare interface FStateTreeSubtractIntPropertyFunction extends FStateTreePropertyFunctionCommonBase {

}
declare const FStateTreeSubtractIntPropertyFunction: FStateTreeSubtractIntPropertyFunction;

declare interface FStateTreeTaskBase extends FStateTreeNodeBase {
    bTaskEnabled: boolean;
    TransitionHandlingPriority: EStateTreeTransitionPriority;
}
declare const FStateTreeTaskBase: FStateTreeTaskBase;

declare interface FStateTreeTaskCommonBase extends FStateTreeTaskBase {

}
declare const FStateTreeTaskCommonBase: FStateTreeTaskCommonBase;

declare interface FStateTreeTasksCompletionStatus {

}
declare const FStateTreeTasksCompletionStatus: FStateTreeTasksCompletionStatus;

declare interface FStateTreeTemporaryInstanceData {
    DataHandle: FStateTreeDataHandle;
    OwnerNodeIndex: FStateTreeIndex16;
    instance: FInstancedStruct;
}
declare const FStateTreeTemporaryInstanceData: FStateTreeTemporaryInstanceData;

declare interface FStateTreeTransitionDelayedState {
    StateTree: UStateTree;
    CapturedEvent: FStateTreeSharedEvent;
    TimeLeft: number;
    CapturedEventHash: uint32;
    StateHandle: FStateTreeStateHandle;
    TransitionIndex: FStateTreeIndex16;
}
declare const FStateTreeTransitionDelayedState: FStateTreeTransitionDelayedState;

declare interface FStateTreeTransitionIdToIndex {
    ID: FGuid;
    Index: FStateTreeIndex16;
}
declare const FStateTreeTransitionIdToIndex: FStateTreeTransitionIdToIndex;

declare interface FStateTreeTransitionRequest {
    TargetState: FStateTreeStateHandle;
    Priority: EStateTreeTransitionPriority;
    Fallback: EStateTreeSelectionFallback;
}
declare const FStateTreeTransitionRequest: FStateTreeTransitionRequest;

declare interface FStateTreeTransitionResult {
    NextActiveFrames: TArray<FStateTreeExecutionFrame>;
    SourceState: FStateTreeStateHandle;
    TargetState: FStateTreeStateHandle;
    CurrentState: FStateTreeStateHandle;
    CurrentRunStatus: EStateTreeRunStatus;
    ChangeType: EStateTreeStateChangeType;
    Priority: EStateTreeTransitionPriority;
    SourceStateTree: UStateTree;
    SourceRootState: FStateTreeStateHandle;
}
declare const FStateTreeTransitionResult: FStateTreeTransitionResult;

declare interface FStateTreeTransitionSource {

}
declare const FStateTreeTransitionSource: FStateTreeTransitionSource;

declare interface IStateTreeSchemaProvider extends IInterface {

}
declare const IStateTreeSchemaProvider: IStateTreeSchemaProvider;

declare interface UStateTree extends UDataAsset {
    LastCompiledEditorDataHash: uint32;
    Schema: UStateTreeSchema;
    Frames: TArray<FCompactStateTreeFrame>;
    States: TArray<FCompactStateTreeState>;
    Transitions: TArray<FCompactStateTransition>;
    Nodes: FInstancedStructContainer;
    DefaultInstanceData: FStateTreeInstanceData;
    SharedInstanceData: FStateTreeInstanceData;
    ContextDataDescs: TArray<FStateTreeExternalDataDesc>;
    PropertyBindings: FStateTreePropertyBindings;
    IDToStateMappings: TArray<FStateTreeStateIdToHandle>;
    IDToNodeMappings: TArray<FStateTreeNodeIdToIndex>;
    IDToTransitionMappings: TArray<FStateTreeTransitionIdToIndex>;
    Parameters: FInstancedPropertyBag;
    ExternalDataDescs: TArray<FStateTreeExternalDataDesc>;
    CompletionGlobalTasksMask: uint32;
    NumContextData: uint16;
    NumGlobalInstanceData: uint16;
    EvaluatorsBegin: uint16;
    EvaluatorsNum: uint16;
    GlobalTasksBegin: uint16;
    GlobalTasksNum: uint16;
    CompletionGlobalTasksControl: EStateTreeTaskCompletionType;
    ParameterDataType: EStateTreeParameterDataType;
    bHasGlobalTransitionTasks: boolean;
}
declare const UStateTree: UStateTree;

declare interface UStateTreeConditionBlueprintBase extends UStateTreeNodeBlueprintBase {
    ReceiveTestCondition(): boolean;
}
declare const UStateTreeConditionBlueprintBase: UStateTreeConditionBlueprintBase;

declare interface UStateTreeConsiderationBlueprintBase extends UStateTreeNodeBlueprintBase {
    ReceiveGetScore(): number;
}
declare const UStateTreeConsiderationBlueprintBase: UStateTreeConsiderationBlueprintBase;

declare interface UStateTreeEvaluatorBlueprintBase extends UStateTreeNodeBlueprintBase {
    ReceiveTreeStop(): void;
    ReceiveTreeStart(): void;
    ReceiveTick(DeltaTime: number): void;
}
declare const UStateTreeEvaluatorBlueprintBase: UStateTreeEvaluatorBlueprintBase;

declare interface UStateTreeFunctionLibrary extends UBlueprintFunctionLibrary {
    SetStateTree(Reference: FStateTreeReference, StateTree: UStateTree): void;
    MakeStateTreeReference(StateTree: UStateTree): FStateTreeReference;
    K2_SetParametersProperty(Reference: FStateTreeReference, PropertyID: FGuid, NewValue: number): void;
    K2_GetParametersProperty(Reference: FStateTreeReference, PropertyID: FGuid, ReturnValue: number): void;
}
declare const UStateTreeFunctionLibrary: UStateTreeFunctionLibrary;

declare interface UStateTreeNodeBlueprintBase extends UObject {
    SendEvent(Event: FStateTreeEvent): void;
    RequestTransition(TargetState: FStateTreeStateLink, Priority: EStateTreeTransitionPriority): void;
    ReceiveGetDescription(Formatting: EStateTreeNodeFormatting): FText;
    IsPropertyRefValid(PropertyRef: FStateTreeBlueprintPropertyRef): boolean;
    GetPropertyReference(PropertyRef: FStateTreeBlueprintPropertyRef): void;
    GetPropertyDescriptionByPropertyName(PropertyName: FName): FText;
}
declare const UStateTreeNodeBlueprintBase: UStateTreeNodeBlueprintBase;

declare interface UStateTreeSchema extends UObject {

}
declare const UStateTreeSchema: UStateTreeSchema;

declare interface UStateTreeSettings extends UDeveloperSettings {
    bAutoStartDebuggerTracesOnNonEditorTargets: boolean;
}
declare const UStateTreeSettings: UStateTreeSettings;

declare interface UStateTreeTaskBlueprintBase extends UStateTreeNodeBlueprintBase {
    bShouldStateChangeOnReselect: boolean;
    bShouldCallTickOnlyOnEvents: boolean;
    bShouldCopyBoundPropertiesOnTick: boolean;
    bShouldCopyBoundPropertiesOnExitState: boolean;
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
}
declare const UStateTreeTaskBlueprintBase: UStateTreeTaskBlueprintBase;

