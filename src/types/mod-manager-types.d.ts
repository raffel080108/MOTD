declare interface ModManagerMod extends AActor, IBPI_RCMod_C, TScriptInterface<IBPI_RCMod_C> {
    readonly __staticRegistry:
        AActor['__staticRegistry'] & 
        IBPI_RCMod_C['__staticRegistry'] & 
        TScriptInterface['__staticRegistry'];

    readonly __propertyRegistry:
        AActor['__propertyRegistry'] & 
        IBPI_RCMod_C['__propertyRegistry'] & 
        TScriptInterface['__propertyRegistry'];
}

declare interface ModManagerModUI extends UUserWidget, IBPI_RCModUI_C, TScriptInterface<IBPI_RCModUI_C> {
    readonly __staticRegistry: 
        UUserWidget['__staticRegistry'] & 
        IBPI_RCModUI_C['__staticRegistry'] & 
        TScriptInterface['__staticRegistry'];

    readonly __propertyRegistry:     
        UUserWidget['__propertyRegistry'] & 
        IBPI_RCModUI_C['__propertyRegistry'] & 
        TScriptInterface['__propertyRegistry'];
}
