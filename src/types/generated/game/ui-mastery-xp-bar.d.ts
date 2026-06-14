declare interface UUI_MasteryXPBar_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ProgressBar: UProgressBar;
    Percent: number;
    CurrentMasteryXPBarPercentage: number;
    OnMasteryXPBarAnimationFinished: FUI_MasteryXPBar_COnMasteryXPBarAnimationFinished;
    OverflowCount: number;
    OnMasteryLevelUp: FUI_MasteryXPBar_COnMasteryLevelUp;
    TestPercent: number;
    SetTestPercent(InValue: number): void;
    GetXPPercent(XP: number, Percent: number): void;
    SetPercent(InProgress: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_MasteryXPBar(EntryPoint: number): void;
    OnMasteryLevelUp__DelegateSignature(): void;
    OnMasteryXPBarAnimationFinished__DelegateSignature(): void;
}
declare const UUI_MasteryXPBar_C: UUI_MasteryXPBar_C;

