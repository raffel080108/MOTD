declare interface UHUD_CrossHair_PickAxe_C extends UUserWidget {
    readonly __static_UHUD_CrossHair_PickAxe_C: {
        PreConstruct(IsDesignTime: boolean): void;
        SetData(Pickaxe: APickaxeItem): void;
        ExecuteUbergraph_HUD_CrossHair_PickAxe(EntryPoint: number): void;
    };
    readonly __properties_UHUD_CrossHair_PickAxe_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Image_1: UImage;
    };
    readonly __staticRegistry: 
        UHUD_CrossHair_PickAxe_C['__static_UHUD_CrossHair_PickAxe_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_CrossHair_PickAxe_C['__properties_UHUD_CrossHair_PickAxe_C'] &
        UUserWidget['__propertyRegistry'];
}

