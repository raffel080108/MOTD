declare interface UDE_ArkenStout_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    OnLoaded_6720846C4CD973CF4158F2B171D4875F(Loaded: UObject): void;
    OnLoaded_6720846C4CD973CF4158F2B1FFC27104(Loaded: UObject): void;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_ArkenStout(EntryPoint: number): void;
}
declare const UDE_ArkenStout_C: UDE_ArkenStout_C;

