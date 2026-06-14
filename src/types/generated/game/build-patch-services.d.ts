declare interface FChunkInfoData {
    Guid: FGuid;
    Hash: uint64;
    ShaHash: FSHAHashData;
    FileSize: int64;
    GroupNumber: uint8;
}
declare const FChunkInfoData: FChunkInfoData;

declare interface FChunkPartData {
    Guid: FGuid;
    Offset: uint32;
    Size: uint32;
}
declare const FChunkPartData: FChunkPartData;

declare interface FCustomFieldData {
    Key: FString;
    Value: FString;
}
declare const FCustomFieldData: FCustomFieldData;

declare interface FFileManifestData {
    Filename: FString;
    FileHash: FSHAHashData;
    FileChunkParts: TArray<FChunkPartData>;
    InstallTags: TArray<FString>;
    bIsUnixExecutable: boolean;
    SymlinkTarget: FString;
    bIsReadOnly: boolean;
    bIsCompressed: boolean;
}
declare const FFileManifestData: FFileManifestData;

declare interface FSHAHashData {
    Hash: uint8;
}
declare const FSHAHashData: FSHAHashData;

declare interface UBuildPatchManifest extends UObject {
    ManifestFileVersion: uint8;
    bIsFileData: boolean;
    AppID: uint32;
    AppName: FString;
    BuildVersion: FString;
    LaunchExe: FString;
    LaunchCommand: FString;
    PrereqIds: TSet<FString>;
    PrereqName: FString;
    PrereqPath: FString;
    PrereqArgs: FString;
    FileManifestList: TArray<FFileManifestData>;
    ChunkList: TArray<FChunkInfoData>;
    CustomFields: TArray<FCustomFieldData>;
}
declare const UBuildPatchManifest: UBuildPatchManifest;

