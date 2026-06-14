declare interface IIModHub_C extends IInterface {
    IsHubOpen(): boolean;
    GetModsList(Mods: TArray<TScriptInterface<IIUserMod_C>>): void;
    LoadMod(UserMod: TSoftClassPtr<AActor>): void;
    UnloadMod(RogueMod: TScriptInterface<IIUserMod_C>): void;
    RegisterMod(Mod: TScriptInterface<IIUserMod_C>): void;
    OpenPage(page: TScriptInterface<IIModPage_C>): void;
    OpenHub(): void;
    CloseHub(): void;
    ShowNotification(Title: FText, Message: FText, DisplayTime: number): void;
}
declare const IIModHub_C: IIModHub_C;

