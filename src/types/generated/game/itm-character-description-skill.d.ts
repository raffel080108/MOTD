declare interface UITM_CharacterDescription_Skill_C extends UBasicButtonWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Title_Text: UBasicTextBlock;
    Skill_Icon: UBasicImage;
    Skill_Description: UBasicRichTextBlock;
    Root_HBox: UHorizontalBox;
    BG_Image: UBasicImage;
    SkillAsset: UPerkAsset;
    NativeGetButtonToolTip(): UWidget;
    GetSkillAsset(OutSkillAsset: UPerkAsset): void;
    SetSkillAsset(SkillAsset: UPerkAsset): void;
    PreConstruct(IsDesignTime: boolean): void;
    ReceiveButtonHoverChanged(InHovered: boolean): void;
    ExecuteUbergraph_ITM_CharacterDescription_Skill(EntryPoint: number): void;
}
declare const UITM_CharacterDescription_Skill_C: UITM_CharacterDescription_Skill_C;

