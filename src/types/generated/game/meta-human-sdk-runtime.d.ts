declare interface FMetaHumanCustomizableBodyPart {
    ControlRigClass: TSubclassOf<UControlRig>;
    ControlRigLODThreshold: number;
    PhysicsAsset: UPhysicsAsset;
    RigidBodyLODThreshold: number;
    ComponentName: FString;
}
declare const FMetaHumanCustomizableBodyPart: FMetaHumanCustomizableBodyPart;

declare interface UMetaHumanComponentBase extends UActorComponent {
    BodyComponentName: FString;
    BodyType: EMetaHumanBodyType;
    bEnableBodyCorrectives: boolean;
    FaceComponentName: FString;
    RigLogicLODThreshold: number;
    bEnableNeckCorrectives: boolean;
    NeckCorrectivesLODThreshold: number;
    bEnableNeckProcControlRig: boolean;
    NeckProcControlRigLODThreshold: number;
    Torso: FMetaHumanCustomizableBodyPart;
    Legs: FMetaHumanCustomizableBodyPart;
    Feet: FMetaHumanCustomizableBodyPart;
}
declare const UMetaHumanComponentBase: UMetaHumanComponentBase;

declare interface UMetaHumanComponentUE extends UMetaHumanComponentBase {
    PostProcessAnimBP: TSoftClassPtr<UAnimInstance>;
}
declare const UMetaHumanComponentUE: UMetaHumanComponentUE;

