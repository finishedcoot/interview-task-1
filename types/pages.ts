import {PageError} from '@/types/errors'
import {CurrenciesDetails, CurrenciesList} from '@/types/currencies'

export interface HomePage extends PageError { 
        currencies: CurrenciesList
}

export interface DetailsPage extends PageError {
        details: CurrenciesDetails[]
}