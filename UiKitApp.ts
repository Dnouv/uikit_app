import {
  IAppAccessors,
  IConfigurationExtend,
  IEnvironmentRead,
  IHttp,
  ILogger,
  IModify,
  IPersistence,
  IRead,
  IUIKitSurfaceViewParam,
} from "@rocket.chat/apps-engine/definition/accessors";
import { App } from "@rocket.chat/apps-engine/definition/App";
import { IAppInfo } from "@rocket.chat/apps-engine/definition/metadata";
import {
  ISlashCommand,
  SlashCommandContext,
} from "@rocket.chat/apps-engine/definition/slashcommands";
import {
  BlockElementType,
  InputElementDispatchAction,
  TextObjectType,
  UIKitSurfaceType,
} from "@rocket.chat/apps-engine/definition/uikit";
import { ButtonElement, StaticSelectElement } from "@rocket.chat/ui-kit";
import { UiKitAppCommands } from "./ui";

export class UiKitApp extends App {
  constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
    super(info, logger, accessors);
  }

  async extendConfiguration(
    configuration: IConfigurationExtend,
    environmentRead: IEnvironmentRead
  ): Promise<void> {
    await configuration.slashCommands.provideSlashCommand(
      new UiKitAppCommands()
    );
  }
}
