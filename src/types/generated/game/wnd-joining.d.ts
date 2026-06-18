declare interface UWND_Joining_C extends UWindowWidget {
    readonly __static_UWND_Joining_C: {
        OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        OnKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
        BndEvt__Button_Close_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature(): void;
        PreConstruct(IsDesignTime: boolean): void;
        HideCancel(): void;
        OnShown(): void;
        Close(): void;
        OnClosed(): void;
        ShowCancel(): void;
        ExecuteUbergraph_WND_Joining(EntryPoint: number): void;
    };
    readonly __properties_UWND_Joining_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock_0: UTextBlock;
        FadeOverlay: UImage;
        CircularThrobber_2: UCircularThrobber;
        Button_Close: UBasic_ButtonScalable2_C;
        BlurBackground: UBlurBackground_C;
        BasicWindow_Minimal: UBasic_Menu_MinimalWindow_C;
        FadeInAnimation: UWidgetAnimation;
        ShowCancelButton: boolean;
    };
    readonly __staticRegistry: 
        UWND_Joining_C['__static_UWND_Joining_C'] &
        UWindowWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWND_Joining_C['__properties_UWND_Joining_C'] &
        UWindowWidget['__propertyRegistry'];
}

