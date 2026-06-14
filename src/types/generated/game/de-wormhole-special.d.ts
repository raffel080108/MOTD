declare interface UDE_WormholeSpecial_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    ActiveWormhole: ABP_WormholeLocation_Base_C;
    IsLastActiveWormholeEffect(was_last_effect: boolean): void;
    ReceiveTick(DeltaSeconds: number): void;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_WormholeSpecial(EntryPoint: number): void;
}
declare const UDE_WormholeSpecial_C: UDE_WormholeSpecial_C;

