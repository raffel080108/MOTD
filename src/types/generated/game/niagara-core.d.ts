declare interface FNiagaraCompileHash {
    DataHash: number[];
}

declare interface FNiagaraVariableCommonReference {
    Name: string;
    UnderlyingType: UObject;
}

declare interface UNiagaraDataInterfaceBase extends UNiagaraMergeable {
    readonly __staticRegistry: 
        UNiagaraMergeable['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraMergeable['__propertyRegistry'];
}

declare interface UNiagaraMergeable extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

