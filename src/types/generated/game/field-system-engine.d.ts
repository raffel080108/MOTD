declare interface AFieldSystemActor extends AActor {
    readonly __properties_AFieldSystemActor: {
        FieldSystemComponent: UFieldSystemComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AFieldSystemActor['__properties_AFieldSystemActor'] &
        AActor['__propertyRegistry'];
}

declare interface FFieldObjectCommands {
    TargetNames: string[];
    RootNodes: UFieldNodeBase[];
    MetaDatas: UFieldSystemMetaData[];
}

declare interface UBoxFalloff extends UFieldNodeFloat {
    readonly __static_UBoxFalloff: {
        SetBoxFalloff(Magnitude: number, MinRange: number, MaxRange: number, Default: number, Transform: FTransform, Falloff: EFieldFalloffType): UBoxFalloff;
    };
    readonly __properties_UBoxFalloff: {
        Magnitude: number;
        MinRange: number;
        MaxRange: number;
        Default: number;
        Transform: FTransform;
        Falloff: EFieldFalloffType;
    };
    readonly __staticRegistry: 
        UBoxFalloff['__static_UBoxFalloff'] &
        UFieldNodeFloat['__staticRegistry'];
    readonly __propertyRegistry: 
        UBoxFalloff['__properties_UBoxFalloff'] &
        UFieldNodeFloat['__propertyRegistry'];
}

declare interface UCullingField extends UFieldNodeBase {
    readonly __static_UCullingField: {
        SetCullingField(Culling: UFieldNodeBase, Field: UFieldNodeBase, Operation: EFieldCullingOperationType): UCullingField;
    };
    readonly __properties_UCullingField: {
        Culling: UFieldNodeBase;
        Field: UFieldNodeBase;
        Operation: EFieldCullingOperationType;
    };
    readonly __staticRegistry: 
        UCullingField['__static_UCullingField'] &
        UFieldNodeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCullingField['__properties_UCullingField'] &
        UFieldNodeBase['__propertyRegistry'];
}

declare interface UFieldNodeBase extends UActorComponent {
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UActorComponent['__propertyRegistry'];
}

declare interface UFieldNodeFloat extends UFieldNodeBase {
    readonly __staticRegistry: 
        UFieldNodeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldNodeBase['__propertyRegistry'];
}

declare interface UFieldNodeInt extends UFieldNodeBase {
    readonly __staticRegistry: 
        UFieldNodeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldNodeBase['__propertyRegistry'];
}

declare interface UFieldNodeVector extends UFieldNodeBase {
    readonly __staticRegistry: 
        UFieldNodeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldNodeBase['__propertyRegistry'];
}

declare interface UFieldSystem extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UFieldSystemComponent extends UPrimitiveComponent {
    readonly __static_UFieldSystemComponent: {
        ResetFieldSystem(): void;
        RemovePersistentFields(): void;
        ApplyUniformVectorFalloffForce(Enabled: boolean, position: FVector, Direction: FVector, Radius: number, Magnitude: number): void;
        ApplyStrainField(Enabled: boolean, position: FVector, Radius: number, Magnitude: number, Iterations: number): void;
        ApplyStayDynamicField(Enabled: boolean, position: FVector, Radius: number): void;
        ApplyRadialVectorFalloffForce(Enabled: boolean, position: FVector, Radius: number, Magnitude: number): void;
        ApplyRadialForce(Enabled: boolean, position: FVector, Magnitude: number): void;
        ApplyPhysicsField(Enabled: boolean, Target: EFieldPhysicsType, MetaData: UFieldSystemMetaData, Field: UFieldNodeBase): void;
        ApplyLinearForce(Enabled: boolean, Direction: FVector, Magnitude: number): void;
        AddPersistentField(Enabled: boolean, Target: EFieldPhysicsType, MetaData: UFieldSystemMetaData, Field: UFieldNodeBase): void;
        AddFieldCommand(Enabled: boolean, Target: EFieldPhysicsType, MetaData: UFieldSystemMetaData, Field: UFieldNodeBase): void;
    };
    readonly __properties_UFieldSystemComponent: {
        FieldSystem: UFieldSystem;
        bIsWorldField: boolean;
        bIsChaosField: boolean;
        SupportedSolvers: TSoftObjectPtr<AChaosSolverActor>[];
        ConstructionCommands: FFieldObjectCommands;
        BufferCommands: FFieldObjectCommands;
    };
    readonly __staticRegistry: 
        UFieldSystemComponent['__static_UFieldSystemComponent'] &
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldSystemComponent['__properties_UFieldSystemComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface UFieldSystemMetaData extends UActorComponent {
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UActorComponent['__propertyRegistry'];
}

declare interface UFieldSystemMetaDataFilter extends UFieldSystemMetaData {
    readonly __static_UFieldSystemMetaDataFilter: {
        SetMetaDataFilterType(FilterType: EFieldFilterType, ObjectType: EFieldObjectType, PositionType: EFieldPositionType): UFieldSystemMetaDataFilter;
    };
    readonly __properties_UFieldSystemMetaDataFilter: {
        FilterType: EFieldFilterType;
        ObjectType: EFieldObjectType;
        PositionType: EFieldPositionType;
    };
    readonly __staticRegistry: 
        UFieldSystemMetaDataFilter['__static_UFieldSystemMetaDataFilter'] &
        UFieldSystemMetaData['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldSystemMetaDataFilter['__properties_UFieldSystemMetaDataFilter'] &
        UFieldSystemMetaData['__propertyRegistry'];
}

declare interface UFieldSystemMetaDataIteration extends UFieldSystemMetaData {
    readonly __static_UFieldSystemMetaDataIteration: {
        SetMetaDataIteration(Iterations: number): UFieldSystemMetaDataIteration;
    };
    readonly __properties_UFieldSystemMetaDataIteration: {
        Iterations: number;
    };
    readonly __staticRegistry: 
        UFieldSystemMetaDataIteration['__static_UFieldSystemMetaDataIteration'] &
        UFieldSystemMetaData['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldSystemMetaDataIteration['__properties_UFieldSystemMetaDataIteration'] &
        UFieldSystemMetaData['__propertyRegistry'];
}

declare interface UFieldSystemMetaDataProcessingResolution extends UFieldSystemMetaData {
    readonly __static_UFieldSystemMetaDataProcessingResolution: {
        SetMetaDataaProcessingResolutionType(ResolutionType: EFieldResolutionType): UFieldSystemMetaDataProcessingResolution;
    };
    readonly __properties_UFieldSystemMetaDataProcessingResolution: {
        ResolutionType: EFieldResolutionType;
    };
    readonly __staticRegistry: 
        UFieldSystemMetaDataProcessingResolution['__static_UFieldSystemMetaDataProcessingResolution'] &
        UFieldSystemMetaData['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldSystemMetaDataProcessingResolution['__properties_UFieldSystemMetaDataProcessingResolution'] &
        UFieldSystemMetaData['__propertyRegistry'];
}

declare interface UNoiseField extends UFieldNodeFloat {
    readonly __static_UNoiseField: {
        SetNoiseField(MinRange: number, MaxRange: number, Transform: FTransform): UNoiseField;
    };
    readonly __properties_UNoiseField: {
        MinRange: number;
        MaxRange: number;
        Transform: FTransform;
    };
    readonly __staticRegistry: 
        UNoiseField['__static_UNoiseField'] &
        UFieldNodeFloat['__staticRegistry'];
    readonly __propertyRegistry: 
        UNoiseField['__properties_UNoiseField'] &
        UFieldNodeFloat['__propertyRegistry'];
}

declare interface UOperatorField extends UFieldNodeBase {
    readonly __static_UOperatorField: {
        SetOperatorField(Magnitude: number, LeftField: UFieldNodeBase, RightField: UFieldNodeBase, Operation: EFieldOperationType): UOperatorField;
    };
    readonly __properties_UOperatorField: {
        Magnitude: number;
        RightField: UFieldNodeBase;
        LeftField: UFieldNodeBase;
        Operation: EFieldOperationType;
    };
    readonly __staticRegistry: 
        UOperatorField['__static_UOperatorField'] &
        UFieldNodeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UOperatorField['__properties_UOperatorField'] &
        UFieldNodeBase['__propertyRegistry'];
}

declare interface UPlaneFalloff extends UFieldNodeFloat {
    readonly __static_UPlaneFalloff: {
        SetPlaneFalloff(Magnitude: number, MinRange: number, MaxRange: number, Default: number, Distance: number, position: FVector, Normal: FVector, Falloff: EFieldFalloffType): UPlaneFalloff;
    };
    readonly __properties_UPlaneFalloff: {
        Magnitude: number;
        MinRange: number;
        MaxRange: number;
        Default: number;
        Distance: number;
        position: FVector;
        Normal: FVector;
        Falloff: EFieldFalloffType;
    };
    readonly __staticRegistry: 
        UPlaneFalloff['__static_UPlaneFalloff'] &
        UFieldNodeFloat['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlaneFalloff['__properties_UPlaneFalloff'] &
        UFieldNodeFloat['__propertyRegistry'];
}

declare interface URadialFalloff extends UFieldNodeFloat {
    readonly __static_URadialFalloff: {
        SetRadialFalloff(Magnitude: number, MinRange: number, MaxRange: number, Default: number, Radius: number, position: FVector, Falloff: EFieldFalloffType): URadialFalloff;
    };
    readonly __properties_URadialFalloff: {
        Magnitude: number;
        MinRange: number;
        MaxRange: number;
        Default: number;
        Radius: number;
        position: FVector;
        Falloff: EFieldFalloffType;
    };
    readonly __staticRegistry: 
        URadialFalloff['__static_URadialFalloff'] &
        UFieldNodeFloat['__staticRegistry'];
    readonly __propertyRegistry: 
        URadialFalloff['__properties_URadialFalloff'] &
        UFieldNodeFloat['__propertyRegistry'];
}

declare interface URadialIntMask extends UFieldNodeInt {
    readonly __static_URadialIntMask: {
        SetRadialIntMask(Radius: number, position: FVector, InteriorValue: number, ExteriorValue: number, SetMaskConditionIn: ESetMaskConditionType): URadialIntMask;
    };
    readonly __properties_URadialIntMask: {
        Radius: number;
        position: FVector;
        InteriorValue: number;
        ExteriorValue: number;
        SetMaskCondition: ESetMaskConditionType;
    };
    readonly __staticRegistry: 
        URadialIntMask['__static_URadialIntMask'] &
        UFieldNodeInt['__staticRegistry'];
    readonly __propertyRegistry: 
        URadialIntMask['__properties_URadialIntMask'] &
        UFieldNodeInt['__propertyRegistry'];
}

declare interface URadialVector extends UFieldNodeVector {
    readonly __static_URadialVector: {
        SetRadialVector(Magnitude: number, position: FVector): URadialVector;
    };
    readonly __properties_URadialVector: {
        Magnitude: number;
        position: FVector;
    };
    readonly __staticRegistry: 
        URadialVector['__static_URadialVector'] &
        UFieldNodeVector['__staticRegistry'];
    readonly __propertyRegistry: 
        URadialVector['__properties_URadialVector'] &
        UFieldNodeVector['__propertyRegistry'];
}

declare interface URandomVector extends UFieldNodeVector {
    readonly __static_URandomVector: {
        SetRandomVector(Magnitude: number): URandomVector;
    };
    readonly __properties_URandomVector: {
        Magnitude: number;
    };
    readonly __staticRegistry: 
        URandomVector['__static_URandomVector'] &
        UFieldNodeVector['__staticRegistry'];
    readonly __propertyRegistry: 
        URandomVector['__properties_URandomVector'] &
        UFieldNodeVector['__propertyRegistry'];
}

declare interface UReturnResultsTerminal extends UFieldNodeBase {
    readonly __static_UReturnResultsTerminal: {
        SetReturnResultsTerminal(): UReturnResultsTerminal;
    };
    readonly __staticRegistry: 
        UReturnResultsTerminal['__static_UReturnResultsTerminal'] &
        UFieldNodeBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldNodeBase['__propertyRegistry'];
}

declare interface UToFloatField extends UFieldNodeFloat {
    readonly __static_UToFloatField: {
        SetToFloatField(IntegerField: UFieldNodeInt): UToFloatField;
    };
    readonly __properties_UToFloatField: {
        IntField: UFieldNodeInt;
    };
    readonly __staticRegistry: 
        UToFloatField['__static_UToFloatField'] &
        UFieldNodeFloat['__staticRegistry'];
    readonly __propertyRegistry: 
        UToFloatField['__properties_UToFloatField'] &
        UFieldNodeFloat['__propertyRegistry'];
}

declare interface UToIntegerField extends UFieldNodeInt {
    readonly __static_UToIntegerField: {
        SetToIntegerField(FloatField: UFieldNodeFloat): UToIntegerField;
    };
    readonly __properties_UToIntegerField: {
        FloatField: UFieldNodeFloat;
    };
    readonly __staticRegistry: 
        UToIntegerField['__static_UToIntegerField'] &
        UFieldNodeInt['__staticRegistry'];
    readonly __propertyRegistry: 
        UToIntegerField['__properties_UToIntegerField'] &
        UFieldNodeInt['__propertyRegistry'];
}

declare interface UUniformInteger extends UFieldNodeInt {
    readonly __static_UUniformInteger: {
        SetUniformInteger(Magnitude: number): UUniformInteger;
    };
    readonly __properties_UUniformInteger: {
        Magnitude: number;
    };
    readonly __staticRegistry: 
        UUniformInteger['__static_UUniformInteger'] &
        UFieldNodeInt['__staticRegistry'];
    readonly __propertyRegistry: 
        UUniformInteger['__properties_UUniformInteger'] &
        UFieldNodeInt['__propertyRegistry'];
}

declare interface UUniformScalar extends UFieldNodeFloat {
    readonly __static_UUniformScalar: {
        SetUniformScalar(Magnitude: number): UUniformScalar;
    };
    readonly __properties_UUniformScalar: {
        Magnitude: number;
    };
    readonly __staticRegistry: 
        UUniformScalar['__static_UUniformScalar'] &
        UFieldNodeFloat['__staticRegistry'];
    readonly __propertyRegistry: 
        UUniformScalar['__properties_UUniformScalar'] &
        UFieldNodeFloat['__propertyRegistry'];
}

declare interface UUniformVector extends UFieldNodeVector {
    readonly __static_UUniformVector: {
        SetUniformVector(Magnitude: number, Direction: FVector): UUniformVector;
    };
    readonly __properties_UUniformVector: {
        Magnitude: number;
        Direction: FVector;
    };
    readonly __staticRegistry: 
        UUniformVector['__static_UUniformVector'] &
        UFieldNodeVector['__staticRegistry'];
    readonly __propertyRegistry: 
        UUniformVector['__properties_UUniformVector'] &
        UFieldNodeVector['__propertyRegistry'];
}

declare interface UWaveScalar extends UFieldNodeFloat {
    readonly __static_UWaveScalar: {
        SetWaveScalar(Magnitude: number, position: FVector, Wavelength: number, Period: number, Time: number, Function: EWaveFunctionType, Falloff: EFieldFalloffType): UWaveScalar;
    };
    readonly __properties_UWaveScalar: {
        Magnitude: number;
        position: FVector;
        Wavelength: number;
        Period: number;
        Function: EWaveFunctionType;
        Falloff: EFieldFalloffType;
    };
    readonly __staticRegistry: 
        UWaveScalar['__static_UWaveScalar'] &
        UFieldNodeFloat['__staticRegistry'];
    readonly __propertyRegistry: 
        UWaveScalar['__properties_UWaveScalar'] &
        UFieldNodeFloat['__propertyRegistry'];
}

