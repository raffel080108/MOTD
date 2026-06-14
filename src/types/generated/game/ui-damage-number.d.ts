declare interface UUI_DamageNumber_C extends UDamageNumberWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Icon: UImage;
    DamageNumber: UFSDLabelWidget;
    MoveUp: UWidgetAnimation;
    Left: UWidgetAnimation;
    Right: UWidgetAnimation;
    Shake: UWidgetAnimation;
    AnimSpeed: number;
    GetIcon(): UImage;
    GetShakeAnimation(): UWidgetAnimation;
    GetDirectionAnims(): TArray<UWidgetAnimation>;
    GetUpAnim(): UWidgetAnimation;
    GetDamageLabel(): UFSDLabelWidget;
    Construct(): void;
    OnEnabled(): void;
    ExecuteUbergraph_UI_DamageNumber(EntryPoint: number): void;
}
declare const UUI_DamageNumber_C: UUI_DamageNumber_C;

