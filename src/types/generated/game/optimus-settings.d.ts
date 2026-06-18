declare interface UOptimusSettings extends UDeveloperSettings {
    readonly __properties_UOptimusSettings: {
        DefaultMode: EOptimusDefaultDeformerMode;
        DefaultDeformer: TSoftObjectPtr<UMeshDeformer>;
        DefaultRecomputeTangentDeformer: TSoftObjectPtr<UMeshDeformer>;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSettings['__properties_UOptimusSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

