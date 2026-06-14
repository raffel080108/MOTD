declare interface UBP_IntoxicationComponent_C extends UCharacterIntoxicationComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Seed: number;
    DrunkEffectCoolDown: number;
    DrunkenMovementNoiseStrength: number;
    DrunkenYawNoiseStrength: number;
    DrunkenPitchNoiseStrength: number;
    IgnoreMovement: boolean;
    IgnoreYaw: boolean;
    IgnorePitch: boolean;
    DrunkenEffect: UMaterialInstanceDynamic;
    EffectID: FName;
    IntoxicationVisualStrength: number;
    IntoxicationMovementStrength: number;
    DrunkenShoutCoolDown: number;
    ShoutCooldownMax: number;
    ShoutCooldownMin: number;
    BeginShoutIntoxicationLimit: number;
    ToPercentStr(Progress: number, PercentString: string | FString): void;
    MyLerp(Current_Value: number, Target_Value: number, Delta_Time: number, Result: number): void;
    SetPostProcessStrength(NewStrength: number): void;
    GetAlcoholPct(Strength: EDrinkableAlcoholStrength): number;
    ReceiveDrunkTick(DeltaTime: number, DrunkTime: number): void;
    ReceivePassOutDrunk(): void;
    ReceiveDrunkEnd(): void;
    ReceiveDrunkBegin(): void;
    ExecuteUbergraph_BP_IntoxicationComponent(EntryPoint: number): void;
}
declare const UBP_IntoxicationComponent_C: UBP_IntoxicationComponent_C;

