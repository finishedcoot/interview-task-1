import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query";
import {fetchAllCategories, fetchCurrenciesDetails} from "@/services/currencies";
import {useRouter} from "next/router";
import {SPAEndPoints} from "@/enums/EndPoints";
import {DefaultQuery} from "@/constants/Query";
import {CurrenciesQuery} from "@/types/currencies";
import LoadingSpinner from "@/components/LoadingSpinner";
import DetailsTable from "@/components/DetailsTable.";

const CurrenciesDetails: React.FC = () => {
    const router = useRouter()
    const [query, setQuery] = useState<CurrenciesQuery>({
        vs_currency: DefaultQuery.vs_currency,
        page: DefaultQuery.page,
        per_page: DefaultQuery.per_page,
        price_change_percentage: DefaultQuery.price_change_percentage,
        category: undefined
    })

    const {data: detailsList, error: DetailsError, isLoading} = useQuery({
        queryKey: [QueryKeys.CURRENCIES_DETAILS, router.asPath], queryFn: () => fetchCurrenciesDetails(query)
    })
    const {data: categoriesList, error: categoriesError} = useQuery({
        queryKey: [QueryKeys.CURRENCIES_CATEGORIES],
        queryFn: fetchAllCategories,
        staleTime: 10000
    })

    const handleCategoryChange: React.ChangeEventHandler<HTMLSelectElement> = async (e) => {
        setQuery(prev => ({...prev, category: e.target.value}))
    }

    useEffect(() => {
        router.push(SPAEndPoints.details, {
            query: {...query}
        })
    }, [query])

    if (DetailsError || categoriesError) {
        console.log(DetailsError, categoriesError)
    }
    return (
        <>
            <h1 className="block w-full py-4 border-b border-primary text-center font-semibold text-primary">
                Currencies Details
            </h1>
            {isLoading && <LoadingSpinner/>}
            {!isLoading && <>
                <div className={'flex gap-5 py-2 border-b'}>
                    <div className={'flex gap-2.5'}>
                        <label htmlFor={'categories'} className={'text-white'}>Categories:</label>
                        <select name={'categories'} id={'categories'} className={'py-1 outline-none'}
                                onChange={handleCategoryChange}>
                            {categoriesList && categoriesList.map((category, index) => <option
                                value={category.category_id}
                                key={index}>{category.name}</option>)}
                        </select>

                    </div>
                    <div className={'gap-2.5'}>

                    </div>

                </div>
                <DetailsTable detailsList={detailsList}/>
                <div className={'w-full flex justify-center items-center gap-2.5'}>
                    <button disabled={query.page === '1'}
                            onClick={() => setQuery(prev => ({...prev, page: String(Number(prev.page) - 1)}))}
                            className={'text-slate-50 disabled:text-slate-300 disabled:cursor-not-allowed font-semibold text-4xl'}>&lsaquo;
                    </button>
                    <button disabled={!detailsList?.length || detailsList?.length < Number(query.per_page)}
                            onClick={() => setQuery(prev => ({...prev, page: String(Number(prev.page) + 1)}))}
                            className={'text-slate-50 disabled:text-slate-300 disabled:cursor-not-allowed font-semibold text-4xl'}>&rsaquo;
                    </button>
                </div>
            </>}
        </>
    );
};

export default CurrenciesDetails;
