declare interface UUI_BeerBuff_Spacerig_C extends UUserWidget {
    readonly __static_UUI_BeerBuff_Spacerig_C: {
        OnLoaded_E76038A2482A1272456904B10D0684E1(Loaded: UObject): void;
        Construct(): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_UI_BeerBuff_Spacerig(EntryPoint: number): void;
    };
    readonly __properties_UUI_BeerBuff_Spacerig_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SizeBox_3: USizeBox;
        BuffImage: UImage;
    };
    readonly __staticRegistry: 
        UUI_BeerBuff_Spacerig_C['__static_UUI_BeerBuff_Spacerig_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_BeerBuff_Spacerig_C['__properties_UUI_BeerBuff_Spacerig_C'] &
        UUserWidget['__propertyRegistry'];
}

