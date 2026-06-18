declare interface UITM_SocialMediaButton_C extends UUserWidget {
    readonly __static_UITM_SocialMediaButton_C: {
        CreateToolTip(): void;
        BndEvt__ITM_SocialMediaButton_Button_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_ITM_SocialMediaButton(EntryPoint: number): void;
    };
    readonly __properties_UITM_SocialMediaButton_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Button: UBasic_ButtonLargeImage_C;
        Icon: UTexture2D;
        Description: string;
        URL: string;
    };
    readonly __staticRegistry: 
        UITM_SocialMediaButton_C['__static_UITM_SocialMediaButton_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_SocialMediaButton_C['__properties_UITM_SocialMediaButton_C'] &
        UUserWidget['__propertyRegistry'];
}

