declare interface FAppliedInputContextData {
    Priority: number;
    RegistrationCount: number;
}

declare interface FBlueprintEnhancedInputActionBinding {
    InputAction: UInputAction;
    TriggerEvent: ETriggerEvent;
    FunctionNameToBind: string;
}

declare interface FBlueprintInputDebugKeyDelegateBinding {
    InputChord: FInputChord;
    InputKeyEvent: EInputEvent;
    FunctionNameToBind: string;
    bExecuteWhenPaused: boolean;
}

declare interface FDefaultContextSetting {
    InputMappingContext: TSoftObjectPtr<UInputMappingContext>;
    Priority: number;
    bAddImmediately: boolean;
    bRegisterWithUserSettings: boolean;
}

declare interface FEnhancedActionKeyMapping {
    Triggers: UInputTrigger[];
    Modifiers: UInputModifier[];
    Action: UInputAction;
    Key: FKey;
    bShouldBeIgnored: boolean;
    bHasAlwaysTickTrigger: boolean;
    SettingBehavior: EPlayerMappableKeySettingBehaviors;
    PlayerMappableKeySettings: UPlayerMappableKeySettings;
}

declare interface FInjectedInput {
    Triggers: UInputTrigger[];
    Modifiers: UInputModifier[];
}

declare interface FInjectedInputArray {
    Injected: FInjectedInput[];
}

declare interface FInputActionInstance {
    SourceAction: UInputAction;
    TriggerEvent: ETriggerEvent;
    LastTriggeredWorldTime: number;
    Triggers: UInputTrigger[];
    Modifiers: UInputModifier[];
    ElapsedProcessedTime: number;
    ElapsedTriggeredTime: number;
}

declare type FInputActionValue = object;

declare interface FInputCancelAction {
    CancelAction: UInputAction;
    CancellationStates: number;
}

declare interface FInputComboStepData {
    ComboStepAction: UInputAction;
    ComboStepCompletionStates: number;
    TimeToPressKey: number;
}

declare type FKeyConsumptionOptions = object;

declare interface FKeyMappingRow {
    Mappings: FPlayerKeyMapping[];
}

declare interface FMapPlayerKeyArgs {
    MappingName: string;
    Slot: EPlayerMappableKeySlot;
    NewKey: FKey;
    HardwareDeviceId: string;
    ProfileId: FGameplayTag;
    ProfileIdString: string;
    bCreateMatchingSlotIfNeeded: boolean;
    bDeferOnSettingsChangedBroadcast: boolean;
}

declare interface FMappingQueryIssue {
    Issue: EMappingQueryIssue;
    BlockingContext: UInputMappingContext;
    BlockingAction: UInputAction;
}

declare interface FModifyContextOptions {
    bIgnoreAllPressedKeysUntilRelease: boolean;
    bForceImmediately: boolean;
    bNotifyUserSettings: boolean;
}

declare interface FPlayerKeyMapping {
    MappingName: string;
    DisplayName: string;
    DisplayCategory: string;
    Slot: EPlayerMappableKeySlot;
    bIsDirty: boolean;
    DefaultKey: FKey;
    CurrentKey: FKey;
    HardwareDeviceId: FHardwareDeviceIdentifier;
    AssociatedInputAction: UInputAction;
    AssociatedInputActionSoft: TSoftObjectPtr<UInputAction>;
}

declare interface FPlayerMappableKeyProfileCreationArgs {
    ProfileType: TSubclassOf<UEnhancedPlayerMappableKeyProfile>;
    ProfileIdentifier: FGameplayTag;
    ProfileStringIdentifier: string;
    UserId: FPlatformUserId;
    DisplayName: string;
    bSetAsCurrentProfile: boolean;
}

declare interface FPlayerMappableKeyQueryOptions {
    MappingName: string;
    KeyToMatch: FKey;
    SlotToMatch: EPlayerMappableKeySlot;
    bMatchBasicKeyTypes: boolean;
    bMatchKeyAxisType: boolean;
    RequiredDeviceType: EHardwareDevicePrimaryType;
    RequiredDeviceFlags: number;
}

declare interface IEnhancedInputSubsystemInterface extends IInterface {
    readonly __static_IEnhancedInputSubsystemInterface: {
        UpdateValueOfContinuousInputInjectionForPlayerMapping(MappingName: string, RawValue: FInputActionValue): void;
        UpdateValueOfContinuousInputInjectionForAction(Action: UInputAction, RawValue: FInputActionValue): void;
        StopContinuousInputInjectionForPlayerMapping(MappingName: string): void;
        StopContinuousInputInjectionForAction(Action: UInputAction): void;
        StartContinuousInputInjectionForPlayerMapping(MappingName: string, RawValue: FInputActionValue, Modifiers: UInputModifier[], Triggers: UInputTrigger[]): void;
        StartContinuousInputInjectionForAction(Action: UInputAction, RawValue: FInputActionValue, Modifiers: UInputModifier[], Triggers: UInputTrigger[]): void;
        SetInputMode(NewMode: FGameplayTagContainer, Options: FModifyContextOptions): void;
        RequestRebuildControlMappings(Options: FModifyContextOptions, RebuildType: EInputMappingRebuildType): void;
        RemoveTagsFromInputMode(TagsToRemove: FGameplayTagContainer, Options: FModifyContextOptions): void;
        RemoveTagFromInputMode(TagToRemove: FGameplayTag, Options: FModifyContextOptions): void;
        RemoveMappingContext(MappingContext: UInputMappingContext, Options: FModifyContextOptions): void;
        QueryMapKeyInContextSet(PrioritizedActiveContexts: UInputMappingContext[], InputContext: UInputMappingContext, Action: UInputAction, Key: FKey, OutIssues: FMappingQueryIssue[], BlockingIssues: EMappingQueryIssue): EMappingQueryResult;
        QueryMapKeyInActiveContextSet(InputContext: UInputMappingContext, Action: UInputAction, Key: FKey, OutIssues: FMappingQueryIssue[], BlockingIssues: EMappingQueryIssue): EMappingQueryResult;
        QueryKeysMappedToAction(Action: UInputAction): FKey[];
        OnUserSettingsChanged(Settings: UEnhancedInputUserSettings): void;
        OnUserKeyProfileChanged(InNewProfile: UEnhancedPlayerMappableKeyProfile): void;
        InjectInputVectorForPlayerMapping(MappingName: string, Value: FVector, Modifiers: UInputModifier[], Triggers: UInputTrigger[]): void;
        InjectInputVectorForAction(Action: UInputAction, Value: FVector, Modifiers: UInputModifier[], Triggers: UInputTrigger[]): void;
        InjectInputForPlayerMapping(MappingName: string, RawValue: FInputActionValue, Modifiers: UInputModifier[], Triggers: UInputTrigger[]): void;
        InjectInputForAction(Action: UInputAction, RawValue: FInputActionValue, Modifiers: UInputModifier[], Triggers: UInputTrigger[]): void;
        HasMappingContext(MappingContext: UInputMappingContext, OutFoundPriority: number): boolean;
        GetUserSettings(): UEnhancedInputUserSettings;
        GetInputMode(): FGameplayTagContainer;
        GetAllPlayerMappableActionKeyMappings(): FEnhancedActionKeyMapping[];
        ClearAllMappings(): void;
        AppendTagsToInputMode(TagsToAdd: FGameplayTagContainer, Options: FModifyContextOptions): void;
        AddTagToInputMode(TagToAdd: FGameplayTag, Options: FModifyContextOptions): void;
        AddMappingContext(MappingContext: UInputMappingContext, Priority: number, Options: FModifyContextOptions): void;
    };
    readonly __staticRegistry: 
        IEnhancedInputSubsystemInterface['__static_IEnhancedInputSubsystemInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UEnhancedInputActionDelegateBinding extends UInputDelegateBinding {
    readonly __properties_UEnhancedInputActionDelegateBinding: {
        InputActionDelegateBindings: FBlueprintEnhancedInputActionBinding[];
    };
    readonly __staticRegistry: 
        UInputDelegateBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedInputActionDelegateBinding['__properties_UEnhancedInputActionDelegateBinding'] &
        UInputDelegateBinding['__propertyRegistry'];
}

declare interface UEnhancedInputActionValueBinding extends UInputDelegateBinding {
    readonly __properties_UEnhancedInputActionValueBinding: {
        InputActionValueBindings: FBlueprintEnhancedInputActionBinding[];
    };
    readonly __staticRegistry: 
        UInputDelegateBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedInputActionValueBinding['__properties_UEnhancedInputActionValueBinding'] &
        UInputDelegateBinding['__propertyRegistry'];
}

declare interface UEnhancedInputComponent extends UInputComponent {
    readonly __static_UEnhancedInputComponent: {
        GetBoundActionValue(Action: UInputAction): FInputActionValue;
    };
    readonly __staticRegistry: 
        UEnhancedInputComponent['__static_UEnhancedInputComponent'] &
        UInputComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputComponent['__propertyRegistry'];
}

declare interface UEnhancedInputDeveloperSettings extends UDeveloperSettingsBackedByCVars {
    readonly __properties_UEnhancedInputDeveloperSettings: {
        DefaultMappingContexts: FDefaultContextSetting[];
        DefaultWorldSubsystemMappingContexts: FDefaultContextSetting[];
        PlatformSettings: FPerPlatformSettings;
        UserSettingsClass: TSoftClassPtr<UEnhancedInputUserSettings>;
        DefaultPlayerMappableKeyProfileClass: TSoftClassPtr<UEnhancedPlayerMappableKeyProfile>;
        InputSettingsSaveSlotName: string;
        DefaultWorldInputClass: TSoftClassPtr<UEnhancedPlayerInput>;
        bSendTriggeredEventsWhenInputIsFlushed: boolean;
        bEnableUserSettings: boolean;
        bEnableDefaultMappingContexts: boolean;
        bShouldOnlyTriggerLastActionInChord: boolean;
        bEnableInputModeFiltering: boolean;
        bEnableWorldSubsystem: boolean;
        DefaultMappingContextInputModeQuery: FGameplayTagQuery;
        DefaultInputMode: FGameplayTagContainer;
    };
    readonly __staticRegistry: 
        UDeveloperSettingsBackedByCVars['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedInputDeveloperSettings['__properties_UEnhancedInputDeveloperSettings'] &
        UDeveloperSettingsBackedByCVars['__propertyRegistry'];
}

declare interface UEnhancedInputLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UEnhancedInputLibrary: {
        RequestRebuildControlMappingsUsingContext(Context: UInputMappingContext, bForceImmediately: boolean): void;
        MakeInputActionValueOfType(X: number, Y: number, Z: number, ValueType: EInputActionValueType): FInputActionValue;
        IsActionKeyMappingPlayerMappable(ActionKeyMapping: FEnhancedActionKeyMapping): boolean;
        GetPlayerMappableKeySettings(ActionKeyMapping: FEnhancedActionKeyMapping): UPlayerMappableKeySettings;
        GetMappingName(ActionKeyMapping: FEnhancedActionKeyMapping): string;
        GetBoundActionValue(Actor: AActor, Action: UInputAction): FInputActionValue;
        FlushPlayerInput(PlayerController: APlayerController): void;
        Conv_TriggerEventValueToString(TriggerEvent: ETriggerEvent): string;
        Conv_InputActionValueToString(ActionValue: FInputActionValue): string;
        Conv_InputActionValueToBool(InValue: FInputActionValue): boolean;
        Conv_InputActionValueToAxis3D(ActionValue: FInputActionValue): FVector;
        Conv_InputActionValueToAxis2D(InValue: FInputActionValue): FVector2D;
        Conv_InputActionValueToAxis1D(InValue: FInputActionValue): number;
        BreakInputActionValue(InActionValue: FInputActionValue, X: number, Y: number, Z: number, Type: EInputActionValueType): void;
    };
    readonly __staticRegistry: 
        UEnhancedInputLibrary['__static_UEnhancedInputLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UEnhancedInputLocalPlayerSubsystem extends ULocalPlayerSubsystem {
    readonly __static_UEnhancedInputLocalPlayerSubsystem: {
        OnMappingContextRemoved__DelegateSignature(MappingContext: UInputMappingContext): void;
        OnMappingContextAdded__DelegateSignature(MappingContext: UInputMappingContext): void;
        OnControlMappingsRebuilt__DelegateSignature(): void;
    };
    readonly __properties_UEnhancedInputLocalPlayerSubsystem: {
        ControlMappingsRebuiltDelegate: FEnhancedInputLocalPlayerSubsystemControlMappingsRebuiltDelegate;
        OnMappingContextAdded: FEnhancedInputLocalPlayerSubsystemOnMappingContextAdded;
        OnMappingContextRemoved: FEnhancedInputLocalPlayerSubsystemOnMappingContextRemoved;
        UserSettings: UEnhancedInputUserSettings;
        ContinuouslyInjectedInputs: TMap<UInputAction, FInjectedInput>;
    };
    readonly __staticRegistry: 
        UEnhancedInputLocalPlayerSubsystem['__static_UEnhancedInputLocalPlayerSubsystem'] &
        ULocalPlayerSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedInputLocalPlayerSubsystem['__properties_UEnhancedInputLocalPlayerSubsystem'] &
        ULocalPlayerSubsystem['__propertyRegistry'];
}

declare interface UEnhancedInputPlatformData extends UObject {
    readonly __static_UEnhancedInputPlatformData: {
        GetContextRedirect(InContext: UInputMappingContext): UInputMappingContext;
    };
    readonly __properties_UEnhancedInputPlatformData: {
        MappingContextRedirects: TMap<UInputMappingContext, UInputMappingContext>;
    };
    readonly __staticRegistry: 
        UEnhancedInputPlatformData['__static_UEnhancedInputPlatformData'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedInputPlatformData['__properties_UEnhancedInputPlatformData'] &
        UObject['__propertyRegistry'];
}

declare interface UEnhancedInputPlatformSettings extends UPlatformSettings {
    readonly __properties_UEnhancedInputPlatformSettings: {
        InputData: TSoftClassPtr<UEnhancedInputPlatformData>[];
        InputDataClasses: TSubclassOf<UEnhancedInputPlatformData>[];
        bShouldLogMappingContextRedirects: boolean;
    };
    readonly __staticRegistry: 
        UPlatformSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedInputPlatformSettings['__properties_UEnhancedInputPlatformSettings'] &
        UPlatformSettings['__propertyRegistry'];
}

declare interface UEnhancedInputUserSettings extends USaveGame {
    readonly __static_UEnhancedInputUserSettings: {
        UnregisterInputMappingContexts(MappingContexts: UInputMappingContext[]): boolean;
        UnregisterInputMappingContext(IMC: UInputMappingContext): boolean;
        UnMapPlayerKey(InArgs: FMapPlayerKeyArgs, FailureReason: FGameplayTagContainer): void;
        SetActiveKeyProfile(InProfileId: string): boolean;
        SaveSettings(): void;
        ResetKeyProfileToDefault(ProfileId: FGameplayTag, FailureReason: FGameplayTagContainer): void;
        ResetKeyProfileIdToDefault(ProfileId: string, FailureReason: FGameplayTagContainer): void;
        ResetAllPlayerKeysInRow(InArgs: FMapPlayerKeyArgs, FailureReason: FGameplayTagContainer): void;
        RegisterInputMappingContexts(MappingContexts: UInputMappingContext[]): boolean;
        RegisterInputMappingContext(IMC: UInputMappingContext): boolean;
        MapPlayerKey(InArgs: FMapPlayerKeyArgs, FailureReason: FGameplayTagContainer): void;
        MappingContextRegisteredWithSettings__DelegateSignature(IMC: UInputMappingContext): void;
        MappableKeyProfileChanged__DelegateSignature(NewProfile: UEnhancedPlayerMappableKeyProfile): void;
        IsMappingContextRegistered(IMC: UInputMappingContext): boolean;
        GetKeyProfileWithId(ProfileId: string): UEnhancedPlayerMappableKeyProfile;
        GetActiveKeyProfileId(): string;
        GetActiveKeyProfile(): UEnhancedPlayerMappableKeyProfile;
        FindMappingsInRow(MappingName: string): FPlayerKeyMapping[];
        EnhancedInputUserSettingsChanged__DelegateSignature(Settings: UEnhancedInputUserSettings): void;
        EnhancedInputUserSettingsApplied__DelegateSignature(): void;
        CreateNewKeyProfile(InArgs: FPlayerMappableKeyProfileCreationArgs): UEnhancedPlayerMappableKeyProfile;
        AsyncSaveSettings(): void;
        ApplySettings(): void;
    };
    readonly __properties_UEnhancedInputUserSettings: {
        OnSettingsChanged: FEnhancedInputUserSettingsOnSettingsChanged;
        OnSettingsApplied: FEnhancedInputUserSettingsOnSettingsApplied;
        CurrentProfileIdentifier: FGameplayTag;
        CurrentProfileIdentifierString: string;
        SavedKeyProfiles: TMap<FGameplayTag, UEnhancedPlayerMappableKeyProfile>;
        SavedKeyProfilesMap: TMap<string, UEnhancedPlayerMappableKeyProfile>;
        OwningLocalPlayer: TWeakObjectPtr<ULocalPlayer>;
        RegisteredMappingContexts: UInputMappingContext[];
    };
    readonly __staticRegistry: 
        UEnhancedInputUserSettings['__static_UEnhancedInputUserSettings'] &
        USaveGame['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedInputUserSettings['__properties_UEnhancedInputUserSettings'] &
        USaveGame['__propertyRegistry'];
}

declare interface UEnhancedInputWorldSubsystem extends UWorldSubsystem {
    readonly __static_UEnhancedInputWorldSubsystem: {
        RemoveActorInputComponent(Actor: AActor): boolean;
        AddActorInputComponent(Actor: AActor): void;
    };
    readonly __properties_UEnhancedInputWorldSubsystem: {
        PlayerInput: UEnhancedPlayerInput;
        CurrentInputStack: TWeakObjectPtr<UInputComponent>[];
        ContinuouslyInjectedInputs: TMap<UInputAction, FInjectedInput>;
    };
    readonly __staticRegistry: 
        UEnhancedInputWorldSubsystem['__static_UEnhancedInputWorldSubsystem'] &
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedInputWorldSubsystem['__properties_UEnhancedInputWorldSubsystem'] &
        UWorldSubsystem['__propertyRegistry'];
}

declare interface UEnhancedPlayerInput extends UPlayerInput {
    readonly __properties_UEnhancedPlayerInput: {
        KeyConsumptionData: TMap<UInputAction, FKeyConsumptionOptions>;
        ActionInstanceData: TMap<UInputAction, FInputActionInstance>;
        AppliedInputContextData: TMap<UInputMappingContext, FAppliedInputContextData>;
        AppliedInputContexts: TMap<UInputMappingContext, number>;
        EnhancedActionMappings: FEnhancedActionKeyMapping[];
        CurrentInputMode: FGameplayTagContainer;
        KeysPressedThisTick: TMap<FKey, FVector>;
        InputsInjectedThisTick: TMap<UInputAction, FInjectedInputArray>;
        LastInjectedActions: UInputAction[];
    };
    readonly __staticRegistry: 
        UPlayerInput['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedPlayerInput['__properties_UEnhancedPlayerInput'] &
        UPlayerInput['__propertyRegistry'];
}

declare interface UEnhancedPlayerMappableKeyProfile extends UObject {
    readonly __static_UEnhancedPlayerMappableKeyProfile: {
        ToString(): string;
        SetDisplayName(NewDisplayName: string): void;
        ResetToDefault(): void;
        ResetMappingToDefault(InMappingName: string): void;
        QueryPlayerMappedKeys(Options: FPlayerMappableKeyQueryOptions, OutKeys: FKey[]): number;
        K2_FindKeyMapping(OutKeyMapping: FPlayerKeyMapping, InArgs: FMapPlayerKeyArgs): void;
        GetProfileIdString(): string;
        GetProfileDisplayName(): string;
        GetPlayerMappingRows(): [TMap<string, FKeyMappingRow>];
        GetMappingNamesForKey(InKey: FKey, OutMappingNames: string[]): number;
        GetMappedKeysInRow(MappingName: string, OutKeys: FKey[]): number;
        DumpProfileToLog(): void;
        DoesMappingPassQueryOptions(PlayerMapping: FPlayerKeyMapping, Options: FPlayerMappableKeyQueryOptions): boolean;
    };
    readonly __properties_UEnhancedPlayerMappableKeyProfile: {
        ProfileIdentifier: FGameplayTag;
        ProfileIdentifierString: string;
        OwningUserId: FPlatformUserId;
        DisplayName: string;
        PlayerMappedKeys: TMap<string, FKeyMappingRow>;
    };
    readonly __staticRegistry: 
        UEnhancedPlayerMappableKeyProfile['__static_UEnhancedPlayerMappableKeyProfile'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnhancedPlayerMappableKeyProfile['__properties_UEnhancedPlayerMappableKeyProfile'] &
        UObject['__propertyRegistry'];
}

declare interface UInputAction extends UDataAsset {
    readonly __properties_UInputAction: {
        ActionDescription: string;
        bTriggerWhenPaused: boolean;
        bConsumeInput: boolean;
        bConsumesActionAndAxisMappings: boolean;
        bReserveAllMappings: boolean;
        TriggerEventsThatConsumeLegacyKeys: number;
        ValueType: EInputActionValueType;
        AccumulationBehavior: EInputActionAccumulationBehavior;
        Triggers: UInputTrigger[];
        Modifiers: UInputModifier[];
        PlayerMappableKeySettings: UPlayerMappableKeySettings;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputAction['__properties_UInputAction'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UInputDebugKeyDelegateBinding extends UInputDelegateBinding {
    readonly __properties_UInputDebugKeyDelegateBinding: {
        InputDebugKeyDelegateBindings: FBlueprintInputDebugKeyDelegateBinding[];
    };
    readonly __staticRegistry: 
        UInputDelegateBinding['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputDebugKeyDelegateBinding['__properties_UInputDebugKeyDelegateBinding'] &
        UInputDelegateBinding['__propertyRegistry'];
}

declare interface UInputMappingContext extends UDataAsset {
    readonly __static_UInputMappingContext: {
        UnmapKey(Action: UInputAction, Key: FKey): void;
        UnmapAllKeysFromAction(Action: UInputAction): void;
        UnmapAll(): void;
        ShouldShowInputModeQuery(): boolean;
        MapKey(Action: UInputAction, ToKey: FKey): FEnhancedActionKeyMapping;
    };
    readonly __properties_UInputMappingContext: {
        Mappings: FEnhancedActionKeyMapping[];
        InputModeFilterOptions: EMappingContextInputModeFilterOptions;
        InputModeQueryOverride: FGameplayTagQuery;
        RegistrationTrackingMode: EMappingContextRegistrationTrackingMode;
        ContextDescription: string;
    };
    readonly __staticRegistry: 
        UInputMappingContext['__static_UInputMappingContext'] &
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputMappingContext['__properties_UInputMappingContext'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UInputModifier extends UObject {
    readonly __static_UInputModifier: {
        ModifyRaw(PlayerInput: UEnhancedPlayerInput, CurrentValue: FInputActionValue, DeltaTime: number): FInputActionValue;
        GetVisualizationColor(SampleValue: FInputActionValue, FinalValue: FInputActionValue): FLinearColor;
    };
    readonly __staticRegistry: 
        UInputModifier['__static_UInputModifier'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInputModifierDeadZone extends UInputModifier {
    readonly __properties_UInputModifierDeadZone: {
        LowerThreshold: number;
        UpperThreshold: number;
        Type: EDeadZoneType;
    };
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifierDeadZone['__properties_UInputModifierDeadZone'] &
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierFOVScaling extends UInputModifier {
    readonly __properties_UInputModifierFOVScaling: {
        FOVScale: number;
        FOVScalingType: EFOVScalingType;
    };
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifierFOVScaling['__properties_UInputModifierFOVScaling'] &
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierNegate extends UInputModifier {
    readonly __properties_UInputModifierNegate: {
        bX: boolean;
        bY: boolean;
        bZ: boolean;
    };
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifierNegate['__properties_UInputModifierNegate'] &
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierResponseCurveExponential extends UInputModifier {
    readonly __properties_UInputModifierResponseCurveExponential: {
        CurveExponent: FVector;
    };
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifierResponseCurveExponential['__properties_UInputModifierResponseCurveExponential'] &
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierResponseCurveUser extends UInputModifier {
    readonly __properties_UInputModifierResponseCurveUser: {
        ResponseX: UCurveFloat;
        ResponseY: UCurveFloat;
        ResponseZ: UCurveFloat;
    };
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifierResponseCurveUser['__properties_UInputModifierResponseCurveUser'] &
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierScalar extends UInputModifier {
    readonly __properties_UInputModifierScalar: {
        Scalar: FVector;
    };
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifierScalar['__properties_UInputModifierScalar'] &
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierScaleByDeltaTime extends UInputModifier {
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierSmooth extends UInputModifier {
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierSmoothDelta extends UInputModifier {
    readonly __properties_UInputModifierSmoothDelta: {
        SmoothingMethod: ENormalizeInputSmoothingType;
        Speed: number;
        EasingExponent: number;
    };
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifierSmoothDelta['__properties_UInputModifierSmoothDelta'] &
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierSwizzleAxis extends UInputModifier {
    readonly __properties_UInputModifierSwizzleAxis: {
        Order: EInputAxisSwizzle;
    };
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifierSwizzleAxis['__properties_UInputModifierSwizzleAxis'] &
        UInputModifier['__propertyRegistry'];
}

declare interface UInputModifierToWorldSpace extends UInputModifier {
    readonly __staticRegistry: 
        UInputModifier['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputModifier['__propertyRegistry'];
}

declare interface UInputTrigger extends UObject {
    readonly __static_UInputTrigger: {
        UpdateState(PlayerInput: UEnhancedPlayerInput, ModifiedValue: FInputActionValue, DeltaTime: number): ETriggerState;
        IsActuated(ForValue: FInputActionValue): boolean;
        GetTriggerType(): ETriggerType;
    };
    readonly __properties_UInputTrigger: {
        ActuationThreshold: number;
        bShouldAlwaysTick: boolean;
        LastValue: FInputActionValue;
    };
    readonly __staticRegistry: 
        UInputTrigger['__static_UInputTrigger'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTrigger['__properties_UInputTrigger'] &
        UObject['__propertyRegistry'];
}

declare interface UInputTriggerChordAction extends UInputTrigger {
    readonly __properties_UInputTriggerChordAction: {
        ChordAction: UInputAction;
    };
    readonly __staticRegistry: 
        UInputTrigger['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerChordAction['__properties_UInputTriggerChordAction'] &
        UInputTrigger['__propertyRegistry'];
}

declare interface UInputTriggerChordBlocker extends UInputTriggerChordAction {
    readonly __staticRegistry: 
        UInputTriggerChordAction['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerChordAction['__propertyRegistry'];
}

declare interface UInputTriggerCombo extends UInputTrigger {
    readonly __properties_UInputTriggerCombo: {
        CurrentComboStepIndex: number;
        CurrentTimeBetweenComboSteps: number;
        ComboActions: FInputComboStepData[];
        InputCancelActions: FInputCancelAction[];
    };
    readonly __staticRegistry: 
        UInputTrigger['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerCombo['__properties_UInputTriggerCombo'] &
        UInputTrigger['__propertyRegistry'];
}

declare interface UInputTriggerDown extends UInputTrigger {
    readonly __staticRegistry: 
        UInputTrigger['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTrigger['__propertyRegistry'];
}

declare interface UInputTriggerHold extends UInputTriggerTimedBase {
    readonly __properties_UInputTriggerHold: {
        HoldTimeThreshold: number;
        bIsOneShot: boolean;
    };
    readonly __staticRegistry: 
        UInputTriggerTimedBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerHold['__properties_UInputTriggerHold'] &
        UInputTriggerTimedBase['__propertyRegistry'];
}

declare interface UInputTriggerHoldAndRelease extends UInputTriggerTimedBase {
    readonly __properties_UInputTriggerHoldAndRelease: {
        HoldTimeThreshold: number;
    };
    readonly __staticRegistry: 
        UInputTriggerTimedBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerHoldAndRelease['__properties_UInputTriggerHoldAndRelease'] &
        UInputTriggerTimedBase['__propertyRegistry'];
}

declare interface UInputTriggerPressed extends UInputTrigger {
    readonly __staticRegistry: 
        UInputTrigger['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTrigger['__propertyRegistry'];
}

declare interface UInputTriggerPulse extends UInputTriggerTimedBase {
    readonly __properties_UInputTriggerPulse: {
        bTriggerOnStart: boolean;
        Interval: number;
        TriggerLimit: number;
    };
    readonly __staticRegistry: 
        UInputTriggerTimedBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerPulse['__properties_UInputTriggerPulse'] &
        UInputTriggerTimedBase['__propertyRegistry'];
}

declare interface UInputTriggerReleased extends UInputTrigger {
    readonly __staticRegistry: 
        UInputTrigger['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTrigger['__propertyRegistry'];
}

declare interface UInputTriggerRepeatedTap extends UInputTriggerTimedBase {
    readonly __properties_UInputTriggerRepeatedTap: {
        RepeatDelay: number;
        RepeatTime: number;
        NumberOfTapsWhichTriggerRepeat: number;
        TapReleaseTimeThreshold: number;
        NumberOfTapsSinceLastTrigger: number;
    };
    readonly __staticRegistry: 
        UInputTriggerTimedBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerRepeatedTap['__properties_UInputTriggerRepeatedTap'] &
        UInputTriggerTimedBase['__propertyRegistry'];
}

declare interface UInputTriggerTap extends UInputTriggerTimedBase {
    readonly __properties_UInputTriggerTap: {
        TapReleaseTimeThreshold: number;
    };
    readonly __staticRegistry: 
        UInputTriggerTimedBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerTap['__properties_UInputTriggerTap'] &
        UInputTriggerTimedBase['__propertyRegistry'];
}

declare interface UInputTriggerTimedBase extends UInputTrigger {
    readonly __properties_UInputTriggerTimedBase: {
        HeldDuration: number;
        bAffectedByTimeDilation: boolean;
    };
    readonly __staticRegistry: 
        UInputTrigger['__staticRegistry'];
    readonly __propertyRegistry: 
        UInputTriggerTimedBase['__properties_UInputTriggerTimedBase'] &
        UInputTrigger['__propertyRegistry'];
}

declare interface UPlayerMappableInputConfig extends UPrimaryDataAsset {
    readonly __static_UPlayerMappableInputConfig: {
        ResetToDefault(): void;
        IsDeprecated(): boolean;
        GetPlayerMappableKeys(): FEnhancedActionKeyMapping[];
        GetMetadata(): UObject;
        GetMappingContexts(): [TMap<UInputMappingContext, number>];
        GetMappingByName(MappingName: string): FEnhancedActionKeyMapping;
        GetKeysBoundToAction(InAction: UInputAction): FEnhancedActionKeyMapping[];
        GetDisplayName(): string;
        GetConfigName(): string;
    };
    readonly __properties_UPlayerMappableInputConfig: {
        ConfigName: string;
        ConfigDisplayName: string;
        bIsDeprecated: boolean;
        MetaData: UObject;
        Contexts: TMap<UInputMappingContext, number>;
    };
    readonly __staticRegistry: 
        UPlayerMappableInputConfig['__static_UPlayerMappableInputConfig'] &
        UPrimaryDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlayerMappableInputConfig['__properties_UPlayerMappableInputConfig'] &
        UPrimaryDataAsset['__propertyRegistry'];
}

declare interface UPlayerMappableKeySettings extends UObject {
    readonly __properties_UPlayerMappableKeySettings: {
        MetaData: UObject;
        Name: string;
        DisplayName: string;
        DisplayCategory: string;
        SupportedKeyProfiles: FGameplayTagContainer;
        SupportedKeyProfileIds: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlayerMappableKeySettings['__properties_UPlayerMappableKeySettings'] &
        UObject['__propertyRegistry'];
}

