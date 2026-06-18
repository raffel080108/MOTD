declare interface UBlurBackground_C extends UUserWidget {
    readonly __static_UBlurBackground_C: {
        SetBlur(InBlur: number): void;
        SetColor(Tint: FLinearColor): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_BlurBackground(EntryPoint: number): void;
    };
    readonly __properties_UBlurBackground_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Border_0: UBorder;
        BackgroundBlur_66: UBackgroundBlur;
        Tint: FLinearColor;
        Blur: number;
    };
    readonly __staticRegistry: 
        UBlurBackground_C['__static_UBlurBackground_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlurBackground_C['__properties_UBlurBackground_C'] &
        UUserWidget['__propertyRegistry'];
}

