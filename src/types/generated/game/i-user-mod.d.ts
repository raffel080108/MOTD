declare interface IIUserMod_C extends IInterface {
    GetModInfo(Name: FText, Author: FText, Version: FText, ShowInModsList: boolean): void;
    GetModPages(Pages: TArray<TScriptInterface<IIModPage_C>>): void;
    OnModLoaded(ModHub: TScriptInterface<IIModHub_C>, LocalPlayer: APlayerController): void;
    OnModOpened(): void;
    OnModClosed(): void;
    OnHubOpened(): void;
    OnHubClosed(): void;
}
declare const IIUserMod_C: IIUserMod_C;

