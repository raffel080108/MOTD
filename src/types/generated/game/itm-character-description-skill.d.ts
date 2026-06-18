declare interface UITM_CharacterDescription_Skill_C extends UBasicButtonWidget {
    readonly __static_UITM_CharacterDescription_Skill_C: {
        NativeGetButtonToolTip(): UWidget;
        GetSkillAsset(OutSkillAsset: UPerkAsset): void;
        SetSkillAsset(SkillAsset: UPerkAsset): void;
        PreConstruct(IsDesignTime: boolean): void;
        ReceiveButtonHoverChanged(InHovered: boolean): void;
        ExecuteUbergraph_ITM_CharacterDescription_Skill(EntryPoint: number): void;
    };
    readonly __properties_UITM_CharacterDescription_Skill_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Title_Text: UBasicTextBlock;
        Skill_Icon: UBasicImage;
        Skill_Description: UBasicRichTextBlock;
        Root_HBox: UHorizontalBox;
        BG_Image: UBasicImage;
        SkillAsset: UPerkAsset;
    };
    readonly __staticRegistry: 
        UITM_CharacterDescription_Skill_C['__static_UITM_CharacterDescription_Skill_C'] &
        UBasicButtonWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_CharacterDescription_Skill_C['__properties_UITM_CharacterDescription_Skill_C'] &
        UBasicButtonWidget['__propertyRegistry'];
}

