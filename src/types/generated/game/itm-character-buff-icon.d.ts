declare interface UITM_CharacterBuffIcon_C extends UFSDUserWidget {
    readonly __static_UITM_CharacterBuffIcon_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnTemporaryBuffChanged(buff: UTemporaryBuff, AffectedPlayer: APlayerCharacter): void;
        ExecuteUbergraph_ITM_CharacterBuffIcon(EntryPoint: number): void;
    };
    readonly __properties_UITM_CharacterBuffIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SizeBox_0: USizeBox;
        HBox_Beers: UHorizontalBox;
        Intro: UWidgetAnimation;
        Size: number;
    };
    readonly __staticRegistry: 
        UITM_CharacterBuffIcon_C['__static_UITM_CharacterBuffIcon_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_CharacterBuffIcon_C['__properties_UITM_CharacterBuffIcon_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

