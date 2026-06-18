declare interface ULocalizableMessageLibrary extends UBlueprintFunctionLibrary {
    readonly __static_ULocalizableMessageLibrary: {
        Reset_LocalizableMessage(Message: FLocalizableMessage): void;
        IsEmpty_LocalizableMessage(Message: FLocalizableMessage): boolean;
        Conv_LocalizableMessageToText(WorldContextObject: UObject, Message: FLocalizableMessage): string;
    };
    readonly __staticRegistry: 
        ULocalizableMessageLibrary['__static_ULocalizableMessageLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

