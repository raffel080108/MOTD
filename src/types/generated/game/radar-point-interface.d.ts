declare interface IRadarPointInterface_C extends IInterface {
    readonly __static_IRadarPointInterface_C: {
        UpdatePoint(alpha: number, verticalDist: number, destroy: boolean): void;
        Get3dPosition(Pos: FVector): void;
        InitPoint(RadarComponent: URadarPointComponent, success: boolean): void;
    };
    readonly __staticRegistry: 
        IRadarPointInterface_C['__static_IRadarPointInterface_C'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

