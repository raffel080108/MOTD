declare interface ACameraRig_Crane extends AActor {
    readonly __properties_ACameraRig_Crane: {
        CranePitch: number;
        CraneYaw: number;
        CraneArmLength: number;
        bLockMountPitch: boolean;
        bLockMountYaw: boolean;
        TransformComponent: USceneComponent;
        CraneYawControl: USceneComponent;
        CranePitchControl: USceneComponent;
        CraneCameraMount: USceneComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ACameraRig_Crane['__properties_ACameraRig_Crane'] &
        AActor['__propertyRegistry'];
}

declare interface ACameraRig_Rail extends AActor {
    readonly __static_ACameraRig_Rail: {
        GetRailSplineComponent(): USplineComponent;
    };
    readonly __properties_ACameraRig_Rail: {
        CurrentPositionOnRail: number;
        bLockOrientationToRail: boolean;
        TransformComponent: USceneComponent;
        RailSplineComponent: USplineComponent;
        RailCameraMount: USceneComponent;
    };
    readonly __staticRegistry: 
        ACameraRig_Rail['__static_ACameraRig_Rail'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ACameraRig_Rail['__properties_ACameraRig_Rail'] &
        AActor['__propertyRegistry'];
}

declare interface ACineCameraActor extends ACameraActor {
    readonly __static_ACineCameraActor: {
        GetCineCameraComponent(): UCineCameraComponent;
    };
    readonly __properties_ACineCameraActor: {
        LookatTrackingSettings: FCameraLookatTrackingSettings;
    };
    readonly __staticRegistry: 
        ACineCameraActor['__static_ACineCameraActor'] &
        ACameraActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ACineCameraActor['__properties_ACineCameraActor'] &
        ACameraActor['__propertyRegistry'];
}

declare interface FCameraFilmbackSettings {
    SensorWidth: number;
    SensorHeight: number;
    SensorHorizontalOffset: number;
    SensorVerticalOffset: number;
    SensorAspectRatio: number;
}

declare interface FCameraFocusSettings {
    FocusMethod: ECameraFocusMethod;
    ManualFocusDistance: number;
    TrackingFocusSettings: FCameraTrackingFocusSettings;
    bSmoothFocusChanges: boolean;
    FocusSmoothingInterpSpeed: number;
    FocusOffset: number;
}

declare interface FCameraLensSettings {
    MinFocalLength: number;
    MaxFocalLength: number;
    MinFStop: number;
    MaxFStop: number;
    MinimumFocusDistance: number;
    SqueezeFactor: number;
    DiaphragmBladeCount: number;
}

declare interface FCameraLookatTrackingSettings {
    bEnableLookAtTracking: boolean;
    bDrawDebugLookAtTrackingPosition: boolean;
    LookAtTrackingInterpSpeed: number;
    ActorToTrack: TSoftObjectPtr<AActor>;
    RelativeOffset: FVector;
    bAllowRoll: boolean;
}

declare interface FCameraTrackingFocusSettings {
    ActorToTrack: TSoftObjectPtr<AActor>;
    RelativeOffset: FVector;
    bDrawDebugTrackingFocusPoint: boolean;
}

declare interface FNamedFilmbackPreset {
    Name: string;
    DisplayName: string;
    FilmbackSettings: FCameraFilmbackSettings;
}

declare interface FNamedLensPreset {
    Name: string;
    LensSettings: FCameraLensSettings;
}

declare interface FNamedPlateCropPreset {
    Name: string;
    CropSettings: FPlateCropSettings;
}

declare interface FPlateCropSettings {
    AspectRatio: number;
}

declare interface UCineCameraComponent extends UCameraComponent {
    readonly __static_UCineCameraComponent: {
        SetLensSettings(NewLensSettings: FCameraLensSettings): void;
        SetLensPresetByName(InPresetName: string): void;
        SetFocusSettings(NewFocusSettings: FCameraFocusSettings): void;
        SetFilmbackPresetByName(InPresetName: string): void;
        SetFilmback(NewFilmback: FCameraFilmbackSettings): void;
        SetCustomNearClippingPlane(NewCustomNearClippingPlane: number): void;
        SetCurrentFocalLength(InFocalLength: number): void;
        SetCurrentAperture(NewCurrentAperture: number): void;
        SetCropSettings(NewCropSettings: FPlateCropSettings): void;
        SetCropPresetByName(InPresetName: string): void;
        GetVerticalProjectionOffset(): number;
        GetVerticalFieldOfView(): number;
        GetLensPresetsCopy(): FNamedLensPreset[];
        GetLensPresetName(): string;
        GetHorizontalProjectionOffset(): number;
        GetHorizontalFieldOfView(): number;
        GetFilmbackPresetsCopy(): FNamedFilmbackPreset[];
        GetFilmbackPresetName(): string;
        GetDefaultFilmbackPresetName(): string;
        GetCropPresetName(): string;
    };
    readonly __properties_UCineCameraComponent: {
        FilmbackSettings: FCameraFilmbackSettings;
        Filmback: FCameraFilmbackSettings;
        LensSettings: FCameraLensSettings;
        FocusSettings: FCameraFocusSettings;
        CropSettings: FPlateCropSettings;
        CurrentFocalLength: number;
        CurrentAperture: number;
        CurrentFocusDistance: number;
        bOverride_CustomNearClippingPlane: boolean;
        CustomNearClippingPlane: number;
        FilmbackPresets: FNamedFilmbackPreset[];
        LensPresets: FNamedLensPreset[];
        DefaultFilmbackPresetName: string;
        DefaultFilmbackPreset: string;
        DefaultLensPresetName: string;
        DefaultLensFocalLength: number;
        DefaultLensFStop: number;
    };
    readonly __staticRegistry: 
        UCineCameraComponent['__static_UCineCameraComponent'] &
        UCameraComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCineCameraComponent['__properties_UCineCameraComponent'] &
        UCameraComponent['__propertyRegistry'];
}

declare interface UCineCameraSettings extends UDeveloperSettings {
    readonly __static_UCineCameraSettings: {
        SetLensPresets(InLensPresets: FNamedLensPreset[]): void;
        SetFilmbackPresets(InFilmbackPresets: FNamedFilmbackPreset[]): void;
        SetDefaultLensPresetName(InDefaultLensPresetName: string): void;
        SetDefaultLensFStop(InDefaultLensFStop: number): void;
        SetDefaultLensFocalLength(InDefaultLensFocalLength: number): void;
        SetDefaultFilmbackPreset(InDefaultFilmbackPreset: string): void;
        SetDefaultCropPresetName(InDefaultCropPresetName: string): void;
        SetCropPresets(InCropPresets: FNamedPlateCropPreset[]): void;
        GetLensPresetNames(): string[];
        GetLensPresetByName(PresetName: string, LensSettings: FCameraLensSettings): boolean;
        GetFilmbackPresetNames(): string[];
        GetFilmbackPresetByName(PresetName: string, FilmbackSettings: FCameraFilmbackSettings): boolean;
        GetCropPresetNames(): string[];
        GetCropPresetByName(PresetName: string, CropSettings: FPlateCropSettings): boolean;
        GetCineCameraSettings(): UCineCameraSettings;
    };
    readonly __properties_UCineCameraSettings: {
        DefaultLensPresetName: string;
        DefaultLensFocalLength: number;
        DefaultLensFStop: number;
        LensPresets: FNamedLensPreset[];
        DefaultFilmbackPreset: string;
        FilmbackPresets: FNamedFilmbackPreset[];
        DefaultCropPresetName: string;
        CropPresets: FNamedPlateCropPreset[];
    };
    readonly __staticRegistry: 
        UCineCameraSettings['__static_UCineCameraSettings'] &
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UCineCameraSettings['__properties_UCineCameraSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

