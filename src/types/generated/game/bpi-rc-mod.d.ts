declare interface IBPI_RCMod_C extends IInterface {
    readonly __static_IBPI_RCMod_C: {
        OnInitialise(modManager: TScriptInterface<IBPI_RCModManager_C>, LocalPlayerController: APlayerController): void;
        OnManagerClosed(): void;
        OnManagerOpened(): void;
        GetModUI(modUI: TScriptInterface<IBPI_RCModUI_C>[]): void;
        GetModInfo(modName: string, modAnthor: string, modVersion: string): void;
    };
    readonly __staticRegistry: 
        IBPI_RCMod_C['__static_IBPI_RCMod_C'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

