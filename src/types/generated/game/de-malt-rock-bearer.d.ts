declare interface UDE_MaltRockBearer_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    StartScale: number;
    TargetScale: number;
    Progress: number;
    IsScalingActive: boolean;
    ScaleCheckCooldown: number;
    EffectEnabled: boolean;
    TraceForScaledCollision(IsNextScaleColliding: boolean): void;
    ReceiveTick(DeltaSeconds: number): void;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_MaltRockBearer(EntryPoint: number): void;
}
declare const UDE_MaltRockBearer_C: UDE_MaltRockBearer_C;

