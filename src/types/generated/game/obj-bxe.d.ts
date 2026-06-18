declare interface UObj_BXE_C extends UBXEObjective {
    readonly __static_UObj_BXE_C: {
        GetInMissionText(): string;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_Obj_BXE(EntryPoint: number): void;
    };
    readonly __properties_UObj_BXE_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ObjDescription: string;
    };
    readonly __staticRegistry: 
        UObj_BXE_C['__static_UObj_BXE_C'] &
        UBXEObjective['__staticRegistry'];
    readonly __propertyRegistry: 
        UObj_BXE_C['__properties_UObj_BXE_C'] &
        UBXEObjective['__propertyRegistry'];
}

