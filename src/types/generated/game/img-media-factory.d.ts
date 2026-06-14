declare interface UImgMediaSettings extends UObject {
    DefaultFrameRate: FFrameRate;
    BandwidthThrottlingEnabled: boolean;
    CacheBehindPercentage: number;
    CacheSizeGB: number;
    CacheThreads: number;
    CacheThreadStackSizeKB: number;
    GlobalCacheSizeGB: number;
    UseGlobalCache: boolean;
    ExrDecoderThreads: uint32;
    DefaultProxy: FString;
    UseDefaultProxy: boolean;
}
declare const UImgMediaSettings: UImgMediaSettings;

