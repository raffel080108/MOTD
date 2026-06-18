declare interface UWidget_DropPod_AltitudeMeter_C extends UUserWidget {
    readonly __static_UWidget_DropPod_AltitudeMeter_C: {
        UpdateHeader(InText: string): void;
        UpdateDepthText(): void;
        SetProgress(Progress: number): void;
        Construct(): void;
        OnActiveStageChanged(Stage: UStage): void;
        ExecuteUbergraph_Widget_DropPod_AltitudeMeter(EntryPoint: number): void;
    };
    readonly __properties_UWidget_DropPod_AltitudeMeter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlockDepth: UTextBlock;
        Image_41: UImage;
        HeaderText: UTextBlock;
        Basic_Menu_ColorBar_C_149: UBasic_Menu_ColorBar_C;
        Basic_Menu_ColorBar_C_148: UBasic_Menu_ColorBar_C;
        Basic_Menu_ColorBar_146: UBasic_Menu_ColorBar_C;
        Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
        AlertBlink: UWidgetAnimation;
        Depth: number;
    };
    readonly __staticRegistry: 
        UWidget_DropPod_AltitudeMeter_C['__static_UWidget_DropPod_AltitudeMeter_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidget_DropPod_AltitudeMeter_C['__properties_UWidget_DropPod_AltitudeMeter_C'] &
        UUserWidget['__propertyRegistry'];
}

