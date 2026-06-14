declare interface FCachedPropertyPath {
    Segments: TArray<FPropertyPathSegment>;
    CachedFunction: UFunction;
}
declare const FCachedPropertyPath: FCachedPropertyPath;

declare interface FPropertyPathSegment {
    Name: FName;
    ArrayIndex: number;
    Struct: UStruct;
}
declare const FPropertyPathSegment: FPropertyPathSegment;

declare interface FPropertyPathTestBaseStruct {

}
declare const FPropertyPathTestBaseStruct: FPropertyPathTestBaseStruct;

declare interface FPropertyPathTestBed {
    Object: UPropertyPathTestObject;
    ModifiedObject: UPropertyPathTestObject;
    ModifiedStruct: FPropertyPathTestStruct;
    DefaultStruct: FPropertyPathTestStruct;
}
declare const FPropertyPathTestBed: FPropertyPathTestBed;

declare interface FPropertyPathTestInnerStruct extends FPropertyPathTestBaseStruct {
    float: number;
    bool: boolean;
    EnumOne: EPropertyPathTestEnum;
    EnumTwo: EPropertyPathTestEnum;
    EnumThree: EPropertyPathTestEnum;
    EnumFour: EPropertyPathTestEnum;
    Integer: number;
    String: FString;
}
declare const FPropertyPathTestInnerStruct: FPropertyPathTestInnerStruct;

declare interface FPropertyPathTestStruct extends FPropertyPathTestBaseStruct {
    bool: boolean;
    Integer: number;
    EnumOne: EPropertyPathTestEnum;
    EnumTwo: EPropertyPathTestEnum;
    EnumThree: EPropertyPathTestEnum;
    EnumFour: EPropertyPathTestEnum;
    String: FString;
    float: number;
    InnerStruct: FPropertyPathTestInnerStruct;
    InnerObject: UPropertyPathTestObject;
}
declare const FPropertyPathTestStruct: FPropertyPathTestStruct;

declare interface UPropertyPathTestObject extends UObject {
    bool: boolean;
    EnumOne: EPropertyPathTestEnum;
    EnumTwo: EPropertyPathTestEnum;
    EnumThree: EPropertyPathTestEnum;
    EnumFour: EPropertyPathTestEnum;
    Integer: number;
    String: FString;
    float: number;
    Struct: FPropertyPathTestStruct;
    StructRef: FPropertyPathTestStruct;
    StructConstRef: FPropertyPathTestStruct;
    InnerObject: UPropertyPathTestObject;
    SetStructRef(InStruct: FPropertyPathTestStruct): void;
    SetStructConstRef(InStruct: FPropertyPathTestStruct): void;
    SetStruct(InStruct: FPropertyPathTestStruct): void;
    SetFloat(InFloat: number): void;
    GetStructRef(): FPropertyPathTestStruct;
    GetStructConstRef(): FPropertyPathTestStruct;
    GetStruct(): FPropertyPathTestStruct;
    GetFloat(): number;
}
declare const UPropertyPathTestObject: UPropertyPathTestObject;

