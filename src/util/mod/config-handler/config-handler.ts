import { ModUtil } from "../mod-util";

export class ConfigHandler<TData> {
    public readonly configName: string;
    public readonly defaults: TData;
    public data: TData;
    public configNeedsSaving = false;

    public constructor(configName: string, defaults: TData, data: TData) {
        this.configName = configName;
        this.defaults = defaults;
        this.data = data;
    }

    public saveConfig(): void {        
        this.save();
    }

    public loadConfig(): void {
        this.load();
    }

    public parseData(newData: Partial<TData>): void {
        for (const [key] of Object.entries(newData)) {
            this.data[key as keyof TData] = newData[key as keyof TData] ?? this.defaults[key as keyof TData];
        }
    }

    protected save(): void {        
        ModUtil.saveConfig(this.configName, this.data);

        this.configNeedsSaving = false;            
    }

    protected load(): void {
        this.configNeedsSaving = false;

        const data = ModUtil.loadConfig(this.configName) as Partial<TData>;

        this.parseData(data);
    }
}