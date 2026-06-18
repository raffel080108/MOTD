declare interface UITM_PhazeSuit_Charge_C extends UUserWidget {
    readonly __static_UITM_PhazeSuit_Charge_C: {
        SetPercent(InPercent: number): void;
        SetUsed(IsChargeUsed: boolean): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_ITM_PhazeSuit_Charge(EntryPoint: number): void;
    };
    readonly __properties_UITM_PhazeSuit_Charge_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ProgressBar_Middle: UProgressBar;
        ProgressBar_Left: UProgressBar;
        Overlay_SidePip: UOverlay;
        Overlay_MidPip: UOverlay;
        I_Middle_Outline_1: UImage;
        I_Left_Outline: UImage;
        Index: number;
        Total: number;
    };
    readonly __staticRegistry: 
        UITM_PhazeSuit_Charge_C['__static_UITM_PhazeSuit_Charge_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_PhazeSuit_Charge_C['__properties_UITM_PhazeSuit_Charge_C'] &
        UUserWidget['__propertyRegistry'];
}

