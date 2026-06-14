import { ModUtil } from "../mod-util";

export class ConfigHandler<TData> {
    public readonly configName: string;
    public readonly defaults: TData;
    public data: TData;
    public configNeedsSaving = false;
    protected configFileOperationInProgress = false;

    public constructor(configName: string, defaults: TData, data: TData) {
        this.configName = configName;
        this.defaults = defaults;
        this.data = data;
    }

    public saveConfig(): void {
        if (this.configFileOperationInProgress) {
            return;
        }
        
        this.save();

        this.configFileOperationInProgress = true;
    }

    public loadConfig(): void {
        if (this.configFileOperationInProgress) {
            return;
        }

        this.load();

        this.configFileOperationInProgress = true;
    }

    public parseData(newData: Partial<TData>): void {
        for (const [key] of pairs(newData)) {
            (this.data[key] as any) = newData[key] ?? this.defaults[key];
        }
    }

    protected save(): void {        
        ModUtil.saveConfig(this.configName, this.data, (success: boolean) => {
            if (success) {
                this.configNeedsSaving = false;
            }
            
            this.fileOperationCompleted();
        });
    }

    protected load(): void {
        ModUtil.loadConfig(this.configName, (success: boolean, data: unknown) => {
            if (success && data !== undefined) {
                this.configNeedsSaving = false;
                this.parseData(data as Partial<TData>);
            }

            this.fileOperationCompleted();
        });
    }

    protected fileOperationCompleted(): void {
        this.configFileOperationInProgress = false;
    }
}