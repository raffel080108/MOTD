declare interface UITM_NameBanner_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_Overlay: UOverlay;
    PlayerName_Text: UTextBlock;
    Name_SizeBox: USizeBox;
    BG_Image: UImage;
    PlayerName: FString;
    NameMaxWidth: number;
    FromPlayerState(InPlayerState: APlayerState, OutIsLocalPlayer: boolean): void;
    SetPlayerName(InName: string | FString, IsLocalPlayer: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_ITM_NameBanner(EntryPoint: number): void;
}
declare const UITM_NameBanner_C: UITM_NameBanner_C;

