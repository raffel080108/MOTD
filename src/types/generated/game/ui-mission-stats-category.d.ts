declare interface UUI_MissionStats_Category_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Icon: UImage;
    Background: UBorder;
    AllText: UTextBlock;
    CategoryIcon: UTexture2D;
    CategorySelected: boolean;
    IsAllCategory: boolean;
    Click(): void;
    IsInteractable(): boolean;
    GetCategoryIcon(CategoryIcon: UTexture2D): void;
    OnMouseButtonUp(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    IsSelected(CategorySelected: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnMouseEnter(MyGeometry: FGeometry, MouseEvent: FPointerEvent): void;
    OnMouseLeave(MouseEvent: FPointerEvent): void;
    ExecuteUbergraph_UI_MissionStats_Category(EntryPoint: number): void;
}
declare const UUI_MissionStats_Category_C: UUI_MissionStats_Category_C;

