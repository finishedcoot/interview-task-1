import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query";
import {fetchSupportedCurrenciesList} from "@/services/currencies";
import React from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import {AxiosError} from "axios";

const CurrenciesList: React.FC = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: [QueryKeys.CURRENCIES_LIST],
        queryFn: fetchSupportedCurrenciesList
    })

    if (isError && error instanceof AxiosError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            {isLoading && <LoadingSpinner/>}
            {
                !isLoading && <div>
                    <h1 className="border-b border-primary py-4 text-center font-semibold text-primary">Currencies List</h1>
                    <ul className="flex flex-col divide-y">
                        {
                            data && data.map((currency, index) =>
                                <li key={index}
                                    className=" px-4 py-2 text-left border-primary text-secondary hover:bg-slate-700">
                                    {currency}
                                </li>
                            )}
                    </ul>
                </div>
            }
        </>
    )
}

export default CurrenciesList