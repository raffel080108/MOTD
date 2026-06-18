declare interface FCachedPropertyPath {
    Segments: FPropertyPathSegment[];
    CachedFunction: UFunction;
}

declare interface FPropertyPathSegment {
    Name: string;
    ArrayIndex: number;
    Struct: UStruct;
}

declare type FPropertyPathTestBaseStruct = object;

declare interface FPropertyPathTestBed {
    Object: UPropertyPathTestObject;
    ModifiedObject: UPropertyPathTestObject;
    ModifiedStruct: FPropertyPathTestStruct;
    DefaultStruct: FPropertyPathTestStruct;
}

declare interface FPropertyPathTestInnerStruct extends FPropertyPathTestBaseStruct {
    float: number;
    bool: boolean;
    EnumOne: EPropertyPathTestEnum;
    EnumTwo: EPropertyPathTestEnum;
    EnumThree: EPropertyPathTestEnum;
    EnumFour: EPropertyPathTestEnum;
    Integer: number;
    String: string;
}

declare interface FPropertyPathTestStruct extends FPropertyPathTestBaseStruct {
    bool: boolean;
    Integer: number;
    EnumOne: EPropertyPathTestEnum;
    EnumTwo: EPropertyPathTestEnum;
    EnumThree: EPropertyPathTestEnum;
    EnumFour: EPropertyPathTestEnum;
    String: string;
    float: number;
    InnerStruct: FPropertyPathTestInnerStruct;
    InnerObject: UPropertyPathTestObject;
}

declare interface UPropertyPathTestObject extends UObject {
    readonly __static_UPropertyPathTestObject: {
        SetStructRef(InStruct: FPropertyPathTestStruct): void;
        SetStructConstRef(InStruct: FPropertyPathTestStruct): void;
        SetStruct(InStruct: FPropertyPathTestStruct): void;
        SetFloat(InFloat: number): void;
        GetStructRef(): FPropertyPathTestStruct;
        GetStructConstRef(): FPropertyPathTestStruct;
        GetStruct(): FPropertyPathTestStruct;
        GetFloat(): number;
    };
    readonly __properties_UPropertyPathTestObject: {
        bool: boolean;
        EnumOne: EPropertyPathTestEnum;
        EnumTwo: EPropertyPathTestEnum;
        EnumThree: EPropertyPathTestEnum;
        EnumFour: EPropertyPathTestEnum;
        Integer: number;
        String: string;
        float: number;
        Struct: FPropertyPathTestStruct;
        StructRef: FPropertyPathTestStruct;
        StructConstRef: FPropertyPathTestStruct;
        InnerObject: UPropertyPathTestObject;
    };
    readonly __staticRegistry: 
        UPropertyPathTestObject['__static_UPropertyPathTestObject'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyPathTestObject['__properties_UPropertyPathTestObject'] &
        UObject['__propertyRegistry'];
}

