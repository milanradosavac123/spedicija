import EmptyState from "@/components/chat/EmptyState";
import Body from "@/components/chat/conversations/conversationId/Body";
import Form from "@/components/chat/conversations/conversationId/Form";
import Header from "@/components/chat/conversations/conversationId/Header";
import { conversations, messages as dummyMessages } from "@/dummyData/dummyData";

interface Params {
    conversationId: string
}

export default async function conversationId({ params }: { params: Params }) {
    
    const conversation = conversations.filter((conversation) => conversation.id === params.conversationId)[0];
    const messages = dummyMessages.filter((message) => conversation.messagesIds.includes(message.id));

    if(!conversation) {
        return (
            <div
                className="lg:pl-80 h-full"
            >
                <div
                    className="h-full flex flex-col"
                >
                    <EmptyState />
                </div>
            </div>
        );
    }

    return (
        <div
            className="lg:pl-80 h-full"
        >
            <div
                className="h-full flex flex-col"
            >
                <Header conversation={conversation} />
                <Body initialMessages={messages} />
                <Form />
            </div>
        </div>   
    );
}