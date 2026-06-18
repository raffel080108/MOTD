declare interface UITM_MisSel_DotMarker_CaveDifficulty_C extends UUserWidget {
    readonly __static_UITM_MisSel_DotMarker_CaveDifficulty_C: {
        SetHideLevels(Hide: boolean): void;
        PreConstruct(IsDesignTime: boolean): void;
        SetData(Level: number): void;
        Construct(): void;
        ExecuteUbergraph_ITM_MisSel_DotMarker_CaveDifficulty(EntryPoint: number): void;
    };
    readonly __properties_UITM_MisSel_DotMarker_CaveDifficulty_C: {
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
        Icons: UImage[];
        HideLevels: boolean;
    };
    readonly __staticRegistry: 
        UITM_MisSel_DotMarker_CaveDifficulty_C['__static_UITM_MisSel_DotMarker_CaveDifficulty_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_MisSel_DotMarker_CaveDifficulty_C['__properties_UITM_MisSel_DotMarker_CaveDifficulty_C'] &
        UUserWidget['__propertyRegistry'];
}

