declare interface UCompositeCorePluginSettings extends UDeveloperSettings {
    readonly __properties_UCompositeCorePluginSettings: {
        bApplyPreExposure: boolean;
        bApplyFXAA: boolean;
        DisabledPrimitiveClasses: FSoftClassPath[];
        AllowedComponentClasses: FSoftClassPath[];
        SceneViewExtensionPriority: number;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UCompositeCorePluginSettings['__properties_UCompositeCorePluginSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UCompositeCoreSubsystem extends UTickableWorldSubsystem {
    readonly __static_UCompositeCoreSubsystem: {
        UnregisterPrimitive(InPrimitiveComponent: UPrimitiveComponent): void;
        RegisterPrimitive(InPrimitiveComponent: UPrimitiveComponent): void;
    };
    readonly __staticRegistry: 
        UCompositeCoreSubsystem['__static_UCompositeCoreSubsystem'] &
        UTickableWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableWorldSubsystem['__propertyRegistry'];
}

declare interface UHoldoutCompositeComponent extends USceneComponent {
    readonly __static_UHoldoutCompositeComponent: {
        SetEnabled(bInEnabled: boolean): void;
        IsEnabled(): boolean;
    };
    readonly __properties_UHoldoutCompositeComponent: {
        bIsEnabled: boolean;
    };
    readonly __staticRegistry: 
        UHoldoutCompositeComponent['__static_UHoldoutCompositeComponent'] &
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UHoldoutCompositeComponent['__properties_UHoldoutCompositeComponent'] &
        USceneComponent['__propertyRegistry'];
}

