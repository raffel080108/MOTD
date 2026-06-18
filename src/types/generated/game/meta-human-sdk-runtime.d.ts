declare interface FMetaHumanCustomizableBodyPart {
    ControlRigClass: TSubclassOf<UControlRig>;
    ControlRigLODThreshold: number;
    PhysicsAsset: UPhysicsAsset;
    RigidBodyLODThreshold: number;
    ComponentName: string;
}

declare interface UMetaHumanComponentBase extends UActorComponent {
    readonly __properties_UMetaHumanComponentBase: {
        BodyComponentName: string;
        BodyType: EMetaHumanBodyType;
        bEnableBodyCorrectives: boolean;
        FaceComponentName: string;
        RigLogicLODThreshold: number;
        bEnableNeckCorrectives: boolean;
        NeckCorrectivesLODThreshold: number;
        bEnableNeckProcControlRig: boolean;
        NeckProcControlRigLODThreshold: number;
        Torso: FMetaHumanCustomizableBodyPart;
        Legs: FMetaHumanCustomizableBodyPart;
        Feet: FMetaHumanCustomizableBodyPart;
    };
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaHumanComponentBase['__properties_UMetaHumanComponentBase'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UMetaHumanComponentUE extends UMetaHumanComponentBase {
    readonly __properties_UMetaHumanComponentUE: {
        PostProcessAnimBP: TSoftClassPtr<UAnimInstance>;
    };
    readonly __staticRegistry: 
        UMetaHumanComponentBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaHumanComponentUE['__properties_UMetaHumanComponentUE'] &
        UMetaHumanComponentBase['__propertyRegistry'];
}

