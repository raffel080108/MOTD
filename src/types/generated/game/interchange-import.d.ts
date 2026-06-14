declare interface IInterchangeAnimationPayloadInterface extends IInterface {

}
declare const IInterchangeAnimationPayloadInterface: IInterchangeAnimationPayloadInterface;

declare interface IInterchangeBlockedTexturePayloadInterface extends IInterface {

}
declare const IInterchangeBlockedTexturePayloadInterface: IInterchangeBlockedTexturePayloadInterface;

declare interface IInterchangeMeshPayloadInterface extends IInterface {

}
declare const IInterchangeMeshPayloadInterface: IInterchangeMeshPayloadInterface;

declare interface IInterchangeSlicedTexturePayloadInterface extends IInterface {

}
declare const IInterchangeSlicedTexturePayloadInterface: IInterchangeSlicedTexturePayloadInterface;

declare interface IInterchangeTextureLightProfilePayloadInterface extends IInterface {

}
declare const IInterchangeTextureLightProfilePayloadInterface: IInterchangeTextureLightProfilePayloadInterface;

declare interface IInterchangeTexturePayloadInterface extends IInterface {

}
declare const IInterchangeTexturePayloadInterface: IInterchangeTexturePayloadInterface;

declare interface IInterchangeVariantSetPayloadInterface extends IInterface {

}
declare const IInterchangeVariantSetPayloadInterface: IInterchangeVariantSetPayloadInterface;

declare interface IInterchangeVolumePayloadInterface extends IInterface {

}
declare const IInterchangeVolumePayloadInterface: IInterchangeVolumePayloadInterface;

declare interface UInterchangeActorFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeActorFactory: UInterchangeActorFactory;

declare interface UInterchangeAnimSequenceFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeAnimSequenceFactory: UInterchangeAnimSequenceFactory;

declare interface UInterchangeAssetUserData extends UAssetUserData {
    MetaData: Record<FString, FString>;
}
declare const UInterchangeAssetUserData: UInterchangeAssetUserData;

declare interface UInterchangeCameraActorFactory extends UInterchangeActorFactory {

}
declare const UInterchangeCameraActorFactory: UInterchangeCameraActorFactory;

declare interface UInterchangeCineCameraActorFactory extends UInterchangeActorFactory {

}
declare const UInterchangeCineCameraActorFactory: UInterchangeCineCameraActorFactory;

declare interface UInterchangeDDSTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangeDDSTranslator: UInterchangeDDSTranslator;

declare interface UInterchangeDecalActorFactory extends UInterchangeActorFactory {

}
declare const UInterchangeDecalActorFactory: UInterchangeDecalActorFactory;

declare interface UInterchangeFbxTranslator extends UInterchangeTranslatorBase {
    CacheFbxTranslatorSettings: UInterchangeFbxTranslatorSettings;
}
declare const UInterchangeFbxTranslator: UInterchangeFbxTranslator;

declare interface UInterchangeFbxTranslatorSettings extends UInterchangeTranslatorSettings {
    bConvertScene: boolean;
    bForceFrontXAxis: boolean;
    bConvertSceneUnit: boolean;
    bKeepFbxNamespace: boolean;
}
declare const UInterchangeFbxTranslatorSettings: UInterchangeFbxTranslatorSettings;

declare interface UInterchangeGLTFTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangeGLTFTranslator: UInterchangeGLTFTranslator;

declare interface UInterchangeGeometryCacheFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeGeometryCacheFactory: UInterchangeGeometryCacheFactory;

declare interface UInterchangeHeterogeneousVolumeActorFactory extends UInterchangeActorFactory {

}
declare const UInterchangeHeterogeneousVolumeActorFactory: UInterchangeHeterogeneousVolumeActorFactory;

declare interface UInterchangeIESTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangeIESTranslator: UInterchangeIESTranslator;

declare interface UInterchangeImageWrapperTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangeImageWrapperTranslator: UInterchangeImageWrapperTranslator;

declare interface UInterchangeJPGTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangeJPGTranslator: UInterchangeJPGTranslator;

declare interface UInterchangeLevelAssetUserData extends UAssetUserData {
    SceneImportPaths: TArray<FSoftObjectPath>;
}
declare const UInterchangeLevelAssetUserData: UInterchangeLevelAssetUserData;

declare interface UInterchangeLevelFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeLevelFactory: UInterchangeLevelFactory;

declare interface UInterchangeLevelInstanceActorFactory extends UInterchangeActorFactory {

}
declare const UInterchangeLevelInstanceActorFactory: UInterchangeLevelInstanceActorFactory;

declare interface UInterchangeLevelSequenceFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeLevelSequenceFactory: UInterchangeLevelSequenceFactory;

declare interface UInterchangeLightActorFactory extends UInterchangeActorFactory {

}
declare const UInterchangeLightActorFactory: UInterchangeLightActorFactory;

declare interface UInterchangeMaterialFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeMaterialFactory: UInterchangeMaterialFactory;

declare interface UInterchangeMaterialFunctionFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeMaterialFunctionFactory: UInterchangeMaterialFunctionFactory;

declare interface UInterchangeMaterialXTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangeMaterialXTranslator: UInterchangeMaterialXTranslator;

declare interface UInterchangeOBJTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangeOBJTranslator: UInterchangeOBJTranslator;

declare interface UInterchangePSDTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangePSDTranslator: UInterchangePSDTranslator;

declare interface UInterchangePhysicsAssetFactory extends UInterchangeFactoryBase {

}
declare const UInterchangePhysicsAssetFactory: UInterchangePhysicsAssetFactory;

declare interface UInterchangeSceneImportAssetFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeSceneImportAssetFactory: UInterchangeSceneImportAssetFactory;

declare interface UInterchangeSceneVariantSetsFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeSceneVariantSetsFactory: UInterchangeSceneVariantSetsFactory;

declare interface UInterchangeSkeletalMeshActorFactory extends UInterchangeActorFactory {

}
declare const UInterchangeSkeletalMeshActorFactory: UInterchangeSkeletalMeshActorFactory;

declare interface UInterchangeSkeletalMeshFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeSkeletalMeshFactory: UInterchangeSkeletalMeshFactory;

declare interface UInterchangeSkeletonFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeSkeletonFactory: UInterchangeSkeletonFactory;

declare interface UInterchangeSparseVolumeTextureFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeSparseVolumeTextureFactory: UInterchangeSparseVolumeTextureFactory;

declare interface UInterchangeSpecularProfileFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeSpecularProfileFactory: UInterchangeSpecularProfileFactory;

declare interface UInterchangeStaticMeshActorFactory extends UInterchangeActorFactory {

}
declare const UInterchangeStaticMeshActorFactory: UInterchangeStaticMeshActorFactory;

declare interface UInterchangeStaticMeshFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeStaticMeshFactory: UInterchangeStaticMeshFactory;

declare interface UInterchangeTextureFactory extends UInterchangeFactoryBase {

}
declare const UInterchangeTextureFactory: UInterchangeTextureFactory;

declare interface UInterchangeUEJPEGTranslator extends UInterchangeTranslatorBase {

}
declare const UInterchangeUEJPEGTranslator: UInterchangeUEJPEGTranslator;

declare interface UInterchangeVolumeTranslatorSettings extends UInterchangeTranslatorSettings {
    bTranslateAdjacentNumberedFiles: boolean;
    AnimationID: FString;
}
declare const UInterchangeVolumeTranslatorSettings: UInterchangeVolumeTranslatorSettings;

declare interface UMaterialExpressionMaterialXAppend3Vector extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    C: FExpressionInput;
}
declare const UMaterialExpressionMaterialXAppend3Vector: UMaterialExpressionMaterialXAppend3Vector;

declare interface UMaterialExpressionMaterialXAppend4Vector extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    C: FExpressionInput;
    D: FExpressionInput;
}
declare const UMaterialExpressionMaterialXAppend4Vector: UMaterialExpressionMaterialXAppend4Vector;

declare interface UMaterialExpressionMaterialXBurn extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXBurn: UMaterialExpressionMaterialXBurn;

declare interface UMaterialExpressionMaterialXContrast extends UMaterialExpression {
    Input: FExpressionInput;
    Amount: FExpressionInput;
    Pivot: FExpressionInput;
    ConstAmount: number;
    ConstPivot: number;
}
declare const UMaterialExpressionMaterialXContrast: UMaterialExpressionMaterialXContrast;

declare interface UMaterialExpressionMaterialXDifference extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXDifference: UMaterialExpressionMaterialXDifference;

declare interface UMaterialExpressionMaterialXDisjointOver extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXDisjointOver: UMaterialExpressionMaterialXDisjointOver;

declare interface UMaterialExpressionMaterialXDodge extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXDodge: UMaterialExpressionMaterialXDodge;

declare interface UMaterialExpressionMaterialXFractal3D extends UMaterialExpression {
    position: FExpressionInput;
    Amplitude: FExpressionInput;
    ConstAmplitude: number;
    Octaves: FExpressionInput;
    ConstOctaves: number;
    Lacunarity: FExpressionInput;
    ConstLacunarity: number;
    Diminish: FExpressionInput;
    ConstDiminish: number;
    Scale: number;
    bTurbulence: boolean;
    Levels: number;
    OutputMin: number;
    OutputMax: number;
}
declare const UMaterialExpressionMaterialXFractal3D: UMaterialExpressionMaterialXFractal3D;

declare interface UMaterialExpressionMaterialXIn extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXIn: UMaterialExpressionMaterialXIn;

declare interface UMaterialExpressionMaterialXLuminance extends UMaterialExpression {
    Input: FExpressionInput;
    LuminanceFactors: FLinearColor;
    LuminanceMode: EMaterialXLuminanceMode;
}
declare const UMaterialExpressionMaterialXLuminance: UMaterialExpressionMaterialXLuminance;

declare interface UMaterialExpressionMaterialXMask extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXMask: UMaterialExpressionMaterialXMask;

declare interface UMaterialExpressionMaterialXMatte extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXMatte: UMaterialExpressionMaterialXMatte;

declare interface UMaterialExpressionMaterialXMinus extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXMinus: UMaterialExpressionMaterialXMinus;

declare interface UMaterialExpressionMaterialXMod extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    ConstB: number;
}
declare const UMaterialExpressionMaterialXMod: UMaterialExpressionMaterialXMod;

declare interface UMaterialExpressionMaterialXOut extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXOut: UMaterialExpressionMaterialXOut;

declare interface UMaterialExpressionMaterialXOver extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXOver: UMaterialExpressionMaterialXOver;

declare interface UMaterialExpressionMaterialXOverlay extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXOverlay: UMaterialExpressionMaterialXOverlay;

declare interface UMaterialExpressionMaterialXPlace2D extends UMaterialExpression {
    Coordinates: FExpressionInput;
    Pivot: FExpressionInput;
    Scale: FExpressionInput;
    Offset: FExpressionInput;
    RotationAngle: FExpressionInput;
    ConstRotationAngle: number;
    ConstCoordinate: uint8;
}
declare const UMaterialExpressionMaterialXPlace2D: UMaterialExpressionMaterialXPlace2D;

declare interface UMaterialExpressionMaterialXPlus extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXPlus: UMaterialExpressionMaterialXPlus;

declare interface UMaterialExpressionMaterialXPremult extends UMaterialExpression {
    Input: FExpressionInput;
}
declare const UMaterialExpressionMaterialXPremult: UMaterialExpressionMaterialXPremult;

declare interface UMaterialExpressionMaterialXRamp4 extends UMaterialExpression {
    Coordinates: FExpressionInput;
    A: FExpressionInput;
    B: FExpressionInput;
    C: FExpressionInput;
    D: FExpressionInput;
    ConstCoordinate: uint8;
}
declare const UMaterialExpressionMaterialXRamp4: UMaterialExpressionMaterialXRamp4;

declare interface UMaterialExpressionMaterialXRampLeftRight extends UMaterialExpression {
    Coordinates: FExpressionInput;
    A: FExpressionInput;
    B: FExpressionInput;
    ConstCoordinate: uint8;
}
declare const UMaterialExpressionMaterialXRampLeftRight: UMaterialExpressionMaterialXRampLeftRight;

declare interface UMaterialExpressionMaterialXRampTopBottom extends UMaterialExpression {
    Coordinates: FExpressionInput;
    A: FExpressionInput;
    B: FExpressionInput;
    ConstCoordinate: uint8;
}
declare const UMaterialExpressionMaterialXRampTopBottom: UMaterialExpressionMaterialXRampTopBottom;

declare interface UMaterialExpressionMaterialXRange extends UMaterialExpression {
    Input: FExpressionInput;
    InputLow: FExpressionInput;
    InputHigh: FExpressionInput;
    TargetLow: FExpressionInput;
    TargetHigh: FExpressionInput;
    Gamma: FExpressionInput;
    clamp: FExpressionInput;
    ConstInputLow: number;
    ConstInputHigh: number;
    ConstTargetLow: number;
    ConstTargetHigh: number;
    ConstGamma: number;
    bConstClamp: boolean;
}
declare const UMaterialExpressionMaterialXRange: UMaterialExpressionMaterialXRange;

declare interface UMaterialExpressionMaterialXRemap extends UMaterialExpression {
    Input: FExpressionInput;
    InputLow: FExpressionInput;
    InputHigh: FExpressionInput;
    TargetLow: FExpressionInput;
    TargetHigh: FExpressionInput;
    InputLowDefault: number;
    InputHighDefault: number;
    TargetLowDefault: number;
    TargetHighDefault: number;
}
declare const UMaterialExpressionMaterialXRemap: UMaterialExpressionMaterialXRemap;

declare interface UMaterialExpressionMaterialXRotate2D extends UMaterialExpression {
    Input: FExpressionInput;
    RotationAngle: FExpressionInput;
    ConstRotationAngle: number;
}
declare const UMaterialExpressionMaterialXRotate2D: UMaterialExpressionMaterialXRotate2D;

declare interface UMaterialExpressionMaterialXScreen extends UMaterialExpression {
    A: FExpressionInput;
    B: FExpressionInput;
    alpha: FExpressionInput;
    ConstAlpha: number;
}
declare const UMaterialExpressionMaterialXScreen: UMaterialExpressionMaterialXScreen;

declare interface UMaterialExpressionMaterialXSplitLeftRight extends UMaterialExpression {
    Coordinates: FExpressionInput;
    A: FExpressionInput;
    B: FExpressionInput;
    Center: FExpressionInput;
    ConstCenter: number;
    ConstCoordinate: uint8;
}
declare const UMaterialExpressionMaterialXSplitLeftRight: UMaterialExpressionMaterialXSplitLeftRight;

declare interface UMaterialExpressionMaterialXSplitTopBottom extends UMaterialExpression {
    Coordinates: FExpressionInput;
    A: FExpressionInput;
    B: FExpressionInput;
    Center: FExpressionInput;
    ConstCenter: number;
    ConstCoordinate: uint8;
}
declare const UMaterialExpressionMaterialXSplitTopBottom: UMaterialExpressionMaterialXSplitTopBottom;

declare interface UMaterialExpressionMaterialXSwizzle extends UMaterialExpression {
    Input: FExpressionInput;
    Channels: FString;
}
declare const UMaterialExpressionMaterialXSwizzle: UMaterialExpressionMaterialXSwizzle;

declare interface UMaterialExpressionMaterialXTextureSampleParameterBlur extends UMaterialExpressionTextureSampleParameter2D {
    KernelSize: EMAterialXTextureSampleBlurKernel;
    FilterSize: number;
    FilterOffset: number;
    Filter: EMaterialXTextureSampleBlurFilter;
}
declare const UMaterialExpressionMaterialXTextureSampleParameterBlur: UMaterialExpressionMaterialXTextureSampleParameterBlur;

declare interface UMaterialExpressionMaterialXUnpremult extends UMaterialExpression {
    Input: FExpressionInput;
}
declare const UMaterialExpressionMaterialXUnpremult: UMaterialExpressionMaterialXUnpremult;

