declare interface UToolTip_BXE_Unlock_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Unlock_Icon: UUI_BXE_Unlock_Icon_C;
    RootOverlay: UOverlay;
    R_Gradient: UImage;
    L_Gradient_1: UImage;
    L_Gradient: UImage;
    Header_Label: UBasic_Label_C;
    Description_RT: URichTextBlock;
    Unlock: FBXEUnlockInstance;
    IsItemUnlock(IsItemUnlock: boolean): void;
    SetCustom(InHeader: FText, InDescription: FText, InIconTexture: TSoftObjectPtr<UTexture2D>, InFrameTint: ENUM_MenuColors): void;
    SetPosition(InPosition: FVector2D, InAlignment: FVector2D): void;
    SetUnlock(InUnlock: FBXEUnlockInstance): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ToolTip_BXE_Unlock(EntryPoint: number): void;
}
declare const UToolTip_BXE_Unlock_C: UToolTip_BXE_Unlock_C;

