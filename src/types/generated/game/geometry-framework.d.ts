declare interface ADynamicMeshActor extends AActor {
    readonly __static_ADynamicMeshActor: {
        ReleaseComputeMesh(mesh: UDynamicMesh): boolean;
        ReleaseAllComputeMeshes(): void;
        GetDynamicMeshComponent(): UDynamicMeshComponent;
        GetComputeMeshPool(): UDynamicMeshPool;
        FreeAllComputeMeshes(): void;
        AllocateComputeMesh(): UDynamicMesh;
    };
    readonly __properties_ADynamicMeshActor: {
        DynamicMeshComponent: UDynamicMeshComponent;
        bEnableComputeMeshPool: boolean;
        DynamicMeshPool: UDynamicMeshPool;
    };
    readonly __staticRegistry: 
        ADynamicMeshActor['__static_ADynamicMeshActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ADynamicMeshActor['__properties_ADynamicMeshActor'] &
        AActor['__propertyRegistry'];
}

declare interface FDynamicMeshChangeInfo {
    Type: EDynamicMeshChangeType;
    Flags: EDynamicMeshAttributeChangeFlags;
    bIsRevertChange: boolean;
}

declare interface IMeshCommandChangeTarget extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMeshReplacementCommandChangeTarget extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IMeshVertexCommandChangeTarget extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UBaseDynamicMeshComponent extends UMeshComponent {
    readonly __static_UBaseDynamicMeshComponent: {
        SetViewModeOverridesEnabled(bEnabled: boolean): void;
        SetVertexColorSpaceTransformMode(NewMode: EDynamicMeshVertexColorTransformMode): void;
        SetShadowsEnabled(bEnabled: boolean): void;
        SetSecondaryRenderMaterial(Material: UMaterialInterface): void;
        SetSecondaryBuffersVisibility(bSetVisible: boolean): void;
        SetOverrideWireframeRenderMaterial(Material: UMaterialInterface): void;
        SetOverrideSecondaryWireframeRenderMaterial(Material: UMaterialInterface): void;
        SetOverrideRenderMaterial(Material: UMaterialInterface): void;
        SetMeshDrawPath(NewDrawPath: EDynamicMeshDrawPath): void;
        SetEnableWireframeRenderPass(bEnable: boolean): void;
        SetEnableRaytracing(bSetEnabled: boolean): void;
        SetEnableFlatShading(bEnable: boolean): void;
        SetDistanceFieldMode(NewDistFieldMode: EDynamicMeshComponentDistanceFieldMode): void;
        SetConstantOverrideColor(NewColor: FColor): void;
        SetColorOverrideMode(NewMode: EDynamicMeshComponentColorOverrideMode): void;
        HasOverrideRenderMaterial(K: number): boolean;
        GetViewModeOverridesEnabled(): boolean;
        GetVertexColorSpaceTransformMode(): EDynamicMeshVertexColorTransformMode;
        GetShadowsEnabled(): boolean;
        GetSecondaryRenderMaterial(): UMaterialInterface;
        GetSecondaryBuffersVisibility(): boolean;
        GetOverrideWireframeRenderMaterial(): UMaterialInterface;
        GetOverrideSecondaryWireframeRenderMaterial(): UMaterialInterface;
        GetOverrideRenderMaterial(MaterialIndex: number): UMaterialInterface;
        GetMeshDrawPath(): EDynamicMeshDrawPath;
        GetFlatShadingEnabled(): boolean;
        GetEnableWireframeRenderPass(): boolean;
        GetEnableRaytracing(): boolean;
        GetDynamicMesh(): UDynamicMesh;
        GetDistanceFieldMode(): EDynamicMeshComponentDistanceFieldMode;
        GetConstantOverrideColor(): FColor;
        GetColorOverrideMode(): EDynamicMeshComponentColorOverrideMode;
        ClearSecondaryRenderMaterial(): void;
        ClearOverrideWireframeRenderMaterial(): void;
        ClearOverrideSecondaryWireframeRenderMaterial(): void;
        ClearOverrideRenderMaterial(): void;
    };
    readonly __properties_UBaseDynamicMeshComponent: {
        bExplicitShowWireframe: boolean;
        WireframeColor: FLinearColor;
        ColorMode: EDynamicMeshComponentColorOverrideMode;
        ConstantColor: FColor;
        ColorSpaceMode: EDynamicMeshVertexColorTransformMode;
        bEnableFlatShading: boolean;
        bEnableViewModeOverrides: boolean;
        OverrideRenderMaterial: UMaterialInterface;
        SecondaryRenderMaterial: UMaterialInterface;
        WireframeMaterialOverride: UMaterialInterface;
        SecondaryWireframeMaterialOverride: UMaterialInterface;
        bEnableRayTracing: boolean;
        DrawPath: EDynamicMeshDrawPath;
        DistanceFieldMode: EDynamicMeshComponentDistanceFieldMode;
        BaseMaterials: UMaterialInterface[];
    };
    readonly __staticRegistry: 
        UBaseDynamicMeshComponent['__static_UBaseDynamicMeshComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBaseDynamicMeshComponent['__properties_UBaseDynamicMeshComponent'] &
        UMeshComponent['__propertyRegistry'];
}

declare interface UDynamicMesh extends UObject {
    readonly __static_UDynamicMesh: {
        ResetToCube(): UDynamicMesh;
        Reset(): UDynamicMesh;
        IsEmpty(): boolean;
        GetTriangleCount(): number;
    };
    readonly __properties_UDynamicMesh: {
        MeshModifiedBPEvent: FDynamicMeshMeshModifiedBPEvent;
        MeshGenerator: UDynamicMeshGenerator;
        bEnableMeshGenerator: boolean;
    };
    readonly __staticRegistry: 
        UDynamicMesh['__static_UDynamicMesh'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDynamicMesh['__properties_UDynamicMesh'] &
        UObject['__propertyRegistry'];
}

declare interface UDynamicMeshComponent extends UBaseDynamicMeshComponent {
    readonly __static_UDynamicMeshComponent: {
        ValidateMaterialSlots(bCreateIfMissing: boolean, bDeleteExtraSlots: boolean): boolean;
        UpdateCollision(bOnlyIfPending: boolean): void;
        SetTangentsType(NewTangentsType: EDynamicMeshComponentTangentsMode): void;
        SetDynamicMesh(NewMesh: UDynamicMesh): void;
        SetDeferredCollisionUpdatesEnabled(bEnabled: boolean, bImmediateUpdate: boolean): void;
        SetComplexAsSimpleCollisionEnabled(bEnabled: boolean, bImmediateUpdate: boolean): void;
        SetAllowsGeometrySelection(bInAllowsGeometrySelection: boolean): void;
        NotifyMeshVertexAttributesModified(bPositions: boolean, bNormals: boolean, bUVs: boolean, bColors: boolean): void;
        NotifyMeshModified(): void;
        GetTangentsTypePure(): EDynamicMeshComponentTangentsMode;
        GetTangentsType(): EDynamicMeshComponentTangentsMode;
        EnableComplexAsSimpleCollision(): void;
        ConfigureMaterialSet(NewMaterialSet: UMaterialInterface[], bDeleteExtraSlots: boolean): void;
        AllowsGeometrySelection(): boolean;
    };
    readonly __properties_UDynamicMeshComponent: {
        MeshObject: UDynamicMesh;
        bAllowsGeometrySelection: boolean;
        TangentsType: EDynamicMeshComponentTangentsMode;
        CollisionType: ECollisionTraceFlag;
        bUseAsyncCooking: boolean;
        bEnableComplexCollision: boolean;
        bDeferCollisionUpdates: boolean;
        bDisableMeshUVHitResults: boolean;
        MeshBodySetup: UBodySetup;
        AggGeom: FKAggregateGeom;
        AsyncBodySetupQueue: UBodySetup[];
    };
    readonly __staticRegistry: 
        UDynamicMeshComponent['__static_UDynamicMeshComponent'] &
        UBaseDynamicMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDynamicMeshComponent['__properties_UDynamicMeshComponent'] &
        UBaseDynamicMeshComponent['__propertyRegistry'];
}

declare interface UDynamicMeshGenerator extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDynamicMeshPool extends UObject {
    readonly __static_UDynamicMeshPool: {
        ReturnMesh(mesh: UDynamicMesh): void;
        ReturnAllMeshes(): void;
        RequestMesh(): UDynamicMesh;
        FreeAllMeshes(): void;
    };
    readonly __properties_UDynamicMeshPool: {
        CachedMeshes: UDynamicMesh[];
        AllCreatedMeshes: UDynamicMesh[];
    };
    readonly __staticRegistry: 
        UDynamicMeshPool['__static_UDynamicMeshPool'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDynamicMeshPool['__properties_UDynamicMeshPool'] &
        UObject['__propertyRegistry'];
}

declare interface UDynamicMeshProcessorBlueprint extends UObject {
    readonly __static_UDynamicMeshProcessorBlueprint: {
        ProcessDynamicMesh(TargetMesh: UDynamicMesh, bFailed: boolean): void;
    };
    readonly __staticRegistry: 
        UDynamicMeshProcessorBlueprint['__static_UDynamicMeshProcessorBlueprint'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

