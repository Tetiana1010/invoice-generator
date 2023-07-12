import React, { useEffect, useState, useCallback } from "react";
import countries from './../data/countries.json';

const ReceiverForm = () => {
  const initialReceiverState = {
    receiverName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: countries[0].name,
    street: "",
    city: "",
    region: "",
    postalCode: "",
  };

  const [formOpen, setFormOpen] = useState(false);
  const [receiver, setReceiver] = useState(initialReceiverState);

  useEffect(() => {
    const storedReceiverState = JSON.parse(localStorage.getItem('storedReceiver'));
    if (storedReceiverState && storedReceiverState.receiverName) {
      setReceiver(storedReceiverState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('storedReceiver', JSON.stringify(receiver));
  }, [receiver]);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setFormOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('storedReceiver', JSON.stringify(receiver));
    setFormOpen(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReceiver((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setReceiver(initialReceiverState);
    localStorage.setItem('storedReceiver', JSON.stringify(initialReceiverState));
  };

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="col-span-3 flex flex-col gap-8">
      <div onClick={toggleForm}
        className="print:hidden rounded-lg border border-dashed border-gray-900/25 p-6"
      >
        <h3>To:</h3>
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          <div>
            <h4>Recipient name</h4>
            <p>Recipient contact details</p>
          </div>
        </div>
      </div>
      {formOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-90 bg-white p-6 space-y-4 rounded-lg overflow-y-auto z-30">
                <div className="flex justify-between">
                <h2 className="text-base font-semibold leading-7 text-gray-900">To:</h2>
                <button onClick={toggleForm}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="grid grig-cols-3 sm:grid-cols-6 gap-6">
                    <div className="sm:col-span-4">
                    <label
                        htmlFor="receiver-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Company / Receiver name{" "}
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                        <input
                        required
                        value={receiver.receiverName}
                        onChange={handleChange}
                        type="text"
                        name="receiverName"
                        id="receiver-name"
                        autoComplete="name"
                        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                        >
                        First name
                        </label>
                        <div className="mt-2">
                        <input
                            value={receiver.firstName}
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                    <div>
                        <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                        >
                        Last name
                        </label>
                        <div className="mt-2">
                        <input
                            value={receiver.lastName}
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="sm:col-span-3">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        value={receiver.email}
                        onChange={handleChange}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-3">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Phone number
                    </label>
                    <div className="mt-2">
                        <input
                        value={receiver.phone}
                        onChange={handleChange}
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-3">
                    <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Country
                    </label>
                    <div className="mt-2">
                        <select
                        value={receiver.country}
                        onChange={handleChange}
                        name="country"
                        id="country"
                        autoComplete="country-name"
                        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        >
                        {countries.map(country => (
                            <option key={country.name} value={country.name}>
                            {country.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    </div>
                    <div className="sm:col-span-3">
                    <label
                        htmlFor="street"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                        value={receiver.street}
                        onChange={handleChange}
                        type="text"
                        name="street"
                        id="street"
                        autoComplete="street"
                        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-2">
                    <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        City
                    </label>
                    <div className="mt-2">
                        <input
                        value={receiver.city}
                        onChange={handleChange}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-2">
                    <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                        value={receiver.region}
                        onChange={handleChange}
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-2">
                    <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        ZIP / Postal code
                    </label>
                    <div className="mt-2">
                        <input
                        value={receiver.postalCode}
                        onChange={handleChange}
                        type="text"
                        name="postalCode"
                        id="postal-code"
                        autoComplete="postal-code"
                        inputMode="numeric"
                        minLength="5"
                        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm"
                        />
                    </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                    type="button"
                    onClick={resetForm}
                    className="mr-2 px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-600 rounded-md shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                    >
                    Reset
                    </button>
                    <button
                    type="button"
                    onClick={toggleForm}
                    className="mr-2 px-4 py-2 text-sm font-medium text-yellow-600 bg-white border border-yellow-600 rounded-md shadow-sm hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                    Save
                    </button>
                </div>
                </form>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {receiver.firstName && receiver.lastName && (
          <p>
            <b>Receiver:</b> {receiver.firstName} {receiver.lastName}
          </p>
        )}
        {receiver.IBAN && <p><b>IBAN:</b> {receiver.IBAN}</p>}
        {receiver.street && receiver.city && receiver.postalCode && (
          <p>
            <b>Address:</b> {receiver.street} {receiver.city} {receiver.region} {receiver.postalCode} {receiver.country}
          </p>
        )}
        {receiver.email && <p><b>Email:</b> {receiver.email}</p>}
        {receiver.phone && <p><b>Phone:</b> {receiver.phone}</p>}
      </div>
    </div>
  );
};

export default ReceiverForm;
