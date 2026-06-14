declare interface FInterchangeCurve {
    Keys: TArray<FInterchangeCurveKey>;
}
declare const FInterchangeCurve: FInterchangeCurve;

declare interface FInterchangeCurveKey {
    InterpMode: EInterchangeCurveInterpMode;
    TangentMode: EInterchangeCurveTangentMode;
    TangentWeightMode: EInterchangeCurveTangentWeightMode;
    Time: number;
    Value: number;
    ArriveTangent: number;
    ArriveTangentWeight: number;
    LeaveTangent: number;
    LeaveTangentWeight: number;
}
declare const FInterchangeCurveKey: FInterchangeCurveKey;

declare interface FInterchangeStepCurve {
    KeyTimes: TArray<number>;
}
declare const FInterchangeStepCurve: FInterchangeStepCurve;

