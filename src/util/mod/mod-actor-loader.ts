import { ModManagerMod } from "mod-manager-types";
import { ModInfo } from "../../motd/mod-info";
import { UObjectContainer } from "../uobject-container";
import { ModUtil } from "./mod-util";
import { UEUtil } from "../ue-util";
import { Logger } from "./logger";
import { Util } from "../util";

export class ModActorLoader {
    public waitingForModActorSpawn = false;
    public modLoadedCallback: (() => void) | undefined = undefined;
    public modLoadedHookActive = false;
    public modActor: UObjectContainer<ModManagerMod> = new UObjectContainer();

    public spawnModActor(modActorSpawnedCallback: (modActor: ModManagerMod) => void): void {
        this.modActor.set(undefined);

        if (this.waitingForModActorSpawn) {
            return;
        }

        this.waitingForModActorSpawn = true;
        Util.loop(500, () => {
            const actorClass = UEUtil.findObjectClassInAssetRegistry(ModInfo.MOD_ACTOR_DIRECTORY, ModInfo.MOD_ACTOR_ASSET_NAME);
            if (actorClass === undefined) {
                return false;
            }
        
            const spawnedActor = UEUtil.UE_HELPERS.GetWorld().SpawnActor(actorClass, {}, {}) as ModManagerMod;
            if (spawnedActor.IsValid()) {
                this.modActor.set(spawnedActor);

                Logger.log("Successfully spawned Mod Actor");
                modActorSpawnedCallback(spawnedActor);
                
                this.waitingForModActorSpawn = false;

                return true;
            }

            return false;
        });

        return;
    }

    public hookModLoaded(callback: () => void): void {
        this.modLoadedCallback = callback;

        if (!this.modLoadedHookActive) {
            ModUtil.hookModActorFunction("OnInitialise", () => {
                Logger.log("Mod was loaded in RogueCore Mod Manager");

                if (this.modLoadedCallback !== undefined) {
                    this.modLoadedCallback();
                }
            });

            this.modLoadedHookActive = true;
        }
    }

    public hookModManagerLoaded(modManagerLoadedCallback: (modHub: UWBP_ModManagerConfigUI_C) => void, modActorSpawnedCallback: (modActor: ModManagerMod) => void, modLoadedCallback: () => void): void {
        NotifyOnNewObject("/Game/_RogueCoreModManager/Widget/WBP_ModManagerConfigUI.WBP_ModManagerConfigUI_C", (constructedObject: UObject) => {
            const levelName = UEUtil.getCurrentLevelName();
            if (levelName === undefined || !ModInfo.LOAD_IN_LEVEL_NAMES.includes(levelName)) {
                return;
            }

            const modManager = constructedObject as UWBP_ModManagerConfigUI_C;
                                    
            Logger.log("RogueCore Mod Manager has loaded");
        
            modManagerLoadedCallback(modManager);

            this.spawnModActor((modActor: ModManagerMod) => {
                modActorSpawnedCallback(modActor);

                this.hookModLoaded(modLoadedCallback);
            });
        });
    }
}