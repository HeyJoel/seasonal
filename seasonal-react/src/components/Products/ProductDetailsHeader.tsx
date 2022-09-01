import Product from "data/models/product";

interface ProductDetailsHeaderProps {
    product: Product
}

export default function ProductDetailsHeader({ product }: ProductDetailsHeaderProps) {

    return (
        <>
            <h1 className="text-4xl">{product.name}</h1>
            { product.aka &&
            <h3>({product.aka})</h3>
            }
        </>
    );
}