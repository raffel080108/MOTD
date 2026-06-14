declare interface UABP_FalconDrone_C extends UAbilityDroneAnimInstance {
    AnimBlueprintClassConstantData: {
        __NameProperty_20: FName;
        __FloatProperty_21: number;
        __BoolProperty_22: boolean;
        __FloatProperty_23: number;
        __EnumProperty_24: EAnimSyncMethod;
        __BoolProperty_25: boolean;
        __ByteProperty_26: EAnimGroupRole;
        __NameProperty_27: FName;
        __NameProperty_28: FName;
        __NameProperty_29: FName;
        __IntProperty_30: number;
        __StructProperty_31: FAnimNodeFunctionRef;
        AnimBlueprintExtension_PropertyAccess: FAnimSubsystem_PropertyAccess;
        AnimBlueprintExtension_Base: FAnimSubsystem_Base;
        AnimGraphNode_Root: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_BlendSpacePlayer: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_StateResult: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_StateMachine: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_Slot: FAnimNodeExposedValueHandler_PropertyAccess;
    };
    __AnimBlueprintMutables: {
        __FloatProperty: number;
        __FloatProperty_0: number;
    };
    AnimBlueprintExtension_PropertyAccess: FAnimSubsystemInstance;
    AnimBlueprintExtension_Base: FAnimSubsystemInstance;
    AnimGraphNode_Root: FAnimNode_Root;
    AnimGraphNode_BlendSpacePlayer: FAnimNode_BlendSpacePlayer;
    AnimGraphNode_StateResult: FAnimNode_StateResult;
    AnimGraphNode_StateMachine: FAnimNode_StateMachine;
    AnimGraphNode_Slot: FAnimNode_Slot;
    AnimGraph(AnimGraph: FPoseLink): void;
}
declare const UABP_FalconDrone_C: UABP_FalconDrone_C;

