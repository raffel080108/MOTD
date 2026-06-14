declare interface UHUD_Armor_Base_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    IconSizeBox: USizeBox;
    IconImage: UImage;
    HUD_Resource_Bar_Armor_Bonus: UHUD_Resource_Bar_Armor_C;
    HUD_Resource_Bar_Armor_Base: UHUD_Resource_Bar_Armor_C;
    HealthComponent: UPlayerHealthComponent;
    IconSize: FVector2D;
    ShouldDisplayTotalHealth: boolean;
    AllowTextDisplay: boolean;
    OnArmorChanged(Health: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_HUD_Armor_Base(EntryPoint: number): void;
}
declare const UHUD_Armor_Base_C: UHUD_Armor_Base_C;

