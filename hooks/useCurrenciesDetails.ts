import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query";
import {fetchCurrenciesDetails} from "@/services/currencies";
import {useState} from "react";

const useCurrenciesDetails = () => {
    const { data } = useQuery({ queryKey: [QueryKeys.CURRENCIES_DETAILS], queryFn:()=>fetchCurrenciesDetails()})
    const [state, setState] = useState(data);

    const sortByColumn = (column: string) => {
        const sortedData = data?.sort((detail,detail2)=> detail[column] - detail2[column])
        setState()
    }

    return { state }
}