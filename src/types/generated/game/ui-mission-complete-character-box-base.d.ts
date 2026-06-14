declare interface UUI_MissionComplete_CharacterBoxBase_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WindowSizeBox: USizeBox;
    StatBlockSlot: UNamedSlot;
    IconSlot: UNamedSlot;
    ContentSlot: UNamedSlot;
    AnimMoveIn: UWidgetAnimation;
    AnimOpen: UWidgetAnimation;
    AnimClose: UWidgetAnimation;
    PlayerStats: UPlayerStatsComponent;
    PlayerState: AFSDPlayerState;
    CharacterProgress: FCharacterProgress;
    OnCountingFinished: FUI_MissionComplete_CharacterBoxBase_COnCountingFinished;
    OnMoveInFinished: FUI_MissionComplete_CharacterBoxBase_COnMoveInFinished;
    PlayerId: number;
    SeeBuild: boolean;
    OnStatsLoaded: FUI_MissionComplete_CharacterBoxBase_COnStatsLoaded;
    SetBuildVisibility_BaseOnly(ShouldSeeBuild: boolean): void;
    BeginCounting(): void;
    AddStat(InputPin: FText, InputPin1: number): void;
    Init(PlayerState: AFSDPlayerState): void;
    SetBuildVisibility(ShouldSeeBuild: boolean): void;
    Construct(): void;
    BeginMoveIn(InDelay: number, InDuration: number): void;
    MoveInFinished(): void;
    ExecuteUbergraph_UI_MissionComplete_CharacterBoxBase(EntryPoint: number): void;
    OnStatsLoaded__DelegateSignature(): void;
    OnMoveInFinished__DelegateSignature(Widget: UUI_MissionComplete_CharacterBoxBase_C): void;
    OnCountingFinished__DelegateSignature(): void;
}
declare const UUI_MissionComplete_CharacterBoxBase_C: UUI_MissionComplete_CharacterBoxBase_C;

