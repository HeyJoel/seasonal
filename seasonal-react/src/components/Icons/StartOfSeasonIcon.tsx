import { MdFiberNew } from "@react-icons/all-files/md/MdFiberNew";
import IconProps from "./IconProps";

export default function StartOfSeasonIcon({ className, "aria-hidden": ariaHidden = true }: IconProps) {

    return (
        <MdFiberNew 
            className={className}
            aria-hidden={ariaHidden}
            aria-label="This item has just become in season."
            title="This item has just become in season." />
    );
}