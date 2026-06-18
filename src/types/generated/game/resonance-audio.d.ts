declare interface AResonanceAudioDirectivityVisualizer extends AActor {
    readonly __properties_AResonanceAudioDirectivityVisualizer: {
        Material: UMaterial;
        Settings: UResonanceAudioSpatializationSourceSettings;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AResonanceAudioDirectivityVisualizer['__properties_AResonanceAudioDirectivityVisualizer'] &
        AActor['__propertyRegistry'];
}

declare interface FResonanceAudioReverbPluginSettings {
    bEnableRoomEffects: boolean;
    bGetTransformFromAudioVolume: boolean;
    RoomPosition: FVector;
    RoomRotation: FQuat;
    RoomDimensions: FVector;
    LeftWallMaterial: ERaMaterialName;
    RightWallMaterial: ERaMaterialName;
    FloorMaterial: ERaMaterialName;
    CeilingMaterial: ERaMaterialName;
    FrontWallMaterial: ERaMaterialName;
    BackWallMaterial: ERaMaterialName;
    ReflectionScalar: number;
    ReverbGain: number;
    ReverbTimeModifier: number;
    ReverbBrightness: number;
}

declare interface UResonanceAudioBlueprintFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UResonanceAudioBlueprintFunctionLibrary: {
        SetGlobalReverbPreset(InPreset: UResonanceAudioReverbPluginPreset): void;
        GetGlobalReverbPreset(): UResonanceAudioReverbPluginPreset;
    };
    readonly __staticRegistry: 
        UResonanceAudioBlueprintFunctionLibrary['__static_UResonanceAudioBlueprintFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UResonanceAudioReverbPluginPreset extends USoundEffectSubmixPreset {
    readonly __static_UResonanceAudioReverbPluginPreset: {
        SetRoomRotation(InRotation: FQuat): void;
        SetRoomPosition(InPosition: FVector): void;
        SetRoomMaterials(InMaterials: ERaMaterialName[]): void;
        SetRoomDimensions(InDimensions: FVector): void;
        SetReverbTimeModifier(InReverbTimeModifier: number): void;
        SetReverbGain(InReverbGain: number): void;
        SetReverbBrightness(InReverbBrightness: number): void;
        SetReflectionScalar(InReflectionScalar: number): void;
        SetEnableRoomEffects(bInEnableRoomEffects: boolean): void;
    };
    readonly __properties_UResonanceAudioReverbPluginPreset: {
        Settings: FResonanceAudioReverbPluginSettings;
    };
    readonly __staticRegistry: 
        UResonanceAudioReverbPluginPreset['__static_UResonanceAudioReverbPluginPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        UResonanceAudioReverbPluginPreset['__properties_UResonanceAudioReverbPluginPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface UResonanceAudioSettings extends UObject {
    readonly __properties_UResonanceAudioSettings: {
        OutputSubmix: FSoftObjectPath;
        QualityMode: ERaQualityMode;
        GlobalReverbPreset: FSoftObjectPath;
        GlobalSourcePreset: FSoftObjectPath;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UResonanceAudioSettings['__properties_UResonanceAudioSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UResonanceAudioSoundfieldSettings extends USoundfieldEncodingSettingsBase {
    readonly __properties_UResonanceAudioSoundfieldSettings: {
        RenderMode: EResonanceRenderMode;
    };
    readonly __staticRegistry: 
        USoundfieldEncodingSettingsBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UResonanceAudioSoundfieldSettings['__properties_UResonanceAudioSoundfieldSettings'] &
        USoundfieldEncodingSettingsBase['__propertyRegistry'];
}

declare interface UResonanceAudioSpatializationSourceSettings extends USpatializationPluginSourceSettingsBase {
    readonly __static_UResonanceAudioSpatializationSourceSettings: {
        SetSoundSourceSpread(InSpread: number): void;
        SetSoundSourceDirectivity(InPattern: number, InSharpness: number): void;
    };
    readonly __properties_UResonanceAudioSpatializationSourceSettings: {
        SpatializationMethod: ERaSpatializationMethod;
        Pattern: number;
        Sharpness: number;
        bToggleVisualization: boolean;
        Scale: number;
        Spread: number;
        Rolloff: ERaDistanceRolloffModel;
        MinDistance: number;
        MaxDistance: number;
    };
    readonly __staticRegistry: 
        UResonanceAudioSpatializationSourceSettings['__static_UResonanceAudioSpatializationSourceSettings'] &
        USpatializationPluginSourceSettingsBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UResonanceAudioSpatializationSourceSettings['__properties_UResonanceAudioSpatializationSourceSettings'] &
        USpatializationPluginSourceSettingsBase['__propertyRegistry'];
}

