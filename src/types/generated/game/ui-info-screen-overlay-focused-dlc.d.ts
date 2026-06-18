declare interface UUI_InfoScreen_Overlay_FocusedDLC_C extends UUserWidget {
    readonly __static_UUI_InfoScreen_Overlay_FocusedDLC_C: {
        Construct(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__UI_InfoScreen_Overlay_FocusedDLC_DLC_K2Node_ComponentBoundEvent_3_OnEntitlementStateChanged__DelegateSignature(Entitlement: UBaseEntitlement, IsUnLocked: boolean): void;
        ExecuteUbergraph_UI_InfoScreen_Overlay_FocusedDLC(EntryPoint: number): void;
    };
    readonly __properties_UUI_InfoScreen_Overlay_FocusedDLC_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Glow2: UImage;
        Glow1: UImage;
        DLCImage: UImage;
        DLC_Label_Overlay: UImage;
        Button_0: UButton;
        BlurBackground: UBlurBackground_C;
        Basic_Menu_ColorBar_C_0: UBasic_Menu_ColorBar_C;
        Basic_Menu_ColorBar_C: UBasic_Menu_ColorBar_C;
        Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
        Idle: UWidgetAnimation;
        Hover: UWidgetAnimation;
        Click: UWidgetAnimation;
        DLC: UAdvertisedEntitlement;
    };
    readonly __staticRegistry: 
        UUI_InfoScreen_Overlay_FocusedDLC_C['__static_UUI_InfoScreen_Overlay_FocusedDLC_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_InfoScreen_Overlay_FocusedDLC_C['__properties_UUI_InfoScreen_Overlay_FocusedDLC_C'] &
        UUserWidget['__propertyRegistry'];
}

