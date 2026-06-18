declare interface FPropertyBindingBindableStructDescriptor {
    Struct: UStruct;
    Name: string;
}

declare interface FPropertyBindingBinding {
    SourcePropertyPath: FPropertyBindingPath;
    TargetPropertyPath: FPropertyBindingPath;
}

declare interface FPropertyBindingBindingCollection {
    CopyBatches: FPropertyBindingCopyInfoBatch[];
    PropertyCopies: FPropertyBindingCopyInfo[];
    PropertyIndirections: FPropertyBindingPropertyIndirection[];
    BindingsOwner: TScriptInterface<IPropertyBindingBindingCollectionOwner>;
}

declare interface FPropertyBindingCopyInfo {
    SourceIndirection: FPropertyBindingPropertyIndirection;
    TargetIndirection: FPropertyBindingPropertyIndirection;
    SourceStructType: UStruct;
    CopySize: number;
    SourceDataHandle: FInstancedStruct;
    Type: EPropertyCopyType;
}

declare interface FPropertyBindingCopyInfoBatch {
    TargetStruct: FInstancedStruct;
    BindingsBegin: FPropertyBindingIndex16;
    BindingsEnd: FPropertyBindingIndex16;
    PropertyFunctionsBegin: FPropertyBindingIndex16;
    PropertyFunctionsEnd: FPropertyBindingIndex16;
}

declare interface FPropertyBindingIndex16 {
    Value: number;
}

declare interface FPropertyBindingPath {
    Segments: FPropertyBindingPathSegment[];
}

declare interface FPropertyBindingPathSegment {
    Name: string;
    ArrayIndex: number;
    InstanceStruct: UStruct;
    InstancedStructAccessType: EPropertyBindingPropertyAccessType;
}

declare interface FPropertyBindingPropertyIndirection {
    ArrayIndex: FPropertyBindingIndex16;
    Offset: number;
    NextIndex: FPropertyBindingIndex16;
    Type: EPropertyBindingPropertyAccessType;
    InstanceStruct: UStruct;
}

declare interface IPropertyBindingBindingCollectionOwner extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

