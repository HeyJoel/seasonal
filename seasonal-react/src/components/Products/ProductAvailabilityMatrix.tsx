import Product from "data/models/product";
import SeasonalStatus from "data/models/seasonal-status";

interface ProductAvailabilityMatrixProps {
    product: Product,
    selectedMonth: number
}

export default function ProductAvailabilityMatrix({ product, selectedMonth }: ProductAvailabilityMatrixProps) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const cellContentStyle = 'w-3 h-3 text-sm mb-1';

    return (
    <div className="my-4">
        <table className="w-full border-none table-fixed">
            <tbody>
                <tr>
                    <th className="hidden">Month</th>
                    {months.map(renderHeaderCell)}
                </tr>
                <tr>
                    <th className="hidden">Availability</th>
                    {months.map(renderAvailabilityCell)}
                </tr>
            </tbody>
        </table>
    </div>
    );

    function renderHeaderCell(monthText: string, i: number) {
        let contentStyle = cellContentStyle;

        if (selectedMonth === (i + 1)) {
            contentStyle += ' font-bold';
        }

        return (
            <td title={monthText} key={monthText} className={`text-center `}>
                <span className={contentStyle}>{monthText[0]}</span>
            </td>
        );
    }

    function renderAvailabilityCell(monthText: string, i: number) {
        let seasonalStatus = product.getSeasonalStatus(i +1);
        let statusText;
        let statusDescription;
        let statusStyle;

        switch (seasonalStatus) {
            case SeasonalStatus.Available:
                statusText = 'Available';
                statusDescription = '';
                statusStyle = 'bg-yellow-200 text-black';
                break;
            case SeasonalStatus.Best:
                statusText = 'Best';
                statusDescription = '';
                statusStyle = 'bg-lime-400 text-black';
                break;
            case SeasonalStatus.NotAvailable:
                statusText = 'Not Available';
                statusDescription = '';
                statusStyle = 'bg-gray-100 text-white';
                break;
        }

        return (
            <td className={`text-center border border-black p-0 h-4 ${statusStyle}`}
                title={statusDescription}
                key={i}>
                { selectedMonth === (i + 1) &&
                    <span className={`bg-gray-800 rounded-full w-3 h-3 inline-block`}></span>
                }
                <span className="hidden">{statusText}</span>
            </td>
        );
    }
}