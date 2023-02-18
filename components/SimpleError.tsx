import React from "react";
import {PageError} from "@/types/errors";

const SimpleError:React.FC<{error: PageError['error'] }> = ({error}) => {
    return(
        <div className={'w-full min-h-[40rem] flex flex-col items-center justify-center'}>
            <h1>Error:{error?.message}</h1>
            <span>Status:{error?.status}</span>
        </div>
    )
}

export default SimpleError