import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";
import Product from "data/models/product";
import FourOhFour from "./FourOhFour";
import ProductDetails from "./ProductDetails";
import productService from "data/services/productService";

export default function ProductDetailsLoader() {
    const [product, setProduct] = useState<Product | null>(null);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (!id) { 
            productLoaded(null);
        } else {
            productService.getById(id).then(productLoaded);
        }

        function productLoaded(product: Product | null) {
            setProduct(product);
            setLoaded(true);
        }
    }, [id])

    if (!loaded) return <Loader />;
    if (!product) return <FourOhFour />;

    return <ProductDetails product={product}/>;
}