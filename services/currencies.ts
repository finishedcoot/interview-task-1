import axios from "@/libs/axios"
import {ApiEndPoints} from "@/enums/EndPoints"
import { CurrenciesList, CurrenciesDetails, CurrenciesQuery } from "@/types/currencies"
import {DefaultQuery} from "@/constants/Query";

export const fetchSupportedCurrenciesList = async(): Promise<CurrenciesList> => {
    const {data} = await axios.get(ApiEndPoints.SUPPORTED_CURRENCIES_API)
    return data
}

export const fetchCurrenciesDetails = async(query:CurrenciesQuery ={vs_currency: DefaultQuery.vs_currency, page: DefaultQuery.page, per_page: DefaultQuery.per_page, price_change_percentage: DefaultQuery.price_change_percentage,}): Promise<CurrenciesDetails[]> => {
    const {data} = await axios.get(ApiEndPoints.MARKETS_API,{params:{...query}})
    return data
}