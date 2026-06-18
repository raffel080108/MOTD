declare interface UUI_InputIcon_C extends UUserWidget {
    readonly __static_UUI_InputIcon_C: {
        GetBrushTint(IsTintable: boolean, OutputColor: FLinearColor): void;
        GetIconSize(InTexture: UTexture2D, OutSize: FVector2D): void;
        Refresh(): void;
        SetSettings(InSettings: FStruct_InputIcon): void;
        GetCurrentMenuAction(OutSource: EFSDInputSource): string;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnInputSourceChanged(InputSource: EFSDInputSource): void;
        ExecuteUbergraph_UI_InputIcon(EntryPoint: number): void;
    };
    readonly __properties_UUI_InputIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RootOverlay: UOverlay;
        Icon: UImage;
        Settings: FStruct_InputIcon;
    };
    readonly __staticRegistry: 
        UUI_InputIcon_C['__static_UUI_InputIcon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_InputIcon_C['__properties_UUI_InputIcon_C'] &
        UUserWidget['__propertyRegistry'];
}

