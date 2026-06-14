declare interface AFieldSystemActor extends AActor {
    FieldSystemComponent: UFieldSystemComponent;
}
declare const AFieldSystemActor: AFieldSystemActor;

declare interface FFieldObjectCommands {
    TargetNames: TArray<FName>;
    RootNodes: TArray<UFieldNodeBase>;
    MetaDatas: TArray<UFieldSystemMetaData>;
}
declare const FFieldObjectCommands: FFieldObjectCommands;

declare interface UBoxFalloff extends UFieldNodeFloat {
    Magnitude: number;
    MinRange: number;
    MaxRange: number;
    Default: number;
    Transform: FTransform;
    Falloff: EFieldFalloffType;
    SetBoxFalloff(Magnitude: number, MinRange: number, MaxRange: number, Default: number, Transform: FTransform, Falloff: EFieldFalloffType): UBoxFalloff;
}
declare const UBoxFalloff: UBoxFalloff;

declare interface UCullingField extends UFieldNodeBase {
    Culling: UFieldNodeBase;
    Field: UFieldNodeBase;
    Operation: EFieldCullingOperationType;
    SetCullingField(Culling: UFieldNodeBase, Field: UFieldNodeBase, Operation: EFieldCullingOperationType): UCullingField;
}
declare const UCullingField: UCullingField;

declare interface UFieldNodeBase extends UActorComponent {

}
declare const UFieldNodeBase: UFieldNodeBase;

declare interface UFieldNodeFloat extends UFieldNodeBase {

}
declare const UFieldNodeFloat: UFieldNodeFloat;

declare interface UFieldNodeInt extends UFieldNodeBase {

}
declare const UFieldNodeInt: UFieldNodeInt;

declare interface UFieldNodeVector extends UFieldNodeBase {

}
declare const UFieldNodeVector: UFieldNodeVector;

declare interface UFieldSystem extends UObject {

}
declare const UFieldSystem: UFieldSystem;

declare interface UFieldSystemComponent extends UPrimitiveComponent {
    FieldSystem: UFieldSystem;
    bIsWorldField: boolean;
    bIsChaosField: boolean;
    SupportedSolvers: TArray<TSoftObjectPtr<AChaosSolverActor>>;
    ConstructionCommands: FFieldObjectCommands;
    BufferCommands: FFieldObjectCommands;
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
}
declare const UFieldSystemComponent: UFieldSystemComponent;

declare interface UFieldSystemMetaData extends UActorComponent {

}
declare const UFieldSystemMetaData: UFieldSystemMetaData;

declare interface UFieldSystemMetaDataFilter extends UFieldSystemMetaData {
    FilterType: EFieldFilterType;
    ObjectType: EFieldObjectType;
    PositionType: EFieldPositionType;
    SetMetaDataFilterType(FilterType: EFieldFilterType, ObjectType: EFieldObjectType, PositionType: EFieldPositionType): UFieldSystemMetaDataFilter;
}
declare const UFieldSystemMetaDataFilter: UFieldSystemMetaDataFilter;

declare interface UFieldSystemMetaDataIteration extends UFieldSystemMetaData {
    Iterations: number;
    SetMetaDataIteration(Iterations: number): UFieldSystemMetaDataIteration;
}
declare const UFieldSystemMetaDataIteration: UFieldSystemMetaDataIteration;

declare interface UFieldSystemMetaDataProcessingResolution extends UFieldSystemMetaData {
    ResolutionType: EFieldResolutionType;
    SetMetaDataaProcessingResolutionType(ResolutionType: EFieldResolutionType): UFieldSystemMetaDataProcessingResolution;
}
declare const UFieldSystemMetaDataProcessingResolution: UFieldSystemMetaDataProcessingResolution;

declare interface UNoiseField extends UFieldNodeFloat {
    MinRange: number;
    MaxRange: number;
    Transform: FTransform;
    SetNoiseField(MinRange: number, MaxRange: number, Transform: FTransform): UNoiseField;
}
declare const UNoiseField: UNoiseField;

declare interface UOperatorField extends UFieldNodeBase {
    Magnitude: number;
    RightField: UFieldNodeBase;
    LeftField: UFieldNodeBase;
    Operation: EFieldOperationType;
    SetOperatorField(Magnitude: number, LeftField: UFieldNodeBase, RightField: UFieldNodeBase, Operation: EFieldOperationType): UOperatorField;
}
declare const UOperatorField: UOperatorField;

declare interface UPlaneFalloff extends UFieldNodeFloat {
    Magnitude: number;
    MinRange: number;
    MaxRange: number;
    Default: number;
    Distance: number;
    position: FVector;
    Normal: FVector;
    Falloff: EFieldFalloffType;
    SetPlaneFalloff(Magnitude: number, MinRange: number, MaxRange: number, Default: number, Distance: number, position: FVector, Normal: FVector, Falloff: EFieldFalloffType): UPlaneFalloff;
}
declare const UPlaneFalloff: UPlaneFalloff;

declare interface URadialFalloff extends UFieldNodeFloat {
    Magnitude: number;
    MinRange: number;
    MaxRange: number;
    Default: number;
    Radius: number;
    position: FVector;
    Falloff: EFieldFalloffType;
    SetRadialFalloff(Magnitude: number, MinRange: number, MaxRange: number, Default: number, Radius: number, position: FVector, Falloff: EFieldFalloffType): URadialFalloff;
}
declare const URadialFalloff: URadialFalloff;

declare interface URadialIntMask extends UFieldNodeInt {
    Radius: number;
    position: FVector;
    InteriorValue: number;
    ExteriorValue: number;
    SetMaskCondition: ESetMaskConditionType;
    SetRadialIntMask(Radius: number, position: FVector, InteriorValue: number, ExteriorValue: number, SetMaskConditionIn: ESetMaskConditionType): URadialIntMask;
}
declare const URadialIntMask: URadialIntMask;

declare interface URadialVector extends UFieldNodeVector {
    Magnitude: number;
    position: FVector;
    SetRadialVector(Magnitude: number, position: FVector): URadialVector;
}
declare const URadialVector: URadialVector;

declare interface URandomVector extends UFieldNodeVector {
    Magnitude: number;
    SetRandomVector(Magnitude: number): URandomVector;
}
declare const URandomVector: URandomVector;

declare interface UReturnResultsTerminal extends UFieldNodeBase {
    SetReturnResultsTerminal(): UReturnResultsTerminal;
}
declare const UReturnResultsTerminal: UReturnResultsTerminal;

declare interface UToFloatField extends UFieldNodeFloat {
    IntField: UFieldNodeInt;
    SetToFloatField(IntegerField: UFieldNodeInt): UToFloatField;
}
declare const UToFloatField: UToFloatField;

declare interface UToIntegerField extends UFieldNodeInt {
    FloatField: UFieldNodeFloat;
    SetToIntegerField(FloatField: UFieldNodeFloat): UToIntegerField;
}
declare const UToIntegerField: UToIntegerField;

declare interface UUniformInteger extends UFieldNodeInt {
    Magnitude: number;
    SetUniformInteger(Magnitude: number): UUniformInteger;
}
declare const UUniformInteger: UUniformInteger;

declare interface UUniformScalar extends UFieldNodeFloat {
    Magnitude: number;
    SetUniformScalar(Magnitude: number): UUniformScalar;
}
declare const UUniformScalar: UUniformScalar;

declare interface UUniformVector extends UFieldNodeVector {
    Magnitude: number;
    Direction: FVector;
    SetUniformVector(Magnitude: number, Direction: FVector): UUniformVector;
}
declare const UUniformVector: UUniformVector;

declare interface UWaveScalar extends UFieldNodeFloat {
    Magnitude: number;
    position: FVector;
    Wavelength: number;
    Period: number;
    Function: EWaveFunctionType;
    Falloff: EFieldFalloffType;
    SetWaveScalar(Magnitude: number, position: FVector, Wavelength: number, Period: number, Time: number, Function: EWaveFunctionType, Falloff: EFieldFalloffType): UWaveScalar;
}
declare const UWaveScalar: UWaveScalar;

