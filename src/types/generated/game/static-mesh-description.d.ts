declare interface FUVMapSettings {
    Size: FVector;
    UVTile: FVector2D;
    position: FVector;
    Rotation: FRotator;
    Scale: FVector;
}

declare interface UStaticMeshDescription extends UMeshDescriptionBase {
    readonly __static_UStaticMeshDescription: {
        SetVertexInstanceUV(VertexInstanceID: FVertexInstanceID, UV: FVector2D, UVIndex: number): void;
        SetPolygonGroupMaterialSlotName(PolygonGroupID: FPolygonGroupID, slotName: string): void;
        GetVertexInstanceUV(VertexInstanceID: FVertexInstanceID, UVIndex: number): FVector2D;
        CreateCube(Center: FVector, HalfExtents: FVector, PolygonGroup: FPolygonGroupID, PolygonID_PlusX: FPolygonID, PolygonID_MinusX: FPolygonID, PolygonID_PlusY: FPolygonID, PolygonID_MinusY: FPolygonID, PolygonID_PlusZ: FPolygonID, PolygonID_MinusZ: FPolygonID): void;
    };
    readonly __staticRegistry: 
        UStaticMeshDescription['__static_UStaticMeshDescription'] &
        UMeshDescriptionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMeshDescriptionBase['__propertyRegistry'];
}

