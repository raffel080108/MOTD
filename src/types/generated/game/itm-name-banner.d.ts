declare interface UITM_NameBanner_C extends UUserWidget {
    readonly __static_UITM_NameBanner_C: {
        FromPlayerState(InPlayerState: APlayerState, OutIsLocalPlayer: boolean): void;
        SetPlayerName(InName: string, IsLocalPlayer: boolean): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_ITM_NameBanner(EntryPoint: number): void;
    };
    readonly __properties_UITM_NameBanner_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_Overlay: UOverlay;
        PlayerName_Text: UTextBlock;
        Name_SizeBox: USizeBox;
        BG_Image: UImage;
        PlayerName: string;
        NameMaxWidth: number;
    };
    readonly __staticRegistry: 
        UITM_NameBanner_C['__static_UITM_NameBanner_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_NameBanner_C['__properties_UITM_NameBanner_C'] &
        UUserWidget['__propertyRegistry'];
}

