declare interface IRadarPointInterface_C extends IInterface {
    UpdatePoint(alpha: number, verticalDist: number, destroy: boolean): void;
    Get3dPosition(Pos: FVector): void;
    InitPoint(RadarComponent: URadarPointComponent, success: boolean): void;
}
declare const IRadarPointInterface_C: IRadarPointInterface_C;

