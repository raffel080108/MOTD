declare interface FEnvelopeFollowerGeneratorParams {
    bBypass: boolean;
    bInvert: boolean;
    AudioBus: UAudioBus;
    Gain: number;
    AttackTime: number;
    ReleaseTime: number;
}

declare interface FSoundControlBusMixStage {
    Bus: USoundControlBus;
    Value: FSoundModulationMixValue;
}

declare interface FSoundControlModulationInput {
    bSampleAndHold: boolean;
    Transform: FSoundModulationTransform;
    Bus: USoundControlBus;
}

declare interface FSoundControlModulationPatch {
    bBypass: boolean;
    OutputParameter: USoundModulationParameter;
    Inputs: FSoundControlModulationInput[];
}

declare interface FSoundModulationADEnvelopeParams {
    AttackTime: number;
    DecayTime: number;
    AttackCurve: number;
    DecayCurve: number;
    bLooping: boolean;
    bBypass: boolean;
}

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

declare interface FSoundModulationMixValue {
    TargetValue: number;
    AttackTime: number;
    ReleaseTime: number;
}

declare interface FSoundModulationParameterSettings {
    ValueNormalized: number;
}

declare interface FSoundModulationTransform extends FWaveTableTransform {

}

declare interface UAudioModulationDestination extends UObject {
    readonly __static_UAudioModulationDestination: {
        SetModulator(InModulator: USoundModulatorBase): boolean;
        GetValue(): number;
        GetModulator(): USoundModulatorBase;
        ClearModulator(): boolean;
    };
    readonly __properties_UAudioModulationDestination: {
        Modulator: USoundModulatorBase;
    };
    readonly __staticRegistry: 
        UAudioModulationDestination['__static_UAudioModulationDestination'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioModulationDestination['__properties_UAudioModulationDestination'] &
        UObject['__propertyRegistry'];
}

declare interface UAudioModulationSettings extends UDeveloperSettings {
    readonly __properties_UAudioModulationSettings: {
        Parameters: FSoftObjectPath[];
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioModulationSettings['__properties_UAudioModulationSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UAudioModulationStatics extends UBlueprintFunctionLibrary {
    readonly __static_UAudioModulationStatics: {
        UpdateModulator(WorldContextObject: UObject, Modulator: USoundModulatorBase): void;
        UpdateMixFromObject(WorldContextObject: UObject, mix: USoundControlBusMix, FadeTime: number): void;
        UpdateMixByFilter(WorldContextObject: UObject, mix: USoundControlBusMix, AddressFilter: string, ParamClassFilter: TSubclassOf<USoundModulationParameter>, ParamFilter: USoundModulationParameter, Value: number, FadeTime: number): void;
        UpdateMix(WorldContextObject: UObject, mix: USoundControlBusMix, Stages: FSoundControlBusMixStage[], FadeTime: number, duration: number, bRetriggerOnActivation: boolean): void;
        SetGlobalBusMixValue(WorldContextObject: UObject, Bus: USoundControlBus, Value: number, FadeTime: number): void;
        SaveMixToProfile(WorldContextObject: UObject, mix: USoundControlBusMix, ProfileIndex: number): void;
        LoadMixFromProfile(WorldContextObject: UObject, mix: USoundControlBusMix, bActivate: boolean, ProfileIndex: number): FSoundControlBusMixStage[];
        IsControlBusMixActive(WorldContextObject: UObject, mix: USoundControlBusMix): boolean;
        GetModulatorValue(WorldContextObject: UObject, Modulator: USoundModulatorBase): number;
        GetModulatorsFromDestination(Destination: FSoundModulationDestinationSettings): USoundModulatorBase[];
        DeactivateGenerator(WorldContextObject: UObject, Generator: USoundModulationGenerator): void;
        DeactivateBusMix(WorldContextObject: UObject, mix: USoundControlBusMix): void;
        DeactivateBus(WorldContextObject: UObject, Bus: USoundControlBus): void;
        DeactivateAllBusMixes(WorldContextObject: UObject): void;
        CreateModulationParameter(WorldContextObject: UObject, Name: string, ParamClass: TSubclassOf<USoundModulationParameter>, DefaultValue: number): USoundModulationParameter;
        CreateModulationDestination(WorldContextObject: UObject, Name: string, Modulator: USoundModulatorBase): UAudioModulationDestination;
        CreateLFOGenerator(WorldContextObject: UObject, Name: string, Params: FSoundModulationLFOParams): USoundModulationGeneratorLFO;
        CreateEnvelopeFollowerGenerator(WorldContextObject: UObject, Name: string, Params: FEnvelopeFollowerGeneratorParams): USoundModulationGeneratorEnvelopeFollower;
        CreateBusMixStage(WorldContextObject: UObject, Bus: USoundControlBus, Value: number, AttackTime: number, ReleaseTime: number): FSoundControlBusMixStage;
        CreateBusMixFromValue(WorldContextObject: UObject, Name: string, Buses: USoundControlBus[], Value: number, AttackTime: number, ReleaseTime: number, bActivate: boolean): USoundControlBusMix;
        CreateBusMix(WorldContextObject: UObject, Name: string, Stages: FSoundControlBusMixStage[], Activate: boolean, duration: number, bRetriggerOnActivation: boolean): USoundControlBusMix;
        CreateBus(WorldContextObject: UObject, Name: string, Parameter: USoundModulationParameter, Activate: boolean): USoundControlBus;
        CreateADEnvelopeGenerator(WorldContextObject: UObject, Name: string, Params: FSoundModulationADEnvelopeParams): USoundModulationGeneratorADEnvelope;
        ClearGlobalBusMixValue(WorldContextObject: UObject, Bus: USoundControlBus, FadeTime: number): void;
        ClearAllGlobalBusMixValues(WorldContextObject: UObject, FadeTime: number): void;
        ActivateGenerator(WorldContextObject: UObject, Generator: USoundModulationGenerator): void;
        ActivateBusMix(WorldContextObject: UObject, mix: USoundControlBusMix): void;
        ActivateBus(WorldContextObject: UObject, Bus: USoundControlBus): void;
    };
    readonly __staticRegistry: 
        UAudioModulationStatics['__static_UAudioModulationStatics'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UAudioModulationStyle extends UBlueprintFunctionLibrary {
    readonly __static_UAudioModulationStyle: {
        GetPatchColor(): FColor;
        GetParameterColor(): FColor;
        GetModulationGeneratorColor(): FColor;
        GetControlBusMixColor(): FColor;
        GetControlBusColor(): FColor;
    };
    readonly __staticRegistry: 
        UAudioModulationStyle['__static_UAudioModulationStyle'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface USoundControlBus extends USoundModulatorBase {
    readonly __properties_USoundControlBus: {
        bBypass: boolean;
        address: string;
        Generators: USoundModulationGenerator[];
        Parameter: USoundModulationParameter;
    };
    readonly __staticRegistry: 
        USoundModulatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundControlBus['__properties_USoundControlBus'] &
        USoundModulatorBase['__propertyRegistry'];
}

declare interface USoundControlBusMix extends UObject {
    readonly __static_USoundControlBusMix: {
        SoloMix(): void;
        SaveMixToProfile(): void;
        LoadMixFromProfile(): void;
        DeactivateMix(): void;
        DeactivateAllMixes(): void;
        ActivateMix(): void;
    };
    readonly __properties_USoundControlBusMix: {
        ProfileIndex: number;
        duration: number;
        bRetriggerOnActivation: boolean;
        MixStages: FSoundControlBusMixStage[];
    };
    readonly __staticRegistry: 
        USoundControlBusMix['__static_USoundControlBusMix'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundControlBusMix['__properties_USoundControlBusMix'] &
        UObject['__propertyRegistry'];
}

declare interface USoundModulationGenerator extends USoundModulatorBase {
    readonly __staticRegistry: 
        USoundModulatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulatorBase['__propertyRegistry'];
}

declare interface USoundModulationGeneratorADEnvelope extends USoundModulationGenerator {
    readonly __properties_USoundModulationGeneratorADEnvelope: {
        Params: FSoundModulationADEnvelopeParams;
    };
    readonly __staticRegistry: 
        USoundModulationGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationGeneratorADEnvelope['__properties_USoundModulationGeneratorADEnvelope'] &
        USoundModulationGenerator['__propertyRegistry'];
}

declare interface USoundModulationGeneratorEnvelopeFollower extends USoundModulationGenerator {
    readonly __properties_USoundModulationGeneratorEnvelopeFollower: {
        Params: FEnvelopeFollowerGeneratorParams;
    };
    readonly __staticRegistry: 
        USoundModulationGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationGeneratorEnvelopeFollower['__properties_USoundModulationGeneratorEnvelopeFollower'] &
        USoundModulationGenerator['__propertyRegistry'];
}

declare interface USoundModulationGeneratorLFO extends USoundModulationGenerator {
    readonly __properties_USoundModulationGeneratorLFO: {
        Params: FSoundModulationLFOParams;
    };
    readonly __staticRegistry: 
        USoundModulationGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationGeneratorLFO['__properties_USoundModulationGeneratorLFO'] &
        USoundModulationGenerator['__propertyRegistry'];
}

declare interface USoundModulationParameter extends UObject {
    readonly __properties_USoundModulationParameter: {
        Settings: FSoundModulationParameterSettings;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameter['__properties_USoundModulationParameter'] &
        UObject['__propertyRegistry'];
}

declare interface USoundModulationParameterAdditive extends USoundModulationParameter {
    readonly __properties_USoundModulationParameterAdditive: {
        UnitMin: number;
        UnitMax: number;
    };
    readonly __staticRegistry: 
        USoundModulationParameter['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameterAdditive['__properties_USoundModulationParameterAdditive'] &
        USoundModulationParameter['__propertyRegistry'];
}

declare interface USoundModulationParameterBipolar extends USoundModulationParameter {
    readonly __properties_USoundModulationParameterBipolar: {
        UnitRange: number;
    };
    readonly __staticRegistry: 
        USoundModulationParameter['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameterBipolar['__properties_USoundModulationParameterBipolar'] &
        USoundModulationParameter['__propertyRegistry'];
}

declare interface USoundModulationParameterFilterFrequency extends USoundModulationParameterFrequencyBase {
    readonly __staticRegistry: 
        USoundModulationParameterFrequencyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameterFrequencyBase['__propertyRegistry'];
}

declare interface USoundModulationParameterFrequency extends USoundModulationParameterFrequencyBase {
    readonly __properties_USoundModulationParameterFrequency: {
        UnitMin: number;
        UnitMax: number;
    };
    readonly __staticRegistry: 
        USoundModulationParameterFrequencyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameterFrequency['__properties_USoundModulationParameterFrequency'] &
        USoundModulationParameterFrequencyBase['__propertyRegistry'];
}

declare interface USoundModulationParameterFrequencyBase extends USoundModulationParameter {
    readonly __staticRegistry: 
        USoundModulationParameter['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameter['__propertyRegistry'];
}

declare interface USoundModulationParameterHPFFrequency extends USoundModulationParameterFilterFrequency {
    readonly __staticRegistry: 
        USoundModulationParameterFilterFrequency['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameterFilterFrequency['__propertyRegistry'];
}

declare interface USoundModulationParameterLPFFrequency extends USoundModulationParameterFilterFrequency {
    readonly __staticRegistry: 
        USoundModulationParameterFilterFrequency['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameterFilterFrequency['__propertyRegistry'];
}

declare interface USoundModulationParameterScaled extends USoundModulationParameter {
    readonly __properties_USoundModulationParameterScaled: {
        UnitMin: number;
        UnitMax: number;
    };
    readonly __staticRegistry: 
        USoundModulationParameter['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameterScaled['__properties_USoundModulationParameterScaled'] &
        USoundModulationParameter['__propertyRegistry'];
}

declare interface USoundModulationParameterVolume extends USoundModulationParameter {
    readonly __properties_USoundModulationParameterVolume: {
        MinVolume: number;
    };
    readonly __staticRegistry: 
        USoundModulationParameter['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationParameterVolume['__properties_USoundModulationParameterVolume'] &
        USoundModulationParameter['__propertyRegistry'];
}

declare interface USoundModulationPatch extends USoundModulatorBase {
    readonly __properties_USoundModulationPatch: {
        PatchSettings: FSoundControlModulationPatch;
    };
    readonly __staticRegistry: 
        USoundModulatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundModulationPatch['__properties_USoundModulationPatch'] &
        USoundModulatorBase['__propertyRegistry'];
}

