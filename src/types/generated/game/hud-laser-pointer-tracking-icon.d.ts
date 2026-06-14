declare interface UHUD_LaserPointerTrackingIcon_C extends UActorTrackingWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RootCanvas: UCanvasPanel;
    PlayerName: UTextBlock;
    NameLabel: UTextBlock;
    IconImage: UBasic_Image_C;
    DistanceLabel: UTextBlock;
    Basic_HUD_BracketWindowSmall: UBasic_HUD_BracketWindowSmall_C;
    Arrow: UImage;
    AnimIcon: UWidgetAnimation;
    FadeIn: UWidgetAnimation;
    ArrowRotation: number;
    ArrowRadius: number;
    ArrowAngle: number;
    Marker: ALaserPointerMarker;
    IsCanvasVisible: boolean;
    TimeNotLookingAt: number;
    SetIconColor(InColor: FLinearColor): void;
    UpdateVisibility(): void;
    UpdatePixelOffset(): void;
    OnInViewChanged(inView: boolean, Angle: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    UpdateArrow(inView: boolean, Angle: number): void;
    OnShow(): void;
    OnTargetDistanceChanged(Distance: number): void;
    OnTargetSet(NewTarget: AActor): void;
    ExecuteUbergraph_HUD_LaserPointerTrackingIcon(EntryPoint: number): void;
}
declare const UHUD_LaserPointerTrackingIcon_C: UHUD_LaserPointerTrackingIcon_C;

