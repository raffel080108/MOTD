declare interface FCurveParameterPair {
    AnimCurveName: string;
    UserVariableName: string;
}

declare interface UAnimNotifyState_TimedNiagaraEffect extends UAnimNotifyState {
    readonly __static_UAnimNotifyState_TimedNiagaraEffect: {
        GetSpawnedEffect(MeshComp: UMeshComponent): UFXSystemComponent;
    };
    readonly __properties_UAnimNotifyState_TimedNiagaraEffect: {
        Template: UNiagaraSystem;
        SocketName: string;
        LocationOffset: FVector;
        RotationOffset: FRotator;
        Scale: FVector;
        bApplyRateScaleAsTimeDilation: boolean;
        bDestroyAtEnd: boolean;
    };
    readonly __staticRegistry: 
        UAnimNotifyState_TimedNiagaraEffect['__static_UAnimNotifyState_TimedNiagaraEffect'] &
        UAnimNotifyState['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimNotifyState_TimedNiagaraEffect['__properties_UAnimNotifyState_TimedNiagaraEffect'] &
        UAnimNotifyState['__propertyRegistry'];
}

declare interface UAnimNotifyState_TimedNiagaraEffectAdvanced extends UAnimNotifyState_TimedNiagaraEffect {
    readonly __static_UAnimNotifyState_TimedNiagaraEffectAdvanced: {
        GetNotifyProgress(MeshComp: UMeshComponent): number;
    };
    readonly __properties_UAnimNotifyState_TimedNiagaraEffectAdvanced: {
        bEnableNormalizedNotifyProgress: boolean;
        bApplyRateScaleToProgress: boolean;
        NotifyProgressUserParameter: string;
        AnimCurves: FCurveParameterPair[];
    };
    readonly __staticRegistry: 
        UAnimNotifyState_TimedNiagaraEffectAdvanced['__static_UAnimNotifyState_TimedNiagaraEffectAdvanced'] &
        UAnimNotifyState_TimedNiagaraEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimNotifyState_TimedNiagaraEffectAdvanced['__properties_UAnimNotifyState_TimedNiagaraEffectAdvanced'] &
        UAnimNotifyState_TimedNiagaraEffect['__propertyRegistry'];
}

declare interface UAnimNotify_PlayNiagaraEffect extends UAnimNotify {
    readonly __static_UAnimNotify_PlayNiagaraEffect: {
        GetSpawnedEffect(): UFXSystemComponent;
    };
    readonly __properties_UAnimNotify_PlayNiagaraEffect: {
        Template: UNiagaraSystem;
        LocationOffset: FVector;
        RotationOffset: FRotator;
        Scale: FVector;
        bAbsoluteScale: boolean;
        Attached: boolean;
        SocketName: string;
    };
    readonly __staticRegistry: 
        UAnimNotify_PlayNiagaraEffect['__static_UAnimNotify_PlayNiagaraEffect'] &
        UAnimNotify['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimNotify_PlayNiagaraEffect['__properties_UAnimNotify_PlayNiagaraEffect'] &
        UAnimNotify['__propertyRegistry'];
}

