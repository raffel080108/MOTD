declare const enum EComputeKernelFlags {
    IsDefaultKernel = 1,
    IsolatedMemoryWrites = 2
}

declare const enum EShaderFundamentalDimensionType {
    Scalar = 0,
    Vector = 1,
    Matrix = 2
}

declare const enum EShaderFundamentalType {
    Bool = 0,
    Int = 1,
    Uint = 2,
    Float = 3,
    Struct = 4,
    None = 255
}

declare const enum EShaderParamBindingType {
    None = 0,
    ConstantParameter = 1,
    ReadOnlyResource = 2,
    ReadWriteResource = 3
}

declare const enum EShaderParamModifier {
    None = 0,
    In = 1,
    Out = 2,
    InOut = 3
}

declare const enum EShaderResourceType {
    None = 0,
    Texture1D = 1,
    Texture2D = 2,
    Texture3D = 3,
    TextureCube = 4,
    Buffer = 5,
    StructuredBuffer = 6,
    ByteAddressBuffer = 7
}

