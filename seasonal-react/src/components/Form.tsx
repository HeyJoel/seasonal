interface FormProps {
    children: React.ReactNode
}

export default function Form({ children }: FormProps) {
    return (
        <form>{children}</form>
    );
}