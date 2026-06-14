declare interface UWND_SpaceRig_Chat_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    HUD_Chat: UHUD_Chat_C;
    Construct(): void;
    RestoreChat(): void;
    ExecuteUbergraph_WND_SpaceRig_Chat(EntryPoint: number): void;
}
declare const UWND_SpaceRig_Chat_C: UWND_SpaceRig_Chat_C;

