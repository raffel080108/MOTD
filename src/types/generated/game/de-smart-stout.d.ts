declare interface UDE_SmartStout_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    MoonriderSound: UAudioComponent;
    ParticleEffect: UParticleSystemComponent;
    OnStartEffect(Character: APlayerCharacter): void;
    ExecuteUbergraph_DE_SmartStout(EntryPoint: number): void;
}
declare const UDE_SmartStout_C: UDE_SmartStout_C;

