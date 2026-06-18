declare interface FSlatePostSettings {
    bEnabled: boolean;
    PostProcessorClass: TSubclassOf<USlateRHIPostBufferProcessor>;
    PathToSlatePostRT: string;
    CachedSlatePostRT: UTextureRenderTarget2D;
}

declare interface USlateFXSubsystem extends UEngineSubsystem {
    readonly __static_USlateFXSubsystem: {
        GetSlatePostProcessor(InPostBufferBit: ESlatePostRT): USlateRHIPostBufferProcessor;
    };
    readonly __properties_USlateFXSubsystem: {
        SlatePostBufferProcessors: TMap<ESlatePostRT, USlateRHIPostBufferProcessor>;
    };
    readonly __staticRegistry: 
        USlateFXSubsystem['__static_USlateFXSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        USlateFXSubsystem['__properties_USlateFXSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

declare interface USlatePostBufferBlur extends USlateRHIPostBufferProcessor {
    readonly __properties_USlatePostBufferBlur: {
        GaussianBlurStrength: number;
    };
    readonly __staticRegistry: 
        USlateRHIPostBufferProcessor['__staticRegistry'];
    readonly __propertyRegistry: 
        USlatePostBufferBlur['__properties_USlatePostBufferBlur'] &
        USlateRHIPostBufferProcessor['__propertyRegistry'];
}

declare interface USlateRHIPostBufferProcessor extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USlateRHIRendererSettings extends UDeveloperSettings {
    readonly __static_USlateRHIRendererSettings: {
        GetSlatePostSetting(InPostBufferBit: ESlatePostRT): FSlatePostSettings;
        GetMutableSlatePostSetting(InPostBufferBit: ESlatePostRT): FSlatePostSettings;
    };
    readonly __properties_USlateRHIRendererSettings: {
        SlatePostSettings: TMap<ESlatePostRT, FSlatePostSettings>;
    };
    readonly __staticRegistry: 
        USlateRHIRendererSettings['__static_USlateRHIRendererSettings'] &
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        USlateRHIRendererSettings['__properties_USlateRHIRendererSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

