import Header from "@/components/Header";
import StandardNotificationCard from "@/components/StandardNotificationCard";
import { notificationsArrivalAndLeaving, notificationsArrivalAndLeavingTaskless, notificationsMessagesImage, notificationsMessagesLink, notificationsMessagesReply, notificationsMessagesText, notificationsTaskCompletion } from "@/dummyData/dummyData";

export default function Alarms() {
    return (
        <div className="p-5">
            <div className="flex flex-col">
                <Header headerContent="Alarms" />
                <hr />
            </div>
            <div className="flex flex-row flex-auto">
                <div className="flex flex-col">
                    {notificationsArrivalAndLeaving.map((notification, i) => (
                        <StandardNotificationCard
                            key={i}
                            {...notification}
                        />
                    ))}
                    {notificationsArrivalAndLeavingTaskless.map((notification, i) => (
                        <StandardNotificationCard
                            key={i}
                            {...notification}
                        />
                    ))}
                    {notificationsTaskCompletion.map((notification, i) => (
                        <StandardNotificationCard
                            key={i}
                            {...notification}
                        />
                    ))}
                    {notificationsMessagesText.map((notification, i) => (
                        <StandardNotificationCard
                            key={i}
                            {...notification}
                        />
                    ))}
                    {notificationsMessagesLink.map((notification, i) => (
                        <StandardNotificationCard
                            key={i}
                            {...notification}
                        />
                    ))}
                    {notificationsMessagesImage.map((notification, i) => (
                        <StandardNotificationCard
                            key={i}
                            {...notification}
                        />
                    ))}
                    {notificationsMessagesReply.map((notification, i) => (
                        <StandardNotificationCard
                            key={i}
                            {...notification}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}