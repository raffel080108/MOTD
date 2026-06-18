declare interface UBasic_BracketWindow_RC_C extends UUserWidget {
    readonly __static_UBasic_BracketWindow_RC_C: {
        SetEdgeColor(Input: ENUM_MenuColors): void;
    };
    readonly __properties_UBasic_BracketWindow_RC_C: {
        PutStuffHere: UNamedSlot;
        Column_Right: UBasicImage;
        Column_Left: UBasicImage;
    };
    readonly __staticRegistry: 
        UBasic_BracketWindow_RC_C['__static_UBasic_BracketWindow_RC_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_BracketWindow_RC_C['__properties_UBasic_BracketWindow_RC_C'] &
        UUserWidget['__propertyRegistry'];
}

