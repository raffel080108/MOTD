import { ModManagerMod, ModManagerModUI } from "mod-manager-types";

declare interface MOTDModActor extends ModManagerMod {
    FSDGameState_OnPlayerJoined(PlayerState: AFSDPlayerState): void;
}

declare interface MOTDModPage extends ModManagerModUI {
    PageContent: UVerticalBox;
    DisabledLabel: TextLabel;
    SendPreviewMessageButton: TextButton;
    MOTDMessageTextBox: UMultiLineEditableTextBox;
    LobbyMessageDelayInput: TextInput;
    MissionMessageDelayInput: TextInput;
    SendPreviewMessageButtonClicked(): void;
    MessageDelayInputTextCommitted(Text: FText, CommitMethod: ETextCommit): void;
    MOTDMessageTextBoxTextCommitted(Text: FText, CommitMethod: ETextCommit): void;
}

declare const enum InputValidateType {
    None = 0,
    Number = 1,
    NumberNoDecimals = 2
}

declare interface TextInput extends UUserWidget {
    SizeBox: USizeBox;
    EditableText: UEditableText;
    Background: UImage;
    BackgroundColor: FLinearColor;
    InputValidateType: InputValidateType;
    DefaultText: FText;
    TextJustification: ETextJustify;
    Width: number;
    Height: number;
    MaxTextLength: number;
    TextChanged(NewText: FText): void;
    TextCommitted(NewText: FText, CommitMethod: ETextCommit): void;
    ValidTextCommitted(Text: FText, CommitMethod: ETextCommit): void;
}

declare interface TextLabel extends UUserWidget {
    Text: FText;
    SizeBox: USizeBox;
    TextWidget: UTextBlock;
    Width: number;
    Height: number;
    FontType: FName;
    WrapText: boolean;
    TextSelectable: boolean;
}

declare interface TextButton extends UUserWidget {
    ButtonText: FText;
    TextWidget: UTextBlock;
    Button: UButton;
    Width: number;
    Height: number;
}

export type HookCallback = (self: RemoteUnrealParam<UObject>, ...args: RemoteUnrealParam<any>[]) => any;