declare interface UBasic_VerticalBox_Simple_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Visuals_Box: UHorizontalBox;
    Right_Spacer: USpacer;
    Left_Spacer: USpacer;
    Content: UNamedSlot;
    Mirror: boolean;
    SetContentAlignment(Out_Content_Horizontal: EHorizontalAlignment, Out_Content_Vertical: EVerticalAlignment): void;
    SetMirrored(OutMirror: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_VerticalBox_Simple(EntryPoint: number): void;
}
declare const UBasic_VerticalBox_Simple_C: UBasic_VerticalBox_Simple_C;

