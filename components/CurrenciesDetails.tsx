import { CurrenciesDetails } from "@/types/currencies";
import DetailsRow from "./DetailsRow";

const CurrenciesDetails: React.FC<{ items: CurrenciesDetails[] }> = ({ items }) => {
    return (
        <div className="border-primary border rounded-lg shadow-sm bg-slate-800">
            <h1 className="block w-full py-4 border-b border-primary text-center font-semibold text-primary">
                Currencies Details
            </h1>
            <table className="w-full border-collapse">
                <thead className="border">
                    <tr className="font-semibold text-lg">
                        <td className="table-cell"></td>
                        <td className="table-cell">id</td>
                        <td className="table-cell">name</td>
                        <td className="table-cell">current_price</td>
                        <td className="table-cell">price_change_percentage_24h</td>
                        <td className="table-cell">market_cap_rank</td>
                        <td className="table-cell">last_updated</td>
                    </tr>
                </thead>
                <tbody>{items && items.map((item, index) => <DetailsRow key={index} item={item} />)}</tbody>
            </table>
        </div>
    );
};

export default CurrenciesDetails;
