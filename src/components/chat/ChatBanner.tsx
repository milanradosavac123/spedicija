
interface ChatBannerProps {
    text: string
}

export default function ChatBanner({ text }: ChatBannerProps) {
    return (
        <div
            className="text-2xl font-bold text-neutral-800 bg-white py-4"
        >
            {text}
        </div>
    );
}