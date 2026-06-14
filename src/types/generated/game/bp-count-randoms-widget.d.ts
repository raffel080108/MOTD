declare interface UBP_Count_Randoms_Widget_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_6: UTextBlock;
    TextBlock_5: UTextBlock;
    TextBlock_4: UTextBlock;
    Image_3: UImage;
    Image_2: UImage;
    Image_0: UImage;
    Depth: number;
    UpdateDepthText(): void;
    SetProgress(Progress: number): void;
    Construct(): void;
    ExecuteUbergraph_BP_Count_Randoms_Widget(EntryPoint: number): void;
}
declare const UBP_Count_Randoms_Widget_C: UBP_Count_Randoms_Widget_C;

