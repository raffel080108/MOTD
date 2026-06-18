declare interface UBPL_ElevatorObjectives_C extends UBlueprintFunctionLibrary {
    readonly __static_UBPL_ElevatorObjectives_C: {
        GetTimeAttackKillCountForEscape(__WorldContext: UObject, Amount: number): void;
        GetTimeAttackKillCountForProceed(__WorldContext: UObject, Amount: number): void;
        GetTimeAttackKillCountForBonus(__WorldContext: UObject, Amount: number): void;
        GetTimeAttackSeededRandomBool(__WorldContext: UObject, Value: boolean): void;
    };
    readonly __staticRegistry: 
        UBPL_ElevatorObjectives_C['__static_UBPL_ElevatorObjectives_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

