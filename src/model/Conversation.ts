import Message from "./Message";
import User from "./User";

export default interface Conversation {
    id: string;
    createdAt: Date;
    lastMessageAt: Date;
    name?: string;
    isGroup?: boolean;

    messagesIds: string[];
    messages: Message[];

    userIds: string[];
    users: User[];
}