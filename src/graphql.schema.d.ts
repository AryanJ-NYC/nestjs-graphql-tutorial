
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

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    password_ASC = "password_ASC",
    password_DESC = "password_DESC"
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

export class UserCreateInput {
    email: string;
    password: string;
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    email?: string;
    password?: string;
}

export class UserUpdateManyMutationInput {
    email?: string;
    password?: string;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in?: string[];
    password_not_in?: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
}

export class UserWhereUniqueInput {
    id?: number;
}

export interface Node {
    id: string;
}

export class AggregateMessage {
    count: number;
}

export class AggregateUser {
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
    abstract createUser(data: UserCreateInput): User | Promise<User>;
    abstract updateMessage(data: MessageUpdateInput, where: MessageWhereUniqueInput): Message | Promise<Message>;
    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    abstract deleteMessage(where: MessageWhereUniqueInput): Message | Promise<Message>;
    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    abstract upsertMessage(where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput): Message | Promise<Message>;
    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    abstract updateManyMessages(data: MessageUpdateManyMutationInput, where?: MessageWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyMessages(where?: MessageWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract messages(where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Message[] | Promise<Message[]>;
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    abstract message(where: MessageWhereUniqueInput): Message | Promise<Message>;
    abstract user(where: UserWhereUniqueInput): User | Promise<User>;
    abstract messagesConnection(where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MessageConnection | Promise<MessageConnection>;
    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract message(where?: MessageSubscriptionWhereInput): MessageSubscriptionPayload | Promise<MessageSubscriptionPayload>;
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
}

export class User {
    id: number;
    email: string;
    password: string;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: number;
    email: string;
    password: string;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type Long = any;
