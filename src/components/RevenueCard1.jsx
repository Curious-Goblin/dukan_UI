export const RevenueCard1 = ({
    title,
    orderCount,
    amount
}) => {
    return <div>
        <div className="relative bg-blue-700 rounded-xl pt-3 pb-3 hover:bg-blue-900">
            <div className="text-gray-700 pl-5 pr-5 flex justify-center flex-col">
                <div className="flex">
                    <div className="text-blue-100">
                        {title}
                    </div>
                    <div className="ml-1 flex justify-center flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path className="text-blue-100" strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex pl-5 pr-5 justify-between pt-2">
                <div className="text-white font-semibold text-2xl ">
                    <div className="">
                        ${amount}
                    </div>
                </div>
                {orderCount ? <div className="flex cursor-pointer flex-col justify-center">
                    <div className="text-white underline">
                    <div className="flex">
                        <div className="text-blue-200">
                            {orderCount} orders
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path className="text-blue-200" strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    </div>

                </div> : null}
            </div>
            <div>
                <br></br>
                <br></br>
            </div>
            <div className="flex absolute text-sm inset-x-0 bottom-0 rounded-xl justify-between pl-5 pr-5 bg-blue-900 pt-2 pb-2">
                <div className="text-blue-100">
                    Next Payment Date:
                </div>
                <div className="text-blue-100">
                    Today, 4:00PM
                </div>
            </div>
        </div>

    </div>
}

