declare interface UITM_HostIcon_C extends UUserWidget {
    readonly __static_UITM_HostIcon_C: {
        SetIsHost(InIsHost: boolean): void;
        SetSize(Size: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_ITM_HostIcon(EntryPoint: number): void;
    };
    readonly __properties_UITM_HostIcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Icon_SizeBox: USizeBox;
        Size: number;
    };
    readonly __staticRegistry: 
        UITM_HostIcon_C['__static_UITM_HostIcon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_HostIcon_C['__properties_UITM_HostIcon_C'] &
        UUserWidget['__propertyRegistry'];
}

