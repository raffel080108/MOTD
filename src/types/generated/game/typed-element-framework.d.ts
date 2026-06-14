declare interface FDescriptionColumn extends FEditorDataStorageColumn {
    Description: FText;
}
declare const FDescriptionColumn: FDescriptionColumn;

declare interface FDisplayNameColumn extends FEditorDataStorageColumn {
    DisplayName: FText;
}
declare const FDisplayNameColumn: FDisplayNameColumn;

declare interface FEditorDataStorageColumn {

}
declare const FEditorDataStorageColumn: FEditorDataStorageColumn;

declare interface FEditorDataStorageTag {

}
declare const FEditorDataStorageTag: FEditorDataStorageTag;

declare interface FEditorDataStorageUrlColumn extends FEditorDataStorageColumn {
    UrlString: FString;
}
declare const FEditorDataStorageUrlColumn: FEditorDataStorageUrlColumn;

declare interface FEditorDataStorageWebImageColumn extends FEditorDataStorageColumn {
    UrlString: FString;
    Width: uint16;
    Height: uint16;
}
declare const FEditorDataStorageWebImageColumn: FEditorDataStorageWebImageColumn;

declare interface FFolderTag extends FEditorDataStorageTag {

}
declare const FFolderTag: FFolderTag;

declare interface FHideRowFromUITag extends FEditorDataStorageTag {

}
declare const FHideRowFromUITag: FHideRowFromUITag;

declare interface FIsInEditingModeTag extends FEditorDataStorageTag {

}
declare const FIsInEditingModeTag: FIsInEditingModeTag;

declare interface FNameColumn extends FEditorDataStorageColumn {
    Name: FName;
}
declare const FNameColumn: FNameColumn;

declare interface FObjectOverrideColumn extends FEditorDataStorageColumn {

}
declare const FObjectOverrideColumn: FObjectOverrideColumn;

declare interface FSCCExternalRevisionIdColumn extends FEditorDataStorageColumn {
    RevisionId: FSCCRevisionId;
}
declare const FSCCExternalRevisionIdColumn: FSCCExternalRevisionIdColumn;

declare interface FSCCExternallyEditedTag extends FEditorDataStorageTag {

}
declare const FSCCExternallyEditedTag: FSCCExternallyEditedTag;

declare interface FSCCExternallyLockedColumn extends FEditorDataStorageColumn {
    LockedBy: FSCCUserInfo;
}
declare const FSCCExternallyLockedColumn: FSCCExternallyLockedColumn;

declare interface FSCCInChangelistTag extends FEditorDataStorageTag {

}
declare const FSCCInChangelistTag: FSCCInChangelistTag;

declare interface FSCCLockedTag extends FEditorDataStorageTag {

}
declare const FSCCLockedTag: FSCCLockedTag;

declare interface FSCCNotCurrentTag extends FEditorDataStorageTag {

}
declare const FSCCNotCurrentTag: FSCCNotCurrentTag;

declare interface FSCCRevisionId {
    ID: uint32;
}
declare const FSCCRevisionId: FSCCRevisionId;

declare interface FSCCRevisionIdColumn extends FEditorDataStorageColumn {
    RevisionId: FSCCRevisionId;
}
declare const FSCCRevisionIdColumn: FSCCRevisionIdColumn;

declare interface FSCCStagedTag extends FEditorDataStorageTag {

}
declare const FSCCStagedTag: FSCCStagedTag;

declare interface FSCCStatusColumn extends FEditorDataStorageColumn {
    Modification: ESCCModification;
}
declare const FSCCStatusColumn: FSCCStatusColumn;

declare interface FSCCUserInfo {
    Name: FString;
}
declare const FSCCUserInfo: FSCCUserInfo;

declare interface FScriptTypedElementHandle {

}
declare const FScriptTypedElementHandle: FScriptTypedElementHandle;

declare interface FScriptTypedElementListProxy {

}
declare const FScriptTypedElementListProxy: FScriptTypedElementListProxy;

declare interface FSimpleWidgetConstructor extends FTypedElementWidgetConstructor {

}
declare const FSimpleWidgetConstructor: FSimpleWidgetConstructor;

declare interface FSlateColorColumn extends FEditorDataStorageColumn {
    Color: FSlateColor;
}
declare const FSlateColorColumn: FSlateColorColumn;

declare interface FTEDSProcessorTestsReferenceColumn extends FEditorDataStorageColumn {

}
declare const FTEDSProcessorTestsReferenceColumn: FTEDSProcessorTestsReferenceColumn;

declare interface FTEDSProcessorTests_Linked extends FEditorDataStorageTag {

}
declare const FTEDSProcessorTests_Linked: FTEDSProcessorTests_Linked;

declare interface FTEDSProcessorTests_PrimaryTag extends FEditorDataStorageTag {

}
declare const FTEDSProcessorTests_PrimaryTag: FTEDSProcessorTests_PrimaryTag;

declare interface FTEDSProcessorTests_SecondaryTag extends FEditorDataStorageTag {

}
declare const FTEDSProcessorTests_SecondaryTag: FTEDSProcessorTests_SecondaryTag;

declare interface FTableRowParentColumn extends FEditorDataStorageColumn {

}
declare const FTableRowParentColumn: FTableRowParentColumn;

declare interface FTedsRowHandle {
    RowHandle: uint64;
}
declare const FTedsRowHandle: FTedsRowHandle;

declare interface FTestColumnA extends FEditorDataStorageColumn {

}
declare const FTestColumnA: FTestColumnA;

declare interface FTestColumnB extends FEditorDataStorageColumn {

}
declare const FTestColumnB: FTestColumnB;

declare interface FTestColumnC extends FEditorDataStorageColumn {

}
declare const FTestColumnC: FTestColumnC;

declare interface FTestColumnD extends FEditorDataStorageColumn {

}
declare const FTestColumnD: FTestColumnD;

declare interface FTestColumnDynamic extends FEditorDataStorageColumn {

}
declare const FTestColumnDynamic: FTestColumnDynamic;

declare interface FTestColumnE extends FEditorDataStorageColumn {

}
declare const FTestColumnE: FTestColumnE;

declare interface FTestColumnF extends FEditorDataStorageColumn {

}
declare const FTestColumnF: FTestColumnF;

declare interface FTestColumnG extends FEditorDataStorageColumn {

}
declare const FTestColumnG: FTestColumnG;

declare interface FTestColumnInt extends FEditorDataStorageColumn {
    TestInt: number;
}
declare const FTestColumnInt: FTestColumnInt;

declare interface FTestColumnString extends FEditorDataStorageColumn {
    TestString: FString;
}
declare const FTestColumnString: FTestColumnString;

declare interface FTestTagColumnA extends FEditorDataStorageTag {

}
declare const FTestTagColumnA: FTestTagColumnA;

declare interface FTestTagColumnB extends FEditorDataStorageTag {

}
declare const FTestTagColumnB: FTestTagColumnB;

declare interface FTestTagColumnC extends FEditorDataStorageTag {

}
declare const FTestTagColumnC: FTestTagColumnC;

declare interface FTestTagColumnD extends FEditorDataStorageTag {

}
declare const FTestTagColumnD: FTestTagColumnD;

declare interface FTest_PingPongDurPhys extends FEditorDataStorageColumn {
    Value: uint64;
}
declare const FTest_PingPongDurPhys: FTest_PingPongDurPhys;

declare interface FTest_PingPongPostPhys extends FEditorDataStorageColumn {
    Value: uint64;
}
declare const FTest_PingPongPostPhys: FTest_PingPongPostPhys;

declare interface FTest_PingPongPrePhys extends FEditorDataStorageColumn {
    Value: uint64;
}
declare const FTest_PingPongPrePhys: FTest_PingPongPrePhys;

declare interface FTypedElementActorTag extends FEditorDataStorageTag {

}
declare const FTypedElementActorTag: FTypedElementActorTag;

declare interface FTypedElementClassDefaultObjectTag extends FEditorDataStorageTag {

}
declare const FTypedElementClassDefaultObjectTag: FTypedElementClassDefaultObjectTag;

declare interface FTypedElementClassTypeInfoColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementClassTypeInfoColumn: FTypedElementClassTypeInfoColumn;

declare interface FTypedElementExternalObjectColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementExternalObjectColumn: FTypedElementExternalObjectColumn;

declare interface FTypedElementFloatValueCacheColumn extends FEditorDataStorageColumn {
    Value: number;
}
declare const FTypedElementFloatValueCacheColumn: FTypedElementFloatValueCacheColumn;

declare interface FTypedElementI32IntValueCacheColumn extends FEditorDataStorageColumn {
    Value: number;
}
declare const FTypedElementI32IntValueCacheColumn: FTypedElementI32IntValueCacheColumn;

declare interface FTypedElementI64IntValueCacheColumn extends FEditorDataStorageColumn {
    Value: int64;
}
declare const FTypedElementI64IntValueCacheColumn: FTypedElementI64IntValueCacheColumn;

declare interface FTypedElementIconOverrideColumn extends FEditorDataStorageColumn {
    IconName: FName;
}
declare const FTypedElementIconOverrideColumn: FTypedElementIconOverrideColumn;

declare interface FTypedElementLabelColumn extends FEditorDataStorageColumn {
    Label: FString;
}
declare const FTypedElementLabelColumn: FTypedElementLabelColumn;

declare interface FTypedElementLabelHashColumn extends FEditorDataStorageColumn {
    LabelHash: uint64;
}
declare const FTypedElementLabelHashColumn: FTypedElementLabelHashColumn;

declare interface FTypedElementLocalTransformColumn extends FEditorDataStorageColumn {
    Transform: FTransform;
}
declare const FTypedElementLocalTransformColumn: FTypedElementLocalTransformColumn;

declare interface FTypedElementLoosePropertyTag extends FEditorDataStorageTag {

}
declare const FTypedElementLoosePropertyTag: FTypedElementLoosePropertyTag;

declare interface FTypedElementPackageLoadedPathColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementPackageLoadedPathColumn: FTypedElementPackageLoadedPathColumn;

declare interface FTypedElementPackagePathColumn extends FEditorDataStorageColumn {
    Path: FString;
}
declare const FTypedElementPackagePathColumn: FTypedElementPackagePathColumn;

declare interface FTypedElementPackageReference extends FEditorDataStorageColumn {

}
declare const FTypedElementPackageReference: FTypedElementPackageReference;

declare interface FTypedElementPackageUnresolvedReference extends FEditorDataStorageColumn {

}
declare const FTypedElementPackageUnresolvedReference: FTypedElementPackageUnresolvedReference;

declare interface FTypedElementPackageUpdatedTag extends FEditorDataStorageTag {

}
declare const FTypedElementPackageUpdatedTag: FTypedElementPackageUpdatedTag;

declare interface FTypedElementPivotOffset extends FEditorDataStorageColumn {
    Offset: FVector;
}
declare const FTypedElementPivotOffset: FTypedElementPivotOffset;

declare interface FTypedElementPropertyBagPlaceholderTag extends FEditorDataStorageTag {

}
declare const FTypedElementPropertyBagPlaceholderTag: FTypedElementPropertyBagPlaceholderTag;

declare interface FTypedElementPropertyBagPlaceholderTypeInfoColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementPropertyBagPlaceholderTypeInfoColumn: FTypedElementPropertyBagPlaceholderTypeInfoColumn;

declare interface FTypedElementRowReferenceColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementRowReferenceColumn: FTypedElementRowReferenceColumn;

declare interface FTypedElementScriptStructTypeInfoColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementScriptStructTypeInfoColumn: FTypedElementScriptStructTypeInfoColumn;

declare interface FTypedElementSelectionColumn extends FEditorDataStorageColumn {
    SelectionSet: FName;
}
declare const FTypedElementSelectionColumn: FTypedElementSelectionColumn;

declare interface FTypedElementSlateWidgetReferenceColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementSlateWidgetReferenceColumn: FTypedElementSlateWidgetReferenceColumn;

declare interface FTypedElementSlateWidgetReferenceDeletesRowTag extends FEditorDataStorageTag {

}
declare const FTypedElementSlateWidgetReferenceDeletesRowTag: FTypedElementSlateWidgetReferenceDeletesRowTag;

declare interface FTypedElementSyncBackToWorldTag extends FEditorDataStorageTag {

}
declare const FTypedElementSyncBackToWorldTag: FTypedElementSyncBackToWorldTag;

declare interface FTypedElementSyncFromWorldInteractiveTag extends FEditorDataStorageTag {

}
declare const FTypedElementSyncFromWorldInteractiveTag: FTypedElementSyncFromWorldInteractiveTag;

declare interface FTypedElementSyncFromWorldTag extends FEditorDataStorageTag {

}
declare const FTypedElementSyncFromWorldTag: FTypedElementSyncFromWorldTag;

declare interface FTypedElementU32IntValueCacheColumn extends FEditorDataStorageColumn {
    Value: uint32;
}
declare const FTypedElementU32IntValueCacheColumn: FTypedElementU32IntValueCacheColumn;

declare interface FTypedElementU64IntValueCacheColumn extends FEditorDataStorageColumn {
    Value: uint64;
}
declare const FTypedElementU64IntValueCacheColumn: FTypedElementU64IntValueCacheColumn;

declare interface FTypedElementUObjectColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementUObjectColumn: FTypedElementUObjectColumn;

declare interface FTypedElementUObjectIdColumn extends FEditorDataStorageColumn {
    ID: uint32;
    SerialNumber: number;
}
declare const FTypedElementUObjectIdColumn: FTypedElementUObjectIdColumn;

declare interface FTypedElementViewportOutlineColorColumn extends FEditorDataStorageColumn {
    SelectionOutlineColorIndex: uint8;
}
declare const FTypedElementViewportOutlineColorColumn: FTypedElementViewportOutlineColorColumn;

declare interface FTypedElementViewportOverlayColorColumn extends FEditorDataStorageColumn {
    OverlayColor: FColor;
}
declare const FTypedElementViewportOverlayColorColumn: FTypedElementViewportOverlayColorColumn;

declare interface FTypedElementWidgetConstructor {

}
declare const FTypedElementWidgetConstructor: FTypedElementWidgetConstructor;

declare interface FTypedElementWorldColumn extends FEditorDataStorageColumn {

}
declare const FTypedElementWorldColumn: FTypedElementWorldColumn;

declare interface FUnresolvedTableRowParentColumn extends FEditorDataStorageColumn {

}
declare const FUnresolvedTableRowParentColumn: FUnresolvedTableRowParentColumn;

declare interface FVisibleInEditorColumn extends FEditorDataStorageColumn {

}
declare const FVisibleInEditorColumn: FVisibleInEditorColumn;

declare interface FWidgetFactoryColumn extends FEditorDataStorageColumn {

}
declare const FWidgetFactoryColumn: FWidgetFactoryColumn;

declare interface FWidgetFactoryConditionsColumn extends FEditorDataStorageColumn {

}
declare const FWidgetFactoryConditionsColumn: FWidgetFactoryConditionsColumn;

declare interface FWidgetFactoryConstructorColumn extends FEditorDataStorageColumn {

}
declare const FWidgetFactoryConstructorColumn: FWidgetFactoryConstructorColumn;

declare interface FWidgetFactoryConstructorTypeInfoColumn extends FEditorDataStorageColumn {

}
declare const FWidgetFactoryConstructorTypeInfoColumn: FWidgetFactoryConstructorTypeInfoColumn;

declare interface FWidgetPurposeColumn extends FEditorDataStorageColumn {

}
declare const FWidgetPurposeColumn: FWidgetPurposeColumn;

declare interface FWidgetPurposeNameColumn extends FEditorDataStorageColumn {
    Namespace: FName;
    Name: FName;
    Frame: FName;
}
declare const FWidgetPurposeNameColumn: FWidgetPurposeNameColumn;

declare interface ITestTypedElementInterfaceA extends IInterface {
    SetDisplayName(InElementHandle: FScriptTypedElementHandle, InNewName: FText, bNotify: boolean): boolean;
    GetDisplayName(InElementHandle: FScriptTypedElementHandle): FText;
}
declare const ITestTypedElementInterfaceA: ITestTypedElementInterfaceA;

declare interface ITestTypedElementInterfaceB extends IInterface {
    MarkAsTested(InElementHandle: FScriptTypedElementHandle): boolean;
}
declare const ITestTypedElementInterfaceB: ITestTypedElementInterfaceB;

declare interface ITestTypedElementInterfaceC extends IInterface {
    GetIsTested(InElementHandle: FScriptTypedElementHandle): boolean;
}
declare const ITestTypedElementInterfaceC: ITestTypedElementInterfaceC;

declare interface ITypedElementCounterInterface extends IInterface {

}
declare const ITypedElementCounterInterface: ITypedElementCounterInterface;

declare interface UEditorDataStorageFactory extends UObject {

}
declare const UEditorDataStorageFactory: UEditorDataStorageFactory;

declare interface UTestTypedElementInterfaceA_ImplTyped extends UObject {

}
declare const UTestTypedElementInterfaceA_ImplTyped: UTestTypedElementInterfaceA_ImplTyped;

declare interface UTestTypedElementInterfaceA_ImplUntyped extends UObject {

}
declare const UTestTypedElementInterfaceA_ImplUntyped: UTestTypedElementInterfaceA_ImplUntyped;

declare interface UTestTypedElementInterfaceBAndC_Typed extends UObject {

}
declare const UTestTypedElementInterfaceBAndC_Typed: UTestTypedElementInterfaceBAndC_Typed;

declare interface UTest_PingPongBetweenPhaseFactory extends UEditorDataStorageFactory {

}
declare const UTest_PingPongBetweenPhaseFactory: UTest_PingPongBetweenPhaseFactory;

declare interface UTypedElementHandleLibrary extends UObject {
    Release(ElementHandle: FScriptTypedElementHandle): void;
    NotEqual(LHS: FScriptTypedElementHandle, RHS: FScriptTypedElementHandle): boolean;
    IsSet(ElementHandle: FScriptTypedElementHandle): boolean;
    Equal(LHS: FScriptTypedElementHandle, RHS: FScriptTypedElementHandle): boolean;
}
declare const UTypedElementHandleLibrary: UTypedElementHandleLibrary;

declare interface UTypedElementListLibrary extends UObject {
    Shrink(ElementList: FScriptTypedElementListProxy): void;
    Reset(ElementList: FScriptTypedElementListProxy): void;
    Reserve(ElementList: FScriptTypedElementListProxy, Size: number): void;
    Remove(ElementList: FScriptTypedElementListProxy, ElementHandle: FScriptTypedElementHandle): boolean;
    Num(ElementList: FScriptTypedElementListProxy): number;
    IsValidIndex(ElementList: FScriptTypedElementListProxy, Index: number): boolean;
    HasElementsOfType(ElementList: FScriptTypedElementListProxy, ElementTypeName: FName): boolean;
    HasElements(ElementList: FScriptTypedElementListProxy, BaseInterfaceType: TSubclassOf<UInterface>): boolean;
    GetElementInterface(ElementList: FScriptTypedElementListProxy, ElementHandle: FScriptTypedElementHandle, BaseInterfaceType: TSubclassOf<UInterface>): UObject;
    GetElementHandles(ElementList: FScriptTypedElementListProxy, BaseInterfaceType: TSubclassOf<UInterface>): TArray<FScriptTypedElementHandle>;
    GetElementHandleAt(ElementList: FScriptTypedElementListProxy, Index: number): FScriptTypedElementHandle;
    Empty(ElementList: FScriptTypedElementListProxy, Slack: number): void;
    CreateScriptElementList(Registry: UTypedElementRegistry): FScriptTypedElementListProxy;
    CountElementsOfType(ElementList: FScriptTypedElementListProxy, ElementTypeName: FName): number;
    CountElements(ElementList: FScriptTypedElementListProxy, BaseInterfaceType: TSubclassOf<UInterface>): number;
    Contains(ElementList: FScriptTypedElementListProxy, ElementHandle: FScriptTypedElementHandle): boolean;
    Clone(ElementList: FScriptTypedElementListProxy): FScriptTypedElementListProxy;
    AppendList(ElementList: FScriptTypedElementListProxy, OtherElementList: FScriptTypedElementListProxy): void;
    Append(ElementList: FScriptTypedElementListProxy, ElementHandles: TArray<FScriptTypedElementHandle>): void;
    Add(ElementList: FScriptTypedElementListProxy, ElementHandle: FScriptTypedElementHandle): boolean;
}
declare const UTypedElementListLibrary: UTypedElementListLibrary;

declare interface UTypedElementRegistry extends UObject {
    GetInstance(): UTypedElementRegistry;
    GetElementInterface(InElementHandle: FScriptTypedElementHandle, InBaseInterfaceType: TSubclassOf<UInterface>): UObject;
}
declare const UTypedElementRegistry: UTypedElementRegistry;

