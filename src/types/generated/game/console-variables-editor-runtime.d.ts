declare interface FConsoleVariablesEditorAssetSaveData {
    CommandName: FString;
    CommandValueAsString: FString;
    CheckedState: ECheckBoxState;
}
declare const FConsoleVariablesEditorAssetSaveData: FConsoleVariablesEditorAssetSaveData;

declare interface UConsoleVariablesAsset extends UObject {
    VariableCollectionDescription: FString;
    SavedCommands: TArray<FConsoleVariablesEditorAssetSaveData>;
    SetVariableCollectionDescription(InVariableCollectionDescription: string | FString): void;
    ReplaceSavedCommands(Replacement: TArray<FConsoleVariablesEditorAssetSaveData>): void;
    RemoveConsoleVariable(InCommandString: string | FString): boolean;
    GetVariableCollectionDescription(): FString;
    GetSavedCommandsCount(): number;
    GetSavedCommandsAsStringArray(bOnlyIncludeChecked: boolean): TArray<FString>;
    GetSavedCommandsAsCommaSeparatedString(bOnlyIncludeChecked: boolean): FString;
    GetSavedCommands(): TArray<FConsoleVariablesEditorAssetSaveData>;
    FindSavedDataByCommandString(InCommandString: string | FString, OutValue: FConsoleVariablesEditorAssetSaveData, SearchCase: ESearchCase): boolean;
    ExecuteSavedCommands(WorldContextObject: UObject, bOnlyIncludeChecked: boolean): void;
    CopyFrom(InAssetToCopy: UConsoleVariablesAsset): void;
    AddOrSetConsoleObjectSavedData(InData: FConsoleVariablesEditorAssetSaveData): void;
    AddFrom(InAssetToCopy: UConsoleVariablesAsset): void;
}
declare const UConsoleVariablesAsset: UConsoleVariablesAsset;

