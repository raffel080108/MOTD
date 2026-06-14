declare interface ASparseVolumeTextureViewer extends AInfo {
    SparseVolumeTextureViewerComponent: USparseVolumeTextureViewerComponent;
}
declare const ASparseVolumeTextureViewer: ASparseVolumeTextureViewer;

declare interface UMaterialCacheStackProvider extends UObject {

}
declare const UMaterialCacheStackProvider: UMaterialCacheStackProvider;

declare interface UMaterialCacheVirtualTexture extends UTexture {
    OwningComponent: TWeakObjectPtr<UPrimitiveComponent>;
    MaterialStackProvider: TWeakObjectPtr<UMaterialCacheStackProvider>;
    TileCount: FIntPoint;
}
declare const UMaterialCacheVirtualTexture: UMaterialCacheVirtualTexture;

declare interface USparseVolumeTextureViewerComponent extends UPrimitiveComponent {
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
}
declare const USparseVolumeTextureViewerComponent: USparseVolumeTextureViewerComponent;

