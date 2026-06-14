declare interface UDE_LeafLoverDisableAllEffects_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    TargetScale: number;
    Character: APlayerCharacter;
    StartScale: number;
    Progress: number;
    OnStartEffect(Character: APlayerCharacter): void;
    ExecuteUbergraph_DE_LeafLoverDisableAllEffects(EntryPoint: number): void;
}
declare const UDE_LeafLoverDisableAllEffects_C: UDE_LeafLoverDisableAllEffects_C;

