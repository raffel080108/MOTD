declare interface UWBP_EmptyModPage_C extends UUserWidget {
    readonly __static_UWBP_EmptyModPage_C: {
        GetPageInfo(PageName: string): void;
        ExecuteUbergraph_WBP_EmptyModPage(EntryPoint: number): void;
    };
    readonly __properties_UWBP_EmptyModPage_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UWBP_EmptyModPage_C['__static_UWBP_EmptyModPage_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_EmptyModPage_C['__properties_UWBP_EmptyModPage_C'] &
        UUserWidget['__propertyRegistry'];
}

