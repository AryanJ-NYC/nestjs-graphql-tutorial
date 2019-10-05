
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum MessageOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export class MessageCreateInput {
    description: string;
}

export class MessageSubscriptionWhereInput {
    AND?: MessageSubscriptionWhereInput[];
    OR?: MessageSubscriptionWhereInput[];
    NOT?: MessageSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: MessageWhereInput;
}

export class MessageUpdateInput {
    description?: string;
}

export class MessageUpdateManyMutationInput {
    description?: string;
}

export class MessageWhereInput {
    AND?: MessageWhereInput[];
    OR?: MessageWhereInput[];
    NOT?: MessageWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
}

export class MessageWhereUniqueInput {
    id?: number;
}

export interface Node {
    id: string;
}

export class AggregateMessage {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Message {
    id: number;
    description: string;
}

export class MessageConnection {
    pageInfo: PageInfo;
    edges: MessageEdge[];
    aggregate: AggregateMessage;
}

export class MessageEdge {
    node: Message;
    cursor: string;
}

export class MessagePreviousValues {
    id: number;
    description: string;
}

export class MessageSubscriptionPayload {
    mutation: MutationType;
    node?: Message;
    updatedFields?: string[];
    previousValues?: MessagePreviousValues;
}

export abstract class IMutation {
    abstract createMessage(data: MessageCreateInput): Message | Promise<Message>;
    abstract updateMessage(data: MessageUpdateInput, where: MessageWhereUniqueInput): Message | Promise<Message>;
    abstract deleteMessage(where: MessageWhereUniqueInput): Message | Promise<Message>;
    abstract upsertMessage(where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput): Message | Promise<Message>;
    abstract updateManyMessages(data: MessageUpdateManyMutationInput, where?: MessageWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyMessages(where?: MessageWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract messages(where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Message[] | Promise<Message[]>;
    abstract message(where: MessageWhereUniqueInput): Message | Promise<Message>;
    abstract messagesConnection(where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MessageConnection | Promise<MessageConnection>;
    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract message(where?: MessageSubscriptionWhereInput): MessageSubscriptionPayload | Promise<MessageSubscriptionPayload>;
}

export type Long = any;
