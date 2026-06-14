declare interface FNiagaraCompileHash {
    DataHash: TArray<uint8>;
}
declare const FNiagaraCompileHash: FNiagaraCompileHash;

declare interface FNiagaraVariableCommonReference {
    Name: FName;
    UnderlyingType: UObject;
}
declare const FNiagaraVariableCommonReference: FNiagaraVariableCommonReference;

declare interface UNiagaraDataInterfaceBase extends UNiagaraMergeable {

}
declare const UNiagaraDataInterfaceBase: UNiagaraDataInterfaceBase;

declare interface UNiagaraMergeable extends UObject {

}
declare const UNiagaraMergeable: UNiagaraMergeable;

