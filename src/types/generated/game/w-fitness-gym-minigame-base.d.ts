declare interface UW_FitnessGym_Minigame_Base_C extends UGymMinigameBaseWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Value: number;
    IFrameOffColor: FLinearColor;
    IFrameOnColor: FLinearColor;
    HitAreaMaxValue: number;
    DefaultExerciseIcon: UTexture2D;
    LifeBrush: FSlateBrush;
    UnLifeBrush: FSlateBrush;
    GymType: EGymGamemode;
    GetType(NewParam: EGymGamemode): void;
    GetCrosshairValueSize(Value: number): void;
    CaluclateCorrectionValue(Value: number): void;
    Construct(): void;
    ExecuteUbergraph_W_FitnessGym_Minigame_Base(EntryPoint: number): void;
}
declare const UW_FitnessGym_Minigame_Base_C: UW_FitnessGym_Minigame_Base_C;

