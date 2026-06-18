declare interface UInterchangeResultMeshError extends UInterchangeResultError {
    readonly __properties_UInterchangeResultMeshError: {
        MeshName: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultError['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultMeshError['__properties_UInterchangeResultMeshError'] &
        UInterchangeResultError['__propertyRegistry'];
}

declare interface UInterchangeResultMeshError_Generic extends UInterchangeResultMeshError {
    readonly __properties_UInterchangeResultMeshError_Generic: {
        Text: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultMeshError['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultMeshError_Generic['__properties_UInterchangeResultMeshError_Generic'] &
        UInterchangeResultMeshError['__propertyRegistry'];
}

declare interface UInterchangeResultMeshWarning extends UInterchangeResultWarning {
    readonly __properties_UInterchangeResultMeshWarning: {
        MeshName: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultWarning['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultMeshWarning['__properties_UInterchangeResultMeshWarning'] &
        UInterchangeResultWarning['__propertyRegistry'];
}

declare interface UInterchangeResultMeshWarning_Generic extends UInterchangeResultMeshWarning {
    readonly __properties_UInterchangeResultMeshWarning_Generic: {
        Text: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultMeshWarning['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultMeshWarning_Generic['__properties_UInterchangeResultMeshWarning_Generic'] &
        UInterchangeResultMeshWarning['__propertyRegistry'];
}

declare interface UInterchangeResultMeshWarning_TooManyUVs extends UInterchangeResultMeshWarning {
    readonly __properties_UInterchangeResultMeshWarning_TooManyUVs: {
        ExcessUVs: number;
    };
    readonly __staticRegistry: 
        UInterchangeResultMeshWarning['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultMeshWarning_TooManyUVs['__properties_UInterchangeResultMeshWarning_TooManyUVs'] &
        UInterchangeResultMeshWarning['__propertyRegistry'];
}

declare interface UInterchangeResultTextureDisplay extends UInterchangeResultDisplay_Generic {
    readonly __properties_UInterchangeResultTextureDisplay: {
        TextureName: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultDisplay_Generic['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultTextureDisplay['__properties_UInterchangeResultTextureDisplay'] &
        UInterchangeResultDisplay_Generic['__propertyRegistry'];
}

declare interface UInterchangeResultTextureDisplay_TextureFileDoNotExist extends UInterchangeResultTextureDisplay {
    readonly __properties_UInterchangeResultTextureDisplay_TextureFileDoNotExist: {
        MaterialName: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultTextureDisplay['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultTextureDisplay_TextureFileDoNotExist['__properties_UInterchangeResultTextureDisplay_TextureFileDoNotExist'] &
        UInterchangeResultTextureDisplay['__propertyRegistry'];
}

declare interface UInterchangeResultTextureWarning extends UInterchangeResultWarning {
    readonly __properties_UInterchangeResultTextureWarning: {
        TextureName: string;
    };
    readonly __staticRegistry: 
        UInterchangeResultWarning['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeResultTextureWarning['__properties_UInterchangeResultTextureWarning'] &
        UInterchangeResultWarning['__propertyRegistry'];
}

