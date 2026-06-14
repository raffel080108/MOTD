// Auto-Generated Merged Multi-Declared Context Structures

/** Merged declaration from sources: [DNA_BXE_Linear_Gauntlet.lua, DNA_BXE_Linear_Gauntlet_DUPL_1.lua] */
declare interface UDNA_BXE_Linear_Gauntlet_C extends UMissionDNA {

}
declare const UDNA_BXE_Linear_Gauntlet_C: UDNA_BXE_Linear_Gauntlet_C;

/** Merged declaration from sources: [ITM_Character_Customization_ItemSlot_Base.lua, ITM_CurrentUnlocks.lua, ITM_OverClock_Icon.lua, ScrollLIst_Category_Window.lua, UI_OperationsList.lua, WND_Vote.lua, _MENU_MinersManual.lua, 临时修改UI.lua, 击杀记录.lua] */
declare interface UPLACEHOLDER {

}
declare const UPLACEHOLDER: UPLACEHOLDER;

/** Merged declaration from sources: [CoreUObject.lua, Types.lua] */
declare interface UFunction extends UStruct {
    (...args: any[]): void;
    GetFunctionFlags(): number;
    SetFunctionFlags(Flags: number): void;
}
declare const UFunction: UFunction;

/** Merged declaration from sources: [Types.lua] */
declare interface _Internal_FName {
    (Name: string): FName;
    (ComparisonIndex: number): FName;
    (Name: string, FindType: EFindName | number): FName;
    (ComparisonIndex: number, FindType: EFindName | number): FName;
    ToString(): string;
    GetComparisonIndex(): number;
}
declare type FName = string & _Internal_FName;
declare const FName: _Internal_FName;

/** Merged declaration from sources: [Types.lua] */
declare interface _Internal_FText {
    (Text: string): FText;
    ToString(): string;
}
declare type FText = string & _Internal_FText;
declare const FText: _Internal_FText;

/** Merged declaration from sources: [CoreUObject.lua, Types.lua] */
declare interface UStruct extends UField {
    GetSuperStruct(): UClass;
    ForEachFunction(Callback?: (Function: UFunction) => boolean): void;
    ForEachProperty(Callback?: (Property: Property) => boolean): void;
}
declare const UStruct: UStruct;

/** Merged declaration from sources: [CoreUObject.lua, Types.lua] */
declare interface UClass extends UStruct {
    GetCDO(): UClass;
    IsChildOf(Class: UClass): boolean;
}
declare const UClass: UClass;

/** Merged declaration from sources: [CoreUObject.lua, Types.lua] */
declare interface UEnum extends UField {
    GetNameByValue(Value: number): void;
    ForEachName(Callback: (() => void)): void;
    GetEnumNameByIndex(Index: number): void;
    InsertIntoNames(Name: string, Value: number, Index: number): void;
    EditNameAt(Index: number, NewName: string): void;
    EditValueAt(Index: number, NewValue: number): void;
    RemoveFromNamesAt(Index: number): void;
}
declare const UEnum: UEnum;

/** Merged declaration from sources: [Engine.lua, Types.lua] */
declare interface UDataTable<T = any> extends UObject {
    RowStruct: UScriptStruct;
    bStripFromClientBuilds: boolean;
    bIgnoreExtraFields: boolean;
    bIgnoreMissingFields: boolean;
    bPreserveExistingValues: boolean;
    ImportKeyField: FString;
    GetRowStruct(): UScriptStruct;
    GetRowMap(): [Record<string, any>];
    FindRow(RowName: string): UScriptStruct;
    AddRow(RowName: string, RowData: Record<string | number, any> | UScriptStruct): void;
    RemoveRow(RowName: string): void;
    EmptyTable(): void;
    GetRowNames(): TArray<string>;
    GetAllRows(): [TArray<Record<string | number, any>>];
    ForEachRow(Callback?: (RowName: string, RowData: UScriptStruct) => boolean): void;
    IsValid(): boolean;
    __len(): number;
}
declare const UDataTable: UDataTable<any>;

