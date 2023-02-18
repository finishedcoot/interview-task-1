import React from "react";
import DetailsRow from "@/components/DetailsRow";
import {CurrenciesDetails} from "@/types/currencies";

const DetailsTable: React.FC<{ detailsList?: CurrenciesDetails[] }> = ({detailsList}) => {
    return (
        <table className="w-full">
            <thead className="border-b text-slate-200">
            <tr className="font-semibold text-lg">
                <td className="table-cell"></td>
                <td className="table-cell text-base text-left text-slate-200">#</td>
                <td className="table-cell text-base text-left text-slate-200"
                    data-column-subject={'name'}>name
                </td>
                <td className="table-cell text-base text-right text-slate-200"
                    data-column-subject={'current_price'}> current_price
                </td>
                <td className="table-cell text-base text-right text-slate-200"
                    data-column-subject={'price_change_percentage_1h_in_currency'}> 1h
                </td>
                <td className="table-cell text-sm text-right text-slate-200"
                    data-column-subject={'price_change_percentage_24h_in_currency'}> 24h
                </td>
                <td className="table-cell text-sm text-right text-slate-200"
                    data-column-subject={'price_change_percentage_7d_in_currency'}> 7d
                </td>
                <td className="table-cell text-sm text-right text-slate-200" data-column-subject={'ath'}> ATH
                </td>
                <td className="table-cell text-sm text-right text-slate-200"
                    data-column-subject={'market_cap'}> Mkt
                    Cap
                </td>
            </tr>
            </thead>
            <tbody>{detailsList && detailsList.map((item, index) => <DetailsRow key={index} item={item}
                                                                                index={index}/>)}</tbody>
        </table>
    )
}

export default DetailsTable