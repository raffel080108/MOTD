declare interface UHUD_LaserPointerDisplay_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher_Scanbox: UWidgetSwitcher;
    TextBlock_Unknown: UTextBlock;
    ResourceIconR: UImage;
    ResourceIconL: UImage;
    ResourceIconHolder: UHorizontalBox;
    LBL_RightMouse: UUI_AdvancedLabel_C;
    LBL_LeftMouse: UUI_AdvancedLabel_C;
    ItemLabel: UTextBlock;
    HUD_LaserPointerScanProgress: UHUD_LaserPointerScanProgress_C;
    DistLabel: UTextBlock;
    Description: UTextBlock;
    Intro: UWidgetAnimation;
    FadeIconIn: UWidgetAnimation;
    Character: APlayerCharacter;
    LastHit: FHitResult;
    IsNew: boolean;
    ScanTimeLeft: number;
    ScanTotalTime: number;
    ScanComplete: FHUD_LaserPointerDisplay_CScanComplete;
    IsScanVisible: boolean;
    Handle_Show: FTimerHandle;
    SetIconAndTint(Texture: UTexture2D, Tint: FLinearColor): void;
    UpdateCommands(): void;
    Finished_2FB3B1024A257294FCE363AC76E7AAF6(): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnBoscoChanged(Bosco: ABosco): void;
    StartScan(): void;
    StopScan(): void;
    OnUnequipped(): void;
    OnEquipped(): void;
    Construct(): void;
    StartShow(): void;
    ExecuteUbergraph_HUD_LaserPointerDisplay(EntryPoint: number): void;
    ScanComplete__DelegateSignature(): void;
}
declare const UHUD_LaserPointerDisplay_C: UHUD_LaserPointerDisplay_C;

