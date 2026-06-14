declare interface UITM_HostIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Icon_SizeBox: USizeBox;
    Size: number;
    SetIsHost(InIsHost: boolean): void;
    SetSize(Size: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_HostIcon(EntryPoint: number): void;
}
declare const UITM_HostIcon_C: UITM_HostIcon_C;

