declare interface UUI_Retainer_Bend_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_RetainerBox: URetainerBox;
    Content: UNamedSlot;
    Material: UMaterialInstanceDynamic;
    BendCenterPos: number;
    BendScale: number;
    BendOpacity: number;
    SetBendScale(Value: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Retainer_Bend(EntryPoint: number): void;
}
declare const UUI_Retainer_Bend_C: UUI_Retainer_Bend_C;

