declare interface UUI_ProgressBar_SingleImage_C extends UUserWidget {
    readonly __static_UUI_ProgressBar_SingleImage_C: {
        ClearFillColorOverride(): void;
        SetFillColorOverride(FillColor_Override: FBasicColor, InUseOverride: boolean): void;
        SetFillColor(FillColor: FBasicColor): void;
        SetColors(InFillColor: FBasicColor, InBackgroundColor: FBasicColor): void;
        SetImage(InImage: UTexture2D): void;
        GetPercent(OutPercent: number): void;
        SetPercent(InPercent: number, OutPercent: number): void;
        MakeBrush(Tint: FBasicColor, OutNewBrush: FSlateBrush): void;
        UpdateBrush(): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_ProgressBar_SingleImage(EntryPoint: number): void;
    };
    readonly __properties_UUI_ProgressBar_SingleImage_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_SizeBox: USizeBox;
        Inner_ProgressBar: UProgressBar;
        Percent: number;
        ProgressBarType: EProgressBarFillType;
        ProgressBarImage: UTexture2D;
        FillColor: FBasicColor;
        BackgroundColor: FBasicColor;
        RangeStart: number;
        RangeEnd: number;
        FillColor_Override: FBasicColor;
        Override_FillColor: boolean;
    };
    readonly __staticRegistry: 
        UUI_ProgressBar_SingleImage_C['__static_UUI_ProgressBar_SingleImage_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_ProgressBar_SingleImage_C['__properties_UUI_ProgressBar_SingleImage_C'] &
        UUserWidget['__propertyRegistry'];
}

