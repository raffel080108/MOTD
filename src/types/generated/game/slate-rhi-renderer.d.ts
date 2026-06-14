declare interface FSlatePostSettings {
    bEnabled: boolean;
    PostProcessorClass: TSubclassOf<USlateRHIPostBufferProcessor>;
    PathToSlatePostRT: FString;
    CachedSlatePostRT: UTextureRenderTarget2D;
}
declare const FSlatePostSettings: FSlatePostSettings;

declare interface USlateFXSubsystem extends UEngineSubsystem {
    SlatePostBufferProcessors: Record<string | number | symbol, USlateRHIPostBufferProcessor>;
    GetSlatePostProcessor(InPostBufferBit: ESlatePostRT): USlateRHIPostBufferProcessor;
}
declare const USlateFXSubsystem: USlateFXSubsystem;

declare interface USlatePostBufferBlur extends USlateRHIPostBufferProcessor {
    GaussianBlurStrength: number;
}
declare const USlatePostBufferBlur: USlatePostBufferBlur;

declare interface USlateRHIPostBufferProcessor extends UObject {

}
declare const USlateRHIPostBufferProcessor: USlateRHIPostBufferProcessor;

declare interface USlateRHIRendererSettings extends UDeveloperSettings {
    SlatePostSettings: Record<string | number | symbol, FSlatePostSettings>;
    GetSlatePostSetting(InPostBufferBit: ESlatePostRT): FSlatePostSettings;
    GetMutableSlatePostSetting(InPostBufferBit: ESlatePostRT): FSlatePostSettings;
}
declare const USlateRHIRendererSettings: USlateRHIRendererSettings;

