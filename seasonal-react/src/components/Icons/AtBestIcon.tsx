import { FaMedal } from "@react-icons/all-files/fa/FaMedal";
import IconProps from "./IconProps";

export default function AtBestIcon({ className, "aria-hidden": ariaHidden = true }: IconProps) {

    return (
        <FaMedal 
            className={className}
            aria-hidden={ariaHidden}
            aria-label="This item is at its best this time of year."
            title="This item is at its best this time of year." />
    );
}