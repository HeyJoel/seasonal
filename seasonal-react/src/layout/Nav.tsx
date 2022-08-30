import { GiFlowerEmblem } from "@react-icons/all-files/gi/GiFlowerEmblem";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="bg-green-700">
            <nav className="flex px-5 py-3 container mx-auto">
                <Link to="/" className="text-white"><GiFlowerEmblem aria-hidden="true" className="text-xl mr-2" /><span>Seasonal</span></Link>
            </nav>
        </div>
    );
};
