declare interface FArrayPropertyNetSerializerConfig extends FNetSerializerConfig {
    MaxElementCount: number;
    ElementCountBitCount: number;
    Property: TFieldPath<FArrayProperty>;
}

declare interface FBitfieldNetSerializerConfig extends FNetSerializerConfig {
    BitMask: number;
}

declare interface FBoolNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FDataStreamDefinition {
    DataStreamName: string;
    ClassName: string;
    Class: UClass;
    DefaultSendStatus: EDataStreamSendStatus;
    bAutoCreate: boolean;
    bDynamicCreate: boolean;
}

declare interface FDateTimeNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FDoubleNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FEnumInt16NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FEnumInt32NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FEnumInt64NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FEnumInt8NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FEnumUint16NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FEnumUint32NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FEnumUint64NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FEnumUint8NetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FFieldPathNetSerializerConfig extends FNetSerializerConfig {
    Property: TFieldPath<FProperty>;
}

declare interface FFieldPathNetSerializerSerializationHelper {
    Owner: TWeakObjectPtr<UStruct>;
    PropertyPath: string[];
}

declare interface FFloatNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FGuidNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FInstancedStructNetSerializerConfig extends FNetSerializerConfig {
    SupportedTypes: TSoftObjectPtr<UScriptStruct>[];
}

declare interface FInt16RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FInt32RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FInt64RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FInt8RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FIntNetSerializerConfig extends FNetSerializerConfig {
    BitCount: number;
}

declare interface FIrisFastArraySerializer extends FFastArraySerializer {
    ChangeMaskStorage: number;
}

declare interface FLastResortPropertyNetSerializerConfig extends FNetSerializerConfig {
    Property: TFieldPath<FProperty>;
    bExcludeFromDefaultStateHash: boolean;
}

declare interface FNameAsNetTokenNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FNameNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FNetBlobHandlerDefinition {
    ClassName: string;
}

declare interface FNetObjectFilterDefinition {
    FilterName: string;
    ClassName: string;
    ConfigClassName: string;
}

declare interface FNetObjectGridFilterProfile {
    FilterProfileName: string;
    FrameCountBeforeCulling: number;
}

declare interface FNetObjectPrioritizerDefinition {
    PrioritizerName: string;
    ClassName: string;
    Class: UClass;
    ConfigClassName: string;
    ConfigClass: UClass;
}

declare interface FNetRoleNetSerializerConfig extends FNetSerializerConfig {
    RelativeInternalOffsetToOtherRole: number;
    RelativeExternalOffsetToOtherRole: number;
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
    AutonomousProxyValue: number;
    SimulatedProxyValue: number;
}

declare type FNetSerializerConfig = object;

declare interface FNetTokenStoreTypeIdPair {
    StoreTypeName: string;
    TypeID: number;
}

declare interface FNopNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FObjectNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FObjectReplicatedBridgeCriticalClassConfig {
    ClassName: string;
    bDisconnectOnProtocolMismatch: boolean;
}

declare interface FObjectReplicationBridgeDeltaCompressionConfig {
    ClassName: string;
    bEnableDeltaCompression: boolean;
}

declare interface FObjectReplicationBridgeFilterConfig {
    ClassName: string;
    DynamicFilterName: string;
    FilterProfile: string;
    bForceEnableOnAllInstances: boolean;
}

declare interface FObjectReplicationBridgePollConfig {
    ClassName: string;
    PollFrequency: number;
    bIncludeSubclasses: boolean;
}

declare interface FObjectReplicationBridgePrioritizerConfig {
    ClassName: string;
    PrioritizerName: string;
    bForceEnableOnAllInstances: boolean;
}

declare interface FObjectReplicationBridgeTypeStatsConfig {
    ClassName: string;
    TypeStatsName: string;
    bIncludeInMinimalCSVStats: boolean;
}

declare interface FObjectScopeHysteresisProfile {
    FilterProfileName: string;
    HysteresisFrameCount: number;
}

declare interface FPackedInt32NetSerializerConfig extends FNetSerializerConfig {

}

declare interface FPackedInt64NetSerializerConfig extends FNetSerializerConfig {

}

declare interface FPackedUint32NetSerializerConfig extends FNetSerializerConfig {

}

declare interface FPackedUint64NetSerializerConfig extends FNetSerializerConfig {

}

declare interface FPolymorphicArrayStructNetSerializerConfig extends FPolymorphicStructNetSerializerConfig {

}

declare interface FPolymorphicStructNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FRemoteObjectReferenceNetSerializationHelper {
    ObjectId: FRemoteObjectId;
    ServerId: FRemoteServerId;
    Path: FRemoteObjectPathName;
}

declare interface FRemoteObjectReferenceNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FReplicationStateDescriptorClassPushModelConfig {
    ClassName: string;
}

declare interface FRotator3dNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FRotator3fNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FRotatorAsByteNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FRotatorAsShortNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FRotatorNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FScriptInterfaceNetSerializerConfig extends FNetSerializerConfig {
    InterfaceClass: UClass;
}

declare interface FSoftClassPathNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FSoftObjectNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FSoftObjectPathNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FStringNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FStructNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FSupportsStructNetSerializerConfig {
    StructName: string;
    bCanUseStructNetSerializer: boolean;
}

declare interface FUint16RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FUint32RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FUint64RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FUint8RangeNetSerializerConfig extends FNetSerializerConfig {
    LowerBound: number;
    UpperBound: number;
    BitCount: number;
}

declare interface FUintNetSerializerConfig extends FNetSerializerConfig {
    BitCount: number;
}

declare interface FUnitQuat4dNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FUnitQuat4fNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FUnitQuatNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FVector3dNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FVector3fNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FVectorNetQuantize100NetSerializerConfig extends FNetSerializerConfig {

}

declare interface FVectorNetQuantize10NetSerializerConfig extends FNetSerializerConfig {

}

declare interface FVectorNetQuantizeNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FVectorNetQuantizeNormalNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FVectorNetSerializerConfig extends FNetSerializerConfig {

}

declare interface FWeakObjectNetSerializerConfig extends FNetSerializerConfig {

}

declare interface UAlwaysRelevantNetObjectFilter extends UNetObjectFilter {
    readonly __staticRegistry: 
        UNetObjectFilter['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilter['__propertyRegistry'];
}

declare interface UAlwaysRelevantNetObjectFilterConfig extends UNetObjectFilterConfig {
    readonly __staticRegistry: 
        UNetObjectFilterConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilterConfig['__propertyRegistry'];
}

declare interface UChunkedDataStream extends UDataStream {
    readonly __properties_UChunkedDataStream: {
        PackageMap: UIrisObjectReferencePackageMap;
    };
    readonly __staticRegistry: 
        UDataStream['__staticRegistry'];
    readonly __propertyRegistry: 
        UChunkedDataStream['__properties_UChunkedDataStream'] &
        UDataStream['__propertyRegistry'];
}

declare interface UDataStream extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDataStreamDefinitions extends UObject {
    readonly __properties_UDataStreamDefinitions: {
        DataStreamDefinitions: FDataStreamDefinition[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataStreamDefinitions['__properties_UDataStreamDefinitions'] &
        UObject['__propertyRegistry'];
}

declare interface UDataStreamManager extends UDataStream {
    readonly __staticRegistry: 
        UDataStream['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataStream['__propertyRegistry'];
}

declare interface UFieldOfViewNetObjectPrioritizer extends ULocationBasedNetObjectPrioritizer {
    readonly __staticRegistry: 
        ULocationBasedNetObjectPrioritizer['__staticRegistry'];
    readonly __propertyRegistry: 
        ULocationBasedNetObjectPrioritizer['__propertyRegistry'];
}

declare interface UFieldOfViewNetObjectPrioritizerConfig extends UNetObjectPrioritizerConfig {
    readonly __properties_UFieldOfViewNetObjectPrioritizerConfig: {
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
    };
    readonly __staticRegistry: 
        UNetObjectPrioritizerConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UFieldOfViewNetObjectPrioritizerConfig['__properties_UFieldOfViewNetObjectPrioritizerConfig'] &
        UNetObjectPrioritizerConfig['__propertyRegistry'];
}

declare interface UFilterOutNetObjectFilter extends UNetObjectFilter {
    readonly __staticRegistry: 
        UNetObjectFilter['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilter['__propertyRegistry'];
}

declare interface UFilterOutNetObjectFilterConfig extends UNetObjectFilterConfig {
    readonly __staticRegistry: 
        UNetObjectFilterConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilterConfig['__propertyRegistry'];
}

declare interface UIrisObjectReferencePackageMap extends UPackageMap {
    readonly __staticRegistry: 
        UPackageMap['__staticRegistry'];
    readonly __propertyRegistry: 
        UPackageMap['__propertyRegistry'];
}

declare interface ULocationBasedNetObjectPrioritizer extends UNetObjectPrioritizer {
    readonly __staticRegistry: 
        UNetObjectPrioritizer['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectPrioritizer['__propertyRegistry'];
}

declare interface UNetBlobHandler extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNetBlobHandlerDefinitions extends UObject {
    readonly __properties_UNetBlobHandlerDefinitions: {
        NetBlobHandlerDefinitions: FNetBlobHandlerDefinition[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetBlobHandlerDefinitions['__properties_UNetBlobHandlerDefinitions'] &
        UObject['__propertyRegistry'];
}

declare interface UNetObjectBlobHandler extends UNetBlobHandler {
    readonly __staticRegistry: 
        UNetBlobHandler['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetBlobHandler['__propertyRegistry'];
}

declare interface UNetObjectConnectionFilter extends UNetObjectFilter {
    readonly __staticRegistry: 
        UNetObjectFilter['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilter['__propertyRegistry'];
}

declare interface UNetObjectConnectionFilterConfig extends UNetObjectFilterConfig {
    readonly __properties_UNetObjectConnectionFilterConfig: {
        MaxObjectCount: number;
    };
    readonly __staticRegistry: 
        UNetObjectFilterConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectConnectionFilterConfig['__properties_UNetObjectConnectionFilterConfig'] &
        UNetObjectFilterConfig['__propertyRegistry'];
}

declare interface UNetObjectCountLimiter extends UNetObjectPrioritizer {
    readonly __staticRegistry: 
        UNetObjectPrioritizer['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectPrioritizer['__propertyRegistry'];
}

declare interface UNetObjectCountLimiterConfig extends UNetObjectPrioritizerConfig {
    readonly __properties_UNetObjectCountLimiterConfig: {
        Mode: ENetObjectCountLimiterMode;
        MaxObjectCount: number;
        Priority: number;
        OwningConnectionPriority: number;
        bEnableOwnedObjectsFastLane: boolean;
    };
    readonly __staticRegistry: 
        UNetObjectPrioritizerConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectCountLimiterConfig['__properties_UNetObjectCountLimiterConfig'] &
        UNetObjectPrioritizerConfig['__propertyRegistry'];
}

declare interface UNetObjectFactory extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNetObjectFilter extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNetObjectFilterConfig extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNetObjectFilterDefinitions extends UObject {
    readonly __properties_UNetObjectFilterDefinitions: {
        NetObjectFilterDefinitions: FNetObjectFilterDefinition[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilterDefinitions['__properties_UNetObjectFilterDefinitions'] &
        UObject['__propertyRegistry'];
}

declare interface UNetObjectGridFilter extends UNetObjectFilter {
    readonly __staticRegistry: 
        UNetObjectFilter['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilter['__propertyRegistry'];
}

declare interface UNetObjectGridFilterConfig extends UNetObjectFilterConfig {
    readonly __properties_UNetObjectGridFilterConfig: {
        ViewPosRelevancyFrameCount: number;
        DefaultFrameCountBeforeCulling: number;
        CellSizeX: number;
        CellSizeY: number;
        DefaultCullDistance: number;
        bUseExactCullDistance: boolean;
        FilterProfiles: FNetObjectGridFilterProfile[];
    };
    readonly __staticRegistry: 
        UNetObjectFilterConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectGridFilterConfig['__properties_UNetObjectGridFilterConfig'] &
        UNetObjectFilterConfig['__propertyRegistry'];
}

declare interface UNetObjectGridWorldLocFilter extends UNetObjectGridFilter {
    readonly __staticRegistry: 
        UNetObjectGridFilter['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectGridFilter['__propertyRegistry'];
}

declare interface UNetObjectPrioritizer extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNetObjectPrioritizerConfig extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNetObjectPrioritizerDefinitions extends UObject {
    readonly __properties_UNetObjectPrioritizerDefinitions: {
        NetObjectPrioritizerDefinitions: FNetObjectPrioritizerDefinition[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectPrioritizerDefinitions['__properties_UNetObjectPrioritizerDefinitions'] &
        UObject['__propertyRegistry'];
}

declare interface UNetRPCHandler extends UNetBlobHandler {
    readonly __staticRegistry: 
        UNetBlobHandler['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetBlobHandler['__propertyRegistry'];
}

declare interface UNetTokenDataStream extends UDataStream {
    readonly __staticRegistry: 
        UDataStream['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataStream['__propertyRegistry'];
}

declare interface UNetTokenTypeIdConfig extends UObject {
    readonly __properties_UNetTokenTypeIdConfig: {
        ReservedTypeIds: FNetTokenStoreTypeIdPair[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetTokenTypeIdConfig['__properties_UNetTokenTypeIdConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UNopNetObjectFilter extends UNetObjectFilter {
    readonly __staticRegistry: 
        UNetObjectFilter['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilter['__propertyRegistry'];
}

declare interface UNopNetObjectFilterConfig extends UNetObjectFilterConfig {
    readonly __staticRegistry: 
        UNetObjectFilterConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetObjectFilterConfig['__propertyRegistry'];
}

declare interface UObjectReplicationBridge extends UReplicationBridge {
    readonly __properties_UObjectReplicationBridge: {
        NetObjectFactories: UNetObjectFactory[];
    };
    readonly __staticRegistry: 
        UReplicationBridge['__staticRegistry'];
    readonly __propertyRegistry: 
        UObjectReplicationBridge['__properties_UObjectReplicationBridge'] &
        UReplicationBridge['__propertyRegistry'];
}

declare interface UObjectReplicationBridgeConfig extends UObject {
    readonly __properties_UObjectReplicationBridgeConfig: {
        PollConfigs: FObjectReplicationBridgePollConfig[];
        FilterConfigs: FObjectReplicationBridgeFilterConfig[];
        PrioritizerConfigs: FObjectReplicationBridgePrioritizerConfig[];
        DeltaCompressionConfigs: FObjectReplicationBridgeDeltaCompressionConfig[];
        CriticalClassConfigs: FObjectReplicatedBridgeCriticalClassConfig[];
        bAllClassesCritical: boolean;
        TypeStatsConfigs: FObjectReplicationBridgeTypeStatsConfig[];
        DefaultSpatialFilterName: string;
        RequiredNetDriverChannelClassName: string;
        CriticalActorClasses: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObjectReplicationBridgeConfig['__properties_UObjectReplicationBridgeConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UPartialNetObjectAttachmentHandler extends USequentialPartialNetBlobHandler {
    readonly __staticRegistry: 
        USequentialPartialNetBlobHandler['__staticRegistry'];
    readonly __propertyRegistry: 
        USequentialPartialNetBlobHandler['__propertyRegistry'];
}

declare interface UPartialNetObjectAttachmentHandlerConfig extends USequentialPartialNetBlobHandlerConfig {
    readonly __properties_UPartialNetObjectAttachmentHandlerConfig: {
        BitCountSplitThreshold: number;
        ClientUnreliableBitCountSplitThreshold: number;
        ServerUnreliableBitCountSplitThreshold: number;
    };
    readonly __staticRegistry: 
        USequentialPartialNetBlobHandlerConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UPartialNetObjectAttachmentHandlerConfig['__properties_UPartialNetObjectAttachmentHandlerConfig'] &
        USequentialPartialNetBlobHandlerConfig['__propertyRegistry'];
}

declare interface UReplicationBridge extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UReplicationDataStream extends UDataStream {
    readonly __staticRegistry: 
        UDataStream['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataStream['__propertyRegistry'];
}

declare interface UReplicationFilteringConfig extends UObject {
    readonly __properties_UReplicationFilteringConfig: {
        bEnableObjectScopeHysteresis: boolean;
        DefaultHysteresisFrameCount: number;
        HysteresisUpdateConnectionThrottling: number;
        HysteresisProfiles: FObjectScopeHysteresisProfile[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UReplicationFilteringConfig['__properties_UReplicationFilteringConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UReplicationStateDescriptorConfig extends UObject {
    readonly __properties_UReplicationStateDescriptorConfig: {
        SupportsStructNetSerializerList: FSupportsStructNetSerializerConfig[];
        EnsureFullyPushModelClassNames: FReplicationStateDescriptorClassPushModelConfig[];
        bEnsureAllClassesAreFullyPushModel: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UReplicationStateDescriptorConfig['__properties_UReplicationStateDescriptorConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UReplicationSystem extends UObject {
    readonly __properties_UReplicationSystem: {
        ReplicationBridge: UReplicationBridge;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UReplicationSystem['__properties_UReplicationSystem'] &
        UObject['__propertyRegistry'];
}

declare interface USequentialPartialNetBlobHandler extends UNetBlobHandler {
    readonly __staticRegistry: 
        UNetBlobHandler['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetBlobHandler['__propertyRegistry'];
}

declare interface USequentialPartialNetBlobHandlerConfig extends UObject {
    readonly __properties_USequentialPartialNetBlobHandlerConfig: {
        MaxPartBitCount: number;
        MaxPartCount: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USequentialPartialNetBlobHandlerConfig['__properties_USequentialPartialNetBlobHandlerConfig'] &
        UObject['__propertyRegistry'];
}

declare interface USphereNetObjectPrioritizer extends ULocationBasedNetObjectPrioritizer {
    readonly __staticRegistry: 
        ULocationBasedNetObjectPrioritizer['__staticRegistry'];
    readonly __propertyRegistry: 
        ULocationBasedNetObjectPrioritizer['__propertyRegistry'];
}

declare interface USphereNetObjectPrioritizerConfig extends UNetObjectPrioritizerConfig {
    readonly __properties_USphereNetObjectPrioritizerConfig: {
        InnerRadius: number;
        OuterRadius: number;
        InnerPriority: number;
        OuterPriority: number;
        OutsidePriority: number;
    };
    readonly __staticRegistry: 
        UNetObjectPrioritizerConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        USphereNetObjectPrioritizerConfig['__properties_USphereNetObjectPrioritizerConfig'] &
        UNetObjectPrioritizerConfig['__propertyRegistry'];
}

declare interface USphereWithOwnerBoostNetObjectPrioritizer extends USphereNetObjectPrioritizer {
    readonly __staticRegistry: 
        USphereNetObjectPrioritizer['__staticRegistry'];
    readonly __propertyRegistry: 
        USphereNetObjectPrioritizer['__propertyRegistry'];
}

declare interface USphereWithOwnerBoostNetObjectPrioritizerConfig extends USphereNetObjectPrioritizerConfig {
    readonly __properties_USphereWithOwnerBoostNetObjectPrioritizerConfig: {
        OwnerPriorityBoost: number;
    };
    readonly __staticRegistry: 
        USphereNetObjectPrioritizerConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        USphereWithOwnerBoostNetObjectPrioritizerConfig['__properties_USphereWithOwnerBoostNetObjectPrioritizerConfig'] &
        USphereNetObjectPrioritizerConfig['__propertyRegistry'];
}

declare interface UWorldLocationsConfig extends UObject {
    readonly __properties_UWorldLocationsConfig: {
        MinPos: FVector;
        MaxPos: FVector;
        MaxNetCullDistance: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldLocationsConfig['__properties_UWorldLocationsConfig'] &
        UObject['__propertyRegistry'];
}

