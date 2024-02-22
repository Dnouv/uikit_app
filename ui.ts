import {
  IRead,
  IModify,
  IHttp,
  IPersistence,
  IUIKitSurfaceViewParam,
} from "@rocket.chat/apps-engine/definition/accessors";
import {
  ISlashCommand,
  SlashCommandContext,
} from "@rocket.chat/apps-engine/definition/slashcommands";
import { UIKitSurfaceType } from "@rocket.chat/apps-engine/definition/uikit";
import { IUser } from "@rocket.chat/apps-engine/definition/users";
import {
  Block,
  BlockElement,
  BlockElementType,
  TextObject,
} from "@rocket.chat/ui-kit";

export class UiKitAppCommands implements ISlashCommand {
  public command = "uiki";

  public i18nParamsExample = "slashcommand_params";

  public i18nDescription = "slashcommand_description";

  public providesPreview = false;

  // imported to access the public method from the main class

  public async executor(
    context: SlashCommandContext,
    read: IRead,
    modify: IModify,
    http: IHttp,
    persistence: IPersistence
  ): Promise<void> {
    // const [command] = context.getArguments();
    const triggerId = context.getTriggerId() || "";
    const appUser = (await read.getUserReader().getAppUser()) as IUser;
    const appId = appUser.id;

    // a very simple view with just the current date
    // const view = {
    //   type: UIKitSurfaceType.CONTEXTUAL_BAR,
    //   title: {
    //     type: "plain_text",
    //     text: "My App",
    //   } as TextObject,
    //   blocks: [
    //     {
    //       type: "section",
    //       text: {
    //         type: "mrkdwn",
    //         text: `The current date is ${new Date().toLocaleDateString()}`,
    //       } as TextObject,
    //     } as Block,
    //   ],
    // };

    const view: IUIKitSurfaceViewParam = {
      title: { text: "hello world", type: "plain_text" } as TextObject,
      clearOnClose: false,
      type: UIKitSurfaceType.CONTEXTUAL_BAR,
      submit: {
        type: "button",
        style: "danger",
        text: { text: "+ New", type: "plain_text" },
        actionId: `action123`,
        appId: appId,
        blockId: "blockId123",
      },
      blocks: [
        {
          type: "actions",
          elements: [
            {
              type: BlockElementType.TIME_PICKER,
              appId: appId,
              blockId: "blockId123",
              actionId: "action-id",
            },
          ],
        },
      ],
    };

    console.log("triggerId one", triggerId);

    modify
      .getUiController()
      .openSurfaceView(view, { triggerId }, context.getSender());
  }
}
