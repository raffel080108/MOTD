import { HookCallback, InputValidateType, TextInput } from "../motd/mod-types";
import { Util } from "../util/util";

export class TextInputHandler {
    public readonly targetClassPath: string;
    public readonly lastValidText: Map<string, string> = new Map();
    public readonly lastInputText: Map<string, string> = new Map();
    public hooksActive = false;

    public constructor(targetClassPath: string) {
        this.targetClassPath = targetClassPath;
    }

    public registerTextInputHook(functionName: string, callback: HookCallback): void {
        RegisterHook(this.targetClassPath + ":" + functionName, callback);
    }

    public registerHooks(): void {
        if (this.hooksActive) {
            return;
        }

        this.registerTextInputHook("TextCommitted", (self: RemoteUnrealParam<UObject>, textParam: RemoteUnrealParam<FText>, commitMethodParam: RemoteUnrealParam<ETextCommit>) => {
            const widget = self.get() as TextInput;
            const text = textParam.get();
            const commitMethod = commitMethodParam.get();
            
            const textString = text.ToString();
                        
            switch(widget.InputValidateType) {
                case (InputValidateType.Number): {
                    this.validate(widget, Util.isValidNumber(textString), text, commitMethod);
                    break;
                }

                case (InputValidateType.NumberNoDecimals): {
                    this.validate(widget, Util.isValidNumber(textString, false), text, commitMethod);
                    break;
                }
            }
        });

        this.registerTextInputHook("TextChanged", (self: RemoteUnrealParam<UObject>, textParam: RemoteUnrealParam<FText>) => {
            const widget = self.get() as TextInput;
            const widgetFullName = widget.GetFullName();
            const text = textParam.get();

            const textString = text.ToString();

            if (widget.MaxTextLength > 0 && string.len(textString) > widget.MaxTextLength) {
                const lastInputText = this.lastInputText.get(widgetFullName) ?? widget.DefaultText.ToString();
                widget.EditableText.SetText(FText(lastInputText));
            } else {
                this.lastInputText.set(widgetFullName, text.ToString());
            }
        });

        this.hooksActive = true;
    }

    public validate(widget: TextInput, isValidInput: boolean, newText: FText, commitMethod: ETextCommit): void {
        const widgetFullName = widget.GetFullName();
        if (isValidInput) {
            this.lastValidText.set(widgetFullName, newText.ToString());
            widget.ValidTextCommitted(newText, commitMethod);
        } else {
            const lastValidText = this.lastValidText.get(widgetFullName) ?? widget.DefaultText.ToString();

            widget.EditableText.SetText(FText(lastValidText));
            this.lastInputText.set(widgetFullName, lastValidText);
        }
    }
}