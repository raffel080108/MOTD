declare interface FUVMapSettings {
    Size: FVector;
    UVTile: FVector2D;
    position: FVector;
    Rotation: FRotator;
    Scale: FVector;
}
declare const FUVMapSettings: FUVMapSettings;

declare interface UStaticMeshDescription extends UMeshDescriptionBase {
    SetVertexInstanceUV(VertexInstanceID: FVertexInstanceID, UV: FVector2D, UVIndex: number): void;
    SetPolygonGroupMaterialSlotName(PolygonGroupID: FPolygonGroupID, slotName: FName): void;
    GetVertexInstanceUV(VertexInstanceID: FVertexInstanceID, UVIndex: number): FVector2D;
    CreateCube(Center: FVector, HalfExtents: FVector, PolygonGroup: FPolygonGroupID, PolygonID_PlusX: FPolygonID, PolygonID_MinusX: FPolygonID, PolygonID_PlusY: FPolygonID, PolygonID_MinusY: FPolygonID, PolygonID_PlusZ: FPolygonID, PolygonID_MinusZ: FPolygonID): void;
}
declare const UStaticMeshDescription: UStaticMeshDescription;

