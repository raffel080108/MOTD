declare interface UBP_IntoxicationComponent_C extends UCharacterIntoxicationComponent {
    readonly __static_UBP_IntoxicationComponent_C: {
        ToPercentStr(Progress: number, PercentString: string): void;
        MyLerp(Current_Value: number, Target_Value: number, Delta_Time: number, Result: number): void;
        SetPostProcessStrength(NewStrength: number): void;
        GetAlcoholPct(Strength: EDrinkableAlcoholStrength): number;
        ReceiveDrunkTick(DeltaTime: number, DrunkTime: number): void;
        ReceivePassOutDrunk(): void;
        ReceiveDrunkEnd(): void;
        ReceiveDrunkBegin(): void;
        ExecuteUbergraph_BP_IntoxicationComponent(EntryPoint: number): void;
    };
    readonly __properties_UBP_IntoxicationComponent_C: {
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
        EffectID: string;
        IntoxicationVisualStrength: number;
        IntoxicationMovementStrength: number;
        DrunkenShoutCoolDown: number;
        ShoutCooldownMax: number;
        ShoutCooldownMin: number;
        BeginShoutIntoxicationLimit: number;
    };
    readonly __staticRegistry: 
        UBP_IntoxicationComponent_C['__static_UBP_IntoxicationComponent_C'] &
        UCharacterIntoxicationComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_IntoxicationComponent_C['__properties_UBP_IntoxicationComponent_C'] &
        UCharacterIntoxicationComponent['__propertyRegistry'];
}

