declare interface FEdgeID extends FElementID {

}

declare interface FElementID {
    IDValue: number;
}

declare interface FPolygonGroupID extends FElementID {

}

declare interface FPolygonID extends FElementID {

}

declare interface FTriangleID extends FElementID {

}

declare interface FUVID extends FElementID {

}

declare interface FVertexID extends FElementID {

}

declare interface FVertexInstanceID extends FElementID {

}

declare interface UMeshDescriptionBase extends UObject {
    readonly __static_UMeshDescriptionBase: {
        SetVertexPosition(VertexID: FVertexID, position: FVector): void;
        SetPolygonVertexInstances(PolygonID: FPolygonID, VertexInstanceIDs: FVertexInstanceID[]): void;
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
        GetVertexVertexInstances(VertexID: FVertexID, OutVertexInstanceIDs: FVertexInstanceID[]): void;
        GetVertexPosition(VertexID: FVertexID): FVector;
        GetVertexPairEdge(VertexID0: FVertexID, VertexID1: FVertexID): FEdgeID;
        GetVertexInstanceVertex(VertexInstanceID: FVertexInstanceID): FVertexID;
        GetVertexInstancePairEdge(VertexInstanceID0: FVertexInstanceID, VertexInstanceID1: FVertexInstanceID): FEdgeID;
        GetVertexInstanceForTriangleVertex(TriangleID: FTriangleID, VertexID: FVertexID): FVertexInstanceID;
        GetVertexInstanceForPolygonVertex(PolygonID: FPolygonID, VertexID: FVertexID): FVertexInstanceID;
        GetVertexInstanceCount(): number;
        GetVertexInstanceConnectedTriangles(VertexInstanceID: FVertexInstanceID, OutConnectedTriangleIDs: FTriangleID[]): void;
        GetVertexInstanceConnectedPolygons(VertexInstanceID: FVertexInstanceID, OutConnectedPolygonIDs: FPolygonID[]): void;
        GetVertexCount(): number;
        GetVertexConnectedTriangles(VertexID: FVertexID, OutConnectedTriangleIDs: FTriangleID[]): void;
        GetVertexConnectedPolygons(VertexID: FVertexID, OutConnectedPolygonIDs: FPolygonID[]): void;
        GetVertexConnectedEdges(VertexID: FVertexID, OutEdgeIDs: FEdgeID[]): void;
        GetVertexAdjacentVertices(VertexID: FVertexID, OutAdjacentVertexIDs: FVertexID[]): void;
        GetTriangleVertices(TriangleID: FTriangleID, OutVertexIDs: FVertexID[]): void;
        GetTriangleVertexInstances(TriangleID: FTriangleID, OutVertexInstanceIDs: FVertexInstanceID[]): void;
        GetTriangleVertexInstance(TriangleID: FTriangleID, Index: number): FVertexInstanceID;
        GetTrianglePolygonGroup(TriangleID: FTriangleID): FPolygonGroupID;
        GetTrianglePolygon(TriangleID: FTriangleID): FPolygonID;
        GetTriangleEdges(TriangleID: FTriangleID, OutEdgeIDs: FEdgeID[]): void;
        GetTriangleCount(): number;
        GetTriangleAdjacentTriangles(TriangleID: FTriangleID, OutTriangleIDs: FTriangleID[]): void;
        GetPolygonVertices(PolygonID: FPolygonID, OutVertexIDs: FVertexID[]): void;
        GetPolygonVertexInstances(PolygonID: FPolygonID, OutVertexInstanceIDs: FVertexInstanceID[]): void;
        GetPolygonTriangles(PolygonID: FPolygonID, OutTriangleIDs: FTriangleID[]): void;
        GetPolygonPolygonGroup(PolygonID: FPolygonID): FPolygonGroupID;
        GetPolygonPerimeterEdges(PolygonID: FPolygonID, OutEdgeIDs: FEdgeID[]): void;
        GetPolygonInternalEdges(PolygonID: FPolygonID, OutEdgeIDs: FEdgeID[]): void;
        GetPolygonGroupPolygons(PolygonGroupID: FPolygonGroupID, OutPolygonIDs: FPolygonID[]): void;
        GetPolygonGroupCount(): number;
        GetPolygonCount(): number;
        GetPolygonAdjacentPolygons(PolygonID: FPolygonID, OutPolygonIDs: FPolygonID[]): void;
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
        GetEdgeVertices(EdgeID: FEdgeID, OutVertexIDs: FVertexID[]): void;
        GetEdgeVertex(EdgeID: FEdgeID, VertexNumber: number): FVertexID;
        GetEdgeCount(): number;
        GetEdgeConnectedTriangles(EdgeID: FEdgeID, OutConnectedTriangleIDs: FTriangleID[]): void;
        GetEdgeConnectedPolygons(EdgeID: FEdgeID, OutConnectedPolygonIDs: FPolygonID[]): void;
        Empty(): void;
        DeleteVertexInstance(VertexInstanceID: FVertexInstanceID, OrphanedVertices: FVertexID[]): void;
        DeleteVertex(VertexID: FVertexID): void;
        DeleteTriangle(TriangleID: FTriangleID, OrphanedEdges: FEdgeID[], OrphanedVertexInstances: FVertexInstanceID[], OrphanedPolygonGroupsPtr: FPolygonGroupID[]): void;
        DeletePolygonGroup(PolygonGroupID: FPolygonGroupID): void;
        DeletePolygon(PolygonID: FPolygonID, OrphanedEdges: FEdgeID[], OrphanedVertexInstances: FVertexInstanceID[], OrphanedPolygonGroups: FPolygonGroupID[]): void;
        DeleteEdge(EdgeID: FEdgeID, OrphanedVertices: FVertexID[]): void;
        CreateVertexWithID(VertexID: FVertexID): void;
        CreateVertexInstanceWithID(VertexInstanceID: FVertexInstanceID, VertexID: FVertexID): void;
        CreateVertexInstance(VertexID: FVertexID): FVertexInstanceID;
        CreateVertex(): FVertexID;
        CreateTriangleWithID(TriangleID: FTriangleID, PolygonGroupID: FPolygonGroupID, VertexInstanceIDs: FVertexInstanceID[], NewEdgeIDs: FEdgeID[]): void;
        CreateTriangle(PolygonGroupID: FPolygonGroupID, VertexInstanceIDs: FVertexInstanceID[], NewEdgeIDs: FEdgeID[]): FTriangleID;
        CreatePolygonWithID(PolygonID: FPolygonID, PolygonGroupID: FPolygonGroupID, VertexInstanceIDs: FVertexInstanceID[], NewEdgeIDs: FEdgeID[]): void;
        CreatePolygonGroupWithID(PolygonGroupID: FPolygonGroupID): void;
        CreatePolygonGroup(): FPolygonGroupID;
        CreatePolygon(PolygonGroupID: FPolygonGroupID, VertexInstanceIDs: FVertexInstanceID[], NewEdgeIDs: FEdgeID[]): FPolygonID;
        CreateEdgeWithID(EdgeID: FEdgeID, VertexID0: FVertexID, VertexID1: FVertexID): void;
        CreateEdge(VertexID0: FVertexID, VertexID1: FVertexID): FEdgeID;
        ComputePolygonTriangulation(PolygonID: FPolygonID): void;
    };
    readonly __staticRegistry: 
        UMeshDescriptionBase['__static_UMeshDescriptionBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMeshDescriptionBaseBulkData extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

