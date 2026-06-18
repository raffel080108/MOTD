declare interface UAnimatedDRGlogo_C extends UUserWidget {
    readonly __static_UAnimatedDRGlogo_C: {
        Construct(): void;
        ExecuteUbergraph_AnimatedDRGlogo(EntryPoint: number): void;
    };
    readonly __properties_UAnimatedDRGlogo_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Logo: UImage;
        Idle: UWidgetAnimation;
        Flash1: UWidgetAnimation;
        Flash2: UWidgetAnimation;
        Flash3: UWidgetAnimation;
        Flash4: UWidgetAnimation;
    };
    readonly __staticRegistry: 
        UAnimatedDRGlogo_C['__static_UAnimatedDRGlogo_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimatedDRGlogo_C['__properties_UAnimatedDRGlogo_C'] &
        UUserWidget['__propertyRegistry'];
}

