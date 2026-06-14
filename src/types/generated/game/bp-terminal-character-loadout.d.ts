declare interface ABP_Terminal_CharacterLoadout_C extends ABP_BaseSpaceRigConsole_C {
    Notification: UChildActorComponent;
    SM_MonitorMain_003: UStaticMeshComponent;
    AMB_RR_Computers_Idle_MSS: UAudioComponent;
    PointLight: UPointLightComponent;
    UpdateNotifications(): void;
}
declare const ABP_Terminal_CharacterLoadout_C: ABP_Terminal_CharacterLoadout_C;

