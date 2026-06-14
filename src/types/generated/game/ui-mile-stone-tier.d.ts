declare interface UUI_Milestone_Tier_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Tier06: UImage;
    Tier05: UImage;
    Tier04: UImage;
    Tier03: UImage;
    Tier02: UImage;
    Tier01: UImage;
    Tiers: TArray<UImage>;
    MilestoneTier: number;
    ImageDimension: number;
    InitTierImage(Image: UImage): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Milestone_Tier(EntryPoint: number): void;
}
declare const UUI_Milestone_Tier_C: UUI_Milestone_Tier_C;

