declare interface UUI_Bar_QuestWarning_C extends UUserWidget {
    readonly __static_UUI_Bar_QuestWarning_C: {
        AnimStop(): void;
        AnimPlay(): void;
        Construct(): void;
        ExecuteUbergraph_UI_Bar_QuestWarning(EntryPoint: number): void;
    };
    readonly __properties_UUI_Bar_QuestWarning_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        QuestBox: USizeBox;
        Image_86: UImage;
        Image_85: UImage;
        Anim_InfoBoxAppear: UWidgetAnimation;
    };
    readonly __staticRegistry: 
        UUI_Bar_QuestWarning_C['__static_UUI_Bar_QuestWarning_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Bar_QuestWarning_C['__properties_UUI_Bar_QuestWarning_C'] &
        UUserWidget['__propertyRegistry'];
}

