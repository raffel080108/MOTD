declare interface UWND_ClassSkills_C extends UWeaponTagListenerWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher: UWidgetSwitcher;
    Row_ScaleBox: UScaleBox;
    MissingText: UTextBlock;
    ITM_ClassSkillButton: UITM_ClassSkillButton_C;
    HBox_ClassPerks: UHorizontalBox;
    ItemEntries: TArray<UUI_BXE_EquippedItems_Entry_C>;
    ShowLockedSkills: boolean;
    ShowText: boolean;
    ItemSizeScale: number;
    ShowClass(CharacterClass: UPlayerCharacterID): void;
    ShowPerks(CharacterClass: UPlayerCharacterID, Perks: TArray<UPerkAsset>): void;
    SetShowLockedClassSkill(Show: boolean): void;
    Refresh(Character: APlayerCharacter): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WND_ClassSkills(EntryPoint: number): void;
}
declare const UWND_ClassSkills_C: UWND_ClassSkills_C;

