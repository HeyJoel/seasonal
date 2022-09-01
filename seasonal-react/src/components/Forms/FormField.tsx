export interface FormFieldProps {
    label: string,
    htmlFor: string,
    children: React.ReactNode
}

export default function FormField({ 
    htmlFor, 
    label, 
    children 
}: FormFieldProps) {

    return (
        <div className="block">
            <label htmlFor={htmlFor} className="block mb-2">{label}:</label>
            {children}
        </div>
    );
}