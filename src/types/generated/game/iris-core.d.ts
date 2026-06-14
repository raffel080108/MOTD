declare interface FArrayPropertyNetSerializerConfig extends FNetSerializerConfig {
    MaxElementCount: uint16;
    ElementCountBitCount: uint16;
    Property: TFieldPath<FArrayProperty>;
}
declare const FArrayPropertyNetSerializerConfig: FArrayPropertyNetSerializerConfig;

declare interface FBitfieldNetSerializerConfig extends FNetSerializerConfig {
    BitMask: uint8;
}
declare const FBitfieldNetSerializerConfig: FBitfieldNetSerializerConfig;

declare interface FBoolNetSerializerConfig extends FNetSerializerConfig {

}
declare const FBoolNetSerializerConfig: FBoolNetSerializerConfig;

declare interface FDataStreamDefinition {
    DataStreamName: FName;
    ClassName: FName;
    Class: UClass;
    DefaultSendStatus: EDataStreamSendStatus;
    bAutoCreate: boolean;
    bDynamicCreate: boolean;
}
declare const FDataStreamDefinition: FDataStreamDefinition;

declare interface FDateTimeNetSerializerConfig extends FNetSerializerConfig {

}
declare const FDateTimeNetSerializerConfig: FDateTimeNetSerializerConfig;

declare interface FDoubleNetSerializerConfig extends FNetSerializerConfig {

}
declare const FDoubleNetSerializerConfig: FDoubleNetSerializerConfig;

declare interface FEnumInt16NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: int16;
    UpperBound: int16;
    BitCount: uint8;
}
declare const FEnumInt16NetSerializerConfig: FEnumInt16NetSerializerConfig;

declare interface FEnumInt32NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: uint8;
}
declare const FEnumInt32NetSerializerConfig: FEnumInt32NetSerializerConfig;

declare interface FEnumInt64NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: int64;
    UpperBound: int64;
    BitCount: uint8;
}
declare const FEnumInt64NetSerializerConfig: FEnumInt64NetSerializerConfig;

declare interface FEnumInt8NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: int8;
    UpperBound: int8;
    BitCount: uint8;
}
declare const FEnumInt8NetSerializerConfig: FEnumInt8NetSerializerConfig;

declare interface FEnumUint16NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: uint16;
    UpperBound: uint16;
    BitCount: uint8;
}
declare const FEnumUint16NetSerializerConfig: FEnumUint16NetSerializerConfig;

declare interface FEnumUint32NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: uint32;
    UpperBound: uint32;
    BitCount: uint8;
}
declare const FEnumUint32NetSerializerConfig: FEnumUint32NetSerializerConfig;

declare interface FEnumUint64NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: uint64;
    UpperBound: uint64;
    BitCount: uint8;
}
declare const FEnumUint64NetSerializerConfig: FEnumUint64NetSerializerConfig;

declare interface FEnumUint8NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: uint8;
    UpperBound: uint8;
    BitCount: uint8;
}
declare const FEnumUint8NetSerializerConfig: FEnumUint8NetSerializerConfig;

declare interface FFieldPathNetSerializerConfig extends FNetSerializerConfig {
    Property: TFieldPath<FProperty>;
}
declare const FFieldPathNetSerializerConfig: FFieldPathNetSerializerConfig;

declare interface FFieldPathNetSerializerSerializationHelper {
    Owner: TWeakObjectPtr<UStruct>;
    PropertyPath: TArray<FName>;
}
declare const FFieldPathNetSerializerSerializationHelper: FFieldPathNetSerializerSerializationHelper;

declare interface FFloatNetSerializerConfig extends FNetSerializerConfig {

}
declare const FFloatNetSerializerConfig: FFloatNetSerializerConfig;

declare interface FGuidNetSerializerConfig extends FNetSerializerConfig {

}
declare const FGuidNetSerializerConfig: FGuidNetSerializerConfig;

declare interface FInstancedStructNetSerializerConfig extends FNetSerializerConfig {
    SupportedTypes: TArray<TSoftObjectPtr<UScriptStruct>>;
}
declare const FInstancedStructNetSerializerConfig: FInstancedStructNetSerializerConfig;

declare interface FInt16RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: int16;
    UpperBound: int16;
    BitCount: uint8;
}
declare const FInt16RangeNetSerializerConfig: FInt16RangeNetSerializerConfig;

declare interface FInt32RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: uint8;
}
declare const FInt32RangeNetSerializerConfig: FInt32RangeNetSerializerConfig;

declare interface FInt64RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: int64;
    UpperBound: int64;
    BitCount: uint8;
}
declare const FInt64RangeNetSerializerConfig: FInt64RangeNetSerializerConfig;

declare interface FInt8RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: int8;
    UpperBound: int8;
    BitCount: uint8;
}
declare const FInt8RangeNetSerializerConfig: FInt8RangeNetSerializerConfig;

declare interface FIntNetSerializerConfig extends FNetSerializerConfig {
    BitCount: uint8;
}
declare const FIntNetSerializerConfig: FIntNetSerializerConfig;

declare interface FIrisFastArraySerializer extends FFastArraySerializer {
    ChangeMaskStorage: uint32;
}
declare const FIrisFastArraySerializer: FIrisFastArraySerializer;

declare interface FLastResortPropertyNetSerializerConfig extends FNetSerializerConfig {
    Property: TFieldPath<FProperty>;
    bExcludeFromDefaultStateHash: boolean;
}
declare const FLastResortPropertyNetSerializerConfig: FLastResortPropertyNetSerializerConfig;

declare interface FNameAsNetTokenNetSerializerConfig extends FNetSerializerConfig {

}
declare const FNameAsNetTokenNetSerializerConfig: FNameAsNetTokenNetSerializerConfig;

declare interface FNameNetSerializerConfig extends FNetSerializerConfig {

}
declare const FNameNetSerializerConfig: FNameNetSerializerConfig;

declare interface FNetBlobHandlerDefinition {
    ClassName: FName;
}
declare const FNetBlobHandlerDefinition: FNetBlobHandlerDefinition;

declare interface FNetObjectFilterDefinition {
    FilterName: FName;
    ClassName: FName;
    ConfigClassName: FName;
}
declare const FNetObjectFilterDefinition: FNetObjectFilterDefinition;

declare interface FNetObjectGridFilterProfile {
    FilterProfileName: FName;
    FrameCountBeforeCulling: uint16;
}
declare const FNetObjectGridFilterProfile: FNetObjectGridFilterProfile;

declare interface FNetObjectPrioritizerDefinition {
    PrioritizerName: FName;
    ClassName: FName;
    Class: UClass;
    ConfigClassName: FName;
    ConfigClass: UClass;
}
declare const FNetObjectPrioritizerDefinition: FNetObjectPrioritizerDefinition;

declare interface FNetRoleNetSerializerConfig extends FNetSerializerConfig {
    RelativeInternalOffsetToOtherRole: number;
    RelativeExternalOffsetToOtherRole: number;
    LowerBound: uint8;
    UpperBound: uint8;
    BitCount: uint8;
    AutonomousProxyValue: uint8;
    SimulatedProxyValue: uint8;
}
declare const FNetRoleNetSerializerConfig: FNetRoleNetSerializerConfig;

declare interface FNetSerializerConfig {

}
declare const FNetSerializerConfig: FNetSerializerConfig;

declare interface FNetTokenStoreTypeIdPair {
    StoreTypeName: FString;
    TypeID: uint32;
}
declare const FNetTokenStoreTypeIdPair: FNetTokenStoreTypeIdPair;

declare interface FNopNetSerializerConfig extends FNetSerializerConfig {

}
declare const FNopNetSerializerConfig: FNopNetSerializerConfig;

declare interface FObjectNetSerializerConfig extends FNetSerializerConfig {

}
declare const FObjectNetSerializerConfig: FObjectNetSerializerConfig;

declare interface FObjectReplicatedBridgeCriticalClassConfig {
    ClassName: FName;
    bDisconnectOnProtocolMismatch: boolean;
}
declare const FObjectReplicatedBridgeCriticalClassConfig: FObjectReplicatedBridgeCriticalClassConfig;

declare interface FObjectReplicationBridgeDeltaCompressionConfig {
    ClassName: FName;
    bEnableDeltaCompression: boolean;
}
declare const FObjectReplicationBridgeDeltaCompressionConfig: FObjectReplicationBridgeDeltaCompressionConfig;

declare interface FObjectReplicationBridgeFilterConfig {
    ClassName: FName;
    DynamicFilterName: FName;
    FilterProfile: FName;
    bForceEnableOnAllInstances: boolean;
}
declare const FObjectReplicationBridgeFilterConfig: FObjectReplicationBridgeFilterConfig;

declare interface FObjectReplicationBridgePollConfig {
    ClassName: FName;
    PollFrequency: number;
    bIncludeSubclasses: boolean;
}
declare const FObjectReplicationBridgePollConfig: FObjectReplicationBridgePollConfig;

declare interface FObjectReplicationBridgePrioritizerConfig {
    ClassName: FName;
    PrioritizerName: FName;
    bForceEnableOnAllInstances: boolean;
}
declare const FObjectReplicationBridgePrioritizerConfig: FObjectReplicationBridgePrioritizerConfig;

declare interface FObjectReplicationBridgeTypeStatsConfig {
    ClassName: FName;
    TypeStatsName: FName;
    bIncludeInMinimalCSVStats: boolean;
}
declare const FObjectReplicationBridgeTypeStatsConfig: FObjectReplicationBridgeTypeStatsConfig;

declare interface FObjectScopeHysteresisProfile {
    FilterProfileName: FName;
    HysteresisFrameCount: uint8;
}
declare const FObjectScopeHysteresisProfile: FObjectScopeHysteresisProfile;

declare interface FPackedInt32NetSerializerConfig extends FNetSerializerConfig {

}
declare const FPackedInt32NetSerializerConfig: FPackedInt32NetSerializerConfig;

declare interface FPackedInt64NetSerializerConfig extends FNetSerializerConfig {

}
declare const FPackedInt64NetSerializerConfig: FPackedInt64NetSerializerConfig;

declare interface FPackedUint32NetSerializerConfig extends FNetSerializerConfig {

}
declare const FPackedUint32NetSerializerConfig: FPackedUint32NetSerializerConfig;

declare interface FPackedUint64NetSerializerConfig extends FNetSerializerConfig {

}
declare const FPackedUint64NetSerializerConfig: FPackedUint64NetSerializerConfig;

declare interface FPolymorphicArrayStructNetSerializerConfig extends FPolymorphicStructNetSerializerConfig {

}
declare const FPolymorphicArrayStructNetSerializerConfig: FPolymorphicArrayStructNetSerializerConfig;

declare interface FPolymorphicStructNetSerializerConfig extends FNetSerializerConfig {

}
declare const FPolymorphicStructNetSerializerConfig: FPolymorphicStructNetSerializerConfig;

declare interface FRemoteObjectReferenceNetSerializationHelper {
    ObjectId: FRemoteObjectId;
    ServerId: FRemoteServerId;
    Path: FRemoteObjectPathName;
}
declare const FRemoteObjectReferenceNetSerializationHelper: FRemoteObjectReferenceNetSerializationHelper;

declare interface FRemoteObjectReferenceNetSerializerConfig extends FNetSerializerConfig {

}
declare const FRemoteObjectReferenceNetSerializerConfig: FRemoteObjectReferenceNetSerializerConfig;

declare interface FReplicationStateDescriptorClassPushModelConfig {
    ClassName: FName;
}
declare const FReplicationStateDescriptorClassPushModelConfig: FReplicationStateDescriptorClassPushModelConfig;

declare interface FRotator3dNetSerializerConfig extends FNetSerializerConfig {

}
declare const FRotator3dNetSerializerConfig: FRotator3dNetSerializerConfig;

declare interface FRotator3fNetSerializerConfig extends FNetSerializerConfig {

}
declare const FRotator3fNetSerializerConfig: FRotator3fNetSerializerConfig;

declare interface FRotatorAsByteNetSerializerConfig extends FNetSerializerConfig {

}
declare const FRotatorAsByteNetSerializerConfig: FRotatorAsByteNetSerializerConfig;

declare interface FRotatorAsShortNetSerializerConfig extends FNetSerializerConfig {

}
declare const FRotatorAsShortNetSerializerConfig: FRotatorAsShortNetSerializerConfig;

declare interface FRotatorNetSerializerConfig extends FNetSerializerConfig {

}
declare const FRotatorNetSerializerConfig: FRotatorNetSerializerConfig;

declare interface FScriptInterfaceNetSerializerConfig extends FNetSerializerConfig {
    InterfaceClass: UClass;
}
declare const FScriptInterfaceNetSerializerConfig: FScriptInterfaceNetSerializerConfig;

declare interface FSoftClassPathNetSerializerConfig extends FNetSerializerConfig {

}
declare const FSoftClassPathNetSerializerConfig: FSoftClassPathNetSerializerConfig;

declare interface FSoftObjectNetSerializerConfig extends FNetSerializerConfig {

}
declare const FSoftObjectNetSerializerConfig: FSoftObjectNetSerializerConfig;

declare interface FSoftObjectPathNetSerializerConfig extends FNetSerializerConfig {

}
declare const FSoftObjectPathNetSerializerConfig: FSoftObjectPathNetSerializerConfig;

declare interface FStringNetSerializerConfig extends FNetSerializerConfig {

}
declare const FStringNetSerializerConfig: FStringNetSerializerConfig;

declare interface FStructNetSerializerConfig extends FNetSerializerConfig {

}
declare const FStructNetSerializerConfig: FStructNetSerializerConfig;

declare interface FSupportsStructNetSerializerConfig {
    StructName: FName;
    bCanUseStructNetSerializer: boolean;
}
declare const FSupportsStructNetSerializerConfig: FSupportsStructNetSerializerConfig;

declare interface FUint16RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: uint16;
    UpperBound: uint16;
    BitCount: uint8;
}
declare const FUint16RangeNetSerializerConfig: FUint16RangeNetSerializerConfig;

declare interface FUint32RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: uint32;
    UpperBound: uint32;
    BitCount: uint8;
}
declare const FUint32RangeNetSerializerConfig: FUint32RangeNetSerializerConfig;

declare interface FUint64RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: uint64;
    UpperBound: uint64;
    BitCount: uint8;
}
declare const FUint64RangeNetSerializerConfig: FUint64RangeNetSerializerConfig;

declare interface FUint8RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: uint8;
    UpperBound: uint8;
    BitCount: uint8;
}
declare const FUint8RangeNetSerializerConfig: FUint8RangeNetSerializerConfig;

declare interface FUintNetSerializerConfig extends FNetSerializerConfig {
    BitCount: uint8;
}
declare const FUintNetSerializerConfig: FUintNetSerializerConfig;

declare interface FUnitQuat4dNetSerializerConfig extends FNetSerializerConfig {

}
declare const FUnitQuat4dNetSerializerConfig: FUnitQuat4dNetSerializerConfig;

declare interface FUnitQuat4fNetSerializerConfig extends FNetSerializerConfig {

}
declare const FUnitQuat4fNetSerializerConfig: FUnitQuat4fNetSerializerConfig;

declare interface FUnitQuatNetSerializerConfig extends FNetSerializerConfig {

}
declare const FUnitQuatNetSerializerConfig: FUnitQuatNetSerializerConfig;

declare interface FVector3dNetSerializerConfig extends FNetSerializerConfig {

}
declare const FVector3dNetSerializerConfig: FVector3dNetSerializerConfig;

declare interface FVector3fNetSerializerConfig extends FNetSerializerConfig {

}
declare const FVector3fNetSerializerConfig: FVector3fNetSerializerConfig;

declare interface FVectorNetQuantize100NetSerializerConfig extends FNetSerializerConfig {

}
declare const FVectorNetQuantize100NetSerializerConfig: FVectorNetQuantize100NetSerializerConfig;

declare interface FVectorNetQuantize10NetSerializerConfig extends FNetSerializerConfig {

}
declare const FVectorNetQuantize10NetSerializerConfig: FVectorNetQuantize10NetSerializerConfig;

declare interface FVectorNetQuantizeNetSerializerConfig extends FNetSerializerConfig {

}
declare const FVectorNetQuantizeNetSerializerConfig: FVectorNetQuantizeNetSerializerConfig;

declare interface FVectorNetQuantizeNormalNetSerializerConfig extends FNetSerializerConfig {

}
declare const FVectorNetQuantizeNormalNetSerializerConfig: FVectorNetQuantizeNormalNetSerializerConfig;

declare interface FVectorNetSerializerConfig extends FNetSerializerConfig {

}
declare const FVectorNetSerializerConfig: FVectorNetSerializerConfig;

declare interface FWeakObjectNetSerializerConfig extends FNetSerializerConfig {

}
declare const FWeakObjectNetSerializerConfig: FWeakObjectNetSerializerConfig;

declare interface UAlwaysRelevantNetObjectFilter extends UNetObjectFilter {

}
declare const UAlwaysRelevantNetObjectFilter: UAlwaysRelevantNetObjectFilter;

declare interface UAlwaysRelevantNetObjectFilterConfig extends UNetObjectFilterConfig {

}
declare const UAlwaysRelevantNetObjectFilterConfig: UAlwaysRelevantNetObjectFilterConfig;

declare interface UChunkedDataStream extends UDataStream {
    PackageMap: UIrisObjectReferencePackageMap;
}
declare const UChunkedDataStream: UChunkedDataStream;

declare interface UDataStream extends UObject {

}
declare const UDataStream: UDataStream;

declare interface UDataStreamDefinitions extends UObject {
    DataStreamDefinitions: TArray<FDataStreamDefinition>;
}
declare const UDataStreamDefinitions: UDataStreamDefinitions;

declare interface UDataStreamManager extends UDataStream {

}
declare const UDataStreamManager: UDataStreamManager;

declare interface UFieldOfViewNetObjectPrioritizer extends ULocationBasedNetObjectPrioritizer {

}
declare const UFieldOfViewNetObjectPrioritizer: UFieldOfViewNetObjectPrioritizer;

declare interface UFieldOfViewNetObjectPrioritizerConfig extends UNetObjectPrioritizerConfig {
    InnerSphereRadius: number;
    InnerSpherePriority: number;
    OuterSphereRadius: number;
    OuterSpherePriority: number;
    ConeFieldOfViewDegrees: number;
    InnerConeLength: number;
    ConeLength: number;
    MinConePriority: number;
    MaxConePriority: number;
    LineOfSightWidth: number;
    LineOfSightPriority: number;
    OutsidePriority: number;
}
declare const UFieldOfViewNetObjectPrioritizerConfig: UFieldOfViewNetObjectPrioritizerConfig;

declare interface UFilterOutNetObjectFilter extends UNetObjectFilter {

}
declare const UFilterOutNetObjectFilter: UFilterOutNetObjectFilter;

declare interface UFilterOutNetObjectFilterConfig extends UNetObjectFilterConfig {

}
declare const UFilterOutNetObjectFilterConfig: UFilterOutNetObjectFilterConfig;

declare interface UIrisObjectReferencePackageMap extends UPackageMap {

}
declare const UIrisObjectReferencePackageMap: UIrisObjectReferencePackageMap;

declare interface ULocationBasedNetObjectPrioritizer extends UNetObjectPrioritizer {

}
declare const ULocationBasedNetObjectPrioritizer: ULocationBasedNetObjectPrioritizer;

declare interface UNetBlobHandler extends UObject {

}
declare const UNetBlobHandler: UNetBlobHandler;

declare interface UNetBlobHandlerDefinitions extends UObject {
    NetBlobHandlerDefinitions: TArray<FNetBlobHandlerDefinition>;
}
declare const UNetBlobHandlerDefinitions: UNetBlobHandlerDefinitions;

declare interface UNetObjectBlobHandler extends UNetBlobHandler {

}
declare const UNetObjectBlobHandler: UNetObjectBlobHandler;

declare interface UNetObjectConnectionFilter extends UNetObjectFilter {

}
declare const UNetObjectConnectionFilter: UNetObjectConnectionFilter;

declare interface UNetObjectConnectionFilterConfig extends UNetObjectFilterConfig {
    MaxObjectCount: uint16;
}
declare const UNetObjectConnectionFilterConfig: UNetObjectConnectionFilterConfig;

declare interface UNetObjectCountLimiter extends UNetObjectPrioritizer {

}
declare const UNetObjectCountLimiter: UNetObjectCountLimiter;

declare interface UNetObjectCountLimiterConfig extends UNetObjectPrioritizerConfig {
    Mode: ENetObjectCountLimiterMode;
    MaxObjectCount: uint32;
    Priority: number;
    OwningConnectionPriority: number;
    bEnableOwnedObjectsFastLane: boolean;
}
declare const UNetObjectCountLimiterConfig: UNetObjectCountLimiterConfig;

declare interface UNetObjectFactory extends UObject {

}
declare const UNetObjectFactory: UNetObjectFactory;

declare interface UNetObjectFilter extends UObject {

}
declare const UNetObjectFilter: UNetObjectFilter;

declare interface UNetObjectFilterConfig extends UObject {

}
declare const UNetObjectFilterConfig: UNetObjectFilterConfig;

declare interface UNetObjectFilterDefinitions extends UObject {
    NetObjectFilterDefinitions: TArray<FNetObjectFilterDefinition>;
}
declare const UNetObjectFilterDefinitions: UNetObjectFilterDefinitions;

declare interface UNetObjectGridFilter extends UNetObjectFilter {

}
declare const UNetObjectGridFilter: UNetObjectGridFilter;

declare interface UNetObjectGridFilterConfig extends UNetObjectFilterConfig {
    ViewPosRelevancyFrameCount: uint32;
    DefaultFrameCountBeforeCulling: uint16;
    CellSizeX: number;
    CellSizeY: number;
    DefaultCullDistance: number;
    bUseExactCullDistance: boolean;
    FilterProfiles: TArray<FNetObjectGridFilterProfile>;
}
declare const UNetObjectGridFilterConfig: UNetObjectGridFilterConfig;

declare interface UNetObjectGridWorldLocFilter extends UNetObjectGridFilter {

}
declare const UNetObjectGridWorldLocFilter: UNetObjectGridWorldLocFilter;

declare interface UNetObjectPrioritizer extends UObject {

}
declare const UNetObjectPrioritizer: UNetObjectPrioritizer;

declare interface UNetObjectPrioritizerConfig extends UObject {

}
declare const UNetObjectPrioritizerConfig: UNetObjectPrioritizerConfig;

declare interface UNetObjectPrioritizerDefinitions extends UObject {
    NetObjectPrioritizerDefinitions: TArray<FNetObjectPrioritizerDefinition>;
}
declare const UNetObjectPrioritizerDefinitions: UNetObjectPrioritizerDefinitions;

declare interface UNetRPCHandler extends UNetBlobHandler {

}
declare const UNetRPCHandler: UNetRPCHandler;

declare interface UNetTokenDataStream extends UDataStream {

}
declare const UNetTokenDataStream: UNetTokenDataStream;

declare interface UNetTokenTypeIdConfig extends UObject {
    ReservedTypeIds: TArray<FNetTokenStoreTypeIdPair>;
}
declare const UNetTokenTypeIdConfig: UNetTokenTypeIdConfig;

declare interface UNopNetObjectFilter extends UNetObjectFilter {

}
declare const UNopNetObjectFilter: UNopNetObjectFilter;

declare interface UNopNetObjectFilterConfig extends UNetObjectFilterConfig {

}
declare const UNopNetObjectFilterConfig: UNopNetObjectFilterConfig;

declare interface UObjectReplicationBridge extends UReplicationBridge {
    NetObjectFactories: TArray<UNetObjectFactory>;
}
declare const UObjectReplicationBridge: UObjectReplicationBridge;

declare interface UObjectReplicationBridgeConfig extends UObject {
    PollConfigs: TArray<FObjectReplicationBridgePollConfig>;
    FilterConfigs: TArray<FObjectReplicationBridgeFilterConfig>;
    PrioritizerConfigs: TArray<FObjectReplicationBridgePrioritizerConfig>;
    DeltaCompressionConfigs: TArray<FObjectReplicationBridgeDeltaCompressionConfig>;
    CriticalClassConfigs: TArray<FObjectReplicatedBridgeCriticalClassConfig>;
    bAllClassesCritical: boolean;
    TypeStatsConfigs: TArray<FObjectReplicationBridgeTypeStatsConfig>;
    DefaultSpatialFilterName: FName;
    RequiredNetDriverChannelClassName: FName;
    CriticalActorClasses: TArray<FName>;
}
declare const UObjectReplicationBridgeConfig: UObjectReplicationBridgeConfig;

declare interface UPartialNetObjectAttachmentHandler extends USequentialPartialNetBlobHandler {

}
declare const UPartialNetObjectAttachmentHandler: UPartialNetObjectAttachmentHandler;

declare interface UPartialNetObjectAttachmentHandlerConfig extends USequentialPartialNetBlobHandlerConfig {
    BitCountSplitThreshold: uint32;
    ClientUnreliableBitCountSplitThreshold: uint32;
    ServerUnreliableBitCountSplitThreshold: uint32;
}
declare const UPartialNetObjectAttachmentHandlerConfig: UPartialNetObjectAttachmentHandlerConfig;

declare interface UReplicationBridge extends UObject {

}
declare const UReplicationBridge: UReplicationBridge;

declare interface UReplicationDataStream extends UDataStream {

}
declare const UReplicationDataStream: UReplicationDataStream;

declare interface UReplicationFilteringConfig extends UObject {
    bEnableObjectScopeHysteresis: boolean;
    DefaultHysteresisFrameCount: uint8;
    HysteresisUpdateConnectionThrottling: uint8;
    HysteresisProfiles: TArray<FObjectScopeHysteresisProfile>;
}
declare const UReplicationFilteringConfig: UReplicationFilteringConfig;

declare interface UReplicationStateDescriptorConfig extends UObject {
    SupportsStructNetSerializerList: TArray<FSupportsStructNetSerializerConfig>;
    EnsureFullyPushModelClassNames: TArray<FReplicationStateDescriptorClassPushModelConfig>;
    bEnsureAllClassesAreFullyPushModel: boolean;
}
declare const UReplicationStateDescriptorConfig: UReplicationStateDescriptorConfig;

declare interface UReplicationSystem extends UObject {
    ReplicationBridge: UReplicationBridge;
}
declare const UReplicationSystem: UReplicationSystem;

declare interface USequentialPartialNetBlobHandler extends UNetBlobHandler {

}
declare const USequentialPartialNetBlobHandler: USequentialPartialNetBlobHandler;

declare interface USequentialPartialNetBlobHandlerConfig extends UObject {
    MaxPartBitCount: uint32;
    MaxPartCount: uint32;
}
declare const USequentialPartialNetBlobHandlerConfig: USequentialPartialNetBlobHandlerConfig;

declare interface USphereNetObjectPrioritizer extends ULocationBasedNetObjectPrioritizer {

}
declare const USphereNetObjectPrioritizer: USphereNetObjectPrioritizer;

declare interface USphereNetObjectPrioritizerConfig extends UNetObjectPrioritizerConfig {
    InnerRadius: number;
    OuterRadius: number;
    InnerPriority: number;
    OuterPriority: number;
    OutsidePriority: number;
}
declare const USphereNetObjectPrioritizerConfig: USphereNetObjectPrioritizerConfig;

declare interface USphereWithOwnerBoostNetObjectPrioritizer extends USphereNetObjectPrioritizer {

}
declare const USphereWithOwnerBoostNetObjectPrioritizer: USphereWithOwnerBoostNetObjectPrioritizer;

declare interface USphereWithOwnerBoostNetObjectPrioritizerConfig extends USphereNetObjectPrioritizerConfig {
    OwnerPriorityBoost: number;
}
declare const USphereWithOwnerBoostNetObjectPrioritizerConfig: USphereWithOwnerBoostNetObjectPrioritizerConfig;

declare interface UWorldLocationsConfig extends UObject {
    MinPos: FVector;
    MaxPos: FVector;
    MaxNetCullDistance: number;
}
declare const UWorldLocationsConfig: UWorldLocationsConfig;

