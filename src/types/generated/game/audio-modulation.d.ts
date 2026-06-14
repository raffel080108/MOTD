declare interface FEnvelopeFollowerGeneratorParams {
    bBypass: boolean;
    bInvert: boolean;
    AudioBus: UAudioBus;
    Gain: number;
    AttackTime: number;
    ReleaseTime: number;
}
declare const FEnvelopeFollowerGeneratorParams: FEnvelopeFollowerGeneratorParams;

declare interface FSoundControlBusMixStage {
    Bus: USoundControlBus;
    Value: FSoundModulationMixValue;
}
declare const FSoundControlBusMixStage: FSoundControlBusMixStage;

declare interface FSoundControlModulationInput {
    bSampleAndHold: boolean;
    Transform: FSoundModulationTransform;
    Bus: USoundControlBus;
}
declare const FSoundControlModulationInput: FSoundControlModulationInput;

declare interface FSoundControlModulationPatch {
    bBypass: boolean;
    OutputParameter: USoundModulationParameter;
    Inputs: TArray<FSoundControlModulationInput>;
}
declare const FSoundControlModulationPatch: FSoundControlModulationPatch;

declare interface FSoundModulationADEnvelopeParams {
    AttackTime: number;
    DecayTime: number;
    AttackCurve: number;
    DecayCurve: number;
    bLooping: boolean;
    bBypass: boolean;
}
declare const FSoundModulationADEnvelopeParams: FSoundModulationADEnvelopeParams;

declare interface FSoundModulationLFOParams {
    Shape: ESoundModulationLFOShape;
    ExponentialFactor: number;
    Width: number;
    Amplitude: number;
    Frequency: number;
    Offset: number;
    Phase: number;
    bLooping: boolean;
    bBypass: boolean;
}
declare const FSoundModulationLFOParams: FSoundModulationLFOParams;

declare interface FSoundModulationMixValue {
    TargetValue: number;
    AttackTime: number;
    ReleaseTime: number;
}
declare const FSoundModulationMixValue: FSoundModulationMixValue;

declare interface FSoundModulationParameterSettings {
    ValueNormalized: number;
}
declare const FSoundModulationParameterSettings: FSoundModulationParameterSettings;

declare interface FSoundModulationTransform extends FWaveTableTransform {

}
declare const FSoundModulationTransform: FSoundModulationTransform;

declare interface UAudioModulationDestination extends UObject {
    Modulator: USoundModulatorBase;
    SetModulator(InModulator: USoundModulatorBase): boolean;
    GetValue(): number;
    GetModulator(): USoundModulatorBase;
    ClearModulator(): boolean;
}
declare const UAudioModulationDestination: UAudioModulationDestination;

declare interface UAudioModulationSettings extends UDeveloperSettings {
    Parameters: TArray<FSoftObjectPath>;
}
declare const UAudioModulationSettings: UAudioModulationSettings;

declare interface UAudioModulationStatics extends UBlueprintFunctionLibrary {
    UpdateModulator(WorldContextObject: UObject, Modulator: USoundModulatorBase): void;
    UpdateMixFromObject(WorldContextObject: UObject, mix: USoundControlBusMix, FadeTime: number): void;
    UpdateMixByFilter(WorldContextObject: UObject, mix: USoundControlBusMix, AddressFilter: string | FString, ParamClassFilter: TSubclassOf<USoundModulationParameter>, ParamFilter: USoundModulationParameter, Value: number, FadeTime: number): void;
    UpdateMix(WorldContextObject: UObject, mix: USoundControlBusMix, Stages: TArray<FSoundControlBusMixStage>, FadeTime: number, duration: number, bRetriggerOnActivation: boolean): void;
    SetGlobalBusMixValue(WorldContextObject: UObject, Bus: USoundControlBus, Value: number, FadeTime: number): void;
    SaveMixToProfile(WorldContextObject: UObject, mix: USoundControlBusMix, ProfileIndex: number): void;
    LoadMixFromProfile(WorldContextObject: UObject, mix: USoundControlBusMix, bActivate: boolean, ProfileIndex: number): TArray<FSoundControlBusMixStage>;
    IsControlBusMixActive(WorldContextObject: UObject, mix: USoundControlBusMix): boolean;
    GetModulatorValue(WorldContextObject: UObject, Modulator: USoundModulatorBase): number;
    GetModulatorsFromDestination(Destination: FSoundModulationDestinationSettings): TSet<USoundModulatorBase>;
    DeactivateGenerator(WorldContextObject: UObject, Generator: USoundModulationGenerator): void;
    DeactivateBusMix(WorldContextObject: UObject, mix: USoundControlBusMix): void;
    DeactivateBus(WorldContextObject: UObject, Bus: USoundControlBus): void;
    DeactivateAllBusMixes(WorldContextObject: UObject): void;
    CreateModulationParameter(WorldContextObject: UObject, Name: FName, ParamClass: TSubclassOf<USoundModulationParameter>, DefaultValue: number): USoundModulationParameter;
    CreateModulationDestination(WorldContextObject: UObject, Name: FName, Modulator: USoundModulatorBase): UAudioModulationDestination;
    CreateLFOGenerator(WorldContextObject: UObject, Name: FName, Params: FSoundModulationLFOParams): USoundModulationGeneratorLFO;
    CreateEnvelopeFollowerGenerator(WorldContextObject: UObject, Name: FName, Params: FEnvelopeFollowerGeneratorParams): USoundModulationGeneratorEnvelopeFollower;
    CreateBusMixStage(WorldContextObject: UObject, Bus: USoundControlBus, Value: number, AttackTime: number, ReleaseTime: number): FSoundControlBusMixStage;
    CreateBusMixFromValue(WorldContextObject: UObject, Name: FName, Buses: TArray<USoundControlBus>, Value: number, AttackTime: number, ReleaseTime: number, bActivate: boolean): USoundControlBusMix;
    CreateBusMix(WorldContextObject: UObject, Name: FName, Stages: TArray<FSoundControlBusMixStage>, Activate: boolean, duration: number, bRetriggerOnActivation: boolean): USoundControlBusMix;
    CreateBus(WorldContextObject: UObject, Name: FName, Parameter: USoundModulationParameter, Activate: boolean): USoundControlBus;
    CreateADEnvelopeGenerator(WorldContextObject: UObject, Name: FName, Params: FSoundModulationADEnvelopeParams): USoundModulationGeneratorADEnvelope;
    ClearGlobalBusMixValue(WorldContextObject: UObject, Bus: USoundControlBus, FadeTime: number): void;
    ClearAllGlobalBusMixValues(WorldContextObject: UObject, FadeTime: number): void;
    ActivateGenerator(WorldContextObject: UObject, Generator: USoundModulationGenerator): void;
    ActivateBusMix(WorldContextObject: UObject, mix: USoundControlBusMix): void;
    ActivateBus(WorldContextObject: UObject, Bus: USoundControlBus): void;
}
declare const UAudioModulationStatics: UAudioModulationStatics;

declare interface UAudioModulationStyle extends UBlueprintFunctionLibrary {
    GetPatchColor(): FColor;
    GetParameterColor(): FColor;
    GetModulationGeneratorColor(): FColor;
    GetControlBusMixColor(): FColor;
    GetControlBusColor(): FColor;
}
declare const UAudioModulationStyle: UAudioModulationStyle;

declare interface USoundControlBus extends USoundModulatorBase {
    bBypass: boolean;
    address: FString;
    Generators: TArray<USoundModulationGenerator>;
    Parameter: USoundModulationParameter;
}
declare const USoundControlBus: USoundControlBus;

declare interface USoundControlBusMix extends UObject {
    ProfileIndex: uint32;
    duration: number;
    bRetriggerOnActivation: boolean;
    MixStages: TArray<FSoundControlBusMixStage>;
    SoloMix(): void;
    SaveMixToProfile(): void;
    LoadMixFromProfile(): void;
    DeactivateMix(): void;
    DeactivateAllMixes(): void;
    ActivateMix(): void;
}
declare const USoundControlBusMix: USoundControlBusMix;

declare interface USoundModulationGenerator extends USoundModulatorBase {

}
declare const USoundModulationGenerator: USoundModulationGenerator;

declare interface USoundModulationGeneratorADEnvelope extends USoundModulationGenerator {
    Params: FSoundModulationADEnvelopeParams;
}
declare const USoundModulationGeneratorADEnvelope: USoundModulationGeneratorADEnvelope;

declare interface USoundModulationGeneratorEnvelopeFollower extends USoundModulationGenerator {
    Params: FEnvelopeFollowerGeneratorParams;
}
declare const USoundModulationGeneratorEnvelopeFollower: USoundModulationGeneratorEnvelopeFollower;

declare interface USoundModulationGeneratorLFO extends USoundModulationGenerator {
    Params: FSoundModulationLFOParams;
}
declare const USoundModulationGeneratorLFO: USoundModulationGeneratorLFO;

declare interface USoundModulationParameter extends UObject {
    Settings: FSoundModulationParameterSettings;
}
declare const USoundModulationParameter: USoundModulationParameter;

declare interface USoundModulationParameterAdditive extends USoundModulationParameter {
    UnitMin: number;
    UnitMax: number;
}
declare const USoundModulationParameterAdditive: USoundModulationParameterAdditive;

declare interface USoundModulationParameterBipolar extends USoundModulationParameter {
    UnitRange: number;
}
declare const USoundModulationParameterBipolar: USoundModulationParameterBipolar;

declare interface USoundModulationParameterFilterFrequency extends USoundModulationParameterFrequencyBase {

}
declare const USoundModulationParameterFilterFrequency: USoundModulationParameterFilterFrequency;

declare interface USoundModulationParameterFrequency extends USoundModulationParameterFrequencyBase {
    UnitMin: number;
    UnitMax: number;
}
declare const USoundModulationParameterFrequency: USoundModulationParameterFrequency;

declare interface USoundModulationParameterFrequencyBase extends USoundModulationParameter {

}
declare const USoundModulationParameterFrequencyBase: USoundModulationParameterFrequencyBase;

declare interface USoundModulationParameterHPFFrequency extends USoundModulationParameterFilterFrequency {

}
declare const USoundModulationParameterHPFFrequency: USoundModulationParameterHPFFrequency;

declare interface USoundModulationParameterLPFFrequency extends USoundModulationParameterFilterFrequency {

}
declare const USoundModulationParameterLPFFrequency: USoundModulationParameterLPFFrequency;

declare interface USoundModulationParameterScaled extends USoundModulationParameter {
    UnitMin: number;
    UnitMax: number;
}
declare const USoundModulationParameterScaled: USoundModulationParameterScaled;

declare interface USoundModulationParameterVolume extends USoundModulationParameter {
    MinVolume: number;
}
declare const USoundModulationParameterVolume: USoundModulationParameterVolume;

declare interface USoundModulationPatch extends USoundModulatorBase {
    PatchSettings: FSoundControlModulationPatch;
}
declare const USoundModulationPatch: USoundModulationPatch;

