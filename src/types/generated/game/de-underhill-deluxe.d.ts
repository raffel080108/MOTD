declare interface UDE_UnderhillDeluxe_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    TargetScale: number;
    Character: APlayerCharacter;
    StartScale: number;
    Progress: number;
    CurrentScale: number;
    IsScalingActive: boolean;
    StartCameraOffset: number;
    TargetCameraOffset: number;
    CurrentCameraOffset: number;
    EffectEnabled: boolean;
    OnRep_CurrentCameraOffset(): void;
    OnRep_CurrentScale(): void;
    TraceForScaledCollision(IsNextScaleColliding: boolean): void;
    ReceiveTick(DeltaSeconds: number): void;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_UnderhillDeluxe(EntryPoint: number): void;
}
declare const UDE_UnderhillDeluxe_C: UDE_UnderhillDeluxe_C;

