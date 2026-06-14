declare interface FAssetRegistryDependencyOptions {
    bIncludeSoftPackageReferences: boolean;
    bIncludeHardPackageReferences: boolean;
    bIncludeSearchableNames: boolean;
    bIncludeSoftManagementReferences: boolean;
    bIncludeHardManagementReferences: boolean;
}
declare const FAssetRegistryDependencyOptions: FAssetRegistryDependencyOptions;

declare interface FTagAndValue {
    Tag: FName;
    Value: FString;
}
declare const FTagAndValue: FTagAndValue;

declare interface IAssetRegistry extends IInterface {
    WaitForPackage(PackageName: string | FString): void;
    WaitForCompletion(): void;
    UseFilterToExcludeAssets(AssetDataList: TArray<FAssetData>, Filter: FARFilter): void;
    SearchAllAssets(bSynchronousSearch: boolean): void;
    ScanPathsSynchronous(InPaths: string | FString[], bForceRescan: boolean, bIgnoreDenyListScanFilters: boolean): void;
    ScanModifiedAssetFiles(InFilePaths: string | FString[]): void;
    ScanFilesSynchronous(InFilePaths: string | FString[], bForceRescan: boolean): void;
    RunAssetsThroughFilter(AssetDataList: TArray<FAssetData>, Filter: FARFilter): void;
    PrioritizeSearchPath(PathToPrioritize: string | FString): void;
    K2_GetReferencers(PackageName: FName, ReferenceOptions: FAssetRegistryDependencyOptions, OutReferencers: TArray<FName>): boolean;
    K2_GetDependencies(PackageName: FName, DependencyOptions: FAssetRegistryDependencyOptions, OutDependencies: TArray<FName>): boolean;
    K2_GetAssetByObjectPath(ObjectPath: FSoftObjectPath, bIncludeOnlyOnDiskAssets: boolean, bSkipARFilteredAssets: boolean): FAssetData;
    IsSearchAsync(): boolean;
    IsSearchAllAssets(): boolean;
    IsLoadingAssets(): boolean;
    HasAssets(PackagePath: FName, bRecursive: boolean): boolean;
    GetSubPaths(InBasePath: string | FString, OutPathList: string | FString[], bInRecurse: boolean): void;
    GetInMemoryAssets(Filter: FARFilter, OutAssetData: TArray<FAssetData>, bSkipARFilteredAssets: boolean): boolean;
    GetDerivedClassNames(ClassNames: TArray<FTopLevelAssetPath>, ExcludedClassNames: TSet<FTopLevelAssetPath>, OutDerivedClassNames: TSet<FTopLevelAssetPath>): void;
    GetAssetsByPaths(PackagePaths: TArray<FName>, OutAssetData: TArray<FAssetData>, bRecursive: boolean, bIncludeOnlyOnDiskAssets: boolean): boolean;
    GetAssetsByPath(PackagePath: FName, OutAssetData: TArray<FAssetData>, bRecursive: boolean, bIncludeOnlyOnDiskAssets: boolean): boolean;
    GetAssetsByPackageName(PackageName: FName, OutAssetData: TArray<FAssetData>, bIncludeOnlyOnDiskAssets: boolean, bSkipARFilteredAssets: boolean): boolean;
    GetAssetsByClass(ClassPathName: FTopLevelAssetPath, OutAssetData: TArray<FAssetData>, bSearchSubClasses: boolean): boolean;
    GetAssets(Filter: FARFilter, OutAssetData: TArray<FAssetData>, bSkipARFilteredAssets: boolean): boolean;
    GetAssetByObjectPath(ObjectPath: FName, bIncludeOnlyOnDiskAssets: boolean): FAssetData;
    GetAncestorClassNames(ClassPathName: FTopLevelAssetPath, OutAncestorClassNames: TArray<FTopLevelAssetPath>): boolean;
    GetAllCachedPaths(OutPathList: string | FString[]): void;
    GetAllAssets(OutAssetData: TArray<FAssetData>, bIncludeOnlyOnDiskAssets: boolean): boolean;
}
declare const IAssetRegistry: IAssetRegistry;

declare interface UAssetRegistryImpl extends UObject {

}
declare const UAssetRegistryImpl: UAssetRegistryImpl;

