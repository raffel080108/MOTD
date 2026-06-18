declare interface AITM_BarGlass_Item_C extends ADrinkableItem {
    readonly __static_AITM_BarGlass_Item_C: {
        OnEmpty(): void;
        OnRep_ThrownGlass(): void;
        OnRep_Visible(): void;
        OnRep_IsFull(): void;
        CheckCanSalute(): boolean;
        IsDrinking(IsDrinking: boolean): void;
        PlayThrow(): number;
        PlayDrinkFoam(): void;
        PlayDrinkPlayer(): number;
        UserConstructionScript(): void;
        RecieveStartUsing(): void;
        Server_Use(): void;
        All_Drink(): void;
        All_Throw(): void;
        SetEmpty(): void;
        ReceiveBeginPlay(): void;
        SkinThrownGlass(): void;
        BndEvt__ITM_BarGlass_Item_NS_BeerFoam_ArkenStout_1_Converted_K2Node_ComponentBoundEvent_2_ActorComponentActivatedSignature__DelegateSignature(Component: UActorComponent, bReset: boolean): void;
        ExecuteUbergraph_ITM_BarGlass_Item(EntryPoint: number): void;
    };
    readonly __properties_AITM_BarGlass_Item_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SparkleDrink: UAudioComponent;
        IsFull: boolean;
        PhysicsActor: TSubclassOf<ABar_Glass_Physics_C>;
        TPMontage: UAnimMontage;
        FPMontage: UAnimMontage;
        visible: boolean;
        ThrownGlass: ABar_Glass_Physics_C;
        DelayBeforeFoamRemoval: number;
        InDelayBeforeDrink: boolean;
    };
    readonly __staticRegistry: 
        AITM_BarGlass_Item_C['__static_AITM_BarGlass_Item_C'] &
        ADrinkableItem['__staticRegistry'];
    readonly __propertyRegistry: 
        AITM_BarGlass_Item_C['__properties_AITM_BarGlass_Item_C'] &
        ADrinkableItem['__propertyRegistry'];
}

