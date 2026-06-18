declare interface UHUD_CrossHair_BasicDot_C extends UUserWidget {
    readonly __static_UHUD_CrossHair_BasicDot_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_HUD_CrossHair_BasicDot(EntryPoint: number): void;
    };
    readonly __properties_UHUD_CrossHair_BasicDot_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Image_1: UImage;
    };
    readonly __staticRegistry: 
        UHUD_CrossHair_BasicDot_C['__static_UHUD_CrossHair_BasicDot_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_CrossHair_BasicDot_C['__properties_UHUD_CrossHair_BasicDot_C'] &
        UUserWidget['__propertyRegistry'];
}

