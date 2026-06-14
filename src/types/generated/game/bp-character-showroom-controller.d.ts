declare interface UBP_CharacterShowroomController_C extends UCharacterShowroomController {
    UberGraphFrame: FPointerToUberGraphFrame;
    Receive_CharacterShown(): void;
    EquipWeaponFromItem(Item: TSubclassOf<AItem>): void;
    ExecuteUbergraph_BP_CharacterShowroomController(EntryPoint: number): void;
}
declare const UBP_CharacterShowroomController_C: UBP_CharacterShowroomController_C;

