import ProductDetailsBody from "components/Products/ProductDetailsBody";
import ProductDetailsHeader from "components/Products/ProductDetailsHeader";
import Product from "data/models/product";

interface ProductDetailsProps {
    product: Product
}
export default function ProductDetails({ product }: ProductDetailsProps) {
    let month = new Date().getMonth() + 1;

    return (
        <>
        <div className="container mx-auto p-7">
            <div className="mb-7">
                <ProductDetailsHeader product={product}/>
            </div>
            <ProductDetailsBody product={product} month={month}/>
        </div>
        </>
    );
}