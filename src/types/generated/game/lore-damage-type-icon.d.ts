declare interface ULore_DamageTypeIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Icon: UImage;
    Button_0: UButton;
    Intro: UWidgetAnimation;
    IconSize: FVector2D;
    DamageType: FDamageTypeDescription;
    GetToolTipWidget_0(): UWidget;
    Construct(): void;
    SetData(DamageType: FDamageTypeDescription): void;
    PlayIntro(Delay: number): void;
    ExecuteUbergraph_Lore_DamageTypeIcon(EntryPoint: number): void;
}
declare const ULore_DamageTypeIcon_C: ULore_DamageTypeIcon_C;

