declare interface UWB_RadarMap_SonarRadar_C extends UHUDRadarWidget {
    readonly __static_UWB_RadarMap_SonarRadar_C: {
        GetCombinedPlayerPositions(Combined: FVector[]): void;
        GetEnemyTypesTag(): FGameplayTagContainer;
        GetDetectionRange(): number;
        UpdateSonarAlpha(DeltaSeconds: number): void;
        ResetSonarAlpha(): void;
        PushBlipTransforms(Blips: UWB_Blip_C[], WorldPositions: FVector[]): void;
        UpdateTransforms(): void;
        CreateBlipWidgets(Container: UCanvasPanel, IsPlayerWidgets: boolean, WorldPositions: FVector[], Widgets: UWB_Blip_C[]): void;
        UpdateBlipWidgets(): void;
        UpdateWorldPositions(): void;
        UpdateEnabled(): void;
        TickSonarPulse(): void;
        Construct(): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        ForceUpdateRadar(): void;
        AddExtraPlayerPositions(InPlayerPosition: FVector[]): void;
        ClearExtraPlayerPositions(): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WB_RadarMap_SonarRadar(EntryPoint: number): void;
    };
    readonly __properties_UWB_RadarMap_SonarRadar_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UI_MaskedImage: UUI_MaskedImage_C;
        RadarOutline: UImage;
        RadarMaterial: UImage;
        RadarCompass: UImage;
        PlayerBlipsContainer: UCanvasPanel;
        OverlayRoot: UOverlay;
        Overlay_Rotater: UOverlay;
        EnemyBlipsContainer: UCanvasPanel;
        DetectionRange: number;
        DetectionRate: number;
        EnemyTypesTags: FGameplayTagContainer;
        BlipFadeTime: number;
        IsRadarEnabled: boolean;
        DetectedEnemyPositions: FVector[];
        EnemyBlips: UWB_Blip_C[];
        DetectedPlayerPositions: FVector[];
        PlayerBlips: UWB_Blip_C[];
        BlipAliveTime: number;
        DynamicRadarMaterial: UMaterialInstanceDynamic;
        SonarRadarPerk: UPerkAsset;
        IsToggledOff: boolean;
        ExtraDetectedPlayerPositions: FVector[];
    };
    readonly __staticRegistry: 
        UWB_RadarMap_SonarRadar_C['__static_UWB_RadarMap_SonarRadar_C'] &
        UHUDRadarWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWB_RadarMap_SonarRadar_C['__properties_UWB_RadarMap_SonarRadar_C'] &
        UHUDRadarWidget['__propertyRegistry'];
}

