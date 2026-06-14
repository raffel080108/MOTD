declare interface UUI_TreeOfVanityClassSelector_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_ClassIcons: UVerticalBox;
    Reward: UReward;
    OnBought: FUI_TreeOfVanityClassSelector_COnBought;
    NodeID: number;
    OnPressed: FUI_TreeOfVanityClassSelector_COnPressed;
    OnReleased: FUI_TreeOfVanityClassSelector_COnReleased;
    PreConstruct(IsDesignTime: boolean): void;
    SetData(inNodeID: number, InReward: UReward): void;
    OnPressedHandler(ClassSelectorButton: UUI_TreeOfVanityClassSelectorButton_C): void;
    OnReleasedHandler(): void;
    ExecuteUbergraph_UI_TreeOfVanityClassSelector(EntryPoint: number): void;
    OnReleased__DelegateSignature(): void;
    OnPressed__DelegateSignature(ClassSelectorButton: UUI_TreeOfVanityClassSelectorButton_C): void;
    OnBought__DelegateSignature(PlayerCharacterID: UPlayerCharacterID): void;
}
declare const UUI_TreeOfVanityClassSelector_C: UUI_TreeOfVanityClassSelector_C;

