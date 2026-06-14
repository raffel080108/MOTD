declare interface FAimConstraintDescription extends FConstraintDescriptionEx {
    LookAt_Axis: FAxis;
    LookUp_Axis: FAxis;
    bUseLookUp: boolean;
    LookUpTarget: FVector;
}
declare const FAimConstraintDescription: FAimConstraintDescription;

declare interface FAxis {
    Axis: FVector;
    bInLocalSpace: boolean;
}
declare const FAxis: FAxis;

declare interface FCCDIKChainLink {

}
declare const FCCDIKChainLink: FCCDIKChainLink;

declare interface FConstraintData {
    Constraint: FConstraintDescriptor;
    Weight: number;
    bMaintainOffset: boolean;
    Offset: FTransform;
    CurrentTransform: FTransform;
}
declare const FConstraintData: FConstraintData;

declare interface FConstraintDescription {
    bTranslation: boolean;
    bRotation: boolean;
    bScale: boolean;
    bParent: boolean;
    TranslationAxes: FFilterOptionPerAxis;
    RotationAxes: FFilterOptionPerAxis;
    ScaleAxes: FFilterOptionPerAxis;
}
declare const FConstraintDescription: FConstraintDescription;

declare interface FConstraintDescriptionEx {
    AxesFilterOption: FFilterOptionPerAxis;
}
declare const FConstraintDescriptionEx: FConstraintDescriptionEx;

declare interface FConstraintDescriptor {
    Type: EConstraintType;
}
declare const FConstraintDescriptor: FConstraintDescriptor;

declare interface FConstraintOffset {
    Translation: FVector;
    Rotation: FQuat;
    Scale: FVector;
    Parent: FTransform;
}
declare const FConstraintOffset: FConstraintOffset;

declare interface FEulerTransform {
    Location: FVector;
    Rotation: FRotator;
    Scale: FVector;
}
declare const FEulerTransform: FEulerTransform;

declare interface FFABRIKChainLink {

}
declare const FFABRIKChainLink: FFABRIKChainLink;

declare interface FFilterOptionPerAxis {
    bX: boolean;
    bY: boolean;
    bZ: boolean;
}
declare const FFilterOptionPerAxis: FFilterOptionPerAxis;

declare interface FNodeChain {
    Nodes: TArray<FName>;
}
declare const FNodeChain: FNodeChain;

declare interface FNodeHierarchyData {
    Nodes: TArray<FNodeObject>;
    Transforms: TArray<FTransform>;
    NodeNameToIndexMapping: Record<FName, number>;
}
declare const FNodeHierarchyData: FNodeHierarchyData;

declare interface FNodeHierarchyWithUserData {
    Hierarchy: FNodeHierarchyData;
}
declare const FNodeHierarchyWithUserData: FNodeHierarchyWithUserData;

declare interface FNodeObject {
    Name: FName;
    ParentName: FName;
}
declare const FNodeObject: FNodeObject;

declare interface FTransformConstraint {
    Operator: FConstraintDescription;
    SourceNode: FName;
    TargetNode: FName;
    Weight: number;
    bMaintainOffset: boolean;
}
declare const FTransformConstraint: FTransformConstraint;

declare interface FTransformConstraintDescription extends FConstraintDescriptionEx {
    TransformType: ETransformConstraintType;
}
declare const FTransformConstraintDescription: FTransformConstraintDescription;

declare interface FTransformFilter {
    TranslationFilter: FFilterOptionPerAxis;
    RotationFilter: FFilterOptionPerAxis;
    ScaleFilter: FFilterOptionPerAxis;
}
declare const FTransformFilter: FTransformFilter;

declare interface FTransformNoScale {
    Location: FVector;
    Rotation: FQuat;
}
declare const FTransformNoScale: FTransformNoScale;

declare interface UAnimationDataSourceRegistry extends UObject {
    DataSources: Record<FName, TWeakObjectPtr<UObject>>;
}
declare const UAnimationDataSourceRegistry: UAnimationDataSourceRegistry;

