declare interface ABP_EnhancementsConsole_C extends ABP_BaseSpaceRigConsole_C {
    Notification: UChildActorComponent;
    AMB_RR_Computers_Idle_MSS: UAudioComponent;
    Light1: UPointLightComponent;
    Light: UPointLightComponent;
    UpdateNotifications(): void;
}
declare const ABP_EnhancementsConsole_C: ABP_EnhancementsConsole_C;

