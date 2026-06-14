declare interface FProcMeshSection {
    ProcVertexBuffer: TArray<FProcMeshVertex>;
    ProcIndexBuffer: TArray<uint32>;
    SectionLocalBox: FBox;
    bEnableCollision: boolean;
    bSectionVisible: boolean;
}
declare const FProcMeshSection: FProcMeshSection;

declare interface FProcMeshTangent {
    TangentX: FVector;
    bFlipTangentY: boolean;
}
declare const FProcMeshTangent: FProcMeshTangent;

declare interface FProcMeshVertex {
    position: FVector;
    Normal: FVector;
    Tangent: FProcMeshTangent;
    Color: FColor;
    UV0: FVector2D;
    UV1: FVector2D;
    UV2: FVector2D;
    UV3: FVector2D;
}
declare const FProcMeshVertex: FProcMeshVertex;

declare interface UKismetProceduralMeshLibrary extends UBlueprintFunctionLibrary {
    SliceProceduralMesh(InProcMesh: UProceduralMeshComponent, PlanePosition: FVector, PlaneNormal: FVector, bCreateOtherHalf: boolean, OutOtherHalfProcMesh: UProceduralMeshComponent, CapOption: EProcMeshSliceCapOption, CapMaterial: UMaterialInterface): void;
    GetSectionFromStaticMesh(InMesh: UStaticMesh, LODIndex: number, SectionIndex: number, Vertices: TArray<FVector>, Triangles: TArray<number>, Normals: TArray<FVector>, UVs: TArray<FVector2D>, Tangents: TArray<FProcMeshTangent>): void;
    GetSectionFromProceduralMesh(InProcMesh: UProceduralMeshComponent, SectionIndex: number, Vertices: TArray<FVector>, Triangles: TArray<number>, Normals: TArray<FVector>, UVs: TArray<FVector2D>, Tangents: TArray<FProcMeshTangent>): void;
    GenerateBoxMesh(BoxRadius: FVector, Vertices: TArray<FVector>, Triangles: TArray<number>, Normals: TArray<FVector>, UVs: TArray<FVector2D>, Tangents: TArray<FProcMeshTangent>): void;
    CreateGridMeshWelded(NumX: number, NumY: number, Triangles: TArray<number>, Vertices: TArray<FVector>, UVs: TArray<FVector2D>, GridSpacing: number): void;
    CreateGridMeshTriangles(NumX: number, NumY: number, bWinding: boolean, Triangles: TArray<number>): void;
    CreateGridMeshSplit(NumX: number, NumY: number, Triangles: TArray<number>, Vertices: TArray<FVector>, UVs: TArray<FVector2D>, UV1s: TArray<FVector2D>, GridSpacing: number): void;
    CopyProceduralMeshFromStaticMeshComponent(StaticMeshComponent: UStaticMeshComponent, LODIndex: number, ProcMeshComponent: UProceduralMeshComponent, bCreateCollision: boolean): void;
    ConvertQuadToTriangles(Triangles: TArray<number>, Vert0: number, Vert1: number, Vert2: number, Vert3: number): void;
    CalculateTangentsForMesh(Vertices: TArray<FVector>, Triangles: TArray<number>, UVs: TArray<FVector2D>, Normals: TArray<FVector>, Tangents: TArray<FProcMeshTangent>): void;
}
declare const UKismetProceduralMeshLibrary: UKismetProceduralMeshLibrary;

declare interface UProceduralMeshComponent extends UMeshComponent {
    bUseComplexAsSimpleCollision: boolean;
    bUseAsyncCooking: boolean;
    ProcMeshBodySetup: UBodySetup;
    ProcMeshSections: TArray<FProcMeshSection>;
    CollisionConvexElems: TArray<FKConvexElem>;
    LocalBounds: FBoxSphereBounds;
    AsyncBodySetupQueue: TArray<UBodySetup>;
    UpdateMeshSection_LinearColor(SectionIndex: number, Vertices: TArray<FVector>, Normals: TArray<FVector>, UV0: TArray<FVector2D>, UV1: TArray<FVector2D>, UV2: TArray<FVector2D>, UV3: TArray<FVector2D>, VertexColors: TArray<FLinearColor>, Tangents: TArray<FProcMeshTangent>, bSRGBConversion: boolean): void;
    UpdateMeshSection(SectionIndex: number, Vertices: TArray<FVector>, Normals: TArray<FVector>, UV0: TArray<FVector2D>, VertexColors: TArray<FColor>, Tangents: TArray<FProcMeshTangent>): void;
    SetMeshSectionVisible(SectionIndex: number, bNewVisibility: boolean): void;
    IsMeshSectionVisible(SectionIndex: number): boolean;
    GetNumSections(): number;
    CreateMeshSection_LinearColor(SectionIndex: number, Vertices: TArray<FVector>, Triangles: TArray<number>, Normals: TArray<FVector>, UV0: TArray<FVector2D>, UV1: TArray<FVector2D>, UV2: TArray<FVector2D>, UV3: TArray<FVector2D>, VertexColors: TArray<FLinearColor>, Tangents: TArray<FProcMeshTangent>, bCreateCollision: boolean, bSRGBConversion: boolean): void;
    CreateMeshSection(SectionIndex: number, Vertices: TArray<FVector>, Triangles: TArray<number>, Normals: TArray<FVector>, UV0: TArray<FVector2D>, VertexColors: TArray<FColor>, Tangents: TArray<FProcMeshTangent>, bCreateCollision: boolean): void;
    ClearMeshSection(SectionIndex: number): void;
    ClearCollisionConvexMeshes(): void;
    ClearAllMeshSections(): void;
    AddCollisionConvexMesh(ConvexVerts: TArray<FVector>): void;
}
declare const UProceduralMeshComponent: UProceduralMeshComponent;

