declare interface ULIB_Intoxication_C extends UBlueprintFunctionLibrary {
    GetAlcoholStrengthPct(Strength: EDrinkableAlcoholStrength, Character: APlayerCharacter, __WorldContext: UObject, Percent: number): void;
    GetAlcoholStrengthName(Strength: EDrinkableAlcoholStrength, UpperCase: boolean, __WorldContext: UObject, Name: FText): void;
}
declare const ULIB_Intoxication_C: ULIB_Intoxication_C;

