import Account from "./Account";
import Conversation from "./Conversation";
import Message from "./Message";

export default interface User {
    id: string;
    name?: string;
    email?: string;
    emailVerified?: Date;
    image?: string;
    hashedPassword?: string;
    createdAt: Date;
    updatedAt: Date;
  
    conversationIds: string[];
    conversations: Conversation[];
  
    seenMessageIds: string[];
    seenMessages: Message[];
  
    accounts: Account[];
    messages: Message[];
  }