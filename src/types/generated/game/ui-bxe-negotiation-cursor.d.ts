declare interface UUI_BXE_Negotiation_Cursor_C extends UUserWidget {
    RootCanvas: UCanvasPanel;
    Name_Label: UBasic_Label_C;
    Cursor_Img: UImage;
    Player: AFSDPlayerState;
    position: FVector2D;
    HideTimer: FTimerHandle;
    Hide(): void;
    Update(InPlayer: AFSDPlayerState, InPosition: FVector2D): void;
}
declare const UUI_BXE_Negotiation_Cursor_C: UUI_BXE_Negotiation_Cursor_C;

