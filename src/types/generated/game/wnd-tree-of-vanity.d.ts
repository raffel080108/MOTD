declare interface UWND_TreeOfVanity_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    CanvasPanel_Nodes: UCanvasPanel;
    Canvas_Connections: UCanvasPanel;
    SnapSize: number;
    ClickedWithoutTokens: FWND_TreeOfVanity_CClickedWithoutTokens;
    tempIdx: number;
    CanvasSize: FVector2D;
    NodeConnectionMap: TArray<UItm_TreeOfVanity_NodeConnection_C>;
    NodeBoughtFlowActive: boolean;
    TempNode: UITM_TreeOfVanity_Node_C;
    OnRewardBought: FWND_TreeOfVanity_COnRewardBought;
    HasCosmeticTokens(HasTokens: boolean): void;
    GetCosmeticSheet(CosmeticSheet: UCosmeticSheet): void;
    IsStartingNodeBought(): boolean;
    RefreshConnections(): void;
    AddNode(VanNode: FRewardTreeNode, Node: UITM_TreeOfVanity_Node_C): void;
    LoadTreeOfVanity(TreeOfVanity: URewardTree): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnWindowClosed_Event_0(Window: UWindowWidget): void;
    OnClassSelectedOpened(NodeWithOpenedClassSelector: UITM_TreeOfVanity_Node_C): void;
    OnShown(): void;
    ExecuteUbergraph_WND_TreeOfVanity(EntryPoint: number): void;
    OnRewardBought__DelegateSignature(): void;
    ClickedWithoutTokens__DelegateSignature(): void;
}
declare const UWND_TreeOfVanity_C: UWND_TreeOfVanity_C;

