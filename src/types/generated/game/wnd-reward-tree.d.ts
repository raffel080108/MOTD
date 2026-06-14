declare interface UWND_RewardTree_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    CanvasPanel_Outer: UOverlay;
    CanvasPanel_Nodes: UCanvasPanel;
    Canvas_Locks: UCanvasPanel;
    Canvas_Connections: UCanvasPanel;
    TreeTestRef: URewardTree;
    ClickedWithoutTokens: FWND_RewardTree_CClickedWithoutTokens;
    tempIdx: number;
    NodeBoughtFlowActive: boolean;
    TempNode: URewardTreeNodeWidget;
    IsEditorUtilityWidget: boolean;
    OnNodeClicked: FWND_RewardTree_COnNodeClicked;
    OnLockClicked: FWND_RewardTree_COnLockClicked;
    Locks: TArray<UItm_RewardTreeLock_C>;
    OnLockOpened(Lock: UItm_RewardTreeLock_C): void;
    CountNodes(count: number): void;
    AddConnection(Node1: URewardTreeNodeWidget, Node2: URewardTreeNodeWidget): void;
    RefreshConnections(): void;
    AddLock(InRewardTree: URewardTree, InLock: FRewardTreeLock, InLockIndex: number, LockWidget: URewardTreeLockWidget): void;
    AddNode(VanNode: FRewardTreeNode, Node: URewardTreeNodeWidget): void;
    LoadRewardTree(RewardTree: URewardTree): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    NodeClicked(InNode: URewardTreeNodeWidget): void;
    OnWindowClosed_Event_0(Window: UWindowWidget): void;
    CustomEvent(Widget: URewardTreeNodeWidget): void;
    Reset(): void;
    LockClicked(LockWidget: UItm_RewardTreeLock_C): void;
    UpdateAllNodes(): void;
    UnlockAll(): void;
    ExecuteUbergraph_WND_RewardTree(EntryPoint: number): void;
    OnLockClicked__DelegateSignature(LockWidget: UItm_RewardTreeLock_C): void;
    OnNodeClicked__DelegateSignature(Node: URewardTreeNodeWidget): void;
    ClickedWithoutTokens__DelegateSignature(): void;
}
declare const UWND_RewardTree_C: UWND_RewardTree_C;

