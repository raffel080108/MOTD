declare interface UUI_WeaponTag_Label_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TagSizeBox: USizeBox;
    TagName: UTextBlock;
    RootOverlay: UOverlay;
    WeaponTag: UWeaponTagBase;
    Width: number;
    TagColor: FLinearColor;
    ShowConditional(If_In_List: TArray<UWeaponTagBase>, IsVisible: boolean): void;
    SetWeaponTag(InWeaponTag: UWeaponTagBase): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_WeaponTag_Label(EntryPoint: number): void;
}
declare const UUI_WeaponTag_Label_C: UUI_WeaponTag_Label_C;

