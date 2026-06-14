declare interface UABP_RC_Beard_Rig_A_C extends UVanityAnimInstance {
    AnimBlueprintClassConstantData: {
        __NameProperty_13: FName;
        __NameProperty_14: FName;
        __StructProperty_15: FAnimNodeFunctionRef;
        AnimBlueprintExtension_PropertyAccess: FAnimSubsystem_PropertyAccess;
        AnimBlueprintExtension_Base: FAnimSubsystem_Base;
        AnimGraphNode_Root: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_CopyPoseFromMesh: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_RigidBody: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_LocalToComponentSpace: FAnimNodeExposedValueHandler_PropertyAccess;
        AnimGraphNode_ComponentToLocalSpace: FAnimNodeExposedValueHandler_PropertyAccess;
    };
    AnimBlueprintExtension_PropertyAccess: FAnimSubsystemInstance;
    AnimBlueprintExtension_Base: FAnimSubsystemInstance;
    AnimGraphNode_Root: FAnimNode_Root;
    AnimGraphNode_CopyPoseFromMesh: FAnimNode_CopyPoseFromMesh;
    AnimGraphNode_RigidBody: FAnimNode_RigidBody;
    AnimGraphNode_LocalToComponentSpace: FAnimNode_ConvertLocalToComponentSpace;
    AnimGraphNode_ComponentToLocalSpace: FAnimNode_ConvertComponentToLocalSpace;
    AnimGraph(AnimGraph: FPoseLink): void;
}
declare const UABP_RC_Beard_Rig_A_C: UABP_RC_Beard_Rig_A_C;

