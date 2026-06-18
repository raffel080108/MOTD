declare interface ULIB_Intoxication_C extends UBlueprintFunctionLibrary {
    readonly __static_ULIB_Intoxication_C: {
        GetAlcoholStrengthPct(Strength: EDrinkableAlcoholStrength, Character: APlayerCharacter, __WorldContext: UObject, Percent: number): void;
        GetAlcoholStrengthName(Strength: EDrinkableAlcoholStrength, UpperCase: boolean, __WorldContext: UObject, Name: string): void;
    };
    readonly __staticRegistry: 
        ULIB_Intoxication_C['__static_ULIB_Intoxication_C'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

