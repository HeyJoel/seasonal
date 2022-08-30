import ProductSearchCriteria from "data/models/product-search-criteria";
import FormFieldSelect from "./FormFieldSelect";

interface ProductSearchFormProps {
    searchCriteria: ProductSearchCriteria,
    onCriteriaChange: (e: ProductSearchCriteria) => void
}

export default function ProductSearchForm({ searchCriteria, onCriteriaChange }: ProductSearchFormProps) {
    const months = ["Show All", "January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const orderOptions = ['Relevance', 'Name'];

    function onFormValuesChange(e: React.ChangeEvent<HTMLSelectElement>) {
        let target = e.target;
        let newCriteria = { ...searchCriteria };

        switch (target.name) {
            case 'month': 
            newCriteria.month = parseInt(target.value);
                break;
            case 'ordering': 
            newCriteria.ordering = target.value;
                break;
            default: throw new Error(`Form name not recognised: ${target.name}`);
        }

        onCriteriaChange(newCriteria);
    };

    return (
    <div className="mb-4">
        <form className="container mx-auto py-7 px-5 mb-7 grid gap-8 grid-cols-2">
            <FormFieldSelect name="month" label="Month" onChange={ onFormValuesChange }>
                { months.map((monthText, i) =>
                    <option value={i} key={i}>{monthText}</option>
                )}
            </FormFieldSelect>

            <FormFieldSelect name="ordering" label="Order" value={searchCriteria.ordering} onChange={ onFormValuesChange }>
                { orderOptions.map((option) =>
                    <option value={option.toLowerCase()} key={option}>{option}</option>
                )}
            </FormFieldSelect>
        </form>
    </div>
    
    );
}