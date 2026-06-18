declare interface UBP_BerzerkComp_C extends UPerkEffect {
    readonly __static_UBP_BerzerkComp_C: {
        Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
        OnItemEquipped_Event_0(Item: AItem): void;
        ExecuteUbergraph_BP_BerzerkComp(EntryPoint: number): void;
    };
    readonly __properties_UBP_BerzerkComp_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UBP_BerzerkComp_C['__static_UBP_BerzerkComp_C'] &
        UPerkEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_BerzerkComp_C['__properties_UBP_BerzerkComp_C'] &
        UPerkEffect['__propertyRegistry'];
}

