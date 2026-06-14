declare interface FSharedImageConstRefBlueprint {

}
declare const FSharedImageConstRefBlueprint: FSharedImageConstRefBlueprint;

declare interface USharedImageConstRefBlueprintFns extends UObject {
    IsValid(Image: FSharedImageConstRefBlueprint): boolean;
    GetWidth(Image: FSharedImageConstRefBlueprint): number;
    GetSize(Image: FSharedImageConstRefBlueprint): FVector2f;
    GetPixelValue(Image: FSharedImageConstRefBlueprint, X: number, Y: number, bValid: boolean): FVector4f;
    GetPixelLinearColor(Image: FSharedImageConstRefBlueprint, X: number, Y: number, bValid: boolean, FailureColor: FLinearColor): FLinearColor;
    GetHeight(Image: FSharedImageConstRefBlueprint): number;
    IsValid(): boolean;
}
declare const USharedImageConstRefBlueprintFns: USharedImageConstRefBlueprintFns;

