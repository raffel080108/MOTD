declare interface UMissionControl_MainDialogue_C extends UFSDUserWidget {
    readonly __static_UMissionControl_MainDialogue_C: {
        PlaySubtleIntroAnimation(): void;
        PlayIntroAnimation(): void;
        SetControllerID(InControllerID: EMissionControlID): void;
        GetShoutDuration(InShout: USoundBase, duration: number): void;
        SetPreview(PreviewShout: UDialogDataAsset): void;
        Reset(): void;
        SetProgress(Progress: number, Finished: boolean): void;
        TickRunningText(): void;
        StopRunningText(): void;
        SpeakEntryManually(Entry: FDialogStruct, duration: number, AudioComponent: UAudioComponent): void;
        SpeakManually(MissionShout: UDialogDataAsset, duration: number, AudioComponent: UAudioComponent): void;
        Construct(): void;
        OnMissionShout(Text: string, duration: number, ControllerId: EMissionControlID): void;
        PreConstruct(IsDesignTime: boolean): void;
        OnMissionShoutEnd(): void;
        HideMissionShout(): void;
        StartTickHandling(): void;
        ConnectToPlayer(): void;
        DisconnectFromPlayer(): void;
        ExecuteUbergraph_MissionControl_MainDialogue(EntryPoint: number): void;
    };
    readonly __properties_UMissionControl_MainDialogue_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        MissionControl_TextAnimator: UMissionControl_TextAnimator_C;
        Image_108: UImage;
        ClassLabel: UTextBlock;
        CharacterIcon: UUI_MaskedImage_C;
        CanvasPanelRoot: UCanvasPanel;
        BorderOuter: UImage;
        BorderInner: UImage;
        AnimIn: UWidgetAnimation;
        SubtleAnimIn: UWidgetAnimation;
        PreviewShout: UDialogDataAsset;
        ManuallyControlled: boolean;
        Text: string;
        duration: number;
        StartTime: number;
        TickHandle: FTimerHandle;
        ManualSpeakComponent: UAudioComponent;
        HideHandle: FTimerHandle;
        AutoBindToPlayer: boolean;
    };
    readonly __staticRegistry: 
        UMissionControl_MainDialogue_C['__static_UMissionControl_MainDialogue_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UMissionControl_MainDialogue_C['__properties_UMissionControl_MainDialogue_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

