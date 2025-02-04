import type {
  GuildChannel,
  GuildMember,
  Role,
  ThreadChannel,
  User,
} from "discord.js";

import type { SimpleCommandMessage } from "../../index.js";
import type { IGuild, IPrefix } from "../index.js";

export type ArgSplitter =
  | string
  | RegExp
  | ((command: SimpleCommandMessage) => string[]);

export type SimpleCommandOptions = {
  aliases?: string[];
  argSplitter?: ArgSplitter;
  botIds?: string[];
  defaultPermission?: boolean;
  description?: string;
  directMessage?: boolean;
  guilds?: IGuild[];
  prefix?: IPrefix;
};

export type SimpleOptionType =
  | string
  | number
  | boolean
  | ThreadChannel
  | GuildChannel
  | User
  | GuildMember
  | Role
  | undefined;

export enum SimpleCommandOptionType {
  String,
  Number,
  Boolean,
  User,
  Channel,
  Role,
  Mentionable,
}
