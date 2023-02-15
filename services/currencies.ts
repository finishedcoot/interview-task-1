import axios from "@/libs/axios"
import EndPoints from "@/enums/EndPoints"
import { CurrenciesList, CurrenciesDetails, CurrenciesQuery } from "@/types/currencies"

export const fetchCurrenciesList = async(): Promise<CurrenciesList> => {
    const {data} = await axios.get(EndPoints.SIMPLE_API)
    return data
}

export const fetchCurreniesDetails = async(query:CurrenciesQuery): Promise<CurrenciesDetails[]> => {
    const {data} = await axios.get(EndPoints.MARKETS_API,{params:{...query}})
    return data
}