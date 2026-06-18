declare type FSharedImageConstRefBlueprint = object;

declare interface USharedImageConstRefBlueprintFns extends UObject {
    readonly __static_USharedImageConstRefBlueprintFns: {
        IsValid(Image: FSharedImageConstRefBlueprint): boolean;
        GetWidth(Image: FSharedImageConstRefBlueprint): number;
        GetSize(Image: FSharedImageConstRefBlueprint): FVector2f;
        GetPixelValue(Image: FSharedImageConstRefBlueprint, X: number, Y: number, bValid: boolean): FVector4f;
        GetPixelLinearColor(Image: FSharedImageConstRefBlueprint, X: number, Y: number, bValid: boolean, FailureColor: FLinearColor): FLinearColor;
        GetHeight(Image: FSharedImageConstRefBlueprint): number;
    };
    readonly __staticRegistry: 
        USharedImageConstRefBlueprintFns['__static_USharedImageConstRefBlueprintFns'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

