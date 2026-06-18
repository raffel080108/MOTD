declare interface UUI_Bar_OrderMenu_Preview_C extends UUserWidget {
    readonly __static_UUI_Bar_OrderMenu_Preview_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        FadeOutFinished(): void;
        ExecuteUbergraph_UI_Bar_OrderMenu_Preview(EntryPoint: number): void;
        OnPreviewItemChanged__DelegateSignature(Previous_Item: USpaceRigBarMenuItem, New_Item: USpaceRigBarMenuItem): void;
    };
    readonly __properties_UUI_Bar_OrderMenu_Preview_C: {
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
    };
    readonly __staticRegistry: 
        UUI_Bar_OrderMenu_Preview_C['__static_UUI_Bar_OrderMenu_Preview_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_OrderMenu_Preview_C['__properties_UUI_Bar_OrderMenu_Preview_C'] &
        UUserWidget['__propertyRegistry'];
}

