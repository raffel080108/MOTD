declare interface UBasic_Menu_SmallWindowWithHeader_Redesign_C extends UUserWidget {
    readonly __static_UBasic_Menu_SmallWindowWithHeader_Redesign_C: {
        SetHeaderText(NewHeaderText: string): void;
        IsHovering(): boolean;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_3_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature(): void;
        PreConstruct(IsDesignTime: boolean): void;
        SetCounterText(InText: string): void;
        ExecuteUbergraph_Basic_Menu_SmallWindowWithHeader_Redesign(EntryPoint: number): void;
    };
    readonly __properties_UBasic_Menu_SmallWindowWithHeader_Redesign_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        WindowButton: UButton;
        PutStuffHere: UNamedSlot;
        MainBG_Outline: UBorder;
        MainBG: UBorder;
        HeaderBG: UBorder;
        DATA_headerText: UTextBlock;
        Brackets: UBorder;
        HeaderText: string;
        ShowCounter: boolean;
        WindowIsButton: boolean;
        ButtonStyle: FButtonStyle;
        SidesActive: boolean;
        HeaderColor: ENUM_MenuColors;
    };
    readonly __staticRegistry: 
        UBasic_Menu_SmallWindowWithHeader_Redesign_C['__static_UBasic_Menu_SmallWindowWithHeader_Redesign_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_Menu_SmallWindowWithHeader_Redesign_C['__properties_UBasic_Menu_SmallWindowWithHeader_Redesign_C'] &
        UUserWidget['__propertyRegistry'];
}

