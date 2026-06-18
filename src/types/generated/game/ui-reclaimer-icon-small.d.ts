declare interface UUI_ReclaimerIcon_Small_C extends UUserWidget {
    readonly __static_UUI_ReclaimerIcon_Small_C: {
        FromCharacterArray(InIndex: number, InNumPlayers: number, InIsClassLocked: boolean, inArray: UPlayerCharacterID[], OutIconColor: FLinearColor): void;
        FromCharacterID(InCharacterID: UPlayerCharacterID, OutIconColor: FLinearColor): void;
        FromCharacterData(InCharacterData: UPlayerCharacterData, OutIconColor: FLinearColor): void;
        SetBackgroundColor(InColor: FBasicColor): void;
        SetIconSize(InSize: number): void;
        SetIcon(InIcon: UTexture2D, InIconColor: FBasicColor): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_ReclaimerIcon_Small(EntryPoint: number): void;
    };
    readonly __properties_UUI_ReclaimerIcon_Small_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Icon_SizeBox: USizeBox;
        Icon_Image: UBasicImage;
        CharacterData: UPlayerCharacterData;
        Empty_Icon: UTexture2D;
        Empty_Color: FBasicColor;
        Background_Color: FBasicColor;
    };
    readonly __staticRegistry: 
        UUI_ReclaimerIcon_Small_C['__static_UUI_ReclaimerIcon_Small_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_ReclaimerIcon_Small_C['__properties_UUI_ReclaimerIcon_Small_C'] &
        UUserWidget['__propertyRegistry'];
}

