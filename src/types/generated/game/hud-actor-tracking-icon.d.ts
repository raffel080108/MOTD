declare interface UHUD_ActorTrackingIcon_C extends UActorTrackingWidget {
    readonly __static_UHUD_ActorTrackingIcon_C: {
        SetInfo(InText: string, Texture: UTexture2D, InTint: FLinearColor): void;
        OnTargetDistanceChanged(Distance: number): void;
        OnTargetSet(NewTarget: AActor): void;
        OnPlayerNameChanged(NewName: string): void;
        OnInViewChanged(inView: boolean, Angle: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        UpdateArrow(inView: boolean, Angle: number): void;
        OnShow(): void;
        ExecuteUbergraph_HUD_ActorTrackingIcon(EntryPoint: number): void;
    };
    readonly __properties_UHUD_ActorTrackingIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Name: UHUD_DefaultLabel_C;
        Distance: UHUD_DefaultLabel_C;
        DataImage: UImage;
        Arrow: UImage;
        ArrowRotation: number;
        ArrowRadius: number;
        ArrowAngle: number;
    };
    readonly __staticRegistry: 
        UHUD_ActorTrackingIcon_C['__static_UHUD_ActorTrackingIcon_C'] &
        UActorTrackingWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_ActorTrackingIcon_C['__properties_UHUD_ActorTrackingIcon_C'] &
        UActorTrackingWidget['__propertyRegistry'];
}

