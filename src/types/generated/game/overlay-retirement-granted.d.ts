declare interface UOVERLAY_RetirementGranted_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Text_MissionStatus: UTextBlock;
    Text_Mission: UTextBlock;
    PlayerIconScaler: UCanvasPanel;
    HUD_PlayerClass_Icon: UHUD_PlayerClass_Icon_C;
    BGgradientTop: UImage;
    BGgradientBottom: UImage;
    Enter: UWidgetAnimation;
    IconIntro: UWidgetAnimation;
    IconOutro: UWidgetAnimation;
    OnFinished: FOVERLAY_RetirementGranted_COnFinished;
    PreConstruct(IsDesignTime: boolean): void;
    Play(CharacterClass: UPlayerCharacterID, RetirementCount: number): void;
    Construct(): void;
    OnEnterFinished(): void;
    OnIntroFinished(): void;
    PlayOutro(duration: number): void;
    ExecuteUbergraph_OVERLAY_RetirementGranted(EntryPoint: number): void;
    OnFinished__DelegateSignature(): void;
}
declare const UOVERLAY_RetirementGranted_C: UOVERLAY_RetirementGranted_C;

