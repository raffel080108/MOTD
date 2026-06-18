declare interface FMyPluginStruct {
    TestString: string;
}

declare interface UMyPluginObject extends UObject {
    readonly __properties_UMyPluginObject: {
        MyStruct: FMyPluginStruct;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMyPluginObject['__properties_UMyPluginObject'] &
        UObject['__propertyRegistry'];
}

