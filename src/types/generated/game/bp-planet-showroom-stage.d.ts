declare interface ABP_PlanetShowroomStage_C extends APlanetShowroomStage {
    UberGraphFrame: FPointerToUberGraphFrame;
    PostProcess: UPostProcessComponent;
    SpotLight: USpotLightComponent;
    SpotLight2: USpotLightComponent;
    SpotLight1: USpotLightComponent;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_PlanetShowroomStage(EntryPoint: number): void;
}
declare const ABP_PlanetShowroomStage_C: ABP_PlanetShowroomStage_C;

