declare interface UUI_Bar_OrderMenu_Preview_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_GradientMasked_Canvas: UUI_GradientMasked_Canvas_C;
    UI_Bar_DrinkCost: UUI_Bar_DrinkCost_C;
    StrengthLabel: UTextBlock;
    PreviewStrength: UTextBlock;
    PreviewIcon: UImage;
    PreviewHeader: UTextBlock;
    PreviewDescription: UTextBlock;
    BuffDescription: UTextBlock;
    FadeOut: UWidgetAnimation;
    Open: UWidgetAnimation;
    PreviewItem: USpaceRigBarMenuItem;
    OnPreviewItemChanged: FUI_Bar_OrderMenu_Preview_COnPreviewItemChanged;
    PreviewBuf: UTemporaryBuff;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    FadeOutFinished(): void;
    ExecuteUbergraph_UI_Bar_OrderMenu_Preview(EntryPoint: number): void;
    OnPreviewItemChanged__DelegateSignature(Previous_Item: USpaceRigBarMenuItem, New_Item: USpaceRigBarMenuItem): void;
}
declare const UUI_Bar_OrderMenu_Preview_C: UUI_Bar_OrderMenu_Preview_C;

