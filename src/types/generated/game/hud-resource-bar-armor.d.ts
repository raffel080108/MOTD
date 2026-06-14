declare interface UHUD_Resource_Bar_Armor_C extends UHUD_Resource_Bar_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    FillMaterial: UMaterialInstanceDynamic;
    UnbindHealthComponent(): void;
    UpdateArmor(): void;
    BindHealthComponent(InHealthComponent: UPlayerHealthComponent): void;
    SetBarPct(HealthPct: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnArmorChanged(Health: number): void;
    ExecuteUbergraph_HUD_Resource_Bar_Armor(EntryPoint: number): void;
}
declare const UHUD_Resource_Bar_Armor_C: UHUD_Resource_Bar_Armor_C;

