declare interface UHUD_CrossHair_PickAxe_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_1: UImage;
    PreConstruct(IsDesignTime: boolean): void;
    SetData(Pickaxe: APickaxeItem): void;
    ExecuteUbergraph_HUD_CrossHair_PickAxe(EntryPoint: number): void;
}
declare const UHUD_CrossHair_PickAxe_C: UHUD_CrossHair_PickAxe_C;

