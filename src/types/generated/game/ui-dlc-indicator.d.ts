declare interface UUI_DLC_Indicator_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_Canvas: UCanvasPanel;
    DLC_SizeBox: USizeBox;
    Size: number;
    Tint: ENUM_MenuColors;
    DLC: UBaseEntitlement;
    SetFromDLC(InFromDLC: UBaseEntitlement): void;
    SetFromSkin(InItem: UItemSkin): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_UI_DLC_Indicator(EntryPoint: number): void;
}
declare const UUI_DLC_Indicator_C: UUI_DLC_Indicator_C;

