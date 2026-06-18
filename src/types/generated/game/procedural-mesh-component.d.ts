declare interface FProcMeshSection {
    ProcVertexBuffer: FProcMeshVertex[];
    ProcIndexBuffer: number[];
    SectionLocalBox: FBox;
    bEnableCollision: boolean;
    bSectionVisible: boolean;
}

declare interface FProcMeshTangent {
    TangentX: FVector;
    bFlipTangentY: boolean;
}

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

declare interface UKismetProceduralMeshLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UKismetProceduralMeshLibrary: {
        SliceProceduralMesh(InProcMesh: UProceduralMeshComponent, PlanePosition: FVector, PlaneNormal: FVector, bCreateOtherHalf: boolean, OutOtherHalfProcMesh: UProceduralMeshComponent, CapOption: EProcMeshSliceCapOption, CapMaterial: UMaterialInterface): void;
        GetSectionFromStaticMesh(InMesh: UStaticMesh, LODIndex: number, SectionIndex: number, Vertices: FVector[], Triangles: number[], Normals: FVector[], UVs: FVector2D[], Tangents: FProcMeshTangent[]): void;
        GetSectionFromProceduralMesh(InProcMesh: UProceduralMeshComponent, SectionIndex: number, Vertices: FVector[], Triangles: number[], Normals: FVector[], UVs: FVector2D[], Tangents: FProcMeshTangent[]): void;
        GenerateBoxMesh(BoxRadius: FVector, Vertices: FVector[], Triangles: number[], Normals: FVector[], UVs: FVector2D[], Tangents: FProcMeshTangent[]): void;
        CreateGridMeshWelded(NumX: number, NumY: number, Triangles: number[], Vertices: FVector[], UVs: FVector2D[], GridSpacing: number): void;
        CreateGridMeshTriangles(NumX: number, NumY: number, bWinding: boolean, Triangles: number[]): void;
        CreateGridMeshSplit(NumX: number, NumY: number, Triangles: number[], Vertices: FVector[], UVs: FVector2D[], UV1s: FVector2D[], GridSpacing: number): void;
        CopyProceduralMeshFromStaticMeshComponent(StaticMeshComponent: UStaticMeshComponent, LODIndex: number, ProcMeshComponent: UProceduralMeshComponent, bCreateCollision: boolean): void;
        ConvertQuadToTriangles(Triangles: number[], Vert0: number, Vert1: number, Vert2: number, Vert3: number): void;
        CalculateTangentsForMesh(Vertices: FVector[], Triangles: number[], UVs: FVector2D[], Normals: FVector[], Tangents: FProcMeshTangent[]): void;
    };
    readonly __staticRegistry: 
        UKismetProceduralMeshLibrary['__static_UKismetProceduralMeshLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UProceduralMeshComponent extends UMeshComponent {
    readonly __static_UProceduralMeshComponent: {
        UpdateMeshSection_LinearColor(SectionIndex: number, Vertices: FVector[], Normals: FVector[], UV0: FVector2D[], UV1: FVector2D[], UV2: FVector2D[], UV3: FVector2D[], VertexColors: FLinearColor[], Tangents: FProcMeshTangent[], bSRGBConversion: boolean): void;
        UpdateMeshSection(SectionIndex: number, Vertices: FVector[], Normals: FVector[], UV0: FVector2D[], VertexColors: FColor[], Tangents: FProcMeshTangent[]): void;
        SetMeshSectionVisible(SectionIndex: number, bNewVisibility: boolean): void;
        IsMeshSectionVisible(SectionIndex: number): boolean;
        GetNumSections(): number;
        CreateMeshSection_LinearColor(SectionIndex: number, Vertices: FVector[], Triangles: number[], Normals: FVector[], UV0: FVector2D[], UV1: FVector2D[], UV2: FVector2D[], UV3: FVector2D[], VertexColors: FLinearColor[], Tangents: FProcMeshTangent[], bCreateCollision: boolean, bSRGBConversion: boolean): void;
        CreateMeshSection(SectionIndex: number, Vertices: FVector[], Triangles: number[], Normals: FVector[], UV0: FVector2D[], VertexColors: FColor[], Tangents: FProcMeshTangent[], bCreateCollision: boolean): void;
        ClearMeshSection(SectionIndex: number): void;
        ClearCollisionConvexMeshes(): void;
        ClearAllMeshSections(): void;
        AddCollisionConvexMesh(ConvexVerts: FVector[]): void;
    };
    readonly __properties_UProceduralMeshComponent: {
        bUseComplexAsSimpleCollision: boolean;
        bUseAsyncCooking: boolean;
        ProcMeshBodySetup: UBodySetup;
        ProcMeshSections: FProcMeshSection[];
        CollisionConvexElems: FKConvexElem[];
        LocalBounds: FBoxSphereBounds;
        AsyncBodySetupQueue: UBodySetup[];
    };
    readonly __staticRegistry: 
        UProceduralMeshComponent['__static_UProceduralMeshComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UProceduralMeshComponent['__properties_UProceduralMeshComponent'] &
        UMeshComponent['__propertyRegistry'];
}

