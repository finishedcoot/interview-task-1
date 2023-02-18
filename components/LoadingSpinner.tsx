import React from "react";

const LoadingSpinner: React.FC = () => {
    return (
        <div className={'w-full min-h-[40rem] flex justify-center items-center'}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingSpinner