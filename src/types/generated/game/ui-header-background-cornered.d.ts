declare interface UUI_HeaderBackground_Cornered_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Right_Box: UVerticalBox;
    Left_Box: UVerticalBox;
    Gradient_RetainerBox: URetainerBox;
    Content: UNamedSlot;
    Bar_Image03_1: UBasic_Image_C;
    Bar_Image03: UBasic_Image_C;
    Bar_Image02_1: UBasic_Image_C;
    Bar_Image02: UBasic_Image_C;
    Bar_Image01: UBasic_Image_C;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_HeaderBackground_Cornered(EntryPoint: number): void;
}
declare const UUI_HeaderBackground_Cornered_C: UUI_HeaderBackground_Cornered_C;

