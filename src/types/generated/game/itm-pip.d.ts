declare interface UITM_Pip_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_0: USizeBox;
    Image_Pip_Outline: UImage;
    Image_Pip: UImage;
    Size: FVector2D;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_Pip(EntryPoint: number): void;
}
declare const UITM_Pip_C: UITM_Pip_C;

