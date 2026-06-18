declare interface UOnScreenIndicator_Actor_Shout_C extends UShoutWidget {
    readonly __static_UOnScreenIndicator_Actor_Shout_C: {
        CalculateScreenPos(): FVector2D;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        Construct(): void;
        OnShout(): void;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__OnScreenIndicator_Actor_Shout_ShoutBox_K2Node_ComponentBoundEvent_0_OnShoutActiveChanged__DelegateSignature(InShoutActive: boolean): void;
        UpdateScreenPosAndDistance(): void;
        ExecuteUbergraph_OnScreenIndicator_Actor_Shout(EntryPoint: number): void;
    };
    readonly __properties_UOnScreenIndicator_Actor_Shout_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ShoutBox: UUI_ShoutBox_C;
    };
    readonly __staticRegistry: 
        UOnScreenIndicator_Actor_Shout_C['__static_UOnScreenIndicator_Actor_Shout_C'] &
        UShoutWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnScreenIndicator_Actor_Shout_C['__properties_UOnScreenIndicator_Actor_Shout_C'] &
        UShoutWidget['__propertyRegistry'];
}

