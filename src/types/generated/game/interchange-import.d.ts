declare interface IInterchangeAnimationPayloadInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInterchangeBlockedTexturePayloadInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInterchangeMeshPayloadInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInterchangeSlicedTexturePayloadInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInterchangeTextureLightProfilePayloadInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInterchangeTexturePayloadInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInterchangeVariantSetPayloadInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IInterchangeVolumePayloadInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UInterchangeActorFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeAnimSequenceFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeAssetUserData extends UAssetUserData {
    readonly __properties_UInterchangeAssetUserData: {
        MetaData: TMap<string, string>;
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeAssetUserData['__properties_UInterchangeAssetUserData'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface UInterchangeCameraActorFactory extends UInterchangeActorFactory {
    readonly __staticRegistry: 
        UInterchangeActorFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactory['__propertyRegistry'];
}

declare interface UInterchangeCineCameraActorFactory extends UInterchangeActorFactory {
    readonly __staticRegistry: 
        UInterchangeActorFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactory['__propertyRegistry'];
}

declare interface UInterchangeDDSTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangeDecalActorFactory extends UInterchangeActorFactory {
    readonly __staticRegistry: 
        UInterchangeActorFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactory['__propertyRegistry'];
}

declare interface UInterchangeFbxTranslator extends UInterchangeTranslatorBase {
    readonly __properties_UInterchangeFbxTranslator: {
        CacheFbxTranslatorSettings: UInterchangeFbxTranslatorSettings;
    };
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFbxTranslator['__properties_UInterchangeFbxTranslator'] &
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangeFbxTranslatorSettings extends UInterchangeTranslatorSettings {
    readonly __properties_UInterchangeFbxTranslatorSettings: {
        bConvertScene: boolean;
        bForceFrontXAxis: boolean;
        bConvertSceneUnit: boolean;
        bKeepFbxNamespace: boolean;
    };
    readonly __staticRegistry: 
        UInterchangeTranslatorSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFbxTranslatorSettings['__properties_UInterchangeFbxTranslatorSettings'] &
        UInterchangeTranslatorSettings['__propertyRegistry'];
}

declare interface UInterchangeGLTFTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangeGeometryCacheFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeHeterogeneousVolumeActorFactory extends UInterchangeActorFactory {
    readonly __staticRegistry: 
        UInterchangeActorFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactory['__propertyRegistry'];
}

declare interface UInterchangeIESTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangeImageWrapperTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangeJPGTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangeLevelAssetUserData extends UAssetUserData {
    readonly __properties_UInterchangeLevelAssetUserData: {
        SceneImportPaths: FSoftObjectPath[];
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeLevelAssetUserData['__properties_UInterchangeLevelAssetUserData'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface UInterchangeLevelFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeLevelInstanceActorFactory extends UInterchangeActorFactory {
    readonly __staticRegistry: 
        UInterchangeActorFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactory['__propertyRegistry'];
}

declare interface UInterchangeLevelSequenceFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeLightActorFactory extends UInterchangeActorFactory {
    readonly __staticRegistry: 
        UInterchangeActorFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactory['__propertyRegistry'];
}

declare interface UInterchangeMaterialFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeMaterialFunctionFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeMaterialXTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangeOBJTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangePSDTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangePhysicsAssetFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeSceneImportAssetFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeSceneVariantSetsFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeSkeletalMeshActorFactory extends UInterchangeActorFactory {
    readonly __staticRegistry: 
        UInterchangeActorFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactory['__propertyRegistry'];
}

declare interface UInterchangeSkeletalMeshFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeSkeletonFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeSparseVolumeTextureFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeSpecularProfileFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeStaticMeshActorFactory extends UInterchangeActorFactory {
    readonly __staticRegistry: 
        UInterchangeActorFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactory['__propertyRegistry'];
}

declare interface UInterchangeStaticMeshFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeTextureFactory extends UInterchangeFactoryBase {
    readonly __staticRegistry: 
        UInterchangeFactoryBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBase['__propertyRegistry'];
}

declare interface UInterchangeUEJPEGTranslator extends UInterchangeTranslatorBase {
    readonly __staticRegistry: 
        UInterchangeTranslatorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTranslatorBase['__propertyRegistry'];
}

declare interface UInterchangeVolumeTranslatorSettings extends UInterchangeTranslatorSettings {
    readonly __properties_UInterchangeVolumeTranslatorSettings: {
        bTranslateAdjacentNumberedFiles: boolean;
        AnimationID: string;
    };
    readonly __staticRegistry: 
        UInterchangeTranslatorSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeVolumeTranslatorSettings['__properties_UInterchangeVolumeTranslatorSettings'] &
        UInterchangeTranslatorSettings['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXAppend3Vector extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXAppend3Vector: {
        A: FExpressionInput;
        B: FExpressionInput;
        C: FExpressionInput;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXAppend3Vector['__properties_UMaterialExpressionMaterialXAppend3Vector'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXAppend4Vector extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXAppend4Vector: {
        A: FExpressionInput;
        B: FExpressionInput;
        C: FExpressionInput;
        D: FExpressionInput;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXAppend4Vector['__properties_UMaterialExpressionMaterialXAppend4Vector'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXBurn extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXBurn: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXBurn['__properties_UMaterialExpressionMaterialXBurn'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXContrast extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXContrast: {
        Input: FExpressionInput;
        Amount: FExpressionInput;
        Pivot: FExpressionInput;
        ConstAmount: number;
        ConstPivot: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXContrast['__properties_UMaterialExpressionMaterialXContrast'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXDifference extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXDifference: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXDifference['__properties_UMaterialExpressionMaterialXDifference'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXDisjointOver extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXDisjointOver: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXDisjointOver['__properties_UMaterialExpressionMaterialXDisjointOver'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXDodge extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXDodge: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXDodge['__properties_UMaterialExpressionMaterialXDodge'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXFractal3D extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXFractal3D: {
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
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXFractal3D['__properties_UMaterialExpressionMaterialXFractal3D'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXIn extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXIn: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXIn['__properties_UMaterialExpressionMaterialXIn'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXLuminance extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXLuminance: {
        Input: FExpressionInput;
        LuminanceFactors: FLinearColor;
        LuminanceMode: EMaterialXLuminanceMode;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXLuminance['__properties_UMaterialExpressionMaterialXLuminance'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXMask extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXMask: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXMask['__properties_UMaterialExpressionMaterialXMask'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXMatte extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXMatte: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXMatte['__properties_UMaterialExpressionMaterialXMatte'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXMinus extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXMinus: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXMinus['__properties_UMaterialExpressionMaterialXMinus'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXMod extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXMod: {
        A: FExpressionInput;
        B: FExpressionInput;
        ConstB: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXMod['__properties_UMaterialExpressionMaterialXMod'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXOut extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXOut: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXOut['__properties_UMaterialExpressionMaterialXOut'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXOver extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXOver: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXOver['__properties_UMaterialExpressionMaterialXOver'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXOverlay extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXOverlay: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXOverlay['__properties_UMaterialExpressionMaterialXOverlay'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXPlace2D extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXPlace2D: {
        Coordinates: FExpressionInput;
        Pivot: FExpressionInput;
        Scale: FExpressionInput;
        Offset: FExpressionInput;
        RotationAngle: FExpressionInput;
        ConstRotationAngle: number;
        ConstCoordinate: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXPlace2D['__properties_UMaterialExpressionMaterialXPlace2D'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXPlus extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXPlus: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXPlus['__properties_UMaterialExpressionMaterialXPlus'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXPremult extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXPremult: {
        Input: FExpressionInput;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXPremult['__properties_UMaterialExpressionMaterialXPremult'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXRamp4 extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXRamp4: {
        Coordinates: FExpressionInput;
        A: FExpressionInput;
        B: FExpressionInput;
        C: FExpressionInput;
        D: FExpressionInput;
        ConstCoordinate: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXRamp4['__properties_UMaterialExpressionMaterialXRamp4'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXRampLeftRight extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXRampLeftRight: {
        Coordinates: FExpressionInput;
        A: FExpressionInput;
        B: FExpressionInput;
        ConstCoordinate: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXRampLeftRight['__properties_UMaterialExpressionMaterialXRampLeftRight'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXRampTopBottom extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXRampTopBottom: {
        Coordinates: FExpressionInput;
        A: FExpressionInput;
        B: FExpressionInput;
        ConstCoordinate: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXRampTopBottom['__properties_UMaterialExpressionMaterialXRampTopBottom'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXRange extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXRange: {
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
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXRange['__properties_UMaterialExpressionMaterialXRange'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXRemap extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXRemap: {
        Input: FExpressionInput;
        InputLow: FExpressionInput;
        InputHigh: FExpressionInput;
        TargetLow: FExpressionInput;
        TargetHigh: FExpressionInput;
        InputLowDefault: number;
        InputHighDefault: number;
        TargetLowDefault: number;
        TargetHighDefault: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXRemap['__properties_UMaterialExpressionMaterialXRemap'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXRotate2D extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXRotate2D: {
        Input: FExpressionInput;
        RotationAngle: FExpressionInput;
        ConstRotationAngle: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXRotate2D['__properties_UMaterialExpressionMaterialXRotate2D'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXScreen extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXScreen: {
        A: FExpressionInput;
        B: FExpressionInput;
        alpha: FExpressionInput;
        ConstAlpha: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXScreen['__properties_UMaterialExpressionMaterialXScreen'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXSplitLeftRight extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXSplitLeftRight: {
        Coordinates: FExpressionInput;
        A: FExpressionInput;
        B: FExpressionInput;
        Center: FExpressionInput;
        ConstCenter: number;
        ConstCoordinate: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXSplitLeftRight['__properties_UMaterialExpressionMaterialXSplitLeftRight'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXSplitTopBottom extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXSplitTopBottom: {
        Coordinates: FExpressionInput;
        A: FExpressionInput;
        B: FExpressionInput;
        Center: FExpressionInput;
        ConstCenter: number;
        ConstCoordinate: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXSplitTopBottom['__properties_UMaterialExpressionMaterialXSplitTopBottom'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXSwizzle extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXSwizzle: {
        Input: FExpressionInput;
        Channels: string;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXSwizzle['__properties_UMaterialExpressionMaterialXSwizzle'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXTextureSampleParameterBlur extends UMaterialExpressionTextureSampleParameter2D {
    readonly __properties_UMaterialExpressionMaterialXTextureSampleParameterBlur: {
        KernelSize: EMAterialXTextureSampleBlurKernel;
        FilterSize: number;
        FilterOffset: number;
        Filter: EMaterialXTextureSampleBlurFilter;
    };
    readonly __staticRegistry: 
        UMaterialExpressionTextureSampleParameter2D['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXTextureSampleParameterBlur['__properties_UMaterialExpressionMaterialXTextureSampleParameterBlur'] &
        UMaterialExpressionTextureSampleParameter2D['__propertyRegistry'];
}

declare interface UMaterialExpressionMaterialXUnpremult extends UMaterialExpression {
    readonly __properties_UMaterialExpressionMaterialXUnpremult: {
        Input: FExpressionInput;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionMaterialXUnpremult['__properties_UMaterialExpressionMaterialXUnpremult'] &
        UMaterialExpression['__propertyRegistry'];
}

