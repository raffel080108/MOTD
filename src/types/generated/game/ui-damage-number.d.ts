declare interface UUI_DamageNumber_C extends UDamageNumberWidget {
    readonly __static_UUI_DamageNumber_C: {
        GetIcon(): UImage;
        GetShakeAnimation(): UWidgetAnimation;
        GetDirectionAnims(): UWidgetAnimation[];
        GetUpAnim(): UWidgetAnimation;
        GetDamageLabel(): UFSDLabelWidget;
        Construct(): void;
        OnEnabled(): void;
        ExecuteUbergraph_UI_DamageNumber(EntryPoint: number): void;
    };
    readonly __properties_UUI_DamageNumber_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Icon: UImage;
        DamageNumber: UFSDLabelWidget;
        MoveUp: UWidgetAnimation;
        Left: UWidgetAnimation;
        Right: UWidgetAnimation;
        Shake: UWidgetAnimation;
        AnimSpeed: number;
    };
    readonly __staticRegistry: 
        UUI_DamageNumber_C['__static_UUI_DamageNumber_C'] &
        UDamageNumberWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_DamageNumber_C['__properties_UUI_DamageNumber_C'] &
        UDamageNumberWidget['__propertyRegistry'];
}

