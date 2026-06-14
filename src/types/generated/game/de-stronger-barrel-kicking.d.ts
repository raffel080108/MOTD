declare interface UDE_StrongerBarrelKicking_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    STE: UStatusEffect;
    ReceiveBeginPlay(): void;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_StrongerBarrelKicking(EntryPoint: number): void;
}
declare const UDE_StrongerBarrelKicking_C: UDE_StrongerBarrelKicking_C;

