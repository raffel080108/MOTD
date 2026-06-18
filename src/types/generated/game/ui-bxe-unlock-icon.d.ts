declare interface UUI_BXE_Unlock_Icon_C extends UUserWidget {
    readonly __static_UUI_BXE_Unlock_Icon_C: {
        SetBackground(BackgroundTexture: TSoftObjectPtr<UTexture2D>): void;
        SetUpgradeFrame(VisualSettings: UUnlockVisualSettings): void;
        SetType(Type: EUnlockType): void;
        SetEmpty(): void;
        PlaySelected(): void;
        FromUnlock(InUnlock: FBXEUnlockInstance): void;
        PlayPingDelayed(InDelay: number): void;
        PlayPing(): void;
        SetHovered(InHovered: boolean, ValueChanged: boolean): void;
        SetGlowing(InGlowing: boolean): void;
        SetOutline(InColor: FLinearColor): void;
        SetFill(InColor: FLinearColor, InGradientColor: FLinearColor): void;
        SetTexture(InIconTexture: TSoftObjectPtr<UTexture2D>): void;
        PreConstruct(IsDesignTime: boolean): void;
        ShowSelectionBorder(Show: boolean): void;
        SetSize(SizeInput: FVector2D, Scale: FVector2D): void;
        ExecuteUbergraph_UI_BXE_Unlock_Icon(EntryPoint: number): void;
    };
    readonly __properties_UUI_BXE_Unlock_Icon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Image_Gradient: UImage;
        Image_Frame: UImage;
        Icon_SizeBox: USizeBox;
        Icon_Outline: UImage;
        Icon_Image: UBasic_Image_C;
        Icon_Glow: UUI_GlowBackground_C;
        Icon_Filled: UImage;
        Icon_Background: UBasic_Image_C;
        Content: UNamedSlot;
        AnimatedBorder: UImage;
        AnimGlow: UWidgetAnimation;
        AnimHover: UWidgetAnimation;
        AnimPing: UWidgetAnimation;
        AnimSelected: UWidgetAnimation;
        Size: FVector2D;
        Glowing: boolean;
        Hovered: boolean;
        Scale: FVector2D;
        EnabledFrame: boolean;
        Type: EUnlockType;
        IconZoom: FVector2D;
        BackgroundColor: FLinearColor;
    };
    readonly __staticRegistry: 
        UUI_BXE_Unlock_Icon_C['__static_UUI_BXE_Unlock_Icon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_BXE_Unlock_Icon_C['__properties_UUI_BXE_Unlock_Icon_C'] &
        UUserWidget['__propertyRegistry'];
}

