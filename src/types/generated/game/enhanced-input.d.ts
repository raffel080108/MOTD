declare interface FAppliedInputContextData {
    Priority: number;
    RegistrationCount: number;
}
declare const FAppliedInputContextData: FAppliedInputContextData;

declare interface FBlueprintEnhancedInputActionBinding {
    InputAction: UInputAction;
    TriggerEvent: ETriggerEvent;
    FunctionNameToBind: FName;
}
declare const FBlueprintEnhancedInputActionBinding: FBlueprintEnhancedInputActionBinding;

declare interface FBlueprintInputDebugKeyDelegateBinding {
    InputChord: FInputChord;
    InputKeyEvent: EInputEvent;
    FunctionNameToBind: FName;
    bExecuteWhenPaused: boolean;
}
declare const FBlueprintInputDebugKeyDelegateBinding: FBlueprintInputDebugKeyDelegateBinding;

declare interface FDefaultContextSetting {
    InputMappingContext: TSoftObjectPtr<UInputMappingContext>;
    Priority: number;
    bAddImmediately: boolean;
    bRegisterWithUserSettings: boolean;
}
declare const FDefaultContextSetting: FDefaultContextSetting;

declare interface FEnhancedActionKeyMapping {
    Triggers: TArray<UInputTrigger>;
    Modifiers: TArray<UInputModifier>;
    Action: UInputAction;
    Key: FKey;
    bShouldBeIgnored: boolean;
    bHasAlwaysTickTrigger: boolean;
    SettingBehavior: EPlayerMappableKeySettingBehaviors;
    PlayerMappableKeySettings: UPlayerMappableKeySettings;
}
declare const FEnhancedActionKeyMapping: FEnhancedActionKeyMapping;

declare interface FInjectedInput {
    Triggers: TArray<UInputTrigger>;
    Modifiers: TArray<UInputModifier>;
}
declare const FInjectedInput: FInjectedInput;

declare interface FInjectedInputArray {
    Injected: TArray<FInjectedInput>;
}
declare const FInjectedInputArray: FInjectedInputArray;

declare interface FInputActionInstance {
    SourceAction: UInputAction;
    TriggerEvent: ETriggerEvent;
    LastTriggeredWorldTime: number;
    Triggers: TArray<UInputTrigger>;
    Modifiers: TArray<UInputModifier>;
    ElapsedProcessedTime: number;
    ElapsedTriggeredTime: number;
}
declare const FInputActionInstance: FInputActionInstance;

declare interface FInputActionValue {

}
declare const FInputActionValue: FInputActionValue;

declare interface FInputCancelAction {
    CancelAction: UInputAction;
    CancellationStates: uint8;
}
declare const FInputCancelAction: FInputCancelAction;

declare interface FInputComboStepData {
    ComboStepAction: UInputAction;
    ComboStepCompletionStates: uint8;
    TimeToPressKey: number;
}
declare const FInputComboStepData: FInputComboStepData;

declare interface FKeyConsumptionOptions {

}
declare const FKeyConsumptionOptions: FKeyConsumptionOptions;

declare interface FKeyMappingRow {
    Mappings: TSet<FPlayerKeyMapping>;
}
declare const FKeyMappingRow: FKeyMappingRow;

declare interface FMapPlayerKeyArgs {
    MappingName: FName;
    Slot: EPlayerMappableKeySlot;
    NewKey: FKey;
    HardwareDeviceId: FName;
    ProfileId: FGameplayTag;
    ProfileIdString: FString;
    bCreateMatchingSlotIfNeeded: boolean;
    bDeferOnSettingsChangedBroadcast: boolean;
}
declare const FMapPlayerKeyArgs: FMapPlayerKeyArgs;

declare interface FMappingQueryIssue {
    Issue: EMappingQueryIssue;
    BlockingContext: UInputMappingContext;
    BlockingAction: UInputAction;
}
declare const FMappingQueryIssue: FMappingQueryIssue;

declare interface FModifyContextOptions {
    bIgnoreAllPressedKeysUntilRelease: boolean;
    bForceImmediately: boolean;
    bNotifyUserSettings: boolean;
}
declare const FModifyContextOptions: FModifyContextOptions;

declare interface FPlayerKeyMapping {
    MappingName: FName;
    DisplayName: FText;
    DisplayCategory: FText;
    Slot: EPlayerMappableKeySlot;
    bIsDirty: boolean;
    DefaultKey: FKey;
    CurrentKey: FKey;
    HardwareDeviceId: FHardwareDeviceIdentifier;
    AssociatedInputAction: UInputAction;
    AssociatedInputActionSoft: TSoftObjectPtr<UInputAction>;
}
declare const FPlayerKeyMapping: FPlayerKeyMapping;

declare interface FPlayerMappableKeyProfileCreationArgs {
    ProfileType: TSubclassOf<UEnhancedPlayerMappableKeyProfile>;
    ProfileIdentifier: FGameplayTag;
    ProfileStringIdentifier: FString;
    UserId: FPlatformUserId;
    DisplayName: FText;
    bSetAsCurrentProfile: boolean;
}
declare const FPlayerMappableKeyProfileCreationArgs: FPlayerMappableKeyProfileCreationArgs;

declare interface FPlayerMappableKeyQueryOptions {
    MappingName: FName;
    KeyToMatch: FKey;
    SlotToMatch: EPlayerMappableKeySlot;
    bMatchBasicKeyTypes: boolean;
    bMatchKeyAxisType: boolean;
    RequiredDeviceType: EHardwareDevicePrimaryType;
    RequiredDeviceFlags: number;
}
declare const FPlayerMappableKeyQueryOptions: FPlayerMappableKeyQueryOptions;

declare interface IEnhancedInputSubsystemInterface extends IInterface {
    UpdateValueOfContinuousInputInjectionForPlayerMapping(MappingName: FName, RawValue: FInputActionValue): void;
    UpdateValueOfContinuousInputInjectionForAction(Action: UInputAction, RawValue: FInputActionValue): void;
    StopContinuousInputInjectionForPlayerMapping(MappingName: FName): void;
    StopContinuousInputInjectionForAction(Action: UInputAction): void;
    StartContinuousInputInjectionForPlayerMapping(MappingName: FName, RawValue: FInputActionValue, Modifiers: TArray<UInputModifier>, Triggers: TArray<UInputTrigger>): void;
    StartContinuousInputInjectionForAction(Action: UInputAction, RawValue: FInputActionValue, Modifiers: TArray<UInputModifier>, Triggers: TArray<UInputTrigger>): void;
    SetInputMode(NewMode: FGameplayTagContainer, Options: FModifyContextOptions): void;
    RequestRebuildControlMappings(Options: FModifyContextOptions, RebuildType: EInputMappingRebuildType): void;
    RemoveTagsFromInputMode(TagsToRemove: FGameplayTagContainer, Options: FModifyContextOptions): void;
    RemoveTagFromInputMode(TagToRemove: FGameplayTag, Options: FModifyContextOptions): void;
    RemoveMappingContext(MappingContext: UInputMappingContext, Options: FModifyContextOptions): void;
    QueryMapKeyInContextSet(PrioritizedActiveContexts: TArray<UInputMappingContext>, InputContext: UInputMappingContext, Action: UInputAction, Key: FKey, OutIssues: TArray<FMappingQueryIssue>, BlockingIssues: EMappingQueryIssue): EMappingQueryResult;
    QueryMapKeyInActiveContextSet(InputContext: UInputMappingContext, Action: UInputAction, Key: FKey, OutIssues: TArray<FMappingQueryIssue>, BlockingIssues: EMappingQueryIssue): EMappingQueryResult;
    QueryKeysMappedToAction(Action: UInputAction): TArray<FKey>;
    OnUserSettingsChanged(Settings: UEnhancedInputUserSettings): void;
    OnUserKeyProfileChanged(InNewProfile: UEnhancedPlayerMappableKeyProfile): void;
    InjectInputVectorForPlayerMapping(MappingName: FName, Value: FVector, Modifiers: TArray<UInputModifier>, Triggers: TArray<UInputTrigger>): void;
    InjectInputVectorForAction(Action: UInputAction, Value: FVector, Modifiers: TArray<UInputModifier>, Triggers: TArray<UInputTrigger>): void;
    InjectInputForPlayerMapping(MappingName: FName, RawValue: FInputActionValue, Modifiers: TArray<UInputModifier>, Triggers: TArray<UInputTrigger>): void;
    InjectInputForAction(Action: UInputAction, RawValue: FInputActionValue, Modifiers: TArray<UInputModifier>, Triggers: TArray<UInputTrigger>): void;
    HasMappingContext(MappingContext: UInputMappingContext, OutFoundPriority: number): boolean;
    GetUserSettings(): UEnhancedInputUserSettings;
    GetInputMode(): FGameplayTagContainer;
    GetAllPlayerMappableActionKeyMappings(): TArray<FEnhancedActionKeyMapping>;
    ClearAllMappings(): void;
    AppendTagsToInputMode(TagsToAdd: FGameplayTagContainer, Options: FModifyContextOptions): void;
    AddTagToInputMode(TagToAdd: FGameplayTag, Options: FModifyContextOptions): void;
    AddMappingContext(MappingContext: UInputMappingContext, Priority: number, Options: FModifyContextOptions): void;
}
declare const IEnhancedInputSubsystemInterface: IEnhancedInputSubsystemInterface;

declare interface UEnhancedInputActionDelegateBinding extends UInputDelegateBinding {
    InputActionDelegateBindings: TArray<FBlueprintEnhancedInputActionBinding>;
}
declare const UEnhancedInputActionDelegateBinding: UEnhancedInputActionDelegateBinding;

declare interface UEnhancedInputActionValueBinding extends UInputDelegateBinding {
    InputActionValueBindings: TArray<FBlueprintEnhancedInputActionBinding>;
}
declare const UEnhancedInputActionValueBinding: UEnhancedInputActionValueBinding;

declare interface UEnhancedInputComponent extends UInputComponent {
    GetBoundActionValue(Action: UInputAction): FInputActionValue;
}
declare const UEnhancedInputComponent: UEnhancedInputComponent;

declare interface UEnhancedInputDeveloperSettings extends UDeveloperSettingsBackedByCVars {
    DefaultMappingContexts: TArray<FDefaultContextSetting>;
    DefaultWorldSubsystemMappingContexts: TArray<FDefaultContextSetting>;
    PlatformSettings: FPerPlatformSettings;
    UserSettingsClass: TSoftClassPtr<UEnhancedInputUserSettings>;
    DefaultPlayerMappableKeyProfileClass: TSoftClassPtr<UEnhancedPlayerMappableKeyProfile>;
    InputSettingsSaveSlotName: FString;
    DefaultWorldInputClass: TSoftClassPtr<UEnhancedPlayerInput>;
    bSendTriggeredEventsWhenInputIsFlushed: boolean;
    bEnableUserSettings: boolean;
    bEnableDefaultMappingContexts: boolean;
    bShouldOnlyTriggerLastActionInChord: boolean;
    bEnableInputModeFiltering: boolean;
    bEnableWorldSubsystem: boolean;
    DefaultMappingContextInputModeQuery: FGameplayTagQuery;
    DefaultInputMode: FGameplayTagContainer;
}
declare const UEnhancedInputDeveloperSettings: UEnhancedInputDeveloperSettings;

declare interface UEnhancedInputLibrary extends UBlueprintFunctionLibrary {
    RequestRebuildControlMappingsUsingContext(Context: UInputMappingContext, bForceImmediately: boolean): void;
    MakeInputActionValueOfType(X: number, Y: number, Z: number, ValueType: EInputActionValueType): FInputActionValue;
    IsActionKeyMappingPlayerMappable(ActionKeyMapping: FEnhancedActionKeyMapping): boolean;
    GetPlayerMappableKeySettings(ActionKeyMapping: FEnhancedActionKeyMapping): UPlayerMappableKeySettings;
    GetMappingName(ActionKeyMapping: FEnhancedActionKeyMapping): FName;
    GetBoundActionValue(Actor: AActor, Action: UInputAction): FInputActionValue;
    FlushPlayerInput(PlayerController: APlayerController): void;
    Conv_TriggerEventValueToString(TriggerEvent: ETriggerEvent): FString;
    Conv_InputActionValueToString(ActionValue: FInputActionValue): FString;
    Conv_InputActionValueToBool(InValue: FInputActionValue): boolean;
    Conv_InputActionValueToAxis3D(ActionValue: FInputActionValue): FVector;
    Conv_InputActionValueToAxis2D(InValue: FInputActionValue): FVector2D;
    Conv_InputActionValueToAxis1D(InValue: FInputActionValue): number;
    BreakInputActionValue(InActionValue: FInputActionValue, X: number, Y: number, Z: number, Type: EInputActionValueType): void;
}
declare const UEnhancedInputLibrary: UEnhancedInputLibrary;

declare interface UEnhancedInputLocalPlayerSubsystem extends ULocalPlayerSubsystem {
    ControlMappingsRebuiltDelegate: FEnhancedInputLocalPlayerSubsystemControlMappingsRebuiltDelegate;
    OnMappingContextAdded: FEnhancedInputLocalPlayerSubsystemOnMappingContextAdded;
    OnMappingContextRemoved: FEnhancedInputLocalPlayerSubsystemOnMappingContextRemoved;
    UserSettings: UEnhancedInputUserSettings;
    ContinuouslyInjectedInputs: Record<string | number | symbol, FInjectedInput>;
    OnMappingContextRemoved__DelegateSignature(MappingContext: UInputMappingContext): void;
    OnMappingContextAdded__DelegateSignature(MappingContext: UInputMappingContext): void;
    OnControlMappingsRebuilt__DelegateSignature(): void;
}
declare const UEnhancedInputLocalPlayerSubsystem: UEnhancedInputLocalPlayerSubsystem;

declare interface UEnhancedInputPlatformData extends UObject {
    MappingContextRedirects: Record<string | number | symbol, UInputMappingContext>;
    GetContextRedirect(InContext: UInputMappingContext): UInputMappingContext;
}
declare const UEnhancedInputPlatformData: UEnhancedInputPlatformData;

declare interface UEnhancedInputPlatformSettings extends UPlatformSettings {
    InputData: TArray<TSoftClassPtr<UEnhancedInputPlatformData>>;
    InputDataClasses: TArray<TSubclassOf<UEnhancedInputPlatformData>>;
    bShouldLogMappingContextRedirects: boolean;
}
declare const UEnhancedInputPlatformSettings: UEnhancedInputPlatformSettings;

declare interface UEnhancedInputUserSettings extends USaveGame {
    OnSettingsChanged: FEnhancedInputUserSettingsOnSettingsChanged;
    OnSettingsApplied: FEnhancedInputUserSettingsOnSettingsApplied;
    CurrentProfileIdentifier: FGameplayTag;
    CurrentProfileIdentifierString: FString;
    SavedKeyProfiles: Record<string | number | symbol, UEnhancedPlayerMappableKeyProfile>;
    SavedKeyProfilesMap: Record<FString, UEnhancedPlayerMappableKeyProfile>;
    OwningLocalPlayer: TWeakObjectPtr<ULocalPlayer>;
    RegisteredMappingContexts: TSet<UInputMappingContext>;
    UnregisterInputMappingContexts(MappingContexts: TSet<UInputMappingContext>): boolean;
    UnregisterInputMappingContext(IMC: UInputMappingContext): boolean;
    UnMapPlayerKey(InArgs: FMapPlayerKeyArgs, FailureReason: FGameplayTagContainer): void;
    SetActiveKeyProfile(InProfileId: string | FString): boolean;
    SaveSettings(): void;
    ResetKeyProfileToDefault(ProfileId: FGameplayTag, FailureReason: FGameplayTagContainer): void;
    ResetKeyProfileIdToDefault(ProfileId: string | FString, FailureReason: FGameplayTagContainer): void;
    ResetAllPlayerKeysInRow(InArgs: FMapPlayerKeyArgs, FailureReason: FGameplayTagContainer): void;
    RegisterInputMappingContexts(MappingContexts: TSet<UInputMappingContext>): boolean;
    RegisterInputMappingContext(IMC: UInputMappingContext): boolean;
    MapPlayerKey(InArgs: FMapPlayerKeyArgs, FailureReason: FGameplayTagContainer): void;
    MappingContextRegisteredWithSettings__DelegateSignature(IMC: UInputMappingContext): void;
    MappableKeyProfileChanged__DelegateSignature(NewProfile: UEnhancedPlayerMappableKeyProfile): void;
    IsMappingContextRegistered(IMC: UInputMappingContext): boolean;
    GetKeyProfileWithId(ProfileId: string | FString): UEnhancedPlayerMappableKeyProfile;
    GetActiveKeyProfileId(): FString;
    GetActiveKeyProfile(): UEnhancedPlayerMappableKeyProfile;
    FindMappingsInRow(MappingName: FName): TSet<FPlayerKeyMapping>;
    EnhancedInputUserSettingsChanged__DelegateSignature(Settings: UEnhancedInputUserSettings): void;
    EnhancedInputUserSettingsApplied__DelegateSignature(): void;
    CreateNewKeyProfile(InArgs: FPlayerMappableKeyProfileCreationArgs): UEnhancedPlayerMappableKeyProfile;
    AsyncSaveSettings(): void;
    ApplySettings(): void;
}
declare const UEnhancedInputUserSettings: UEnhancedInputUserSettings;

declare interface UEnhancedInputWorldSubsystem extends UWorldSubsystem {
    PlayerInput: UEnhancedPlayerInput;
    CurrentInputStack: TArray<TWeakObjectPtr<UInputComponent>>;
    ContinuouslyInjectedInputs: Record<string | number | symbol, FInjectedInput>;
    RemoveActorInputComponent(Actor: AActor): boolean;
    AddActorInputComponent(Actor: AActor): void;
}
declare const UEnhancedInputWorldSubsystem: UEnhancedInputWorldSubsystem;

declare interface UEnhancedPlayerInput extends UPlayerInput {
    KeyConsumptionData: Record<string | number | symbol, FKeyConsumptionOptions>;
    ActionInstanceData: Record<string | number | symbol, FInputActionInstance>;
    AppliedInputContextData: Record<string | number | symbol, FAppliedInputContextData>;
    AppliedInputContexts: Record<string | number | symbol, number>;
    EnhancedActionMappings: TArray<FEnhancedActionKeyMapping>;
    CurrentInputMode: FGameplayTagContainer;
    KeysPressedThisTick: Record<string | number | symbol, FVector>;
    InputsInjectedThisTick: Record<string | number | symbol, FInjectedInputArray>;
    LastInjectedActions: TSet<UInputAction>;
}
declare const UEnhancedPlayerInput: UEnhancedPlayerInput;

declare interface UEnhancedPlayerMappableKeyProfile extends UObject {
    ProfileIdentifier: FGameplayTag;
    ProfileIdentifierString: FString;
    OwningUserId: FPlatformUserId;
    DisplayName: FText;
    PlayerMappedKeys: Record<FName, FKeyMappingRow>;
    ToString(): FString;
    SetDisplayName(NewDisplayName: FText): void;
    ResetToDefault(): void;
    ResetMappingToDefault(InMappingName: FName): void;
    QueryPlayerMappedKeys(Options: FPlayerMappableKeyQueryOptions, OutKeys: TArray<FKey>): number;
    K2_FindKeyMapping(OutKeyMapping: FPlayerKeyMapping, InArgs: FMapPlayerKeyArgs): void;
    GetProfileIdString(): FString;
    GetProfileDisplayName(): FText;
    GetPlayerMappingRows(): [Record<FName, FKeyMappingRow>];
    GetMappingNamesForKey(InKey: FKey, OutMappingNames: TArray<FName>): number;
    GetMappedKeysInRow(MappingName: FName, OutKeys: TArray<FKey>): number;
    DumpProfileToLog(): void;
    DoesMappingPassQueryOptions(PlayerMapping: FPlayerKeyMapping, Options: FPlayerMappableKeyQueryOptions): boolean;
}
declare const UEnhancedPlayerMappableKeyProfile: UEnhancedPlayerMappableKeyProfile;

declare interface UInputAction extends UDataAsset {
    ActionDescription: FText;
    bTriggerWhenPaused: boolean;
    bConsumeInput: boolean;
    bConsumesActionAndAxisMappings: boolean;
    bReserveAllMappings: boolean;
    TriggerEventsThatConsumeLegacyKeys: number;
    ValueType: EInputActionValueType;
    AccumulationBehavior: EInputActionAccumulationBehavior;
    Triggers: TArray<UInputTrigger>;
    Modifiers: TArray<UInputModifier>;
    PlayerMappableKeySettings: UPlayerMappableKeySettings;
}
declare const UInputAction: UInputAction;

declare interface UInputDebugKeyDelegateBinding extends UInputDelegateBinding {
    InputDebugKeyDelegateBindings: TArray<FBlueprintInputDebugKeyDelegateBinding>;
}
declare const UInputDebugKeyDelegateBinding: UInputDebugKeyDelegateBinding;

declare interface UInputMappingContext extends UDataAsset {
    Mappings: TArray<FEnhancedActionKeyMapping>;
    InputModeFilterOptions: EMappingContextInputModeFilterOptions;
    InputModeQueryOverride: FGameplayTagQuery;
    RegistrationTrackingMode: EMappingContextRegistrationTrackingMode;
    ContextDescription: FText;
    UnmapKey(Action: UInputAction, Key: FKey): void;
    UnmapAllKeysFromAction(Action: UInputAction): void;
    UnmapAll(): void;
    ShouldShowInputModeQuery(): boolean;
    MapKey(Action: UInputAction, ToKey: FKey): FEnhancedActionKeyMapping;
}
declare const UInputMappingContext: UInputMappingContext;

declare interface UInputModifier extends UObject {
    ModifyRaw(PlayerInput: UEnhancedPlayerInput, CurrentValue: FInputActionValue, DeltaTime: number): FInputActionValue;
    GetVisualizationColor(SampleValue: FInputActionValue, FinalValue: FInputActionValue): FLinearColor;
}
declare const UInputModifier: UInputModifier;

declare interface UInputModifierDeadZone extends UInputModifier {
    LowerThreshold: number;
    UpperThreshold: number;
    Type: EDeadZoneType;
}
declare const UInputModifierDeadZone: UInputModifierDeadZone;

declare interface UInputModifierFOVScaling extends UInputModifier {
    FOVScale: number;
    FOVScalingType: EFOVScalingType;
}
declare const UInputModifierFOVScaling: UInputModifierFOVScaling;

declare interface UInputModifierNegate extends UInputModifier {
    bX: boolean;
    bY: boolean;
    bZ: boolean;
}
declare const UInputModifierNegate: UInputModifierNegate;

declare interface UInputModifierResponseCurveExponential extends UInputModifier {
    CurveExponent: FVector;
}
declare const UInputModifierResponseCurveExponential: UInputModifierResponseCurveExponential;

declare interface UInputModifierResponseCurveUser extends UInputModifier {
    ResponseX: UCurveFloat;
    ResponseY: UCurveFloat;
    ResponseZ: UCurveFloat;
}
declare const UInputModifierResponseCurveUser: UInputModifierResponseCurveUser;

declare interface UInputModifierScalar extends UInputModifier {
    Scalar: FVector;
}
declare const UInputModifierScalar: UInputModifierScalar;

declare interface UInputModifierScaleByDeltaTime extends UInputModifier {

}
declare const UInputModifierScaleByDeltaTime: UInputModifierScaleByDeltaTime;

declare interface UInputModifierSmooth extends UInputModifier {

}
declare const UInputModifierSmooth: UInputModifierSmooth;

declare interface UInputModifierSmoothDelta extends UInputModifier {
    SmoothingMethod: ENormalizeInputSmoothingType;
    Speed: number;
    EasingExponent: number;
}
declare const UInputModifierSmoothDelta: UInputModifierSmoothDelta;

declare interface UInputModifierSwizzleAxis extends UInputModifier {
    Order: EInputAxisSwizzle;
}
declare const UInputModifierSwizzleAxis: UInputModifierSwizzleAxis;

declare interface UInputModifierToWorldSpace extends UInputModifier {

}
declare const UInputModifierToWorldSpace: UInputModifierToWorldSpace;

declare interface UInputTrigger extends UObject {
    ActuationThreshold: number;
    bShouldAlwaysTick: boolean;
    LastValue: FInputActionValue;
    UpdateState(PlayerInput: UEnhancedPlayerInput, ModifiedValue: FInputActionValue, DeltaTime: number): ETriggerState;
    IsActuated(ForValue: FInputActionValue): boolean;
    GetTriggerType(): ETriggerType;
}
declare const UInputTrigger: UInputTrigger;

declare interface UInputTriggerChordAction extends UInputTrigger {
    ChordAction: UInputAction;
}
declare const UInputTriggerChordAction: UInputTriggerChordAction;

declare interface UInputTriggerChordBlocker extends UInputTriggerChordAction {

}
declare const UInputTriggerChordBlocker: UInputTriggerChordBlocker;

declare interface UInputTriggerCombo extends UInputTrigger {
    CurrentComboStepIndex: number;
    CurrentTimeBetweenComboSteps: number;
    ComboActions: TArray<FInputComboStepData>;
    InputCancelActions: TArray<FInputCancelAction>;
}
declare const UInputTriggerCombo: UInputTriggerCombo;

declare interface UInputTriggerDown extends UInputTrigger {

}
declare const UInputTriggerDown: UInputTriggerDown;

declare interface UInputTriggerHold extends UInputTriggerTimedBase {
    HoldTimeThreshold: number;
    bIsOneShot: boolean;
}
declare const UInputTriggerHold: UInputTriggerHold;

declare interface UInputTriggerHoldAndRelease extends UInputTriggerTimedBase {
    HoldTimeThreshold: number;
}
declare const UInputTriggerHoldAndRelease: UInputTriggerHoldAndRelease;

declare interface UInputTriggerPressed extends UInputTrigger {

}
declare const UInputTriggerPressed: UInputTriggerPressed;

declare interface UInputTriggerPulse extends UInputTriggerTimedBase {
    bTriggerOnStart: boolean;
    Interval: number;
    TriggerLimit: number;
}
declare const UInputTriggerPulse: UInputTriggerPulse;

declare interface UInputTriggerReleased extends UInputTrigger {

}
declare const UInputTriggerReleased: UInputTriggerReleased;

declare interface UInputTriggerRepeatedTap extends UInputTriggerTimedBase {
    RepeatDelay: number;
    RepeatTime: number;
    NumberOfTapsWhichTriggerRepeat: number;
    TapReleaseTimeThreshold: number;
    NumberOfTapsSinceLastTrigger: number;
}
declare const UInputTriggerRepeatedTap: UInputTriggerRepeatedTap;

declare interface UInputTriggerTap extends UInputTriggerTimedBase {
    TapReleaseTimeThreshold: number;
}
declare const UInputTriggerTap: UInputTriggerTap;

declare interface UInputTriggerTimedBase extends UInputTrigger {
    HeldDuration: number;
    bAffectedByTimeDilation: boolean;
}
declare const UInputTriggerTimedBase: UInputTriggerTimedBase;

declare interface UPlayerMappableInputConfig extends UPrimaryDataAsset {
    ConfigName: FName;
    ConfigDisplayName: FText;
    bIsDeprecated: boolean;
    MetaData: UObject;
    Contexts: Record<string | number | symbol, number>;
    ResetToDefault(): void;
    IsDeprecated(): boolean;
    GetPlayerMappableKeys(): TArray<FEnhancedActionKeyMapping>;
    GetMetadata(): UObject;
    GetMappingContexts(): [Record<string | number | symbol, number>];
    GetMappingByName(MappingName: FName): FEnhancedActionKeyMapping;
    GetKeysBoundToAction(InAction: UInputAction): TArray<FEnhancedActionKeyMapping>;
    GetDisplayName(): FText;
    GetConfigName(): FName;
}
declare const UPlayerMappableInputConfig: UPlayerMappableInputConfig;

declare interface UPlayerMappableKeySettings extends UObject {
    MetaData: UObject;
    Name: FName;
    DisplayName: FText;
    DisplayCategory: FText;
    SupportedKeyProfiles: FGameplayTagContainer;
    SupportedKeyProfileIds: TArray<FString>;
}
declare const UPlayerMappableKeySettings: UPlayerMappableKeySettings;

