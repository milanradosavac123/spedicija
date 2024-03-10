
export default function CentredRowWithVerticalGap({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="py-5 flex flex-row justify-center"
        >
            {children}
        </div>
    );
}