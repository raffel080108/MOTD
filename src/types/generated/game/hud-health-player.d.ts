declare interface UHUD_Health_Player_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    HUD_Health: UHUD_Health_Base_C;
    Construct(): void;
    ExecuteUbergraph_HUD_Health_Player(EntryPoint: number): void;
}
declare const UHUD_Health_Player_C: UHUD_Health_Player_C;

