declare interface UHUD_OperationNotification_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Title: UTextBlock;
    StatIcon: UImage;
    KPIHeader: UTextBlock;
    Glow: UImage;
    Frame: UBorder;
    Intro: UWidgetAnimation;
    Outro: UWidgetAnimation;
    OperationInfo: FDeploymentInfo;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnIntroFinished(): void;
    OnOutroFinished(): void;
    ExecuteUbergraph_HUD_OperationNotification(EntryPoint: number): void;
}
declare const UHUD_OperationNotification_C: UHUD_OperationNotification_C;

