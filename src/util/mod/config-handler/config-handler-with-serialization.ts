import { ModUtil } from "../mod-util";
import { ConfigHandler } from "./config-handler";

export class ConfigHandlerWithSerialization<TData, TSerializedData> extends ConfigHandler<TData> {
    protected serializeCallback: (data: TData) => TSerializedData;
    protected deserializeCallback: (serializedData: Partial<TSerializedData>) => Partial<TData>;

    public constructor(configName: string, defaults: TData, data: TData, serializeCallback: (data: TData) => TSerializedData, deserializeCallback: (serializedData: Partial<TSerializedData>) => Partial<TData>) {
        super(configName, defaults, data);

        this.serializeCallback = (data) => serializeCallback(data);
        this.deserializeCallback = (serializedData) => deserializeCallback(serializedData);
    }

    protected save(): void {
        ModUtil.saveConfig(this.configName, this.serializeCallback(this.data));
    }

    protected load(): void {
        const data = ModUtil.loadConfig(this.configName);

        this.parseData(this.deserializeCallback(data as Partial<TSerializedData>));
    }
}