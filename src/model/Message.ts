import Conversation from "./Conversation";
import User from "./User";

export default interface Message {
    id: string;
    body?: string;
    image?: string;
    createdAt: Date;

    seenIds: string[];
    seen: User[];

    conversationId: string;
    conversation: Conversation;

    replyToMessage: Message

    senderId: string;
    sender: User;
}