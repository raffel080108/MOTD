declare interface UObj_BXE_C extends UBXEObjective {
    UberGraphFrame: FPointerToUberGraphFrame;
    ObjDescription: FText;
    GetInMissionText(): FText;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_Obj_BXE(EntryPoint: number): void;
}
declare const UObj_BXE_C: UObj_BXE_C;

