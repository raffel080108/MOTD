declare interface ULoreScreen_Template_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_OuterSizer: USizeBox;
    ScrollBox_Holder: UScrollBox;
    PutStuffHere: UNamedSlot;
    Overlay_MovieCanvas: UOverlay;
    Overlay_Holder: UOverlay;
    MovieCanvas: UImage;
    Lore_Content_Text_Header: ULore_Content_Text_Header_C;
    Image_MovieBackground: UImage;
    Image_Gradient: UImage;
    Image_Background: UImage;
    HeaderImage: UImage;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    MovieIntro: UWidgetAnimation;
    MediaPlayer: UMediaPlayer;
    MediaTexture: UMediaTexture;
    OnShown: FLoreScreen_Template_COnShown;
    CanScroll: boolean;
    SetHeadline(SetHeadline: FText, Icon: UTexture2D, MissionIcon: FObjectiveMissionIcon): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetHeaderMovie(MediaSource: UMediaSource): void;
    SetHeaderImage(HeaderImage: UTexture2D, Strech: boolean, VerticalFillPercent: number, UseGradient: boolean): void;
    SetHeaderMaterial(Material: UMaterialInterface, Size: FVector2D): void;
    OnOpened(OpenedUrl: string | FString): void;
    ExecuteUbergraph_LoreScreen_Template(EntryPoint: number): void;
    OnShown__DelegateSignature(): void;
}
declare const ULoreScreen_Template_C: ULoreScreen_Template_C;

