declare interface UMinigame_LanePrompt_C extends UMinigamePromptLaneWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_AdvancedLabel: UUI_AdvancedLabel_C;
    Trail: UBasic_Image_C;
    ButtonOverlay: UOverlay;
    BG2: UBasic_Image_C;
    BG: UBasic_Image_C;
    ReleasedAnim: UWidgetAnimation;
    PressedAnim: UWidgetAnimation;
    Trailsize: number;
    TrailSizeMet: boolean;
    Size: number;
    Inside: boolean;
    IsButtonHeld: boolean;
    InputText: FName;
    Axis: number;
    SetInput(): void;
    SetInsideWindow(Inside: boolean): void;
    shouldMove(Move: boolean): void;
    SetProgress(Progress: number): void;
    Released(): void;
    Pressed(): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Minigame_LanePrompt(EntryPoint: number): void;
}
declare const UMinigame_LanePrompt_C: UMinigame_LanePrompt_C;

