declare interface UITM_UnlockBase_C extends UITM_HighlightSlotBase_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    Size: FVector2D;
    Glowing: boolean;
    Hovered: boolean;
    Unlock: FBXEUnlockInstance;
    SetBackgroundFill(InTint: ENUM_MenuColors, InColor: FLinearColor): void;
    GetWeaponTags(Tags: TArray<UWeaponTagBase>): void;
    SetCount(count: number): void;
    GetFrameColor(OutColorAndTint: FMenuColorAndTint): void;
    SetEmpty(): void;
    SetUnlock(InUnlock: FBXEUnlockInstance): void;
    SetHovered(InHovered: boolean): void;
    SetGlowing(InGlowing: boolean): void;
    SetFrame(InTint: ENUM_MenuColors, InColor: FLinearColor, InVisualSettings: UUnlockVisualSettings): void;
    SetFill(InTint: ENUM_MenuColors, InColor: FLinearColor): void;
    SetTexture(InIconTexture: TSoftObjectPtr<UTexture2D>): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_UnlockBase(EntryPoint: number): void;
}
declare const UITM_UnlockBase_C: UITM_UnlockBase_C;

