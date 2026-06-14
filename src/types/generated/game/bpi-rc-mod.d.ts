declare interface IBPI_RCMod_C extends IInterface {
    OnInitialise(modManager: TScriptInterface<IBPI_RCModManager_C>, LocalPlayerController: APlayerController): void;
    OnManagerClosed(): void;
    OnManagerOpened(): void;
    GetModUI(modUI: TArray<TScriptInterface<IBPI_RCModUI_C>>): void;
    GetModInfo(modName: FText, modAnthor: FText, modVersion: FText): void;
}
declare const IBPI_RCMod_C: IBPI_RCMod_C;

