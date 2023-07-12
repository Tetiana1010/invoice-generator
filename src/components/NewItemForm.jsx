import React, { useState, useEffect } from "react";
import { TrashIcon, CheckIcon } from "@heroicons/react/24/solid";
import currency_list from "../data/currency";

export default function NewItemForm() {
  const [table, setTable] = useState(false);
  const [tFood, setTFood] = useState(true);
  const [items, setItems] = useState([]);
  const [totals, setTotals] = useState({});

  const initialFormData = {
    name: "",
    quantity: "",
    price: "",
    currency: "$",
    tax: 4,
    subtotal: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    calculateTotals();
  }, [items]);

  const calculateTotals = () => {
    const currencyTotals = {};
    for (const item of items) {
      if (!currencyTotals[item.currency]) {
        currencyTotals[item.currency] = 0;
      }
      currencyTotals[item.currency] += item.subtotal;
    }
    setTotals(currencyTotals);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { ...formData };
    setItems((prevItems) => [...prevItems, newItem]);
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "quantity" || name === "price") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        subtotal: prevFormData.price * prevFormData.quantity,
      }));
    }
  };

  const hideTable = () => {
    if (items.length) {
      setTFood(false);
    } else {
      setTable(true);
    }
  };

  const addNewItem = () => {
    if (items.length) {
      setTFood(true);
    } else {
      setTable(true);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 bg-slate-50 p-4 print:hidden">
        <button onClick={addNewItem}>+ Add new invoice item</button>
      </div>
      <div>
        {table || items.length ? (
          <form className="border" onSubmit={handleSubmit}>
            <table className="w-full collapse-table">
              <thead className="bg-indigo-500 text-white py-6 leading-10 rounded-lg">
                <tr>
                  <th className="border">Name</th>
                  <th className="border">Quantity</th>
                  <th className="border">Unit price / Currency</th>
                  <th className="border">Subtotal</th>
                </tr>
              </thead>
              {items.length > 0 && (
                <tbody>
                  {items.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr rowSpan="2">
                        <td className="py-1 px-2.5 border">{item.name}</td>
                        <td className="py-1 px-2.5 border">{item.quantity}</td>
                        <td className="py-1 px-2.5 border">{item.price}</td>
                        <td className="py-1 px-2.5 border text-right">
                          {item.subtotal} {item.currency}
                        </td>
                      </tr>
                      {item.description && (
                        <tr className="border">
                          <td colSpan="3" className="py-1 px-2.5">
                            {item.description}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              )}
              {tFood && (
                <tfoot className="print:hidden">
                  <tr>
                    <td className="p-1">
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </td>
                    <td className="p-1">
                      <input
                        required
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </td>
                    <td className="p-1">
                      <div className="relative">
                        <input
                          required
                          type="number"
                          name="price"
                          id="price"
                          value={formData.price}
                          min="1"
                          onChange={handleChange}
                          className="block flex-1 w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <select
                            id="currency"
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className="h-full rounded-tr-md rounded-br-md border border-gray-900/25 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-0 focus:ring-inset sm:text-sm bg-white"
                          >
                            {currency_list.map((item) => (
                              <option key={item.id} value={item.symbol}>
                               {item.code} / {item.symbol}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </td>
                    <td className="p-1 px-3 text-right">
                      {formData.subtotal
                        ? formData.subtotal + " " + formData.currency
                        : ""}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="p-1">
                      <textarea
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-gray-900/25 bg-transparent py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </td>
                    <td className="p-1 px-3">
                      <div className="flex justify-end gap-4">
                        <button onClick={hideTable}>
                          <TrashIcon className="mx-auto h-6 w-6 text-indigo-500 hover:text-indigo-600" />
                        </button>
                        <button type="submit">
                          <CheckIcon className="mx-auto h-6 w-6 text-indigo-500 hover:text-indigo-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </form>
        ) : ''}
        <ul className="my-4 flex flex-col justify-end items-end gap-2">
          <b>Total:</b>
          {Object.entries(totals).map(([currency, total]) => {
            return (
              <li key={currency}>
                {total} {currency}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}



