declare interface IBPI_RCModUI_C extends IInterface {
    readonly __static_IBPI_RCModUI_C: {
        GetPageInfo(PageName: string): void;
    };
    readonly __staticRegistry: 
        IBPI_RCModUI_C['__static_IBPI_RCModUI_C'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

