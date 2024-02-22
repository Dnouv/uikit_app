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

export class UiKitAppCommands implements ISlashCommand {
  public command = "uikit";

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

    // if (command === 'open') {
    // const blocks = modify.getCreator().getBlockBuilder();
    // const sortSelect = blocks.newStaticSelectElement({
    //     placeholder: { text: 'Sort', type: TextObjectType.PLAINTEXT },
    //     dispatchActionConfig: [InputElementDispatchAction.ON_ITEM_SELECTED],
    //     actionId: `ButtonActions.FILE_SORT_SELECT_FILTER`,
    //     options: [
    //         {
    //             text: { text: 'A-Z', type: TextObjectType.PLAINTEXT },
    //             value: JSON.stringify({ name: `SortFiles.ATOZ` }),
    //         },
    //         {
    //             text: { text: 'Z-A', type: TextObjectType.PLAINTEXT },
    //             value: JSON.stringify({ name: `SortFiles.ZTOA` }),
    //         },
    //     ],
    // });

    // blocks.addActionsBlock({ elements: [ sortSelect ]})
    // const view2: IUIKitSurfaceViewParam = {
    //     id: `Views.FILE_LIST`,
    //     title: blocks.newPlainTextObject('Google Drive'),
    //     clearOnClose: false,
    //     submit: {
    //         type: BlockElementType.BUTTON,
    //         text: { text: '+ New', type: TextObjectType.PLAINTEXT },
    //         actionId: `ButtonActions.OPEN_CREATE_FILE_MODAL`,
    //     },
    //     blocks: blocks.getBlocks(),
    //     type: UIKitSurfaceType.CONTEXTUAL_BAR,
    // };

    // modify.getUiController().openSurfaceView(view2, {triggerId}, context.getSender());
    // }

    // const button: ButtonElement = {
    //     actionId: 'actionId123',
    //     type: 'button',
    //     appId: 'appId123',
    //     blockId: 'blockId123',
    //     text: {text: 'Button', type: 'plain_text'},
    // }
    // const select: StaticSelectElement = {
    //     actionId: 'actionId123',
    //     type: 'static_select',
    //     appId: 'appId123',
    //     blockId: 'blockId123',
    //     placeholder: {text: 'Select', type: 'plain_text'},
    //     options: [
    //         {
    //             text: {text: 'Option 1', type: 'plain_text'},
    //             value: 'value1',
    //         },
    //         {
    //             text: {text: 'Option 2', type: 'plain_text'},
    //             value: 'value2',
    //         },
    //     ],
    // }

    const view: IUIKitSurfaceViewParam = {
      title: { text: "hello world", type: "plain_text" },
      clearOnClose: false,
      type: UIKitSurfaceType.CONTEXTUAL_BAR,
      submit: {
        type: "button",
        style: "danger",
        text: { text: "+ New", type: "plain_text" },
        actionId: `action123`,
        appId: "appId123",
        blockId: "blockId123",
      },
      blocks: [
        {
          type: "actions",
          elements: [
            {
              type: "button",
              style: "danger",
              text: { text: "+ New", type: "plain_text" },
              actionId: `action123`,
              appId: "appId123",
              blockId: "blockId123",
            },
          ],
        },
        {
          type: "actions",
          elements: [
            {
              type: "checkbox",
              actionId: `action123`,
              appId: "appId123",
              blockId: "blockId123",
              options: [
                {
                  text: { text: "Option 1", type: "plain_text" },
                  value: "value1",
                },
                {
                  text: { text: "Option 2", type: "plain_text" },
                  value: "value2",
                },
              ],
            },
          ],
        },
        {
          type: "actions",
          elements: [
            {
              type: "radio_button",
              actionId: `action123`,
              appId: "appId123",
              blockId: "blockId123",
              options: [
                {
                  text: { text: "Option 1", type: "plain_text" },
                  value: "value1",
                },
                {
                  text: { text: "Option 2", type: "plain_text" },
                  value: "value2",
                },
              ],
            },
          ],
        },

        {
          type: "actions",
          elements: [
            {
              type: "datepicker",
              initialDate: "1990-04-28",
              appId: "app-id",
              blockId: "block-id",
              actionId: "action-id",
              placeholder: {
                type: "plain_text",
                text: "Select a date",
                emoji: true,
              },
            },
          ],
        },
        {
          type: "actions",
          elements: [
            {
              type: "time_picker",
              initialTime: "14:00",
              appId: "app-id",
              blockId: "block-id",
              actionId: "action-id",
              placeholder: {
                type: "plain_text",
                text: "Select a time",
                emoji: true,
              },
            },
          ],
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              appId: "app-id",
              blockId: "block-id",
              actionId: "action-id",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true,
              },
            },
            {
              type: "button",
              appId: "app-id",
              blockId: "block-id",
              actionId: "action-id",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true,
              },
              style: "primary",
            },
            {
              type: "button",
              appId: "app-id",
              blockId: "block-id",
              actionId: "action-id",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true,
              },
              style: "primary",
            },
            {
              type: "button",
              appId: "app-id",
              blockId: "block-id",
              actionId: "action-id",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true,
              },
              style: "danger",
            },
            {
              type: "button",
              appId: "app-id",
              blockId: "block-id",
              actionId: "action-id",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true,
              },
              style: "warning",
            },
            {
              type: "button",
              appId: "app-id",
              blockId: "block-id",
              actionId: "action-id",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true,
              },
              style: "success",
            },
          ],
        },
      ],
    };

    modify
      .getUiController()
      .openSurfaceView(view, { triggerId }, context.getSender());
  }
}
