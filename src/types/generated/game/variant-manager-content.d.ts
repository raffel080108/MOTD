declare interface ALevelVariantSetsActor extends AActor {
    readonly __static_ALevelVariantSetsActor: {
        SwitchOnVariantByName(VariantSetName: string, VariantName: string): boolean;
        SwitchOnVariantByIndex(VariantSetIndex: number, VariantIndex: number): boolean;
        SetLevelVariantSets(InVariantSets: ULevelVariantSets): void;
        GetLevelVariantSets(bLoad: boolean): ULevelVariantSets;
    };
    readonly __properties_ALevelVariantSetsActor: {
        LevelVariantSets: FSoftObjectPath;
        DirectorInstances: TMap<UClass, ULevelVariantSetsFunctionDirector>;
    };
    readonly __staticRegistry: 
        ALevelVariantSetsActor['__static_ALevelVariantSetsActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALevelVariantSetsActor['__properties_ALevelVariantSetsActor'] &
        AActor['__propertyRegistry'];
}

declare interface ASwitchActor extends AActor {
    readonly __static_ASwitchActor: {
        SelectOption(OptionIndex: number): void;
        GetSelectedOption(): number;
        GetOptions(): AActor[];
    };
    readonly __properties_ASwitchActor: {
        SceneComponent: USceneComponent;
        LastSelectedOption: number;
    };
    readonly __staticRegistry: 
        ASwitchActor['__static_ASwitchActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ASwitchActor['__properties_ASwitchActor'] &
        AActor['__propertyRegistry'];
}

declare interface FCapturedPropSegment {
    PropertyName: string;
    PropertyIndex: number;
    ComponentName: string;
}

declare interface FFunctionCaller {
    FunctionName: string;
}

declare interface FVariantDependency {
    VariantSet: TSoftObjectPtr<UVariantSet>;
    Variant: TSoftObjectPtr<UVariant>;
    bEnabled: boolean;
}

declare interface ULevelVariantSets extends UObject {
    readonly __static_ULevelVariantSets: {
        GetVariantSetByName(VariantSetName: string): UVariantSet;
        GetVariantSet(VariantSetIndex: number): UVariantSet;
        GetNumVariantSets(): number;
    };
    readonly __properties_ULevelVariantSets: {
        DirectorClass: UClass;
        VariantSets: UVariantSet[];
    };
    readonly __staticRegistry: 
        ULevelVariantSets['__static_ULevelVariantSets'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelVariantSets['__properties_ULevelVariantSets'] &
        UObject['__propertyRegistry'];
}

declare interface ULevelVariantSetsFunctionDirector extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPropertyValue extends UObject {
    readonly __static_UPropertyValue: {
        HasRecordedData(): boolean;
        GetPropertyTooltip(): string;
        GetFullDisplayString(): string;
    };
    readonly __properties_UPropertyValue: {
        Properties: TFieldPath<FProperty>[];
        PropertyIndices: number[];
        CapturedPropSegments: FCapturedPropSegment[];
        FullDisplayString: string;
        PropertySetterName: string;
        PropertySetterParameterDefaults: TMap<string, string>;
        bHasRecordedData: boolean;
        LeafPropertyClass: UClass;
        ValueBytes: number[];
        PropCategory: EPropertyValueCategory;
    };
    readonly __staticRegistry: 
        UPropertyValue['__static_UPropertyValue'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyValue['__properties_UPropertyValue'] &
        UObject['__propertyRegistry'];
}

declare interface UPropertyValueColor extends UPropertyValue {
    readonly __staticRegistry: 
        UPropertyValue['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyValue['__propertyRegistry'];
}

declare interface UPropertyValueMaterial extends UPropertyValue {
    readonly __staticRegistry: 
        UPropertyValue['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyValue['__propertyRegistry'];
}

declare interface UPropertyValueOption extends UPropertyValue {
    readonly __staticRegistry: 
        UPropertyValue['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyValue['__propertyRegistry'];
}

declare interface UPropertyValueSoftObject extends UPropertyValue {
    readonly __staticRegistry: 
        UPropertyValue['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyValue['__propertyRegistry'];
}

declare interface UPropertyValueTransform extends UPropertyValue {
    readonly __staticRegistry: 
        UPropertyValue['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyValue['__propertyRegistry'];
}

declare interface UPropertyValueVisibility extends UPropertyValue {
    readonly __staticRegistry: 
        UPropertyValue['__staticRegistry'];
    readonly __propertyRegistry: 
        UPropertyValue['__propertyRegistry'];
}

declare interface UVariant extends UObject {
    readonly __static_UVariant: {
        SwitchOn(): void;
        SetThumbnailFromTexture(NewThumbnail: UTexture2D): void;
        SetThumbnailFromFile(FilePath: string): void;
        SetThumbnailFromEditorViewport(): void;
        SetThumbnailFromCamera(WorldContextObject: UObject, CameraTransform: FTransform, FOVDegrees: number, MinZ: number, Gamma: number): void;
        SetDisplayText(NewDisplayText: string): void;
        SetDependency(Index: number, Dependency: FVariantDependency): void;
        IsActive(): boolean;
        GetThumbnail(): UTexture2D;
        GetParent(): UVariantSet;
        GetNumDependencies(): number;
        GetNumActors(): number;
        GetDisplayText(): string;
        GetDependents(LevelVariantSets: ULevelVariantSets, bOnlyEnabledDependencies: boolean): UVariant[];
        GetDependency(Index: number): FVariantDependency;
        GetActor(ActorIndex: number): AActor;
        DeleteDependency(Index: number): void;
        AddDependency(Dependency: FVariantDependency): number;
    };
    readonly __properties_UVariant: {
        Dependencies: FVariantDependency[];
        DisplayText: string;
        ObjectBindings: UVariantObjectBinding[];
        Thumbnail: UTexture2D;
    };
    readonly __staticRegistry: 
        UVariant['__static_UVariant'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UVariant['__properties_UVariant'] &
        UObject['__propertyRegistry'];
}

declare interface UVariantObjectBinding extends UObject {
    readonly __properties_UVariantObjectBinding: {
        CachedActorLabel: string;
        ObjectPtr: FSoftObjectPath;
        LazyObjectPtr: TLazyObjectPtr<UObject>;
        CapturedProperties: UPropertyValue[];
        FunctionCallers: FFunctionCaller[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UVariantObjectBinding['__properties_UVariantObjectBinding'] &
        UObject['__propertyRegistry'];
}

declare interface UVariantSet extends UObject {
    readonly __static_UVariantSet: {
        SetThumbnailFromTexture(NewThumbnail: UTexture2D): void;
        SetThumbnailFromFile(FilePath: string): void;
        SetThumbnailFromEditorViewport(): void;
        SetThumbnailFromCamera(WorldContextObject: UObject, CameraTransform: FTransform, FOVDegrees: number, MinZ: number, Gamma: number): void;
        SetDisplayText(NewDisplayText: string): void;
        GetVariantByName(VariantName: string): UVariant;
        GetVariant(VariantIndex: number): UVariant;
        GetThumbnail(): UTexture2D;
        GetParent(): ULevelVariantSets;
        GetNumVariants(): number;
        GetDisplayText(): string;
    };
    readonly __properties_UVariantSet: {
        DisplayText: string;
        bExpanded: boolean;
        Variants: UVariant[];
        Thumbnail: UTexture2D;
    };
    readonly __staticRegistry: 
        UVariantSet['__static_UVariantSet'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UVariantSet['__properties_UVariantSet'] &
        UObject['__propertyRegistry'];
}

