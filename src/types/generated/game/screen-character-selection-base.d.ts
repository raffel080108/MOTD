declare interface USCREEN_CharacterSelection_Base_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Back: FSCREEN_CharacterSelection_Base_CBack;
    Show(): void;
    ExecuteUbergraph_SCREEN_CharacterSelection_Base(EntryPoint: number): void;
    Back__DelegateSignature(): void;
}
declare const USCREEN_CharacterSelection_Base_C: USCREEN_CharacterSelection_Base_C;

