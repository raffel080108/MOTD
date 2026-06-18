declare interface UWidget_DropPod_GarbageGen_C extends UUserWidget {
    readonly __static_UWidget_DropPod_GarbageGen_C: {
        GetNewOperation(): void;
        DoOperation(): void;
        Construct(): void;
        PreConstruct(IsDesignTime: boolean): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        ExecuteUbergraph_Widget_DropPod_GarbageGen(EntryPoint: number): void;
    };
    readonly __properties_UWidget_DropPod_GarbageGen_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_0: UTextBlock;
        ScrollBox_0: UScrollBox;
        Image_41: UImage;
        TimePassed: number;
        Operations: string[];
        NewOperation: boolean;
        CurrentOperation: number;
        Steps: number;
        CurrentStep: number;
        OperationDelay: number;
    };
    readonly __staticRegistry: 
        UWidget_DropPod_GarbageGen_C['__static_UWidget_DropPod_GarbageGen_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidget_DropPod_GarbageGen_C['__properties_UWidget_DropPod_GarbageGen_C'] &
        UUserWidget['__propertyRegistry'];
}

