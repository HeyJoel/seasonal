import { HiLightningBolt } from "@react-icons/all-files/hi/HiLightningBolt";
import IconProps from "./IconProps";

export default function ShortSeasonIcon({ className, "aria-hidden": ariaHidden = true }: IconProps) {

    return (
        <HiLightningBolt 
            className={className}
            aria-hidden={ariaHidden}
            aria-label="This item is not usually available, get it while you can."
            title="This item is not usually available, get it while you can." />
    );
}