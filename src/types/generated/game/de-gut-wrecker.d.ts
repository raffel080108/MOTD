declare interface UDE_GutWrecker_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    ReceiveTick(DeltaSeconds: number): void;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_GutWrecker(EntryPoint: number): void;
}
declare const UDE_GutWrecker_C: UDE_GutWrecker_C;

