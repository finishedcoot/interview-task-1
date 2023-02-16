import axios from "@/libs/axios"
import {ApiEndPoints} from "@/enums/EndPoints"
import { CurrenciesList, CurrenciesDetails, CurrenciesQuery } from "@/types/currencies"

export const fetchSupportedCurrenciesList = async(): Promise<CurrenciesList> => {
    const {data} = await axios.get(ApiEndPoints.SUPPORTED_CURRENCIES_API)
    return data
}

export const fetchCurrenciesDetails = async(query:CurrenciesQuery): Promise<CurrenciesDetails[]> => {
    const {data} = await axios.get(ApiEndPoints.MARKETS_API,{params:{...query}})
    return data
}