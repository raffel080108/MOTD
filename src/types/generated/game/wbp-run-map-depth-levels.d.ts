declare interface UWBP_RunMap_DepthLevels_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITEM_RunSelection_DepthLevel_4: UWBP_RunMap_DepthLevel_C;
    ITEM_RunSelection_DepthLevel_3: UWBP_RunMap_DepthLevel_C;
    ITEM_RunSelection_DepthLevel_2: UWBP_RunMap_DepthLevel_C;
    ITEM_RunSelection_DepthLevel_1: UWBP_RunMap_DepthLevel_C;
    OnDepthSelected: FWBP_RunMap_DepthLevels_COnDepthSelected;
    DepthLevels: Record<string | number | symbol, ERunDepth>;
    GetDepthWidget(Depth: ERunDepth, DepthLevel: UWBP_RunMap_DepthLevel_C): void;
    OnDepthClicked(DepthLevel: UWBP_RunMap_DepthLevel_C): void;
    SelectBestDepth(): void;
    FindItemForDepth(Depth: ERunDepth, Item: UWBP_RunMap_DepthLevel_C): void;
    Update(): void;
    SetSelectedDepthWidget(DepthLevel: UWBP_RunMap_DepthLevel_C): void;
    SetSelectedDepth(NewDepth: ERunDepth): void;
    GetSelectedDepth(Depth: ERunDepth): void;
    Construct(): void;
    ExecuteUbergraph_WBP_RunMap_DepthLevels(EntryPoint: number): void;
    OnDepthSelected__DelegateSignature(): void;
}
declare const UWBP_RunMap_DepthLevels_C: UWBP_RunMap_DepthLevels_C;

