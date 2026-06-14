declare interface ABP_Terminal_Cosmetics_C extends ABP_BaseSpaceRigConsole_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    RectLight2: URectLightComponent;
    RectLight1: URectLightComponent;
    Widget2: UWidgetComponent;
    Widget1: UWidgetComponent;
    RectLight: URectLightComponent;
    UpdateNotifications(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Terminal_Cosmetics(EntryPoint: number): void;
}
declare const ABP_Terminal_Cosmetics_C: ABP_Terminal_Cosmetics_C;

