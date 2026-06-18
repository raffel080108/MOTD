declare interface FInterchangeCurve {
    Keys: FInterchangeCurveKey[];
}

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

declare interface FInterchangeStepCurve {
    KeyTimes: number[];
}

