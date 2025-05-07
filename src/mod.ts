import { DependencyContainer } from "tsyringe";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { StaticRouterModService } from "@spt/services/mod/staticRouter/StaticRouterModService";
import { enableBotSpawning } from "../config/config.json";
import { buildWaves } from "./Spawning/Spawning";
import config from "../config/config.json";
import { globalValues } from "./GlobalValues";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { setupRoutes } from "./Routes/routes";

class Moar implements IPostSptLoadMod, IPreSptLoadMod {
  postSptLoad(container: DependencyContainer): void {
    if (enableBotSpawning) {
      globalValues.baseConfig = config;
      globalValues.overrideConfig = {};
      const logger = container.resolve<ILogger>("WinstonLogger");
      logger.info("\nMOAR: Starting up, may the bots ever be in your favour!");
      buildWaves(container);
    }
  }

  preSptLoad(container: DependencyContainer): void {
    if (enableBotSpawning) setupRoutes(container);
  }
}

module.exports = { mod: new Moar() };
