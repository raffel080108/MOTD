declare interface UOptions_GameplayAnalyticsTracking_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    PreviousStatus: number;
    Construct(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    OnPersonalMetricsChanged(AllowPersonalMetrics: boolean): void;
    ExecuteUbergraph_Options_GameplayAnalyticsTracking(EntryPoint: number): void;
}
declare const UOptions_GameplayAnalyticsTracking_C: UOptions_GameplayAnalyticsTracking_C;

