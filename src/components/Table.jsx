const TableData = [
    {
        orderID: "#234566",
        status: "Successful",
        transactionId: "TRX12345",
        refundDate: "Today, 8:45 PM",
        orderAmount: "1125.00"
    },
    {
        orderID: "#123546",
        status: "Successful",
        transactionId: "TRX19873",
        refundDate: "Today, 4:45 AM",
        orderAmount: "1250.00"
    },
    {
        orderID: "#238906",
        status: "Processing",
        transactionId: "TRX87654",
        refundDate: "Yesterday, 3:15 PM",
        orderAmount: "3456.00"
    },
    {
        orderID: "#102938",
        status: "Successful",
        transactionId: "TRX45356",
        refundDate: "Tommorow, 6:34 PM",
        orderAmount: "9876.00"
    },
    {
        orderID: "#435312",
        status: "Processing",
        transactionId: "TRX12345",
        refundDate: "Today, 2:45 AM",
        orderAmount: "7634.00"
    },
    {
        orderID: "#278659",
        status: "Processing",
        transactionId: "TRX76584",
        refundDate: "Yesterday, 9:00 AM",
        orderAmount: "3567.00"
    },
    {
        orderID: "#237897",
        status: "Successful",
        transactionId: "TRX32145",
        refundDate: "Today, 5:15 PM",
        orderAmount: "5000.00"
    },
    {
        orderID: "#876543",
        status: "Successful",
        transactionId: "TRX54321",
        refundDate: "Today, 9:07 PM",
        orderAmount: "3452.00"
    },
    {
        orderID: "#775901",
        status: "Processing",
        transactionId: "TRX76583",
        refundDate: "Tommorow, 6:09 PM",
        orderAmount: "2581.00"
    },
    {
        orderID: "#45678",
        status: "Successful",
        transactionId: "TRX12345",
        refundDate: "Today, 8:45 PM",
        orderAmount: "1450.00"
    }
]


export const Table = () => {
    return <div className="relative overflow-y-auto p-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 text-black">
            <thead className="  text-base text-gray-200 bg-gray-100 dark:bg-gray-200 text-gray-500">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Order ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Transaction ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Refund Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Order Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                {TableData.map(data =>
                    <tr key={data.orderAmount} className="bg-white border-b">
                        <td className="px-6 py-4 text-blue-700 ">
                            {data.orderID}
                        </td>
                        <td className=" flex px-6 py-4 text-lg">
                            <div className="flex justify-center flex-col pr-1">
                            <div className={`rounded-full text-green-500 w-2 h-2 ${data.status=='Successful'? 'bg-green-500':'bg-gray-500'}`}></div>
                            </div>
                            <div>
                                {data.status}
                            </div>

                        </td>
                        <td className="px-6 py-4 text-gray-500 text-lg">
                            {data.transactionId}
                        </td>
                        <td className="px-6 py-4 text-base text-gray-500">
                            {data.refundDate}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex text-gray-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div>
                                {data.orderAmount}
                            </div>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>

}

