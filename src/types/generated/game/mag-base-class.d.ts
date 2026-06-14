declare interface AMAG_BaseClass_C extends AMagazine {
    UberGraphFrame: FPointerToUberGraphFrame;
    mesh: UFirstPersonStaticMeshComponent;
    Box: UBoxComponent;
    DefaultSceneRoot: USceneComponent;
    ChangeFovDelay: number;
    ApplySkin: boolean;
    OnSpawnRelease_Attached(Parent: AActor): boolean;
    OnSpawnRelease_Released(From: AActor): boolean;
    IsPlayerFirstPerson(Object: UObject): boolean;
    DoRelease(From: AActor): void;
    OnItemSkinned(Skin: USkinEffect): void;
    ExecuteUbergraph_MAG_BaseClass(EntryPoint: number): void;
}
declare const AMAG_BaseClass_C: AMAG_BaseClass_C;

