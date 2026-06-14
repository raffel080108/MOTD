declare const enum EDatasmithAreaLightActorShape {
    Rectangle = 0,
    Disc = 1,
    Sphere = 2,
    Cylinder = 3,
    None = 4
}

declare const enum EDatasmithAreaLightActorType {
    Point = 0,
    Spot = 1,
    IES_DEPRECATED = 2,
    Rect = 3
}

declare const enum EDatasmithCADRetessellationRule {
    All = 0,
    SkipDeletedSurfaces = 1
}

declare const enum EDatasmithCADStitchingTechnique {
    StitchingNone = 0,
    StitchingHeal = 1,
    StitchingSew = 2
}

declare const enum EDatasmithImportActorPolicy {
    Update = 0,
    Full = 1,
    Ignore = 2
}

declare const enum EDatasmithImportAssetConflictPolicy {
    Replace = 0,
    Update = 1,
    Use = 2,
    Ignore = 3
}

declare const enum EDatasmithImportLightmapMax {
    LIGHTMAP_64 = 0,
    LIGHTMAP_128 = 1,
    LIGHTMAP_256 = 2,
    LIGHTMAP_512 = 3,
    LIGHTMAP_1024 = 4,
    LIGHTMAP_2048 = 5,
    LIGHTMAP_4096 = 6
}

declare const enum EDatasmithImportLightmapMin {
    LIGHTMAP_16 = 0,
    LIGHTMAP_32 = 1,
    LIGHTMAP_64 = 2,
    LIGHTMAP_128 = 3,
    LIGHTMAP_256 = 4,
    LIGHTMAP_512 = 5
}

declare const enum EDatasmithImportMaterialQuality {
    UseNoFresnelCurves = 0,
    UseSimplifierFresnelCurves = 1,
    UseRealFresnelCurves = 2
}

declare const enum EDatasmithImportScene {
    NewLevel = 0,
    CurrentLevel = 1,
    AssetsOnly = 2
}

declare const enum EDatasmithImportSearchPackagePolicy {
    Current = 0,
    All = 1
}

