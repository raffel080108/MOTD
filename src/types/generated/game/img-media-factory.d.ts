declare interface UImgMediaSettings extends UObject {
    readonly __properties_UImgMediaSettings: {
        DefaultFrameRate: FFrameRate;
        BandwidthThrottlingEnabled: boolean;
        CacheBehindPercentage: number;
        CacheSizeGB: number;
        CacheThreads: number;
        CacheThreadStackSizeKB: number;
        GlobalCacheSizeGB: number;
        UseGlobalCache: boolean;
        ExrDecoderThreads: number;
        DefaultProxy: string;
        UseDefaultProxy: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UImgMediaSettings['__properties_UImgMediaSettings'] &
        UObject['__propertyRegistry'];
}

