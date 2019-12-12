
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Message {
    id: number;
    description: string;
}

export abstract class IMutation {
    abstract createMessage(description: string): Message | Promise<Message>;
}

export abstract class IQuery {
    abstract messages(): Message[] | Promise<Message[]>;
}
