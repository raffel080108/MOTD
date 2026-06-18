declare interface MOTDModActor extends ModManagerMod {
    readonly __properties_MOTDModActor: {
        ModPage: MOTDModPage;
        ModManager: IBPI_RCModManager_C
        LocalPlayerController: APlayerController;
    };
    readonly __static_MOTDModActor: {
        FSDGameState_OnPlayerLeave(PlayerState: AFSDPlayerState): void;
        FSDGameState_OnPlayerCharacterRegistered(PlayerCharacter: APlayerCharacter): void;
    };
    readonly __staticRegistry: 
        MOTDModActor['__static_MOTDModActor'] & 
        ModManagerMod['__staticRegistry'];
    readonly __propertyRegistry: 
        MOTDModActor['__properties_MOTDModActor'] &
        ModManagerMod['__propertyRegistry'];
}
declare interface MOTDModPage extends ModManagerModUI {
    readonly __properties_MOTDModPage: {
        PageContent: UVerticalBox;
        DisabledLabel: TextLabel;
        WaitingForScriptLabel: TextLabel;
        SendPreviewMessageButton: TextButton;
        MOTDMessageTextBox: UMultiLineEditableTextBox;
        LobbyMessageDelayInput: TextInput;
        MissionMessageDelayInput: TextInput;
    };
    readonly __static_MOTDModPage: {
        SendPreviewMessageButtonClicked(): void;
        MessageDelayInputTextCommitted(Text: string, CommitMethod: ETextCommit): void;
        MOTDMessageTextBoxTextCommitted(Text: string, CommitMethod: ETextCommit): void;
    };
    readonly __staticRegistry: 
        MOTDModPage['__static_MOTDModPage'] & 
        ModManagerModUI['__staticRegistry'];
    readonly __propertyRegistry: 
        MOTDModPage['__properties_MOTDModPage'] &
        ModManagerModUI['__propertyRegistry'];
}

declare const enum InputValidateType {
    None = 0,
    Number = 1,
    NumberNoDecimals = 2
}

declare interface TextInput extends UUserWidget {
    readonly __properties_TextInput: {
        SizeBox: USizeBox;
        EditableText: UEditableText;
        Background: UImage;
        BackgroundColor: FLinearColor;
        InputValidateType: InputValidateType;
        DefaultText: string;
        TextJustification: ETextJustify;
        Width: number;
        Height: number;
        MaxTextLength: number;
    };
    readonly __static_TextInput: {
        TextChanged(NewText: string): void;
        TextCommitted(NewText: string, CommitMethod: ETextCommit): void;
        ValidTextCommitted(Text: string, CommitMethod: ETextCommit): void;
        SetText(NewText: string): void;
    };
    readonly __staticRegistry: 
        TextInput['__static_TextInput'] &
        UUserWidget['__staticRegistry'];

    readonly __propertyRegistry:
        TextInput['__properties_TextInput'] &
        UUserWidget['__propertyRegistry'];
}

declare interface TextLabel extends UUserWidget {
    Text: string;
    SizeBox: USizeBox;
    TextWidget: UTextBlock;
    Width: number;
    Height: number;
    FontType: string;
    WrapText: boolean;
    TextSelectable: boolean;
}

declare interface TextButton extends UUserWidget {
    ButtonText: string;
    TextWidget: UTextBlock;
    Button: UButton;
    Width: number;
    Height: number;
}