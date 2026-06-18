declare interface UHUD_RadarPoint_Player_C extends UUserWidget {
    readonly __static_UHUD_RadarPoint_Player_C: {
        InitPoint(RadarComponent: URadarPointComponent, success: boolean): void;
        Get3dPosition(Pos: FVector): void;
        UpdatePoint(alpha: number, verticalDist: number, destroy: boolean): void;
        Deactivate(): void;
    };
    readonly __properties_UHUD_RadarPoint_Player_C: {
        Image_0: UImage;
        Player: APlayerCharacter;
        MarkedForDestruction: boolean;
    };
    readonly __staticRegistry: 
        UHUD_RadarPoint_Player_C['__static_UHUD_RadarPoint_Player_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_RadarPoint_Player_C['__properties_UHUD_RadarPoint_Player_C'] &
        UUserWidget['__propertyRegistry'];
}

