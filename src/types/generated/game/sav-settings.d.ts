declare interface USAV_Settings_C extends USaveGame {
    FavoriteMods: TArray<TSoftClassPtr<AActor>>;
    ShowWelcome: boolean;
    RemoveModFromFavorites(Mod: TScriptInterface<IIUserMod_C>): void;
    AddModToFavorites(Mod: TScriptInterface<IIUserMod_C>): void;
    IsModOnFavoriteList(Mod: TScriptInterface<IIUserMod_C>): boolean;
}
declare const USAV_Settings_C: USAV_Settings_C;

