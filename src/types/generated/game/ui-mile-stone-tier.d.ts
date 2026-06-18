declare interface UUI_Milestone_Tier_C extends UUserWidget {
    readonly __static_UUI_Milestone_Tier_C: {
        InitTierImage(Image: UImage): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_Milestone_Tier(EntryPoint: number): void;
    };
    readonly __properties_UUI_Milestone_Tier_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Tier06: UImage;
        Tier05: UImage;
        Tier04: UImage;
        Tier03: UImage;
        Tier02: UImage;
        Tier01: UImage;
        Tiers: UImage[];
        MilestoneTier: number;
        ImageDimension: number;
    };
    readonly __staticRegistry: 
        UUI_Milestone_Tier_C['__static_UUI_Milestone_Tier_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Milestone_Tier_C['__properties_UUI_Milestone_Tier_C'] &
        UUserWidget['__propertyRegistry'];
}

