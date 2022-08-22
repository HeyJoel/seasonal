export class ProductSearchCriteria {
    month: number = new Date().getMonth() + 1;
    ordering: string = 'relevance';
}