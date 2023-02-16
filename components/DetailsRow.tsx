import { CurrenciesDetails } from "@/types/currencies";
import Image from "next/image";
import {priceFormatter} from "@/utils/price";
import {PositiveOrNegativeNumber} from "@/utils/tailwindClasses";

const DetailsRow: React.FC<{ item: CurrenciesDetails, index: number }> = ({ item, index }) => {
    return (
        <tr className="border-b">
            <td className="table-cell">
                <Image src={item.image} alt={item.name} width={25} height={25} />
            </td>
            <td className="table-cell text-sm text-left text-slate-200">{index+1}</td>
            <td className="table-cell text-sm text-left text-slate-200">{item.name}<span className={'ml-2 text-xs text-neutral-400'}>{item.symbol}</span></td>
            <td className="table-cell text-sm text-right text-slate-200">{'$' + priceFormatter(item.current_price)}</td>
            <td className={`table-cell text-sm text-right ${PositiveOrNegativeNumber(item.price_change_percentage_1h_in_currency)}`}>{item.price_change_percentage_1h_in_currency}</td>
            <td className={`table-cell text-sm text-right ${PositiveOrNegativeNumber(item.price_change_percentage_24h_in_currency)}`}>{item.price_change_percentage_24h_in_currency}</td>
            <td className={`table-cell text-sm text-right ${PositiveOrNegativeNumber(item.price_change_percentage_7d_in_currency)}`}>{item.price_change_percentage_7d_in_currency}</td>
            <td className={'table-cell text-sm text-right text-slate-200'}>{item.ath}</td>
            <td className={`table-cell text-sm text-right ${PositiveOrNegativeNumber(item.market_cap)}`}>${priceFormatter(item.market_cap)}</td>
        </tr>
    );
};

export default DetailsRow;
