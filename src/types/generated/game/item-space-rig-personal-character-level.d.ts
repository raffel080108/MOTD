declare interface UITEM_SpaceRig_PersonalCharacterLevel_C extends UUserWidget {
    readonly __static_UITEM_SpaceRig_PersonalCharacterLevel_C: {
        Construct(): void;
        Update(Character: APlayerCharacter): void;
        OnPlayerCharacterSpawned(PlayerCharacter: APlayerCharacter): void;
        OnCharacterStatsChanged_Event(PlayerState: AFSDPlayerState): void;
        OnAscensionRewardsClaimed_Event(): void;
        ExecuteUbergraph_ITEM_SpaceRig_PersonalCharacterLevel(EntryPoint: number): void;
    };
    readonly __properties_UITEM_SpaceRig_PersonalCharacterLevel_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ITM_CharacterBuffIcon: UITM_CharacterBuffIcon_C;
        ITM_Character_Portrait: UITM_Character_Portrait_C;
        CanvasPanel_Base: UCanvasPanel;
        Tint_Edge: FLinearColor;
        Tint_Class: FLinearColor;
        PlayerState: AFSDPlayerState;
        SelectedCharacter: APlayerCharacter;
    };
    readonly __staticRegistry: 
        UITEM_SpaceRig_PersonalCharacterLevel_C['__static_UITEM_SpaceRig_PersonalCharacterLevel_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITEM_SpaceRig_PersonalCharacterLevel_C['__properties_UITEM_SpaceRig_PersonalCharacterLevel_C'] &
        UUserWidget['__propertyRegistry'];
}

