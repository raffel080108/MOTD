declare interface UOnScreenIndicator_UsableItem_WithDescription_C extends UFSDUserWidget {
    readonly __static_UOnScreenIndicator_UsableItem_WithDescription_C: {
        SetInteractionText(Has_Duration: boolean): void;
        SetTargetUsable(NewTarget: UUsableComponent): void;
        UnbindToTargetUsable(): void;
        BindToTargetUsable(): void;
        GetUsable(): UUsableComponentBase;
        SetTitle(InText: string, IsWarning: boolean, ForceToUpper: boolean): void;
        SetAction(NewText: string, OverrideControllerText: string): void;
        OnLoaded_BC441D07409574C539485DBA56CF9244(Loaded: UObject): void;
        OnLoaded_4637BFD54F09C8D16E0AAA9230D3C4CF(Loaded: UObject): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        BeginHover(Component: UUsableComponentBase): void;
        EndHover(): void;
        PlayUsableDeniedShout(User: AActor): void;
        PlayUsableDeniedSound(User: AActor): void;
        UpdateWidget(): void;
        OnDepositingBegin(ResourceBank: UResourceBank): void;
        Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
        ExecuteUbergraph_OnScreenIndicator_UsableItem_WithDescription(EntryPoint: number): void;
    };
    readonly __properties_UOnScreenIndicator_UsableItem_WithDescription_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        UseRichText: URichTextBlock;
        Use_Progress: UProgressBar;
        KeyLabel: UUI_AdvancedLabel_C;
        holder: UVerticalBox;
        CharacterUseComponent: UCharacterUseComponent;
        Initialized: boolean;
        DepositingStartCapacity: number;
        TargetUsableComponent: UUsableComponent;
        Last: TSoftObjectPtr<USoundCue>;
        LastSo: UUsableComponent;
    };
    readonly __staticRegistry: 
        UOnScreenIndicator_UsableItem_WithDescription_C['__static_UOnScreenIndicator_UsableItem_WithDescription_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnScreenIndicator_UsableItem_WithDescription_C['__properties_UOnScreenIndicator_UsableItem_WithDescription_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

