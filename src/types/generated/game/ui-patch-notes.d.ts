declare interface UUI_PatchNotes_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ScrollArrow_Right: UBasic_ScrollArrow_C;
    ScrollArrow_Left: UBasic_ScrollArrow_C;
    PatchTextBlock: URichTextBlock;
    Basic_ScrollBarBox: UBasic_ScrollBarBox_C;
    Basic_Menu_SmallWindowWithHeader: UBasic_Menu_SmallWindowWithHeader_Redesign_C;
    PatchNoteIndex: number;
    PatchNoteHeaders_Steam: TArray<FText>;
    PatchNotes_Steam: TArray<FText>;
    PatchNoteHeaders_Xbox: TArray<FText>;
    PatchNotes_Xbox: TArray<FText>;
    Headers: TArray<FText>;
    Notes: TArray<FText>;
    PatchNoteHeaders_Sony: TArray<FText>;
    PatchNotes_Sony: TArray<FText>;
    SelectByPlatform(Default: TArray<FText>, Xbox: TArray<FText>, Sony: TArray<FText>): TArray<FText>;
    UpdatePatchNotes(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__ScrollArrow_Left_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    BndEvt__ScrollArrow_Right_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    ExecuteUbergraph_UI_PatchNotes(EntryPoint: number): void;
}
declare const UUI_PatchNotes_C: UUI_PatchNotes_C;

