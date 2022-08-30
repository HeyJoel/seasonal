import api from './api';
import Category from "data/models/category";

const categoryService = {
    getAll
};
export default categoryService

function getAll() {
    return api.getRequired<Category[]>('categories.json');
}