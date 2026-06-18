declare interface FImportAssetParameters {
    ReimportAsset: UObject;
    ReimportSourceIndex: number;
    bIsAutomated: boolean;
    bFollowRedirectors: boolean;
    OverridePipelines: FSoftObjectPath[];
    ImportLevel: ULevel;
    DestinationName: string;
    bReplaceExisting: boolean;
    bForceShowDialog: boolean;
    OnAssetDone: FImportAssetParametersOnAssetDone;
    OnAssetsImportDone: FImportAssetParametersOnAssetsImportDone;
    OnSceneObjectDone: FImportAssetParametersOnSceneObjectDone;
    OnSceneImportDone: FImportAssetParametersOnSceneImportDone;
}

declare interface FInterchangeContentImportSettings extends FInterchangeImportSettings {
    DefaultPipelineStackOverride: TMap<EInterchangeTranslatorAssetType, string>;
    ShowImportDialogOverride: TMap<EInterchangeTranslatorAssetType, FInterchangeDialogOverride>;
}

declare interface FInterchangeDialogOverride {
    bShowImportDialog: boolean;
    bShowReimportDialog: boolean;
    PerTranslatorImportDialogOverride: FInterchangePerTranslatorDialogOverride[];
}

declare interface FInterchangeFilePickerParameters {
    bAllowMultipleFiles: boolean;
    Title: string;
    DefaultPath: string;
    bShowAllFactoriesExtension: boolean;
    ExtraFormats: string[];
}

declare interface FInterchangeGroup {
    DisplayName: string;
    UniqueID: FGuid;
    DefaultPipelineStack: string;
    DefaultPipelineStackOverride: TMap<EInterchangeTranslatorAssetType, string>;
    bShowImportDialog: boolean;
    bShowReimportDialog: boolean;
    ShowImportDialogOverride: TMap<EInterchangeTranslatorAssetType, FInterchangeDialogOverride>;
}

declare interface FInterchangeImportSettings {
    PipelineStacks: TMap<string, FInterchangePipelineStack>;
    DefaultPipelineStack: string;
    ImportDialogClass: TSoftClassPtr<UInterchangePipelineConfigurationBase>;
    bShowImportDialog: boolean;
    bShowReimportDialog: boolean;
}

declare interface FInterchangePerTranslatorDialogOverride {
    Translator: TSoftClassPtr<UInterchangeTranslatorBase>;
    bShowImportDialog: boolean;
    bShowReimportDialog: boolean;
}

declare interface FInterchangePipelineStack {
    Pipelines: FSoftObjectPath[];
    PerTranslatorPipelines: FInterchangeTranslatorPipelines[];
}

declare interface FInterchangeSceneImportSettings extends FInterchangeImportSettings {
    PerTranslatorDialogOverride: FInterchangePerTranslatorDialogOverride[];
}

declare interface FInterchangeStackInfo {
    StackName: string;
    Pipelines: UInterchangePipelineBase[];
}

declare interface FInterchangeTranslatorPipelines {
    Translator: TSoftClassPtr<UInterchangeTranslatorBase>;
    Pipelines: FSoftObjectPath[];
}

declare type FPropertyData = object;

declare interface UInterchangeAssetImportData extends UAssetImportData {
    readonly __static_UInterchangeAssetImportData: {
        SetTranslatorSettings(TranslatorSettings: UInterchangeTranslatorSettings): void;
        SetPipelines(InPipelines: UObject[]): void;
        SetNodeContainer(InNodeContainer: UInterchangeBaseNodeContainer): void;
        ScriptGetFirstFilename(): string;
        ScriptExtractFilenames(): string[];
        ScriptExtractDisplayLabels(): string[];
        GetTranslatorSettings(): UInterchangeTranslatorSettings;
        GetStoredNode(InNodeUniqueId: string): UInterchangeBaseNode;
        GetStoredFactoryNode(InNodeUniqueId: string): UInterchangeFactoryBaseNode;
        GetPipelines(): UObject[];
        GetNumberOfPipelines(): number;
        GetNodeContainer(): UInterchangeBaseNodeContainer;
    };
    readonly __properties_UInterchangeAssetImportData: {
        SceneImportAsset: FSoftObjectPath;
        NodeUniqueID: string;
        NodeContainer: UInterchangeBaseNodeContainer;
        Pipelines: UObject[];
        TransientNodeContainer: UInterchangeBaseNodeContainer;
        TransientPipelines: UObject[];
        TransientTranslatorSettings: UInterchangeTranslatorSettings;
    };
    readonly __staticRegistry: 
        UInterchangeAssetImportData['__static_UInterchangeAssetImportData'] &
        UAssetImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeAssetImportData['__properties_UInterchangeAssetImportData'] &
        UAssetImportData['__propertyRegistry'];
}

declare interface UInterchangeAssetImportDataConverterBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangeBlueprintPipelineBase extends UBlueprint {
    readonly __staticRegistry: 
        UBlueprint['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprint['__propertyRegistry'];
}

declare interface UInterchangeEditorSettings extends UDeveloperSettings {
    readonly __static_UInterchangeEditorSettings: {
        SetUsedGroupName(InUsedGroupName: string): void;
        GetUsedGroupName(): string;
        GetSelectableItems(): string[];
    };
    readonly __properties_UInterchangeEditorSettings: {
        bShowImportDialogAtReimport: boolean;
        UsedGroupName: string;
        UsedGroupUID: FGuid;
    };
    readonly __staticRegistry: 
        UInterchangeEditorSettings['__static_UInterchangeEditorSettings'] &
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeEditorSettings['__properties_UInterchangeEditorSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UInterchangeEditorUtilitiesBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangeFilePickerBase extends UObject {
    readonly __static_UInterchangeFilePickerBase: {
        ScriptedFilePickerForTranslatorType(TranslatorType: EInterchangeTranslatorType, Parameters: FInterchangeFilePickerParameters, OutFilenames: string[]): boolean;
        ScriptedFilePickerForTranslatorAssetType(TranslatorAssetType: EInterchangeTranslatorAssetType, Parameters: FInterchangeFilePickerParameters, OutFilenames: string[]): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeFilePickerBase['__static_UInterchangeFilePickerBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangeManager extends UObject {
    readonly __static_UInterchangeManager: {
        WarnIfInterchangeIsActive(): boolean;
        WaitUntilAllTasksDone(bCancel: boolean): void;
        ScriptedReimportAssetAsync(ObjectToReimport: UObject, ImportAssetParameters: FImportAssetParameters): boolean;
        ScriptedImportSceneAsync(ContentPath: string, SourceData: UInterchangeSourceData, ImportAssetParameters: FImportAssetParameters): boolean;
        ScriptedImportAssetAsync(ContentPath: string, SourceData: UInterchangeSourceData, ImportAssetParameters: FImportAssetParameters): boolean;
        ReimportAsset(ObjectToReimport: UObject, ImportAssetParameters: FImportAssetParameters, OutImportedObjects: UObject[]): boolean;
        IsObjectBeingImported(Object: UObject): boolean;
        IsInterchangeActive(): boolean;
        ImportScene(ContentPath: string, SourceData: UInterchangeSourceData, ImportAssetParameters: FImportAssetParameters): boolean;
        ImportAsset(ContentPath: string, SourceData: UInterchangeSourceData, ImportAssetParameters: FImportAssetParameters, OutImportedObjects: UObject[]): boolean;
        GetTranslatorForSourceData(SourceData: UInterchangeSourceData): UInterchangeTranslatorBase;
        GetSupportedFormatsForObject(Object: UObject, SourceFileIndex: number): string[];
        GetSupportedFormats(ForTranslatorType: EInterchangeTranslatorType): string[];
        GetSupportedAssetTypeFormats(ForTranslatorAssetType: EInterchangeTranslatorAssetType, ForTranslatorType: EInterchangeTranslatorType, bStrictMatchTranslatorType: boolean): string[];
        GetRegisteredFactoryClass(ClassToMake: UClass): UClass;
        GetInterchangeManagerScripted(): UInterchangeManager;
        GetAssetImportData(Asset: UObject): UInterchangeAssetImportData;
        ExportScene(World: UObject, bIsAutomated: boolean): boolean;
        ExportAsset(Asset: UObject, bIsAutomated: boolean): boolean;
        CreateSourceData(InFilename: string): UInterchangeSourceData;
        CanTranslateSourceData(SourceData: UInterchangeSourceData, bSceneImportOnly: boolean): boolean;
        CanReimport(Object: UObject, OutFilenames: string[]): boolean;
        CancelAllTasks(): void;
    };
    readonly __properties_UInterchangeManager: {
        RegisteredTranslatorsClass: UClass[];
        RegisteredFactoryClasses: TMap<UClass, UClass>;
        RegisteredWriters: TMap<UClass, UInterchangeWriterBase>;
        RegisteredConverters: TMap<UClass, UInterchangeAssetImportDataConverterBase>;
    };
    readonly __staticRegistry: 
        UInterchangeManager['__static_UInterchangeManager'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeManager['__properties_UInterchangeManager'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeMeshUtilities extends UObject {
    readonly __static_UInterchangeMeshUtilities: {
        ScriptedImportMorphTarget(SkeletalMesh: USkeletalMesh, LODIndex: number, SourceData: UInterchangeSourceData, MorphTargetName: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMeshUtilities['__static_UInterchangeMeshUtilities'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangePipelineConfigurationBase extends UObject {
    readonly __static_UInterchangePipelineConfigurationBase: {
        ScriptedShowTestPlanConfigurationDialog(PipelineStacks: FInterchangeStackInfo[], OutPipelines: UInterchangePipelineBase[], SourceData: UInterchangeSourceData, Translator: UInterchangeTranslatorBase, BaseNodeContainer: UInterchangeBaseNodeContainer, ReimportAsset: UObject, bSceneImport: boolean, bReimport: boolean): EInterchangePipelineConfigurationDialogResult;
        ScriptedShowScenePipelineConfigurationDialog(PipelineStacks: FInterchangeStackInfo[], OutPipelines: UInterchangePipelineBase[], SourceData: UInterchangeSourceData, Translator: UInterchangeTranslatorBase, BaseNodeContainer: UInterchangeBaseNodeContainer): EInterchangePipelineConfigurationDialogResult;
        ScriptedShowReimportPipelineConfigurationDialog(PipelineStacks: FInterchangeStackInfo[], OutPipelines: UInterchangePipelineBase[], SourceData: UInterchangeSourceData, Translator: UInterchangeTranslatorBase, BaseNodeContainer: UInterchangeBaseNodeContainer, ReimportAsset: UObject, bSceneImport: boolean): EInterchangePipelineConfigurationDialogResult;
        ScriptedShowPipelineConfigurationDialog(PipelineStacks: FInterchangeStackInfo[], OutPipelines: UInterchangePipelineBase[], SourceData: UInterchangeSourceData, Translator: UInterchangeTranslatorBase, BaseNodeContainer: UInterchangeBaseNodeContainer): EInterchangePipelineConfigurationDialogResult;
    };
    readonly __staticRegistry: 
        UInterchangePipelineConfigurationBase['__static_UInterchangePipelineConfigurationBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangePipelineStackOverride extends UObject {
    readonly __static_UInterchangePipelineStackOverride: {
        AddPythonPipeline(PipelineBase: UInterchangePythonPipelineBase): void;
        AddPipeline(PipelineBase: UInterchangePipelineBase): void;
        AddBlueprintPipeline(PipelineBase: UInterchangeBlueprintPipelineBase): void;
    };
    readonly __properties_UInterchangePipelineStackOverride: {
        OverridePipelines: FSoftObjectPath[];
    };
    readonly __staticRegistry: 
        UInterchangePipelineStackOverride['__static_UInterchangePipelineStackOverride'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangePipelineStackOverride['__properties_UInterchangePipelineStackOverride'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangeProjectSettings extends UDeveloperSettings {
    readonly __properties_UInterchangeProjectSettings: {
        ContentImportSettings: FInterchangeContentImportSettings;
        SceneImportSettings: FInterchangeSceneImportSettings;
        FilePickerClass: TSoftClassPtr<UInterchangeFilePickerBase>;
        bStaticMeshUseSmoothEdgesIfSmoothingInformationIsMissing: boolean;
        GenericPipelineClass: TSoftClassPtr<UInterchangePipelineBase>;
        ConverterDefaultPipeline: FSoftObjectPath;
        InterchangeGroups: FInterchangeGroup[];
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeProjectSettings['__properties_UInterchangeProjectSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UInterchangePythonPipelineAsset extends UObject {
    readonly __properties_UInterchangePythonPipelineAsset: {
        PythonClass: TSoftClassPtr<UInterchangePythonPipelineBase>;
        GeneratedPipeline: UInterchangePythonPipelineBase;
        JsonDefaultProperties: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangePythonPipelineAsset['__properties_UInterchangePythonPipelineAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UInterchangePythonPipelineBase extends UInterchangePipelineBase {
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeSceneImportAsset extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

