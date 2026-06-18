declare interface ASparseVolumeTextureViewer extends AInfo {
    readonly __properties_ASparseVolumeTextureViewer: {
        SparseVolumeTextureViewerComponent: USparseVolumeTextureViewerComponent;
    };
    readonly __staticRegistry: 
        AInfo['__staticRegistry'];
    readonly __propertyRegistry: 
        ASparseVolumeTextureViewer['__properties_ASparseVolumeTextureViewer'] &
        AInfo['__propertyRegistry'];
}

declare interface UMaterialCacheStackProvider extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMaterialCacheVirtualTexture extends UTexture {
    readonly __properties_UMaterialCacheVirtualTexture: {
        OwningComponent: TWeakObjectPtr<UPrimitiveComponent>;
        MaterialStackProvider: TWeakObjectPtr<UMaterialCacheStackProvider>;
        TileCount: FIntPoint;
    };
    readonly __staticRegistry: 
        UTexture['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialCacheVirtualTexture['__properties_UMaterialCacheVirtualTexture'] &
        UTexture['__propertyRegistry'];
}

declare interface USparseVolumeTextureViewerComponent extends UPrimitiveComponent {
    readonly __properties_USparseVolumeTextureViewerComponent: {
        SparseVolumeTexturePreview: USparseVolumeTexture;
        Frame: number;
        FrameRate: number;
        bPlaying: boolean;
        bLooping: boolean;
        bReversePlayback: boolean;
        bBlockingStreamingRequests: boolean;
        bApplyPerFrameTransforms: boolean;
        bPivotAtCentroid: boolean;
        VoxelSize: number;
        PreviewAttribute: ESparseVolumeTexturePreviewAttribute;
        MipLevel: number;
        Extinction: number;
    };
    readonly __staticRegistry: 
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USparseVolumeTextureViewerComponent['__properties_USparseVolumeTextureViewerComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

