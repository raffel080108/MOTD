declare const enum EMetaSoundFrontendGraphCommentMoveMode {
    GroupMovement = 0,
    NoGroupMovement = 1
}

declare const enum EMetasoundFrontendClassType {
    External = 0,
    Graph = 1,
    Input = 2,
    Output = 3,
    Literal = 4,
    Variable = 5,
    VariableDeferredAccessor = 6,
    VariableAccessor = 7,
    VariableMutator = 8,
    Template = 9,
    Invalid = 10
}

declare const enum EMetasoundFrontendLiteralType {
    None = 0,
    Boolean = 1,
    Integer = 2,
    Float = 3,
    String = 4,
    UObject = 5,
    NoneArray = 6,
    BooleanArray = 7,
    IntegerArray = 8,
    FloatArray = 9,
    StringArray = 10,
    UObjectArray = 11,
    Invalid = 12
}

declare const enum EMetasoundFrontendNodeStyleDisplayVisibility {
    Visible = 0,
    Hidden = 1
}

declare const enum EMetasoundFrontendVertexAccessType {
    Reference = 0,
    Value = 1,
    Unset = 2
}

declare const enum ESetParamResult {
    Succeeded = 0,
    Failed = 1
}

