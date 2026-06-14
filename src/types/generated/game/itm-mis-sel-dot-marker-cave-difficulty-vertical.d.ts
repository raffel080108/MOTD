declare interface UITM_MisSel_DotMarker_CaveDifficulty_Vertical_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_3: USizeBox;
    SizeBox_2: USizeBox;
    SizeBox_1: USizeBox;
    Icon3: UImage;
    Icon2: UImage;
    Icon1: UImage;
    Size: number;
    RenderAngle: number;
    CurrentLevel: number;
    Icons: TArray<UImage>;
    HideLevels: boolean;
    PreConstruct(IsDesignTime: boolean): void;
    SetData(Level: number): void;
    Construct(): void;
    ExecuteUbergraph_ITM_MisSel_DotMarker_CaveDifficulty_Vertical(EntryPoint: number): void;
}
declare const UITM_MisSel_DotMarker_CaveDifficulty_Vertical_C: UITM_MisSel_DotMarker_CaveDifficulty_Vertical_C;

