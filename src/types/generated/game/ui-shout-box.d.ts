declare interface UUI_ShoutBox_C extends UUserWidget {
    readonly __static_UUI_ShoutBox_C: {
        UpdateBoxWidth(): void;
        SetDistance(InDistance: number): void;
        OnShoutEnd(): void;
        ShoutStart(InSender: APlayerCharacter, InText: string, InDuration: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_ShoutBox(EntryPoint: number): void;
        OnShoutActiveChanged__DelegateSignature(InShoutActive: boolean): void;
    };
    readonly __properties_UUI_ShoutBox_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DATA_Message: UFSDLabelWidget;
        DATA_Distance: UTextBlock;
        DATA_Class: UTextBlock;
        CharacterIcon: UImage;
        AnimIntro: UWidgetAnimation;
        TimeoutHandle: FTimerHandle;
        ShoutActive: boolean;
        OnShoutActiveChanged: FUI_ShoutBox_COnShoutActiveChanged;
    };
    readonly __staticRegistry: 
        UUI_ShoutBox_C['__static_UUI_ShoutBox_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_ShoutBox_C['__properties_UUI_ShoutBox_C'] &
        UUserWidget['__propertyRegistry'];
}

