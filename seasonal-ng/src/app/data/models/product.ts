import { ProductLink } from "./product-link";
import { Category } from "./category";
import { ProductResponse } from "./product-response";
import { SeasonalStatus } from "./seasonal-status";

export class Product {

    constructor(
        product: ProductResponse,
        category: Category
    ) {
        this.productId = product.productId;
        this.name = product.name;
        this.aka = product.aka;
        this.category = category;
        this.available = (product.available || []).sort(numberComparer);
        this.best = (product.best || []).sort(numberComparer);
        this.minSizeInCM = product.minSizeInCM;
        this.description = product.description;
        this.tips = product.tips || [];
        this.links = product.links || [];

        function numberComparer(a: number, b: number) {
            return a - b;
        }
    }

    productId!: string;
    name!: string;
    aka!: string;
    category!: Category;
    available!: Array<number>;
    best: Array<number>;
    minSizeInCM!: number;
    description!: string;
    tips!: Array<string>;
    links!: Array<ProductLink>;

    isBest(month: number): boolean {
        return this.best.includes(month);
    }

    isAvailable(month: number): boolean {
        return this.available.includes(month);
    }

    isStartOfSeason(month: number): boolean {
        return this.isAvailable(month)
            && ((month != 1 && !this.available.includes(month -1))
                || (month == 1 && !this.available.includes(12)));
    }

    isEndOfSeason(month: number): boolean {
        return this.isAvailable(month)
            && ((month != 12 && !this.available.includes(month + 1))
                || (month == 12 && !this.available.includes(1)));
    }

    hasShortSeason(): boolean {
        return this.available.length <= 3;
    }

    getSeasonalStatus(month: number) {
        if (this.isBest(month)) {
            return SeasonalStatus.Best;
        } else if (this.isAvailable(month)) {
            return SeasonalStatus.Available;
        }

        return SeasonalStatus.NotAvailable;
    }

    compareByName(other: Product) {
        return this.name.localeCompare(other.name);
    }

    compareByRelevance(other: Product, month: number) {
            
        let isBest = this.isBest(month);
        let isOtherBest = other.isBest(month);
        if (isBest < isOtherBest) return 1;
        if (isBest > isOtherBest) return -1;

        let isShortSeason = this.hasShortSeason();
        let isOtherShortSeason = other.hasShortSeason();
        if (isShortSeason < isOtherShortSeason) return 1;
        if (isShortSeason > isOtherShortSeason) return -1;

        let isStartOfSeason = this.isStartOfSeason(month);
        let isOtherStartOfSeason = other.isStartOfSeason(month);
        if (isStartOfSeason < isOtherStartOfSeason) return 1;
        if (isStartOfSeason > isOtherStartOfSeason) return -1;
    
        return this.compareByName(other);
    }
}