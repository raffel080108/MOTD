declare type FMRMeshConfiguration = object;

declare interface UMRMeshBodyHolder extends UObject {
    readonly __properties_UMRMeshBodyHolder: {
        BodySetup: UBodySetup;
        BodyInstance: FBodyInstance;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMRMeshBodyHolder['__properties_UMRMeshBodyHolder'] &
        UObject['__propertyRegistry'];
}

declare interface UMRMeshComponent extends UPrimitiveComponent {
    readonly __static_UMRMeshComponent: {
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
    };
    readonly __properties_UMRMeshComponent: {
        Material: UMaterialInterface;
        WireframeMaterial: UMaterialInterface;
        bCreateMeshProxySections: boolean;
        bUpdateNavMeshOnMeshUpdate: boolean;
        bNeverCreateCollisionMesh: boolean;
        BodyHolders: UMRMeshBodyHolder[];
    };
    readonly __staticRegistry: 
        UMRMeshComponent['__static_UMRMeshComponent'] &
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UMRMeshComponent['__properties_UMRMeshComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface UMeshReconstructorBase extends UObject {
    readonly __static_UMeshReconstructorBase: {
        StopReconstruction(): void;
        StartReconstruction(): void;
        PauseReconstruction(): void;
        IsReconstructionStarted(): boolean;
        IsReconstructionPaused(): boolean;
        DisconnectMRMesh(): void;
        ConnectMRMesh(mesh: UMRMeshComponent): void;
    };
    readonly __staticRegistry: 
        UMeshReconstructorBase['__static_UMeshReconstructorBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMockDataMeshTrackerComponent extends USceneComponent {
    readonly __static_UMockDataMeshTrackerComponent: {
        OnMockDataMeshTrackerUpdated__DelegateSignature(Index: number, Vertices: FVector[], Triangles: number[], Normals: FVector[], Confidence: number[]): void;
        DisconnectMRMesh(InMRMeshPtr: UMRMeshComponent): void;
        ConnectMRMesh(InMRMeshPtr: UMRMeshComponent): void;
    };
    readonly __properties_UMockDataMeshTrackerComponent: {
        OnMeshTrackerUpdated: FMockDataMeshTrackerComponentOnMeshTrackerUpdated;
        ScanWorld: boolean;
        RequestNormals: boolean;
        RequestVertexConfidence: boolean;
        VertexColorMode: EMeshTrackerVertexColorMode;
        BlockVertexColors: FColor[];
        VertexColorFromConfidenceZero: FLinearColor;
        VertexColorFromConfidenceOne: FLinearColor;
        UpdateInterval: number;
        MRMesh: UMRMeshComponent;
    };
    readonly __staticRegistry: 
        UMockDataMeshTrackerComponent['__static_UMockDataMeshTrackerComponent'] &
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UMockDataMeshTrackerComponent['__properties_UMockDataMeshTrackerComponent'] &
        USceneComponent['__propertyRegistry'];
}

