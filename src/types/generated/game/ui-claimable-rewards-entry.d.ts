declare interface UUI_ClaimableRewards_Entry_C extends UClaimableRewardEntryWidget {
    readonly __static_UUI_ClaimableRewards_Entry_C: {
        SequenceEvent__ENTRYPOINTUI_ClaimableRewards_Entry_0(): void;
        SequenceEvent__ENTRYPOINTUI_ClaimableRewards_Entry(): void;
        Refresh(): void;
        PlayRevealAudio(): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnClaimAnimFinished(): void;
        BndEvt__ITM_BigButton_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
        OnPopupImageLoaded(): void;
        PlaySlamAudio(): void;
        ReceiveMoveIn(InStartDelay: number): void;
        ExecuteUbergraph_UI_ClaimableRewards_Entry(EntryPoint: number): void;
    };
    readonly __properties_UUI_ClaimableRewards_Entry_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        WindowBorder: UBorder;
        TextHeader: UTextBlock;
        TextBlock: URichTextBlock;
        RewardImage: UImage;
        HeaderEndImage: UImage;
        ClaimOverlay: UOverlay;
        BTN_Claim: UITM_BigButton_C;
        BoxSizer: USizeBox;
        BorderHeader: UBorder;
        AnimMoveIn: UWidgetAnimation;
        AnimPing: UWidgetAnimation;
        AnimClaim: UWidgetAnimation;
    };
    readonly __staticRegistry: 
        UUI_ClaimableRewards_Entry_C['__static_UUI_ClaimableRewards_Entry_C'] &
        UClaimableRewardEntryWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_ClaimableRewards_Entry_C['__properties_UUI_ClaimableRewards_Entry_C'] &
        UClaimableRewardEntryWidget['__propertyRegistry'];
}

