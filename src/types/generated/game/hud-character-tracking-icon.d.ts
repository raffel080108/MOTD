declare interface UHUD_CharacterTrackingIcon_C extends UActorTrackingWidget {
    readonly __static_UHUD_CharacterTrackingIcon_C: {
        OnInViewChanged(inView: boolean, Angle: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        UpdateArrow(inView: boolean, Angle: number): void;
        OnShow(): void;
        OnTargetSet(NewTarget: AActor): void;
        OnTargetDistanceChanged(Distance: number): void;
        OnUpdateName(NewName: string): void;
        OnCharacterChanged(PlayerCharacter: APlayerCharacter): void;
        OnCharacterStateChanged(NewState: ECharacterState): void;
        Construct(): void;
        UpdateClassIcon(): void;
        ExecuteUbergraph_HUD_CharacterTrackingIcon(EntryPoint: number): void;
    };
    readonly __properties_UHUD_CharacterTrackingIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RootCanvas: UCanvasPanel;
        PlayerName: UTextBlock;
        IconDown: UImage;
        IconClass: UImage;
        Distance: UHUD_DefaultLabel_C;
        BoxSizer: USizeBox;
        BorderInfo: UBorder;
        Arrow: UImage;
        AnimInView: UWidgetAnimation;
        AnimPlayerDown: UWidgetAnimation;
        ArrowRotation: number;
        ArrowRadius: number;
        ArrowAngle: number;
        targetCharacter: APlayerCharacter;
        IconInView: boolean;
        PlayerDown: boolean;
    };
    readonly __staticRegistry: 
        UHUD_CharacterTrackingIcon_C['__static_UHUD_CharacterTrackingIcon_C'] &
        UActorTrackingWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_CharacterTrackingIcon_C['__properties_UHUD_CharacterTrackingIcon_C'] &
        UActorTrackingWidget['__propertyRegistry'];
}

