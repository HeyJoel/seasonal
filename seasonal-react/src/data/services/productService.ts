import api from './api';
import ProductResponse from 'data/models/product-response';
import categoryService from './categoryService';
import Category from 'data/models/category';
import Product from 'data/models/product';

const productService = {
    getAll
};
export default productService

function getAll() {
    var categoryMapPromise = categoryService
        .getAll()
        .then(cats => new Map(cats.map(c => [c.categoryId, c])));

    var productsPromise = api.getRequired<ProductResponse[]>('products.json');

    var results = Promise
        .all([productsPromise, categoryMapPromise])
        .then(r => mapProducts(...r));

    return results;
}

function mapProducts(products: ProductResponse[], categories: Map<string, Category>) {
    return products.map(p => {

        let category = categories.get(p.categoryId);
        if (category === undefined){
            throw new Error(`Unknown category: ${p.categoryId}`);
        }
        return new Product(p, category);
    });
}