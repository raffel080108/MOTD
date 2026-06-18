declare interface UToolTip_BXE_Unlock_C extends UUserWidget {
    readonly __static_UToolTip_BXE_Unlock_C: {
        IsItemUnlock(IsItemUnlock: boolean): void;
        SetCustom(InHeader: string, InDescription: string, InIconTexture: TSoftObjectPtr<UTexture2D>, InFrameTint: ENUM_MenuColors): void;
        SetPosition(InPosition: FVector2D, InAlignment: FVector2D): void;
        SetUnlock(InUnlock: FBXEUnlockInstance): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_ToolTip_BXE_Unlock(EntryPoint: number): void;
    };
    readonly __properties_UToolTip_BXE_Unlock_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Unlock_Icon: UUI_BXE_Unlock_Icon_C;
        RootOverlay: UOverlay;
        R_Gradient: UImage;
        L_Gradient_1: UImage;
        L_Gradient: UImage;
        Header_Label: UBasic_Label_C;
        Description_RT: URichTextBlock;
        Unlock: FBXEUnlockInstance;
    };
    readonly __staticRegistry: 
        UToolTip_BXE_Unlock_C['__static_UToolTip_BXE_Unlock_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UToolTip_BXE_Unlock_C['__properties_UToolTip_BXE_Unlock_C'] &
        UUserWidget['__propertyRegistry'];
}

