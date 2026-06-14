declare interface UBP_GameInstance_C extends UFSDGameInstance {
    UberGraphFrame: FPointerToUberGraphFrame;
    OnAvailableCraftingItems: FBP_GameInstance_COnAvailableCraftingItems;
    EligibleForRetirementAssignment: boolean;
    OnEligibleForRetirementAssignment: FBP_GameInstance_COnEligibleForRetirementAssignment;
    JoinFriendInvitePasswordWidget: UWND_JoiningPassword_C;
    IsEligibleForRetirementAassignment(EligibleForRetirementAssignment: boolean): void;
    OnFailure_7B3ECFCE46627790F0C9B89A0D72085C(): void;
    OnSuccess_7B3ECFCE46627790F0C9B89A0D72085C(): void;
    OnFailure_E6A52403462766A65D96D581DEE58F2A(): void;
    OnSuccess_E6A52403462766A65D96D581DEE58F2A(): void;
    OnFailure_0A0A17574FFBD1708EBEC58139294DF7(): void;
    OnSuccess_0A0A17574FFBD1708EBEC58139294DF7(): void;
    OnFailure_02E815DE4668DC506E439995BFD4A2E5(): void;
    OnSuccess_02E815DE4668DC506E439995BFD4A2E5(): void;
    ReceiveInit(): void;
    JoinFriendInvite(Session: FFSDBlueprintSessionResult): void;
    OnLoadComplete(mapName: string | FString): void;
    SetEligableForAscensionAssignment(eligable: boolean): void;
    JoinFriendInviteWithPassword(Session: FFSDBlueprintSessionResult, Password: string | FString): void;
    OnCancelJoin(): void;
    ApplyGameUserSettings(Settings: UFSDGameUserSettings): void;
    RequestReadyForJoinSessionMapTravel(): void;
    AddNotification_Ascension(InText: FText): void;
    ExecuteUbergraph_BP_GameInstance(EntryPoint: number): void;
    OnEligibleForRetirementAssignment__DelegateSignature(GameInstance: UBP_GameInstance_C): void;
    OnAvailableCraftingItems__DelegateSignature(NewItems: TArray<TScriptInterface<ICraftable>>): void;
}
declare const UBP_GameInstance_C: UBP_GameInstance_C;

