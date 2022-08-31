import { useNavigate } from "react-router-dom";
import Product from "data/models/product";
import ProductSearchCriteria from "data/models/product-search-criteria";
import ProductAvailabilityMatrix from './ProductAvailabilityMatrix';
import { FiLink } from "@react-icons/all-files/fi/FiLink";
import { BiRuler } from "@react-icons/all-files/bi/BiRuler";
import { FaMedal } from "@react-icons/all-files/fa/FaMedal";
import { IoIosTimer } from "@react-icons/all-files/io/IoIosTimer";
import { MdFiberNew } from "@react-icons/all-files/md/MdFiberNew";
import { HiLightningBolt } from "@react-icons/all-files/hi/HiLightningBolt";

interface ProductGridItemProps {
    product: Product,
    searchCriteria: ProductSearchCriteria
}

export default function ProductGridItem({ product, searchCriteria }: ProductGridItemProps) {
    const navigate = useNavigate();

    function navigateToProduct() {
        navigate('products/' + product.productId);
    }

    return (
        <div className="p-4 mb-5 border-2 border-green-700 hover:bg-yellow-50 rounded" onClick={navigateToProduct}>

            <div className="flex items-center">
                <h3 className="text-3xl mt-0">{product.name}</h3>
                <span className="grow text-right">
                    { product.isBest(searchCriteria.month) && 
                        <FaMedal 
                            className="text-2xl ml-2"
                            aria-hidden="false" 
                            aria-label="This item is at its best this time of year."
                            title="This item is at its best this time of year." />
                    }
                    { product.hasShortSeason() && 
                        <HiLightningBolt 
                            className="text-2xl ml-2"
                            aria-hidden="false" 
                            aria-label="This item is not usually available, get it while you can."
                            title="This item is not usually available, get it while you can." />
                    }
                    { product.isStartOfSeason(searchCriteria.month) && 
                        <MdFiberNew 
                            className="text-2xl ml-2"
                            aria-hidden="false" 
                            aria-label="This item has just become in season."
                            title="This item has just become in season." />
                    }
                    { product.isEndOfSeason(searchCriteria.month) && 
                        <IoIosTimer 
                            className="text-2xl ml-2"
                            aria-hidden="false" 
                            aria-label="This item is at the end of it's season."
                            title="This item is at the end of it's season." />
                    }
                </span>
            </div>
            { product.aka &&
                <h4 className="text-lg text-gray-600">({product.aka})</h4>
            }

            <div className="mt-5">
                <ProductAvailabilityMatrix product={product} selectedMonth={searchCriteria.month}></ProductAvailabilityMatrix>
                <ul className="attributes">
                    { product.minSizeInCM &&
                    <li title={`Minimum size: ${ product.minSizeInCM }cm`}>
                        <BiRuler aria-label="Minimum size" className="text-sm mr-2"/>
                        {product.minSizeInCM}cm
                    </li>
                    }
                    { product.links.map(link => 
                        <li className="mb-1" key={link.url}>
                            <FiLink aria-hidden="true" className="text-sm mr-2"/>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline">{link.title}</a>
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}