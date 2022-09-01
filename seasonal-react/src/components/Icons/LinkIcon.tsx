import { FiLink } from "@react-icons/all-files/fi/FiLink";
import IconProps from "./IconProps";

export default function LinkIcon({ className, "aria-hidden": ariaHidden = true }: IconProps) {

    return (
        <FiLink 
            className={className}
            aria-hidden={ariaHidden}/>
    );
}