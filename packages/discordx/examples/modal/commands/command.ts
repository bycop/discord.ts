import type { CommandInteraction, ModalSubmitInteraction } from "discord.js";

import { Discord, ModalComponent, Slash } from "../../../src/index.js";

@Discord()
export class CommandExample {
  @Slash()
  async modal(interaction: CommandInteraction): Promise<void> {
    // Present the modal to the user
    await interaction.showModal({
      components: [
        {
          components: [
            {
              customId: "custom_field",
              label: "How long can a label\n actually be?",
              style: 1,
              type: 4,
            },
          ],
          type: 1,
        },
      ],
      customId: "my_test_modal",
      title: "This is a test Modal",
    });
  }

  @ModalComponent("my_test_modal")
  async handle(interaction: ModalSubmitInteraction): Promise<void> {
    await interaction.reply(
      `Input: ${interaction.fields.getTextInputValue("custom_field")}`
    );
    return;
  }
}
