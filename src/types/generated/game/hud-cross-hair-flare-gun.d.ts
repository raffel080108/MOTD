declare interface UHUD_CrossHair_FlareGun_C extends UUserWidget {
    readonly __static_UHUD_CrossHair_FlareGun_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_HUD_CrossHair_FlareGun(EntryPoint: number): void;
    };
    readonly __properties_UHUD_CrossHair_FlareGun_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Image_8: UImage;
        Image_7: UImage;
        Image_6: UImage;
        Image_5: UImage;
        Image_4: UImage;
        Image_2: UImage;
        Image_1: UImage;
        Dot: UImage;
    };
    readonly __staticRegistry: 
        UHUD_CrossHair_FlareGun_C['__static_UHUD_CrossHair_FlareGun_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_CrossHair_FlareGun_C['__properties_UHUD_CrossHair_FlareGun_C'] &
        UUserWidget['__propertyRegistry'];
}

