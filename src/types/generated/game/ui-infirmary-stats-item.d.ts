declare interface UUI_InfirmaryStats_Item_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TotalText: UTextBlock;
    TitleText: UTextBlock;
    LineBorder: UBorder;
    Icon: UImage;
    IsSelected: boolean;
    OnHoverBegin: FUI_InfirmaryStats_Item_COnHoverBegin;
    OnHoverEnd: FUI_InfirmaryStats_Item_COnHoverEnd;
    CategoryIcon: UTexture2D;
    OwnedByLocal(): boolean;
    GetPlayer(): AFSDPlayerController;
    SetCategoryFilter(Filter: TArray<UTexture2D>): void;
    GetMissionStat(Mission_Stat: UMissionStat): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    MissonStatUpdate(MissionStat: UMissionStat, StatValue: FText): void;
    ExecuteUbergraph_UI_InfirmaryStats_Item(EntryPoint: number): void;
    OnHoverEnd__DelegateSignature(Sender: UUI_MissionStats_Item_C): void;
    OnHoverBegin__DelegateSignature(Sender: UUI_MissionStats_Item_C): void;
}
declare const UUI_InfirmaryStats_Item_C: UUI_InfirmaryStats_Item_C;

