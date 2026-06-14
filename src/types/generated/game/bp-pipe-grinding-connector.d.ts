declare interface ABP_PipeGrindingConnector_C extends AZipLineConnector {
    UberGraphFrame: FPointerToUberGraphFrame;
    NS_ZipLine_Connect: UNiagaraComponent;
    NS_Zipline_Connector_Attached_Converted: UNiagaraComponent;
    NE_3p_TrackGrinding_Sparks_Converted: UNiagaraComponent;
    SpotLight2: USpotLightComponent;
    SpotLight1: USpotLightComponent;
    SM_BalancingBoard_01: UStaticMeshComponent;
    ConnectorMesh: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    SetConnectorVisible(inVisible: boolean): void;
    ReceiveConnected(WorldLocation: FVector, Direction: FVector): void;
    ReceiveDisconnected(): void;
    ReceiveUpdateZipLinePoint(WorldLocation: FVector, Directioy: FVector, Speeding: boolean): void;
    UpdateLocation(Location: FVector, Direction: FVector): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_PipeGrindingConnector(EntryPoint: number): void;
}
declare const ABP_PipeGrindingConnector_C: ABP_PipeGrindingConnector_C;

