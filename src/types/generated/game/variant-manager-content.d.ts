declare interface ALevelVariantSetsActor extends AActor {
    LevelVariantSets: FSoftObjectPath;
    DirectorInstances: Record<string | number | symbol, ULevelVariantSetsFunctionDirector>;
    SwitchOnVariantByName(VariantSetName: string | FString, VariantName: string | FString): boolean;
    SwitchOnVariantByIndex(VariantSetIndex: number, VariantIndex: number): boolean;
    SetLevelVariantSets(InVariantSets: ULevelVariantSets): void;
    GetLevelVariantSets(bLoad: boolean): ULevelVariantSets;
}
declare const ALevelVariantSetsActor: ALevelVariantSetsActor;

declare interface ASwitchActor extends AActor {
    SceneComponent: USceneComponent;
    LastSelectedOption: number;
    SelectOption(OptionIndex: number): void;
    GetSelectedOption(): number;
    GetOptions(): TArray<AActor>;
}
declare const ASwitchActor: ASwitchActor;

declare interface FCapturedPropSegment {
    PropertyName: FString;
    PropertyIndex: number;
    ComponentName: FString;
}
declare const FCapturedPropSegment: FCapturedPropSegment;

declare interface FFunctionCaller {
    FunctionName: FName;
}
declare const FFunctionCaller: FFunctionCaller;

declare interface FVariantDependency {
    VariantSet: TSoftObjectPtr<UVariantSet>;
    Variant: TSoftObjectPtr<UVariant>;
    bEnabled: boolean;
}
declare const FVariantDependency: FVariantDependency;

declare interface ULevelVariantSets extends UObject {
    DirectorClass: UClass;
    VariantSets: TArray<UVariantSet>;
    GetVariantSetByName(VariantSetName: string | FString): UVariantSet;
    GetVariantSet(VariantSetIndex: number): UVariantSet;
    GetNumVariantSets(): number;
}
declare const ULevelVariantSets: ULevelVariantSets;

declare interface ULevelVariantSetsFunctionDirector extends UObject {

}
declare const ULevelVariantSetsFunctionDirector: ULevelVariantSetsFunctionDirector;

declare interface UPropertyValue extends UObject {
    Properties: TArray<TFieldPath<FProperty>>;
    PropertyIndices: TArray<number>;
    CapturedPropSegments: TArray<FCapturedPropSegment>;
    FullDisplayString: FString;
    PropertySetterName: FName;
    PropertySetterParameterDefaults: Record<FString, FString>;
    bHasRecordedData: boolean;
    LeafPropertyClass: UClass;
    ValueBytes: TArray<uint8>;
    PropCategory: EPropertyValueCategory;
    HasRecordedData(): boolean;
    GetPropertyTooltip(): FText;
    GetFullDisplayString(): FString;
}
declare const UPropertyValue: UPropertyValue;

declare interface UPropertyValueColor extends UPropertyValue {

}
declare const UPropertyValueColor: UPropertyValueColor;

declare interface UPropertyValueMaterial extends UPropertyValue {

}
declare const UPropertyValueMaterial: UPropertyValueMaterial;

declare interface UPropertyValueOption extends UPropertyValue {

}
declare const UPropertyValueOption: UPropertyValueOption;

declare interface UPropertyValueSoftObject extends UPropertyValue {

}
declare const UPropertyValueSoftObject: UPropertyValueSoftObject;

declare interface UPropertyValueTransform extends UPropertyValue {

}
declare const UPropertyValueTransform: UPropertyValueTransform;

declare interface UPropertyValueVisibility extends UPropertyValue {

}
declare const UPropertyValueVisibility: UPropertyValueVisibility;

declare interface UVariant extends UObject {
    Dependencies: TArray<FVariantDependency>;
    DisplayText: FText;
    ObjectBindings: TArray<UVariantObjectBinding>;
    Thumbnail: UTexture2D;
    SwitchOn(): void;
    SetThumbnailFromTexture(NewThumbnail: UTexture2D): void;
    SetThumbnailFromFile(FilePath: string | FString): void;
    SetThumbnailFromEditorViewport(): void;
    SetThumbnailFromCamera(WorldContextObject: UObject, CameraTransform: FTransform, FOVDegrees: number, MinZ: number, Gamma: number): void;
    SetDisplayText(NewDisplayText: FText): void;
    SetDependency(Index: number, Dependency: FVariantDependency): void;
    IsActive(): boolean;
    GetThumbnail(): UTexture2D;
    GetParent(): UVariantSet;
    GetNumDependencies(): number;
    GetNumActors(): number;
    GetDisplayText(): FText;
    GetDependents(LevelVariantSets: ULevelVariantSets, bOnlyEnabledDependencies: boolean): TArray<UVariant>;
    GetDependency(Index: number): FVariantDependency;
    GetActor(ActorIndex: number): AActor;
    DeleteDependency(Index: number): void;
    AddDependency(Dependency: FVariantDependency): number;
}
declare const UVariant: UVariant;

declare interface UVariantObjectBinding extends UObject {
    CachedActorLabel: FString;
    ObjectPtr: FSoftObjectPath;
    LazyObjectPtr: TLazyObjectPtr<UObject>;
    CapturedProperties: TArray<UPropertyValue>;
    FunctionCallers: TArray<FFunctionCaller>;
}
declare const UVariantObjectBinding: UVariantObjectBinding;

declare interface UVariantSet extends UObject {
    DisplayText: FText;
    bExpanded: boolean;
    Variants: TArray<UVariant>;
    Thumbnail: UTexture2D;
    SetThumbnailFromTexture(NewThumbnail: UTexture2D): void;
    SetThumbnailFromFile(FilePath: string | FString): void;
    SetThumbnailFromEditorViewport(): void;
    SetThumbnailFromCamera(WorldContextObject: UObject, CameraTransform: FTransform, FOVDegrees: number, MinZ: number, Gamma: number): void;
    SetDisplayText(NewDisplayText: FText): void;
    GetVariantByName(VariantName: string | FString): UVariant;
    GetVariant(VariantIndex: number): UVariant;
    GetThumbnail(): UTexture2D;
    GetParent(): ULevelVariantSets;
    GetNumVariants(): number;
    GetDisplayText(): FText;
}
declare const UVariantSet: UVariantSet;

