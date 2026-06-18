declare interface UOptimusGroomAssetComponentSource extends UOptimusComponentSource {
    readonly __staticRegistry: 
        UOptimusComponentSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComponentSource['__propertyRegistry'];
}

declare interface UOptimusGroomAttributeReadDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusGroomAttributeReadDataInterface: {
        GroomAttributeName: string;
        GroomAttributeGroup: EOptimusGroomExecDomain;
        GroomAttributeType: EOptimusGroomAttributeTypes;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomAttributeReadDataInterface['__properties_UOptimusGroomAttributeReadDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGroomAttributeReadDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGroomAttributeReadDataProvider: {
        MeshComponent: UMeshComponent;
        GroomAttributeName: string;
        GroomAttributeGroup: EOptimusGroomExecDomain;
        GroomAttributeType: EOptimusGroomAttributeTypes;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomAttributeReadDataProvider['__properties_UOptimusGroomAttributeReadDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusGroomExecDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusGroomExecDataInterface: {
        Domain: EOptimusGroomExecDomain;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomExecDataInterface['__properties_UOptimusGroomExecDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGroomExecDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGroomExecDataProvider: {
        MeshComponent: UMeshComponent;
        Domain: EOptimusGroomExecDomain;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomExecDataProvider['__properties_UOptimusGroomExecDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusGroomGuidesReadDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGroomGuidesReadDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGroomGuidesReadDataProvider: {
        MeshComponent: UMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomGuidesReadDataProvider['__properties_UOptimusGroomGuidesReadDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusGroomGuidesWriteDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGroomGuidesWriteDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGroomGuidesWriteDataProvider: {
        MeshComponent: UMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomGuidesWriteDataProvider['__properties_UOptimusGroomGuidesWriteDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusGroomMeshesReadDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGroomMeshesReadDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGroomMeshesReadDataProvider: {
        MeshComponent: UMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomMeshesReadDataProvider['__properties_UOptimusGroomMeshesReadDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusGroomSolverComponentSource extends UOptimusComponentSource {
    readonly __staticRegistry: 
        UOptimusComponentSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComponentSource['__propertyRegistry'];
}

declare interface UOptimusGroomSolverReadDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusGroomSolverReadDataInterface: {
        ResetSimulationTrigger: string;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomSolverReadDataInterface['__properties_UOptimusGroomSolverReadDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGroomSolverReadDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGroomSolverReadDataProvider: {
        SolverComponent: UGroomSolverComponent;
        DeformerInstance: UOptimusDeformerInstance;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomSolverReadDataProvider['__properties_UOptimusGroomSolverReadDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusGroomStrandsReadDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGroomStrandsReadDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGroomStrandsReadDataProvider: {
        MeshComponent: UMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomStrandsReadDataProvider['__properties_UOptimusGroomStrandsReadDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusGroomStrandsWriteDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGroomStrandsWriteDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGroomStrandsWriteDataProvider: {
        MeshComponent: UMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGroomStrandsWriteDataProvider['__properties_UOptimusGroomStrandsWriteDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

