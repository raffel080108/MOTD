declare interface UHUD_TempHealthDisplay_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Label: UBasic_Label_C;
    Basic_Image: UBasic_Image_C;
    Construct(): void;
    UpdateLabel(): void;
    Show(): void;
    Hide(): void;
    ExecuteUbergraph_HUD_TempHealthDisplay(EntryPoint: number): void;
}
declare const UHUD_TempHealthDisplay_C: UHUD_TempHealthDisplay_C;

