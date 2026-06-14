declare interface UUI_Shapes_Line_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    InnerSizeBox: USizeBox;
    InnerImage: UImage;
    LineColor: FBasicColor;
    LeftColor: FBasicColor;
    RightColor: FBasicColor;
    PixelWidth: number;
    BlueStrength: number;
    SizeSettings: FBasicPanelSize;
    DynamicMaterial: UMaterialInstanceDynamic;
    StartUV: FVector2D;
    EndUV: FVector2D;
    StartOffset: FVector2D;
    EndOffset: FVector2D;
    GetDynamicMaterial(DynamicMaterial: UMaterialInstanceDynamic): void;
    SetSizeSettings(InSizeSettings: FBasicPanelSize): void;
    SetOffsets(StartOffset: FVector2D, EndOffset: FVector2D): void;
    SetEndpoints(StartUV: FVector2D, EndUV: FVector2D): void;
    SetBlurStrength(InValue: number): void;
    SetPixelWidth(InValue: number): void;
    SetRightColor(InColor: FBasicColor): void;
    SetLeftColor(InColor: FBasicColor): void;
    SetLineColor(InColor: FBasicColor): void;
    SetParamScalar(Name: FName, InScalar: number): void;
    SetParamColor(Name: FName, InColor: FBasicColor): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Shapes_Line(EntryPoint: number): void;
}
declare const UUI_Shapes_Line_C: UUI_Shapes_Line_C;

