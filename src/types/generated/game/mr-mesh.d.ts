declare interface FMRMeshConfiguration {

}
declare const FMRMeshConfiguration: FMRMeshConfiguration;

declare interface UMRMeshBodyHolder extends UObject {
    BodySetup: UBodySetup;
    BodyInstance: FBodyInstance;
}
declare const UMRMeshBodyHolder: UMRMeshBodyHolder;

declare interface UMRMeshComponent extends UPrimitiveComponent {
    Material: UMaterialInterface;
    WireframeMaterial: UMaterialInterface;
    bCreateMeshProxySections: boolean;
    bUpdateNavMeshOnMeshUpdate: boolean;
    bNeverCreateCollisionMesh: boolean;
    BodyHolders: TArray<UMRMeshBodyHolder>;
    SetWireframeMaterial(InMaterial: UMaterialInterface): void;
    SetWireframeColor(InColor: FLinearColor): void;
    SetUseWireframe(bUseWireframe: boolean): void;
    SetEnableMeshOcclusion(bEnable: boolean): void;
    RequestNavMeshUpdate(): void;
    IsConnected(): boolean;
    GetWireframeColor(): FLinearColor;
    GetUseWireframe(): boolean;
    GetEnableMeshOcclusion(): boolean;
    ForceNavMeshUpdate(): void;
    Clear(): void;
}
declare const UMRMeshComponent: UMRMeshComponent;

declare interface UMeshReconstructorBase extends UObject {
    StopReconstruction(): void;
    StartReconstruction(): void;
    PauseReconstruction(): void;
    IsReconstructionStarted(): boolean;
    IsReconstructionPaused(): boolean;
    DisconnectMRMesh(): void;
    ConnectMRMesh(mesh: UMRMeshComponent): void;
}
declare const UMeshReconstructorBase: UMeshReconstructorBase;

declare interface UMockDataMeshTrackerComponent extends USceneComponent {
    OnMeshTrackerUpdated: FMockDataMeshTrackerComponentOnMeshTrackerUpdated;
    ScanWorld: boolean;
    RequestNormals: boolean;
    RequestVertexConfidence: boolean;
    VertexColorMode: EMeshTrackerVertexColorMode;
    BlockVertexColors: TArray<FColor>;
    VertexColorFromConfidenceZero: FLinearColor;
    VertexColorFromConfidenceOne: FLinearColor;
    UpdateInterval: number;
    MRMesh: UMRMeshComponent;
    OnMockDataMeshTrackerUpdated__DelegateSignature(Index: number, Vertices: TArray<FVector>, Triangles: TArray<number>, Normals: TArray<FVector>, Confidence: TArray<number>): void;
    DisconnectMRMesh(InMRMeshPtr: UMRMeshComponent): void;
    ConnectMRMesh(InMRMeshPtr: UMRMeshComponent): void;
}
declare const UMockDataMeshTrackerComponent: UMockDataMeshTrackerComponent;

