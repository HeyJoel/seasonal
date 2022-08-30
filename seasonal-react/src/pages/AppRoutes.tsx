import React from "react";
import { Route, Routes } from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import FourOhFour from "./FourOhFour";

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<FourOhFour />} />
        </Routes>
    )
}