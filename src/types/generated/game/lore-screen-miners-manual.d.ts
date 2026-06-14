declare interface ULoreScreen_MinersManual_C extends ULoreScreen_Master_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    LoreScreen_Template: ULoreScreen_Template_C;
    Image_381: UImage;
    IsHovering: boolean;
    HoverSound: UAudioComponent;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_LoreScreen_MinersManual(EntryPoint: number): void;
}
declare const ULoreScreen_MinersManual_C: ULoreScreen_MinersManual_C;

