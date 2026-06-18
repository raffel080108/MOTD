declare interface UDE_UnderhillDeluxe_C extends UDrinkEffectComponent {
    readonly __static_UDE_UnderhillDeluxe_C: {
        OnRep_CurrentCameraOffset(): void;
        OnRep_CurrentScale(): void;
        TraceForScaledCollision(IsNextScaleColliding: boolean): void;
        ReceiveTick(DeltaSeconds: number): void;
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_UnderhillDeluxe(EntryPoint: number): void;
    };
    readonly __properties_UDE_UnderhillDeluxe_C: {
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
    };
    readonly __staticRegistry: 
        UDE_UnderhillDeluxe_C['__static_UDE_UnderhillDeluxe_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_UnderhillDeluxe_C['__properties_UDE_UnderhillDeluxe_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

