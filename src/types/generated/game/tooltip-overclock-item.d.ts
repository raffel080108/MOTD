declare interface UTOOLTIP_Overclock_Item_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_Overclock_Icon: UITM_Overclock_Icon_C;
    ITM_Overclock_Details: UITM_Overclock_Details_C;
    HeaderSize: USizeBox;
    HeaderOverlay: UOverlay;
    HeaderBorder2: UBorder;
    EquipBorder: UBorder;
    DATA_Overclock_Title: UTextBlock;
    DATA_Overclock_CategoryName: UTextBlock;
    Basic_Menu_MinimalWindow23: UBasic_Menu_MinimalWindow_C;
    Overclock: UItemUpgrade;
    Category: USchematicCategory;
    PreConstruct(IsDesignTime: boolean): void;
    SetOverclock(Overclock: UItemUpgrade): void;
    ExecuteUbergraph_TOOLTIP_Overclock_Item(EntryPoint: number): void;
}
declare const UTOOLTIP_Overclock_Item_C: UTOOLTIP_Overclock_Item_C;

