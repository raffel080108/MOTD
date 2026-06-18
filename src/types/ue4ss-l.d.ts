// Type definitions for the UE4SSL (UE4SS Lua/JS-style scripting) runtime
// Based on "UE4SSL Basic Doc.md"
//
// This is an ambient global script environment: there is no module system
// (no `require`, no `import`/`export`), so every declaration below is
// available as a global.

/**
 * A handle to a live Unreal object (e.g. an actor or a class).
 * Most finder/creator functions return one of these. Game-side functions
 * and properties are accessed through CallFunction / GetProperty / etc,
 * but a handle also exposes a few built-in methods directly.
 */
interface UE4SSLUObject {
  /** True while the handle still points at a live object. */
  IsValid(): boolean;

  /** Full path name of the object. */
  GetFullName(): string;

  /** Short object name. */
  GetName(): string;

  /** The object's UClass, returned as another handle. */
  GetClass(): UObject;

  /** The object's address, as a BigInt. */
  GetAddress(): bigint;
}

// ---------------------------------------------------------------------------
// Finding and creating objects
// ---------------------------------------------------------------------------

/**
 * First live instance of a class. Returns nothing until that object
 * exists in the level. This is the usual entry point, e.g.
 * `FindFirstOf("RunManager")`.
 */
declare function FindFirstOf(className: string): UObject | null;

/** Every live instance of a class. */
declare function FindAllOf(className: string): UObject[];

/**
 * An already-loaded object by path. Only sees objects that are already
 * loaded; if it returns nothing, load the asset first with `LoadObject`,
 * then look it up.
 */
declare function StaticFindObject(path: string): UObject | null;

/** Force-load an asset by path, then return it. */
declare function LoadObject(path: string): UObject;

/** Actors implementing a given interface (by path). */
declare function FindAllActorsWithInterface(path: string): UObject[];

/**
 * Construct a new object. This is the replacement for
 * `StaticConstructObject`, which does not exist in this runtime.
 */
declare function NewUObject(cls: UObject, outer: UObject): UObject;

// ---------------------------------------------------------------------------
// Calling functions and properties
// ---------------------------------------------------------------------------

interface ObjectWithStaticRegistry {
  __staticRegistry: object;
}

type StaticFunctions<T> = T extends { readonly __staticRegistry: infer S } ? S : object;

type FunctionKeys<T> = keyof StaticFunctions<T>;

type ArgsFor<T, F> = 
  F extends keyof StaticFunctions<T>
    ? StaticFunctions<T>[F] extends (...args: never[]) => unknown 
      ? Parameters<StaticFunctions<T>[F]> 
      : unknown[]
    : unknown[];

type ReturnFor<T, F> = 
  F extends keyof StaticFunctions<T>
    ? StaticFunctions<T>[F] extends (...args: never[]) => unknown 
      ? ReturnType<StaticFunctions<T>[F]> 
      : unknown
    : unknown;

declare function CallFunction<
  TObject extends ObjectWithStaticRegistry,
  TFunction extends FunctionKeys<TObject> | (string & {})
>(
  object: TObject,
  functionName: TFunction,
  ...args: ArgsFor<TObject, TFunction>
): ReturnFor<TObject, TFunction>;
 
/** Extended-form variant of CallFunction */
declare function CallFunctionEx<
  TObject extends ObjectWithStaticRegistry,
  TFunction extends FunctionKeys<TObject> | (string & {})
>(
  object: TObject,
  functionName: TFunction,
  ...args: ArgsFor<TObject, TFunction>
): ReturnFor<TObject, TFunction>;


interface ObjectWithPropertyRegistry {
  __propertyRegistry: object;
}

// Safely extract the combined reflection property map from T
type GetReflectedProperties<T> = T extends { readonly __propertyRegistry: infer P } ? P : object;

// Get valid property names for autocomplete
type UE4SSLPropertyKeys<T> = keyof GetReflectedProperties<T>;

// Lookup the exact type of a specific property name
type UE4SSLPropertyTypeFor<T, K> = 
  K extends keyof GetReflectedProperties<T> ? GetReflectedProperties<T>[K] : unknown;

// Generate a valid partial map for structural updates
type UE4SSLObjectPatchFor<T> = Partial<GetReflectedProperties<T>>;

declare function GetProperty<
  TObject extends ObjectWithPropertyRegistry,
  TProperty extends UE4SSLPropertyKeys<TObject> | (string & {})
>(
  object: TObject,
  propertyName: TProperty
): UE4SSLPropertyTypeFor<TObject, TProperty> | null;

/** Write a property on an object enforcing exact type-matching. */
declare function SetProperty<
  TObject extends ObjectWithPropertyRegistry,
  TProperty extends UE4SSLPropertyKeys<TObject> | (string & {})
>(
  object: TObject,
  propertyName: TProperty,
  value: UE4SSLPropertyTypeFor<TObject, TProperty>
): void;

/** Apply munknown properties to an object at once using a type-safe partial patch. */
declare function ApplyObjectPatch<TObject extends ObjectWithPropertyRegistry>(
  object: TObject,
  patchObject: UE4SSLObjectPatchFor<TObject> & Record<string, unknown>
): void;

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------

type UE4SSLKeyName =
  | "INSERT"
  | "END"
  | "HOME"
  | "DELETE"
  | "TAB"
  | "SPACE"
  | "ENTER"
  | "ESCAPE"
  | "PAUSE"
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12";

type UE4SSLModifierKey = "ctrl" | "shift" | "alt";

/** Bind a key to a callback. `modifiers` is an optional lowercase array. */
declare function RegisterKeyBind(
  key: UE4SSLKeyName,
  callback: () => void,
  modifiers?: UE4SSLModifierKey[]
): void;

// ---------------------------------------------------------------------------
// Hooks and events
// ---------------------------------------------------------------------------

type UE4SSLHookCallback = (self: UObject, args: unknown[]) => void;

/** Ids returned by RegisterHook, to be passed to UnregisterHook. */
interface UE4SSLHookIds {
  preId: number;
  postId: number;
}

/**
 * Run code around a function, given a function path like
 * `"/Script/RogueCore.RunManager:StartRun"`. The pre callback runs before
 * the original function, the post callback after. Returns ids you can
 * pass to `UnregisterHook`.
 */
declare function RegisterHook(
  funcPath: string,
  preCallback: UE4SSLHookCallback,
  postCallback?: UE4SSLHookCallback
): UE4SSLHookIds;

/** Remove a hook previously registered with RegisterHook. */
declare function UnregisterHook(preId: number, postId: number): void;

/** Watch every call to a function. */
declare function RegisterProcessEventWatch(
  funcName: string,
  callback: UE4SSLHookCallback
): number;

/** Lower-level function hook. */
declare function HookUFunction(
  funcName: string,
  callback: UE4SSLHookCallback
): number;

/** Hook input-bind events. Exact signature unconfirmed. */
declare function RegisterBindHook(...args: unknown[]): number;

/** Remove a bind hook. */
declare function UnregisterBindHook(preBindId: number, postBindId: number): void;

/** Run before a level loads. */
declare function RegisterLoadMapPreHook(callback: UE4SSLHookCallback): number;

/** Run after a level loads. */
declare function RegisterLoadMapPostHook(callback: UE4SSLHookCallback): number;

/** Remove a load-map hook. */
declare function UnregisterLoadMapHook(callbackId: number): void;

/** Fire when a new object of the given class spawns. */
declare function NotifyOnNewObject(
  className: string,
  callback: (newObject: UObject) => void
): void;

// ---------------------------------------------------------------------------
// Delegates
// ---------------------------------------------------------------------------

/** Bind to a game function on an Unreal multicast delegate. */
declare function BindDelegate(
  owner: UObject,
  delegateName: string,
  target: UObject,
  functionName: string
): void;

/**
 * Bind to a JS callback. Returns a `callbackId` that
 * `UnbindDelegateCallback` later takes.
 */
declare function BindDelegateCallback(
  owner: UObject,
  delegateName: string,
  callback: (...args: unknown[]) => void
): number;

/** Unbind a game function previously bound with BindDelegate. */
declare function UnbindDelegate(
  owner: UObject,
  delegateName: string,
  target: UObject,
  functionName: string
): void;

/** Unbind a JS callback previously bound with BindDelegateCallback. */
declare function UnbindDelegateCallback(callbackId: number): void;

/** Remove all bindings from a delegate. */
declare function ClearDelegate(owner: UObject, delegateName: string): void;

// ---------------------------------------------------------------------------
// Timers
// ---------------------------------------------------------------------------
// QuickJS has no event loop of its own, so the host provides these.

/** Run once after a delay. Returns an id. */
declare function setTimeout(callback: () => void, delayMs: number): number;

/** Run repeatedly. Returns an id. */
declare function setInterval(callback: () => void, intervalMs: number): number;

/** Cancel a setTimeout. */
declare function clearTimeout(id: number): void;

/** Cancel a setInterval. */
declare function clearInterval(id: number): void;

/**
 * Internal watchdog: run callback, abort if it runs too long, so a slow
 * callback can't hang the game.
 */
declare function __withExecBudget<T>(budgetMs: number, callback: () => T): T;

// ---------------------------------------------------------------------------
// Files
// ---------------------------------------------------------------------------
// Use these for mod config and save data. There is no `fs` module and no
// `require`, so these globals are the whole story. Build every path from
// `getModsDirectory()`, because a relative path resolves against the
// game's `Win64` folder rather than your mod folder.

/** Read a file as a UTF-8 string. */
declare function readFile(path: string): string | null;

/** Write or overwrite a file. */
declare function writeFile(path: string, content: string): void;

/** True if a file or folder exists. */
declare function exists(path: string): boolean;

/** Create a directory. */
declare function mkdir(path: string): void;

/** List a directory's entries. */
declare function readdir(path: string): string[];

/** Move or rename a file or folder. */
declare function rename(oldPath: string, newPath: string): void;

/** File metadata. Shape unconfirmed. */
declare function stat(path: string): unknown;

/** Low-level load; prefer `readFile`. */
declare function loadFile(path: string): unknown;

/** Absolute path to ...\ue4ss\mods */
declare function getModsDirectory(): string;

/** Absolute path to the game install. */
declare function getGameDirectory(): string;

// ---------------------------------------------------------------------------
// Networking
// ---------------------------------------------------------------------------
// QuickJS has no `fetch` by default, so the host adds these.

interface UE4SSLFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  [key: string]: unknown;
}

/** Download to disk, asynchronously. */
declare function downloadFile(url: string, path: string): Promise<void>;

/** Download to disk, blocking. */
declare function downloadFileSync(url: string, path: string): void;

/** HTTP request, asynchronously. Return shape unconfirmed. */
declare function fetch(
  url: string,
  options?: UE4SSLFetchOptions
): Promise<unknown>;

/** HTTP request, blocking. Return shape unconfirmed. */
declare function fetchSync(url: string, options?: UE4SSLFetchOptions): unknown;

// ---------------------------------------------------------------------------
// Audio
// ---------------------------------------------------------------------------

/** Play an audio file from disk. */
declare function playSoundFile(path: string): void;

// ---------------------------------------------------------------------------
// Raw memory
// ---------------------------------------------------------------------------
// Advanced, and rarely needed. `PatchByte` is disabled when safe mode is on.

/** Read one byte at a BigInt address. */
declare function ReadByte(address: bigint): number;

/** Write one byte at a BigInt address. Disabled when safe mode is on. */
declare function PatchByte(address: bigint, value: number): void;

// ---------------------------------------------------------------------------
// Logging
// ---------------------------------------------------------------------------

/** Write to the UE4SS console and UE4SS.log. */
declare function print(...args: unknown[]): void;

// ---------------------------------------------------------------------------
// Out parameters
// ---------------------------------------------------------------------------

/**
 * Some game functions write back through a by-reference argument.
 * `ParamRef.set(value)` is how you assign that out value.
 */
declare interface ParamRef {
  set(value: unknown): void;
}