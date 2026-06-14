declare interface IIModPage_C extends IInterface {
    GetPageInfo(Name: FText): void;
    OnPageOpened(ModHub: TScriptInterface<IIModHub_C>): void;
    OnPageClosed(): void;
}
declare const IIModPage_C: IIModPage_C;

