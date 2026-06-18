declare interface UUI_PatchNotes_C extends UUserWidget {
    readonly __static_UUI_PatchNotes_C: {
        SelectByPlatform(Default: string[], Xbox: string[], Sony: string[]): string[];
        UpdatePatchNotes(): void;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__ScrollArrow_Left_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
        BndEvt__ScrollArrow_Right_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
        ExecuteUbergraph_UI_PatchNotes(EntryPoint: number): void;
    };
    readonly __properties_UUI_PatchNotes_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ScrollArrow_Right: UBasic_ScrollArrow_C;
        ScrollArrow_Left: UBasic_ScrollArrow_C;
        PatchTextBlock: URichTextBlock;
        Basic_ScrollBarBox: UBasic_ScrollBarBox_C;
        Basic_Menu_SmallWindowWithHeader: UBasic_Menu_SmallWindowWithHeader_Redesign_C;
        PatchNoteIndex: number;
        PatchNoteHeaders_Steam: string[];
        PatchNotes_Steam: string[];
        PatchNoteHeaders_Xbox: string[];
        PatchNotes_Xbox: string[];
        Headers: string[];
        Notes: string[];
        PatchNoteHeaders_Sony: string[];
        PatchNotes_Sony: string[];
    };
    readonly __staticRegistry: 
        UUI_PatchNotes_C['__static_UUI_PatchNotes_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_PatchNotes_C['__properties_UUI_PatchNotes_C'] &
        UUserWidget['__propertyRegistry'];
}

