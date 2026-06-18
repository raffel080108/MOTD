declare interface ABP_HUD_SpaceRig_C extends ASpaceRigHUD {
    readonly __static_ABP_HUD_SpaceRig_C: {
        PlayAscensionEligibleShout(): void;
        HandlePromotionCostNotifications(): void;
        TryShowNextNotification(): void;
        FetchPromotionRewards(OutSuccess: boolean): void;
        EnqueueWindow(WidgetClass: TSoftClassPtr<UWindowWidget>): void;
        PlayerSpawned(Player: APlayerCharacter): void;
        OnVisibilityChanged(): void;
        ReceiveDestroyed(): void;
        ReceiveBeginPlay(): void;
        OnCountdownCompleted(): void;
        OnEligibleForRetirementAssignment(GameInstance: UBP_GameInstance_C): void;
        OnFSDEventActiveChanged(InFsdEvent: UFSDEvent, InIsActive: boolean): void;
        SetupTutorialMessage(): void;
        CheckForTutorialPrompt(): void;
        ReceiveNotificationQueueActivated(): void;
        ReceiveNotificationAdded(): void;
        CheatMenuRequest(): void;
        WaitAndTryNextNotification(WaitDuration: number): void;
        OnLastWindowClosed(): void;
        ReceiveResetHUD(): void;
        CreateHUDWidget(): void;
        OnCharacterRetired(CharacterClass: TSubclassOf<APlayerCharacter>, AscensionCount: number): void;
        OnIntelPointsChanged(): void;
        HandleIntelCampainChallengeNotification(): void;
        HandleIntelCampaignObjectiveNotification(): void;
        SetupNewMessageNotifications(): void;
        ExecuteUbergraph_BP_HUD_SpaceRig(EntryPoint: number): void;
    };
    readonly __properties_ABP_HUD_SpaceRig_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DefaultSceneRoot: USceneComponent;
        PlayerCharacter: APlayerCharacter;
        HUD: UHUD_SpaceRig_C;
        OwnedWidgets: UUserWidget[];
        PendingPromotionRewards: FClaimableRewardEntry[];
        PendingFirstPromotion: boolean;
        DLCSettings: UEntitlementSettings;
        CheatMenu: UWindowWidget;
        PromotionCostNotificationFlags: UPlayerCharacterID[];
        IntelObjectiveNotificationFlags: UIntelObjective[];
        IntelChallengeNotificationFlags: TSubclassOf<UIntelChallenge>[];
    };
    readonly __staticRegistry: 
        ABP_HUD_SpaceRig_C['__static_ABP_HUD_SpaceRig_C'] &
        ASpaceRigHUD['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_HUD_SpaceRig_C['__properties_ABP_HUD_SpaceRig_C'] &
        ASpaceRigHUD['__propertyRegistry'];
}

