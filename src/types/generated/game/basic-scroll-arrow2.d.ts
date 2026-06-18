declare interface UBasic_ScrollArrow2_C extends UUserWidget {
    readonly __static_UBasic_ScrollArrow2_C: {
        SetActive(NewVar_0: boolean): FLinearColor;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Basic_ScrollArrow2(EntryPoint: number): void;
        OnClicked__DelegateSignature(): void;
    };
    readonly __properties_UBasic_ScrollArrow2_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SizeBox_1: USizeBox;
        SizeBox_0: USizeBox;
        HorizontalBox_102: UHorizontalBox;
        arrow_main: UImage;
        OnClicked: FBasic_ScrollArrow2_COnClicked;
        ButtonAngle: number;
        Active: boolean;
    };
    readonly __staticRegistry: 
        UBasic_ScrollArrow2_C['__static_UBasic_ScrollArrow2_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_ScrollArrow2_C['__properties_UBasic_ScrollArrow2_C'] &
        UUserWidget['__propertyRegistry'];
}

