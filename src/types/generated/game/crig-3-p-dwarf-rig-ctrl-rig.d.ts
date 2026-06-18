declare interface UCRIG_3P_Dwarf_Rig_CtrlRig_C extends UControlRig {
    readonly __properties_UCRIG_3P_Dwarf_Rig_CtrlRig_C: {
        SpineTurn: number;
        LeftHandRel: FTransform;
        RightHandRel: FTransform;
        pitch: number;
        PivotStart: FTransform;
        AimLeftSide: number;
        AimRightSide: number;
    };
    readonly __staticRegistry: 
        UControlRig['__staticRegistry'];
    readonly __propertyRegistry: 
        UCRIG_3P_Dwarf_Rig_CtrlRig_C['__properties_UCRIG_3P_Dwarf_Rig_CtrlRig_C'] &
        UControlRig['__propertyRegistry'];
}

