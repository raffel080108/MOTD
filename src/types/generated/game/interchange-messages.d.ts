declare interface UInterchangeResultMeshError extends UInterchangeResultError {
    MeshName: FString;
}
declare const UInterchangeResultMeshError: UInterchangeResultMeshError;

declare interface UInterchangeResultMeshError_Generic extends UInterchangeResultMeshError {
    Text: FText;
}
declare const UInterchangeResultMeshError_Generic: UInterchangeResultMeshError_Generic;

declare interface UInterchangeResultMeshWarning extends UInterchangeResultWarning {
    MeshName: FString;
}
declare const UInterchangeResultMeshWarning: UInterchangeResultMeshWarning;

declare interface UInterchangeResultMeshWarning_Generic extends UInterchangeResultMeshWarning {
    Text: FText;
}
declare const UInterchangeResultMeshWarning_Generic: UInterchangeResultMeshWarning_Generic;

declare interface UInterchangeResultMeshWarning_TooManyUVs extends UInterchangeResultMeshWarning {
    ExcessUVs: number;
}
declare const UInterchangeResultMeshWarning_TooManyUVs: UInterchangeResultMeshWarning_TooManyUVs;

declare interface UInterchangeResultTextureDisplay extends UInterchangeResultDisplay_Generic {
    TextureName: FString;
}
declare const UInterchangeResultTextureDisplay: UInterchangeResultTextureDisplay;

declare interface UInterchangeResultTextureDisplay_TextureFileDoNotExist extends UInterchangeResultTextureDisplay {
    MaterialName: FString;
}
declare const UInterchangeResultTextureDisplay_TextureFileDoNotExist: UInterchangeResultTextureDisplay_TextureFileDoNotExist;

declare interface UInterchangeResultTextureWarning extends UInterchangeResultWarning {
    TextureName: FString;
}
declare const UInterchangeResultTextureWarning: UInterchangeResultTextureWarning;

