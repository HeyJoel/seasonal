import Product from "data/models/product";
import ProductSearchCriteria from "data/models/product-search-criteria";
import ProductAvailabilityMatrix from './ProductAvailabilityMatrix';
import AtBestIcon from "components/Icons/AtBestIcon";
import ShortSeasonIcon from "components/Icons/ShortSeasonIcon";
import StartOfSeasonIcon from "components/Icons/StartOfSeasonIcon";
import EndOfSeasonIcon from "components/Icons/EndOfSeasonIcon";
import MinimumSizeIcon from "components/Icons/MinimumSizeIcon";
import LinkIcon from "components/Icons/LinkIcon";

interface ProductGridItemProps {
    product: Product,
    searchCriteria: ProductSearchCriteria,
    onSelected?: (e: Product) => void
}

export default function ProductGridItem({ product, searchCriteria, onSelected }: ProductGridItemProps) {

    function handleSelected() {
        onSelected?.call(product, product);
    }

    return (
        <div className="p-4 mb-5 border border-green-700 hover:bg-yellow-50 rounded cursor-pointer bg-white" onClick={handleSelected}>

            <div className="flex items-center">
                <h3 className="text-3xl mt-0">{product.name}</h3>
                <span className="grow text-right">
                    { product.isBest(searchCriteria.month) && 
                        <AtBestIcon 
                            className="text-2xl ml-2"
                            aria-hidden="false" />
                    }
                    { product.hasShortSeason() && 
                        <ShortSeasonIcon 
                            className="text-2xl ml-2"
                            aria-hidden="false" />
                    }
                    { product.isStartOfSeason(searchCriteria.month) && 
                        <StartOfSeasonIcon 
                            className="text-2xl ml-2"
                            aria-hidden="false" />
                    }
                    { product.isEndOfSeason(searchCriteria.month) && 
                        <EndOfSeasonIcon 
                            className="text-2xl ml-2"
                            aria-hidden="false" />
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
                        <MinimumSizeIcon className="text-sm mr-2"/>
                        {product.minSizeInCM}cm
                    </li>
                    }
                    { product.links.map(link => 
                        <li className="mb-1" key={link.url}>
                            <LinkIcon className="text-sm mr-2"/>
                            <a href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="underline"
                                onClick={e => e.stopPropagation()}>{link.title}</a>
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}