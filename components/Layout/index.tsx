import {SPAEndPoints} from "@/enums/EndPoints";
import {LayoutProps} from "@/types/Layout";
import Link from "next/link";

const DefaultLayouts: LayoutProps = ({children}) => {
    return (
        <main className="container mx-auto my-4 px-24 2xl:px-10">
            <div className="w-full my-4 flex justify-around">
                <Link
                    className="px-4 py-2 rounded-md text-center font-semibold bg-blue-400 hover:bg-blue-500"
                    href={"/"}
                >
                    Currencies List
                </Link>
                <Link
                    className="px-4 py-2 rounded-md text-center font-semibold bg-lime-400 hover:bg-lime-500"
                    href={SPAEndPoints.details}
                >
                    Currencies Details
                </Link>
            </div>
            {children}
        </main>
    );
};

export default DefaultLayouts;
