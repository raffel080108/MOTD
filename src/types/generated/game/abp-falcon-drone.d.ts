declare interface UABP_FalconDrone_C extends UAbilityDroneAnimInstance {
    readonly __static_UABP_FalconDrone_C: {
        AnimGraph(AnimGraph: FPoseLink): void;
    };
    readonly __properties_UABP_FalconDrone_C: {
        AnimBlueprintClassConstantData: {
        __NameProperty_20: string;
        __FloatProperty_21: number;
        __BoolProperty_22: boolean;
        __FloatProperty_23: number;
        __EnumProperty_24: EAnimSyncMethod;
        __BoolProperty_25: boolean;
        __ByteProperty_26: EAnimGroupRole;
        __NameProperty_27: string;
        __NameProperty_28: string;
        __NameProperty_29: string;
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
    };
    readonly __staticRegistry: 
        UABP_FalconDrone_C['__static_UABP_FalconDrone_C'] &
        UAbilityDroneAnimInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UABP_FalconDrone_C['__properties_UABP_FalconDrone_C'] &
        UAbilityDroneAnimInstance['__propertyRegistry'];
}

