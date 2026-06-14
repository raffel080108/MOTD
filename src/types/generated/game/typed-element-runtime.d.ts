declare interface FTypedElementAssetDataReferencedOptions {
    bOnlyTopLevelAsset: boolean;
}
declare const FTypedElementAssetDataReferencedOptions: FTypedElementAssetDataReferencedOptions;

declare interface FTypedElementIsSelectedOptions {
    bAllowIndirect: boolean;
}
declare const FTypedElementIsSelectedOptions: FTypedElementIsSelectedOptions;

declare interface FTypedElementSelectionNormalizationOptions {
    bExpandGroups: boolean;
    bFollowAttachment: boolean;
}
declare const FTypedElementSelectionNormalizationOptions: FTypedElementSelectionNormalizationOptions;

declare interface FTypedElementSelectionOptions {
    bAllowHidden: boolean;
    bAllowGroups: boolean;
    bAllowLegacyNotifications: boolean;
    bWarnIfLocked: boolean;
    bAllowSubRootSelection: boolean;
    ChildElementInclusionMethod: ETypedElementChildInclusionMethod;
}
declare const FTypedElementSelectionOptions: FTypedElementSelectionOptions;

declare interface FTypedElementSelectionSetState {
    CreatedFromSelectionSet: TWeakObjectPtr<UTypedElementSelectionSet>;
}
declare const FTypedElementSelectionSetState: FTypedElementSelectionSetState;

declare interface ITypedElementAssetDataInterface extends IInterface {
    GetAssetData(InElementHandle: FScriptTypedElementHandle): FAssetData;
    GetAllReferencedAssetDatas(InElementHandle: FScriptTypedElementHandle): TArray<FAssetData>;
}
declare const ITypedElementAssetDataInterface: ITypedElementAssetDataInterface;

declare interface ITypedElementHierarchyInterface extends IInterface {
    GetParentElement(InElementHandle: FScriptTypedElementHandle, bAllowCreate: boolean): FScriptTypedElementHandle;
    GetChildElements(InElementHandle: FScriptTypedElementHandle, OutElementHandles: TArray<FScriptTypedElementHandle>, bAllowCreate: boolean): void;
}
declare const ITypedElementHierarchyInterface: ITypedElementHierarchyInterface;

declare interface ITypedElementObjectInterface extends IInterface {
    GetObjectClass(InElementHandle: FScriptTypedElementHandle): UClass;
    GetObject(InElementHandle: FScriptTypedElementHandle): UObject;
}
declare const ITypedElementObjectInterface: ITypedElementObjectInterface;

declare interface ITypedElementPrimitiveCustomDataInterface extends IInterface {
    SetCustomDataValue(InElementHandle: FScriptTypedElementHandle, CustomDataIndex: number, CustomDataValue: number, bMarkRenderStateDirty: boolean): void;
    SetCustomData(InElementHandle: FScriptTypedElementHandle, CustomDataFloats: TArray<number>, bMarkRenderStateDirty: boolean): void;
}
declare const ITypedElementPrimitiveCustomDataInterface: ITypedElementPrimitiveCustomDataInterface;

declare interface ITypedElementSelectionInterface extends IInterface {
    SelectElement(InElementHandle: FScriptTypedElementHandle, InSelectionSet: FScriptTypedElementListProxy, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    IsElementSelected(InElementHandle: FScriptTypedElementHandle, InSelectionSet: FScriptTypedElementListProxy, InSelectionOptions: FTypedElementIsSelectedOptions): boolean;
    GetSelectionElement(InElementHandle: FScriptTypedElementHandle, InCurrentSelection: FScriptTypedElementListProxy, InSelectionMethod: ETypedElementSelectionMethod): FScriptTypedElementHandle;
    DeselectElement(InElementHandle: FScriptTypedElementHandle, InSelectionSet: FScriptTypedElementListProxy, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    CanSelectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    CanDeselectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    AllowSelectionModifiers(InElementHandle: FScriptTypedElementHandle, InSelectionSet: FScriptTypedElementListProxy): boolean;
}
declare const ITypedElementSelectionInterface: ITypedElementSelectionInterface;

declare interface UTypedElementSelectionSet extends UObject {
    OnPreSelectionChange: FTypedElementSelectionSetOnPreSelectionChange;
    OnSelectionChange: FTypedElementSelectionSetOnSelectionChange;
    SetSelection(InElementHandles: TArray<FScriptTypedElementHandle>, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    SelectElements(InElementHandles: TArray<FScriptTypedElementHandle>, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    SelectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    RestoreSelectionState(InSelectionState: FTypedElementSelectionSetState): void;
    OnPreChangeDynamic__DelegateSignature(SelectionSet: UTypedElementSelectionSet): void;
    OnChangeDynamic__DelegateSignature(SelectionSet: UTypedElementSelectionSet): void;
    K2_GetSelectedElementHandles(InBaseInterfaceType: TSubclassOf<UInterface>): TArray<FScriptTypedElementHandle>;
    IsElementSelected(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementIsSelectedOptions): boolean;
    HasSelectedObjects(InRequiredClass: UClass): boolean;
    HasSelectedElements(InBaseInterfaceType: TSubclassOf<UInterface>): boolean;
    GetTopSelectedObject(InRequiredClass: UClass): UObject;
    GetSelectionElement(InElementHandle: FScriptTypedElementHandle, InSelectionMethod: ETypedElementSelectionMethod): FScriptTypedElementHandle;
    GetSelectedObjects(InRequiredClass: UClass): TArray<UObject>;
    GetNumSelectedElements(): number;
    GetCurrentSelectionState(): FTypedElementSelectionSetState;
    GetBottomSelectedObject(InRequiredClass: UClass): UObject;
    DeselectElements(InElementHandles: TArray<FScriptTypedElementHandle>, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    DeselectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    CountSelectedObjects(InRequiredClass: UClass): number;
    CountSelectedElements(InBaseInterfaceType: TSubclassOf<UInterface>): number;
    ClearSelection(InSelectionOptions: FTypedElementSelectionOptions): boolean;
    CanSelectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    CanDeselectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
    AllowSelectionModifiers(InElementHandle: FScriptTypedElementHandle): boolean;
}
declare const UTypedElementSelectionSet: UTypedElementSelectionSet;

declare interface UTypedElementSelectionSetLibrary extends UObject {
    SetSelectionFromList(SelectionSet: UTypedElementSelectionSet, ElementList: FScriptTypedElementListProxy, SelectionOptions: FTypedElementSelectionOptions): boolean;
    SelectElementsFromList(SelectionSet: UTypedElementSelectionSet, ElementList: FScriptTypedElementListProxy, SelectionOptions: FTypedElementSelectionOptions): boolean;
    GetNormalizedSelection(SelectionSet: UTypedElementSelectionSet, NormalizationOptions: FTypedElementSelectionNormalizationOptions): FScriptTypedElementListProxy;
    GetNormalizedElementList(SelectionSet: UTypedElementSelectionSet, ElementList: FScriptTypedElementListProxy, NormalizationOptions: FTypedElementSelectionNormalizationOptions): FScriptTypedElementListProxy;
    DeselectElementsFromList(SelectionSet: UTypedElementSelectionSet, ElementList: FScriptTypedElementListProxy, SelectionOptions: FTypedElementSelectionOptions): boolean;
}
declare const UTypedElementSelectionSetLibrary: UTypedElementSelectionSetLibrary;

