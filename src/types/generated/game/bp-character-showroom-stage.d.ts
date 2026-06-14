declare interface ABP_Character_ShowroomStage_C extends AShowroomStage {
    UberGraphFrame: FPointerToUberGraphFrame;
    Capture_CharacterSelectionMenu: UShowroomSceneCaptureComponent;
    Capture_LoadoutMenu: UShowroomSceneCaptureComponent;
    NS_Showroom_Smoke: UNiagaraComponent;
    SpotLight3: USpotLightComponent;
    Capture_WardrobeMenuZoomIn: UShowroomSceneCaptureComponent;
    Camera: UCameraComponent;
    Capture_WardrobeZoomOut: UShowroomSceneCaptureComponent;
    Capture_Wardrobe: UShowroomSceneCaptureComponent;
    StaticMesh: UStaticMeshComponent;
    Capture_EndOfRunMenu: UShowroomSceneCaptureComponent;
    Capture_EscapeMenu: UShowroomSceneCaptureComponent;
    SpotLight2: USpotLightComponent;
    SpotLight: USpotLightComponent;
    SpotLight1: USpotLightComponent;
    PreviewMesh: USkeletalMeshComponent;
    UpdateActorsToHide(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Character_ShowroomStage(EntryPoint: number): void;
}
declare const ABP_Character_ShowroomStage_C: ABP_Character_ShowroomStage_C;

