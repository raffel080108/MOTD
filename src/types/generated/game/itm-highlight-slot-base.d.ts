declare interface UITM_HighlightSlotBase_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    OnEntryHovered: FITM_HighlightSlotBase_COnEntryHovered;
    OnEntryUnhovered: FITM_HighlightSlotBase_COnEntryUnhovered;
    OnEntryClicked: FITM_HighlightSlotBase_COnEntryClicked;
    GetWeaponTags(Tags: TArray<UWeaponTagBase>): void;
    OnMouseButtonUp(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    ClearHighlighting(): void;
    HighlightFrame(): void;
    HighlightWeaponTags(InRelatedTags: TArray<UWeaponTagBase>, HasHighlight: boolean): void;
    OnMouseEnter(MyGeometry: FGeometry, MouseEvent: FPointerEvent): void;
    OnMouseLeave(MouseEvent: FPointerEvent): void;
    OnMouseClicked(): void;
    ExecuteUbergraph_ITM_HighlightSlotBase(EntryPoint: number): void;
    OnEntryClicked__DelegateSignature(Entry: UITM_HighlightSlotBase_C): void;
    OnEntryUnhovered__DelegateSignature(Entry: UITM_HighlightSlotBase_C): void;
    OnEntryHovered__DelegateSignature(Entry: UITM_HighlightSlotBase_C): void;
}
declare const UITM_HighlightSlotBase_C: UITM_HighlightSlotBase_C;

