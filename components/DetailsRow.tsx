import { CurrenciesDetails } from "@/types/currencies";
import Image from "next/image";

const DetailsRow: React.FC<{ item: CurrenciesDetails }> = ({ item }) => {
    return (
        <tr className="border-b">
            <td className="table-cell">
                <Image src={item.image} alt={item.name} width={25} height={25} />
            </td>
            <td className="table-cell">{item.id}</td>
            <td className="table-cell">{item.name}</td>
            <td className="table-cell">{item.current_price}</td>
            <td className="table-cell">{item.price_change_percentage_24h}</td>
            <td className="table-cell">{item.market_cap_rank}</td>
            <td className="table-cell">{item.last_updated as string}</td>
        </tr>
    );
};

export default DetailsRow;
