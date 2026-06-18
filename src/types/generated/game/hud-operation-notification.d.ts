declare interface UHUD_OperationNotification_C extends UFSDUserWidget {
    readonly __static_UHUD_OperationNotification_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnIntroFinished(): void;
        OnOutroFinished(): void;
        ExecuteUbergraph_HUD_OperationNotification(EntryPoint: number): void;
    };
    readonly __properties_UHUD_OperationNotification_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Title: UTextBlock;
        StatIcon: UImage;
        KPIHeader: UTextBlock;
        Glow: UImage;
        Frame: UBorder;
        Intro: UWidgetAnimation;
        Outro: UWidgetAnimation;
        OperationInfo: FDeploymentInfo;
    };
    readonly __staticRegistry: 
        UHUD_OperationNotification_C['__static_UHUD_OperationNotification_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_OperationNotification_C['__properties_UHUD_OperationNotification_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

