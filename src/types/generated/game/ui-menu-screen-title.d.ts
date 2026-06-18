declare interface UUI_Menu_ScreenTitle_C extends UUserWidget {
    readonly __static_UUI_Menu_ScreenTitle_C: {
        SetTitle(InText: string): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_Menu_ScreenTitle(EntryPoint: number): void;
    };
    readonly __properties_UUI_Menu_ScreenTitle_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_Overlay: UOverlay;
        Bar_TextBlock: UTextBlock;
        Bar_SizeBox: USizeBox;
        Title: string;
    };
    readonly __staticRegistry: 
        UUI_Menu_ScreenTitle_C['__static_UUI_Menu_ScreenTitle_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Menu_ScreenTitle_C['__properties_UUI_Menu_ScreenTitle_C'] &
        UUserWidget['__propertyRegistry'];
}

