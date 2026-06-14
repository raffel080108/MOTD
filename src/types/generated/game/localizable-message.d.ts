declare interface FLocalizableMessage {
    Key: FString;
    DefaultText: FString;
    Substitutions: TArray<FLocalizableMessageParameterEntry>;
}
declare const FLocalizableMessage: FLocalizableMessage;

declare interface FLocalizableMessageParameterEntry {
    Key: FString;
    Value: FInstancedStruct;
}
declare const FLocalizableMessageParameterEntry: FLocalizableMessageParameterEntry;

declare interface FLocalizableMessageParameterFloat {
    Value: number;
}
declare const FLocalizableMessageParameterFloat: FLocalizableMessageParameterFloat;

declare interface FLocalizableMessageParameterInt {
    Value: int64;
}
declare const FLocalizableMessageParameterInt: FLocalizableMessageParameterInt;

declare interface FLocalizableMessageParameterMessage {
    Value: FLocalizableMessage;
}
declare const FLocalizableMessageParameterMessage: FLocalizableMessageParameterMessage;

declare interface FLocalizableMessageParameterString {
    Value: FString;
}
declare const FLocalizableMessageParameterString: FLocalizableMessageParameterString;

