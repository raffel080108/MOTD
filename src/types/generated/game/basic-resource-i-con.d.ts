declare interface UBasic_ResourceIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ResourceIcon: UImage;
    IconSize: number;
    ToolTip: UBasic_ToolTip_C;
    ShowToolTip: boolean;
    SetIconSize(InSize: number): void;
    SetResource(Resource: UResourceData): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_ResourceIcon(EntryPoint: number): void;
}
declare const UBasic_ResourceIcon_C: UBasic_ResourceIcon_C;

