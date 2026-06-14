declare interface UItm_RewardTree_NodeConnection_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_Line: UImage;
    TurnOpaque: UWidgetAnimation;
    Node1: URewardTreeNodeWidget;
    Node2: URewardTreeNodeWidget;
    BothBought: boolean;
    OneBought: boolean;
    Type: ConnectionType;
    NodeUpdated(): void;
    Construct(): void;
    UpdateFullyConnectedNode(): void;
    SetType(Type: ConnectionType): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Itm_RewardTree_NodeConnection(EntryPoint: number): void;
}
declare const UItm_RewardTree_NodeConnection_C: UItm_RewardTree_NodeConnection_C;

