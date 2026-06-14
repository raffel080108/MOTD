declare interface ABP_Grenade_IFG_Area_Base_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    NS_Grenade_IFG_Explosion_A_AttemptingGFXfix_Converted: UNiagaraComponent;
    ColdCloudNS: UNiagaraComponent;
    StatusEffectTrigger: UStatusEffectTriggerComponent;
    Audio: UAudioComponent;
    Sphere: USphereComponent;
    DefaultSceneRoot: USceneComponent;
    Lifetime: number;
    ParticleDeathDuration: number;
    Actice: boolean;
    FieldStop_Cue: USoundBase;
    Explosion_Cue: USoundBase;
    EnterField_Cue: USoundBase;
    LeaveField_Cue: USoundBase;
    OnRep_Actice(): void;
    UserConstructionScript(): void;
    ReceiveBeginPlay(): void;
    BndEvt__StatusEffectTrigger_K2Node_ComponentBoundEvent_0_EffectTriggeredDelegate__DelegateSignature(targetActor: AActor, entered: boolean): void;
    ActiveWeakeningEffect(): void;
    BndEvt__Sphere_K2Node_ComponentBoundEvent_2_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__Sphere_K2Node_ComponentBoundEvent_3_ComponentEndOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number): void;
    ExecuteUbergraph_BP_Grenade_IFG_Area_Base(EntryPoint: number): void;
}
declare const ABP_Grenade_IFG_Area_Base_C: ABP_Grenade_IFG_Area_Base_C;

