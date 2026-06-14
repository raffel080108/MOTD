declare interface UHUD_Frozen_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UnfreezeProgressBar: UProgressBar;
    InstructionsLabel: UUI_AdvancedLabel_C;
    Border_1: UBorder;
    Border_0: UBorder;
    Basic_Menu_ColorBarVertical_C_0: UBasic_Menu_ColorBarVertical_C;
    Basic_Menu_ColorBarVertical: UBasic_Menu_ColorBarVertical_C;
    currentProgress: number;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnCharacterStateChanged_Event(NewState: ECharacterState): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    SetProgress(currentProgress: number): void;
    ExecuteUbergraph_HUD_Frozen(EntryPoint: number): void;
}
declare const UHUD_Frozen_C: UHUD_Frozen_C;

