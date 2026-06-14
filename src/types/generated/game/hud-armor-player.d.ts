declare interface UHUD_Armor_Player_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    HUD_Armor: UHUD_Armor_Base_C;
    Construct(): void;
    ExecuteUbergraph_HUD_Armor_Player(EntryPoint: number): void;
}
declare const UHUD_Armor_Player_C: UHUD_Armor_Player_C;

