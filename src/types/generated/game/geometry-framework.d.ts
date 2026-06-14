declare interface ADynamicMeshActor extends AActor {
    DynamicMeshComponent: UDynamicMeshComponent;
    bEnableComputeMeshPool: boolean;
    DynamicMeshPool: UDynamicMeshPool;
    ReleaseComputeMesh(mesh: UDynamicMesh): boolean;
    ReleaseAllComputeMeshes(): void;
    GetDynamicMeshComponent(): UDynamicMeshComponent;
    GetComputeMeshPool(): UDynamicMeshPool;
    FreeAllComputeMeshes(): void;
    AllocateComputeMesh(): UDynamicMesh;
}
declare const ADynamicMeshActor: ADynamicMeshActor;

declare interface FDynamicMeshChangeInfo {
    Type: EDynamicMeshChangeType;
    Flags: EDynamicMeshAttributeChangeFlags;
    bIsRevertChange: boolean;
}
declare const FDynamicMeshChangeInfo: FDynamicMeshChangeInfo;

declare interface IMeshCommandChangeTarget extends IInterface {

}
declare const IMeshCommandChangeTarget: IMeshCommandChangeTarget;

declare interface IMeshReplacementCommandChangeTarget extends IInterface {

}
declare const IMeshReplacementCommandChangeTarget: IMeshReplacementCommandChangeTarget;

declare interface IMeshVertexCommandChangeTarget extends IInterface {

}
declare const IMeshVertexCommandChangeTarget: IMeshVertexCommandChangeTarget;

declare interface UBaseDynamicMeshComponent extends UMeshComponent {
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
    BaseMaterials: TArray<UMaterialInterface>;
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
}
declare const UBaseDynamicMeshComponent: UBaseDynamicMeshComponent;

declare interface UDynamicMesh extends UObject {
    MeshModifiedBPEvent: FDynamicMeshMeshModifiedBPEvent;
    MeshGenerator: UDynamicMeshGenerator;
    bEnableMeshGenerator: boolean;
    ResetToCube(): UDynamicMesh;
    Reset(): UDynamicMesh;
    IsEmpty(): boolean;
    GetTriangleCount(): number;
}
declare const UDynamicMesh: UDynamicMesh;

declare interface UDynamicMeshComponent extends UBaseDynamicMeshComponent {
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
    AsyncBodySetupQueue: TArray<UBodySetup>;
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
    ConfigureMaterialSet(NewMaterialSet: TArray<UMaterialInterface>, bDeleteExtraSlots: boolean): void;
    AllowsGeometrySelection(): boolean;
}
declare const UDynamicMeshComponent: UDynamicMeshComponent;

declare interface UDynamicMeshGenerator extends UObject {

}
declare const UDynamicMeshGenerator: UDynamicMeshGenerator;

declare interface UDynamicMeshPool extends UObject {
    CachedMeshes: TArray<UDynamicMesh>;
    AllCreatedMeshes: TArray<UDynamicMesh>;
    ReturnMesh(mesh: UDynamicMesh): void;
    ReturnAllMeshes(): void;
    RequestMesh(): UDynamicMesh;
    FreeAllMeshes(): void;
}
declare const UDynamicMeshPool: UDynamicMeshPool;

declare interface UDynamicMeshProcessorBlueprint extends UObject {
    ProcessDynamicMesh(TargetMesh: UDynamicMesh, bFailed: boolean): void;
}
declare const UDynamicMeshProcessorBlueprint: UDynamicMeshProcessorBlueprint;

