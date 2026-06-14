declare interface UOptimusSettings extends UDeveloperSettings {
    DefaultMode: EOptimusDefaultDeformerMode;
    DefaultDeformer: TSoftObjectPtr<UMeshDeformer>;
    DefaultRecomputeTangentDeformer: TSoftObjectPtr<UMeshDeformer>;
}
declare const UOptimusSettings: UOptimusSettings;

