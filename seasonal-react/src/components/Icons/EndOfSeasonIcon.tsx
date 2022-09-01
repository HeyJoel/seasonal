import { IoIosTimer } from "@react-icons/all-files/io/IoIosTimer";
import IconProps from "./IconProps";

export default function EndOfSeasonIcon({ className, "aria-hidden": ariaHidden = true }: IconProps) {

    return (
        <IoIosTimer 
            className={className}
            aria-hidden={ariaHidden}
            aria-label="This item is at the end of it's season."
            title="This item is at the end of it's season." />
    );
}