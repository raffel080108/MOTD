declare interface UABP_Omega_Bartender_Hand_C extends UAnimInstance {
    AnimBlueprintClassConstantData: {
        __NameProperty_22: FName;
        __FloatProperty_23: number;
        __StructProperty_24: FInputScaleBiasClampConstants;
        __FloatProperty_25: number;
        __EnumProperty_26: EAnimSyncMethod;
        __BoolProperty_27: boolean;
        __ByteProperty_28: EAnimGroupRole;
        __NameProperty_29: FName;
        __NameProperty_30: FName;
        __NameProperty_31: FName;
        __IntProperty_32: number;
        __StructProperty_33: FAnimNodeFunctionRef;
        AnimBlueprintExtension_PropertyAccess: FAnimSubsystem_PropertyAccess;
        AnimBlueprintExtension_Base: FAnimSubsystem_Base;
        AnimGraphNode_Root: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_SequencePlayer: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_StateResult: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_StateMachine: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_Slot: FAnimNodeExposedValueHandler_PropertyAccess;
    };
    AnimBlueprintExtension_PropertyAccess: FAnimSubsystemInstance;
    AnimBlueprintExtension_Base: FAnimSubsystemInstance;
    AnimGraphNode_Root: FAnimNode_Root;
    AnimGraphNode_SequencePlayer: FAnimNode_SequencePlayer;
    AnimGraphNode_StateResult: FAnimNode_StateResult;
    AnimGraphNode_StateMachine: FAnimNode_StateMachine;
    AnimGraphNode_Slot: FAnimNode_Slot;
    AnimGraph(AnimGraph: FPoseLink): void;
}
declare const UABP_Omega_Bartender_Hand_C: UABP_Omega_Bartender_Hand_C;

