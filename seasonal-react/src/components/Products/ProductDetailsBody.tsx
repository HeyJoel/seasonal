import Product from "data/models/product";
import ProductAvailabilityMatrix from './ProductAvailabilityMatrix';
import AtBestIcon from "components/Icons/AtBestIcon";
import ShortSeasonIcon from "components/Icons/ShortSeasonIcon";
import StartOfSeasonIcon from "components/Icons/StartOfSeasonIcon";
import EndOfSeasonIcon from "components/Icons/EndOfSeasonIcon";
import MinimumSizeIcon from "components/Icons/MinimumSizeIcon";
import LinkIcon from "components/Icons/LinkIcon";

interface ProductDetailsBodyProps {
    product: Product,
    month: number
}

export default function ProductDetailsBody({ product, month }: ProductDetailsBodyProps) {
    let isBest = product.isBest(month);
    let hasShortSeason = product.hasShortSeason();
    let isStartOfSeason = product.isStartOfSeason(month);
    let isEndOfSeason = product.isEndOfSeason(month);

    return (
        <>
        
        <div>
            <p className="mb-4">{product.description}</p>
            { (isBest || isEndOfSeason || isStartOfSeason || hasShortSeason || product.minSizeInCM || product.links) &&
            <ul className="mb-4 text-sm">
                { isBest &&
                    <li className="mb-1">
                        <AtBestIcon className="mr-3"/>
                        This item is at its best this time of year.
                    </li>
                }
                { hasShortSeason && 
                <li className="mb-1">
                    <ShortSeasonIcon className="mr-3"/>
                    This item is not usually available, get it while you can.
                </li>
                }
                { isStartOfSeason &&
                <li className="mb-1">
                    <StartOfSeasonIcon className="mr-3" />
                    This item has just become in season.
                </li>
                }
                { isEndOfSeason &&
                <li className="mb-1">
                    <EndOfSeasonIcon className="mr-3" />
                    This item is at the end of it's season.
                </li>
                }
                { product.minSizeInCM &&
                <li className="mb-1" title={`Minimum size: ${product.minSizeInCM}cm`}>
                    <MinimumSizeIcon className="mr-3" />
                    Min-size: {product.minSizeInCM}cm
                </li>
                }
                { product.links.map(link => 
                <li className="mb-1">
                    <LinkIcon className="mr-3" />
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                </li>
                )}
            </ul>
            }
        </div>
        
        <h2 className="text-xl">Season</h2>
        <ProductAvailabilityMatrix product={product} selectedMonth={month} />
        { product.tips.length > 0 &&
        <>
            <h2 className="text-xl mb-3">Tips</h2>
            <ul>
                {product.tips.map(tip =>
                <li className="ml-8 pl-2 list-disc">{tip}</li>
                )}
            </ul>
        </>
        }
        </>
    );
}