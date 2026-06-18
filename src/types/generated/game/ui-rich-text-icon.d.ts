declare interface UUI_RichText_Icon_C extends URichIconWidget {
    readonly __static_UUI_RichText_Icon_C: {
        CreateToolTip(): UWidget;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__UI_RichText_Icon_Icon_Button_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__UI_RichText_Icon_Icon_Button_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        ExecuteUbergraph_UI_RichText_Icon(EntryPoint: number): void;
    };
    readonly __properties_UUI_RichText_Icon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Icon_Image: UImage;
        Icon_Button: UButton;
        EmbeddedToolTip_Size: USizeBox;
        EmbeddedToolTip: UTextBlock;
    };
    readonly __staticRegistry: 
        UUI_RichText_Icon_C['__static_UUI_RichText_Icon_C'] &
        URichIconWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_RichText_Icon_C['__properties_UUI_RichText_Icon_C'] &
        URichIconWidget['__propertyRegistry'];
}

