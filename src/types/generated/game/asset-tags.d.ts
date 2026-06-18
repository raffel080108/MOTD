declare interface UAssetTagsSubsystem extends UEngineSubsystem {
    readonly __static_UAssetTagsSubsystem: {
        K2_GetCollectionsContainingAsset(AssetPath: FSoftObjectPath): string[];
        GetCollectionsContainingAssetPtr(AssetPtr: UObject): string[];
        GetCollectionsContainingAssetData(AssetData: FAssetData): string[];
        GetCollectionsContainingAsset(AssetPathName: string): string[];
        GetCollections(): string[];
        GetAssetsInCollection(Name: string): FAssetData[];
        CollectionExists(Name: string): boolean;
    };
    readonly __staticRegistry: 
        UAssetTagsSubsystem['__static_UAssetTagsSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UEngineSubsystem['__propertyRegistry'];
}

