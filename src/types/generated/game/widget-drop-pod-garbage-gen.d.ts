declare interface UWidget_DropPod_GarbageGen_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_0: UTextBlock;
    ScrollBox_0: UScrollBox;
    Image_41: UImage;
    TimePassed: number;
    Operations: TArray<FString>;
    NewOperation: boolean;
    CurrentOperation: number;
    Steps: number;
    CurrentStep: number;
    OperationDelay: number;
    GetNewOperation(): void;
    DoOperation(): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    ExecuteUbergraph_Widget_DropPod_GarbageGen(EntryPoint: number): void;
}
declare const UWidget_DropPod_GarbageGen_C: UWidget_DropPod_GarbageGen_C;

