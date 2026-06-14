declare interface UTutorial_Hint_Ammo_C extends UTutorialHintComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveOnInitialized(): void;
    OnRegisterRCAmmoTutorial(): void;
    ExecuteUbergraph_Tutorial_Hint_Ammo(EntryPoint: number): void;
}
declare const UTutorial_Hint_Ammo_C: UTutorial_Hint_Ammo_C;

