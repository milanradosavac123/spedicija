import { IsNavbarCollapsedContext } from "@/app/ContextWrapper";
import EmptyState from "@/components/chat/EmptyState";
import Body from "@/components/chat/conversations/conversationId/Body";
import Form from "@/components/chat/conversations/conversationId/Form";
import Header from "@/components/chat/conversations/conversationId/Header";
import { conversations, messages as dummyMessages } from "@/dummyData/dummyData";
import PageWrapper from "./PageWrapper";

interface Params {
    conversationId: string
}

export default async function ConversationId({ params }: { params: Params }) {

    const conversation = conversations.filter((conversation) => conversation.id === params.conversationId)[0];
    const messages = dummyMessages.filter((message) => conversation.messagesIds.includes(message.id));

    if (!conversation) {
        return (
            <PageWrapper>
                <EmptyState />
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <Header conversation={conversation} />
            <Body initialMessages={messages} />
            <Form />
        </PageWrapper>
    );
}