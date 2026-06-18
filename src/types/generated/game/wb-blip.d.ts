declare interface UWB_Blip_C extends UUserWidget {
    readonly __static_UWB_Blip_C: {
        InitializeForEnemy(): void;
        InitializeForPlayer(): void;
        SetColor(Color: FLinearColor): void;
    };
    readonly __properties_UWB_Blip_C: {
        img_Blip: UImage;
    };
    readonly __staticRegistry: 
        UWB_Blip_C['__static_UWB_Blip_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWB_Blip_C['__properties_UWB_Blip_C'] &
        UUserWidget['__propertyRegistry'];
}

