declare interface ADataflowActor extends AActor {
    readonly __properties_ADataflowActor: {
        DataflowComponent: UDataflowComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ADataflowActor['__properties_ADataflowActor'] &
        AActor['__propertyRegistry'];
}

declare interface FCollectionAttributeKey {
    Attribute: string;
    Group: string;
}

declare interface FDataflowDynamicMeshArray extends FDataflowAnyType {
    Value: UDynamicMesh[];
}

declare interface UDataflowComponent extends UPrimitiveComponent {
    readonly __staticRegistry: 
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UPrimitiveComponent['__propertyRegistry'];
}

