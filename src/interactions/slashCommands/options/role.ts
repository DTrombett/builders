import { ApplicationCommandOptionType } from 'discord-api-types/v8';
import { SlashCommandOptionBase } from '../mixins/CommandOptionBase';

export class SlashCommandRoleOption extends SlashCommandOptionBase {
	protected override type = ApplicationCommandOptionType.ROLE as const;

	public constructor() {
		super(ApplicationCommandOptionType.ROLE);
	}
}
