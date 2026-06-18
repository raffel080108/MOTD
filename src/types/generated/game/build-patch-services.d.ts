declare interface FChunkInfoData {
    Guid: FGuid;
    Hash: number;
    ShaHash: FSHAHashData;
    FileSize: number;
    GroupNumber: number;
}

declare interface FChunkPartData {
    Guid: FGuid;
    Offset: number;
    Size: number;
}

declare interface FCustomFieldData {
    Key: string;
    Value: string;
}

declare interface FFileManifestData {
    Filename: string;
    FileHash: FSHAHashData;
    FileChunkParts: FChunkPartData[];
    InstallTags: string[];
    bIsUnixExecutable: boolean;
    SymlinkTarget: string;
    bIsReadOnly: boolean;
    bIsCompressed: boolean;
}

declare interface FSHAHashData {
    Hash: number;
}

declare interface UBuildPatchManifest extends UObject {
    readonly __properties_UBuildPatchManifest: {
        ManifestFileVersion: number;
        bIsFileData: boolean;
        AppID: number;
        AppName: string;
        BuildVersion: string;
        LaunchExe: string;
        LaunchCommand: string;
        PrereqIds: string[];
        PrereqName: string;
        PrereqPath: string;
        PrereqArgs: string;
        FileManifestList: FFileManifestData[];
        ChunkList: FChunkInfoData[];
        CustomFields: FCustomFieldData[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBuildPatchManifest['__properties_UBuildPatchManifest'] &
        UObject['__propertyRegistry'];
}

