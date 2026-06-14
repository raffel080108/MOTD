declare interface ADataflowActor extends AActor {
    DataflowComponent: UDataflowComponent;
}
declare const ADataflowActor: ADataflowActor;

declare interface FCollectionAttributeKey {
    Attribute: FString;
    Group: FString;
}
declare const FCollectionAttributeKey: FCollectionAttributeKey;

declare interface FDataflowDynamicMeshArray extends FDataflowAnyType {
    Value: TArray<UDynamicMesh>;
}
declare const FDataflowDynamicMeshArray: FDataflowDynamicMeshArray;

declare interface UDataflowComponent extends UPrimitiveComponent {

}
declare const UDataflowComponent: UDataflowComponent;

