declare interface UHUD_AccomplishmentNotification_C extends UFSDUserWidget {
    readonly __static_UHUD_AccomplishmentNotification_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnIntroFinished(): void;
        OnOutroFinished(): void;
        ExecuteUbergraph_HUD_AccomplishmentNotification(EntryPoint: number): void;
    };
    readonly __properties_UHUD_AccomplishmentNotification_C: {
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
    };
    readonly __staticRegistry: 
        UHUD_AccomplishmentNotification_C['__static_UHUD_AccomplishmentNotification_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_AccomplishmentNotification_C['__properties_UHUD_AccomplishmentNotification_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

