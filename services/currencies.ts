import axios from "@/libs/axios"
import {ApiEndPoints} from "@/enums/EndPoints"
import { CurrenciesList, CurrenciesDetails, CurrenciesQuery } from "@/types/currencies"


export const fetchSupportedCurrenciesList = async(): Promise<CurrenciesList> => {
    const {data} = await axios.get(ApiEndPoints.SUPPORTED_CURRENCIES_API)
    return data
}

export const fetchCurreniesDetails = async(query:CurrenciesQuery): Promise<CurrenciesDetails[]> => {
    const {data} = await axios.get(ApiEndPoints.MARKETS_API,{params:{...query}})
    console.log(data,'dataaaa')
    return data
}