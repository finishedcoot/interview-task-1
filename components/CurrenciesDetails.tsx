import { CurrenciesDetails } from "@/types/currencies";
import DetailsRow from "@/components/DetailsRow";
import React from "react";

const CurrenciesDetails: React.FC<{ items: CurrenciesDetails[] }> = ({ items }) => {

    const changeOrderByType = (e:any) => {
        console.log(e.target.dataset['columnSubject'])

    }

    return (
        <div className="border-primary border rounded-lg shadow-sm bg-slate-800">
            <h1 className="block w-full py-4 border-b border-primary text-center font-semibold text-primary">
                Currencies Details
            </h1>
            <table className="w-full border-collapse">
                <thead className="border text-slate-200">
                    <tr className="font-semibold text-lg">
                        <td className="table-cell"></td>
                        <td className="table-cell text-base text-left text-slate-200"></td>
                        <td className="table-cell text-base text-left text-slate-200 cursor-pointer" data-column-subject={'name'} onClick={(e)=>changeOrderByType(e)}> name</td>
                        <td className="table-cell text-base text-right text-slate-200 cursor-pointer" data-column-subject={'current_price'} onClick={(e)=>changeOrderByType(e)}> current_price</td>
                        <td className="table-cell text-base text-right text-slate-200 cursor-pointer" data-column-subject={'1h'} onClick={(e)=>changeOrderByType(e)}> 1h</td>
                        <td className="table-cell text-sm text-right text-slate-200 cursor-pointer" data-column-subject={'24h'} onClick={(e)=>changeOrderByType(e)}> 24h</td>
                        <td className="table-cell text-sm text-right text-slate-200 cursor-pointer" data-column-subject={'7d'} onClick={(e)=>changeOrderByType(e)}> 7d</td>
                        <td className="table-cell text-sm text-right text-slate-200 cursor-pointer" data-column-subject={'ath'} onClick={(e)=>changeOrderByType(e)}> ATH</td>
                        <td className="table-cell text-sm text-right text-slate-200 cursor-pointer" data-column-subject={'market_cap'} onClick={(e)=>changeOrderByType(e)}> Mkt Cap</td>
                    </tr>
                </thead>
                <tbody>{items && items.map((item, index) => <DetailsRow key={index} item={item} index={index} />)}</tbody>
            </table>
        </div>
    );
};

export default CurrenciesDetails;
