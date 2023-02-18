export type CurrenciesList = string[]

export interface CurrenciesDetails {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    ath: number,
    ath_change_percentage: number,
    ath_date: string | Date,
    atl: number,
    atl_change_percentage: number,
    atl_date: string | Date,
    roi: null,
    last_updated: string | Date,
    price_change_percentage_7d_in_currency: number,
    price_change_percentage_24h_in_currency: number,
    price_change_percentage_1h_in_currency: number
}

export interface CurrenciesQuery {
    vs_currency?: string | string[]
    ids?: string
    category?: string
    page?: string | string[]
    per_page?: string | string[]
    price_change_percentage?: string | string[]
}

export interface CurrencyCategory {
    category_id:string
    name:string
}