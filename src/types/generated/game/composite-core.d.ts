declare interface UCompositeCorePluginSettings extends UDeveloperSettings {
    bApplyPreExposure: boolean;
    bApplyFXAA: boolean;
    DisabledPrimitiveClasses: TArray<FSoftClassPath>;
    AllowedComponentClasses: TArray<FSoftClassPath>;
    SceneViewExtensionPriority: number;
}
declare const UCompositeCorePluginSettings: UCompositeCorePluginSettings;

declare interface UCompositeCoreSubsystem extends UTickableWorldSubsystem {
    UnregisterPrimitive(InPrimitiveComponent: UPrimitiveComponent): void;
    RegisterPrimitive(InPrimitiveComponent: UPrimitiveComponent): void;
}
declare const UCompositeCoreSubsystem: UCompositeCoreSubsystem;

declare interface UHoldoutCompositeComponent extends USceneComponent {
    bIsEnabled: boolean;
    SetEnabled(bInEnabled: boolean): void;
    IsEnabled(): boolean;
}
declare const UHoldoutCompositeComponent: UHoldoutCompositeComponent;

