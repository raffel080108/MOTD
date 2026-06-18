declare interface UHUD_OperationsCommandNotificationManager_C extends UUserWidget {
    readonly __static_UHUD_OperationsCommandNotificationManager_C: {
        PreConstruct(IsDesignTime: boolean): void;
        HandleSpaceRigNotification(InClaimbleText: string): void;
        Construct(): void;
        OnAccomplishmentTierClaimable(TaskAsset: UOpsComTaskAsset, Tier: number): void;
        OnOperationClaimable(DeploymentInfo: FDeploymentInfo): void;
        ExecuteUbergraph_HUD_OperationsCommandNotificationManager(EntryPoint: number): void;
    };
    readonly __properties_UHUD_OperationsCommandNotificationManager_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root: UVerticalBox;
    };
    readonly __staticRegistry: 
        UHUD_OperationsCommandNotificationManager_C['__static_UHUD_OperationsCommandNotificationManager_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_OperationsCommandNotificationManager_C['__properties_UHUD_OperationsCommandNotificationManager_C'] &
        UUserWidget['__propertyRegistry'];
}

