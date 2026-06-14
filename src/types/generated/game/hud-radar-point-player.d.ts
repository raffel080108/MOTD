declare interface UHUD_RadarPoint_Player_C extends UUserWidget {
    Image_0: UImage;
    Player: APlayerCharacter;
    MarkedForDestruction: boolean;
    InitPoint(RadarComponent: URadarPointComponent, success: boolean): void;
    Get3dPosition(Pos: FVector): void;
    UpdatePoint(alpha: number, verticalDist: number, destroy: boolean): void;
    Deactivate(): void;
}
declare const UHUD_RadarPoint_Player_C: UHUD_RadarPoint_Player_C;

