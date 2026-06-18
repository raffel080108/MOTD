import { Util } from "../util/util";

export class TextInputHandler {
    public readonly targetClassPath: string;
    public readonly lastValidText: Map<string, string> = new Map();
    public readonly lastInputText: Map<string, string> = new Map();
    public hooksActive = false;

    public constructor(targetClassPath: string) {
        this.targetClassPath = targetClassPath;
    }

    public registerTextInputHook(functionName: string, callback: UE4SSLHookCallback): void {
        RegisterHook(this.targetClassPath + ":" + functionName, callback);
    }

    public registerHooks(): void {
        if (this.hooksActive) {
            return;
        }

        this.registerTextInputHook("TextCommitted", (self: UObject, args: unknown[]) => {
            const widget = self as TextInput;
            const text = args[0] as string;
            const commitMethod = args[1] as ETextCommit;
                                    
            switch(GetProperty(widget, "InputValidateType")) {
                case (InputValidateType.Number): {
                    this.validate(widget, Util.isValidNumber(text), text, commitMethod);
                    break;
                }

                case (InputValidateType.NumberNoDecimals): {
                    this.validate(widget, Util.isValidNumber(text, false), text, commitMethod);
                    break;
                }
            }
        });

        this.registerTextInputHook("TextChanged", (self: UObject, args: unknown[]) => {
            const widget = self as TextInput;
            const text = args[0] as string;

            const widgetFullName = widget.GetFullName();
            const maxTextLength = GetProperty(widget, "MaxTextLength") ?? 0;

            if (maxTextLength > 0 && text.length > maxTextLength) {
                const lastInputText = this.lastInputText.get(widgetFullName) ?? GetProperty(widget, "DefaultText") ?? "";

                const editableTextWidget = GetProperty(widget, "EditableText");
                if (editableTextWidget != undefined && editableTextWidget.IsValid()) {
                    CallFunction(editableTextWidget, "SetText", lastInputText);
                }
            } else {
                this.lastInputText.set(widgetFullName, text);
            }
        });

        this.registerTextInputHook("SetText", (self: UObject, args: unknown[]) => {
            const widget = self as TextInput;
            const text = args[0] as string;

            const widgetFullName = widget.GetFullName();
            this.lastInputText.set(widgetFullName, text);
            this.lastValidText.set(widgetFullName, text);
        });

        this.hooksActive = true;
    }

    public validate(widget: TextInput, isValidInput: boolean, newText: string, commitMethod: ETextCommit): void {
        const widgetFullName = widget.GetFullName();
        if (isValidInput) {
            this.lastValidText.set(widgetFullName, newText);

            CallFunction(widget, "ValidTextCommitted", newText, commitMethod);
        } else {
            const lastValidText = this.lastValidText.get(widgetFullName) ?? GetProperty(widget, "DefaultText") ?? "";

            CallFunction(widget, "SetText", lastValidText);
        }
    }
}