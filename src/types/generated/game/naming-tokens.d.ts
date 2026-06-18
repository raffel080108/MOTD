declare interface FNamingTokenData {
    TokenKey: string;
    DisplayName: string;
    Description: string;
    FunctionName: string;
}

declare interface FNamingTokenFilterArgs {
    AdditionalNamespacesToInclude: string[];
    bIncludeGlobal: boolean;
    bForceCaseSensitive: boolean;
    bNativeOnly: boolean;
}

declare interface FNamingTokenResultData {
    OriginalText: string;
    EvaluatedText: string;
    TokenValues: FNamingTokenValueData[];
}

declare interface FNamingTokenValueData {
    TokenKey: string;
    ProvidedNamespace: string;
    TokenValue: string;
    bWasEvaluated: boolean;
}

declare interface FNamingTokensEvaluationData {
    CurrentDateTime: FDateTime;
    Contexts: UObject[];
}

declare interface UGlobalNamingTokens extends UNamingTokens {
    readonly __staticRegistry: 
        UNamingTokens['__staticRegistry'];
    readonly __propertyRegistry: 
        UNamingTokens['__propertyRegistry'];
}

declare interface UNamingTokens extends UObject {
    readonly __static_UNamingTokens: {
        ProcessTokenTemplateFunction(): string;
        OnPreEvaluate(InEvaluationData: FNamingTokensEvaluationData): void;
        OnPostEvaluate(): void;
        GetCurrentDateTime(): FDateTime;
    };
    readonly __properties_UNamingTokens: {
        CustomTokens: FNamingTokenData[];
        CurrentEvaluationData: FNamingTokensEvaluationData;
        Namespace: string;
    };
    readonly __staticRegistry: 
        UNamingTokens['__static_UNamingTokens'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNamingTokens['__properties_UNamingTokens'] &
        UObject['__propertyRegistry'];
}

declare interface UNamingTokensEngineSubsystem extends UEngineSubsystem {
    readonly __static_UNamingTokensEngineSubsystem: {
        UnregisterGlobalNamespace(InNameSpace: string): void;
        RegisterGlobalNamespace(InNameSpace: string): void;
        IsGlobalNamespaceRegistered(InNameSpace: string): boolean;
        GetNamingTokensNative(InNameSpace: string): UNamingTokens;
        GetNamingTokens(InNameSpace: string): UNamingTokens;
        GetMultipleNamingTokens(InNamespaces: string[]): UNamingTokens[];
        GetGlobalNamespaces(): string[];
        GetAllNamespaces(): string[];
        EvaluateTokenText(InTokenText: string, InFilter: FNamingTokenFilterArgs, InContexts: UObject[]): FNamingTokenResultData;
        EvaluateTokenString(InTokenString: string, InFilter: FNamingTokenFilterArgs, InContexts: UObject[]): FNamingTokenResultData;
        ClearCachedNamingTokens(): void;
    };
    readonly __properties_UNamingTokensEngineSubsystem: {
        CachedNamingTokens: TMap<string, UNamingTokens>;
    };
    readonly __staticRegistry: 
        UNamingTokensEngineSubsystem['__static_UNamingTokensEngineSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UNamingTokensEngineSubsystem['__properties_UNamingTokensEngineSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

