declare interface ACameraRig_Crane extends AActor {
    CranePitch: number;
    CraneYaw: number;
    CraneArmLength: number;
    bLockMountPitch: boolean;
    bLockMountYaw: boolean;
    TransformComponent: USceneComponent;
    CraneYawControl: USceneComponent;
    CranePitchControl: USceneComponent;
    CraneCameraMount: USceneComponent;
}
declare const ACameraRig_Crane: ACameraRig_Crane;

declare interface ACameraRig_Rail extends AActor {
    CurrentPositionOnRail: number;
    bLockOrientationToRail: boolean;
    TransformComponent: USceneComponent;
    RailSplineComponent: USplineComponent;
    RailCameraMount: USceneComponent;
    GetRailSplineComponent(): USplineComponent;
}
declare const ACameraRig_Rail: ACameraRig_Rail;

declare interface ACineCameraActor extends ACameraActor {
    LookatTrackingSettings: FCameraLookatTrackingSettings;
    GetCineCameraComponent(): UCineCameraComponent;
}
declare const ACineCameraActor: ACineCameraActor;

declare interface FCameraFilmbackSettings {
    SensorWidth: number;
    SensorHeight: number;
    SensorHorizontalOffset: number;
    SensorVerticalOffset: number;
    SensorAspectRatio: number;
}
declare const FCameraFilmbackSettings: FCameraFilmbackSettings;

declare interface FCameraFocusSettings {
    FocusMethod: ECameraFocusMethod;
    ManualFocusDistance: number;
    TrackingFocusSettings: FCameraTrackingFocusSettings;
    bSmoothFocusChanges: boolean;
    FocusSmoothingInterpSpeed: number;
    FocusOffset: number;
}
declare const FCameraFocusSettings: FCameraFocusSettings;

declare interface FCameraLensSettings {
    MinFocalLength: number;
    MaxFocalLength: number;
    MinFStop: number;
    MaxFStop: number;
    MinimumFocusDistance: number;
    SqueezeFactor: number;
    DiaphragmBladeCount: number;
}
declare const FCameraLensSettings: FCameraLensSettings;

declare interface FCameraLookatTrackingSettings {
    bEnableLookAtTracking: boolean;
    bDrawDebugLookAtTrackingPosition: boolean;
    LookAtTrackingInterpSpeed: number;
    ActorToTrack: TSoftObjectPtr<AActor>;
    RelativeOffset: FVector;
    bAllowRoll: boolean;
}
declare const FCameraLookatTrackingSettings: FCameraLookatTrackingSettings;

declare interface FCameraTrackingFocusSettings {
    ActorToTrack: TSoftObjectPtr<AActor>;
    RelativeOffset: FVector;
    bDrawDebugTrackingFocusPoint: boolean;
}
declare const FCameraTrackingFocusSettings: FCameraTrackingFocusSettings;

declare interface FNamedFilmbackPreset {
    Name: FString;
    DisplayName: FText;
    FilmbackSettings: FCameraFilmbackSettings;
}
declare const FNamedFilmbackPreset: FNamedFilmbackPreset;

declare interface FNamedLensPreset {
    Name: FString;
    LensSettings: FCameraLensSettings;
}
declare const FNamedLensPreset: FNamedLensPreset;

declare interface FNamedPlateCropPreset {
    Name: FString;
    CropSettings: FPlateCropSettings;
}
declare const FNamedPlateCropPreset: FNamedPlateCropPreset;

declare interface FPlateCropSettings {
    AspectRatio: number;
}
declare const FPlateCropSettings: FPlateCropSettings;

declare interface UCineCameraComponent extends UCameraComponent {
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
    FilmbackPresets: TArray<FNamedFilmbackPreset>;
    LensPresets: TArray<FNamedLensPreset>;
    DefaultFilmbackPresetName: FString;
    DefaultFilmbackPreset: FString;
    DefaultLensPresetName: FString;
    DefaultLensFocalLength: number;
    DefaultLensFStop: number;
    SetLensSettings(NewLensSettings: FCameraLensSettings): void;
    SetLensPresetByName(InPresetName: string | FString): void;
    SetFocusSettings(NewFocusSettings: FCameraFocusSettings): void;
    SetFilmbackPresetByName(InPresetName: string | FString): void;
    SetFilmback(NewFilmback: FCameraFilmbackSettings): void;
    SetCustomNearClippingPlane(NewCustomNearClippingPlane: number): void;
    SetCurrentFocalLength(InFocalLength: number): void;
    SetCurrentAperture(NewCurrentAperture: number): void;
    SetCropSettings(NewCropSettings: FPlateCropSettings): void;
    SetCropPresetByName(InPresetName: string | FString): void;
    GetVerticalProjectionOffset(): number;
    GetVerticalFieldOfView(): number;
    GetLensPresetsCopy(): TArray<FNamedLensPreset>;
    GetLensPresetName(): FString;
    GetHorizontalProjectionOffset(): number;
    GetHorizontalFieldOfView(): number;
    GetFilmbackPresetsCopy(): TArray<FNamedFilmbackPreset>;
    GetFilmbackPresetName(): FString;
    GetDefaultFilmbackPresetName(): FString;
    GetCropPresetName(): FString;
}
declare const UCineCameraComponent: UCineCameraComponent;

declare interface UCineCameraSettings extends UDeveloperSettings {
    DefaultLensPresetName: FString;
    DefaultLensFocalLength: number;
    DefaultLensFStop: number;
    LensPresets: TArray<FNamedLensPreset>;
    DefaultFilmbackPreset: FString;
    FilmbackPresets: TArray<FNamedFilmbackPreset>;
    DefaultCropPresetName: FString;
    CropPresets: TArray<FNamedPlateCropPreset>;
    SetLensPresets(InLensPresets: TArray<FNamedLensPreset>): void;
    SetFilmbackPresets(InFilmbackPresets: TArray<FNamedFilmbackPreset>): void;
    SetDefaultLensPresetName(InDefaultLensPresetName: string | FString): void;
    SetDefaultLensFStop(InDefaultLensFStop: number): void;
    SetDefaultLensFocalLength(InDefaultLensFocalLength: number): void;
    SetDefaultFilmbackPreset(InDefaultFilmbackPreset: string | FString): void;
    SetDefaultCropPresetName(InDefaultCropPresetName: string | FString): void;
    SetCropPresets(InCropPresets: TArray<FNamedPlateCropPreset>): void;
    GetLensPresetNames(): TArray<FString>;
    GetLensPresetByName(PresetName: string | FString, LensSettings: FCameraLensSettings): boolean;
    GetFilmbackPresetNames(): TArray<FString>;
    GetFilmbackPresetByName(PresetName: string | FString, FilmbackSettings: FCameraFilmbackSettings): boolean;
    GetCropPresetNames(): TArray<FString>;
    GetCropPresetByName(PresetName: string | FString, CropSettings: FPlateCropSettings): boolean;
    GetCineCameraSettings(): UCineCameraSettings;
}
declare const UCineCameraSettings: UCineCameraSettings;

