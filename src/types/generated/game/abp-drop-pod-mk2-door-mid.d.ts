declare interface UABP_DropPodMK2_DoorMid_C extends UAnimInstance {
    AnimBlueprintClassConstantData: {
        __NameProperty_47: FName;
        __NameProperty_48: FName;
        __IntProperty_49: number;
        __FloatProperty_50: number;
        __StructProperty_51: FInputScaleBiasClampConstants;
        __FloatProperty_52: number;
        __EnumProperty_53: EAnimSyncMethod;
        __BoolProperty_54: boolean;
        __ByteProperty_55: EAnimGroupRole;
        __NameProperty_56: FName;
        __NameProperty_57: FName;
        __NameProperty_58: FName;
        __IntProperty_59: number;
        __StructProperty_60: FAnimNodeFunctionRef;
        AnimBlueprintExtension_PropertyAccess: FAnimSubsystem_PropertyAccess;
        AnimBlueprintExtension_Base: FAnimSubsystem_Base;
        AnimGraphNode_Root: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_TransitionResult_1: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_TransitionResult: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_SequencePlayer_1: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_StateResult_1: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_SequencePlayer: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_StateResult: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_StateMachine: FAnimNodeExposedValueHandler_PropertyAccess;
    };
    UberGraphFrame: FPointerToUberGraphFrame;
    AnimBlueprintExtension_PropertyAccess: FAnimSubsystemInstance;
    AnimBlueprintExtension_Base: FAnimSubsystemInstance;
    AnimGraphNode_Root: FAnimNode_Root;
    AnimGraphNode_TransitionResult_1: FAnimNode_TransitionResult;
    AnimGraphNode_TransitionResult: FAnimNode_TransitionResult;
    AnimGraphNode_SequencePlayer_1: FAnimNode_SequencePlayer;
    AnimGraphNode_StateResult_1: FAnimNode_StateResult;
    AnimGraphNode_SequencePlayer: FAnimNode_SequencePlayer;
    AnimGraphNode_StateResult: FAnimNode_StateResult;
    AnimGraphNode_StateMachine: FAnimNode_StateMachine;
    DropPod: ABP_EliteDropPod_Base_C;
    MidOpen: boolean;
    AnimGraph(AnimGraph: FPoseLink): void;
    BlueprintInitializeAnimation(): void;
    BlueprintUpdateAnimation(DeltaTimeX: number): void;
    ExecuteUbergraph_ABP_DropPodMK2_DoorMid(EntryPoint: number): void;
}
declare const UABP_DropPodMK2_DoorMid_C: UABP_DropPodMK2_DoorMid_C;

