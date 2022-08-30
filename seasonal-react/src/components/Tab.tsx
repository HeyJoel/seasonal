interface TabProps {
    label: string,
    children: React.ReactNode
}

export default function Tab({ label, children }: TabProps) {
    return (
        <div>{children}</div>
    );
}