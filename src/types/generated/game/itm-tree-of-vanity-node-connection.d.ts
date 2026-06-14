declare interface UItm_TreeOfVanity_NodeConnection_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_Line: UImage;
    TurnOpaque: UWidgetAnimation;
    Node1: UTreeOfVanityItemWidget;
    Node2: UTreeOfVanityItemWidget;
    BothBought: boolean;
    OneBought: boolean;
    Construct(): void;
    NodeUpdated(): void;
    UpdateFullyConnectedNode(): void;
    ExecuteUbergraph_Itm_TreeOfVanity_NodeConnection(EntryPoint: number): void;
}
declare const UItm_TreeOfVanity_NodeConnection_C: UItm_TreeOfVanity_NodeConnection_C;

