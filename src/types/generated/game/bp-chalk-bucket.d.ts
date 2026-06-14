declare interface ABP_ChalkBucket_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    NS_Chalk_Taken_TEMP: UNiagaraComponent;
    SingleUsable: USingleUsableComponent;
    Sphere: USphereComponent;
    Chalkbucket: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    BndEvt__BP_ChalkBucket_SingleUsable_K2Node_ComponentBoundEvent_1_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    ExecuteUbergraph_BP_ChalkBucket(EntryPoint: number): void;
}
declare const ABP_ChalkBucket_C: ABP_ChalkBucket_C;

