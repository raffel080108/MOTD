declare interface UBasic_BG_CutCorner_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_0: USizeBox;
    HorizontalBox_Border: UHorizontalBox;
    Corner: UImage;
    Border_107: UBorder;
    Border_100: UBorder;
    Border_1: UBorder;
    CornerSize: number;
    DynBackgroundMaterial: UMaterialInstanceDynamic;
    PreConstruct(IsDesignTime: boolean): void;
    SetBorderColor(InputPin: FLinearColor): void;
    ExecuteUbergraph_Basic_BG_CutCorner(EntryPoint: number): void;
}
declare const UBasic_BG_CutCorner_C: UBasic_BG_CutCorner_C;

