declare interface UAnimBoneCompressionCodec_ACL extends UAnimBoneCompressionCodec_ACLBase {

}
declare const UAnimBoneCompressionCodec_ACL: UAnimBoneCompressionCodec_ACL;

declare interface UAnimBoneCompressionCodec_ACLBase extends UAnimBoneCompressionCodec {

}
declare const UAnimBoneCompressionCodec_ACLBase: UAnimBoneCompressionCodec_ACLBase;

declare interface UAnimBoneCompressionCodec_ACLCustom extends UAnimBoneCompressionCodec_ACLBase {

}
declare const UAnimBoneCompressionCodec_ACLCustom: UAnimBoneCompressionCodec_ACLCustom;

declare interface UAnimBoneCompressionCodec_ACLDatabase extends UAnimBoneCompressionCodec_ACLBase {
    DatabaseAsset: UAnimationCompressionLibraryDatabase;
}
declare const UAnimBoneCompressionCodec_ACLDatabase: UAnimBoneCompressionCodec_ACLDatabase;

declare interface UAnimBoneCompressionCodec_ACLSafe extends UAnimBoneCompressionCodec_ACLBase {

}
declare const UAnimBoneCompressionCodec_ACLSafe: UAnimBoneCompressionCodec_ACLSafe;

declare interface UAnimCurveCompressionCodec_ACL extends UAnimCurveCompressionCodec {

}
declare const UAnimCurveCompressionCodec_ACL: UAnimCurveCompressionCodec_ACL;

declare interface UAnimationCompressionLibraryDatabase extends UObject {
    CookedCompressedBytes: TArray<uint8>;
    CookedAnimSequenceMappings: TArray<uint64>;
    MaxStreamRequestSizeKB: uint32;
    DefaultVisualFidelity: ACLVisualFidelity;
    SetVisualFidelity(WorldContextObject: UObject, LatentInfo: FLatentActionInfo, DatabaseAsset: UAnimationCompressionLibraryDatabase, Result: ACLVisualFidelityChangeResult, VisualFidelity: ACLVisualFidelity): void;
    GetVisualFidelity(DatabaseAsset: UAnimationCompressionLibraryDatabase): ACLVisualFidelity;
}
declare const UAnimationCompressionLibraryDatabase: UAnimationCompressionLibraryDatabase;

