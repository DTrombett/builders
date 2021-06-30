import { ApplicationCommandOptionType } from 'discord-api-types/v8';
import { SlashCommandOptionBase } from '../mixins/CommandOptionBase';

export class SlashCommandChannelOption extends SlashCommandOptionBase {
	protected override type = ApplicationCommandOptionType.CHANNEL as const;

	public constructor() {
		super(ApplicationCommandOptionType.CHANNEL);
	}
}
