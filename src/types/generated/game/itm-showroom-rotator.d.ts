declare interface UITM_ShowroomRotator_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_0: UImage;
    GrabMouse: boolean;
    OnMouseButtonUp(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    OnMouseButtonDown(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    OnMouseMove(MyGeometry: FGeometry, MouseEvent: FPointerEvent): FEventReply;
    OnShowCharacterSelectorRotate(pitch: number, Yaw: number): void;
    EnableRotation(): void;
    DisableRotation(): void;
    ExecuteUbergraph_ITM_ShowroomRotator(EntryPoint: number): void;
}
declare const UITM_ShowroomRotator_C: UITM_ShowroomRotator_C;

