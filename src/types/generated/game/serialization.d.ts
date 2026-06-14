declare interface FOrientedBoxFloat {
    Center: FVector3f;
    AxisX: FVector3f;
    AxisY: FVector3f;
    AxisZ: FVector3f;
    ExtentX: number;
    ExtentY: number;
    ExtentZ: number;
}
declare const FOrientedBoxFloat: FOrientedBoxFloat;

declare interface FStructSerializerArrayTestStruct {
    Int32Array: TArray<number>;
    ByteArray: TArray<uint8>;
    StaticSingleElement: number;
    StaticInt32Array: number;
    StaticFloatArray: number;
    VectorArray: TArray<FVector>;
    StructArray: TArray<FStructSerializerBuiltinTestStruct>;
}
declare const FStructSerializerArrayTestStruct: FStructSerializerArrayTestStruct;

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
declare const FStructSerializerBooleanTestStruct: FStructSerializerBooleanTestStruct;

declare interface FStructSerializerBuiltinTestStruct {
    Guid: FGuid;
    Name: FName;
    String: FString;
    Text: FText;
    DateTime: FDateTime;
    Timespan: FTimespan;
    Vector: FVector;
    Vector4: FVector4;
    Rotator: FRotator;
    Quat: FQuat;
    Color: FColor;
}
declare const FStructSerializerBuiltinTestStruct: FStructSerializerBuiltinTestStruct;

declare interface FStructSerializerByteArray {
    Dummy1: number;
    ByteArray: TArray<uint8>;
    Dummy2: number;
    Int8Array: TArray<int8>;
    Dummy3: number;
}
declare const FStructSerializerByteArray: FStructSerializerByteArray;

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
    VectorArray: TArray<FVector>;
    StrToVec: Record<FString, FVector>;
    VectorSet: TSet<FVector>;
}
declare const FStructSerializerLWCTypesTest: FStructSerializerLWCTypesTest;

declare interface FStructSerializerMapTestStruct {
    IntToStr: Record<number, FString>;
    StrToStr: Record<FString, FString>;
    StrToVec: Record<FString, FVector>;
    StrToStruct: Record<FString, FStructSerializerBuiltinTestStruct>;
}
declare const FStructSerializerMapTestStruct: FStructSerializerMapTestStruct;

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
    VectorArray: TArray<FVector3f>;
    StrToVec: Record<FString, FVector3f>;
    VectorSet: TSet<FVector3f>;
}
declare const FStructSerializerNonLWCTypesTest: FStructSerializerNonLWCTypesTest;

declare interface FStructSerializerNumericTestStruct {
    int8: int8;
    int16: int16;
    int32: number;
    int64: int64;
    uint8: uint8;
    uint16: uint16;
    uint32: uint32;
    uint64: uint64;
    float: number;
    Double: number;
}
declare const FStructSerializerNumericTestStruct: FStructSerializerNumericTestStruct;

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
declare const FStructSerializerObjectTestStruct: FStructSerializerObjectTestStruct;

declare interface FStructSerializerOptionalTestStruct {
    StrOptional: TOptional<FString>;
    StrOptionalUnset: TOptional<FString>;
    IntOptional: TOptional<number>;
    IntOptionalUnset: TOptional<number>;
    NameOptional: TOptional<FName>;
    NameOptionalUnset: TOptional<FName>;
    StructOptional: TOptional<FStructSerializerBuiltinTestStruct>;
    StructOptionalUnset: TOptional<FStructSerializerBuiltinTestStruct>;
}
declare const FStructSerializerOptionalTestStruct: FStructSerializerOptionalTestStruct;

declare interface FStructSerializerSetTestStruct {
    StrSet: TSet<FString>;
    IntSet: TSet<number>;
    NameSet: TSet<FName>;
    StructSet: TSet<FStructSerializerBuiltinTestStruct>;
}
declare const FStructSerializerSetTestStruct: FStructSerializerSetTestStruct;

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
declare const FStructSerializerTestStruct: FStructSerializerTestStruct;

declare interface UObjectTest extends UObject {

}
declare const UObjectTest: UObjectTest;

