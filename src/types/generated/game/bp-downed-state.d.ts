declare interface UBP_DownedState_C extends UDownedStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    SeeYouInHell_Particles: TSoftObjectPtr<UObject>;
    SeeYOuInHell_Charge_Particles: TSoftObjectPtr<UObject>;
    OnLoaded_4C0CAFB9405C60A5642DA2A8AFDA785B(Loaded: UObject): void;
    OnLoaded_5277138148709B6872AFA8AE00BD1B01(Loaded: UObject): void;
    OnLoaded_EE490F594C2547CD96CB63943EA06475(Loaded: UObject): void;
    OnLoaded_369215DE4E9E3D75961755AB344B6937(Loaded: UObject): void;
    ReceiveBeginPlay(): void;
    Receive_TriggerDownedBomb(): void;
    All_ShowDownedBomb(): void;
    All_ShowBombIntro(): void;
    Server_SpawnDBField(): void;
    ExecuteUbergraph_BP_DownedState(EntryPoint: number): void;
}
declare const UBP_DownedState_C: UBP_DownedState_C;

