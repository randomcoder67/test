import config from "../config/config.json";
import { ILocationBase } from "@spt/models/eft/common/ILocationBase";

export class globalValues {
  public static baseConfig: typeof config = undefined;
  public static overrideConfig: Partial<typeof config> = undefined;
  public static locationsBase: ILocationBase[] = undefined;
  public static currentPreset: string = "random";
  public static forcedPreset: string = "";
}
