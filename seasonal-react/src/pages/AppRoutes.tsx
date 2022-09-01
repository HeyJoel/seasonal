import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import FourOhFour from "./FourOhFour";
import ProductDetailsLoader from "./ProductDetailsLoader";

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetailsLoader />} />
            <Route path="*" element={<FourOhFour />} />
        </Routes>
    )
}