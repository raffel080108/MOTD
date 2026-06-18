declare interface FAimConstraintDescription extends FConstraintDescriptionEx {
    LookAt_Axis: FAxis;
    LookUp_Axis: FAxis;
    bUseLookUp: boolean;
    LookUpTarget: FVector;
}

declare interface FAxis {
    Axis: FVector;
    bInLocalSpace: boolean;
}

declare type FCCDIKChainLink = object;

declare interface FConstraintData {
    Constraint: FConstraintDescriptor;
    Weight: number;
    bMaintainOffset: boolean;
    Offset: FTransform;
    CurrentTransform: FTransform;
}

declare interface FConstraintDescription {
    bTranslation: boolean;
    bRotation: boolean;
    bScale: boolean;
    bParent: boolean;
    TranslationAxes: FFilterOptionPerAxis;
    RotationAxes: FFilterOptionPerAxis;
    ScaleAxes: FFilterOptionPerAxis;
}

declare interface FConstraintDescriptionEx {
    AxesFilterOption: FFilterOptionPerAxis;
}

declare interface FConstraintDescriptor {
    Type: EConstraintType;
}

declare interface FConstraintOffset {
    Translation: FVector;
    Rotation: FQuat;
    Scale: FVector;
    Parent: FTransform;
}

declare interface FEulerTransform {
    Location: FVector;
    Rotation: FRotator;
    Scale: FVector;
}

declare type FFABRIKChainLink = object;

declare interface FFilterOptionPerAxis {
    bX: boolean;
    bY: boolean;
    bZ: boolean;
}

declare interface FNodeChain {
    Nodes: string[];
}

declare interface FNodeHierarchyData {
    Nodes: FNodeObject[];
    Transforms: FTransform[];
    NodeNameToIndexMapping: TMap<string, number>;
}

declare interface FNodeHierarchyWithUserData {
    Hierarchy: FNodeHierarchyData;
}

declare interface FNodeObject {
    Name: string;
    ParentName: string;
}

declare interface FTransformConstraint {
    Operator: FConstraintDescription;
    SourceNode: string;
    TargetNode: string;
    Weight: number;
    bMaintainOffset: boolean;
}

declare interface FTransformConstraintDescription extends FConstraintDescriptionEx {
    TransformType: ETransformConstraintType;
}

declare interface FTransformFilter {
    TranslationFilter: FFilterOptionPerAxis;
    RotationFilter: FFilterOptionPerAxis;
    ScaleFilter: FFilterOptionPerAxis;
}

declare interface FTransformNoScale {
    Location: FVector;
    Rotation: FQuat;
}

declare interface UAnimationDataSourceRegistry extends UObject {
    readonly __properties_UAnimationDataSourceRegistry: {
        DataSources: TMap<string, TWeakObjectPtr<UObject>>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimationDataSourceRegistry['__properties_UAnimationDataSourceRegistry'] &
        UObject['__propertyRegistry'];
}

