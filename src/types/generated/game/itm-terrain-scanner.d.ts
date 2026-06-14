declare interface AITM_TerrainScanner_C extends ATerrainScannerItem {
    UberGraphFrame: FPointerToUberGraphFrame;
    NS_Screen_Rays_Converted: UNiagaraComponent;
    SM_HandheldTablet: UStaticMeshComponent;
    PointLight: UPointLightComponent;
    HUD: TSubclassOf<UUserWidget>;
    RenderTarget: UTextureRenderTarget2D;
    AddedToInventory(ItemOwner: APlayerCharacter): void;
    OnTerrainScannerPressed(): void;
    OnTerrainScannerReleased(): void;
    ExecuteUbergraph_ITM_TerrainScanner(EntryPoint: number): void;
}
declare const AITM_TerrainScanner_C: AITM_TerrainScanner_C;

