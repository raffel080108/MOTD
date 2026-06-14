declare interface UUI_MasteryBarSegment_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_MasteryXPBar: UUI_MasteryXPBar_C;
    TextBlock_MasteryLevel: UTextBlock;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    MasteryXPResource: UResourceData;
    MeritResource: UResourceData;
    CosmeticTokenResource: UResourceData;
    CurrentMasteryXPBarPercentage: number;
    MasteryLevel: number;
    OnResourceAmountChanged_Event(Resource: UResourceData, previousAmount: number, newAmount: number): void;
    Construct(): void;
    OnMasteryXPChanged(PrevousAmount: number, newAmount: number): void;
    UpdateMasteryLevelText(): void;
    BndEvt__UI_MasteryBarSegment_UI_MasteryXPBar_K2Node_ComponentBoundEvent_0_OnMasteryLevelUp__DelegateSignature(): void;
    ExecuteUbergraph_UI_MasteryBarSegment(EntryPoint: number): void;
}
declare const UUI_MasteryBarSegment_C: UUI_MasteryBarSegment_C;

