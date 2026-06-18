declare interface UITM_ItemUnlockedIcon_C extends UUserWidget {
    readonly __static_UITM_ItemUnlockedIcon_C: {
        Refresh(): void;
        ClearChildren(): void;
        ChildNotificationChanged(): void;
        AddChildNotification(ChildIcon: UITM_ItemUnlockedIcon_C): void;
        RemoveNotification(): void;
        SetItemIDArray(ObjectsWithID: UObject[], MatchChildNotifications: boolean): void;
        SetVisible(): void;
        HideIcon(): void;
        OnAnimFinished(): void;
        ExecuteUbergraph_ITM_ItemUnlockedIcon(EntryPoint: number): void;
        OnChanged__DelegateSignature(): void;
        OnNotificationRemoved__DelegateSignature(): void;
    };
    readonly __properties_UITM_ItemUnlockedIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UnlockedIcon: UImage;
        Ping: UWidgetAnimation;
        OutroAnim: UWidgetAnimation;
        MatchChildNotifications: boolean;
        IDArray: UObject[];
        HasNotification: boolean;
        OnNotificationRemoved: FITM_ItemUnlockedIcon_COnNotificationRemoved;
        Children: UITM_ItemUnlockedIcon_C[];
        OnChanged: FITM_ItemUnlockedIcon_COnChanged;
    };
    readonly __staticRegistry: 
        UITM_ItemUnlockedIcon_C['__static_UITM_ItemUnlockedIcon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_ItemUnlockedIcon_C['__properties_UITM_ItemUnlockedIcon_C'] &
        UUserWidget['__propertyRegistry'];
}

