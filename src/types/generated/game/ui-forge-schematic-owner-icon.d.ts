declare interface UUI_Forge_Schematic_OwnerIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RootCanvas: UCanvasPanel;
    MaxSizer: USizeBox;
    IconOutline: UImage;
    IconFiller: UImage;
    MaxWidth: number;
    MaxHeight: number;
    Schematic: USchematic;
    FromActorClass(ItemData: UItemData): void;
    FromItemID(ItemID: UItemID): void;
    SetIconAndVisibility(Texture: UTexture2D, InColor: FLinearColor): void;
    FromSchematic(InSchematic: USchematic): void;
    SetMaxSize(InWidth: number, InHeight: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_UI_Forge_Schematic_OwnerIcon(EntryPoint: number): void;
}
declare const UUI_Forge_Schematic_OwnerIcon_C: UUI_Forge_Schematic_OwnerIcon_C;

