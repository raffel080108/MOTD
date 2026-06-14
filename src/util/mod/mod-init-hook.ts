import { UEUtil } from "../ue-util";

export class ModInitHook {
    public initGameStatePostFired = false;
    public lastInitCallLevelName: string | undefined = undefined;

    public hook(initCallback: () => void): void {
        RegisterInitGameStatePostHook(() => {
            if (!this.validateLastInitCallLevel()) {
                return;
            }

            this.initGameStatePostFired = true;
            initCallback();
        });

        RegisterLoadMapPostHook(() => {
            if (!this.validateLastInitCallLevel() || this.initGameStatePostFired) {
                return;
            }

            initCallback();
        });
    }

    public validateLastInitCallLevel(): boolean {
        const currentLevelName = UEUtil.getCurrentLevelName();
        if (this.lastInitCallLevelName !== undefined && currentLevelName === this.lastInitCallLevelName) {
            return false;
        }

        this.lastInitCallLevelName = currentLevelName;

        return true;
    }
}