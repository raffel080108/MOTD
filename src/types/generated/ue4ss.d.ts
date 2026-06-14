declare const enum Key {
    LEFT_MOUSE_BUTTON = 0x1,
    RIGHT_MOUSE_BUTTON = 0x2,
    CANCEL = 0x3,
    MIDDLE_MOUSE_BUTTON = 0x4,
    XBUTTON_ONE = 0x5,
    XBUTTON_TWO = 0x6,
    BACKSPACE = 0x8,
    TAB = 0x9,
    CLEAR = 0x0C,
    RETURN = 0x0D,
    PAUSE = 0x13,
    CAPS_LOCK = 0x14,
    IME_KANA = 0x15,
    IME_HANGUEL = 0x15,
    IME_HANGUL = 0x15,
    IME_ON = 0x16,
    IME_JUNJA = 0x17,
    IME_FINAL = 0x18,
    IME_HANJA = 0x19,
    IME_KANJI = 0x19,
    IME_OFF = 0x1A,
    ESCAPE = 0x1B,
    IME_CONVERT = 0x1C,
    IME_NONCONVERT = 0x1D,
    IME_ACCEPT = 0x1E,
    IME_MODECHANGE = 0x1F,
    SPACE = 0x20,
    PAGE_UP = 0x21,
    PAGE_DOWN = 0x22,
    END = 0x23,
    HOME = 0x24,
    LEFT_ARROW = 0x25,
    UP_ARROW = 0x26,
    RIGHT_ARROW = 0x27,
    DOWN_ARROW = 0x28,
    SELECT = 0x29,
    PRINT = 0x2A,
    EXECUTE = 0x2B,
    PRINT_SCREEN = 0x2C,
    INS = 0x2D,
    DEL = 0x2E,
    HELP = 0x2F,
    ZERO = 0x30,
    ONE = 0x31,
    TWO = 0x32,
    THREE = 0x33,
    FOUR = 0x34,
    FIVE = 0x35,
    SIX = 0x36,
    SEVEN = 0x37,
    EIGHT = 0x38,
    NINE = 0x39,
    A = 0x41,
    B = 0x42,
    C = 0x43,
    D = 0x44,
    E = 0x45,
    F = 0x46,
    G = 0x47,
    H = 0x48,
    I = 0x49,
    J = 0x4A,
    K = 0x4B,
    L = 0x4C,
    M = 0x4D,
    N = 0x4E,
    O = 0x4F,
    P = 0x50,
    Q = 0x51,
    R = 0x52,
    S = 0x53,
    T = 0x54,
    U = 0x55,
    V = 0x56,
    W = 0x57,
    X = 0x58,
    Y = 0x59,
    Z = 0x5A,
    LEFT_WIN = 0x5B,
    RIGHT_WIN = 0x5C,
    APPS = 0x5D,
    SLEEP = 0x5F,
    NUM_ZERO = 0x60,
    NUM_ONE = 0x61,
    NUM_TWO = 0x62,
    NUM_THREE = 0x63,
    NUM_FOUR = 0x64,
    NUM_FIVE = 0x65,
    NUM_SIX = 0x66,
    NUM_SEVEN = 0x67,
    NUM_EIGHT = 0x68,
    NUM_NINE = 0x69,
    MULTIPLY = 0x6A,
    ADD = 0x6B,
    SEPARATOR = 0x6C,
    SUBTRACT = 0x6D,
    DECIMAL = 0x6E,
    DIVIDE = 0x6F,
    F1 = 0x70,
    F2 = 0x71,
    F3 = 0x72,
    F4 = 0x73,
    F5 = 0x74,
    F6 = 0x75,
    F7 = 0x76,
    F8 = 0x77,
    F9 = 0x78,
    F10 = 0x79,
    F11 = 0x7A,
    F12 = 0x7B,
    F13 = 0x7C,
    F14 = 0x7D,
    F15 = 0x7E,
    F16 = 0x7F,
    F17 = 0x80,
    F18 = 0x81,
    F19 = 0x82,
    F20 = 0x83,
    F21 = 0x84,
    F22 = 0x85,
    F23 = 0x86,
    F24 = 0x87,
    NUM_LOCK = 0x90,
    SCROLL_LOCK = 0x91,
    BROWSER_BACK = 0xA6,
    BROWSER_FORWARD = 0xA7,
    BROWSER_REFRESH = 0xA8,
    BROWSER_STOP = 0xA9,
    BROWSER_SEARCH = 0xAA,
    BROWSER_FAVORITES = 0xAB,
    BROWSER_HOME = 0xAC,
    VOLUME_MUTE = 0xAD,
    VOLUME_DOWN = 0xAE,
    VOLUME_UP = 0xAF,
    MEDIA_NEXT_TRACK = 0xB0,
    MEDIA_PREV_TRACK = 0xB1,
    MEDIA_STOP = 0xB2,
    MEDIA_PLAY_PAUSE = 0xB3,
    LAUNCH_MAIL = 0xB4,
    LAUNCH_MEDIA_SELECT = 0xB5,
    LAUNCH_APP1 = 0xB6,
    LAUNCH_APP2 = 0xB7,
    OEM_ONE = 0xBA,
    OEM_PLUS = 0xBB,
    OEM_COMMA = 0xBC,
    OEM_MINUS = 0xBD,
    OEM_PERIOD = 0xBE,
    OEM_TWO = 0xBF,
    OEM_THREE = 0xC0,
    OEM_FOUR = 0xDB,
    OEM_FIVE = 0xDC,
    OEM_SIX = 0xDD,
    OEM_SEVEN = 0xDE,
    OEM_EIGHT = 0xDF,
    OEM_102 = 0xE2,
    IME_PROCESS = 0xE5,
    PACKET = 0xE7,
    ATTN = 0xF6,
    CRSEL = 0xF7,
    EXSEL = 0xF8,
    EREOF = 0xF9,
    PLAY = 0xFA,
    ZOOM = 0xFB,
    PA1 = 0xFD,
    OEM_CLEAR = 0xFE,
    PropertyTypes = "PropertyTypes"
}

declare const enum EObjectFlags {
    RF_NoFlags = 0x00000000,
    RF_Public = 0x00000001,
    RF_Standalone = 0x00000002,
    RF_MarkAsNative = 0x00000004,
    RF_Transactional = 0x00000008,
    RF_ClassDefaultObject = 0x00000010,
    RF_ArchetypeObject = 0x00000020,
    RF_Transient = 0x00000040,
    RF_MarkAsRootSet = 0x00000080,
    RF_TagGarbageTemp = 0x00000100,
    RF_NeedInitialization = 0x00000200,
    RF_NeedLoad = 0x00000400,
    RF_KeepForCooker = 0x00000800,
    RF_NeedPostLoad = 0x00001000,
    RF_NeedPostLoadSubobjects = 0x00002000,
    RF_NewerVersionExists = 0x00004000,
    RF_BeginDestroyed = 0x00008000,
    RF_FinishDestroyed = 0x00010000,
    RF_BeingRegenerated = 0x00020000,
    RF_DefaultSubObject = 0x00040000,
    RF_WasLoaded = 0x00080000,
    RF_TextExportTransient = 0x00100000,
    RF_LoadCompleted = 0x00200000,
    RF_InheritableComponentTemplate = 0x00400000,
    RF_DuplicateTransient = 0x00800000,
    RF_StrongRefOnFrame = 0x01000000,
    RF_NonPIEDuplicateTransient = 0x01000000,
    RF_Dynamic = 0x02000000,
    RF_WillBeLoaded = 0x04000000,
    RF_HasExternalPackage = 0x08000000,
    RF_AllFlags = 0x0FFFFFFF
}

declare const enum ModifierKey {
    SHIFT = 0x10,
    CONTROL = 0x11,
    ALT = 0x12
}

declare const enum EInternalObjectFlags {
    ReachableInCluster = 0x00800000,
    ClusterRoot = 0x01000000,
    Native = 0x02000000,
    Async = 0x04000000,
    AsyncLoading = 0x08000000,
    Unreachable = 0x10000000,
    PendingKill = 0x20000000,
    RootSet = 0x40000000,
    GarbageCollectionKeepFlags = 0x0E000000,
    AllFlags = 0x7F800000
}

declare const enum EGameThreadMethod {
    ProcessEvent = 0,
    EngineTick = 1
}

declare const enum EFindName {
    FNAME_Find = 0,
    FNAME_Add = 1
}

declare interface CreateInvalidObject {
    (): UObject;
}
declare const CreateInvalidObject: CreateInvalidObject;

declare interface DumpAllObjects {
    (): void;
}
declare const DumpAllObjects: DumpAllObjects;

declare interface GenerateSDK {
    (): void;
}
declare const GenerateSDK: GenerateSDK;

declare interface GenerateLuaTypes {
    (): void;
}
declare const GenerateLuaTypes: GenerateLuaTypes;

declare interface GenerateUHTCompatibleHeaders {
    (): void;
}
declare const GenerateUHTCompatibleHeaders: GenerateUHTCompatibleHeaders;

declare interface DumpStaticMeshes {
    (): void;
}
declare const DumpStaticMeshes: DumpStaticMeshes;

declare interface DumpAllActors {
    (): void;
}
declare const DumpAllActors: DumpAllActors;

declare interface DumpUSMAP {
    (): void;
}
declare const DumpUSMAP: DumpUSMAP;

declare interface RegisterKeyBind {
    (Key: Key, Callback: () => void): void;
    (Key: Key, ModifierKeys: TArray<ModifierKey>, Callback: () => void): void;
}
declare const RegisterKeyBind: RegisterKeyBind;

declare interface IsKeyBindRegistered {
    (Key: number): void;
    (Key: number, ModifierKeys: TArray<ModifierKey>): void;
}
declare const IsKeyBindRegistered: IsKeyBindRegistered;

declare interface RestartCurrentMod {
    (): void;
}
declare const RestartCurrentMod: RestartCurrentMod;

declare interface UninstallCurrentMod {
    (): void;
}
declare const UninstallCurrentMod: UninstallCurrentMod;

declare interface RestartMod {
    (ModName: string): void;
}
declare const RestartMod: RestartMod;

declare interface UninstallMod {
    (ModName: string): void;
}
declare const UninstallMod: UninstallMod;

declare interface UnregisterHook {
    (UFunctionName: string, PreId: number, PostId: number): void;
}
declare const UnregisterHook: UnregisterHook;

declare interface ExecuteInGameThread {
    (Callback: () => void): void;
    (Callback: () => void, Method: EGameThreadMethod): void;
}
declare const ExecuteInGameThread: ExecuteInGameThread;

declare interface ExecuteInGameThreadWithDelay {
    (DelayMs: number, Callback: () => void): number;
    (Handle: number, DelayMs: number, Callback: () => void): number;
}
declare const ExecuteInGameThreadWithDelay: ExecuteInGameThreadWithDelay;

declare interface RetriggerableExecuteInGameThreadWithDelay {
    (Handle: number, DelayMs: number, Callback: () => void): number;
}
declare const RetriggerableExecuteInGameThreadWithDelay: RetriggerableExecuteInGameThreadWithDelay;

declare interface LoopInGameThreadWithDelay {
    (DelayMs: number, Callback: () => void): number;
}
declare const LoopInGameThreadWithDelay: LoopInGameThreadWithDelay;

declare interface ExecuteInGameThreadAfterFrames {
    (Frames: number, Callback: () => void): number;
}
declare const ExecuteInGameThreadAfterFrames: ExecuteInGameThreadAfterFrames;

declare interface LoopInGameThreadAfterFrames {
    (Frames: number, Callback: () => void): number;
}
declare const LoopInGameThreadAfterFrames: LoopInGameThreadAfterFrames;

declare interface MakeActionHandle {
    (): number;
}
declare const MakeActionHandle: MakeActionHandle;

declare interface CancelDelayedAction {
    (Handle: number): boolean;
}
declare const CancelDelayedAction: CancelDelayedAction;

declare interface PauseDelayedAction {
    (Handle: number): boolean;
}
declare const PauseDelayedAction: PauseDelayedAction;

declare interface UnpauseDelayedAction {
    (Handle: number): boolean;
}
declare const UnpauseDelayedAction: UnpauseDelayedAction;

declare interface ResetDelayedActionTimer {
    (Handle: number): boolean;
}
declare const ResetDelayedActionTimer: ResetDelayedActionTimer;

declare interface SetDelayedActionTimer {
    (Handle: number, NewDelayMs: number): boolean;
}
declare const SetDelayedActionTimer: SetDelayedActionTimer;

declare interface ClearAllDelayedActions {
    (): number;
}
declare const ClearAllDelayedActions: ClearAllDelayedActions;

declare interface IsValidDelayedActionHandle {
    (Handle: number): boolean;
}
declare const IsValidDelayedActionHandle: IsValidDelayedActionHandle;

declare interface IsDelayedActionActive {
    (Handle: number): boolean;
}
declare const IsDelayedActionActive: IsDelayedActionActive;

declare interface IsDelayedActionPaused {
    (Handle: number): boolean;
}
declare const IsDelayedActionPaused: IsDelayedActionPaused;

declare interface GetDelayedActionRate {
    (Handle: number): number;
}
declare const GetDelayedActionRate: GetDelayedActionRate;

declare interface GetDelayedActionTimeRemaining {
    (Handle: number): number;
}
declare const GetDelayedActionTimeRemaining: GetDelayedActionTimeRemaining;

declare interface GetDelayedActionTimeElapsed {
    (Handle: number): number;
}
declare const GetDelayedActionTimeElapsed: GetDelayedActionTimeElapsed;

declare interface GetCurrentThreadId {
    (): ThreadId;
}
declare const GetCurrentThreadId: GetCurrentThreadId;

declare interface GetMainModThreadId {
    (): ThreadId;
}
declare const GetMainModThreadId: GetMainModThreadId;

declare interface GetAsyncThreadId {
    (): ThreadId;
}
declare const GetAsyncThreadId: GetAsyncThreadId;

declare interface GetGameThreadId {
    (): ThreadId;
}
declare const GetGameThreadId: GetGameThreadId;

declare interface IsInMainModThread {
    (): boolean;
}
declare const IsInMainModThread: IsInMainModThread;

declare interface IsInAsyncThread {
    (): boolean;
}
declare const IsInAsyncThread: IsInAsyncThread;

declare interface IsInGameThread {
    (): boolean;
}
declare const IsInGameThread: IsInGameThread;

declare interface StaticConstructObject {
    (Class: UClass, Outer: UObject, Name?: FName, Flags?: EObjectFlags, InternalSetFlags?: EInternalObjectFlags, CopyTransientsFromClassDefaults?: boolean, AssumeTemplateIsArchetype?: boolean, Template?: UObject, InstanceGraph?: FObjectInstancingGraph, ExternalPackage?: UPackage, SubobjectOverrides?: any): UObject;
}
declare const StaticConstructObject: StaticConstructObject;

declare interface RegisterCustomProperty {
    (info: CustomPropertyInfo): void;
}
declare const RegisterCustomProperty: RegisterCustomProperty;

declare interface ForEachUObject {
    (Callback: (object: UObject, ChunkIndex: number, ObjectIndex: number) => void): void;
}
declare const ForEachUObject: ForEachUObject;

declare interface RegisterCustomEvent {
    (EventName: string, Callback: (() => void)): void;
}
declare const RegisterCustomEvent: RegisterCustomEvent;

declare interface RegisterInitGameStatePreHook {
    (Callback: (Context: RemoteUnrealParam<AGameModeBase>) => void): void;
}
declare const RegisterInitGameStatePreHook: RegisterInitGameStatePreHook;

declare interface RegisterInitGameStatePostHook {
    (Callback: (Context: RemoteUnrealParam<AGameModeBase>) => void): void;
}
declare const RegisterInitGameStatePostHook: RegisterInitGameStatePostHook;

declare interface RegisterBeginPlayPreHook {
    (Callback: (Context: RemoteUnrealParam<AActor>) => void): void;
}
declare const RegisterBeginPlayPreHook: RegisterBeginPlayPreHook;

declare interface RegisterBeginPlayPostHook {
    (Callback: (Context: RemoteUnrealParam<AActor>) => void): void;
}
declare const RegisterBeginPlayPostHook: RegisterBeginPlayPostHook;

declare interface RegisterProcessConsoleExecPreHook {
    (Callback?: (Context: RemoteUnrealParam<UObject>, Cmd: string, CommandParts: Record<string | number, any>, Ar: FOutputDevice, Executor: RemoteUnrealParam<UObject>) => boolean): void;
}
declare const RegisterProcessConsoleExecPreHook: RegisterProcessConsoleExecPreHook;

declare interface RegisterProcessConsoleExecPostHook {
    (Callback?: (Context: RemoteUnrealParam<UObject>, Cmd: string, CommandParts: Record<string | number, any>, Ar: FOutputDevice, Executor: RemoteUnrealParam<UObject>) => boolean): void;
}
declare const RegisterProcessConsoleExecPostHook: RegisterProcessConsoleExecPostHook;

declare interface RegisterCallFunctionByNameWithArgumentsPreHook {
    (Callback?: (Context: RemoteUnrealParam<UObject>, Str: string, Ar: FOutputDevice, Executor: RemoteUnrealParam<UObject>, bForceCallWithNonExec: boolean) => boolean): void;
}
declare const RegisterCallFunctionByNameWithArgumentsPreHook: RegisterCallFunctionByNameWithArgumentsPreHook;

declare interface RegisterCallFunctionByNameWithArgumentsPostHook {
    (Callback?: (Context: RemoteUnrealParam<UObject>, Str: string, Ar: FOutputDevice, Executor: RemoteUnrealParam<UObject>, bForceCallWithNonExec: boolean) => boolean): void;
}
declare const RegisterCallFunctionByNameWithArgumentsPostHook: RegisterCallFunctionByNameWithArgumentsPostHook;

declare interface RegisterULocalPlayerExecPreHook {
    (Callback?: (Context: RemoteUnrealParam<UObject>, Str: string, Ar: FOutputDevice, Executor: UObject, bForceCallWithNonExec: boolean) => boolean): void;
}
declare const RegisterULocalPlayerExecPreHook: RegisterULocalPlayerExecPreHook;

declare interface RegisterULocalPlayerExecPostHook {
    (Callback?: (Context: RemoteUnrealParam<UObject>, Str: string, Ar: FOutputDevice, Executor: UObject, bForceCallWithNonExec: boolean) => boolean): void;
}
declare const RegisterULocalPlayerExecPostHook: RegisterULocalPlayerExecPostHook;

declare interface RegisterConsoleCommandHandler {
    (CommandName: string, Callback?: (Cmd: string, CommandParts: Record<string | number, any>, Ar: FOutputDevice) => boolean): void;
}
declare const RegisterConsoleCommandHandler: RegisterConsoleCommandHandler;

declare interface RegisterConsoleCommandGlobalHandler {
    (CommandName: string, Callback?: (Cmd: string, CommandParts: Record<string | number, any>, Ar: FOutputDevice) => boolean): void;
}
declare const RegisterConsoleCommandGlobalHandler: RegisterConsoleCommandGlobalHandler;

declare interface ExecuteAsync {
    (Callback: () => void): void;
}
declare const ExecuteAsync: ExecuteAsync;

declare interface ExecuteWithDelay {
    (DelayInMilliseconds: number, Callback: () => void): void;
}
declare const ExecuteWithDelay: ExecuteWithDelay;

declare interface LoadAsset {
    (AssetPathAndName: string): void;
}
declare const LoadAsset: LoadAsset;

declare interface FindObject {
    (ClassName: string | FName | undefined, ObjectShortName: string | FName | undefined, RequiredFlags: EObjectFlags, BannedFlags: EObjectFlags): UObject;
    (InClass: UClass, InOuter: UObject, Name: string, ExactClass: boolean): UObject;
}
declare const FindObject: FindObject;

declare interface FindObjects {
    (NumObjectsToFind: number, ClassName: string | FName | undefined, ObjectShortName: string | FName | undefined, RequiredFlags: EObjectFlags, BannedFlags: EObjectFlags, bExactClass: any): TArray<UObject>;
}
declare const FindObjects: FindObjects;

declare interface LoopAsync {
    (DelayInMilliseconds: number, Callback: () => boolean): void;
}
declare const LoopAsync: LoopAsync;

declare interface CustomPropertyInfo {
    Name: string;
    Type: TArray<PropertyTypes>;
    BelongsToClass: string;
    OffsetInternal: OffsetInternalInfo | number;
    ArrayPropertyInfo: ArrayPropertyInfo;
}
declare const CustomPropertyInfo: CustomPropertyInfo;

declare interface OffsetInternalInfo {
    Property: string;
    RelativeOffset: number;
}
declare const OffsetInternalInfo: OffsetInternalInfo;

declare interface ArrayPropertyInfo {
    Type: TArray<PropertyTypes>;
}
declare const ArrayPropertyInfo: ArrayPropertyInfo;

declare interface UE4SS {
    GetVersion(): [number, any];
}
declare const UE4SS: UE4SS;

declare interface UnrealVersion {
    GetMajor(): number;
    GetMinor(): number;
    IsEqual(MajorVersion: number, MinorVersion: number): boolean;
    IsAtLeast(MajorVersion: number, MinorVersion: number): boolean;
    IsAtMost(MajorVersion: number, MinorVersion: number): boolean;
    IsBelow(MajorVersion: number, MinorVersion: number): boolean;
    IsAbove(MajorVersion: number, MinorVersion: number): boolean;
}
declare const UnrealVersion: UnrealVersion;

declare interface _Internal_FString {
    ToString(): string;
    Empty(): void;
    Clear(): void;
    Len(): number;
    IsEmpty(): boolean;
    Append(str: string | FString): void;
    Find(search: string): number | void;
    StartsWith(prefix: string): boolean;
    EndsWith(suffix: string): boolean;
    ToUpper(): FString;
    ToLower(): FString;
}
declare type FString = string & _Internal_FString;
declare const FString: _Internal_FString;

declare interface FUtf8String {
    ToString(): string;
    Empty(): void;
    Clear(): void;
    Len(): number;
    IsEmpty(): boolean;
    Append(str: string | FUtf8String): void;
    Find(search: string): number | void;
    StartsWith(prefix: string): boolean;
    EndsWith(suffix: string): boolean;
    ToUpper(): FUtf8String;
    ToLower(): FUtf8String;
}
declare const FUtf8String: FUtf8String;

declare interface FAnsiString {
    ToString(): string;
    Empty(): void;
    Clear(): void;
    Len(): number;
    IsEmpty(): boolean;
    Append(str: string | FAnsiString): void;
    Find(search: string): number | void;
    StartsWith(prefix: string): boolean;
    EndsWith(suffix: string): boolean;
    ToUpper(): FAnsiString;
    ToLower(): FAnsiString;
}
declare const FAnsiString: FAnsiString;

declare interface FieldClass extends LocalObject {
    GetFName(): FName;
}
declare const FieldClass: FieldClass;

declare interface RemoteObject {
    IsValid(): boolean;
}
declare const RemoteObject: RemoteObject;

declare interface Property extends RemoteObject {
    GetFullName(): string;
    GetFName(): FName;
    IsA(PropertyType: PropertyTypes): boolean;
    GetClass(): PropertyClass;
    ContainerPtrToValuePtr(Container: UObjectDerivative, ArrayIndex: number): lightuserdata;
    ImportText(Buffer: string, Data: lightuserdata, PortFlags: number, OwnerObject: UObject): void;
}
declare const Property: Property;

declare interface ObjectProperty extends Property {
    GetPropertyClass(): UClass;
}
declare const ObjectProperty: ObjectProperty;

declare interface BoolProperty extends Property {
    GetByteMask(): number;
    GetByteOffset(): number;
    GetFieldMask(): number;
    GetFieldSize(): number;
}
declare const BoolProperty: BoolProperty;

declare interface StructProperty extends Property {
    GetStruct(): UScriptStruct;
}
declare const StructProperty: StructProperty;

declare interface ArrayProperty extends Property {
    GetInner(): Property;
}
declare const ArrayProperty: ArrayProperty;

declare interface UObjectReflection {
    GetProperty(PropertyName: string): Property;
}
declare const UObjectReflection: UObjectReflection;

declare interface TSet<T = any> {
    Add(Element: T): void;
    Contains(Element: T): boolean;
    Remove(Element: T): void;
    Empty(): void;
    ForEach(Callback?: (element: T) => boolean): void;
    __len(): number;
    IsValid(): boolean;
    type(): 'TSet';
}
declare const TSet: TSet<any>;

declare interface TMap<K = any, V = any> {
    Find(key: K): V;
    Add(key: K, value: V): void;
    Contains(key: K): boolean;
    Remove(key: K): void;
    Empty(): void;
    ForEach(callback: any): void;
}
declare const TMap: TMap<any, any>;

declare interface TSoftClassPtr<T = any> {

}
declare const TSoftClassPtr: TSoftClassPtr<any>;

declare interface TSoftObjectPtr<T = any> {

}
declare const TSoftObjectPtr: TSoftObjectPtr<any>;

declare interface TSubclassOf<T = any> {

}
declare const TSubclassOf: TSubclassOf<any>;

declare interface ThreadId {
    ToString(): string;
}
declare const ThreadId: ThreadId;

