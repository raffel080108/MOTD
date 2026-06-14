declare interface UUI_MissionStats_Item_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TotalText: UTextBlock;
    TitleText: UTextBlock;
    LineBorder: UBorder;
    Icon: UImage;
    IsSelected: boolean;
    OnHoverBegin: FUI_MissionStats_Item_COnHoverBegin;
    OnHoverEnd: FUI_MissionStats_Item_COnHoverEnd;
    CategoryIcon: UTexture2D;
    IsInteractable(): boolean;
    SetCategoryFilter(Filter: TArray<UTexture2D>): void;
    GetMissionStat(Mission_Stat: UMissionStat): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnMouseEnter(MyGeometry: FGeometry, MouseEvent: FPointerEvent): void;
    OnMouseLeave(MouseEvent: FPointerEvent): void;
    OnCountChanged(WorldContext: UObject, MissionStat: UMissionStat, Value: number, change: number): void;
    ExecuteUbergraph_UI_MissionStats_Item(EntryPoint: number): void;
    OnHoverEnd__DelegateSignature(Sender: UUI_MissionStats_Item_C): void;
    OnHoverBegin__DelegateSignature(Sender: UUI_MissionStats_Item_C): void;
}
declare const UUI_MissionStats_Item_C: UUI_MissionStats_Item_C;

