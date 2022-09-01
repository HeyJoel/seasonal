
import { BiRuler } from "@react-icons/all-files/bi/BiRuler";
import IconProps from "./IconProps";

export default function MinimumSizeIcon({ className, "aria-hidden": ariaHidden = true }: IconProps) {

    return (
        <BiRuler 
            className={className}
            aria-hidden={ariaHidden}
            aria-label="Minimum size."
            title="Minimum size." />
    );
}