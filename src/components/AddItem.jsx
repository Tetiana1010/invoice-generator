import { useState } from "react"
import { TrashIcon, CheckIcon } from "@heroicons/react/24/solid"
import Price from "./Price"

export default function AddItem(){
    const [table, setTable] = useState(false);
    const [items, setItems] = useState([]);


    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [tax, setTax] = useState(4);
    const [description, setDescription] = useState('');
    const [subtotal, setSubtotal] = useState(undefined) 


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('A name was submitted: ');
        const item = {name: name, quantity: quantity, tax: tax, description: description, subtotal: subtotal};
        setItems(items => [...items, item])
        console.log(items)
    }

    return (
        // <div className="flex flex-col gap-4">
        //     <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 bg-slate-50 p-4 print:hidden">
        //         <button onClick={() => setTable(true)}>+ Add new invoice item</button>
        //     </div>
        //     <>
        //     {
        //         table 
        //         &&             
        //         <form className="border" onSubmit={handleSubmit}>
        //             <table className="w-full">
        //                 <thead className="bg-indigo-500 text-white py-6 leading-10 rounded-lg">
        //                     <tr>
        //                         <th>Name</th>
        //                         <th>Quantity</th>
        //                         <th>Unit price / Currency</th>
        //                         <th>Tax</th>
        //                         <th>Subtotal</th>
        //                     </tr>
        //                 </thead>

        //                 {items.length > 0 && 
        //                     <tbody>
        //                         {items.map(item => <>
        //                             <tr>
        //                                 <td className="p-1.5">{item.name}</td>
        //                                 <td className="p-1.5">{item.quantity}</td>
        //                                 <td className="p-1.5">{item.price}</td>
        //                                 <td className="p-1.5">{item.tax}</td>
        //                                 <td className="p-1.5">{item.subtotal}</td>
        //                             </tr>
        //                             <tr>
        //                                 <td colSpan="4"></td>
        //                                 <td className="p-1.5"></td>
        //                             </tr>
        //                         </>) }
        //                     </tbody>
        //                 }

        //                 <tfoot className="print:hidden">
        //                     <tr>
        //                         <td className="p-1.5">
        //                             <input 
        //                                 required
        //                                 type="text"
        //                                 name="name"
        //                                 placeholder="Name" 
        //                                 value={name}
        //                                 onChange={(e) => setName(e.target.value)}
        //                                 className="block flex-1 w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        //                             />
        //                         </td>
        //                         <td className="p-1.5">
        //                             <input 
        //                                 required
        //                                 type="number"
        //                                 name="quantity"
        //                                 placeholder="Quantity" 
        //                                 value={quantity}
        //                                 onChange={(e) => setQuantity(e.target.value)}
        //                                 className="block flex-1 w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        //                             />
        //                         </td>
        //                         <td className="p-1.5">
        //                             <Price />
        //                         </td>
        //                         <td className="p-1.5">
        //                             <select className="block flex-1 w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
        //                                 <option>Non Taxable</option>
        //                                 <option>+ New Tax Rate</option>
        //                             </select>
        //                         </td>
        //                         <td className="p-1.5">
        //                             <div className="flex justify-center"></div>
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td colSpan="4" className="p-1.5">
        //                             <textarea 
        //                                 type="text" 
        //                                 name="description"
        //                                 placeholder="Description" 
        //                                 value={description}
        //                                 onChange={(e) => setDescription(e.target.value)}
        //                                 className="block flex-1 w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
        //                             />
        //                         </td>
        //                         <td className="p-1.5">
        //                             <div className="flex justify-center items-center gap-3">
        //                                 <button type="submit">
        //                                     <CheckIcon className="mx-auto h-6 w-6 text-indigo-500" />
        //                                 </button>
        //                                 <button onClick={() => setTable(false)}>
        //                                     <TrashIcon className="mx-auto h-6 w-6 text-indigo-500"/>
        //                                 </button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 </tfoot>
        //             </table>
        //         </form>
        //     }
        //     </>
        // </div>
        <div className="flex flex-col gap-4">
  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 bg-slate-50 p-4 print:hidden">
    <button onClick={() => setTable(true)}>+ Add new invoice item</button>
  </div>
  <>
    {table && (
      <form className="border" onSubmit={handleSubmit}>
        <table className="w-full" style={{ borderCollapse: 'collapse' }}>
          <thead className="bg-indigo-500 text-white py-6 leading-10 rounded-lg">
            <tr>
              <th className="border">Name</th>
              <th className="border">Quantity</th>
              <th className="border">Unit price / Currency</th>
              <th className="border">Tax</th>
              <th className="border">Subtotal</th>
            </tr>
          </thead>
          {items.length > 0 && (
            <tbody>
              {items.map((item) => (
                <>
                  <tr>
                    <td className="p-1 border">{item.name}</td>
                    <td className="p-1 border">{item.quantity}</td>
                    <td className="p-1 border">{item.price}</td>
                    <td className="p-1 border">{item.tax}</td>
                    <td className="p-1 border">{item.subtotal}</td>
                  </tr>
                  <tr>
                    <td colSpan="4" className="p-1">
                        {item.description}
                    </td>
                    <td className="p-1"></td>
                  </tr>
                </>
              ))}
            </tbody>
          )}
          <tfoot className="print:hidden">
            <tr>
              <td className="p-1">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </td>
              <td className="p-1">
                <input
                  required
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="block w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </td>
              <td className="p-1">
                <Price />
              </td>
              <td className="p-1">
                <select className="block w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                  <option>Non Taxable</option>
                  <option>+ New Tax Rate</option>
                </select>
              </td>
              <td className="p-1">
                <div className="flex justify-center"></div>
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="p-1">
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </td>
              <td className="p-1">
                <div className="flex justify-center items-center gap-3">
                  <button type="submit">
                    <CheckIcon className="mx-auto h-6 w-6 text-indigo-500" />
                  </button>
                  <button onClick={() => setTable(false)}>
                    <TrashIcon className="mx-auto h-6 w-6 text-indigo-500" />
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    )}
  </>
</div>

    )
}
