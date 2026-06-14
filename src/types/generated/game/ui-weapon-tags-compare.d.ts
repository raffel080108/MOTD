declare interface UUI_WeaponTags_Compare_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WeaponTagsPanel: UVerticalBox;
    AnimPopIn: UWidgetAnimation;
    OwnedTags: TArray<UWeaponTagBase>;
    Lables: TArray<UUI_WeaponTag_Label_C>;
    Clear(): void;
    Hide(): void;
    CompareTags(CompareTags: TArray<UWeaponTagBase>): void;
    SetOwnedTags(InWeaponTags: TArray<UWeaponTagBase>): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_WeaponTags_Compare(EntryPoint: number): void;
}
declare const UUI_WeaponTags_Compare_C: UUI_WeaponTags_Compare_C;

