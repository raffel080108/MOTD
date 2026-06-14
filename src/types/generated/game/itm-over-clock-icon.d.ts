declare interface UITM_Overclock_Icon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_SkinIcon: UITM_SkinIcon_C;
    ImgIcon: UImage;
    ImgFrame: UImage;
    IconTypeSwitcher: UWidgetSwitcher;
    IconSizer: USizeBox;
    Button_Outer: UButton;
    IconSize: number;
    IconTexture: UTexture2D;
    IconColor: ENUM_MenuColors;
    FrameTexture: UTexture2D;
    FrameColor: ENUM_MenuColors;
    HasTooltip: boolean;
    TooltipHeader: FText;
    TooltipTxt: FText;
    Overclock: UItemUpgrade;
    SetOverclockTooltip(Overclock: UItemUpgrade): void;
    GetOverclockTooltip(): UWidget;
    GetFrameLinearColor(ColorAndOpacity: FLinearColor): void;
    FromSchematicType(InType: ESchematicType): void;
    SetCategory(InCategory: USchematicCategory): void;
    SetFrameLinearColor(Color: FLinearColor): void;
    FromUpgrade(InUpgrade: UItemUpgrade, OutSchematicCategory: USchematicCategory): void;
    FromSchematic(InSchematic: USchematic, ShowState: boolean): void;
    SetIconColor(Color: ENUM_MenuColors): void;
    SetIcon(Value: UTexture2D): void;
    SetFrame(Texture: UTexture2D): void;
    SetFrameColor(ColorSelector: ENUM_MenuColors): void;
    SetIconSize(InSize: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_Overclock_Icon(EntryPoint: number): void;
}
declare const UITM_Overclock_Icon_C: UITM_Overclock_Icon_C;

