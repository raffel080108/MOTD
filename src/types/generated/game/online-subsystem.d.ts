declare interface FNamedInterface {
    InterfaceName: FName;
    InterfaceObject: UObject;
}
declare const FNamedInterface: FNamedInterface;

declare interface FNamedInterfaceDef {
    InterfaceName: FName;
    InterfaceClassName: FString;
}
declare const FNamedInterfaceDef: FNamedInterfaceDef;

declare interface ITurnBasedMatchInterface extends IInterface {
    OnMatchReceivedTurn(Match: string | FString, bDidBecomeActive: boolean): void;
    OnMatchEnded(Match: string | FString): void;
}
declare const ITurnBasedMatchInterface: ITurnBasedMatchInterface;

declare interface UNamedInterfaces extends UObject {
    NamedInterfaces: TArray<FNamedInterface>;
    NamedInterfaceDefs: TArray<FNamedInterfaceDef>;
}
declare const UNamedInterfaces: UNamedInterfaces;

