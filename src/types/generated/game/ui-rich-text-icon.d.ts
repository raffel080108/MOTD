declare interface UUI_RichText_Icon_C extends URichIconWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Icon_Image: UImage;
    Icon_Button: UButton;
    EmbeddedToolTip_Size: USizeBox;
    EmbeddedToolTip: UTextBlock;
    CreateToolTip(): UWidget;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__UI_RichText_Icon_Icon_Button_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__UI_RichText_Icon_Icon_Button_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_UI_RichText_Icon(EntryPoint: number): void;
}
declare const UUI_RichText_Icon_C: UUI_RichText_Icon_C;

