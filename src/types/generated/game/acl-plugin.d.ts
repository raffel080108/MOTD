declare interface UAnimBoneCompressionCodec_ACL extends UAnimBoneCompressionCodec_ACLBase {
    readonly __staticRegistry: 
        UAnimBoneCompressionCodec_ACLBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimBoneCompressionCodec_ACLBase['__propertyRegistry'];
}

declare interface UAnimBoneCompressionCodec_ACLBase extends UAnimBoneCompressionCodec {
    readonly __staticRegistry: 
        UAnimBoneCompressionCodec['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimBoneCompressionCodec['__propertyRegistry'];
}

declare interface UAnimBoneCompressionCodec_ACLCustom extends UAnimBoneCompressionCodec_ACLBase {
    readonly __staticRegistry: 
        UAnimBoneCompressionCodec_ACLBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimBoneCompressionCodec_ACLBase['__propertyRegistry'];
}

declare interface UAnimBoneCompressionCodec_ACLDatabase extends UAnimBoneCompressionCodec_ACLBase {
    readonly __properties_UAnimBoneCompressionCodec_ACLDatabase: {
        DatabaseAsset: UAnimationCompressionLibraryDatabase;
    };
    readonly __staticRegistry: 
        UAnimBoneCompressionCodec_ACLBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimBoneCompressionCodec_ACLDatabase['__properties_UAnimBoneCompressionCodec_ACLDatabase'] &
        UAnimBoneCompressionCodec_ACLBase['__propertyRegistry'];
}

declare interface UAnimBoneCompressionCodec_ACLSafe extends UAnimBoneCompressionCodec_ACLBase {
    readonly __staticRegistry: 
        UAnimBoneCompressionCodec_ACLBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimBoneCompressionCodec_ACLBase['__propertyRegistry'];
}

declare interface UAnimCurveCompressionCodec_ACL extends UAnimCurveCompressionCodec {
    readonly __staticRegistry: 
        UAnimCurveCompressionCodec['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimCurveCompressionCodec['__propertyRegistry'];
}

declare interface UAnimationCompressionLibraryDatabase extends UObject {
    readonly __static_UAnimationCompressionLibraryDatabase: {
        SetVisualFidelity(WorldContextObject: UObject, LatentInfo: FLatentActionInfo, DatabaseAsset: UAnimationCompressionLibraryDatabase, Result: ACLVisualFidelityChangeResult, VisualFidelity: ACLVisualFidelity): void;
        GetVisualFidelity(DatabaseAsset: UAnimationCompressionLibraryDatabase): ACLVisualFidelity;
    };
    readonly __properties_UAnimationCompressionLibraryDatabase: {
        CookedCompressedBytes: number[];
        CookedAnimSequenceMappings: number[];
        MaxStreamRequestSizeKB: number;
        DefaultVisualFidelity: ACLVisualFidelity;
    };
    readonly __staticRegistry: 
        UAnimationCompressionLibraryDatabase['__static_UAnimationCompressionLibraryDatabase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimationCompressionLibraryDatabase['__properties_UAnimationCompressionLibraryDatabase'] &
        UObject['__propertyRegistry'];
}

