declare interface UHUD_Frozen_C extends UFSDUserWidget {
    readonly __static_UHUD_Frozen_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnCharacterStateChanged_Event(NewState: ECharacterState): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        SetProgress(currentProgress: number): void;
        ExecuteUbergraph_HUD_Frozen(EntryPoint: number): void;
    };
    readonly __properties_UHUD_Frozen_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UnfreezeProgressBar: UProgressBar;
        InstructionsLabel: UUI_AdvancedLabel_C;
        Border_1: UBorder;
        Border_0: UBorder;
        Basic_Menu_ColorBarVertical_C_0: UBasic_Menu_ColorBarVertical_C;
        Basic_Menu_ColorBarVertical: UBasic_Menu_ColorBarVertical_C;
        currentProgress: number;
    };
    readonly __staticRegistry: 
        UHUD_Frozen_C['__static_UHUD_Frozen_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Frozen_C['__properties_UHUD_Frozen_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

