declare interface UMinigame_ButtonSequenceImage_Widget_C extends UMinigameButtonSequenceImage {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_AdvancedLabel: UUI_AdvancedLabel_C;
    Progress: UProgressBar;
    ButtonOverlay: UOverlay;
    BG2: UBasic_Image_C;
    BG: UBasic_Image_C;
    StartAnim: UWidgetAnimation;
    ChangeColorAnim: UWidgetAnimation;
    CompleteAnim: UWidgetAnimation;
    PlayingAnim: boolean;
    Size: number;
    PlaybackTime: number;
    PlaybackSpeed: number;
    SetupPlaybackSpeed(): void;
    SetProgress(Progress: number): void;
    SetCompleted(Color: FLinearColor): void;
    SetColor(Color: FLinearColor, success: boolean): void;
    StartAnimation(): void;
    SetTexture(Texture: FName, Axis: number): void;
    Construct(): void;
    ExecuteUbergraph_Minigame_ButtonSequenceImage_Widget(EntryPoint: number): void;
}
declare const UMinigame_ButtonSequenceImage_Widget_C: UMinigame_ButtonSequenceImage_Widget_C;

