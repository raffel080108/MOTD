declare interface UItm_Rotatable_Showroom_C extends UUserWidget {
    readonly __static_UItm_Rotatable_Showroom_C: {
        OnControllerRotation(pitch: number, Yaw: number): void;
        DisconnectControllerInput(): void;
        ConnectControllerInput(): void;
        InitializeLastRotation(): void;
        SaveLastRotation(): void;
        IsDragging(bIsDragging: boolean): void;
        LookAtScenePoint(Point: USceneComponent): void;
        StopAmbienceAudio(): void;
        StartAmbienceAudio(): void;
        GetHighligtedBiome(HighlightedBiome: UBiome): void;
        DetectBiomeChange(): void;
        OnMouseWheel(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnMouseButtonUp(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        OnMouseMove(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
        SetData(characterID: UPlayerCharacterID, Key: UShowroomCameraKey, zoomInKey: UShowroomCameraKey, zoomOutKey: UShowroomCameraKey): void;
        SetPlanet(): void;
        SetPlanetFromExistingShowroom(): void;
        ClearPlanetFromExistingShowroom(): void;
        ClearPlanet(): void;
        ClearData(): void;
        ExecuteUbergraph_Itm_Rotatable_Showroom(EntryPoint: number): void;
        OnDragChanged__DelegateSignature(): void;
        OnBiomeHighlightChanged__DelegateSignature(): void;
        OnDraggedItem__DelegateSignature(): void;
    };
    readonly __properties_UItm_Rotatable_Showroom_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character_Image: UImage;
        AllowPitchRotation: boolean;
        AllowZoom: boolean;
        MouseDeltaMultiplier: FVector2D;
        ControllerDeltaMultiplier: FVector2D;
        MouseIsGrabbed: boolean;
        Showroom: UShowroomController;
        CursorPos: FVector2D;
        OnDraggedItem: FItm_Rotatable_Showroom_COnDraggedItem;
        LastGrabEndTime: number;
        OnBiomeHighlightChanged: FItm_Rotatable_Showroom_COnBiomeHighlightChanged;
        PlanetShowroom: UPlanetShowroomController;
        OnDragChanged: FItm_Rotatable_Showroom_COnDragChanged;
        bIsDragging: boolean;
        HaveLastShowroomRotation: boolean;
        LastShowroomRotation: FRotator;
    };
    readonly __staticRegistry: 
        UItm_Rotatable_Showroom_C['__static_UItm_Rotatable_Showroom_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UItm_Rotatable_Showroom_C['__properties_UItm_Rotatable_Showroom_C'] &
        UUserWidget['__propertyRegistry'];
}

