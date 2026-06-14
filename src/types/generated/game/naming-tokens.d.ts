declare interface FNamingTokenData {
    TokenKey: FString;
    DisplayName: FText;
    Description: FText;
    FunctionName: FName;
}
declare const FNamingTokenData: FNamingTokenData;

declare interface FNamingTokenFilterArgs {
    AdditionalNamespacesToInclude: TArray<FString>;
    bIncludeGlobal: boolean;
    bForceCaseSensitive: boolean;
    bNativeOnly: boolean;
}
declare const FNamingTokenFilterArgs: FNamingTokenFilterArgs;

declare interface FNamingTokenResultData {
    OriginalText: FText;
    EvaluatedText: FText;
    TokenValues: TArray<FNamingTokenValueData>;
}
declare const FNamingTokenResultData: FNamingTokenResultData;

declare interface FNamingTokenValueData {
    TokenKey: FString;
    ProvidedNamespace: FString;
    TokenValue: FText;
    bWasEvaluated: boolean;
}
declare const FNamingTokenValueData: FNamingTokenValueData;

declare interface FNamingTokensEvaluationData {
    CurrentDateTime: FDateTime;
    Contexts: TArray<UObject>;
}
declare const FNamingTokensEvaluationData: FNamingTokensEvaluationData;

declare interface UGlobalNamingTokens extends UNamingTokens {

}
declare const UGlobalNamingTokens: UGlobalNamingTokens;

declare interface UNamingTokens extends UObject {
    CustomTokens: TArray<FNamingTokenData>;
    CurrentEvaluationData: FNamingTokensEvaluationData;
    Namespace: FString;
    ProcessTokenTemplateFunction(): FText;
    OnPreEvaluate(InEvaluationData: FNamingTokensEvaluationData): void;
    OnPostEvaluate(): void;
    GetCurrentDateTime(): FDateTime;
}
declare const UNamingTokens: UNamingTokens;

declare interface UNamingTokensEngineSubsystem extends UEngineSubsystem {
    CachedNamingTokens: Record<FString, UNamingTokens>;
    UnregisterGlobalNamespace(InNameSpace: string | FString): void;
    RegisterGlobalNamespace(InNameSpace: string | FString): void;
    IsGlobalNamespaceRegistered(InNameSpace: string | FString): boolean;
    GetNamingTokensNative(InNameSpace: string | FString): UNamingTokens;
    GetNamingTokens(InNameSpace: string | FString): UNamingTokens;
    GetMultipleNamingTokens(InNamespaces: string | FString[]): TArray<UNamingTokens>;
    GetGlobalNamespaces(): TArray<FString>;
    GetAllNamespaces(): TArray<FString>;
    EvaluateTokenText(InTokenText: FText, InFilter: FNamingTokenFilterArgs, InContexts: TArray<UObject>): FNamingTokenResultData;
    EvaluateTokenString(InTokenString: string | FString, InFilter: FNamingTokenFilterArgs, InContexts: TArray<UObject>): FNamingTokenResultData;
    ClearCachedNamingTokens(): void;
}
declare const UNamingTokensEngineSubsystem: UNamingTokensEngineSubsystem;

