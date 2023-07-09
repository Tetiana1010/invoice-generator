export default function Price() {
    
    return (
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
                type="text"
                name="price"
                id="price"
                className="block flex-1 w-full pl-7 rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
                Currency
            </label>
            <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
            </select>
            </div>
        </div>
    )
  }
  