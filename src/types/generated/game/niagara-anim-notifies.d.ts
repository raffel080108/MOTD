declare interface FCurveParameterPair {
    AnimCurveName: FName;
    UserVariableName: FName;
}
declare const FCurveParameterPair: FCurveParameterPair;

declare interface UAnimNotifyState_TimedNiagaraEffect extends UAnimNotifyState {
    Template: UNiagaraSystem;
    SocketName: FName;
    LocationOffset: FVector;
    RotationOffset: FRotator;
    Scale: FVector;
    bApplyRateScaleAsTimeDilation: boolean;
    bDestroyAtEnd: boolean;
    GetSpawnedEffect(MeshComp: UMeshComponent): UFXSystemComponent;
}
declare const UAnimNotifyState_TimedNiagaraEffect: UAnimNotifyState_TimedNiagaraEffect;

declare interface UAnimNotifyState_TimedNiagaraEffectAdvanced extends UAnimNotifyState_TimedNiagaraEffect {
    bEnableNormalizedNotifyProgress: boolean;
    bApplyRateScaleToProgress: boolean;
    NotifyProgressUserParameter: FName;
    AnimCurves: TArray<FCurveParameterPair>;
    GetNotifyProgress(MeshComp: UMeshComponent): number;
}
declare const UAnimNotifyState_TimedNiagaraEffectAdvanced: UAnimNotifyState_TimedNiagaraEffectAdvanced;

declare interface UAnimNotify_PlayNiagaraEffect extends UAnimNotify {
    Template: UNiagaraSystem;
    LocationOffset: FVector;
    RotationOffset: FRotator;
    Scale: FVector;
    bAbsoluteScale: boolean;
    Attached: boolean;
    SocketName: FName;
    GetSpawnedEffect(): UFXSystemComponent;
}
declare const UAnimNotify_PlayNiagaraEffect: UAnimNotify_PlayNiagaraEffect;

