declare interface ABP_BaseSpaceRigConsole_C extends AActor {
    readonly __static_ABP_BaseSpaceRigConsole_C: {
        UpdateNotifications(): void;
        SetNotificationText(NewText: string): void;
        ShowNotification(IsVisible: boolean): void;
        IsNewPlayer(PlayerController: ABP_PlayerController_SpaceRig_C, IsNewPlayer: boolean): void;
        GetConsoleScreenWidgets(OutWidgets: UWidgetComponent[]): void;
        UserConstructionScript(): void;
        ReceiveBeginPlay(): void;
        BndEvt__InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
        OnOpenConsole(InPlayerController: ABP_PlayerController_SpaceRig_C): void;
        OnWindowCreated(WindowWidget: UWindowWidget): void;
        PIE_QuickUse(): void;
        OnWindowClosed(WindowWidget: UWindowWidget): void;
        OnWindowOpened(WindowWidget: UWindowWidget): void;
        OnResourceChanged(Resource: UResourceData, previousAmount: number, newAmount: number): void;
        OnTaskTierClaimable(TaskAsset: UOpsComTaskAsset, Tier: number): void;
        OnDeploymentClaimable(DeploymentInfo: FDeploymentInfo): void;
        OnNotificationsChanged(): void;
        UpdateNotificationsWithDelay(): void;
        OnPlayerProgressChanged(Rank: number, Stars: number): void;
        OnLocalPlayerChanged(): void;
        ExecuteUbergraph_BP_BaseSpaceRigConsole(EntryPoint: number): void;
    };
    readonly __properties_ABP_BaseSpaceRigConsole_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextRender: UTextRenderComponent;
        Widget: UWidgetComponent;
        StaticMesh1: UStaticMeshComponent;
        Box: UBoxComponent;
        InstantUsable: UInstantUsable;
        DefaultSceneRoot: USceneComponent;
        PlayersThatHaveUsed: ABP_PlayerController_SpaceRig_C[];
        StatCountKey: string;
        ConsoleTitle: string;
        NotificationText: string;
        NotificationIcon: UTexture2D;
        NotificationOffset: number;
        ConsoleWindowClass: TSoftClassPtr<UWindowWidget>;
        CreateMenuOnStartup: boolean;
        WindowInstance: UWindowWidget;
    };
    readonly __staticRegistry: 
        ABP_BaseSpaceRigConsole_C['__static_ABP_BaseSpaceRigConsole_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_BaseSpaceRigConsole_C['__properties_ABP_BaseSpaceRigConsole_C'] &
        AActor['__propertyRegistry'];
}

