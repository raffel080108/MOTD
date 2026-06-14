declare interface UBasicRC_Container_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_VerticalBox: UVerticalBox;
    Icon_Image: UBasicImage;
    HeaderBar_Extended: UBasicImage;
    Header_Text: UTextBlock;
    Content: UNamedSlot;
    Background_Extended: UImage;
    IconTexture: UTexture2D;
    RightAligned: boolean;
    ExtendBackground: boolean;
    UseChildVisibility: boolean;
    ContentPadding: number;
    IconPosX: number;
    ContentPosX: number;
    SetExtendBackground(InExtend: boolean): void;
    UpdateLayout(): void;
    SetRightAligned(RightAligned: boolean): void;
    Construct(): void;
    SetupChildVisibility(): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnChildVisibilityChanged(InVisibility: ESlateVisibility): void;
    Refresh(): void;
    ExecuteUbergraph_BasicRC_Container(EntryPoint: number): void;
}
declare const UBasicRC_Container_C: UBasicRC_Container_C;

