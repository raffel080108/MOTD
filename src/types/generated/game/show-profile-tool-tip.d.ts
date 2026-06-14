declare interface UShowProfile_ToolTip_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ShowProfileTxt: URichTextSizable;
    ServernameTxt: UTextBlock;
    CountryTxt: UTextBlock;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    BackgroundImage: UImage;
    Intro: UWidgetAnimation;
    AnimFadeIn: UWidgetAnimation;
    Text: FText;
    position: FVector2D;
    Alignment: FVector2D;
    ServerName: FText;
    CountryName: FText;
    FadeIn(duration: number): void;
    SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
    SetText(ToolTip: FText, Region: FText, Name: FText): void;
    SetTarget(Target_Widget: UWidget): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ShowProfile_ToolTip(EntryPoint: number): void;
}
declare const UShowProfile_ToolTip_C: UShowProfile_ToolTip_C;

