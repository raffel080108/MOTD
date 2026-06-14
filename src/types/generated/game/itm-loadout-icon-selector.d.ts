declare interface UITM_LoadoutIconSelector_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SkinLabel: UTextBlock;
    IconGrid: UUniformGridPanel;
    Border_1: UBorder;
    Columns: number;
    OnIconSelected: FITM_LoadoutIconSelector_COnIconSelected;
    TempIconList: TArray<UTexture2D>;
    FillGrid(): void;
    SetData(): void;
    OnIconClicked(Texture: UTexture2D, ImageIndex: number): void;
    ExecuteUbergraph_ITM_LoadoutIconSelector(EntryPoint: number): void;
    OnIconSelected__DelegateSignature(Texture: UTexture2D, ImageIndex: number): void;
}
declare const UITM_LoadoutIconSelector_C: UITM_LoadoutIconSelector_C;

