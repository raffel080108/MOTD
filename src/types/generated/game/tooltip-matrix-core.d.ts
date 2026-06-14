declare interface UTOOLTIP_MatrixCore_C extends UUserWidget {
    UI_SchematicOwnerIcon: UUI_Forge_Schematic_OwnerIcon_C;
    SchematicName: UBasic_Label_C;
    SchematicCategory: UBasic_Label_C;
    ITM_CharacterIcon: UITM_CharacterIcon_C;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    FromSchematic(InSchematic: USchematic): void;
}
declare const UTOOLTIP_MatrixCore_C: UTOOLTIP_MatrixCore_C;

