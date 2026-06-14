declare const enum EDynamicMeshAttributeChangeFlags {
    Unknown = 0,
    MeshTopology = 1,
    VertexPositions = 2,
    NormalsTangents = 4,
    VertexColors = 8,
    UVs = 16,
    TriangleGroups = 32
}

declare const enum EDynamicMeshChangeType {
    GeneralEdit = 0,
    MeshChange = 1,
    MeshReplacementChange = 2,
    MeshVertexChange = 3,
    DeformationEdit = 4,
    AttributeEdit = 5
}

declare const enum EDynamicMeshComponentColorOverrideMode {
    None = 0,
    VertexColors = 1,
    Polygroups = 2,
    Constant = 3
}

declare const enum EDynamicMeshComponentDistanceFieldMode {
    NoDistanceField = 0,
    AsyncCPUDistanceField = 1
}

declare const enum EDynamicMeshComponentRenderUpdateMode {
    NoUpdate = 0,
    FullUpdate = 1,
    FastUpdate = 2
}

declare const enum EDynamicMeshComponentTangentsMode {
    NoTangents = 0,
    AutoCalculated = 1,
    ExternallyProvided = 2,
    Default = 255
}

declare const enum EDynamicMeshDrawPath {
    DynamicDraw = 0,
    StaticDraw = 1
}

declare const enum EDynamicMeshVertexColorTransformMode {
    NoTransform = 0,
    LinearToSRGB = 1,
    SRGBToLinear = 2
}

