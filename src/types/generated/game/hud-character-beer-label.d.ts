declare interface UHUD_CharacterBeerLabel_C extends UUserWidget {
    readonly __static_UHUD_CharacterBeerLabel_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_HUD_CharacterBeerLabel(EntryPoint: number): void;
    };
    readonly __properties_UHUD_CharacterBeerLabel_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        BarBuff: UImage;
        buff: UTemporaryBuff;
    };
    readonly __staticRegistry: 
        UHUD_CharacterBeerLabel_C['__static_UHUD_CharacterBeerLabel_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_CharacterBeerLabel_C['__properties_UHUD_CharacterBeerLabel_C'] &
        UUserWidget['__propertyRegistry'];
}

