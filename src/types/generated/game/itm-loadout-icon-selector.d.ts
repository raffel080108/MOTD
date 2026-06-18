declare interface UITM_LoadoutIconSelector_C extends UUserWidget {
    readonly __static_UITM_LoadoutIconSelector_C: {
        FillGrid(): void;
        SetData(): void;
        OnIconClicked(Texture: UTexture2D, ImageIndex: number): void;
        ExecuteUbergraph_ITM_LoadoutIconSelector(EntryPoint: number): void;
        OnIconSelected__DelegateSignature(Texture: UTexture2D, ImageIndex: number): void;
    };
    readonly __properties_UITM_LoadoutIconSelector_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SkinLabel: UTextBlock;
        IconGrid: UUniformGridPanel;
        Border_1: UBorder;
        Columns: number;
        OnIconSelected: FITM_LoadoutIconSelector_COnIconSelected;
        TempIconList: UTexture2D[];
    };
    readonly __staticRegistry: 
        UITM_LoadoutIconSelector_C['__static_UITM_LoadoutIconSelector_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_LoadoutIconSelector_C['__properties_UITM_LoadoutIconSelector_C'] &
        UUserWidget['__propertyRegistry'];
}

