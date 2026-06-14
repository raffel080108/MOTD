declare interface UAssetTagsSubsystem extends UEngineSubsystem {
    K2_GetCollectionsContainingAsset(AssetPath: FSoftObjectPath): TArray<FName>;
    GetCollectionsContainingAssetPtr(AssetPtr: UObject): TArray<FName>;
    GetCollectionsContainingAssetData(AssetData: FAssetData): TArray<FName>;
    GetCollectionsContainingAsset(AssetPathName: FName): TArray<FName>;
    GetCollections(): TArray<FName>;
    GetAssetsInCollection(Name: FName): TArray<FAssetData>;
    CollectionExists(Name: FName): boolean;
}
declare const UAssetTagsSubsystem: UAssetTagsSubsystem;

