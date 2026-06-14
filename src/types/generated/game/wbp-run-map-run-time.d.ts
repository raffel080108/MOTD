declare interface UWBP_RunMap_RunTime_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SmallDataWindow_Time: USmallDataWindow_C;
    MissionTimeText: UFSDLabelWidget;
    HeaderTextColor: ENUM_MenuColors;
    UpdateTime(): void;
    SetTime(inInt: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunTime(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunTime_C: UWBP_RunMap_RunTime_C;

