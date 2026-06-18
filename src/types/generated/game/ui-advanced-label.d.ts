declare interface UUI_AdvancedLabel_C extends UFSDAdvancedLabel {
    readonly __static_UUI_AdvancedLabel_C: {
        SetFont(InFont: FSlateFontInfo, InKeepFontSize: boolean): void;
        SetIconSize(Icon_Size: number, Icon_Size_ControllerOverride: number): void;
        SetFontSize(Font_Size: number): void;
        SetPreviewAs(PreviewAs: number): void;
        SetTints(Text_Tint: FLinearColor, Key_Name_Tint: FLinearColor, PC__Icon_Tint: FLinearColor, Controller_Icon_Tint: FLinearColor): void;
        SetKeyNameTint(Key_Name_Tint: FLinearColor): void;
        SetIconTint(PC__Icon_Tint: FLinearColor, Controller_Icon_Tint: FLinearColor): void;
        SetTextTint(Text_Tint: FLinearColor): void;
        OnNewLine(Index: number): void;
        OnAddIcon(Name: string, Icon: FActionIconMapping): void;
        OnAddKeyName(Name: string): void;
        OnAddString(Value: string): void;
        OnReset(): void;
        ExecuteUbergraph_UI_AdvancedLabel(EntryPoint: number): void;
    };
    readonly __properties_UUI_AdvancedLabel_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Lines: UVerticalBox;
        Font: FSlateFontInfo;
        CurrentLine: UHorizontalBox;
    };
    readonly __staticRegistry: 
        UUI_AdvancedLabel_C['__static_UUI_AdvancedLabel_C'] &
        UFSDAdvancedLabel['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_AdvancedLabel_C['__properties_UUI_AdvancedLabel_C'] &
        UFSDAdvancedLabel['__propertyRegistry'];
}

