declare interface UUI_InputIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RootOverlay: UOverlay;
    Icon: UImage;
    Settings: FStruct_InputIcon;
    GetBrushTint(IsTintable: boolean, OutputColor: FLinearColor): void;
    GetIconSize(InTexture: UTexture2D, OutSize: FVector2D): void;
    Refresh(): void;
    SetSettings(InSettings: FStruct_InputIcon): void;
    GetCurrentMenuAction(OutSource: EFSDInputSource): FName;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnInputSourceChanged(InputSource: EFSDInputSource): void;
    ExecuteUbergraph_UI_InputIcon(EntryPoint: number): void;
}
declare const UUI_InputIcon_C: UUI_InputIcon_C;

