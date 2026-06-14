declare interface UUI_MissionStats_Categories_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    CategoryParent: UHorizontalBox;
    ArrowRight: UBasic_ArrowButton02_C;
    ArrowLeft: UBasic_ArrowButton02_C;
    CategoryIcons: TArray<UTexture2D>;
    Widgets: TArray<UUI_MissionStats_Category_C>;
    OnSelectedChanged: FUI_MissionStats_Categories_COnSelectedChanged;
    SelectedCategory: UUI_MissionStats_Category_C;
    SelectNext(ForwardDirection: boolean): void;
    GetCategorySelection(Selection: TArray<UTexture2D>): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__ArrowLeft_K2Node_ComponentBoundEvent_4_OnClicked__DelegateSignature(): void;
    BndEvt__ArrowRight_K2Node_ComponentBoundEvent_11_OnClicked__DelegateSignature(): void;
    ExecuteUbergraph_UI_MissionStats_Categories(EntryPoint: number): void;
    OnSelectedChanged__DelegateSignature(): void;
}
declare const UUI_MissionStats_Categories_C: UUI_MissionStats_Categories_C;

