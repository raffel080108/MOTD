declare interface FARFilter {
    PackageNames: TArray<FName>;
    PackagePaths: TArray<FName>;
    SoftObjectPaths: TArray<FSoftObjectPath>;
    ClassNames: TArray<FName>;
    ClassPaths: TArray<FTopLevelAssetPath>;
    RecursiveClassesExclusionSet: TSet<FName>;
    RecursiveClassPathsExclusionSet: TSet<FTopLevelAssetPath>;
    bRecursivePaths: boolean;
    bRecursiveClasses: boolean;
    bIncludeOnlyOnDiskAssets: boolean;
}
declare const FARFilter: FARFilter;

declare interface FAssetBundleData {
    Bundles: TArray<FAssetBundleEntry>;
}
declare const FAssetBundleData: FAssetBundleData;

declare interface FAssetBundleEntry {
    BundleName: FName;
    AssetPaths: TArray<FTopLevelAssetPath>;
}
declare const FAssetBundleEntry: FAssetBundleEntry;

declare interface FAssetData {
    PackageName: FName;
    PackagePath: FName;
    AssetName: FName;
    AssetClass: FName;
    AssetClassPath: FTopLevelAssetPath;
}
declare const FAssetData: FAssetData;

declare interface FAutomationEvent {
    Type: EAutomationEventType;
    Message: FString;
    Context: FString;
    Artifact: FGuid;
}
declare const FAutomationEvent: FAutomationEvent;

declare interface FAutomationExecutionEntry {
    Event: FAutomationEvent;
    Filename: FString;
    LineNumber: number;
    Timestamp: FDateTime;
}
declare const FAutomationExecutionEntry: FAutomationExecutionEntry;

declare interface FBox {
    min: FVector;
    max: FVector;
    IsValid: boolean;
}
declare const FBox: FBox;

declare interface FBox2D {
    min: FVector2D;
    max: FVector2D;
    bIsValid: boolean;
}
declare const FBox2D: FBox2D;

declare interface FBox2f {
    min: FVector2f;
    max: FVector2f;
    bIsValid: boolean;
}
declare const FBox2f: FBox2f;

declare interface FBox3d {
    min: FVector3d;
    max: FVector3d;
    IsValid: boolean;
}
declare const FBox3d: FBox3d;

declare interface FBox3f {
    min: FVector3f;
    max: FVector3f;
    IsValid: boolean;
}
declare const FBox3f: FBox3f;

declare interface FBoxSphereBounds {
    Origin: FVector;
    BoxExtent: FVector;
    SphereRadius: number;
}
declare const FBoxSphereBounds: FBoxSphereBounds;

declare interface FBoxSphereBounds3d {
    Origin: FVector3d;
    BoxExtent: FVector3d;
    SphereRadius: number;
}
declare const FBoxSphereBounds3d: FBoxSphereBounds3d;

declare interface FBoxSphereBounds3f {
    Origin: FVector3f;
    BoxExtent: FVector3f;
    SphereRadius: number;
}
declare const FBoxSphereBounds3f: FBoxSphereBounds3f;

declare interface FColor {
    B: uint8;
    G: uint8;
    R: uint8;
    A: uint8;
}
declare const FColor: FColor;

declare interface FConstSharedStruct {

}
declare const FConstSharedStruct: FConstSharedStruct;

declare interface FDateTime {
    Ticks: int64;
}
declare const FDateTime: FDateTime;

declare interface FDefault__PropertyBag {

}
declare const FDefault__PropertyBag: FDefault__PropertyBag;

declare interface FDefault__ScriptStruct {

}
declare const FDefault__ScriptStruct: FDefault__ScriptStruct;

declare interface FDefault__UserDefinedStruct {

}
declare const FDefault__UserDefinedStruct: FDefault__UserDefinedStruct;

declare interface FDefault__VerseStruct {

}
declare const FDefault__VerseStruct: FDefault__VerseStruct;

declare interface FDirectoryPath {
    Path: FString;
}
declare const FDirectoryPath: FDirectoryPath;

declare interface FDoubleRange {
    LowerBound: FDoubleRangeBound;
    UpperBound: FDoubleRangeBound;
}
declare const FDoubleRange: FDoubleRange;

declare interface FDoubleRangeBound {
    Type: ERangeBoundTypes;
    Value: number;
}
declare const FDoubleRangeBound: FDoubleRangeBound;

declare interface FFallbackStruct {

}
declare const FFallbackStruct: FFallbackStruct;

declare interface FFieldCookedMetaDataKey {
    FieldPath: TArray<FName>;
}
declare const FFieldCookedMetaDataKey: FFieldCookedMetaDataKey;

declare interface FFieldCookedMetaDataStore {
    FieldMetaData: Record<FName, FString>;
    SubFieldMetaData: Record<string | number | symbol, FFieldCookedMetaDataValue>;
}
declare const FFieldCookedMetaDataStore: FFieldCookedMetaDataStore;

declare interface FFieldCookedMetaDataValue {
    MetaData: Record<FName, FString>;
}
declare const FFieldCookedMetaDataValue: FFieldCookedMetaDataValue;

declare interface FFilePath {
    FilePath: FString;
}
declare const FFilePath: FFilePath;

declare interface FFloatInterval {
    min: number;
    max: number;
}
declare const FFloatInterval: FFloatInterval;

declare interface FFloatRange {
    LowerBound: FFloatRangeBound;
    UpperBound: FFloatRangeBound;
}
declare const FFloatRange: FFloatRange;

declare interface FFloatRangeBound {
    Type: ERangeBoundTypes;
    Value: number;
}
declare const FFloatRangeBound: FFloatRangeBound;

declare interface FFrameNumber {
    Value: number;
}
declare const FFrameNumber: FFrameNumber;

declare interface FFrameNumberRange {
    LowerBound: FFrameNumberRangeBound;
    UpperBound: FFrameNumberRangeBound;
}
declare const FFrameNumberRange: FFrameNumberRange;

declare interface FFrameNumberRangeBound {
    Type: ERangeBoundTypes;
    Value: FFrameNumber;
}
declare const FFrameNumberRangeBound: FFrameNumberRangeBound;

declare interface FFrameRate {
    Numerator: number;
    Denominator: number;
}
declare const FFrameRate: FFrameRate;

declare interface FFrameTime {
    FrameNumber: FFrameNumber;
    SubFrame: number;
}
declare const FFrameTime: FFrameTime;

declare interface FFreezablePerPlatformInt {

}
declare const FFreezablePerPlatformInt: FFreezablePerPlatformInt;

declare interface FGuid {
    A: number;
    B: number;
    C: number;
    D: number;
}
declare const FGuid: FGuid;

declare interface FInputDeviceId {
    InternalId: number;
}
declare const FInputDeviceId: FInputDeviceId;

declare interface FInstancedPropertyBag {
    Value: FInstancedStruct;
}
declare const FInstancedPropertyBag: FInstancedPropertyBag;

declare interface FInstancedStruct {

}
declare const FInstancedStruct: FInstancedStruct;

declare interface FInstancedStructContainer {

}
declare const FInstancedStructContainer: FInstancedStructContainer;

declare interface FInt32Interval {
    min: number;
    max: number;
}
declare const FInt32Interval: FInt32Interval;

declare interface FInt32Point {
    X: number;
    Y: number;
}
declare const FInt32Point: FInt32Point;

declare interface FInt32Range {
    LowerBound: FInt32RangeBound;
    UpperBound: FInt32RangeBound;
}
declare const FInt32Range: FInt32Range;

declare interface FInt32RangeBound {
    Type: ERangeBoundTypes;
    Value: number;
}
declare const FInt32RangeBound: FInt32RangeBound;

declare interface FInt32Rect {
    min: FInt32Point;
    max: FInt32Point;
}
declare const FInt32Rect: FInt32Rect;

declare interface FInt32Vector {
    X: number;
    Y: number;
    Z: number;
}
declare const FInt32Vector: FInt32Vector;

declare interface FInt32Vector2 {
    X: number;
    Y: number;
}
declare const FInt32Vector2: FInt32Vector2;

declare interface FInt32Vector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}
declare const FInt32Vector4: FInt32Vector4;

declare interface FInt64Point {
    X: int64;
    Y: int64;
}
declare const FInt64Point: FInt64Point;

declare interface FInt64Rect {
    min: FInt64Point;
    max: FInt64Point;
}
declare const FInt64Rect: FInt64Rect;

declare interface FInt64Vector {
    X: int64;
    Y: int64;
    Z: int64;
}
declare const FInt64Vector: FInt64Vector;

declare interface FInt64Vector2 {
    X: int64;
    Y: int64;
}
declare const FInt64Vector2: FInt64Vector2;

declare interface FInt64Vector4 {
    X: int64;
    Y: int64;
    Z: int64;
    W: int64;
}
declare const FInt64Vector4: FInt64Vector4;

declare interface FIntPoint {
    X: number;
    Y: number;
}
declare const FIntPoint: FIntPoint;

declare interface FIntRect {
    min: FIntPoint;
    max: FIntPoint;
}
declare const FIntRect: FIntRect;

declare interface FIntVector {
    X: number;
    Y: number;
    Z: number;
}
declare const FIntVector: FIntVector;

declare interface FIntVector2 {
    X: number;
    Y: number;
}
declare const FIntVector2: FIntVector2;

declare interface FIntVector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}
declare const FIntVector4: FIntVector4;

declare interface FInterpCurveFloat {
    Points: TArray<FInterpCurvePointFloat>;
    bIsLooped: boolean;
    LoopKeyOffset: number;
}
declare const FInterpCurveFloat: FInterpCurveFloat;

declare interface FInterpCurveLinearColor {
    Points: TArray<FInterpCurvePointLinearColor>;
    bIsLooped: boolean;
    LoopKeyOffset: number;
}
declare const FInterpCurveLinearColor: FInterpCurveLinearColor;

declare interface FInterpCurvePointFloat {
    InVal: number;
    OutVal: number;
    ArriveTangent: number;
    LeaveTangent: number;
    InterpMode: EInterpCurveMode;
}
declare const FInterpCurvePointFloat: FInterpCurvePointFloat;

declare interface FInterpCurvePointLinearColor {
    InVal: number;
    OutVal: FLinearColor;
    ArriveTangent: FLinearColor;
    LeaveTangent: FLinearColor;
    InterpMode: EInterpCurveMode;
}
declare const FInterpCurvePointLinearColor: FInterpCurvePointLinearColor;

declare interface FInterpCurvePointQuat {
    InVal: number;
    OutVal: FQuat;
    ArriveTangent: FQuat;
    LeaveTangent: FQuat;
    InterpMode: EInterpCurveMode;
}
declare const FInterpCurvePointQuat: FInterpCurvePointQuat;

declare interface FInterpCurvePointTwoVectors {
    InVal: number;
    OutVal: FTwoVectors;
    ArriveTangent: FTwoVectors;
    LeaveTangent: FTwoVectors;
    InterpMode: EInterpCurveMode;
}
declare const FInterpCurvePointTwoVectors: FInterpCurvePointTwoVectors;

declare interface FInterpCurvePointVector {
    InVal: number;
    OutVal: FVector;
    ArriveTangent: FVector;
    LeaveTangent: FVector;
    InterpMode: EInterpCurveMode;
}
declare const FInterpCurvePointVector: FInterpCurvePointVector;

declare interface FInterpCurvePointVector2D {
    InVal: number;
    OutVal: FVector2D;
    ArriveTangent: FVector2D;
    LeaveTangent: FVector2D;
    InterpMode: EInterpCurveMode;
}
declare const FInterpCurvePointVector2D: FInterpCurvePointVector2D;

declare interface FInterpCurveQuat {
    Points: TArray<FInterpCurvePointQuat>;
    bIsLooped: boolean;
    LoopKeyOffset: number;
}
declare const FInterpCurveQuat: FInterpCurveQuat;

declare interface FInterpCurveTwoVectors {
    Points: TArray<FInterpCurvePointTwoVectors>;
    bIsLooped: boolean;
    LoopKeyOffset: number;
}
declare const FInterpCurveTwoVectors: FInterpCurveTwoVectors;

declare interface FInterpCurveVector {
    Points: TArray<FInterpCurvePointVector>;
    bIsLooped: boolean;
    LoopKeyOffset: number;
}
declare const FInterpCurveVector: FInterpCurveVector;

declare interface FInterpCurveVector2D {
    Points: TArray<FInterpCurvePointVector2D>;
    bIsLooped: boolean;
    LoopKeyOffset: number;
}
declare const FInterpCurveVector2D: FInterpCurveVector2D;

declare interface FLinearColor {
    R: number;
    G: number;
    B: number;
    A: number;
}
declare const FLinearColor: FLinearColor;

declare interface FMatrix {
    XPlane: FPlane;
    YPlane: FPlane;
    ZPlane: FPlane;
    WPlane: FPlane;
}
declare const FMatrix: FMatrix;

declare interface FMatrix44d {
    XPlane: FPlane4d;
    YPlane: FPlane4d;
    ZPlane: FPlane4d;
    WPlane: FPlane4d;
}
declare const FMatrix44d: FMatrix44d;

declare interface FMatrix44f {
    XPlane: FPlane4f;
    YPlane: FPlane4f;
    ZPlane: FPlane4f;
    WPlane: FPlane4f;
}
declare const FMatrix44f: FMatrix44f;

declare interface FMusicalTime {
    Bar: number;
    TickInBar: number;
    TicksPerBar: number;
    TicksPerBeat: number;
}
declare const FMusicalTime: FMusicalTime;

declare interface FObjectCookedMetaDataStore {
    ObjectMetaData: Record<FName, FString>;
}
declare const FObjectCookedMetaDataStore: FObjectCookedMetaDataStore;

declare interface FOrientedBox {
    Center: FVector;
    AxisX: FVector;
    AxisY: FVector;
    AxisZ: FVector;
    ExtentX: number;
    ExtentY: number;
    ExtentZ: number;
}
declare const FOrientedBox: FOrientedBox;

declare interface FOverriddenPropertyNode {
    NodeID: FOverriddenPropertyNodeID;
    Operation: EOverriddenPropertyOperation;
    SubPropertyNodeKeys: Record<string | number | symbol, FOverriddenPropertyNodeID>;
}
declare const FOverriddenPropertyNode: FOverriddenPropertyNode;

declare interface FOverriddenPropertyNodeID {
    Path: FName;
    Object: UObject;
}
declare const FOverriddenPropertyNodeID: FOverriddenPropertyNodeID;

declare interface FOverriddenPropertySet {
    Owner: UObject;
    bWasAdded: boolean;
    OverriddenPropertyNodes: TSet<FOverriddenPropertyNode>;
}
declare const FOverriddenPropertySet: FOverriddenPropertySet;

declare interface FPackedNormal {
    X: uint8;
    Y: uint8;
    Z: uint8;
    W: uint8;
}
declare const FPackedNormal: FPackedNormal;

declare interface FPackedRGB10A2N {
    Packed: number;
}
declare const FPackedRGB10A2N: FPackedRGB10A2N;

declare interface FPackedRGBA16N {
    XY: number;
    ZW: number;
}
declare const FPackedRGBA16N: FPackedRGBA16N;

declare interface FPackedRemoteObjectPathName {
    RemoteIds: TArray<uint16>;
    Names: TArray<uint16>;
}
declare const FPackedRemoteObjectPathName: FPackedRemoteObjectPathName;

declare interface FPerPlatformBool {
    Default: boolean;
}
declare const FPerPlatformBool: FPerPlatformBool;

declare interface FPerPlatformFloat {
    Default: number;
}
declare const FPerPlatformFloat: FPerPlatformFloat;

declare interface FPerPlatformFrameRate {
    Default: FFrameRate;
}
declare const FPerPlatformFrameRate: FPerPlatformFrameRate;

declare interface FPerPlatformInt {
    Default: number;
}
declare const FPerPlatformInt: FPerPlatformInt;

declare interface FPlane extends FVector {
    W: number;
}
declare const FPlane: FPlane;

declare interface FPlane4d extends FVector3d {
    W: number;
}
declare const FPlane4d: FPlane4d;

declare interface FPlane4f extends FVector3f {
    W: number;
}
declare const FPlane4f: FPlane4f;

declare interface FPlatformInputDeviceState {
    OwningPlatformUser: FPlatformUserId;
    ConnectionState: EInputDeviceConnectionState;
}
declare const FPlatformInputDeviceState: FPlatformInputDeviceState;

declare interface FPlatformUserId {
    InternalId: number;
}
declare const FPlatformUserId: FPlatformUserId;

declare interface FPolyglotTextData {
    Category: ELocalizedTextSourceCategory;
    NativeCulture: FString;
    Namespace: FString;
    Key: FString;
    NativeString: FString;
    LocalizedStrings: Record<FString, FString>;
    bIsMinimalPatch: boolean;
    CachedText: FText;
}
declare const FPolyglotTextData: FPolyglotTextData;

declare interface FPrimaryAssetId {
    PrimaryAssetType: FPrimaryAssetType;
    PrimaryAssetName: FName;
}
declare const FPrimaryAssetId: FPrimaryAssetId;

declare interface FPrimaryAssetType {
    Name: FName;
}
declare const FPrimaryAssetType: FPrimaryAssetType;

declare interface FProfileLocus {

}
declare const FProfileLocus: FProfileLocus;

declare interface FPropertyBagContainerTypes {

}
declare const FPropertyBagContainerTypes: FPropertyBagContainerTypes;

declare interface FPropertyBagMissingStruct {

}
declare const FPropertyBagMissingStruct: FPropertyBagMissingStruct;

declare interface FPropertyBagPropertyDesc {
    ValueTypeObject: UObject;
    ID: FGuid;
    Name: FName;
    ValueType: EPropertyBagPropertyType;
    ContainerTypes: FPropertyBagContainerTypes;
    PropertyFlags: uint64;
}
declare const FPropertyBagPropertyDesc: FPropertyBagPropertyDesc;

declare interface FPropertyBagPropertyDescMetaData {
    Key: FName;
    Value: FString;
}
declare const FPropertyBagPropertyDescMetaData: FPropertyBagPropertyDescMetaData;

declare interface FPropertyTextFName {

}
declare const FPropertyTextFName: FPropertyTextFName;

declare interface FPropertyTextString {

}
declare const FPropertyTextString: FPropertyTextString;

declare interface FQualifiedFrameTime {
    Time: FFrameTime;
    Rate: FFrameRate;
}
declare const FQualifiedFrameTime: FQualifiedFrameTime;

declare interface FQuat {
    X: number;
    Y: number;
    Z: number;
    W: number;
}
declare const FQuat: FQuat;

declare interface FQuat4d {
    X: number;
    Y: number;
    Z: number;
    W: number;
}
declare const FQuat4d: FQuat4d;

declare interface FQuat4f {
    X: number;
    Y: number;
    Z: number;
    W: number;
}
declare const FQuat4f: FQuat4f;

declare interface FRandomStream {
    InitialSeed: number;
    Seed: number;
}
declare const FRandomStream: FRandomStream;

declare interface FRay {
    Origin: FVector;
    Direction: FVector;
}
declare const FRay: FRay;

declare interface FRay3d {
    Origin: FVector3d;
    Direction: FVector3d;
}
declare const FRay3d: FRay3d;

declare interface FRay3f {
    Origin: FVector3f;
    Direction: FVector3f;
}
declare const FRay3f: FRay3f;

declare interface FRemoteObjectBytes {
    Bytes: TArray<uint8>;
}
declare const FRemoteObjectBytes: FRemoteObjectBytes;

declare interface FRemoteObjectData {
    Tables: FRemoteObjectTables;
    PathNames: TArray<FPackedRemoteObjectPathName>;
    Bytes: TArray<FRemoteObjectBytes>;
}
declare const FRemoteObjectData: FRemoteObjectData;

declare interface FRemoteObjectId {
    ID: uint64;
}
declare const FRemoteObjectId: FRemoteObjectId;

declare interface FRemoteObjectPathName extends FRemoteObjectTables {

}
declare const FRemoteObjectPathName: FRemoteObjectPathName;

declare interface FRemoteObjectReference {
    ObjectId: FRemoteObjectId;
    ServerId: FRemoteServerId;
}
declare const FRemoteObjectReference: FRemoteObjectReference;

declare interface FRemoteObjectTables {
    Names: TArray<FName>;
    RemoteIds: TArray<FRemoteObjectId>;
}
declare const FRemoteObjectTables: FRemoteObjectTables;

declare interface FRemoteServerId {
    ID: uint32;
}
declare const FRemoteServerId: FRemoteServerId;

declare interface FRemoteTransactionId {
    ID: uint32;
}
declare const FRemoteTransactionId: FRemoteTransactionId;

declare interface FRemoteWorkPriority {
    PackedData: uint64;
}
declare const FRemoteWorkPriority: FRemoteWorkPriority;

declare interface FRotator {
    pitch: number;
    Yaw: number;
    Roll: number;
}
declare const FRotator: FRotator;

declare interface FRotator3d {
    pitch: number;
    Yaw: number;
    Roll: number;
}
declare const FRotator3d: FRotator3d;

declare interface FRotator3f {
    pitch: number;
    Yaw: number;
    Roll: number;
}
declare const FRotator3f: FRotator3f;

declare interface FSharedStruct {

}
declare const FSharedStruct: FSharedStruct;

declare interface FSoftClassPath extends FSoftObjectPath {

}
declare const FSoftClassPath: FSoftClassPath;

declare interface FSoftObjectPath {
    AssetPath: FTopLevelAssetPath;
    SubPathString: FUtf8String;
}
declare const FSoftObjectPath: FSoftObjectPath;

declare interface FSolarisProfilingData {

}
declare const FSolarisProfilingData: FSolarisProfilingData;

declare interface FSphere {
    Center: FVector;
    W: number;
}
declare const FSphere: FSphere;

declare interface FSphere3d {
    Center: FVector3d;
    W: number;
}
declare const FSphere3d: FSphere3d;

declare interface FSphere3f {
    Center: FVector3f;
    W: number;
}
declare const FSphere3f: FSphere3f;

declare interface FStructCookedMetaDataStore {
    ObjectMetaData: FObjectCookedMetaDataStore;
    PropertiesMetaData: Record<FName, FFieldCookedMetaDataStore>;
}
declare const FStructCookedMetaDataStore: FStructCookedMetaDataStore;

declare interface FTemplateString {
    Template: FString;
    Resolved: FText;
}
declare const FTemplateString: FTemplateString;

declare interface FTestUndeclaredScriptStructObjectReferencesTest {
    StrongObjectPointer: UObject;
    SoftObjectPointer: TSoftObjectPtr<UObject>;
    SoftObjectPath: FSoftObjectPath;
    WeakObjectPointer: TWeakObjectPtr<UObject>;
}
declare const FTestUndeclaredScriptStructObjectReferencesTest: FTestUndeclaredScriptStructObjectReferencesTest;

declare interface FTestUninitializedScriptStructMembersTest {
    UninitializedObjectReference: UObject;
    InitializedObjectReference: UObject;
    UnusedValue: number;
}
declare const FTestUninitializedScriptStructMembersTest: FTestUninitializedScriptStructMembersTest;

declare interface FTimecode {
    Hours: number;
    Minutes: number;
    Seconds: number;
    Frames: number;
    SubFrame: number;
    bDropFrameFormat: boolean;
}
declare const FTimecode: FTimecode;

declare interface FTimespan {
    Ticks: int64;
}
declare const FTimespan: FTimespan;

declare interface FTopLevelAssetPath {
    PackageName: FName;
    AssetName: FName;
}
declare const FTopLevelAssetPath: FTopLevelAssetPath;

declare interface FTransform {
    Rotation: FQuat;
    Translation: FVector;
    Scale3D: FVector;
}
declare const FTransform: FTransform;

declare interface FTransform3d {
    Rotation: FQuat4d;
    Translation: FVector3d;
    Scale3D: FVector3d;
}
declare const FTransform3d: FTransform3d;

declare interface FTransform3f {
    Rotation: FQuat4f;
    Translation: FVector3f;
    Scale3D: FVector3f;
}
declare const FTransform3f: FTransform3f;

declare interface FTwoVectors {
    v1: FVector;
    v2: FVector;
}
declare const FTwoVectors: FTwoVectors;

declare interface FUint32Point {
    X: number;
    Y: number;
}
declare const FUint32Point: FUint32Point;

declare interface FUint32Rect {
    min: FUint32Point;
    max: FUint32Point;
}
declare const FUint32Rect: FUint32Rect;

declare interface FUint32Vector {
    X: uint32;
    Y: uint32;
    Z: uint32;
}
declare const FUint32Vector: FUint32Vector;

declare interface FUint32Vector2 {
    X: uint32;
    Y: uint32;
}
declare const FUint32Vector2: FUint32Vector2;

declare interface FUint32Vector4 {
    X: uint32;
    Y: uint32;
    Z: uint32;
    W: uint32;
}
declare const FUint32Vector4: FUint32Vector4;

declare interface FUint64Point {
    X: int64;
    Y: int64;
}
declare const FUint64Point: FUint64Point;

declare interface FUint64Rect {
    min: FUint64Point;
    max: FUint64Point;
}
declare const FUint64Rect: FUint64Rect;

declare interface FUint64Vector {
    X: uint64;
    Y: uint64;
    Z: uint64;
}
declare const FUint64Vector: FUint64Vector;

declare interface FUint64Vector2 {
    X: uint64;
    Y: uint64;
}
declare const FUint64Vector2: FUint64Vector2;

declare interface FUint64Vector4 {
    X: uint64;
    Y: uint64;
    Z: uint64;
    W: uint64;
}
declare const FUint64Vector4: FUint64Vector4;

declare interface FUintPoint {
    X: number;
    Y: number;
}
declare const FUintPoint: FUintPoint;

declare interface FUintRect {
    min: FUintPoint;
    max: FUintPoint;
}
declare const FUintRect: FUintRect;

declare interface FUintVector {
    X: uint32;
    Y: uint32;
    Z: uint32;
}
declare const FUintVector: FUintVector;

declare interface FUintVector2 {
    X: uint32;
    Y: uint32;
}
declare const FUintVector2: FUintVector2;

declare interface FUintVector4 {
    X: uint32;
    Y: uint32;
    Z: uint32;
    W: uint32;
}
declare const FUintVector4: FUintVector4;

declare interface FVector {
    X: number;
    Y: number;
    Z: number;
}
declare const FVector: FVector;

declare interface FVector2D {
    X: number;
    Y: number;
}
declare const FVector2D: FVector2D;

declare interface FVector2f {
    X: number;
    Y: number;
}
declare const FVector2f: FVector2f;

declare interface FVector3d {
    X: number;
    Y: number;
    Z: number;
}
declare const FVector3d: FVector3d;

declare interface FVector3f {
    X: number;
    Y: number;
    Z: number;
}
declare const FVector3f: FVector3f;

declare interface FVector4 {
    X: number;
    Y: number;
    Z: number;
    W: number;
}
declare const FVector4: FVector4;

declare interface FVector4d {
    X: number;
    Y: number;
    Z: number;
    W: number;
}
declare const FVector4d: FVector4d;

declare interface FVector4f {
    X: number;
    Y: number;
    Z: number;
    W: number;
}
declare const FVector4f: FVector4f;

declare interface FVerseClassVarAccessor {
    Func: UFunction;
    bIsInstanceMember: boolean;
    bIsFallible: boolean;
}
declare const FVerseClassVarAccessor: FVerseClassVarAccessor;

declare interface FVerseClassVarAccessors {
    Getters: Record<number, FVerseClassVarAccessor>;
    Setters: Record<number, FVerseClassVarAccessor>;
}
declare const FVerseClassVarAccessors: FVerseClassVarAccessors;

declare interface FVersePersistentVar {
    Path: FString;
    Property: TFieldPath<FMapProperty>;
}
declare const FVersePersistentVar: FVersePersistentVar;

declare interface FVerseSessionVar {
    Property: TFieldPath<FMapProperty>;
}
declare const FVerseSessionVar: FVerseSessionVar;

declare interface IEditorPathObjectInterface extends IInterface {

}
declare const IEditorPathObjectInterface: IEditorPathObjectInterface;

declare interface IInterface extends UObject {

}
declare const IInterface: IInterface;

declare interface UArrayProperty extends UProperty {

}
declare const UArrayProperty: UArrayProperty;

declare interface UBoolProperty extends UProperty {

}
declare const UBoolProperty: UBoolProperty;

declare interface UByteProperty extends UNumericProperty {

}
declare const UByteProperty: UByteProperty;

declare interface UClassCookedMetaData extends UObject {
    ClassMetaData: FStructCookedMetaDataStore;
    FunctionsMetaData: Record<FName, FStructCookedMetaDataStore>;
}
declare const UClassCookedMetaData: UClassCookedMetaData;

declare interface UClassProperty extends UObjectProperty {

}
declare const UClassProperty: UClassProperty;

declare interface UDEPRECATED_MetaData extends UObject {

}
declare const UDEPRECATED_MetaData: UDEPRECATED_MetaData;

declare interface UDefault__Class {

}
declare const UDefault__Class: UDefault__Class;

declare interface UDefault__LinkerPlaceholderClass {

}
declare const UDefault__LinkerPlaceholderClass: UDefault__LinkerPlaceholderClass;

declare interface UDefault__VerseClass {

}
declare const UDefault__VerseClass: UDefault__VerseClass;

declare interface UDelegateFunction extends UFunction {

}
declare const UDelegateFunction: UDelegateFunction;

declare interface UDelegateProperty extends UProperty {

}
declare const UDelegateProperty: UDelegateProperty;

declare interface UDoubleProperty extends UNumericProperty {

}
declare const UDoubleProperty: UDoubleProperty;

declare interface UEnumCookedMetaData extends UObject {
    EnumMetaData: FObjectCookedMetaDataStore;
}
declare const UEnumCookedMetaData: UEnumCookedMetaData;

declare interface UEnumProperty extends UProperty {

}
declare const UEnumProperty: UEnumProperty;

declare interface UField extends UObject {

}
declare const UField: UField;

declare interface UFloatProperty extends UNumericProperty {

}
declare const UFloatProperty: UFloatProperty;

declare interface UGCObjectReferencer extends UObject {

}
declare const UGCObjectReferencer: UGCObjectReferencer;

declare interface UInt16Property extends UNumericProperty {

}
declare const UInt16Property: UInt16Property;

declare interface UInt64Property extends UNumericProperty {

}
declare const UInt64Property: UInt64Property;

declare interface UInt8Property extends UNumericProperty {

}
declare const UInt8Property: UInt8Property;

declare interface UIntProperty extends UNumericProperty {

}
declare const UIntProperty: UIntProperty;

declare interface UInterfaceProperty extends UProperty {

}
declare const UInterfaceProperty: UInterfaceProperty;

declare interface ULazyObjectProperty extends UObjectPropertyBase {

}
declare const ULazyObjectProperty: ULazyObjectProperty;

declare interface ULinkerPlaceholderClass extends UClass {

}
declare const ULinkerPlaceholderClass: ULinkerPlaceholderClass;

declare interface ULinkerPlaceholderExportObject extends UObject {

}
declare const ULinkerPlaceholderExportObject: ULinkerPlaceholderExportObject;

declare interface ULinkerPlaceholderFunction extends UFunction {

}
declare const ULinkerPlaceholderFunction: ULinkerPlaceholderFunction;

declare interface UMapProperty extends UProperty {

}
declare const UMapProperty: UMapProperty;

declare interface UMulticastDelegateProperty extends UProperty {

}
declare const UMulticastDelegateProperty: UMulticastDelegateProperty;

declare interface UMulticastDelegatePropertyWrapper extends UPropertyWrapper {

}
declare const UMulticastDelegatePropertyWrapper: UMulticastDelegatePropertyWrapper;

declare interface UMulticastInlineDelegateProperty extends UMulticastDelegateProperty {

}
declare const UMulticastInlineDelegateProperty: UMulticastInlineDelegateProperty;

declare interface UMulticastInlineDelegatePropertyWrapper extends UMulticastDelegatePropertyWrapper {

}
declare const UMulticastInlineDelegatePropertyWrapper: UMulticastInlineDelegatePropertyWrapper;

declare interface UMulticastSparseDelegateProperty extends UMulticastDelegateProperty {

}
declare const UMulticastSparseDelegateProperty: UMulticastSparseDelegateProperty;

declare interface UNameProperty extends UProperty {

}
declare const UNameProperty: UNameProperty;

declare interface UNumericProperty extends UProperty {

}
declare const UNumericProperty: UNumericProperty;

declare interface UObjectProperty extends UObjectPropertyBase {

}
declare const UObjectProperty: UObjectProperty;

declare interface UObjectPropertyBase extends UProperty {

}
declare const UObjectPropertyBase: UObjectPropertyBase;

declare interface UObjectReachabilityStressData extends UObject {

}
declare const UObjectReachabilityStressData: UObjectReachabilityStressData;

declare interface UObjectRedirector extends UObject {

}
declare const UObjectRedirector: UObjectRedirector;

declare interface UPackage extends UObject {

}
declare const UPackage: UPackage;

declare interface UPackageMap extends UObject {

}
declare const UPackageMap: UPackageMap;

declare interface UProperty extends UField {

}
declare const UProperty: UProperty;

declare interface UPropertyBag extends UScriptStruct {
    PropertyDescs: TArray<FPropertyBagPropertyDesc>;
}
declare const UPropertyBag: UPropertyBag;

declare interface UPropertyBagMissingObject extends UObject {

}
declare const UPropertyBagMissingObject: UPropertyBagMissingObject;

declare interface UPropertyWrapper extends UObject {

}
declare const UPropertyWrapper: UPropertyWrapper;

declare interface UScriptStruct extends UStruct {

}
declare const UScriptStruct: UScriptStruct;

declare interface USetProperty extends UProperty {

}
declare const USetProperty: USetProperty;

declare interface USoftClassProperty extends USoftObjectProperty {

}
declare const USoftClassProperty: USoftClassProperty;

declare interface USoftObjectProperty extends UObjectPropertyBase {

}
declare const USoftObjectProperty: USoftObjectProperty;

declare interface USparseDelegateFunction extends UDelegateFunction {

}
declare const USparseDelegateFunction: USparseDelegateFunction;

declare interface UStrProperty extends UProperty {

}
declare const UStrProperty: UStrProperty;

declare interface UStructCookedMetaData extends UObject {
    StructMetaData: FStructCookedMetaDataStore;
}
declare const UStructCookedMetaData: UStructCookedMetaData;

declare interface UStructProperty extends UProperty {

}
declare const UStructProperty: UStructProperty;

declare interface UTextBuffer extends UObject {

}
declare const UTextBuffer: UTextBuffer;

declare interface UTextProperty extends UProperty {

}
declare const UTextProperty: UTextProperty;

declare interface UUInt16Property extends UNumericProperty {

}
declare const UUInt16Property: UUInt16Property;

declare interface UUInt32Property extends UNumericProperty {

}
declare const UUInt32Property: UUInt32Property;

declare interface UUInt64Property extends UNumericProperty {

}
declare const UUInt64Property: UUInt64Property;

declare interface UUserDefinedStruct extends UScriptStruct {
    status: EUserDefinedStructureStatus;
    Guid: FGuid;
}
declare const UUserDefinedStruct: UUserDefinedStruct;

declare interface UUserDefinedStructEditorDataBase extends UObject {

}
declare const UUserDefinedStructEditorDataBase: UUserDefinedStructEditorDataBase;

declare interface UVerseClass extends UClass {
    SolClassFlags: uint32;
    TaskClasses: TArray<UClass>;
    InitInstanceFunction: UFunction;
    PersistentVars: TArray<FVersePersistentVar>;
    SessionVars: TArray<FVerseSessionVar>;
    VarAccessors: Record<FName, FVerseClassVarAccessors>;
    ConstructorEffects: EVerseEffectSet;
    MangledPackageVersePath: FName;
    PackageRelativeVersePath: FString;
    DisplayNameToUENameFunctionMap: Record<FName, FName>;
    DirectInterfaces: TArray<UClass>;
    PropertiesWrittenByInitCDO: TArray<TFieldPath<FProperty>>;
    FunctionMangledNames: Record<FName, FName>;
    PredictsFunctionNames: TArray<FName>;
}
declare const UVerseClass: UVerseClass;

declare interface UVerseEnum extends UEnum {
    VerseEnumFlags: EVerseEnumFlags;
    QualifiedName: FUtf8String;
}
declare const UVerseEnum: UVerseEnum;

declare interface UVerseFunction extends UFunction {

}
declare const UVerseFunction: UVerseFunction;

declare interface UVerseStruct extends UScriptStruct {
    VerseClassFlags: uint32;
    QualifiedName: FUtf8String;
    InitFunction: UFunction;
    ModuleClass: UClass;
    Guid: FGuid;
    FactoryFunction: UFunction;
    OverrideFactoryFunction: UFunction;
    ConstructorEffects: EVerseEffectSet;
}
declare const UVerseStruct: UVerseStruct;

declare interface UWeakObjectProperty extends UObjectPropertyBase {

}
declare const UWeakObjectProperty: UWeakObjectProperty;

