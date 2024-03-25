import { Location, Task } from "@/app/tours/new_tour/page";
import Message from "@/model/Message";
import { isLinkPresent } from "@/util/utils";
import { Text, rem } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

interface StandardNotificationCardProps {
    notificationType: "ARRIVAL" | "LEAVING" | "TASK_COMPLETION" | "INCOMING_MESSAGE",
    location?: Location,
    completedTasks?: Task[]
    incomingMessage?: Message
}

export default function StandardNotificationCard({ notificationType, location, completedTasks, incomingMessage }: StandardNotificationCardProps) {

    function StandardNotificationCardArrival() {
        return (
            <div className="flex flex-row">
                <Text size="sm">Arrived at {location?.name}: {location?.address}</Text>
            </div>
        );
    }

    function StandardNotificationCardLeaving() {
        return (
            <div className="flex flex-row gap-x-1">
                {completedTasks !== undefined ? (
                    <>
                        {completedTasks.length === location?.tasks?.length && (
                            <IconCheck
                                style={
                                    {
                                        width: rem(18),
                                        height: rem(18),
                                        color: "green"
                                    }
                                }
                                stroke={1.5}
                            />
                        )}
                        {completedTasks.length !== location?.tasks?.length && (
                            <IconX
                                style={
                                    {
                                        width: rem(18),
                                        height: rem(18),
                                        color: "red"
                                    }
                                }
                                stroke={1.5}
                            />
                        )}
                        <Text size="sm">Left {location?.name}: {location?.address}{completedTasks.length !== location?.tasks?.length ? `, ${completedTasks.length} tasks complete, ${location?.tasks?.length!! - completedTasks.length!!} tasks left` : ", All tasks complete"}</Text>
                    </>
                ) : (
                    <Text size="sm">Left {location?.name}: {location?.address}</Text>
                )}
            </div>
        );
    }

    function StandardNotificationCardTaskCompletion() {
        return (
            <div className="flex flex-row">
                <IconCheck
                    style={
                        {
                            width: rem(18),
                            height: rem(18),
                            color: "green"
                        }
                    }
                    stroke={1.5}
                />
                <Text size="sm">Completed task: {completedTasks!![0].text}</Text>
            </div>
        );
    }

    function StandardNotificationCardChat() {

        function StandardNotificationCardIncomingMessage() {
            return (
                <div className="flex flex-row">
                    <Text size="sm">Incoming message from {incomingMessage?.sender.isDispacher ? "Dispacher" : incomingMessage?.sender.isVehicle ? "Vehicle" : "Driver"} {incomingMessage?.sender.name}</Text>
                </div>
            );
        }

        function StandardNotificationCardIncomingLink() {
            return (
                <div className="flex flex-row">
                    <Text size="sm">Incoming link from {incomingMessage?.sender.isDispacher ? "Dispacher" : incomingMessage?.sender.isVehicle ? "Vehicle" : "Driver"} {incomingMessage?.sender.name}</Text>
                </div>
            );
        }

        function StandardNotificationCardIncomingImage() {
            return (
                <div className="flex flex-row">
                    <Text size="sm">Incoming image from {incomingMessage?.sender.isDispacher ? "Dispacher" : incomingMessage?.sender.isVehicle ? "Vehicle" : "Driver"} {incomingMessage?.sender.name}</Text>
                </div>
            );
        }

        function StandardNotificationCardIncomingReply() {
            return (
                <div className="flex flex-row">
                    <Text size="sm">Incoming reply to your message from {incomingMessage?.sender.isDispacher ? "Dispacher" : incomingMessage?.sender.isVehicle ? "Vehicle" : "Driver"} {incomingMessage?.sender.name}</Text>
                </div>
            );
        }

        return (
            <>
                {incomingMessage?.replyToMessage ? (
                    <StandardNotificationCardIncomingReply />
                ) : incomingMessage?.body && !incomingMessage.image && !isLinkPresent(incomingMessage.body) ? (
                    <StandardNotificationCardIncomingMessage />
                ) : incomingMessage?.body && !incomingMessage.image && isLinkPresent(incomingMessage.body) ? (
                    <StandardNotificationCardIncomingLink />
                ) : incomingMessage?.image && !incomingMessage.body && (
                    <StandardNotificationCardIncomingImage />
                )}
            </>
        );
    }

    return (
        <div className="bg-[#F7F5FA] py-2 px-4 rounded-xl mt-2 shadow-md">
            {notificationType === "ARRIVAL" ? (
                <StandardNotificationCardArrival />
            ) : notificationType === "LEAVING" ? (
                <StandardNotificationCardLeaving />
            ) : notificationType === "TASK_COMPLETION" ? (
                <StandardNotificationCardTaskCompletion />
            ) : notificationType === "INCOMING_MESSAGE" ? (
                <StandardNotificationCardChat />
            ) : (
                <Text size="sm">Invalid notification type</Text>
            )}
        </div>
    );
}

