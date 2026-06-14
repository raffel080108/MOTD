declare interface UOptions_PushToTalk_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PushToTalkLabel: UUI_AdvancedLabel_C;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_5_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_PushToTalk(EntryPoint: number): void;
}
declare const UOptions_PushToTalk_C: UOptions_PushToTalk_C;

