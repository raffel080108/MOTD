declare interface ULocalizableMessageLibrary extends UBlueprintFunctionLibrary {
    Reset_LocalizableMessage(Message: FLocalizableMessage): void;
    IsEmpty_LocalizableMessage(Message: FLocalizableMessage): boolean;
    Conv_LocalizableMessageToText(WorldContextObject: UObject, Message: FLocalizableMessage): FText;
}
declare const ULocalizableMessageLibrary: ULocalizableMessageLibrary;

