declare interface FConsoleVariablesEditorAssetSaveData {
    CommandName: string;
    CommandValueAsString: string;
    CheckedState: ECheckBoxState;
}

declare interface UConsoleVariablesAsset extends UObject {
    readonly __static_UConsoleVariablesAsset: {
        SetVariableCollectionDescription(InVariableCollectionDescription: string): void;
        ReplaceSavedCommands(Replacement: FConsoleVariablesEditorAssetSaveData[]): void;
        RemoveConsoleVariable(InCommandString: string): boolean;
        GetVariableCollectionDescription(): string;
        GetSavedCommandsCount(): number;
        GetSavedCommandsAsStringArray(bOnlyIncludeChecked: boolean): string[];
        GetSavedCommandsAsCommaSeparatedString(bOnlyIncludeChecked: boolean): string;
        GetSavedCommands(): FConsoleVariablesEditorAssetSaveData[];
        FindSavedDataByCommandString(InCommandString: string, OutValue: FConsoleVariablesEditorAssetSaveData, SearchCase: ESearchCase): boolean;
        ExecuteSavedCommands(WorldContextObject: UObject, bOnlyIncludeChecked: boolean): void;
        CopyFrom(InAssetToCopy: UConsoleVariablesAsset): void;
        AddOrSetConsoleObjectSavedData(InData: FConsoleVariablesEditorAssetSaveData): void;
        AddFrom(InAssetToCopy: UConsoleVariablesAsset): void;
    };
    readonly __properties_UConsoleVariablesAsset: {
        VariableCollectionDescription: string;
        SavedCommands: FConsoleVariablesEditorAssetSaveData[];
    };
    readonly __staticRegistry: 
        UConsoleVariablesAsset['__static_UConsoleVariablesAsset'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UConsoleVariablesAsset['__properties_UConsoleVariablesAsset'] &
        UObject['__propertyRegistry'];
}

