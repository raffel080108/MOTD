declare interface ABP_Damage_Cloud_Flamable_Base_C extends ABP_Damage_Cloud_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    element: UElementComponent;
    CombustionDamage: UDamageComponent;
    SimpleHealth: USimpleHealthComponent;
    CombustionSound: USoundBase;
    CombustionFX: UNiagaraSystem;
    BndEvt__SimpleHealth_K2Node_ComponentBoundEvent_0_DeathSig__DelegateSignature(HealthComponent: UHealthComponentBase): void;
    BndEvt__BP_Damage_Cloud_Flamable_Base_Element_K2Node_ComponentBoundEvent_2_ElementEventDelegate__DelegateSignature(EventType: UElementEventType, ElementType: UElementType): void;
    ExecuteUbergraph_BP_Damage_Cloud_Flamable_Base(EntryPoint: number): void;
}
declare const ABP_Damage_Cloud_Flamable_Base_C: ABP_Damage_Cloud_Flamable_Base_C;

