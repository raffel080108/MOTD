declare interface UW_FitnessGym_Minigame_Base_C extends UGymMinigameBaseWidget {
    readonly __static_UW_FitnessGym_Minigame_Base_C: {
        GetType(NewParam: EGymGamemode): void;
        GetCrosshairValueSize(Value: number): void;
        CaluclateCorrectionValue(Value: number): void;
        Construct(): void;
        ExecuteUbergraph_W_FitnessGym_Minigame_Base(EntryPoint: number): void;
    };
    readonly __properties_UW_FitnessGym_Minigame_Base_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Value: number;
        IFrameOffColor: FLinearColor;
        IFrameOnColor: FLinearColor;
        HitAreaMaxValue: number;
        DefaultExerciseIcon: UTexture2D;
        LifeBrush: FSlateBrush;
        UnLifeBrush: FSlateBrush;
        GymType: EGymGamemode;
    };
    readonly __staticRegistry: 
        UW_FitnessGym_Minigame_Base_C['__static_UW_FitnessGym_Minigame_Base_C'] &
        UGymMinigameBaseWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UW_FitnessGym_Minigame_Base_C['__properties_UW_FitnessGym_Minigame_Base_C'] &
        UGymMinigameBaseWidget['__propertyRegistry'];
}

