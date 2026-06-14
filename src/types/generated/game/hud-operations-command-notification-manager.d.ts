declare interface UHUD_OperationsCommandNotificationManager_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root: UVerticalBox;
    PreConstruct(IsDesignTime: boolean): void;
    HandleSpaceRigNotification(InClaimbleText: FText): void;
    Construct(): void;
    OnAccomplishmentTierClaimable(TaskAsset: UOpsComTaskAsset, Tier: number): void;
    OnOperationClaimable(DeploymentInfo: FDeploymentInfo): void;
    ExecuteUbergraph_HUD_OperationsCommandNotificationManager(EntryPoint: number): void;
}
declare const UHUD_OperationsCommandNotificationManager_C: UHUD_OperationsCommandNotificationManager_C;

