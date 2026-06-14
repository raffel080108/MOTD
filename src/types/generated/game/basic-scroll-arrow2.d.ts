declare interface UBasic_ScrollArrow2_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_1: USizeBox;
    SizeBox_0: USizeBox;
    HorizontalBox_102: UHorizontalBox;
    arrow_main: UImage;
    OnClicked: FBasic_ScrollArrow2_COnClicked;
    ButtonAngle: number;
    Active: boolean;
    SetActive(NewVar_0: boolean): FLinearColor;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_ScrollArrow2(EntryPoint: number): void;
    OnClicked__DelegateSignature(): void;
}
declare const UBasic_ScrollArrow2_C: UBasic_ScrollArrow2_C;

