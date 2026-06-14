declare const enum EComponentMaterialType {
    Empty = 0,
    IndexedMaterial = 1,
    OverlayMaterial = 2,
    DecalMaterial = 3,
    VolumetricCloudMaterial = 4
}

declare const enum EFireEventsAtPosition {
    AtStartOfEvaluation = 0,
    AtEndOfEvaluation = 1,
    AfterSpawn = 2
}

declare const enum ELevelVisibility {
    Visible = 0,
    Hidden = 1
}

declare const enum EMovieSceneScalabilityConditionGroup {
    ViewDistance = 0,
    AntiAliasing = 1,
    Shadow = 2,
    GlobalIllumination = 3,
    Reflection = 4,
    PostProcess = 5,
    Texture = 6,
    Effects = 7,
    Foliage = 8,
    Shading = 9,
    Landscape = 10
}

declare const enum EMovieSceneScalabilityConditionLevel {
    Low = 0,
    Medium = 1,
    High = 2,
    Epic = 3,
    Cinematic = 4
}

declare const enum EMovieSceneScalabilityConditionOperator {
    LessThan = 0,
    LessThanOrEqualTo = 1,
    EqualTo = 2,
    GreaterThanOrEqualTo = 3,
    GreaterThan = 4
}

declare const enum EParticleKey {
    Activate = 0,
    Deactivate = 1,
    Trigger = 2
}

declare const enum MovieScene3DPathSection_Axis {
    X = 0,
    Y = 1,
    Z = 2,
    NEG_X = 3,
    NEG_Y = 4,
    NEG_Z = 5
}

