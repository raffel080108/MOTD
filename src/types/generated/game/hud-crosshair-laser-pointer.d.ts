declare interface UHUD_Crosshair_LaserPointer_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DotImage: UImage;
    DotVisible: boolean;
    SetDotVisible(IsVisible: boolean): void;
    Construct(): void;
    ExecuteUbergraph_HUD_Crosshair_LaserPointer(EntryPoint: number): void;
}
declare const UHUD_Crosshair_LaserPointer_C: UHUD_Crosshair_LaserPointer_C;

