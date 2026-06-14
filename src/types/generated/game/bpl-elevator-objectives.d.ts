declare interface UBPL_ElevatorObjectives_C extends UBlueprintFunctionLibrary {
    GetTimeAttackKillCountForEscape(__WorldContext: UObject, Amount: number): void;
    GetTimeAttackKillCountForProceed(__WorldContext: UObject, Amount: number): void;
    GetTimeAttackKillCountForBonus(__WorldContext: UObject, Amount: number): void;
    GetTimeAttackSeededRandomBool(__WorldContext: UObject, Value: boolean): void;
}
declare const UBPL_ElevatorObjectives_C: UBPL_ElevatorObjectives_C;

