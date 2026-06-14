declare interface UWB_Blip_C extends UUserWidget {
    img_Blip: UImage;
    InitializeForEnemy(): void;
    InitializeForPlayer(): void;
    SetColor(Color: FLinearColor): void;
}
declare const UWB_Blip_C: UWB_Blip_C;

