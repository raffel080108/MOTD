declare interface AConstraintsActor extends AActor {
    readonly __properties_AConstraintsActor: {
        ConstraintsManager: UConstraintsManager;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AConstraintsActor['__properties_AConstraintsActor'] &
        AActor['__propertyRegistry'];
}

declare interface FConstraintAndActiveChannel {
    ActiveChannel: FMovieSceneConstraintChannel;
    ConstraintCopyToSpawn: UTickableConstraint;
}

declare interface FConstraintTickFunction extends FTickFunction {

}

declare interface FConstraintsInWorld {
    World: TWeakObjectPtr<UWorld>;
    Constraints: TWeakObjectPtr<UTickableConstraint>[];
}

declare interface FMovieSceneConstraintChannel extends FMovieSceneBoolChannel {

}

declare interface UConstraintSubsystem extends UEngineSubsystem {
    readonly __static_UConstraintSubsystem: {
        OnConstraintRemovedFromSystem__DelegateSignature(Mananger: UConstraintSubsystem, Constraint: UTickableConstraint, bDoNotCompensate: boolean): void;
        OnConstraintAddedToSystem__DelegateSignature(Mananger: UConstraintSubsystem, Constraint: UTickableConstraint): void;
    };
    readonly __properties_UConstraintSubsystem: {
        OnConstraintAddedToSystem_BP: FConstraintSubsystemOnConstraintAddedToSystem_BP;
        OnConstraintRemovedFromSystem_BP: FConstraintSubsystemOnConstraintRemovedFromSystem_BP;
        ConstraintsInWorld: FConstraintsInWorld[];
    };
    readonly __staticRegistry: 
        UConstraintSubsystem['__static_UConstraintSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UConstraintSubsystem['__properties_UConstraintSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

declare interface UConstraintsManager extends UObject {
    readonly __static_UConstraintsManager: {
        OnConstraintRemoved__DelegateSignature(Mananger: UConstraintsManager, Constraint: UTickableConstraint, bDoNotCompensate: boolean): void;
        OnConstraintAdded__DelegateSignature(Mananger: UConstraintsManager, Constraint: UTickableConstraint): void;
    };
    readonly __properties_UConstraintsManager: {
        OnConstraintAdded_BP: FConstraintsManagerOnConstraintAdded_BP;
        OnConstraintRemoved_BP: FConstraintsManagerOnConstraintRemoved_BP;
        Constraints: UTickableConstraint[];
    };
    readonly __staticRegistry: 
        UConstraintsManager['__static_UConstraintsManager'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UConstraintsManager['__properties_UConstraintsManager'] &
        UObject['__propertyRegistry'];
}

declare interface UConstraintsScriptingLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UConstraintsScriptingLibrary: {
        RemoveThisConstraint(InWorld: UWorld, InTickableConstraint: UTickableConstraint): boolean;
        RemoveConstraint(InWorld: UWorld, InIndex: number): boolean;
        GetConstraintsArray(InWorld: UWorld): UTickableConstraint[];
        CreateTransformableHandle(InWorld: UWorld, InObject: UObject, InAttachmentName: string): UTransformableHandle;
        CreateTransformableComponentHandle(InWorld: UWorld, InSceneComponent: USceneComponent, InSocketName: string): UTransformableComponentHandle;
        CreateFromType(InWorld: UWorld, InType: ETransformConstraintType): UTickableTransformConstraint;
        AddConstraint(InWorld: UWorld, InParentHandle: UTransformableHandle, InChildHandle: UTransformableHandle, InConstraint: UTickableTransformConstraint, bMaintainOffset: boolean): boolean;
    };
    readonly __staticRegistry: 
        UConstraintsScriptingLibrary['__static_UConstraintsScriptingLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UTickableConstraint extends UObject {
    readonly __properties_UTickableConstraint: {
        Active: boolean;
        bValid: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableConstraint['__properties_UTickableConstraint'] &
        UObject['__propertyRegistry'];
}

declare interface UTickableLookAtConstraint extends UTickableTransformConstraint {
    readonly __properties_UTickableLookAtConstraint: {
        Axis: FVector;
    };
    readonly __staticRegistry: 
        UTickableTransformConstraint['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableLookAtConstraint['__properties_UTickableLookAtConstraint'] &
        UTickableTransformConstraint['__propertyRegistry'];
}

declare interface UTickableParentConstraint extends UTickableTransformConstraint {
    readonly __properties_UTickableParentConstraint: {
        OffsetTransform: FTransform;
        bScaling: boolean;
        TransformFilter: FTransformFilter;
    };
    readonly __staticRegistry: 
        UTickableTransformConstraint['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableParentConstraint['__properties_UTickableParentConstraint'] &
        UTickableTransformConstraint['__propertyRegistry'];
}

declare interface UTickableRotationConstraint extends UTickableTransformConstraint {
    readonly __properties_UTickableRotationConstraint: {
        OffsetRotation: FQuat;
        AxisFilter: FFilterOptionPerAxis;
    };
    readonly __staticRegistry: 
        UTickableTransformConstraint['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableRotationConstraint['__properties_UTickableRotationConstraint'] &
        UTickableTransformConstraint['__propertyRegistry'];
}

declare interface UTickableScaleConstraint extends UTickableTransformConstraint {
    readonly __properties_UTickableScaleConstraint: {
        OffsetScale: FVector;
        AxisFilter: FFilterOptionPerAxis;
    };
    readonly __staticRegistry: 
        UTickableTransformConstraint['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableScaleConstraint['__properties_UTickableScaleConstraint'] &
        UTickableTransformConstraint['__propertyRegistry'];
}

declare interface UTickableTransformConstraint extends UTickableConstraint {
    readonly __properties_UTickableTransformConstraint: {
        ParentTRSHandle: UTransformableHandle;
        ChildTRSHandle: UTransformableHandle;
        bMaintainOffset: boolean;
        Weight: number;
        bDynamicOffset: boolean;
        Type: ETransformConstraintType;
    };
    readonly __staticRegistry: 
        UTickableConstraint['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableTransformConstraint['__properties_UTickableTransformConstraint'] &
        UTickableConstraint['__propertyRegistry'];
}

declare interface UTickableTranslationConstraint extends UTickableTransformConstraint {
    readonly __properties_UTickableTranslationConstraint: {
        OffsetTranslation: FVector;
        AxisFilter: FFilterOptionPerAxis;
    };
    readonly __staticRegistry: 
        UTickableTransformConstraint['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableTranslationConstraint['__properties_UTickableTranslationConstraint'] &
        UTickableTransformConstraint['__propertyRegistry'];
}

declare interface UTransformableComponentHandle extends UTransformableHandle {
    readonly __properties_UTransformableComponentHandle: {
        Component: TWeakObjectPtr<USceneComponent>;
        SocketName: string;
    };
    readonly __staticRegistry: 
        UTransformableHandle['__staticRegistry'];
    readonly __propertyRegistry: 
        UTransformableComponentHandle['__properties_UTransformableComponentHandle'] &
        UTransformableHandle['__propertyRegistry'];
}

declare interface UTransformableHandle extends UObject {
    readonly __properties_UTransformableHandle: {
        ConstraintBindingID: FMovieSceneObjectBindingID;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UTransformableHandle['__properties_UTransformableHandle'] &
        UObject['__propertyRegistry'];
}

