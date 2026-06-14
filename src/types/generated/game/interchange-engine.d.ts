declare interface FImportAssetParameters {
    ReimportAsset: UObject;
    ReimportSourceIndex: number;
    bIsAutomated: boolean;
    bFollowRedirectors: boolean;
    OverridePipelines: TArray<FSoftObjectPath>;
    ImportLevel: ULevel;
    DestinationName: FString;
    bReplaceExisting: boolean;
    bForceShowDialog: boolean;
    OnAssetDone: FImportAssetParametersOnAssetDone;
    OnAssetsImportDone: FImportAssetParametersOnAssetsImportDone;
    OnSceneObjectDone: FImportAssetParametersOnSceneObjectDone;
    OnSceneImportDone: FImportAssetParametersOnSceneImportDone;
}
declare const FImportAssetParameters: FImportAssetParameters;

declare interface FInterchangeContentImportSettings extends FInterchangeImportSettings {
    DefaultPipelineStackOverride: Record<string | number | symbol, FName>;
    ShowImportDialogOverride: Record<string | number | symbol, FInterchangeDialogOverride>;
}
declare const FInterchangeContentImportSettings: FInterchangeContentImportSettings;

declare interface FInterchangeDialogOverride {
    bShowImportDialog: boolean;
    bShowReimportDialog: boolean;
    PerTranslatorImportDialogOverride: TArray<FInterchangePerTranslatorDialogOverride>;
}
declare const FInterchangeDialogOverride: FInterchangeDialogOverride;

declare interface FInterchangeFilePickerParameters {
    bAllowMultipleFiles: boolean;
    Title: FText;
    DefaultPath: FString;
    bShowAllFactoriesExtension: boolean;
    ExtraFormats: TArray<FString>;
}
declare const FInterchangeFilePickerParameters: FInterchangeFilePickerParameters;

declare interface FInterchangeGroup {
    DisplayName: FName;
    UniqueID: FGuid;
    DefaultPipelineStack: FName;
    DefaultPipelineStackOverride: Record<string | number | symbol, FName>;
    bShowImportDialog: boolean;
    bShowReimportDialog: boolean;
    ShowImportDialogOverride: Record<string | number | symbol, FInterchangeDialogOverride>;
}
declare const FInterchangeGroup: FInterchangeGroup;

declare interface FInterchangeImportSettings {
    PipelineStacks: Record<FName, FInterchangePipelineStack>;
    DefaultPipelineStack: FName;
    ImportDialogClass: TSoftClassPtr<UInterchangePipelineConfigurationBase>;
    bShowImportDialog: boolean;
    bShowReimportDialog: boolean;
}
declare const FInterchangeImportSettings: FInterchangeImportSettings;

declare interface FInterchangePerTranslatorDialogOverride {
    Translator: TSoftClassPtr<UInterchangeTranslatorBase>;
    bShowImportDialog: boolean;
    bShowReimportDialog: boolean;
}
declare const FInterchangePerTranslatorDialogOverride: FInterchangePerTranslatorDialogOverride;

declare interface FInterchangePipelineStack {
    Pipelines: TArray<FSoftObjectPath>;
    PerTranslatorPipelines: TArray<FInterchangeTranslatorPipelines>;
}
declare const FInterchangePipelineStack: FInterchangePipelineStack;

declare interface FInterchangeSceneImportSettings extends FInterchangeImportSettings {
    PerTranslatorDialogOverride: TArray<FInterchangePerTranslatorDialogOverride>;
}
declare const FInterchangeSceneImportSettings: FInterchangeSceneImportSettings;

declare interface FInterchangeStackInfo {
    StackName: FName;
    Pipelines: TArray<UInterchangePipelineBase>;
}
declare const FInterchangeStackInfo: FInterchangeStackInfo;

declare interface FInterchangeTranslatorPipelines {
    Translator: TSoftClassPtr<UInterchangeTranslatorBase>;
    Pipelines: TArray<FSoftObjectPath>;
}
declare const FInterchangeTranslatorPipelines: FInterchangeTranslatorPipelines;

declare interface FPropertyData {

}
declare const FPropertyData: FPropertyData;

declare interface UInterchangeAssetImportData extends UAssetImportData {
    SceneImportAsset: FSoftObjectPath;
    NodeUniqueID: FString;
    NodeContainer: UInterchangeBaseNodeContainer;
    Pipelines: TArray<UObject>;
    TransientNodeContainer: UInterchangeBaseNodeContainer;
    TransientPipelines: TArray<UObject>;
    TransientTranslatorSettings: UInterchangeTranslatorSettings;
    SetTranslatorSettings(TranslatorSettings: UInterchangeTranslatorSettings): void;
    SetPipelines(InPipelines: TArray<UObject>): void;
    SetNodeContainer(InNodeContainer: UInterchangeBaseNodeContainer): void;
    ScriptGetFirstFilename(): FString;
    ScriptExtractFilenames(): TArray<FString>;
    ScriptExtractDisplayLabels(): TArray<FString>;
    GetTranslatorSettings(): UInterchangeTranslatorSettings;
    GetStoredNode(InNodeUniqueId: string | FString): UInterchangeBaseNode;
    GetStoredFactoryNode(InNodeUniqueId: string | FString): UInterchangeFactoryBaseNode;
    GetPipelines(): TArray<UObject>;
    GetNumberOfPipelines(): number;
    GetNodeContainer(): UInterchangeBaseNodeContainer;
}
declare const UInterchangeAssetImportData: UInterchangeAssetImportData;

declare interface UInterchangeAssetImportDataConverterBase extends UObject {

}
declare const UInterchangeAssetImportDataConverterBase: UInterchangeAssetImportDataConverterBase;

declare interface UInterchangeBlueprintPipelineBase extends UBlueprint {

}
declare const UInterchangeBlueprintPipelineBase: UInterchangeBlueprintPipelineBase;

declare interface UInterchangeEditorSettings extends UDeveloperSettings {
    bShowImportDialogAtReimport: boolean;
    UsedGroupName: FName;
    UsedGroupUID: FGuid;
    SetUsedGroupName(InUsedGroupName: FName): void;
    GetUsedGroupName(): FName;
    GetSelectableItems(): TArray<FName>;
}
declare const UInterchangeEditorSettings: UInterchangeEditorSettings;

declare interface UInterchangeEditorUtilitiesBase extends UObject {

}
declare const UInterchangeEditorUtilitiesBase: UInterchangeEditorUtilitiesBase;

declare interface UInterchangeFilePickerBase extends UObject {
    ScriptedFilePickerForTranslatorType(TranslatorType: EInterchangeTranslatorType, Parameters: FInterchangeFilePickerParameters, OutFilenames: string | FString[]): boolean;
    ScriptedFilePickerForTranslatorAssetType(TranslatorAssetType: EInterchangeTranslatorAssetType, Parameters: FInterchangeFilePickerParameters, OutFilenames: string | FString[]): boolean;
}
declare const UInterchangeFilePickerBase: UInterchangeFilePickerBase;

declare interface UInterchangeManager extends UObject {
    RegisteredTranslatorsClass: TSet<UClass>;
    RegisteredFactoryClasses: Record<string | number | symbol, UClass>;
    RegisteredWriters: Record<string | number | symbol, UInterchangeWriterBase>;
    RegisteredConverters: Record<string | number | symbol, UInterchangeAssetImportDataConverterBase>;
    WarnIfInterchangeIsActive(): boolean;
    WaitUntilAllTasksDone(bCancel: boolean): void;
    ScriptedReimportAssetAsync(ObjectToReimport: UObject, ImportAssetParameters: FImportAssetParameters): boolean;
    ScriptedImportSceneAsync(ContentPath: string | FString, SourceData: UInterchangeSourceData, ImportAssetParameters: FImportAssetParameters): boolean;
    ScriptedImportAssetAsync(ContentPath: string | FString, SourceData: UInterchangeSourceData, ImportAssetParameters: FImportAssetParameters): boolean;
    ReimportAsset(ObjectToReimport: UObject, ImportAssetParameters: FImportAssetParameters, OutImportedObjects: TArray<UObject>): boolean;
    IsObjectBeingImported(Object: UObject): boolean;
    IsInterchangeActive(): boolean;
    ImportScene(ContentPath: string | FString, SourceData: UInterchangeSourceData, ImportAssetParameters: FImportAssetParameters): boolean;
    ImportAsset(ContentPath: string | FString, SourceData: UInterchangeSourceData, ImportAssetParameters: FImportAssetParameters, OutImportedObjects: TArray<UObject>): boolean;
    GetTranslatorForSourceData(SourceData: UInterchangeSourceData): UInterchangeTranslatorBase;
    GetSupportedFormatsForObject(Object: UObject, SourceFileIndex: number): TArray<FString>;
    GetSupportedFormats(ForTranslatorType: EInterchangeTranslatorType): TArray<FString>;
    GetSupportedAssetTypeFormats(ForTranslatorAssetType: EInterchangeTranslatorAssetType, ForTranslatorType: EInterchangeTranslatorType, bStrictMatchTranslatorType: boolean): TArray<FString>;
    GetRegisteredFactoryClass(ClassToMake: UClass): UClass;
    GetInterchangeManagerScripted(): UInterchangeManager;
    GetAssetImportData(Asset: UObject): UInterchangeAssetImportData;
    ExportScene(World: UObject, bIsAutomated: boolean): boolean;
    ExportAsset(Asset: UObject, bIsAutomated: boolean): boolean;
    CreateSourceData(InFilename: string | FString): UInterchangeSourceData;
    CanTranslateSourceData(SourceData: UInterchangeSourceData, bSceneImportOnly: boolean): boolean;
    CanReimport(Object: UObject, OutFilenames: string | FString[]): boolean;
    CancelAllTasks(): void;
}
declare const UInterchangeManager: UInterchangeManager;

declare interface UInterchangeMeshUtilities extends UObject {
    ScriptedImportMorphTarget(SkeletalMesh: USkeletalMesh, LODIndex: number, SourceData: UInterchangeSourceData, MorphTargetName: string | FString): boolean;
}
declare const UInterchangeMeshUtilities: UInterchangeMeshUtilities;

declare interface UInterchangePipelineConfigurationBase extends UObject {
    ScriptedShowTestPlanConfigurationDialog(PipelineStacks: TArray<FInterchangeStackInfo>, OutPipelines: TArray<UInterchangePipelineBase>, SourceData: UInterchangeSourceData, Translator: UInterchangeTranslatorBase, BaseNodeContainer: UInterchangeBaseNodeContainer, ReimportAsset: UObject, bSceneImport: boolean, bReimport: boolean): EInterchangePipelineConfigurationDialogResult;
    ScriptedShowScenePipelineConfigurationDialog(PipelineStacks: TArray<FInterchangeStackInfo>, OutPipelines: TArray<UInterchangePipelineBase>, SourceData: UInterchangeSourceData, Translator: UInterchangeTranslatorBase, BaseNodeContainer: UInterchangeBaseNodeContainer): EInterchangePipelineConfigurationDialogResult;
    ScriptedShowReimportPipelineConfigurationDialog(PipelineStacks: TArray<FInterchangeStackInfo>, OutPipelines: TArray<UInterchangePipelineBase>, SourceData: UInterchangeSourceData, Translator: UInterchangeTranslatorBase, BaseNodeContainer: UInterchangeBaseNodeContainer, ReimportAsset: UObject, bSceneImport: boolean): EInterchangePipelineConfigurationDialogResult;
    ScriptedShowPipelineConfigurationDialog(PipelineStacks: TArray<FInterchangeStackInfo>, OutPipelines: TArray<UInterchangePipelineBase>, SourceData: UInterchangeSourceData, Translator: UInterchangeTranslatorBase, BaseNodeContainer: UInterchangeBaseNodeContainer): EInterchangePipelineConfigurationDialogResult;
}
declare const UInterchangePipelineConfigurationBase: UInterchangePipelineConfigurationBase;

declare interface UInterchangePipelineStackOverride extends UObject {
    OverridePipelines: TArray<FSoftObjectPath>;
    AddPythonPipeline(PipelineBase: UInterchangePythonPipelineBase): void;
    AddPipeline(PipelineBase: UInterchangePipelineBase): void;
    AddBlueprintPipeline(PipelineBase: UInterchangeBlueprintPipelineBase): void;
}
declare const UInterchangePipelineStackOverride: UInterchangePipelineStackOverride;

declare interface UInterchangeProjectSettings extends UDeveloperSettings {
    ContentImportSettings: FInterchangeContentImportSettings;
    SceneImportSettings: FInterchangeSceneImportSettings;
    FilePickerClass: TSoftClassPtr<UInterchangeFilePickerBase>;
    bStaticMeshUseSmoothEdgesIfSmoothingInformationIsMissing: boolean;
    GenericPipelineClass: TSoftClassPtr<UInterchangePipelineBase>;
    ConverterDefaultPipeline: FSoftObjectPath;
    InterchangeGroups: TArray<FInterchangeGroup>;
}
declare const UInterchangeProjectSettings: UInterchangeProjectSettings;

declare interface UInterchangePythonPipelineAsset extends UObject {
    PythonClass: TSoftClassPtr<UInterchangePythonPipelineBase>;
    GeneratedPipeline: UInterchangePythonPipelineBase;
    JsonDefaultProperties: FString;
}
declare const UInterchangePythonPipelineAsset: UInterchangePythonPipelineAsset;

declare interface UInterchangePythonPipelineBase extends UInterchangePipelineBase {

}
declare const UInterchangePythonPipelineBase: UInterchangePythonPipelineBase;

declare interface UInterchangeSceneImportAsset extends UObject {

}
declare const UInterchangeSceneImportAsset: UInterchangeSceneImportAsset;

