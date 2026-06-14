declare interface UHUD_ActorTrackingIcon_C extends UActorTrackingWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Name: UHUD_DefaultLabel_C;
    Distance: UHUD_DefaultLabel_C;
    DataImage: UImage;
    Arrow: UImage;
    ArrowRotation: number;
    ArrowRadius: number;
    ArrowAngle: number;
    SetInfo(InText: FText, Texture: UTexture2D, InTint: FLinearColor): void;
    OnTargetDistanceChanged(Distance: number): void;
    OnTargetSet(NewTarget: AActor): void;
    OnPlayerNameChanged(NewName: string | FString): void;
    OnInViewChanged(inView: boolean, Angle: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    UpdateArrow(inView: boolean, Angle: number): void;
    OnShow(): void;
    ExecuteUbergraph_HUD_ActorTrackingIcon(EntryPoint: number): void;
}
declare const UHUD_ActorTrackingIcon_C: UHUD_ActorTrackingIcon_C;

