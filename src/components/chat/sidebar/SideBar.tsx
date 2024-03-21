import User from "@/model/User";
import DesktopSideBar from "./DesktopSideBar";
import MobileFooter from "./MobileFooter";

export default async function SideBar({ children }: { children: React.ReactNode }) {

    const currentUser = {
        id: "fdsafhjfkldfadsf",
        name: "Milos Milincic",
        email: "milos@gmail.com",
        password: "j;dfhs;ajfdhsfjkdsfh",
        createdAt: new Date(),
        updatedAt: new Date(),
        conversationIds: [],
        conversations: [],
        seenMessageIds: [],
        seenMessages: [],
        accounts: [],
        messages: []
    } as User

    return (
        <div
            className="h-full flex flex-row"
        >
            <DesktopSideBar currentUser={currentUser} />
            <MobileFooter />
            <main
                className="h-full flex-1"
            >
                {children}
            </main>
        </div>
    );
}