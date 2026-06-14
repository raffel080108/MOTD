declare interface ABP_SeeYouInHellField_C extends ABP_Grenade_IFG_Area_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    FearSphere: USphereComponent;
    BndEvt__Sphere_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    BndEvt__FearSphere_K2Node_ComponentBoundEvent_1_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
    FearMe(FearTarget: AActor): void;
    ExecuteUbergraph_BP_SeeYouInHellField(EntryPoint: number): void;
}
declare const ABP_SeeYouInHellField_C: ABP_SeeYouInHellField_C;

