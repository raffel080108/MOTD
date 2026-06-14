declare interface UUI_NameTags_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_Image: USizeBox;
    Image_Icon: UImage;
    Height: number;
    SetData(Player: AFSDPlayerState): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnPlayerNameChanged_Event_0(NewName: string | FString): void;
    ExecuteUbergraph_UI_NameTags(EntryPoint: number): void;
}
declare const UUI_NameTags_C: UUI_NameTags_C;

