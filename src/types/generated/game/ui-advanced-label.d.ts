declare interface UUI_AdvancedLabel_C extends UFSDAdvancedLabel {
    UberGraphFrame: FPointerToUberGraphFrame;
    Lines: UVerticalBox;
    Font: FSlateFontInfo;
    CurrentLine: UHorizontalBox;
    SetFont(InFont: FSlateFontInfo, InKeepFontSize: boolean): void;
    SetIconSize(Icon_Size: number, Icon_Size_ControllerOverride: number): void;
    SetFontSize(Font_Size: number): void;
    SetPreviewAs(PreviewAs: uint8): void;
    SetTints(Text_Tint: FLinearColor, Key_Name_Tint: FLinearColor, PC__Icon_Tint: FLinearColor, Controller_Icon_Tint: FLinearColor): void;
    SetKeyNameTint(Key_Name_Tint: FLinearColor): void;
    SetIconTint(PC__Icon_Tint: FLinearColor, Controller_Icon_Tint: FLinearColor): void;
    SetTextTint(Text_Tint: FLinearColor): void;
    OnNewLine(Index: number): void;
    OnAddIcon(Name: string | FString, Icon: FActionIconMapping): void;
    OnAddKeyName(Name: string | FString): void;
    OnAddString(Value: string | FString): void;
    OnReset(): void;
    ExecuteUbergraph_UI_AdvancedLabel(EntryPoint: number): void;
}
declare const UUI_AdvancedLabel_C: UUI_AdvancedLabel_C;

