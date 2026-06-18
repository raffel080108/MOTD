declare interface UUI_NameTags_C extends UUserWidget {
    readonly __static_UUI_NameTags_C: {
        SetData(Player: AFSDPlayerState): void;
        PreConstruct(IsDesignTime: boolean): void;
        OnPlayerNameChanged_Event_0(NewName: string): void;
        ExecuteUbergraph_UI_NameTags(EntryPoint: number): void;
    };
    readonly __properties_UUI_NameTags_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SizeBox_Image: USizeBox;
        Image_Icon: UImage;
        Height: number;
    };
    readonly __staticRegistry: 
        UUI_NameTags_C['__static_UUI_NameTags_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_NameTags_C['__properties_UUI_NameTags_C'] &
        UUserWidget['__propertyRegistry'];
}

