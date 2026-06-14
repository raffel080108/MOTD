declare interface FMyPluginStruct {
    TestString: FString;
}
declare const FMyPluginStruct: FMyPluginStruct;

declare interface UMyPluginObject extends UObject {
    MyStruct: FMyPluginStruct;
}
declare const UMyPluginObject: UMyPluginObject;

