declare interface FEdgeID extends FElementID {

}
declare const FEdgeID: FEdgeID;

declare interface FElementID {
    IDValue: number;
}
declare const FElementID: FElementID;

declare interface FPolygonGroupID extends FElementID {

}
declare const FPolygonGroupID: FPolygonGroupID;

declare interface FPolygonID extends FElementID {

}
declare const FPolygonID: FPolygonID;

declare interface FTriangleID extends FElementID {

}
declare const FTriangleID: FTriangleID;

declare interface FUVID extends FElementID {

}
declare const FUVID: FUVID;

declare interface FVertexID extends FElementID {

}
declare const FVertexID: FVertexID;

declare interface FVertexInstanceID extends FElementID {

}
declare const FVertexInstanceID: FVertexInstanceID;

declare interface UMeshDescriptionBase extends UObject {
    SetVertexPosition(VertexID: FVertexID, position: FVector): void;
    SetPolygonVertexInstances(PolygonID: FPolygonID, VertexInstanceIDs: TArray<FVertexInstanceID>): void;
    SetPolygonPolygonGroup(PolygonID: FPolygonID, PolygonGroupID: FPolygonGroupID): void;
    ReversePolygonFacing(PolygonID: FPolygonID): void;
    ReserveNewVertices(NumberOfNewVertices: number): void;
    ReserveNewVertexInstances(NumberOfNewVertexInstances: number): void;
    ReserveNewTriangles(NumberOfNewTriangles: number): void;
    ReserveNewPolygons(NumberOfNewPolygons: number): void;
    ReserveNewPolygonGroups(NumberOfNewPolygonGroups: number): void;
    ReserveNewEdges(NumberOfNewEdges: number): void;
    IsVertexValid(VertexID: FVertexID): boolean;
    IsVertexOrphaned(VertexID: FVertexID): boolean;
    IsVertexInstanceValid(VertexInstanceID: FVertexInstanceID): boolean;
    IsTriangleValid(TriangleID: FTriangleID): boolean;
    IsTrianglePartOfNgon(TriangleID: FTriangleID): boolean;
    IsPolygonValid(PolygonID: FPolygonID): boolean;
    IsPolygonGroupValid(PolygonGroupID: FPolygonGroupID): boolean;
    IsEmpty(): boolean;
    IsEdgeValid(EdgeID: FEdgeID): boolean;
    IsEdgeInternalToPolygon(EdgeID: FEdgeID, PolygonID: FPolygonID): boolean;
    IsEdgeInternal(EdgeID: FEdgeID): boolean;
    GetVertexVertexInstances(VertexID: FVertexID, OutVertexInstanceIDs: TArray<FVertexInstanceID>): void;
    GetVertexPosition(VertexID: FVertexID): FVector;
    GetVertexPairEdge(VertexID0: FVertexID, VertexID1: FVertexID): FEdgeID;
    GetVertexInstanceVertex(VertexInstanceID: FVertexInstanceID): FVertexID;
    GetVertexInstancePairEdge(VertexInstanceID0: FVertexInstanceID, VertexInstanceID1: FVertexInstanceID): FEdgeID;
    GetVertexInstanceForTriangleVertex(TriangleID: FTriangleID, VertexID: FVertexID): FVertexInstanceID;
    GetVertexInstanceForPolygonVertex(PolygonID: FPolygonID, VertexID: FVertexID): FVertexInstanceID;
    GetVertexInstanceCount(): number;
    GetVertexInstanceConnectedTriangles(VertexInstanceID: FVertexInstanceID, OutConnectedTriangleIDs: TArray<FTriangleID>): void;
    GetVertexInstanceConnectedPolygons(VertexInstanceID: FVertexInstanceID, OutConnectedPolygonIDs: TArray<FPolygonID>): void;
    GetVertexCount(): number;
    GetVertexConnectedTriangles(VertexID: FVertexID, OutConnectedTriangleIDs: TArray<FTriangleID>): void;
    GetVertexConnectedPolygons(VertexID: FVertexID, OutConnectedPolygonIDs: TArray<FPolygonID>): void;
    GetVertexConnectedEdges(VertexID: FVertexID, OutEdgeIDs: TArray<FEdgeID>): void;
    GetVertexAdjacentVertices(VertexID: FVertexID, OutAdjacentVertexIDs: TArray<FVertexID>): void;
    GetTriangleVertices(TriangleID: FTriangleID, OutVertexIDs: TArray<FVertexID>): void;
    GetTriangleVertexInstances(TriangleID: FTriangleID, OutVertexInstanceIDs: TArray<FVertexInstanceID>): void;
    GetTriangleVertexInstance(TriangleID: FTriangleID, Index: number): FVertexInstanceID;
    GetTrianglePolygonGroup(TriangleID: FTriangleID): FPolygonGroupID;
    GetTrianglePolygon(TriangleID: FTriangleID): FPolygonID;
    GetTriangleEdges(TriangleID: FTriangleID, OutEdgeIDs: TArray<FEdgeID>): void;
    GetTriangleCount(): number;
    GetTriangleAdjacentTriangles(TriangleID: FTriangleID, OutTriangleIDs: TArray<FTriangleID>): void;
    GetPolygonVertices(PolygonID: FPolygonID, OutVertexIDs: TArray<FVertexID>): void;
    GetPolygonVertexInstances(PolygonID: FPolygonID, OutVertexInstanceIDs: TArray<FVertexInstanceID>): void;
    GetPolygonTriangles(PolygonID: FPolygonID, OutTriangleIDs: TArray<FTriangleID>): void;
    GetPolygonPolygonGroup(PolygonID: FPolygonID): FPolygonGroupID;
    GetPolygonPerimeterEdges(PolygonID: FPolygonID, OutEdgeIDs: TArray<FEdgeID>): void;
    GetPolygonInternalEdges(PolygonID: FPolygonID, OutEdgeIDs: TArray<FEdgeID>): void;
    GetPolygonGroupPolygons(PolygonGroupID: FPolygonGroupID, OutPolygonIDs: TArray<FPolygonID>): void;
    GetPolygonGroupCount(): number;
    GetPolygonCount(): number;
    GetPolygonAdjacentPolygons(PolygonID: FPolygonID, OutPolygonIDs: TArray<FPolygonID>): void;
    GetNumVertexVertexInstances(VertexID: FVertexID): number;
    GetNumVertexInstanceConnectedTriangles(VertexInstanceID: FVertexInstanceID): number;
    GetNumVertexInstanceConnectedPolygons(VertexInstanceID: FVertexInstanceID): number;
    GetNumVertexConnectedTriangles(VertexID: FVertexID): number;
    GetNumVertexConnectedPolygons(VertexID: FVertexID): number;
    GetNumVertexConnectedEdges(VertexID: FVertexID): number;
    GetNumPolygonVertices(PolygonID: FPolygonID): number;
    GetNumPolygonTriangles(PolygonID: FPolygonID): number;
    GetNumPolygonInternalEdges(PolygonID: FPolygonID): number;
    GetNumPolygonGroupPolygons(PolygonGroupID: FPolygonGroupID): number;
    GetNumEdgeConnectedTriangles(EdgeID: FEdgeID): number;
    GetNumEdgeConnectedPolygons(EdgeID: FEdgeID): number;
    GetEdgeVertices(EdgeID: FEdgeID, OutVertexIDs: TArray<FVertexID>): void;
    GetEdgeVertex(EdgeID: FEdgeID, VertexNumber: number): FVertexID;
    GetEdgeCount(): number;
    GetEdgeConnectedTriangles(EdgeID: FEdgeID, OutConnectedTriangleIDs: TArray<FTriangleID>): void;
    GetEdgeConnectedPolygons(EdgeID: FEdgeID, OutConnectedPolygonIDs: TArray<FPolygonID>): void;
    Empty(): void;
    DeleteVertexInstance(VertexInstanceID: FVertexInstanceID, OrphanedVertices: TArray<FVertexID>): void;
    DeleteVertex(VertexID: FVertexID): void;
    DeleteTriangle(TriangleID: FTriangleID, OrphanedEdges: TArray<FEdgeID>, OrphanedVertexInstances: TArray<FVertexInstanceID>, OrphanedPolygonGroupsPtr: TArray<FPolygonGroupID>): void;
    DeletePolygonGroup(PolygonGroupID: FPolygonGroupID): void;
    DeletePolygon(PolygonID: FPolygonID, OrphanedEdges: TArray<FEdgeID>, OrphanedVertexInstances: TArray<FVertexInstanceID>, OrphanedPolygonGroups: TArray<FPolygonGroupID>): void;
    DeleteEdge(EdgeID: FEdgeID, OrphanedVertices: TArray<FVertexID>): void;
    CreateVertexWithID(VertexID: FVertexID): void;
    CreateVertexInstanceWithID(VertexInstanceID: FVertexInstanceID, VertexID: FVertexID): void;
    CreateVertexInstance(VertexID: FVertexID): FVertexInstanceID;
    CreateVertex(): FVertexID;
    CreateTriangleWithID(TriangleID: FTriangleID, PolygonGroupID: FPolygonGroupID, VertexInstanceIDs: TArray<FVertexInstanceID>, NewEdgeIDs: TArray<FEdgeID>): void;
    CreateTriangle(PolygonGroupID: FPolygonGroupID, VertexInstanceIDs: TArray<FVertexInstanceID>, NewEdgeIDs: TArray<FEdgeID>): FTriangleID;
    CreatePolygonWithID(PolygonID: FPolygonID, PolygonGroupID: FPolygonGroupID, VertexInstanceIDs: TArray<FVertexInstanceID>, NewEdgeIDs: TArray<FEdgeID>): void;
    CreatePolygonGroupWithID(PolygonGroupID: FPolygonGroupID): void;
    CreatePolygonGroup(): FPolygonGroupID;
    CreatePolygon(PolygonGroupID: FPolygonGroupID, VertexInstanceIDs: TArray<FVertexInstanceID>, NewEdgeIDs: TArray<FEdgeID>): FPolygonID;
    CreateEdgeWithID(EdgeID: FEdgeID, VertexID0: FVertexID, VertexID1: FVertexID): void;
    CreateEdge(VertexID0: FVertexID, VertexID1: FVertexID): FEdgeID;
    ComputePolygonTriangulation(PolygonID: FPolygonID): void;
}
declare const UMeshDescriptionBase: UMeshDescriptionBase;

declare interface UMeshDescriptionBaseBulkData extends UObject {

}
declare const UMeshDescriptionBaseBulkData: UMeshDescriptionBaseBulkData;

