declare interface UHUD_AccomplishmentNotification_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_Accomplishment_Tier: UUI_Milestone_Tier_C;
    Title: UTextBlock;
    StatIcon: UImage;
    KPIHeader: UTextBlock;
    Glow: UImage;
    Frame: UBorder;
    Basic_Menu_ColorBarVertical: UBasic_Menu_ColorBarVertical_C;
    Intro: UWidgetAnimation;
    Outro: UWidgetAnimation;
    Accomplishment: UOpsComTaskAsset;
    ReachedTier: number;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnIntroFinished(): void;
    OnOutroFinished(): void;
    ExecuteUbergraph_HUD_AccomplishmentNotification(EntryPoint: number): void;
}
declare const UHUD_AccomplishmentNotification_C: UHUD_AccomplishmentNotification_C;

