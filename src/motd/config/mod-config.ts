import { ConfigHandler } from "../../util/mod/config-handler/config-handler";
import { ModConfigData } from "./data/mod-config-data";

export class ModConfig extends ConfigHandler<ModConfigData> {
    public constructor() {
        super("config", new ModConfigData(), new ModConfigData());
    }
}