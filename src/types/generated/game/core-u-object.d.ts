declare interface FARFilter {
    PackageNames: string[];
    PackagePaths: string[];
    SoftObjectPaths: FSoftObjectPath[];
    ClassNames: string[];
    ClassPaths: FTopLevelAssetPath[];
    RecursiveClassesExclusionSet: string[];
    RecursiveClassPathsExclusionSet: FTopLevelAssetPath[];
    bRecursivePaths: boolean;
    bRecursiveClasses: boolean;
    bIncludeOnlyOnDiskAssets: boolean;
}

declare interface FAssetBundleData {
    Bundles: FAssetBundleEntry[];
}

declare interface FAssetBundleEntry {
    BundleName: string;
    AssetPaths: FTopLevelAssetPath[];
}

declare interface FAssetData {
    PackageName: string;
    PackagePath: string;
    AssetName: string;
    AssetClass: string;
    AssetClassPath: FTopLevelAssetPath;
}

declare interface FAutomationEvent {
    Type: EAutomationEventType;
    Message: string;
    Context: string;
    Artifact: FGuid;
}

declare interface FAutomationExecutionEntry {
    Event: FAutomationEvent;
    Filename: string;
    LineNumber: number;
    Timestamp: FDateTime;
}

declare interface FBox {
    min: FVector;
    max: FVector;
    IsValid: boolean;
}

declare interface FBox2D {
    min: FVector2D;
    max: FVector2D;
    bIsValid: boolean;
}

declare interface FBox2f {
    min: FVector2f;
    max: FVector2f;
    bIsValid: boolean;
}

declare interface FBox3d {
    min: FVector3d;
    max: FVector3d;
    IsValid: boolean;
}

declare interface FBox3f {
    min: FVector3f;
    max: FVector3f;
    IsValid: boolean;
}

declare interface FBoxSphereBounds {
    Origin: FVector;
    BoxExtent: FVector;
    SphereRadius: number;
}

declare interface FBoxSphereBounds3d {
    Origin: FVector3d;
    BoxExtent: FVector3d;
    SphereRadius: number;
}

declare interface FBoxSphereBounds3f {
    Origin: FVector3f;
    BoxExtent: FVector3f;
    SphereRadius: number;
}

declare interface FColor {
    B: number;
    G: number;
    R: number;
    A: number;
}

declare type FConstSharedStruct = object;

declare interface FDateTime {
    Ticks: number;
}

declare type FDefault__PropertyBag = object;

declare type FDefault__ScriptStruct = object;

declare type FDefault__UserDefinedStruct = object;

declare type FDefault__VerseStruct = object;

declare interface FDirectoryPath {
    Path: string;
}

declare interface FDoubleRange {
    LowerBound: FDoubleRangeBound;
    UpperBound: FDoubleRangeBound;
}

declare interface FDoubleRangeBound {
    Type: ERangeBoundTypes;
    Value: number;
}

declare type FFallbackStruct = object;

declare interface FFieldCookedMetaDataKey {
    FieldPath: string[];
}

declare interface FFieldCookedMetaDataStore {
    FieldMetaData: TMap<string, string>;
    SubFieldMetaData: TMap<FFieldCookedMetaDataKey, FFieldCookedMetaDataValue>;
}

declare interface FFieldCookedMetaDataValue {
    MetaData: TMap<string, string>;
}

declare interface FFilePath {
    FilePath: string;
}

declare interface FFloatInterval {
    min: number;
    max: number;
}

declare interface FFloatRange {
    LowerBound: FFloatRangeBound;
    UpperBound: FFloatRangeBound;
}

declare interface FFloatRangeBound {
    Type: ERangeBoundTypes;
    Value: number;
}

declare interface FFrameNumber {
    Value: number;
}

declare interface FFrameNumberRange {
    LowerBound: FFrameNumberRangeBound;
    UpperBound: FFrameNumberRangeBound;
}

declare interface FFrameNumberRangeBound {
    Type: ERangeBoundTypes;
    Value: FFrameNumber;
}

declare interface FFrameRate {
    Numerator: number;
    Denominator: number;
}

declare interface FFrameTime {
    FrameNumber: FFrameNumber;
    SubFrame: number;
}

declare type FFreezablePerPlatformInt = object;

declare interface FGuid {
    A: number;
    B: number;
    C: number;
    D: number;
}

declare interface FInputDeviceId {
    InternalId: number;
}

declare interface FInstancedPropertyBag {
    Value: FInstancedStruct;
}

declare type FInstancedStruct = object;

declare type FInstancedStructContainer = object;

declare interface FInt32Interval {
    min: number;
    max: number;
}

declare interface FInt32Point {
    X: number;
    Y: number;
}

declare interface FInt32Range {
    LowerBound: FInt32RangeBound;
    UpperBound: FInt32RangeBound;
}

declare interface FInt32RangeBound {
    Type: ERangeBoundTypes;
    Value: number;
}

declare interface FInt32Rect {
    min: FInt32Point;
    max: FInt32Point;
}

declare interface FInt32Vector {
    X: number;
    Y: number;
    Z: number;
}

declare interface FInt32Vector2 {
    X: number;
    Y: number;
}

declare interface FInt32Vector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FInt64Point {
    X: number;
    Y: number;
}

declare interface FInt64Rect {
    min: FInt64Point;
    max: FInt64Point;
}

declare interface FInt64Vector {
    X: number;
    Y: number;
    Z: number;
}

declare interface FInt64Vector2 {
    X: number;
    Y: number;
}

declare interface FInt64Vector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FIntPoint {
    X: number;
    Y: number;
}

declare interface FIntRect {
    min: FIntPoint;
    max: FIntPoint;
}

declare interface FIntVector {
    X: number;
    Y: number;
    Z: number;
}

declare interface FIntVector2 {
    X: number;
    Y: number;
}

declare interface FIntVector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FInterpCurveFloat {
    Points: FInterpCurvePointFloat[];
    bIsLooped: boolean;
    LoopKeyOffset: number;
}

declare interface FInterpCurveLinearColor {
    Points: FInterpCurvePointLinearColor[];
    bIsLooped: boolean;
    LoopKeyOffset: number;
}

declare interface FInterpCurvePointFloat {
    InVal: number;
    OutVal: number;
    ArriveTangent: number;
    LeaveTangent: number;
    InterpMode: EInterpCurveMode;
}

declare interface FInterpCurvePointLinearColor {
    InVal: number;
    OutVal: FLinearColor;
    ArriveTangent: FLinearColor;
    LeaveTangent: FLinearColor;
    InterpMode: EInterpCurveMode;
}

declare interface FInterpCurvePointQuat {
    InVal: number;
    OutVal: FQuat;
    ArriveTangent: FQuat;
    LeaveTangent: FQuat;
    InterpMode: EInterpCurveMode;
}

declare interface FInterpCurvePointTwoVectors {
    InVal: number;
    OutVal: FTwoVectors;
    ArriveTangent: FTwoVectors;
    LeaveTangent: FTwoVectors;
    InterpMode: EInterpCurveMode;
}

declare interface FInterpCurvePointVector {
    InVal: number;
    OutVal: FVector;
    ArriveTangent: FVector;
    LeaveTangent: FVector;
    InterpMode: EInterpCurveMode;
}

declare interface FInterpCurvePointVector2D {
    InVal: number;
    OutVal: FVector2D;
    ArriveTangent: FVector2D;
    LeaveTangent: FVector2D;
    InterpMode: EInterpCurveMode;
}

declare interface FInterpCurveQuat {
    Points: FInterpCurvePointQuat[];
    bIsLooped: boolean;
    LoopKeyOffset: number;
}

declare interface FInterpCurveTwoVectors {
    Points: FInterpCurvePointTwoVectors[];
    bIsLooped: boolean;
    LoopKeyOffset: number;
}

declare interface FInterpCurveVector {
    Points: FInterpCurvePointVector[];
    bIsLooped: boolean;
    LoopKeyOffset: number;
}

declare interface FInterpCurveVector2D {
    Points: FInterpCurvePointVector2D[];
    bIsLooped: boolean;
    LoopKeyOffset: number;
}

declare interface FLinearColor {
    R: number;
    G: number;
    B: number;
    A: number;
}

declare interface FMatrix {
    XPlane: FPlane;
    YPlane: FPlane;
    ZPlane: FPlane;
    WPlane: FPlane;
}

declare interface FMatrix44d {
    XPlane: FPlane4d;
    YPlane: FPlane4d;
    ZPlane: FPlane4d;
    WPlane: FPlane4d;
}

declare interface FMatrix44f {
    XPlane: FPlane4f;
    YPlane: FPlane4f;
    ZPlane: FPlane4f;
    WPlane: FPlane4f;
}

declare interface FMusicalTime {
    Bar: number;
    TickInBar: number;
    TicksPerBar: number;
    TicksPerBeat: number;
}

declare interface FObjectCookedMetaDataStore {
    ObjectMetaData: TMap<string, string>;
}

declare interface FOrientedBox {
    Center: FVector;
    AxisX: FVector;
    AxisY: FVector;
    AxisZ: FVector;
    ExtentX: number;
    ExtentY: number;
    ExtentZ: number;
}

declare interface FOverriddenPropertyNode {
    NodeID: FOverriddenPropertyNodeID;
    Operation: EOverriddenPropertyOperation;
    SubPropertyNodeKeys: TMap<FOverriddenPropertyNodeID, FOverriddenPropertyNodeID>;
}

declare interface FOverriddenPropertyNodeID {
    Path: string;
    Object: UObject;
}

declare interface FOverriddenPropertySet {
    Owner: UObject;
    bWasAdded: boolean;
    OverriddenPropertyNodes: FOverriddenPropertyNode[];
}

declare interface FPackedNormal {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FPackedRGB10A2N {
    Packed: number;
}

declare interface FPackedRGBA16N {
    XY: number;
    ZW: number;
}

declare interface FPackedRemoteObjectPathName {
    RemoteIds: number[];
    Names: number[];
}

declare interface FPerPlatformBool {
    Default: boolean;
}

declare interface FPerPlatformFloat {
    Default: number;
}

declare interface FPerPlatformFrameRate {
    Default: FFrameRate;
}

declare interface FPerPlatformInt {
    Default: number;
}

declare interface FPlane extends FVector {
    W: number;
}

declare interface FPlane4d extends FVector3d {
    W: number;
}

declare interface FPlane4f extends FVector3f {
    W: number;
}

declare interface FPlatformInputDeviceState {
    OwningPlatformUser: FPlatformUserId;
    ConnectionState: EInputDeviceConnectionState;
}

declare interface FPlatformUserId {
    InternalId: number;
}

declare interface FPolyglotTextData {
    Category: ELocalizedTextSourceCategory;
    NativeCulture: string;
    Namespace: string;
    Key: string;
    NativeString: string;
    LocalizedStrings: TMap<string, string>;
    bIsMinimalPatch: boolean;
    CachedText: string;
}

declare interface FPrimaryAssetId {
    PrimaryAssetType: FPrimaryAssetType;
    PrimaryAssetName: string;
}

declare interface FPrimaryAssetType {
    Name: string;
}

declare type FProfileLocus = object;

declare type FPropertyBagContainerTypes = object;

declare type FPropertyBagMissingStruct = object;

declare interface FPropertyBagPropertyDesc {
    ValueTypeObject: UObject;
    ID: FGuid;
    Name: string;
    ValueType: EPropertyBagPropertyType;
    ContainerTypes: FPropertyBagContainerTypes;
    PropertyFlags: number;
}

declare interface FPropertyBagPropertyDescMetaData {
    Key: string;
    Value: string;
}

declare type FPropertyTextFName = object;

declare type FPropertyTextString = object;

declare interface FQualifiedFrameTime {
    Time: FFrameTime;
    Rate: FFrameRate;
}

declare interface FQuat {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FQuat4d {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FQuat4f {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FRandomStream {
    InitialSeed: number;
    Seed: number;
}

declare interface FRay {
    Origin: FVector;
    Direction: FVector;
}

declare interface FRay3d {
    Origin: FVector3d;
    Direction: FVector3d;
}

declare interface FRay3f {
    Origin: FVector3f;
    Direction: FVector3f;
}

declare interface FRemoteObjectBytes {
    Bytes: number[];
}

declare interface FRemoteObjectData {
    Tables: FRemoteObjectTables;
    PathNames: FPackedRemoteObjectPathName[];
    Bytes: FRemoteObjectBytes[];
}

declare interface FRemoteObjectId {
    ID: number;
}

declare interface FRemoteObjectPathName extends FRemoteObjectTables {

}

declare interface FRemoteObjectReference {
    ObjectId: FRemoteObjectId;
    ServerId: FRemoteServerId;
}

declare interface FRemoteObjectTables {
    Names: string[];
    RemoteIds: FRemoteObjectId[];
}

declare interface FRemoteServerId {
    ID: number;
}

declare interface FRemoteTransactionId {
    ID: number;
}

declare interface FRemoteWorkPriority {
    PackedData: number;
}

declare interface FRotator {
    pitch: number;
    Yaw: number;
    Roll: number;
}

declare interface FRotator3d {
    pitch: number;
    Yaw: number;
    Roll: number;
}

declare interface FRotator3f {
    pitch: number;
    Yaw: number;
    Roll: number;
}

declare type FSharedStruct = object;

declare interface FSoftClassPath extends FSoftObjectPath {

}

declare interface FSoftObjectPath {
    AssetPath: FTopLevelAssetPath;
    SubPathString: FUtf8String;
}

declare type FSolarisProfilingData = object;

declare interface FSphere {
    Center: FVector;
    W: number;
}

declare interface FSphere3d {
    Center: FVector3d;
    W: number;
}

declare interface FSphere3f {
    Center: FVector3f;
    W: number;
}

declare interface FStructCookedMetaDataStore {
    ObjectMetaData: FObjectCookedMetaDataStore;
    PropertiesMetaData: TMap<string, FFieldCookedMetaDataStore>;
}

declare interface FTemplateString {
    Template: string;
    Resolved: string;
}

declare interface FTestUndeclaredScriptStructObjectReferencesTest {
    StrongObjectPointer: UObject;
    SoftObjectPointer: TSoftObjectPtr<UObject>;
    SoftObjectPath: FSoftObjectPath;
    WeakObjectPointer: TWeakObjectPtr<UObject>;
}

declare interface FTestUninitializedScriptStructMembersTest {
    UninitializedObjectReference: UObject;
    InitializedObjectReference: UObject;
    UnusedValue: number;
}

declare interface FTimecode {
    Hours: number;
    Minutes: number;
    Seconds: number;
    Frames: number;
    SubFrame: number;
    bDropFrameFormat: boolean;
}

declare interface FTimespan {
    Ticks: number;
}

declare interface FTopLevelAssetPath {
    PackageName: string;
    AssetName: string;
}

declare interface FTransform {
    Rotation: FQuat;
    Translation: FVector;
    Scale3D: FVector;
}

declare interface FTransform3d {
    Rotation: FQuat4d;
    Translation: FVector3d;
    Scale3D: FVector3d;
}

declare interface FTransform3f {
    Rotation: FQuat4f;
    Translation: FVector3f;
    Scale3D: FVector3f;
}

declare interface FTwoVectors {
    v1: FVector;
    v2: FVector;
}

declare interface FUint32Point {
    X: number;
    Y: number;
}

declare interface FUint32Rect {
    min: FUint32Point;
    max: FUint32Point;
}

declare interface FUint32Vector {
    X: number;
    Y: number;
    Z: number;
}

declare interface FUint32Vector2 {
    X: number;
    Y: number;
}

declare interface FUint32Vector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FUint64Point {
    X: number;
    Y: number;
}

declare interface FUint64Rect {
    min: FUint64Point;
    max: FUint64Point;
}

declare interface FUint64Vector {
    X: number;
    Y: number;
    Z: number;
}

declare interface FUint64Vector2 {
    X: number;
    Y: number;
}

declare interface FUint64Vector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FUintPoint {
    X: number;
    Y: number;
}

declare interface FUintRect {
    min: FUintPoint;
    max: FUintPoint;
}

declare interface FUintVector {
    X: number;
    Y: number;
    Z: number;
}

declare interface FUintVector2 {
    X: number;
    Y: number;
}

declare interface FUintVector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FVector {
    X: number;
    Y: number;
    Z: number;
}

declare interface FVector2D {
    X: number;
    Y: number;
}

declare interface FVector2f {
    X: number;
    Y: number;
}

declare interface FVector3d {
    X: number;
    Y: number;
    Z: number;
}

declare interface FVector3f {
    X: number;
    Y: number;
    Z: number;
}

declare interface FVector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FVector4d {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FVector4f {
    X: number;
    Y: number;
    Z: number;
    W: number;
}

declare interface FVerseClassVarAccessor {
    Func: UFunction;
    bIsInstanceMember: boolean;
    bIsFallible: boolean;
}

declare interface FVerseClassVarAccessors {
    Getters: TMap<number, FVerseClassVarAccessor>;
    Setters: TMap<number, FVerseClassVarAccessor>;
}

declare interface FVersePersistentVar {
    Path: string;
    Property: TFieldPath<FMapProperty>;
}

declare interface FVerseSessionVar {
    Property: TFieldPath<FMapProperty>;
}

declare interface IEditorPathObjectInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInterface extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UArrayProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UBoolProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UByteProperty extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UClass extends UStruct {
    readonly __staticRegistry: 
        UStruct['__staticRegistry'];
    readonly __propertyRegistry: 
        UStruct['__propertyRegistry'];
}

declare interface UClassCookedMetaData extends UObject {
    readonly __properties_UClassCookedMetaData: {
        ClassMetaData: FStructCookedMetaDataStore;
        FunctionsMetaData: TMap<string, FStructCookedMetaDataStore>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UClassCookedMetaData['__properties_UClassCookedMetaData'] &
        UObject['__propertyRegistry'];
}

declare interface UClassProperty extends UObjectProperty {
    readonly __staticRegistry: 
        UObjectProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UObjectProperty['__propertyRegistry'];
}

declare interface UDEPRECATED_MetaData extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare type UDefault__Class = object;

declare type UDefault__LinkerPlaceholderClass = object;

declare type UDefault__VerseClass = object;

declare interface UDelegateFunction extends UFunction {
    readonly __staticRegistry: 
        UFunction['__staticRegistry'];
    readonly __propertyRegistry: 
        UFunction['__propertyRegistry'];
}

declare interface UDelegateProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UDoubleProperty extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UEnum extends UField {
    readonly __staticRegistry: 
        UField['__staticRegistry'];
    readonly __propertyRegistry: 
        UField['__propertyRegistry'];
}

declare interface UEnumCookedMetaData extends UObject {
    readonly __properties_UEnumCookedMetaData: {
        EnumMetaData: FObjectCookedMetaDataStore;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnumCookedMetaData['__properties_UEnumCookedMetaData'] &
        UObject['__propertyRegistry'];
}

declare interface UEnumProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UField extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UFloatProperty extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UFunction extends UStruct {
    readonly __staticRegistry: 
        UStruct['__staticRegistry'];
    readonly __propertyRegistry: 
        UStruct['__propertyRegistry'];
}

declare interface UGCObjectReferencer extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInt16Property extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UInt64Property extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UInt8Property extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UIntProperty extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UInterfaceProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface ULazyObjectProperty extends UObjectPropertyBase {
    readonly __staticRegistry: 
        UObjectPropertyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UObjectPropertyBase['__propertyRegistry'];
}

declare interface ULinkerPlaceholderClass extends UClass {
    readonly __staticRegistry: 
        UClass['__staticRegistry'];
    readonly __propertyRegistry: 
        UClass['__propertyRegistry'];
}

declare interface ULinkerPlaceholderExportObject extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULinkerPlaceholderFunction extends UFunction {
    readonly __staticRegistry: 
        UFunction['__staticRegistry'];
    readonly __propertyRegistry: 
        UFunction['__propertyRegistry'];
}

declare interface UMapProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UMulticastDelegateProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UMulticastDelegatePropertyWrapper extends UPropertyWrapper {
    readonly __staticRegistry: 
        UPropertyWrapper['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyWrapper['__propertyRegistry'];
}

declare interface UMulticastInlineDelegateProperty extends UMulticastDelegateProperty {
    readonly __staticRegistry: 
        UMulticastDelegateProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UMulticastDelegateProperty['__propertyRegistry'];
}

declare interface UMulticastInlineDelegatePropertyWrapper extends UMulticastDelegatePropertyWrapper {
    readonly __staticRegistry: 
        UMulticastDelegatePropertyWrapper['__staticRegistry'];
    readonly __propertyRegistry: 
        UMulticastDelegatePropertyWrapper['__propertyRegistry'];
}

declare interface UMulticastSparseDelegateProperty extends UMulticastDelegateProperty {
    readonly __staticRegistry: 
        UMulticastDelegateProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UMulticastDelegateProperty['__propertyRegistry'];
}

declare interface UNameProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UNumericProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UObjectProperty extends UObjectPropertyBase {
    readonly __staticRegistry: 
        UObjectPropertyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UObjectPropertyBase['__propertyRegistry'];
}

declare interface UObjectPropertyBase extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UObjectReachabilityStressData extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UObjectRedirector extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPackage extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPackageMap extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UProperty extends UField {
    readonly __staticRegistry: 
        UField['__staticRegistry'];
    readonly __propertyRegistry: 
        UField['__propertyRegistry'];
}

declare interface UPropertyBag extends UScriptStruct {
    readonly __properties_UPropertyBag: {
        PropertyDescs: FPropertyBagPropertyDesc[];
    };
    readonly __staticRegistry: 
        UScriptStruct['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyBag['__properties_UPropertyBag'] &
        UScriptStruct['__propertyRegistry'];
}

declare interface UPropertyBagMissingObject extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPropertyWrapper extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UScriptStruct extends UStruct {
    readonly __staticRegistry: 
        UStruct['__staticRegistry'];
    readonly __propertyRegistry: 
        UStruct['__propertyRegistry'];
}

declare interface USetProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface USoftClassProperty extends USoftObjectProperty {
    readonly __staticRegistry: 
        USoftObjectProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        USoftObjectProperty['__propertyRegistry'];
}

declare interface USoftObjectProperty extends UObjectPropertyBase {
    readonly __staticRegistry: 
        UObjectPropertyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UObjectPropertyBase['__propertyRegistry'];
}

declare interface USparseDelegateFunction extends UDelegateFunction {
    readonly __staticRegistry: 
        UDelegateFunction['__staticRegistry'];
    readonly __propertyRegistry: 
        UDelegateFunction['__propertyRegistry'];
}

declare interface UStrProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UStruct extends UField {
    readonly __staticRegistry: 
        UField['__staticRegistry'];
    readonly __propertyRegistry: 
        UField['__propertyRegistry'];
}

declare interface UStructCookedMetaData extends UObject {
    readonly __properties_UStructCookedMetaData: {
        StructMetaData: FStructCookedMetaDataStore;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UStructCookedMetaData['__properties_UStructCookedMetaData'] &
        UObject['__propertyRegistry'];
}

declare interface UStructProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UTextBuffer extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UTextProperty extends UProperty {
    readonly __staticRegistry: 
        UProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UProperty['__propertyRegistry'];
}

declare interface UUInt16Property extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UUInt32Property extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UUInt64Property extends UNumericProperty {
    readonly __staticRegistry: 
        UNumericProperty['__staticRegistry'];
    readonly __propertyRegistry: 
        UNumericProperty['__propertyRegistry'];
}

declare interface UUserDefinedStruct extends UScriptStruct {
    readonly __properties_UUserDefinedStruct: {
        status: EUserDefinedStructureStatus;
        Guid: FGuid;
    };
    readonly __staticRegistry: 
        UScriptStruct['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserDefinedStruct['__properties_UUserDefinedStruct'] &
        UScriptStruct['__propertyRegistry'];
}

declare interface UUserDefinedStructEditorDataBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UVerseClass extends UClass {
    readonly __properties_UVerseClass: {
        SolClassFlags: number;
        TaskClasses: UClass[];
        InitInstanceFunction: UFunction;
        PersistentVars: FVersePersistentVar[];
        SessionVars: FVerseSessionVar[];
        VarAccessors: TMap<string, FVerseClassVarAccessors>;
        ConstructorEffects: EVerseEffectSet;
        MangledPackageVersePath: string;
        PackageRelativeVersePath: string;
        DisplayNameToUENameFunctionMap: TMap<string, string>;
        DirectInterfaces: UClass[];
        PropertiesWrittenByInitCDO: TFieldPath<FProperty>[];
        FunctionMangledNames: TMap<string, string>;
        PredictsFunctionNames: string[];
    };
    readonly __staticRegistry: 
        UClass['__staticRegistry'];
    readonly __propertyRegistry: 
        UVerseClass['__properties_UVerseClass'] &
        UClass['__propertyRegistry'];
}

declare interface UVerseEnum extends UEnum {
    readonly __properties_UVerseEnum: {
        VerseEnumFlags: EVerseEnumFlags;
        QualifiedName: FUtf8String;
    };
    readonly __staticRegistry: 
        UEnum['__staticRegistry'];
    readonly __propertyRegistry: 
        UVerseEnum['__properties_UVerseEnum'] &
        UEnum['__propertyRegistry'];
}

declare interface UVerseFunction extends UFunction {
    readonly __staticRegistry: 
        UFunction['__staticRegistry'];
    readonly __propertyRegistry: 
        UFunction['__propertyRegistry'];
}

declare interface UVerseStruct extends UScriptStruct {
    readonly __properties_UVerseStruct: {
        VerseClassFlags: number;
        QualifiedName: FUtf8String;
        InitFunction: UFunction;
        ModuleClass: UClass;
        Guid: FGuid;
        FactoryFunction: UFunction;
        OverrideFactoryFunction: UFunction;
        ConstructorEffects: EVerseEffectSet;
    };
    readonly __staticRegistry: 
        UScriptStruct['__staticRegistry'];
    readonly __propertyRegistry: 
        UVerseStruct['__properties_UVerseStruct'] &
        UScriptStruct['__propertyRegistry'];
}

declare interface UWeakObjectProperty extends UObjectPropertyBase {
    readonly __staticRegistry: 
        UObjectPropertyBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UObjectPropertyBase['__propertyRegistry'];
}

