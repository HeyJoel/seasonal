import { SelectHTMLAttributes } from "react";
import FormField, { FormFieldProps } from "./FormField";

type FormFieldSelectProps = SelectHTMLAttributes<HTMLSelectElement>& {
    label: string,
    name: string
}

export default function FormFieldSelect(props: FormFieldSelectProps) {

    return (
        <FormField htmlFor={props.name} label={props.label}>
            <select name={props.name} 
                    value={props.value} 
                    onChange={ props.onChange }
                    autoComplete={props.autoComplete}
                    autoFocus={props.autoFocus}
                    disabled={props.disabled}
                    form={props.form}
                    multiple={props.multiple}
                    required={props.required}
                    size={props.size}
                className="w-full p-3"
                    >
                { props.children }
            </select>
        </FormField>
    );
}