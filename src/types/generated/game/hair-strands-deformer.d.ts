declare interface UOptimusGroomAssetComponentSource extends UOptimusComponentSource {

}
declare const UOptimusGroomAssetComponentSource: UOptimusGroomAssetComponentSource;

declare interface UOptimusGroomAttributeReadDataInterface extends UOptimusComputeDataInterface {
    GroomAttributeName: FName;
    GroomAttributeGroup: EOptimusGroomExecDomain;
    GroomAttributeType: EOptimusGroomAttributeTypes;
}
declare const UOptimusGroomAttributeReadDataInterface: UOptimusGroomAttributeReadDataInterface;

declare interface UOptimusGroomAttributeReadDataProvider extends UComputeDataProvider {
    MeshComponent: UMeshComponent;
    GroomAttributeName: FName;
    GroomAttributeGroup: EOptimusGroomExecDomain;
    GroomAttributeType: EOptimusGroomAttributeTypes;
}
declare const UOptimusGroomAttributeReadDataProvider: UOptimusGroomAttributeReadDataProvider;

declare interface UOptimusGroomExecDataInterface extends UOptimusComputeDataInterface {
    Domain: EOptimusGroomExecDomain;
}
declare const UOptimusGroomExecDataInterface: UOptimusGroomExecDataInterface;

declare interface UOptimusGroomExecDataProvider extends UComputeDataProvider {
    MeshComponent: UMeshComponent;
    Domain: EOptimusGroomExecDomain;
}
declare const UOptimusGroomExecDataProvider: UOptimusGroomExecDataProvider;

declare interface UOptimusGroomGuidesReadDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusGroomGuidesReadDataInterface: UOptimusGroomGuidesReadDataInterface;

declare interface UOptimusGroomGuidesReadDataProvider extends UComputeDataProvider {
    MeshComponent: UMeshComponent;
}
declare const UOptimusGroomGuidesReadDataProvider: UOptimusGroomGuidesReadDataProvider;

declare interface UOptimusGroomGuidesWriteDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusGroomGuidesWriteDataInterface: UOptimusGroomGuidesWriteDataInterface;

declare interface UOptimusGroomGuidesWriteDataProvider extends UComputeDataProvider {
    MeshComponent: UMeshComponent;
}
declare const UOptimusGroomGuidesWriteDataProvider: UOptimusGroomGuidesWriteDataProvider;

declare interface UOptimusGroomMeshesReadDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusGroomMeshesReadDataInterface: UOptimusGroomMeshesReadDataInterface;

declare interface UOptimusGroomMeshesReadDataProvider extends UComputeDataProvider {
    MeshComponent: UMeshComponent;
}
declare const UOptimusGroomMeshesReadDataProvider: UOptimusGroomMeshesReadDataProvider;

declare interface UOptimusGroomSolverComponentSource extends UOptimusComponentSource {

}
declare const UOptimusGroomSolverComponentSource: UOptimusGroomSolverComponentSource;

declare interface UOptimusGroomSolverReadDataInterface extends UOptimusComputeDataInterface {
    ResetSimulationTrigger: FName;
}
declare const UOptimusGroomSolverReadDataInterface: UOptimusGroomSolverReadDataInterface;

declare interface UOptimusGroomSolverReadDataProvider extends UComputeDataProvider {
    SolverComponent: UGroomSolverComponent;
    DeformerInstance: UOptimusDeformerInstance;
}
declare const UOptimusGroomSolverReadDataProvider: UOptimusGroomSolverReadDataProvider;

declare interface UOptimusGroomStrandsReadDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusGroomStrandsReadDataInterface: UOptimusGroomStrandsReadDataInterface;

declare interface UOptimusGroomStrandsReadDataProvider extends UComputeDataProvider {
    MeshComponent: UMeshComponent;
}
declare const UOptimusGroomStrandsReadDataProvider: UOptimusGroomStrandsReadDataProvider;

declare interface UOptimusGroomStrandsWriteDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusGroomStrandsWriteDataInterface: UOptimusGroomStrandsWriteDataInterface;

declare interface UOptimusGroomStrandsWriteDataProvider extends UComputeDataProvider {
    MeshComponent: UMeshComponent;
}
declare const UOptimusGroomStrandsWriteDataProvider: UOptimusGroomStrandsWriteDataProvider;

