declare interface UUI_InfoScreen_MessageFeedEntry_C extends UUserWidget {
    readonly __static_UUI_InfoScreen_MessageFeedEntry_C: {
        Init(): void;
        ExecuteUbergraph_UI_InfoScreen_MessageFeedEntry(EntryPoint: number): void;
    };
    readonly __properties_UUI_InfoScreen_MessageFeedEntry_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        messagetextbox: URichTextSizable;
        Image_354: UImage;
        DateText_1: UTextBlock;
        DateText: UTextBlock;
    };
    readonly __staticRegistry: 
        UUI_InfoScreen_MessageFeedEntry_C['__static_UUI_InfoScreen_MessageFeedEntry_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_InfoScreen_MessageFeedEntry_C['__properties_UUI_InfoScreen_MessageFeedEntry_C'] &
        UUserWidget['__propertyRegistry'];
}

