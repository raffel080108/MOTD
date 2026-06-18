declare interface UUI_Disconnect_Screen_Base_C extends UWindowWidget {
    readonly __static_UUI_Disconnect_Screen_Base_C: {
        Update(): void;
        FadeFromBlack(): void;
        ExecuteUbergraph_UI_Disconnect_Screen_Base(EntryPoint: number): void;
    };
    readonly __properties_UUI_Disconnect_Screen_Base_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UUI_Disconnect_Screen_Base_C['__static_UUI_Disconnect_Screen_Base_C'] &
        UWindowWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Disconnect_Screen_Base_C['__properties_UUI_Disconnect_Screen_Base_C'] &
        UWindowWidget['__propertyRegistry'];
}

