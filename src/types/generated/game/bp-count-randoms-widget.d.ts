declare interface UBP_Count_Randoms_Widget_C extends UUserWidget {
    readonly __static_UBP_Count_Randoms_Widget_C: {
        UpdateDepthText(): void;
        SetProgress(Progress: number): void;
        Construct(): void;
        ExecuteUbergraph_BP_Count_Randoms_Widget(EntryPoint: number): void;
    };
    readonly __properties_UBP_Count_Randoms_Widget_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_6: UTextBlock;
        TextBlock_5: UTextBlock;
        TextBlock_4: UTextBlock;
        Image_3: UImage;
        Image_2: UImage;
        Image_0: UImage;
        Depth: number;
    };
    readonly __staticRegistry: 
        UBP_Count_Randoms_Widget_C['__static_UBP_Count_Randoms_Widget_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_Count_Randoms_Widget_C['__properties_UBP_Count_Randoms_Widget_C'] &
        UUserWidget['__propertyRegistry'];
}

