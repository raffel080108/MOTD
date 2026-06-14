declare interface UOptions_Tab_GFX_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PlatformSwitcher: UWidgetSwitcher;
    Options_Tab_GFX_Steam: UOptions_Tab_GFX_Steam_C;
    Options_Tab_GFX_Console: UOptions_Tab_GFX_Console_C;
    Platform: EFSDTargetPlatform;
    SetPlatform(Platform: EFSDTargetPlatform): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_Tab_GFX(EntryPoint: number): void;
}
declare const UOptions_Tab_GFX_C: UOptions_Tab_GFX_C;

