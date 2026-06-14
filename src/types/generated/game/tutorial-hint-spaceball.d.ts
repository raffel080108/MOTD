declare interface UTutorial_Hint_Spaceball_C extends UTutorialHintComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    ResourceType: UResourceData;
    Resource: UCappedResource;
    ReceiveOnHidden(): void;
    ReceiveOnInitialized(): void;
    OnUse(Component: UUsableComponentBase): void;
    ExecuteUbergraph_Tutorial_Hint_Spaceball(EntryPoint: number): void;
}
declare const UTutorial_Hint_Spaceball_C: UTutorial_Hint_Spaceball_C;

