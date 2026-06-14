declare interface UITM_ItemUnlockedIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UnlockedIcon: UImage;
    Ping: UWidgetAnimation;
    OutroAnim: UWidgetAnimation;
    MatchChildNotifications: boolean;
    IDArray: TArray<UObject>;
    HasNotification: boolean;
    OnNotificationRemoved: FITM_ItemUnlockedIcon_COnNotificationRemoved;
    Children: TArray<UITM_ItemUnlockedIcon_C>;
    OnChanged: FITM_ItemUnlockedIcon_COnChanged;
    Refresh(): void;
    ClearChildren(): void;
    ChildNotificationChanged(): void;
    AddChildNotification(ChildIcon: UITM_ItemUnlockedIcon_C): void;
    RemoveNotification(): void;
    SetItemIDArray(ObjectsWithID: TArray<UObject>, MatchChildNotifications: boolean): void;
    SetVisible(): void;
    HideIcon(): void;
    OnAnimFinished(): void;
    ExecuteUbergraph_ITM_ItemUnlockedIcon(EntryPoint: number): void;
    OnChanged__DelegateSignature(): void;
    OnNotificationRemoved__DelegateSignature(): void;
}
declare const UITM_ItemUnlockedIcon_C: UITM_ItemUnlockedIcon_C;

