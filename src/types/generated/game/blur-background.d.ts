declare interface UBlurBackground_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Border_0: UBorder;
    BackgroundBlur_66: UBackgroundBlur;
    Tint: FLinearColor;
    Blur: number;
    SetBlur(InBlur: number): void;
    SetColor(Tint: FLinearColor): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_BlurBackground(EntryPoint: number): void;
}
declare const UBlurBackground_C: UBlurBackground_C;

