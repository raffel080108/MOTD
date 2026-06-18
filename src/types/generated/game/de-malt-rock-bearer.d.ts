declare interface UDE_MaltRockBearer_C extends UDrinkEffectComponent {
    readonly __static_UDE_MaltRockBearer_C: {
        TraceForScaledCollision(IsNextScaleColliding: boolean): void;
        ReceiveTick(DeltaSeconds: number): void;
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_MaltRockBearer(EntryPoint: number): void;
    };
    readonly __properties_UDE_MaltRockBearer_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
        StartScale: number;
        TargetScale: number;
        Progress: number;
        IsScalingActive: boolean;
        ScaleCheckCooldown: number;
        EffectEnabled: boolean;
    };
    readonly __staticRegistry: 
        UDE_MaltRockBearer_C['__static_UDE_MaltRockBearer_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_MaltRockBearer_C['__properties_UDE_MaltRockBearer_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

