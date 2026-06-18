declare interface FLocalizableMessage {
    Key: string;
    DefaultText: string;
    Substitutions: FLocalizableMessageParameterEntry[];
}

declare interface FLocalizableMessageParameterEntry {
    Key: string;
    Value: FInstancedStruct;
}

declare interface FLocalizableMessageParameterFloat {
    Value: number;
}

declare interface FLocalizableMessageParameterInt {
    Value: number;
}

declare interface FLocalizableMessageParameterMessage {
    Value: FLocalizableMessage;
}

declare interface FLocalizableMessageParameterString {
    Value: string;
}

