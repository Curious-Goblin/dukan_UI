export const Transactions = () => {
    return <div className="flex-col p-3">
        <div className="pb-4">
            <div className="text-xl font-medium text-gray-800">Transactions | This Month</div>
        </div>
        <div className="flex gap-2">
            <div className="bg-gray-300 text-gray-700 rounded-full pl-3 pr-3 pt-1 pb-1">
                <button>
                    Payouts (33)
                </button>
            </div>
            <div className="bg-blue-700 text-white rounded-full pl-3 pr-3 pt-1 pb-1">
                Refunds(5)
            </div>
        </div>
    </div>
}