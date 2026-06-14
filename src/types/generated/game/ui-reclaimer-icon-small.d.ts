declare interface UUI_ReclaimerIcon_Small_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Icon_SizeBox: USizeBox;
    Icon_Image: UBasicImage;
    CharacterData: UPlayerCharacterData;
    Empty_Icon: UTexture2D;
    Empty_Color: FBasicColor;
    Background_Color: FBasicColor;
    FromCharacterArray(InIndex: number, InNumPlayers: number, InIsClassLocked: boolean, inArray: TArray<UPlayerCharacterID>, OutIconColor: FLinearColor): void;
    FromCharacterID(InCharacterID: UPlayerCharacterID, OutIconColor: FLinearColor): void;
    FromCharacterData(InCharacterData: UPlayerCharacterData, OutIconColor: FLinearColor): void;
    SetBackgroundColor(InColor: FBasicColor): void;
    SetIconSize(InSize: number): void;
    SetIcon(InIcon: UTexture2D, InIconColor: FBasicColor): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_ReclaimerIcon_Small(EntryPoint: number): void;
}
declare const UUI_ReclaimerIcon_Small_C: UUI_ReclaimerIcon_Small_C;

