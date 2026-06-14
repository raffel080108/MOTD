declare interface UUI_RewardResource_C extends URewardWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_2: USizeBox;
    ResourceText: UTextBlock;
    ResourceIcon: UImage;
    AnimatedNumber: UBasic_AnimatedNumber_C;
    CelebrateAnim: UWidgetAnimation;
    Resource: UResourceData;
    Amount: number;
    AudioCounting: UAudioComponent;
    Update(): void;
    SetTextColor(NewColor: ENUM_MenuColors): void;
    SetResource(NewResource: UResourceData, newAmount: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    PlayReceiveAnim(): void;
    ShowNumber(): void;
    ExecuteUbergraph_UI_RewardResource(EntryPoint: number): void;
}
declare const UUI_RewardResource_C: UUI_RewardResource_C;

