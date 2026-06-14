declare interface ABP_CabinController_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    CabinPriorityIndex: number;
    cabin: ABP_RamrodSpaceRig_Cabin01_C;
    CabinSign: ABP_CabinOwnerSign_C;
    CabinOwner: ABP_PlayerController_SpaceRig_C;
    OwnerState: AFSDPlayerState;
    StartSpot: ASpacerigStart;
    InfirmaryStats: ABP_DeathStats_C;
    OnRep_OwnerState(): void;
    ReceiveBeginPlay(): void;
    RemoveOwner(): void;
    ExecuteUbergraph_BP_CabinController(EntryPoint: number): void;
}
declare const ABP_CabinController_C: ABP_CabinController_C;

