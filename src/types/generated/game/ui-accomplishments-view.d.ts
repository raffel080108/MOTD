declare interface UUI_Accomplishments_View_C extends UUI_KPI_Tab_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_MissionStats_Categories: UUI_MissionStats_Categories_C;
    ScrollBar: UBasic_ScrollBarBox_C;
    ItemWrapBox: UWrapBox;
    Border_BG: UBorder;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    KPI_Items: TArray<UUI_Accomplishment_Item_C>;
    Categories: TArray<UTexture2D>;
    CategoryFilter: TArray<UTexture2D>;
    HasClaimableAccomplishments: boolean;
    OnHasClaimableChanged: FUI_Accomplishments_View_COnHasClaimableChanged;
    Accomplishments: TArray<UOpsComTaskAsset>;
    DesignTimeAccomplishments: TArray<UOpsComTaskAsset>;
    UpdateBGParameters(): void;
    AddAccomplishment(InAccomplishment: UOpsComTaskAsset, InDesignTime: boolean): void;
    Clear(): void;
    BuildList(): void;
    Construct(): void;
    BndEvt__UI_MissionStats_Categories_K2Node_ComponentBoundEvent_14_OnSelectedChanged__DelegateSignature(): void;
    OnItemClaimableChanged_Event(Accomplishment_Item: UUI_Accomplishment_Item_C): void;
    Refresh(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Accomplishments_View(EntryPoint: number): void;
    OnHasClaimableChanged__DelegateSignature(HasClaimable: boolean): void;
}
declare const UUI_Accomplishments_View_C: UUI_Accomplishments_View_C;

