declare interface UShadowBG_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_62: UImage;
    Color: FLinearColor;
    EdgeSharpness: number;
    SetEdgeSharpness(EdgeSharpness1: number): void;
    SetColor(Color: FLinearColor): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ShadowBG(EntryPoint: number): void;
}
declare const UShadowBG_C: UShadowBG_C;

