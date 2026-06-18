declare interface ABar_Glass_Physics_C extends ABar_Glass_Physics_Base_C {
    readonly __static_ABar_Glass_Physics_C: {
        OnRep_Drinkable(): void;
        OnRep_Thrown(): void;
        UserConstructionScript(): void;
        BndEvt__Sphere_K2Node_ComponentBoundEvent_1_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: FHitResult): void;
        BndEvt__StaticMesh_K2Node_ComponentBoundEvent_0_ComponentHitSignature__DelegateSignature(HitComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, NormalImpulse: FVector, Hit: FHitResult): void;
        PlayKickSound(): void;
        BndEvt__InstantUsable_K2Node_ComponentBoundEvent_1_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
        Throw(fromLocation: FVector, NewRotation: FRotator, Thrower: AActor): void;
        ExecuteUbergraph_Bar_Glass_Physics(EntryPoint: number): void;
    };
    readonly __properties_ABar_Glass_Physics_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Useable: USphereComponent;
        InstantUsable: UInstantUsable;
        GravityChanged: UGravityChangedComponent;
        Sphere: USphereComponent;
        GlassMesh: USkeletalMeshComponent;
        collider: UStaticMeshComponent;
        Thrown: boolean;
        itemClass: TSubclassOf<ADrinkableItem>;
        CurrentUser: APlayerCharacter;
    };
    readonly __staticRegistry: 
        ABar_Glass_Physics_C['__static_ABar_Glass_Physics_C'] &
        ABar_Glass_Physics_Base_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABar_Glass_Physics_C['__properties_ABar_Glass_Physics_C'] &
        ABar_Glass_Physics_Base_C['__propertyRegistry'];
}

