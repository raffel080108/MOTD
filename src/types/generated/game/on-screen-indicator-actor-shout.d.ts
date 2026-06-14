declare interface UOnScreenIndicator_Actor_Shout_C extends UShoutWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ShoutBox: UUI_ShoutBox_C;
    CalculateScreenPos(): FVector2D;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    Construct(): void;
    OnShout(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__OnScreenIndicator_Actor_Shout_ShoutBox_K2Node_ComponentBoundEvent_0_OnShoutActiveChanged__DelegateSignature(InShoutActive: boolean): void;
    UpdateScreenPosAndDistance(): void;
    ExecuteUbergraph_OnScreenIndicator_Actor_Shout(EntryPoint: number): void;
}
declare const UOnScreenIndicator_Actor_Shout_C: UOnScreenIndicator_Actor_Shout_C;

