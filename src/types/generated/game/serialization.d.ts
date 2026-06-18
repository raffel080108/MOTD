declare interface FOrientedBoxFloat {
    Center: FVector3f;
    AxisX: FVector3f;
    AxisY: FVector3f;
    AxisZ: FVector3f;
    ExtentX: number;
    ExtentY: number;
    ExtentZ: number;
}

declare interface FStructSerializerArrayTestStruct {
    Int32Array: number[];
    ByteArray: number[];
    StaticSingleElement: number;
    StaticInt32Array: number;
    StaticFloatArray: number;
    VectorArray: FVector[];
    StructArray: FStructSerializerBuiltinTestStruct[];
}

declare interface FStructSerializerBooleanTestStruct {
    BoolFalse: boolean;
    BoolTrue: boolean;
    Bitfield0: boolean;
    Bitfield1: boolean;
    Bitfield2Set: boolean;
    Bitfield3: boolean;
    Bitfield4Set: boolean;
    Bitfield5Set: boolean;
    Bitfield6: boolean;
    Bitfield7Set: boolean;
}

declare interface FStructSerializerBuiltinTestStruct {
    Guid: FGuid;
    Name: string;
    String: string;
    Text: string;
    DateTime: FDateTime;
    Timespan: FTimespan;
    Vector: FVector;
    Vector4: FVector4;
    Rotator: FRotator;
    Quat: FQuat;
    Color: FColor;
}

declare interface FStructSerializerByteArray {
    Dummy1: number;
    ByteArray: number[];
    Dummy2: number;
    Int8Array: number[];
    Dummy3: number;
}

declare interface FStructSerializerLWCTypesTest {
    Vector: FVector;
    Vector2D: FVector2D;
    Vector4: FVector4;
    Matrix: FMatrix;
    Plane: FPlane;
    Quat: FQuat;
    Rotator: FRotator;
    Transform: FTransform;
    Box: FBox;
    Box2D: FBox2D;
    BoxSphereBounds: FBoxSphereBounds;
    OrientedBox: FOrientedBox;
    float: number;
    Double: number;
    VectorArray: FVector[];
    StrToVec: TMap<string, FVector>;
    VectorSet: FVector[];
}

declare interface FStructSerializerMapTestStruct {
    IntToStr: TMap<number, string>;
    StrToStr: TMap<string, string>;
    StrToVec: TMap<string, FVector>;
    StrToStruct: TMap<string, FStructSerializerBuiltinTestStruct>;
}

declare interface FStructSerializerNonLWCTypesTest {
    Vector: FVector3f;
    Vector2D: FVector2f;
    Vector4: FVector4f;
    Matrix: FMatrix44f;
    Plane: FPlane4f;
    Quat: FQuat4f;
    Rotator: FRotator3f;
    Transform: FTransform3f;
    Box: FBox3f;
    Box2D: FBox2f;
    BoxSphereBounds: FBoxSphereBounds3f;
    OrientedBox: FOrientedBoxFloat;
    float: number;
    Double: number;
    VectorArray: FVector3f[];
    StrToVec: TMap<string, FVector3f>;
    VectorSet: FVector3f[];
}

declare interface FStructSerializerNumericTestStruct {
    int8: number;
    int16: number;
    int32: number;
    int64: number;
    uint8: number;
    uint16: number;
    uint32: number;
    uint64: number;
    float: number;
    Double: number;
}

declare interface FStructSerializerObjectTestStruct {
    RawClass: UClass;
    WrappedClass: UClass;
    SubClass: TSubclassOf<UObjectTest>;
    SoftClass: TSoftClassPtr<UObjectTest>;
    RawObject: UObject;
    WrappedObject: UObject;
    WeakObject: TWeakObjectPtr<UObjectTest>;
    SoftObject: TSoftObjectPtr<UObjectTest>;
    ClassPath: FSoftClassPath;
    ObjectPath: FSoftObjectPath;
}

declare interface FStructSerializerOptionalTestStruct {
    StrOptional: TOptional<string>;
    StrOptionalUnset: TOptional<string>;
    IntOptional: TOptional<number>;
    IntOptionalUnset: TOptional<number>;
    NameOptional: TOptional<string>;
    NameOptionalUnset: TOptional<string>;
    StructOptional: TOptional<FStructSerializerBuiltinTestStruct>;
    StructOptionalUnset: TOptional<FStructSerializerBuiltinTestStruct>;
}

declare interface FStructSerializerSetTestStruct {
    StrSet: string[];
    IntSet: number[];
    NameSet: string[];
    StructSet: FStructSerializerBuiltinTestStruct[];
}

declare interface FStructSerializerTestStruct {
    Numerics: FStructSerializerNumericTestStruct;
    Booleans: FStructSerializerBooleanTestStruct;
    Objects: FStructSerializerObjectTestStruct;
    Builtins: FStructSerializerBuiltinTestStruct;
    Arrays: FStructSerializerArrayTestStruct;
    Maps: FStructSerializerMapTestStruct;
    Sets: FStructSerializerSetTestStruct;
    Optionals: FStructSerializerOptionalTestStruct;
    LWCTypes: FStructSerializerLWCTypesTest;
}

declare interface UObjectTest extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

