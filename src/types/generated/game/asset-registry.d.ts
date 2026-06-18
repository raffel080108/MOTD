declare interface FAssetRegistryDependencyOptions {
    bIncludeSoftPackageReferences: boolean;
    bIncludeHardPackageReferences: boolean;
    bIncludeSearchableNames: boolean;
    bIncludeSoftManagementReferences: boolean;
    bIncludeHardManagementReferences: boolean;
}

declare interface FTagAndValue {
    Tag: string;
    Value: string;
}

declare interface IAssetRegistry extends IInterface {
    readonly __static_IAssetRegistry: {
        WaitForPackage(PackageName: string): void;
        WaitForCompletion(): void;
        UseFilterToExcludeAssets(AssetDataList: FAssetData[], Filter: FARFilter): void;
        SearchAllAssets(bSynchronousSearch: boolean): void;
        ScanPathsSynchronous(InPaths: string[], bForceRescan: boolean, bIgnoreDenyListScanFilters: boolean): void;
        ScanModifiedAssetFiles(InFilePaths: string[]): void;
        ScanFilesSynchronous(InFilePaths: string[], bForceRescan: boolean): void;
        RunAssetsThroughFilter(AssetDataList: FAssetData[], Filter: FARFilter): void;
        PrioritizeSearchPath(PathToPrioritize: string): void;
        K2_GetReferencers(PackageName: string, ReferenceOptions: FAssetRegistryDependencyOptions, OutReferencers: string[]): boolean;
        K2_GetDependencies(PackageName: string, DependencyOptions: FAssetRegistryDependencyOptions, OutDependencies: string[]): boolean;
        K2_GetAssetByObjectPath(ObjectPath: FSoftObjectPath, bIncludeOnlyOnDiskAssets: boolean, bSkipARFilteredAssets: boolean): FAssetData;
        IsSearchAsync(): boolean;
        IsSearchAllAssets(): boolean;
        IsLoadingAssets(): boolean;
        HasAssets(PackagePath: string, bRecursive: boolean): boolean;
        GetSubPaths(InBasePath: string, OutPathList: string[], bInRecurse: boolean): void;
        GetInMemoryAssets(Filter: FARFilter, OutAssetData: FAssetData[], bSkipARFilteredAssets: boolean): boolean;
        GetDerivedClassNames(ClassNames: FTopLevelAssetPath[], ExcludedClassNames: FTopLevelAssetPath[], OutDerivedClassNames: FTopLevelAssetPath[]): void;
        GetAssetsByPaths(PackagePaths: string[], OutAssetData: FAssetData[], bRecursive: boolean, bIncludeOnlyOnDiskAssets: boolean): boolean;
        GetAssetsByPath(PackagePath: string, OutAssetData: FAssetData[], bRecursive: boolean, bIncludeOnlyOnDiskAssets: boolean): boolean;
        GetAssetsByPackageName(PackageName: string, OutAssetData: FAssetData[], bIncludeOnlyOnDiskAssets: boolean, bSkipARFilteredAssets: boolean): boolean;
        GetAssetsByClass(ClassPathName: FTopLevelAssetPath, OutAssetData: FAssetData[], bSearchSubClasses: boolean): boolean;
        GetAssets(Filter: FARFilter, OutAssetData: FAssetData[], bSkipARFilteredAssets: boolean): boolean;
        GetAssetByObjectPath(ObjectPath: string, bIncludeOnlyOnDiskAssets: boolean): FAssetData;
        GetAncestorClassNames(ClassPathName: FTopLevelAssetPath, OutAncestorClassNames: FTopLevelAssetPath[]): boolean;
        GetAllCachedPaths(OutPathList: string[]): void;
        GetAllAssets(OutAssetData: FAssetData[], bIncludeOnlyOnDiskAssets: boolean): boolean;
    };
    readonly __staticRegistry: 
        IAssetRegistry['__static_IAssetRegistry'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAssetRegistryImpl extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

