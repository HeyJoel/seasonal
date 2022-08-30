import { useEffect, useState } from "react";
import Category from "data/models/category";
import categoryService from "data/services/categoryService";
import Product from "data/models/product";
import productService from "data/services/productService";
import Loader from "components/Loader";
import ProductGridItem from "components/ProductGridItem";
import ProductSearchCriteria from "data/models/product-search-criteria";
import ProductSearchForm from "components/ProductSearchForm";
import Tab from "components/Tab";
import TabGroup from "components/TabGroup";

export default function ProductList() {
    const [categories, setCategories] = useState<Category[] | null>(null);
    const [products, setProducts] = useState<Product[] | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(null);
    const [searchCriteria, setSearchCriteria] = useState(new ProductSearchCriteria());

    useEffect(initData, []);
    useEffect(applyProductFilter, [categories, products, searchCriteria]);

    function initData() {
        categoryService.getAll().then(c => setCategories(c));
        productService.getAll().then(c => setProducts(c));
    }

    function applyProductFilter() {
        let filteredProducts = null;

        if (products) {
            filteredProducts = products
                .filter(p => {
                    return searchCriteria.month < 1 || p.isAvailable(searchCriteria.month)
                })
                .sort((p1, p2) => searchCriteria.ordering === "relevance" ? p1.compareByRelevance(p2, searchCriteria.month) : p1.compareByName(p2));
        }

        setFilteredProducts(filteredProducts);
    }

    function onCriteriaChange(criteria: ProductSearchCriteria) {
        setSearchCriteria(criteria);
    }

    return (
        <>
        <ProductSearchForm searchCriteria={searchCriteria} onCriteriaChange={onCriteriaChange} />
        { !categories && <Loader /> }
        { categories && 
            <TabGroup>
                {categories.map(renderCategory)}
            </TabGroup>
        }
        </>
    );
    
    function renderCategory(category: Category) {

        let categoryProducts = filteredProducts ?  filteredProducts.filter(p => p.category.categoryId === category.categoryId) : null;

        return (
            <Tab key={category.categoryId} label={category.name}>
                <div className="p-5 pt-7">
                    { !categoryProducts && <Loader /> }
                    { categoryProducts && categoryProducts.map(product => {
                        return <ProductGridItem product={product} searchCriteria={searchCriteria} key={product.productId}/>
                    })}
                </div>
            </Tab>
        );
    }
}