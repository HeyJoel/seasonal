import ProductLink from "./product-link";

export default interface ProductResponse {
    productId: string,
    name: string,
    aka: string,
    categoryId: string,
    available: Array<number>,
    best: Array<number>,
    minSizeInCM: number,
    description: string,
    tips: Array<string>,
    links: Array<ProductLink>
}