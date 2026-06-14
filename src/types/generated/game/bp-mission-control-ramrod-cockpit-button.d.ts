declare interface ABP_MissionControl_Ramrod_Cockpit_Button_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    SingleUsable: USingleUsableComponent;
    Box: UBoxComponent;
    DefaultSceneRoot: USceneComponent;
    SizeX: number;
    SizeY: number;
    SizeZ: number;
    Shout: UDialogDataAsset;
    count: number;
    UserConstructionScript(): void;
    BndEvt__BP_MissionControl_RamrodButton_SingleUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    ExecuteUbergraph_BP_MissionControl_Ramrod_Cockpit_Button(EntryPoint: number): void;
}
declare const ABP_MissionControl_Ramrod_Cockpit_Button_C: ABP_MissionControl_Ramrod_Cockpit_Button_C;

