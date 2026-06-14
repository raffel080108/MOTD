declare interface UDE_BlackoutStout_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    PEffect: boolean;
    soundComp: UAudioComponent;
    soundCompDown: UAudioComponent;
    particle: UNiagaraComponent;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_BlackoutStout(EntryPoint: number): void;
}
declare const UDE_BlackoutStout_C: UDE_BlackoutStout_C;

