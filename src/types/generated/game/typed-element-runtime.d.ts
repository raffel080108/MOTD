declare interface FTypedElementAssetDataReferencedOptions {
    bOnlyTopLevelAsset: boolean;
}

declare interface FTypedElementIsSelectedOptions {
    bAllowIndirect: boolean;
}

declare interface FTypedElementSelectionNormalizationOptions {
    bExpandGroups: boolean;
    bFollowAttachment: boolean;
}

declare interface FTypedElementSelectionOptions {
    bAllowHidden: boolean;
    bAllowGroups: boolean;
    bAllowLegacyNotifications: boolean;
    bWarnIfLocked: boolean;
    bAllowSubRootSelection: boolean;
    ChildElementInclusionMethod: ETypedElementChildInclusionMethod;
}

declare interface FTypedElementSelectionSetState {
    CreatedFromSelectionSet: TWeakObjectPtr<UTypedElementSelectionSet>;
}

declare interface ITypedElementAssetDataInterface extends IInterface {
    readonly __static_ITypedElementAssetDataInterface: {
        GetAssetData(InElementHandle: FScriptTypedElementHandle): FAssetData;
        GetAllReferencedAssetDatas(InElementHandle: FScriptTypedElementHandle): FAssetData[];
    };
    readonly __staticRegistry: 
        ITypedElementAssetDataInterface['__static_ITypedElementAssetDataInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ITypedElementHierarchyInterface extends IInterface {
    readonly __static_ITypedElementHierarchyInterface: {
        GetParentElement(InElementHandle: FScriptTypedElementHandle, bAllowCreate: boolean): FScriptTypedElementHandle;
        GetChildElements(InElementHandle: FScriptTypedElementHandle, OutElementHandles: FScriptTypedElementHandle[], bAllowCreate: boolean): void;
    };
    readonly __staticRegistry: 
        ITypedElementHierarchyInterface['__static_ITypedElementHierarchyInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ITypedElementObjectInterface extends IInterface {
    readonly __static_ITypedElementObjectInterface: {
        GetObjectClass(InElementHandle: FScriptTypedElementHandle): UClass;
        GetObject(InElementHandle: FScriptTypedElementHandle): UObject;
    };
    readonly __staticRegistry: 
        ITypedElementObjectInterface['__static_ITypedElementObjectInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ITypedElementPrimitiveCustomDataInterface extends IInterface {
    readonly __static_ITypedElementPrimitiveCustomDataInterface: {
        SetCustomDataValue(InElementHandle: FScriptTypedElementHandle, CustomDataIndex: number, CustomDataValue: number, bMarkRenderStateDirty: boolean): void;
        SetCustomData(InElementHandle: FScriptTypedElementHandle, CustomDataFloats: number[], bMarkRenderStateDirty: boolean): void;
    };
    readonly __staticRegistry: 
        ITypedElementPrimitiveCustomDataInterface['__static_ITypedElementPrimitiveCustomDataInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ITypedElementSelectionInterface extends IInterface {
    readonly __static_ITypedElementSelectionInterface: {
        SelectElement(InElementHandle: FScriptTypedElementHandle, InSelectionSet: FScriptTypedElementListProxy, InSelectionOptions: FTypedElementSelectionOptions): boolean;
        IsElementSelected(InElementHandle: FScriptTypedElementHandle, InSelectionSet: FScriptTypedElementListProxy, InSelectionOptions: FTypedElementIsSelectedOptions): boolean;
        GetSelectionElement(InElementHandle: FScriptTypedElementHandle, InCurrentSelection: FScriptTypedElementListProxy, InSelectionMethod: ETypedElementSelectionMethod): FScriptTypedElementHandle;
        DeselectElement(InElementHandle: FScriptTypedElementHandle, InSelectionSet: FScriptTypedElementListProxy, InSelectionOptions: FTypedElementSelectionOptions): boolean;
        CanSelectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
        CanDeselectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
        AllowSelectionModifiers(InElementHandle: FScriptTypedElementHandle, InSelectionSet: FScriptTypedElementListProxy): boolean;
    };
    readonly __staticRegistry: 
        ITypedElementSelectionInterface['__static_ITypedElementSelectionInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UTypedElementSelectionSet extends UObject {
    readonly __static_UTypedElementSelectionSet: {
        SetSelection(InElementHandles: FScriptTypedElementHandle[], InSelectionOptions: FTypedElementSelectionOptions): boolean;
        SelectElements(InElementHandles: FScriptTypedElementHandle[], InSelectionOptions: FTypedElementSelectionOptions): boolean;
        SelectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
        RestoreSelectionState(InSelectionState: FTypedElementSelectionSetState): void;
        OnPreChangeDynamic__DelegateSignature(SelectionSet: UTypedElementSelectionSet): void;
        OnChangeDynamic__DelegateSignature(SelectionSet: UTypedElementSelectionSet): void;
        K2_GetSelectedElementHandles(InBaseInterfaceType: TSubclassOf<UInterface>): FScriptTypedElementHandle[];
        IsElementSelected(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementIsSelectedOptions): boolean;
        HasSelectedObjects(InRequiredClass: UClass): boolean;
        HasSelectedElements(InBaseInterfaceType: TSubclassOf<UInterface>): boolean;
        GetTopSelectedObject(InRequiredClass: UClass): UObject;
        GetSelectionElement(InElementHandle: FScriptTypedElementHandle, InSelectionMethod: ETypedElementSelectionMethod): FScriptTypedElementHandle;
        GetSelectedObjects(InRequiredClass: UClass): UObject[];
        GetNumSelectedElements(): number;
        GetCurrentSelectionState(): FTypedElementSelectionSetState;
        GetBottomSelectedObject(InRequiredClass: UClass): UObject;
        DeselectElements(InElementHandles: FScriptTypedElementHandle[], InSelectionOptions: FTypedElementSelectionOptions): boolean;
        DeselectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
        CountSelectedObjects(InRequiredClass: UClass): number;
        CountSelectedElements(InBaseInterfaceType: TSubclassOf<UInterface>): number;
        ClearSelection(InSelectionOptions: FTypedElementSelectionOptions): boolean;
        CanSelectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
        CanDeselectElement(InElementHandle: FScriptTypedElementHandle, InSelectionOptions: FTypedElementSelectionOptions): boolean;
        AllowSelectionModifiers(InElementHandle: FScriptTypedElementHandle): boolean;
    };
    readonly __properties_UTypedElementSelectionSet: {
        OnPreSelectionChange: FTypedElementSelectionSetOnPreSelectionChange;
        OnSelectionChange: FTypedElementSelectionSetOnSelectionChange;
    };
    readonly __staticRegistry: 
        UTypedElementSelectionSet['__static_UTypedElementSelectionSet'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UTypedElementSelectionSet['__properties_UTypedElementSelectionSet'] &
        UObject['__propertyRegistry'];
}

declare interface UTypedElementSelectionSetLibrary extends UObject {
    readonly __static_UTypedElementSelectionSetLibrary: {
        SetSelectionFromList(SelectionSet: UTypedElementSelectionSet, ElementList: FScriptTypedElementListProxy, SelectionOptions: FTypedElementSelectionOptions): boolean;
        SelectElementsFromList(SelectionSet: UTypedElementSelectionSet, ElementList: FScriptTypedElementListProxy, SelectionOptions: FTypedElementSelectionOptions): boolean;
        GetNormalizedSelection(SelectionSet: UTypedElementSelectionSet, NormalizationOptions: FTypedElementSelectionNormalizationOptions): FScriptTypedElementListProxy;
        GetNormalizedElementList(SelectionSet: UTypedElementSelectionSet, ElementList: FScriptTypedElementListProxy, NormalizationOptions: FTypedElementSelectionNormalizationOptions): FScriptTypedElementListProxy;
        DeselectElementsFromList(SelectionSet: UTypedElementSelectionSet, ElementList: FScriptTypedElementListProxy, SelectionOptions: FTypedElementSelectionOptions): boolean;
    };
    readonly __staticRegistry: 
        UTypedElementSelectionSetLibrary['__static_UTypedElementSelectionSetLibrary'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

