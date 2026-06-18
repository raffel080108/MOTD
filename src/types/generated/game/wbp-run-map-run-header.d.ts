declare interface UWBP_RunMap_RunHeader_C extends UUserWidget {
    readonly __static_UWBP_RunMap_RunHeader_C: {
        SetRun(Run: URun): void;
        SetDescription(Description: string): void;
        SetIcon(Icon: FObjectiveMissionIcon): void;
        SetName(Name: string): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WBP_RunMap_RunHeader(EntryPoint: number): void;
    };
    readonly __properties_UWBP_RunMap_RunHeader_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        WBP_RunMap_MapIcon_Boss: UWBP_RunMap_BossIcon_Frame_C;
        VerticalBox_Background: UVerticalBox;
        RC_LineWithBackgroundHalf: URC_LineWithBackgroundHalf_C;
        Overlay_Depth: UOverlay;
        NameText: UTextBlock;
        Image_Background: UImage;
        HorizontalBox: UHorizontalBox;
        DescriptionText: UTextBlock;
        ShowBackground: boolean;
        ShowTitle: boolean;
        CenterText: boolean;
        MakeDepthStickOut: boolean;
    };
    readonly __staticRegistry: 
        UWBP_RunMap_RunHeader_C['__static_UWBP_RunMap_RunHeader_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_RunMap_RunHeader_C['__properties_UWBP_RunMap_RunHeader_C'] &
        UUserWidget['__propertyRegistry'];
}

