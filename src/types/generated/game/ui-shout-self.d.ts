declare interface UUI_Shout_Self_C extends UUserWidget {
    readonly __static_UUI_Shout_Self_C: {
        CREATEDELEGATE_PROXYFUNCTION_0(InSender: APlayerCharacter, InText: string, InDuration: number): void;
        TimerEnded(): void;
        Shout(InSender: APlayerCharacter, InText: string, InDuration: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_UI_Shout_Self(EntryPoint: number): void;
    };
    readonly __properties_UUI_Shout_Self_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Shout_Text: UBasicTextBlock;
        Root_Overlay: UOverlay;
        Content_SizeBox: USizeBox;
        TimerHandle: FTimerHandle;
    };
    readonly __staticRegistry: 
        UUI_Shout_Self_C['__static_UUI_Shout_Self_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Shout_Self_C['__properties_UUI_Shout_Self_C'] &
        UUserWidget['__propertyRegistry'];
}

