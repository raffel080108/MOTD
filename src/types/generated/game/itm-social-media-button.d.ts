declare interface UITM_SocialMediaButton_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Button: UBasic_ButtonLargeImage_C;
    Icon: UTexture2D;
    Description: FText;
    URL: FString;
    CreateToolTip(): void;
    BndEvt__ITM_SocialMediaButton_Button_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_ITM_SocialMediaButton(EntryPoint: number): void;
}
declare const UITM_SocialMediaButton_C: UITM_SocialMediaButton_C;

