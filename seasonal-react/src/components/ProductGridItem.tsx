import { useNavigate } from "react-router-dom";
import Product from "data/models/product";
import ProductSearchCriteria from "data/models/product-search-criteria";
import ProductAvailabilityMatrix from './ProductAvailabilityMatrix';
import { FiLink } from "@react-icons/all-files/fi/FiLink";
import { BiRuler } from "@react-icons/all-files/bi/BiRuler";

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

            <div className="flex">
                <h3 className="text-3xl">{product.name}</h3>
                <span className="grow text-right">
                    { product.isBest(searchCriteria.month) && 
                        <span 
                            className="mat-icon star" 
                            aria-hidden="false" 
                            aria-label="This item is at its best this time of year."
                            title="This item is at its best this time of year.">B</span>
                    }
                    { product.hasShortSeason() && 
                        <span 
                            className="mat-icon bolt" 
                            aria-hidden="false" 
                            aria-label="This item is not usually available, get it while you can."
                            title="This item is not usually available, get it while you can.">S</span>
                    }
                    { product.isStartOfSeason(searchCriteria.month) && 
                        <span 
                            className="mat-icon auto_awesome" 
                            aria-hidden="false" 
                            aria-label="This item has just become in season."
                            title="This item has just become in season.">S</span>
                    }
                    { product.isEndOfSeason(searchCriteria.month) && 
                        <span 
                            className="mat-icon schedule" 
                            aria-hidden="false" 
                            aria-label="This item is at the end of it's season."
                            title="This item is at the end of it's season.">E</span>
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