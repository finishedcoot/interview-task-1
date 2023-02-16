import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query";
import {fetchSupportedCurrenciesList} from "@/services/currencies";

const CurrenciesList:React.FC = () => {
    const { data } = useQuery({ queryKey: [QueryKeys.CURRENCIES_LIST], queryFn: fetchSupportedCurrenciesList })

    return(
        <div className="border-primary border rounded-lg shadow-sm bg-slate-800">
            <h1 className="block w-full py-4 border-b border-primary text-center font-semibold text-primary">Currencies List</h1>
            <ul className="flex flex-col divide-y">
                {
                    data && data.map((currency,index)=> <li key={index} className=" px-4 py-2 text-left border-primary text-secondary hover:bg-slate-900">
                {currency}   
                </li>
                )}
            </ul>
        </div>
    )
}

export default CurrenciesList