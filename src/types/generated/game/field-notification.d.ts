declare interface FFieldNotificationId {
    FieldName: string;
}

declare interface INotifyFieldValueChanged extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

