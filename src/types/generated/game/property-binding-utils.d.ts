declare interface FPropertyBindingBindableStructDescriptor {
    Struct: UStruct;
    Name: FName;
}
declare const FPropertyBindingBindableStructDescriptor: FPropertyBindingBindableStructDescriptor;

declare interface FPropertyBindingBinding {
    SourcePropertyPath: FPropertyBindingPath;
    TargetPropertyPath: FPropertyBindingPath;
}
declare const FPropertyBindingBinding: FPropertyBindingBinding;

declare interface FPropertyBindingBindingCollection {
    CopyBatches: TArray<FPropertyBindingCopyInfoBatch>;
    PropertyCopies: TArray<FPropertyBindingCopyInfo>;
    PropertyIndirections: TArray<FPropertyBindingPropertyIndirection>;
    BindingsOwner: TScriptInterface<IPropertyBindingBindingCollectionOwner>;
}
declare const FPropertyBindingBindingCollection: FPropertyBindingBindingCollection;

declare interface FPropertyBindingCopyInfo {
    SourceIndirection: FPropertyBindingPropertyIndirection;
    TargetIndirection: FPropertyBindingPropertyIndirection;
    SourceStructType: UStruct;
    CopySize: number;
    SourceDataHandle: FInstancedStruct;
    Type: EPropertyCopyType;
}
declare const FPropertyBindingCopyInfo: FPropertyBindingCopyInfo;

declare interface FPropertyBindingCopyInfoBatch {
    TargetStruct: FInstancedStruct;
    BindingsBegin: FPropertyBindingIndex16;
    BindingsEnd: FPropertyBindingIndex16;
    PropertyFunctionsBegin: FPropertyBindingIndex16;
    PropertyFunctionsEnd: FPropertyBindingIndex16;
}
declare const FPropertyBindingCopyInfoBatch: FPropertyBindingCopyInfoBatch;

declare interface FPropertyBindingIndex16 {
    Value: uint16;
}
declare const FPropertyBindingIndex16: FPropertyBindingIndex16;

declare interface FPropertyBindingPath {
    Segments: TArray<FPropertyBindingPathSegment>;
}
declare const FPropertyBindingPath: FPropertyBindingPath;

declare interface FPropertyBindingPathSegment {
    Name: FName;
    ArrayIndex: number;
    InstanceStruct: UStruct;
    InstancedStructAccessType: EPropertyBindingPropertyAccessType;
}
declare const FPropertyBindingPathSegment: FPropertyBindingPathSegment;

declare interface FPropertyBindingPropertyIndirection {
    ArrayIndex: FPropertyBindingIndex16;
    Offset: uint16;
    NextIndex: FPropertyBindingIndex16;
    Type: EPropertyBindingPropertyAccessType;
    InstanceStruct: UStruct;
}
declare const FPropertyBindingPropertyIndirection: FPropertyBindingPropertyIndirection;

declare interface IPropertyBindingBindingCollectionOwner extends IInterface {

}
declare const IPropertyBindingBindingCollectionOwner: IPropertyBindingBindingCollectionOwner;

