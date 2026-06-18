declare interface FDescriptionColumn extends FEditorDataStorageColumn {
    Description: string;
}

declare interface FDisplayNameColumn extends FEditorDataStorageColumn {
    DisplayName: string;
}

declare type FEditorDataStorageColumn = object;

declare type FEditorDataStorageTag = object;

declare interface FEditorDataStorageUrlColumn extends FEditorDataStorageColumn {
    UrlString: string;
}

declare interface FEditorDataStorageWebImageColumn extends FEditorDataStorageColumn {
    UrlString: string;
    Width: number;
    Height: number;
}

declare interface FFolderTag extends FEditorDataStorageTag {

}

declare interface FHideRowFromUITag extends FEditorDataStorageTag {

}

declare interface FIsInEditingModeTag extends FEditorDataStorageTag {

}

declare interface FNameColumn extends FEditorDataStorageColumn {
    Name: string;
}

declare interface FObjectOverrideColumn extends FEditorDataStorageColumn {

}

declare interface FSCCExternalRevisionIdColumn extends FEditorDataStorageColumn {
    RevisionId: FSCCRevisionId;
}

declare interface FSCCExternallyEditedTag extends FEditorDataStorageTag {

}

declare interface FSCCExternallyLockedColumn extends FEditorDataStorageColumn {
    LockedBy: FSCCUserInfo;
}

declare interface FSCCInChangelistTag extends FEditorDataStorageTag {

}

declare interface FSCCLockedTag extends FEditorDataStorageTag {

}

declare interface FSCCNotCurrentTag extends FEditorDataStorageTag {

}

declare interface FSCCRevisionId {
    ID: number;
}

declare interface FSCCRevisionIdColumn extends FEditorDataStorageColumn {
    RevisionId: FSCCRevisionId;
}

declare interface FSCCStagedTag extends FEditorDataStorageTag {

}

declare interface FSCCStatusColumn extends FEditorDataStorageColumn {
    Modification: ESCCModification;
}

declare interface FSCCUserInfo {
    Name: string;
}

declare type FScriptTypedElementHandle = object;

declare type FScriptTypedElementListProxy = object;

declare interface FSimpleWidgetConstructor extends FTypedElementWidgetConstructor {

}

declare interface FSlateColorColumn extends FEditorDataStorageColumn {
    Color: FSlateColor;
}

declare interface FTEDSProcessorTestsReferenceColumn extends FEditorDataStorageColumn {

}

declare interface FTEDSProcessorTests_Linked extends FEditorDataStorageTag {

}

declare interface FTEDSProcessorTests_PrimaryTag extends FEditorDataStorageTag {

}

declare interface FTEDSProcessorTests_SecondaryTag extends FEditorDataStorageTag {

}

declare interface FTableRowParentColumn extends FEditorDataStorageColumn {

}

declare interface FTedsRowHandle {
    RowHandle: number;
}

declare interface FTestColumnA extends FEditorDataStorageColumn {

}

declare interface FTestColumnB extends FEditorDataStorageColumn {

}

declare interface FTestColumnC extends FEditorDataStorageColumn {

}

declare interface FTestColumnD extends FEditorDataStorageColumn {

}

declare interface FTestColumnDynamic extends FEditorDataStorageColumn {

}

declare interface FTestColumnE extends FEditorDataStorageColumn {

}

declare interface FTestColumnF extends FEditorDataStorageColumn {

}

declare interface FTestColumnG extends FEditorDataStorageColumn {

}

declare interface FTestColumnInt extends FEditorDataStorageColumn {
    TestInt: number;
}

declare interface FTestColumnString extends FEditorDataStorageColumn {
    TestString: string;
}

declare interface FTestTagColumnA extends FEditorDataStorageTag {

}

declare interface FTestTagColumnB extends FEditorDataStorageTag {

}

declare interface FTestTagColumnC extends FEditorDataStorageTag {

}

declare interface FTestTagColumnD extends FEditorDataStorageTag {

}

declare interface FTest_PingPongDurPhys extends FEditorDataStorageColumn {
    Value: number;
}

declare interface FTest_PingPongPostPhys extends FEditorDataStorageColumn {
    Value: number;
}

declare interface FTest_PingPongPrePhys extends FEditorDataStorageColumn {
    Value: number;
}

declare interface FTypedElementActorTag extends FEditorDataStorageTag {

}

declare interface FTypedElementClassDefaultObjectTag extends FEditorDataStorageTag {

}

declare interface FTypedElementClassTypeInfoColumn extends FEditorDataStorageColumn {

}

declare interface FTypedElementExternalObjectColumn extends FEditorDataStorageColumn {

}

declare interface FTypedElementFloatValueCacheColumn extends FEditorDataStorageColumn {
    Value: number;
}

declare interface FTypedElementI32IntValueCacheColumn extends FEditorDataStorageColumn {
    Value: number;
}

declare interface FTypedElementI64IntValueCacheColumn extends FEditorDataStorageColumn {
    Value: number;
}

declare interface FTypedElementIconOverrideColumn extends FEditorDataStorageColumn {
    IconName: string;
}

declare interface FTypedElementLabelColumn extends FEditorDataStorageColumn {
    Label: string;
}

declare interface FTypedElementLabelHashColumn extends FEditorDataStorageColumn {
    LabelHash: number;
}

declare interface FTypedElementLocalTransformColumn extends FEditorDataStorageColumn {
    Transform: FTransform;
}

declare interface FTypedElementLoosePropertyTag extends FEditorDataStorageTag {

}

declare interface FTypedElementPackageLoadedPathColumn extends FEditorDataStorageColumn {

}

declare interface FTypedElementPackagePathColumn extends FEditorDataStorageColumn {
    Path: string;
}

declare interface FTypedElementPackageReference extends FEditorDataStorageColumn {

}

declare interface FTypedElementPackageUnresolvedReference extends FEditorDataStorageColumn {

}

declare interface FTypedElementPackageUpdatedTag extends FEditorDataStorageTag {

}

declare interface FTypedElementPivotOffset extends FEditorDataStorageColumn {
    Offset: FVector;
}

declare interface FTypedElementPropertyBagPlaceholderTag extends FEditorDataStorageTag {

}

declare interface FTypedElementPropertyBagPlaceholderTypeInfoColumn extends FEditorDataStorageColumn {

}

declare interface FTypedElementRowReferenceColumn extends FEditorDataStorageColumn {

}

declare interface FTypedElementScriptStructTypeInfoColumn extends FEditorDataStorageColumn {

}

declare interface FTypedElementSelectionColumn extends FEditorDataStorageColumn {
    SelectionSet: string;
}

declare interface FTypedElementSlateWidgetReferenceColumn extends FEditorDataStorageColumn {

}

declare interface FTypedElementSlateWidgetReferenceDeletesRowTag extends FEditorDataStorageTag {

}

declare interface FTypedElementSyncBackToWorldTag extends FEditorDataStorageTag {

}

declare interface FTypedElementSyncFromWorldInteractiveTag extends FEditorDataStorageTag {

}

declare interface FTypedElementSyncFromWorldTag extends FEditorDataStorageTag {

}

declare interface FTypedElementU32IntValueCacheColumn extends FEditorDataStorageColumn {
    Value: number;
}

declare interface FTypedElementU64IntValueCacheColumn extends FEditorDataStorageColumn {
    Value: number;
}

declare interface FTypedElementUObjectColumn extends FEditorDataStorageColumn {

}

declare interface FTypedElementUObjectIdColumn extends FEditorDataStorageColumn {
    ID: number;
    SerialNumber: number;
}

declare interface FTypedElementViewportOutlineColorColumn extends FEditorDataStorageColumn {
    SelectionOutlineColorIndex: number;
}

declare interface FTypedElementViewportOverlayColorColumn extends FEditorDataStorageColumn {
    OverlayColor: FColor;
}

declare type FTypedElementWidgetConstructor = object;

declare interface FTypedElementWorldColumn extends FEditorDataStorageColumn {

}

declare interface FUnresolvedTableRowParentColumn extends FEditorDataStorageColumn {

}

declare interface FVisibleInEditorColumn extends FEditorDataStorageColumn {

}

declare interface FWidgetFactoryColumn extends FEditorDataStorageColumn {

}

declare interface FWidgetFactoryConditionsColumn extends FEditorDataStorageColumn {

}

declare interface FWidgetFactoryConstructorColumn extends FEditorDataStorageColumn {

}

declare interface FWidgetFactoryConstructorTypeInfoColumn extends FEditorDataStorageColumn {

}

declare interface FWidgetPurposeColumn extends FEditorDataStorageColumn {

}

declare interface FWidgetPurposeNameColumn extends FEditorDataStorageColumn {
    Namespace: string;
    Name: string;
    Frame: string;
}

declare interface ITestTypedElementInterfaceA extends IInterface {
    readonly __static_ITestTypedElementInterfaceA: {
        SetDisplayName(InElementHandle: FScriptTypedElementHandle, InNewName: string, bNotify: boolean): boolean;
        GetDisplayName(InElementHandle: FScriptTypedElementHandle): string;
    };
    readonly __staticRegistry: 
        ITestTypedElementInterfaceA['__static_ITestTypedElementInterfaceA'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ITestTypedElementInterfaceB extends IInterface {
    readonly __static_ITestTypedElementInterfaceB: {
        MarkAsTested(InElementHandle: FScriptTypedElementHandle): boolean;
    };
    readonly __staticRegistry: 
        ITestTypedElementInterfaceB['__static_ITestTypedElementInterfaceB'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ITestTypedElementInterfaceC extends IInterface {
    readonly __static_ITestTypedElementInterfaceC: {
        GetIsTested(InElementHandle: FScriptTypedElementHandle): boolean;
    };
    readonly __staticRegistry: 
        ITestTypedElementInterfaceC['__static_ITestTypedElementInterfaceC'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ITypedElementCounterInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UEditorDataStorageFactory extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UTestTypedElementInterfaceA_ImplTyped extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UTestTypedElementInterfaceA_ImplUntyped extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UTestTypedElementInterfaceBAndC_Typed extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UTest_PingPongBetweenPhaseFactory extends UEditorDataStorageFactory {
    readonly __staticRegistry: 
        UEditorDataStorageFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UEditorDataStorageFactory['__propertyRegistry'];
}

declare interface UTypedElementHandleLibrary extends UObject {
    readonly __static_UTypedElementHandleLibrary: {
        Release(ElementHandle: FScriptTypedElementHandle): void;
        NotEqual(LHS: FScriptTypedElementHandle, RHS: FScriptTypedElementHandle): boolean;
        IsSet(ElementHandle: FScriptTypedElementHandle): boolean;
        Equal(LHS: FScriptTypedElementHandle, RHS: FScriptTypedElementHandle): boolean;
    };
    readonly __staticRegistry: 
        UTypedElementHandleLibrary['__static_UTypedElementHandleLibrary'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UTypedElementListLibrary extends UObject {
    readonly __static_UTypedElementListLibrary: {
        Shrink(ElementList: FScriptTypedElementListProxy): void;
        Reset(ElementList: FScriptTypedElementListProxy): void;
        Reserve(ElementList: FScriptTypedElementListProxy, Size: number): void;
        Remove(ElementList: FScriptTypedElementListProxy, ElementHandle: FScriptTypedElementHandle): boolean;
        Num(ElementList: FScriptTypedElementListProxy): number;
        IsValidIndex(ElementList: FScriptTypedElementListProxy, Index: number): boolean;
        HasElementsOfType(ElementList: FScriptTypedElementListProxy, ElementTypeName: string): boolean;
        HasElements(ElementList: FScriptTypedElementListProxy, BaseInterfaceType: TSubclassOf<UInterface>): boolean;
        GetElementInterface(ElementList: FScriptTypedElementListProxy, ElementHandle: FScriptTypedElementHandle, BaseInterfaceType: TSubclassOf<UInterface>): UObject;
        GetElementHandles(ElementList: FScriptTypedElementListProxy, BaseInterfaceType: TSubclassOf<UInterface>): FScriptTypedElementHandle[];
        GetElementHandleAt(ElementList: FScriptTypedElementListProxy, Index: number): FScriptTypedElementHandle;
        Empty(ElementList: FScriptTypedElementListProxy, Slack: number): void;
        CreateScriptElementList(Registry: UTypedElementRegistry): FScriptTypedElementListProxy;
        CountElementsOfType(ElementList: FScriptTypedElementListProxy, ElementTypeName: string): number;
        CountElements(ElementList: FScriptTypedElementListProxy, BaseInterfaceType: TSubclassOf<UInterface>): number;
        Contains(ElementList: FScriptTypedElementListProxy, ElementHandle: FScriptTypedElementHandle): boolean;
        Clone(ElementList: FScriptTypedElementListProxy): FScriptTypedElementListProxy;
        AppendList(ElementList: FScriptTypedElementListProxy, OtherElementList: FScriptTypedElementListProxy): void;
        Append(ElementList: FScriptTypedElementListProxy, ElementHandles: FScriptTypedElementHandle[]): void;
        Add(ElementList: FScriptTypedElementListProxy, ElementHandle: FScriptTypedElementHandle): boolean;
    };
    readonly __staticRegistry: 
        UTypedElementListLibrary['__static_UTypedElementListLibrary'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UTypedElementRegistry extends UObject {
    readonly __static_UTypedElementRegistry: {
        GetInstance(): UTypedElementRegistry;
        GetElementInterface(InElementHandle: FScriptTypedElementHandle, InBaseInterfaceType: TSubclassOf<UInterface>): UObject;
    };
    readonly __staticRegistry: 
        UTypedElementRegistry['__static_UTypedElementRegistry'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

