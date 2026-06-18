declare interface UUI_Shapes_Line_C extends UUserWidget {
    readonly __static_UUI_Shapes_Line_C: {
        GetDynamicMaterial(DynamicMaterial: UMaterialInstanceDynamic): void;
        SetSizeSettings(InSizeSettings: FBasicPanelSize): void;
        SetOffsets(StartOffset: FVector2D, EndOffset: FVector2D): void;
        SetEndpoints(StartUV: FVector2D, EndUV: FVector2D): void;
        SetBlurStrength(InValue: number): void;
        SetPixelWidth(InValue: number): void;
        SetRightColor(InColor: FBasicColor): void;
        SetLeftColor(InColor: FBasicColor): void;
        SetLineColor(InColor: FBasicColor): void;
        SetParamScalar(Name: string, InScalar: number): void;
        SetParamColor(Name: string, InColor: FBasicColor): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_Shapes_Line(EntryPoint: number): void;
    };
    readonly __properties_UUI_Shapes_Line_C: {
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
    };
    readonly __staticRegistry: 
        UUI_Shapes_Line_C['__static_UUI_Shapes_Line_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Shapes_Line_C['__properties_UUI_Shapes_Line_C'] &
        UUserWidget['__propertyRegistry'];
}

